import { response, request } from "express"
import User from "../models/user.js"
import bcryptjs from 'bcryptjs'

const getUsers = (req = request,  res = response) => {
    const query = req.query;
    res.json({
        msg: 'get API - controller',
        query: query
    })
}


const putUsers = (req,  res = response) => {
    const id = req.params.id;
    res.json({
        msg: 'put API - controller',
        id: id
    })
}


const postUsers = async (req,  res = response) => {
    const {name, email, password, role} = req.body;
    const user = new User({name, email, password, role});


    // Check if the email exists
    

    // Encrypt password
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    // Save in DB
    await user.save()

    res.status(201).json({
        user
    })
}


const deleteUsers = (req,  res = response) => {
    res.json({
        msg: 'delete API - controller',
       // ok: true
    })
}


export {
    getUsers,
    putUsers,
    postUsers,
    deleteUsers
}