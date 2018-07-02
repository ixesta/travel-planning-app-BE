const { getSchedule } = require('../utils/getSchedule');

exports.sendItinerary = (req, res, next) => {
    const { startPoint, activities, noPerDay } = req.body;
    console.log(typeof getSchedule);
    return getSchedule(startPoint, activities, noPerDay)
        .then(schedule => res.send(schedule))
        .catch(err => {
            console.log(err);
            next(err);
        });
}