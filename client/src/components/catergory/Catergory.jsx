import React from "react";
import {useParams} from "react-router-dom";
import axiosConfig from "../.././api/axiosConfig";

const Catergory = ()=>{
	const [meal , setMeal] = React.useState([]);
	const param = useParams();
	const id = param.id;

	React.useEffect(()=>{
		(async()=>{
			try{
				const response = await axiosConfig.get(`api/category/${id}`);
				setMeal(()=>response.data.meals);
			}catch(error){
				console.log('error', error);
			}
		})();

	},[]);

	return (
		<>
			<div className="lg:px-40 md:px-28 w-full h-auto mt-24 p-3">
				<div className="p-5 rounded-md" >
					<h1 className="text-6xl font-semi-bold capitalize" >{id}</h1>

					{/*here add the meals*/}
					
				</div>
			</div>
		</>
	);
}

export default Catergory;