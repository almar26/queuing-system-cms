"use strict"

module.exports = {
    routes: [
        {
            method: "GET",
            path: '/now-serving/test',
            handler: 'custom-controller.testApi'
        },
        {
            method: "PUT",
            path: '/now-serving/update/:cashier_number',
            handler: 'custom-controller.updateQueuNumber'
        },
        {
            method: "PUT",
            path: "/que-number/reset",
            handler: "custom-controller.resetQueNumber"
        }
    ]
}