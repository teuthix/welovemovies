const theatersService = require("./theaters.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

// return all theaters and movies playing at each
async function list(req, res, next) {
    const data = await theatersService.list();
    if (data){
        // console.log(data[0].name);
        res.json({data});
    }
    next({ status: 404, message: "Theater cannot be found." });
}

module.exports = {
    list: asyncErrorBoundary(list),
};