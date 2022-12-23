import { response, request } from "express"




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


const postUsers = (req,  res = response) => {
    const body = req.body;
    res.status(201).json({
        msg: 'post API - controller',
        body: body
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