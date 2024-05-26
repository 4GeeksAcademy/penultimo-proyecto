import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<div className="buttons">
				<Link to={"/signup"}>
					<button className="btn btn-success">Sign Up</button>
				</Link>
				<div className="separator">/</div>
				<Link to={"/login"}>
					<button className="btn btn-success">LogIn</button>
				</Link>
			</div>
		</div>
	);
};
