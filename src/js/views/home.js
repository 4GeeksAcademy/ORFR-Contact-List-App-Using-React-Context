import React, {useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";


export const Home = () => {
// const {store,actions}=useContext(Context);
// actions.getContacts();
	return (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<p>
			<img src={rigoImage} />
		</p>
		{/* {store.listaContactos.map((item,index)=>(<div key={index}>{item.name}</div>))} */}
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
	)
};
