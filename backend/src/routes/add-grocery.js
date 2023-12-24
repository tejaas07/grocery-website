const Express = require("express");
const Grocery = require("../models/Grocery");
const { body, validationResult } = require("express-validator");
// const { validationResult } = require("express-validator/check");

const router = Express.Router();

router.post(
	"/add-grocery",
	[
		body("name").notEmpty().withMessage("Name is required"),
		body("quantity")
			.notEmpty()
			.isNumeric()
			.withMessage("Quantity must be a number"),
	],
	async (req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		try {
			const { name, quantity } = req.body;
			const newGrocery = new Grocery({
				name,
				quantity,
			});

			await newGrocery.save();

			res.status(201).json("Grocery added successfully");
		} catch (error) {
			throw Error(error);
		}
	}
);

module.exports = router;
