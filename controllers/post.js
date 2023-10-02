const Post = require('../models/Post');
const fs = require('fs');
const PostUser = require('../models/Post-user');
const PostComment = require('../models/Post-comment');

exports.createPost = (req, res, next) => {
    const postObject = req.body;
    const post = new Post({
        ...postObject,
        imageUrl: req.protocol+'://'+req.get('host')+'/images/posts/'+req.file.filename
    });
    post.save()
    .then(() => res.status(201).json({ message: 'Post saved !'}))
    .catch(error => res.status(400).json({ error }));
}

exports.getOnePost = (req, res, next) => {
    Post.findOne({ _id: req.params.id })
    .then(post => res.status(200).json(post))
    .catch(error => res.status(404).json({ error }));
}

exports.modifyPost = (req, res, next) => {
    const postObject = req.file ? {
        ...JSON.parse(req.body.post),
        imageUrl: req.protocol+'://'+req.get('host')+'/images/posts/'+req.file.filename
    } : { ...req.body };
    Post.findOne({ _id: req.params.id })
    .then(() => {
        Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Post modified !' }))
        .catch(error => res.status(401).json({ error }));
    })
    .catch(error => res.status(400).json({ error }));
}

exports.deletePost = (req, res, next) => {
    Post.findOne({ _id: req.params.id })
    .then(post => {
        const filename = post.imageUrl.split('/images/posts/')[1];
        fs.unlink('images/posts/'+ filename, () => {
            Post.deleteOne({_id: req.params.id})
            .then(() => res.status(200).json({ message: 'Post deleted!' }))
            .catch(error => res.status(401).json({ error }));
        })
    })
    .catch(error => res.status(401).json({error }));
}

exports.getAllPosts = (req, res, next) => {
    Post.find()
    .then(posts => res.status(200).json(posts))
    .catch(error => res.status(400).json({ error }));
}

exports.createPostComment = (req, res, next) => {
    const postCommentObject = req.body;
    const postComment = new PostComment(postCommentObject);
    postComment.save()
    .then(() => res.status(201).json({ message: 'Post comment saved !'}))
    .catch(error => res.status(400).json({ error }));
}

exports.deleteComment = (req, res, next) => {
    PostComment.findByIdAndDelete(req.params.commentId)
    .then(() => res.status(200).json({ message: 'Comment deleted!' }))
    .catch(error => res.status(400).json({ error }));
};

exports.getPostComments = (req, res, next) => {
    PostComment.find({ post: req.params.postId })
    .populate('author')
    .then(comments => res.status(200).json(comments))
    .catch(error => res.status(400).json({ error }));
}

exports.getPostUsers = (req, res, next) => {
    PostUser.find()
    .then(users => res.status(200).json(users))
    .catch(error => res.status(400).json({ error }));
}


  