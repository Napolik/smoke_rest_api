'use strict';
const connectToDatabase = require('./db');
const Times = require('./times.model.js');
const Users = require('./users.model.js');
require('dotenv').config({ path: './variables.env' });

module.exports.createUser = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;

    connectToDatabase().then(() => {
        Users.create(JSON.parse(event.body))
            .then(user =>
                callback(null, {
                    statusCode: 200,
                    body: JSON.stringify(user)
                })
            )
            .catch(err =>
                callback(null, {
                    statusCode: err.statusCode || 500,
                    headers: {
                        'Content-Type': 'text/plain'
                    },
                    body: 'Could not create the note.'
                })
            );
    });
};

module.exports.getOneTime = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;

    connectToDatabase().then(() => {
        Times.findById(event.pathParameters.id)
            .then(time =>
                callback(null, {
                    statusCode: 200,
                    body: JSON.stringify(time)
                })
            )
            .catch(err =>
                callback(null, {
                    statusCode: err.statusCode || 500,
                    headers: {
                        'Content-Type': 'text/plain'
                    },
                    body: 'Could not fetch the note.'
                })
            );
    });
};

module.exports.getOneUser = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;

    connectToDatabase().then(() => {
        Users.findById(event.pathParameters.id)
            .then(user =>
                callback(null, {
                    statusCode: 200,
                    body: JSON.stringify(user)
                })
            )
            .catch(err =>
                callback(null, {
                    statusCode: err.statusCode || 500,
                    headers: {
                        'Content-Type': 'text/plain'
                    },
                    body: 'Could not fetch the note.'
                })
            );
    });
};

module.exports.getAllTimes = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;

    connectToDatabase().then(() => {
        Times.find()
            .then(times =>
                callback(null, {
                    statusCode: 200,
                    body: JSON.stringify(times)
                })
            )
            .catch(err =>
                callback(null, {
                    statusCode: err.statusCode || 500,
                    headers: {
                        'Content-Type': 'text/plain'
                    },
                    body: 'Could not fetch the notes.'
                })
            );
    });
};

module.exports.getAllUsers = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;

    connectToDatabase().then(() => {
        Users.find()
            .then(users =>
                callback(null, {
                    statusCode: 200,
                    body: JSON.stringify(users)
                })
            )
            .catch(err =>
                callback(null, {
                    statusCode: err.statusCode || 500,
                    headers: {
                        'Content-Type': 'text/plain'
                    },
                    body: 'Could not fetch the notes.'
                })
            );
    });
};

module.exports.updateUser = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;

    connectToDatabase().then(() => {
        Users.findByIdAndUpdate(event.pathParameters.id, JSON.parse(event.body), {
                new: true
            })
            .then(user =>
                callback(null, {
                    statusCode: 200,
                    body: JSON.stringify(user)
                })
            )
            .catch(err =>
                callback(null, {
                    statusCode: err.statusCode || 500,
                    headers: {
                        'Content-Type': 'text/plain'
                    },
                    body: 'Could not fetch the notes.'
                })
            );
    });
};

module.exports.deleteUser = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;

    connectToDatabase().then(() => {
        Users.findByIdAndRemove(event.pathParameters.id)
            .then(user =>
                callback(null, {
                    statusCode: 200,
                    body: JSON.stringify({
                        message: 'Removed note with id: ' + user._id,
                        user: user
                    })
                })
            )
            .catch(err =>
                callback(null, {
                    statusCode: err.statusCode || 500,
                    headers: {
                        'Content-Type': 'text/plain'
                    },
                    body: 'Could not fetch the notes.'
                })
            );
    });
};
