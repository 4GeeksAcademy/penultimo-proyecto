import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/login.css";
import { Context } from "../store/appContext";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = e =>{
		e.preventDefault();
        actions.login(email, password );
        setEmail(" ");
        setPassword();
    }
    useEffect(()=>{
        if(store.isLoggedIn === true){
            navigate('/private')
        }
    },[store.isLoggedIn])

	return (
		<div>
			<div className="container-xxl">
				<form onSubmit={handleSubmit}>
					<h1 className="mt-3 mb-3 logtext">LOGIN</h1>
					<div className="form-floating mb-3">
						<input
							type="email"
							className="form-control"
							id="floatingInput"
							placeholder="name@example.com"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<label htmlFor="floatingInput">Email address</label>
					</div>
					<div className="form-floating mb-3">
						<input
							type="password"
							className="form-control"
							id="floatingPassword"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<label htmlFor="floatingPassword">Password</label>
					</div>
					<button className="btn btn-outline-success" type="submit">
						LOGIN
					</button>
					<div>
						<p className="info-signup">Don`t have an account ?</p>
						<Link to="/signup">
							<button className="redirect btn">Register for Free</button>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};