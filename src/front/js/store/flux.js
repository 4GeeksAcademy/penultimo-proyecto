const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			isLoggedIn: false,
		},
		actions: {
			setLogin: () => {
				setStore({ isLoggedIn: true });
			},
			setLogout: () => {
				setStore({ isLoggedIn: false });
				localStorage.removeItem('token');
			},
			login: async (email, password) => {
				await fetch(`${process.env.BACKEND_URL}/api/login`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ email, password })
				})
				.then(response => {
					if (!response.ok) {
						throw new Error('Error en la respuesta del servidor');
					}
					return response.json();
				})
				.then(data => {
					console.log('Login exitoso:', data);
			
					localStorage.setItem('token', data.token);
			
					getActions().setLogin();
					return data;
				})
				.catch(error => {
					console.error('Error:', error);
					throw error;
				});
			},
			register_User: (email, password) =>{
				fetch(`${process.env.BACKEND_URL}/api/signup`,{
					method:'POST',
					headers:{
						'Content-Type' : 'application/json'
					},
					body : JSON.stringify({
						"email": email,
						"password": password,
					   }),
			})
				.then(Response => Response.json())
				.then(data => {
					console.log(data); 
					
				})
				.catch(error => console.log('Error parcero', error))
			
			},
		}
	};
};

export default getState;