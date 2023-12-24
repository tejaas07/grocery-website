const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const grocerySchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	quantity: {
		type: Number,
		required: true,
	},
});

module.exports = mongoose.model("Grocery", grocerySchema);
