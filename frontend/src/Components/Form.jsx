import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import axiosInstance from "@/Utils/axiosInterceptor";

const validationSchema = Yup.object().shape({
	name: Yup.string().required("Name is required"),
	quantity: Yup.number()
		.required("Quantity is required")
		.positive("Quantity must be a positive number"),
});

const initialValues = {
	name: "",
	quantity: "",
};

const FormField = ({ showForm }) => {
	const handleSubmit = async (values, { setSubmitting, resetForm }) => {
		// Handle form submission logic here
		try {
			const response = await axiosInstance.post("/add-grocery", values);
			console.log("Form submitted:", response.data);
			resetForm();
			setSubmitting(false);
			showForm(false);
			toast.success("Form data submitted successfully.", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			});
		} catch (error) {
			console.log(error);
			toast.error("Error while saving data", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			});
		}
	};

	return (
		<>
			<h2>Add Grocery</h2>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				<Form>
					<div className="form">
						<div>
							<label htmlFor="name">Name:</label>
							<Field
								className="form-fields"
								type="text"
								id="name"
								name="name"
							/>
						</div>
						<div className="error-container">
							<ErrorMessage name="name" component="div" />
						</div>

						<div>
							<label htmlFor="quantity">Quantity:</label>
							<Field
								className="form-fields"
								type="number"
								id="quantity"
								name="quantity"
							/>
						</div>
						<div className="error-container">
							<ErrorMessage name="quantity" component="div" />
						</div>
						<div className="button-container">
							<button className="primary-button" type="submit">
								Submit
							</button>
							<button
								className="primary-button"
								onClick={() => {
									showForm(false);
								}}
							>
								Cancel
							</button>
						</div>
					</div>
				</Form>
			</Formik>
		</>
	);
};

export default FormField;
