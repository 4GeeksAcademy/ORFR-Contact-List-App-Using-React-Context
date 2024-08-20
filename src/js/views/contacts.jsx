import React, { useEffect, useState, useContext  } from "react";
import { Link} from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPencil,faTrash}  from '@fortawesome/free-solid-svg-icons';


export const Contacts = ()=>  {
    const {store,actions}=useContext(Context);
    
    useEffect(()=>{
	actions.getContacts();
	},[])
    // const [listaContactos,setListaContactos] = useState([])

    // function getContacts() {
    //     fetch(
	// 		'https://playground.4geeks.com/contact/agendas/orubenfr/contacts',{
	// 			method: 'GET',
	// 		})
	// 	.then((response)=>response.json())
	// 	.then((data)=>setListaContactos(data.contacts))
	// 	.catch((error)=>console.log(error));
	// }

    function eliminarContacto(id) {
        
        
        const newlista = store.listaContactos.filter((item)=>item.id !==id);
        // setStore({ listaContactos: newlista });
        actions.deleteContact(id,newlista);
        // console.log(newlista);
        
        
    }    


    return(

        <div>
         <div className="container-fluid text-center">
            <Link to="/addcontact">
            <button className="btn btn-success">Add Contact</button>
            </Link>
         </div>

          <div className="container">
            {store.listaContactos.map((item)=> (<div className="row" key={item.id} id={item.id}>
                <div className="col-9">
                    <h2>{item.name}</h2>
                    <h5>{item.address}</h5>
                    <h5>{item.phone}</h5>
                    <h5>{item.email}</h5>
                    </div>
                    <div className="col-3 text-center">
                        <Link to="/addcontact"><button onClick={()=>actions.editarContacto(item.id)} ><FontAwesomeIcon icon={faPencil}/></button></Link>
                        <button onClick={()=>eliminarContacto(item.id)} ><FontAwesomeIcon icon={faTrash} /></button>
                        </div>    
                </div>))}
          </div>
        </div> 
        

    );
};


