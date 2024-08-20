const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			
				
			],
			listaContactos: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			getContacts: () => {
				fetch(
					'https://playground.4geeks.com/contact/agendas/orubenfr/contacts',{
						method: 'GET',
					})
				.then((response)=>response.json())
				.then((data)=>setStore({listaContactos: data.contacts}))
				.catch((error)=>console.log(error));
			},

			postContact: (payload) => {
				fetch(
					'https://playground.4geeks.com/contact/agendas/orubenfr/contacts',{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						  },
						body: JSON.stringify(
							payload
						  ),
					})
				.then((response)=>response.json()) // 
				.then((data)=>{
					console.log(data) // ... spread operator accede directo al contenido
				})
				.catch((error)=>console.log(error));
			},

			deleteContact: (id,newlista) => {
				fetch(
					`https://playground.4geeks.com/contact/agendas/orubenfr/contacts/${id}`,{
						method: 'DELETE',
						headers: {
							'Content-Type': 'application/json'
						  },
					})
				.then((response)=>response.json()) // 
				.then((response)=>console.log(response))
				.catch((error)=>console.log(error));
				setStore({ listaContactos: newlista });
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
	
};

export default getState;


