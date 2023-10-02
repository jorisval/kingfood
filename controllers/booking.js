const Booking = require('../models/Booking');

//Create a new Booking document
exports.createBooking = (req, res) => {
    const {person, email, time, message} = req.body;
    const booking = new Booking({ 
        email: email, 
        numberPerson: person,
        time: time, 
        message: message  
    });
    booking.save()
    .then(() => res.status(200).json({ message: 'Booking saved!' }))
    .catch((error) => res.status(400).json(error));
}

//Return all Booking documents
exports.getAllBookings = (req, res) => {
    Booking.find()
    .then(bookings => {
        res.status(200).json(bookings);
    })
    .catch(error => {
        res.status(400).json(error);
    });
};

//Return a single Booking document by its ID
exports.getBookingById = (req, res) => {
    const bookingId = req.params.bookingId;

    Booking.findById(bookingId)
    .then(booking => {
        res.status(200).json(booking);
    })
    .catch(error => {
        res.status(400).json(error);
    });
};

//Update an existing Booking document
exports.updateBooking = (req, res) => {
    const {person, email, time, message} = req.body;
    const bookingId = req.params.bookingId;

    Booking.findByIdAndUpdate(bookingId, 
        {
            email: email, 
            numberPerson: person,
            time: time, 
            message: message
        }, 
        { new: true })
    .then(updatedBooking => {
        res.status(200).json(updatedBooking);
    })
    .catch(error => {
        res.status(400).json(error);
    });
};

//Delete an existing Booking document
exports.deleteBooking= (req, res) => {
    const bookingId = req.params.bookingId;

    Booking.findByIdAndDelete(bookingId)
    .then(() => {
        res.status(200).json({ message: 'booking deleted!' });
    })
    .catch(error => {
        res.status(400).json(error);
    });
};
