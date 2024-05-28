import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/signup.css";

export const SignUp = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		 actions.register_User(email, password);
			setEmail("");
			setPassword("");
			setTimeout(() => {
				navigate("/login");
			}, 4000);
		
	};

	return (
		<div className="text-center">
			<div className="contenido">
				<header>
					<div className="headercontent">
						<h3>SIGN UP</h3>
					</div>
				</header>
				<form onSubmit={handleSubmit} className="form">
					<div className="input-group mb-4 mt-4" id="field">
						<span className="input-group-text span-email" id="email">
							<i className="bi bi-envelope-at"></i>
						</span>
						<input
							type="text"
							className="inputs form-control"
							placeholder="E-mail"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="input-group mb-3" id="field">
						<span className="input-group-text span-pass" id="password">
							<i className="bi bi-lock-fill"></i>
						</span>
						<input
							type="password"
							className="inputs form-control"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<div className="boton">
						<button className="btn btn-outline-success" type="submit">
							Sign Up
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};