const { createCoreController } = require("@strapi/strapi").factories;
module.exports = createCoreController("api::now-serving.now-serving",
({ strapi }) => ({
    
    async testApi(ctx) {
        ctx.body = "Hello World";
        ctx.status = 200;
    },

    async updateQueuNumber(ctx) {
        try {
           
            let { cashier_number } = ctx.params;
             //@ts-ignore
            let { que_number } = ctx.request.body;

            let myPayload = {
                data: {},
                message: "Successfully Updated!",
                status: "success"
            }

            // Update Now Serving Table
            let nowServingQuery = `UPDATE now_servings SET now_serving = '${que_number}' WHERE id = 1`;
             //@ts-ignore
            let myNowServingResult = await strapi.db.connection.context.raw(nowServingQuery);

            // Update Queuing Table
            let queuingQuery = `UPDATE queuings SET cashier_${cashier_number} = '${que_number}' WHERE id = 1`;
             //@ts-ignore
            let myQueuingResult = await strapi.db.connection.context.raw(queuingQuery);

            if (myQueuingResult) {
                myPayload.data = myQueuingResult.rows;
                ctx.body = myPayload;
                ctx.status = 200;
            }

        } catch(err) {
            ctx.status = 404;
            ctx.body = err.message;
        }
    },

    async resetQueNumber(ctx) {
        try {
            let myPayload = {
                data: {},
                message: "Successfully Reset!",
                status: "success"
            };

            // Reset Now Serving Table to 0
            let resetNowServingQuery = `UPDATE now_servings SET now_serving = 0 WHERE id = 1`;
             //@ts-ignore
            let myResetNowServingResult = await strapi.db.connection.context.raw(resetNowServingQuery);

            // Reset Queuing Table to 0
            let resetQueuingQuery = `UPDATE queuings SET cashier_1 = 0, cashier_2 = 0, cashier_3 = 0, cashier_4 = 0 WHERE id = 1`;
            //@ts-ignore
            let myResetQueuingResult = await strapi.db.connection.context.raw(resetQueuingQuery);

            if (myResetQueuingResult) {
                myPayload.data = myResetQueuingResult.rows;
                ctx.body = myPayload;
                ctx.status = 200;
            }
        } catch (err) {
            ctx.status = 404;
            ctx.body = err.message;
        }
    }

}))