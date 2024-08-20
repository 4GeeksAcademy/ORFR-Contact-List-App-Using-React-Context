import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const AddContact = () => {
    const {store,actions}=useContext(Context);
    // useEffect(()=>{
    //     actions.getContacts();
	// },[])
    let navigate = useNavigate();

    let [nombre,setNombre] = useState("");
    let [correo,setCorreo] = useState("");
    let [numero,setNumero] = useState("");
    let [direccion,setDireccion] = useState("");

    // function postContact() {
    //     fetch(
	// 		'https://playground.4geeks.com/contact/agendas/orubenfr/contacts',{
	// 			method: 'POST',
	// 			headers: {
	// 				'Content-Type': 'application/json'
	// 			  },
	// 			body: JSON.stringify(
	// 				{
	// 					"name": nombre,
	// 					"phone": numero,
    //                     "email": correo,
    //                     "address": direccion,
	// 				  }
	// 			  ),
				
	// 		})
	// 	.then((response)=>response.json()) // 
	// 	.then((data)=>{
	// 		console.log(data) // ... spread operator accede directo al contenido
	// 	})
		
	// 	.catch((error)=>console.log(error));
    // }


    function guardarContacto() {
        let payload={
            name: nombre,
            phone: numero,
            email: correo,
            address: direccion,
        };

        actions.postContact(payload);
        alert('Contacto agregado!');
        navigate("/contacts");
        setNombre("");
        setCorreo("");
        setDireccion("");
        setNumero("");

    }

    return(
        <div className="container">
            <h1 className="text-center">Add a New Contact</h1>
            <div className="container">
                <div class="mb-3">
                    <label for="formGroupExampleInput" className="form-label"> Full Name</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter full name" onChange={(e)=>setNombre(e.target.value)} value={nombre}/>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" className="form-label">Email</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter email" onChange={(e)=>setCorreo(e.target.value)} value={correo}/>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput3" className="form-label">Phone</label>
                    <input type="text" class="form-control" id="formGroupExampleInput3" placeholder="Enter phone" onChange={(e)=>setNumero(e.target.value)} value={numero}/>
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput4" className="form-label">Address</label>
                    <input type="text" class="form-control" id="formGroupExampleInput4" placeholder="Enter address" onChange={(e)=>setDireccion(e.target.value)} value={direccion}/>
                </div>
            </div>
            <button type="submit" class="btn btn-primary" onClick={guardarContacto}>Save</button>
            <Link to="/contacts"><a>volver a Contacts</a></Link>

        </div>

    );



}