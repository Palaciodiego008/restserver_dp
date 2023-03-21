import { response, request } from "express"
import User from "../models/user.js"


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
    const body = req.body;
    const user = new User(body);

    await user.save()

    res.status(201).json({
        msg: 'post API - controller',
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