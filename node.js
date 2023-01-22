
exports.createHallBooking = (req, res) => {
  const { hall_name, hall_location, hall_capacity, hall_type, start_date, end_date } = req.body;

  let newHallBooking = {
    hall_name,
    hall_location,
    hall_capacity,
    hall_type,
    start_date,
    end_date
  };

  HallBooking.create(newHallBooking, (err, createdHallBooking) => {
    if (err) {
      return res.status(500).send({ msg: "Error creating Hall Booking" });
    }
    return res.status(201).send(createdHallBooking);
  });
};

// Get Hall Booking
exports.getHallBooking = (req, res) => {
  HallBooking.find({}, (err, hallBookings) => {
    if (err) {
      return res.status(500).send({ msg: "Error getting Hall Booking" });
