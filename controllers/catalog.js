const Product = require('../models/Product');
const Option = require('../models/Option');
const Review = require('../models/Review');
const fs = require('fs');

exports.createProduct = (req, res, next) => {
    const {name, description, price, discountedPrice, category, options, stock} = req.body;
    const images = req.files.map(file => {
        return req.protocol+'://'+req.get('host')+'/images/products/'+file.filename
    });
    const product = new Product(options ? {
        name, description, category, images, stock
    } : {
        name, description, price, discountedPrice, category, images, stock
    });
    product.save()
    .then((product) => { 
        if (!options) {
            res.status(201).json({ message: "Product saved without options!" });
        } else {
            let parsedOptions;
            try {
                parsedOptions = JSON.parse(options);
            } catch (error) {
                console.error('Invalid JSON format for options:', error);
                return res.status(400).json({ error: 'Invalid JSON format for options' });
            }
            const promisesOptions = parsedOptions.map((option) => {
                const {name, values, price, discountedPrice} = option;
                const optionModel = new Option({ product: product._id, name, values, price, discountedPrice })
                return optionModel.save();
            })
            Promise.all(promisesOptions)
            .then((savedOptions) => {
                product.options = savedOptions.map((option) => option._id);
                product.save()
                .then(() => res.status(201).json({ message: "Product saved!" }))
                .catch((error) => res.status(400).json({ error }));
            })
            .catch(error => {
                console.error('Error saving options:', error);
                res.status(400).json({ error })
            });
        }
    })
    .catch(error => {
        console.error('Error saving options 2:', error);
        res.status(400).json({ error })
    });
};


exports.getOneProduct = (req, res, next) => {
    Product.findOne({ _id: req.params.id })
    .populate('options')
    .then((product) => {
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(product)
    })
    .catch(error => res.status(404).json({ error }));
};

exports.getProducts = (req, res) => {
    const productIds = req.body.productIds;

    if (!Array.isArray(productIds)) {
        return res.status(400).json({ error: 'productIds must be an array' });
    }

    Product.find({ _id: { $in: productIds } })
        .populate('options')
        .then(products => {
            res.status(200).json(products);
        })
        .catch(error => res.status(500).json({ error }));
}

exports.modifyProduct = (req, res, next) => {
    const {name, description, price, discountedPrice, category, stock} = req.body;
    const images = req.files ? (
        req.files.map(file => {
        return req.protocol+'://'+req.get('host')+'/images/products/'+file.filename
    })) : '';
    const productObject = req.files ? {
        name, description, price, discountedPrice, category, images, stock
    } : { 
        name, description, price, discountedPrice, category, stock 
    };
    Product.findOne({ _id: req.params.productId })
    .then(() => {
        Product.updateOne({ _id: req.params.productId }, { ...productObject, _id: req.params.productId })
        .then(() => res.status(200).json({ message: 'Product updated!' }))
        .catch(error => res.status(401).json({ error }));
    })
    .catch(error => res.status(400).json({ error }));
};


exports.modifyOption = (req, res) => {
    const optionId = req.params.optionId;
    const { name, values, price, discountedPrice } = req.body;
  
    Option.findByIdAndUpdate(optionId, { name, values, price, discountedPrice }, { new: true })
      .then(option => {
        if (!option) {
          return res.status(404).json({ error: 'Option not found' });
        }
        res.status(200).json({ message: 'Option updated !' });
      })
      .catch(error => res.status(400).json({ error }));
};


exports.deleteProduct = (req, res, next) => {
    const productId = req.params.productId;

    // Find the product by ID
    Product.findOne({ _id: productId })
    .then(product => {
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Delete each image associated with the product
        const imagesUrl = product.images;
        for(const imageUrl of imagesUrl) {
            const filename = imageUrl.split('/images/products/')[1];
            fs.unlink('images/products/'+ filename, () => {})
        }

        // Delete the product from the database
        Product.findByIdAndDelete(productId)
        .then(() => {
            // Delete all options associated with the product
            Option.deleteMany({ product: productId })
            .then(() => res.status(200).json({ message: 'Product and options deleted' }))
            .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(400).json({ error }))
    })
    .catch(error => res.status(401).json({error }));
};

// DELETE an option
exports.deleteOption = (req, res) => {
    const optionId = req.params.optionId;
  
    Option.findByIdAndDelete(optionId)
      .then(option => {
        if (!option) {
          return res.status(404).json({ error: 'Option not found' });
        }
        res.status(200).json({ message: 'Option deleted' });
    })
    .catch(error => res.status(400).json({ error }));
};


exports.getAllProducts = async (req, res, next) => {
    try {
        let products = await Product.find().populate('options').lean();

        // calculate the average rating for each product and create averageRating property to each of them
        for (let product of products) {
            let reviews = await Review.find({ product: product._id });
            if (reviews.length > 0) {
                let totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
                product.averageRating = totalRating / reviews.length;
            } else {
                product.averageRating = 0;
            }
        }
        
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ error });
    }
};

exports.searchProducts = (req, res) => {
    const query = req.query.q;  // assuming 'q' is the query parameter for the search string

    if (!query) {
        return res.status(400).json({ error: 'Missing query parameter' });
    }

    // Perform a text search
    Product.find({ $text: { $search: query } })
        .populate('options')
        .then(products => {
            res.status(200).json(products);
        })
        .catch(error => {
            console.error('Error during search:', error);
            res.status(500).json({ error });
        });
};
