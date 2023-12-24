import React, { useState } from "react";
import FormField from "./Form";

const AddGrocerry = () => {
	const [showForm, setShowForm] = useState(false);
	return (
		<>
			<div>{showForm && <FormField showForm={setShowForm} />}</div>

			{!showForm && (
				<div className="add-form">
					<button
						className="primary-button"
						onClick={() => setShowForm(!showForm)}
					>
						Add Grocery
					</button>
				</div>
			)}
		</>
	);
};

export default AddGrocerry;
