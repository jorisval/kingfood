const express = require('express');
const bookingCtrl = require('../controllers/booking');
const router = express.Router();

router.post('/', bookingCtrl.createBooking);
router.get('/:bookingId', bookingCtrl.getBookingById);
router.get('/', bookingCtrl.getAllBookings);
router.put('/:bookingId', bookingCtrl.updateBooking);
router.delete('/:bookingId', bookingCtrl.deleteBooking);

module.exports = router;