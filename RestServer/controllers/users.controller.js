const { response, request } = require('express');
const User = require('../models/user');

const getUsers = (req, res = response) => {
  res.json({
    message: "Ok",
  });
}

const postUsers = (req, res = response) => {
    const { name, age } = req.body;

    res.json({
        message: 'post',
        name
    })
}

const putUsers = (req = request, res = response) => {
    //segment params
    const { id } = req.params;
    const user = new User(req.body);

    //quey params
    const queryParams = req.query;

    res.json({
        message: 'put',
        user
    })
}

const deleteUsers = (req, res = response) => {
    res.json({
        message: 'delete'
    })
}

module.exports = {
    getUsers,
    postUsers,
    putUsers,
    deleteUsers
}
