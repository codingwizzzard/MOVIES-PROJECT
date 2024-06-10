const userDB = require("../models/userSchema") 
const fs = require('fs')

const indexPage = async (req, res) => {
    try {
        let data = await userDB.find({})
        res.render('index', { data })
    } catch (error) {
        console.log(error)
        return false
    }
}

const add = async (req, res) => {
    try {
        res.render('add')
    } catch (error) {
        console.log(error)
        return false
    }
}

const addPage = async (req, res) => {
    const { name, description, time, rating, genre, id } = req.body 
    let image  

    try {
        if (id) {
            if (req.file) {
                image = req.file.path  
                let data = await userDB.findById(id) 
                fs.unlinkSync(data.image) 

                await userDB.findByIdAndUpdate(id, { name, description, time, rating, image, genre }) 
                res.redirect('/') 
            } else {
                let data = await userDB.findById(id) 
                image = data.image  
                await userDB.findByIdAndUpdate(id, { name, description, time, rating, image, genre }) 

                res.redirect('/') 
            }
        } else {
            if (req.file) {
                image = req.file.path  
            }
            await userDB.create({ name, description, time, rating, image, genre }) 
            res.redirect('/') 
        }
    } catch (error) {
        console.log(error) 
        return false 
    }
} 


const editData = async (req, res) => {
    let { id } = req.params
    try {
        let data = await userDB.findById(id)
        res.render('edit', { data })
    } catch (err) {
        console.log(err)
        return false
    }
}

const edittbl = async (req, res) => {
    try {
        let data = await userDB.find({})
        res.render('edittbl', { data })
    } catch (error) {
        console.log(error)
        return false
    }
}

const deleteData = async (req, res) => {
    let { id } = req.params
    try {
        let data = await userDB.findById(id)
        await fs.unlinkSync(data.image)

        await userDB.findByIdAndDelete(id)
        res.redirect('/edittbl')
    } catch (error) {
        console.log(error)
        return false
    }
}

module.exports = { indexPage, add, addPage, editData, edittbl, deleteData }