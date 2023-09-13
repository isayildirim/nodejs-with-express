exports.getAllCountries = (req, res) => {
    try {
        const countries = require('../jsons/countries.json')
        return countries
    } catch (error) {
        throw new Error(error)
    }
}
exports.getCityByCountryId = (id) => {
    try {
        const citiesArray = require('../jsons/cities.json')
        const cities = citiesArray.filter((item) => item.country_id === id)
        return cities

    } catch (error) {
        throw new Error(error)
    }
}