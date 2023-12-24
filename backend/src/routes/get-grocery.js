const Express = require("express");
const Grocery = require("../models/Grocery");
const { body } = require("express-validator");

const router = Express.Router();

router.get("/get-grocery", async (req, res, next) => {
	try {
		const getList = await Grocery.find();

		res.status(200).send(getList);
	} catch (error) {
		throw Error(error);
	}
});

module.exports = router;
