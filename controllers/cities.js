const {
    fetchPlacesByCity,
    fetchRestaurantsByCity
} = require('../models/cities');
const manchesterData = require('../utils/manchester.json');
const liverpoolData = require('../utils/liverpool.json');
const leedsData = require('../utils/leeds.json');
const { addMapLink } = require('../utils/utils.js');

exports.getPlacesByCity = (req, res, next) => {
    const { cityName } = req.params;
    fetchPlacesByCity(cityName)
    .then(items => {
        console.log(items)
        // const items = places.items.map((item, index) => {
        //     const mapLink = addMapLink(item, cityName);
        //     if (cityName === 'leeds') {
        //         return items;
        //     } else {
        //         return {
        //             position: item.position,
        //             title: item.title,
        //             imageUrl: "",
        //             description: "",
        //             city: cityName,
        //             link: mapLink
        //         }
        //     }
        // })
        res.send({items});
    })
    .catch(err => next(err));
}

exports.getRestaurantsByCity = (req, res, next) => {
    const { cityName } = req.params;
    fetchRestaurantsByCity(cityName)
    .then(({items}) => res.send({items}))
    .catch(err => next(err));
}

