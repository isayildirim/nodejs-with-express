const utils = require("../utils");
const personDal = require("../dal");

exports.signIn = async (req) => {
    try {
        const {
            email,
            password,
        } = req.body

        const _password = utils.helpers.hashToPassword(password)
        const json = await personDal.person.findOne({email, password: _password})
        if (json) {
            const token = utils.helpers.createToken(json._id, json.name + "" + json.surname, json.email)
            return {fullName: json.name + "" + json.surname, id: json._id, email: json.email, token}
        }
        return null

    } catch (error) {
        throw new Error(error)
    }
}
