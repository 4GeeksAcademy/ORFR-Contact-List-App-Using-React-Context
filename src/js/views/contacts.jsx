import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Contacts = ()=>  {
    useEffect(()=>{
		getContacts();

	},[])

    const [listaContactos,setListaContactos] = useState([])

    function getContacts() {
        fetch(
			'https://playground.4geeks.com/contact/agendas/orubenfr/contacts',{
				method: 'GET',
			})
		.then((response)=>response.json())
		.then((data)=>setListaContactos(data.contacts))
		.catch((error)=>console.log(error));
	}
        


    return(

        <div>
         <div className="container-fluid text-center">
            <Link to="/addcontact">
            <button>Add Contact</button>
            </Link>
         </div>

          <div className="container">
            {listaContactos.map((item)=> (<div className="row" key={item.id} id={item.id}>
                <h2>{item.name}</h2>
                <h5>{item.address}</h5>
                <h5>{item.phone}</h5>
                <h5>{item.email}</h5>
                </div>))}
          </div>
        </div> 
        

    );
};


