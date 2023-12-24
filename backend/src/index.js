const mongoose = require("mongoose");
const app = require("./app");

const start = async () => {
	try {
		await mongoose.connect(
			"mongodb+srv://ktejas18:926x5cpsGP0Fbjse@grocerry-list.fkwmy2w.mongodb.net/?retryWrites=true&w=majority"
		);
	} catch (error) {
		console.log(error);
		return;
	}

	app.listen(8000, () => {
		console.log("Connected to db on 8000");
	});
};

start();
