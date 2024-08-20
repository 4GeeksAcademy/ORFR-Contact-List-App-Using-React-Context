import React, { useEffect, useState, useContext  } from "react";
import { Link} from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPencil,faTrash,faRotateLeft,faUserPlus}  from '@fortawesome/free-solid-svg-icons';




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
            <button className="btn btn-info"><FontAwesomeIcon icon={faUserPlus} /></button>
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
                        {/* <button onClick={()=>eliminarContacto(item.id)} ><FontAwesomeIcon icon={faTrash} /></button> */}
                        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Delete Contact..</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body fs-2">
                                Are you sure?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"><FontAwesomeIcon icon={faRotateLeft} /></button>
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={()=>eliminarContacto(item.id)} ><FontAwesomeIcon icon={faTrash} /></button>
                            </div>
                            </div>
                        </div>
                        </div>
                        </div>    
                </div>))}
          </div>
        </div> 
        

    );
};


