const { response, request } = require('express');

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

    //quey params
    const queryParams = req.query;

    res.json({
        message: 'put',
        id,
        queryParams
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
