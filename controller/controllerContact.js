const Contact = require('../model/Contact')

const addContact = async (req, res) => {
    try {
        const contact = new Contact(req.body)
        await contact.insertContact(contact, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const findAllContact = async(req, res) => {
    try {
        await Contact.selectAllContact(res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const findContact = async (req, res) => {
    try {
        await Contact.selectContact(req.params.id, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const updateContact = async (req, res) => {
    try {
        const contact = new Contact(req.body)
        contact.updateContact(contact, req.params.id, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const deleteContact = async(req, res) => {
    try {
        await Contact.removerContact(req.params.id, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

module.exports = {addContact, findAllContact, deleteContact, findContact, updateContact}