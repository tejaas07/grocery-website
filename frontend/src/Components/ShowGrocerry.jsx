import React from "react";
import useSWR from "swr";
import { toast } from "react-toastify";

import GroceryTable from "./GroceryTable";
import axiosInstance from "@/Utils/axiosInterceptor";

const fetchData = axiosInstance.get;
// 	async (url) => {
// 	console.log(url);
// 	const response = await axios.get(url);
// 	console.log(response);
// 	return response.data;
// };

const ShowGrocerry = () => {
	const { data, error } = useSWR("/get-grocery", fetchData);

	if (error) {
		toast.error("Unable to fetch data", {
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

	return (
		<div className="container">
			<h1>Grocery List</h1>
			<div className="table-container">
				{data ? <GroceryTable data={data} /> : <div>No data Found</div>}
			</div>
		</div>
	);
};

export default ShowGrocerry;
