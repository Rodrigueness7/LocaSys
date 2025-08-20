const Contact = require('../model/Contact')

const add = async (req, res) => {
    try {
        const contact = new Contact(req.body)
        await contact.insert(contact, res, req)
    } catch (error) {
        res.status(400).json({ errorMessage: error.message })
    }
}

const findAll = async (req, res) => {
    try {
        await Contact.selectAll(res)
    } catch (error) {
        res.status(400).json({ errorMessage: error.message })
    }
}

const findId = async (req, res) => {
    try {
        await Contact.selectId(req.params.id, res)
    } catch (error) {
        res.status(400).json({ errorMessage: error.message })
    }
}

const update = async (req, res) => {
    try {
        const contact = new Contact(req.body)
        await contact.update(contact, req, res)
    } catch (error) {
        res.status(400).json({ errorMessage: error.message })
    }
}

const inactivate = async (req, res) => {
    try {
        await Contact.inactivate(req, req.body.deletionDate, res)
    } catch (error) {
        res.status(400).json({ errorMessage: error.message })
    }
}

module.exports = { add, findAll, inactivate, findId, update }