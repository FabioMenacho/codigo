
import React from 'react';
import {NavLink} from "react-router-dom"

const Header = () => {
	return (
		<>
			<div
				className="sidebar d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
				style={{ width: '280px' }}
			>
				<NavLink
					to={"/"}
					className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
				>

					<span className="fs-4">Sidebar</span>
				</NavLink>
				<hr />
				<ul className="nav nav-pills flex-column mb-auto">
					<li className="nav-item">
						<NavLink to={"/productos"} className="nav-link text-white" >

							Productos
						</NavLink>
					</li>
					<li>
						<NavLink to={"/carrito"} className="nav-link text-white">

							Carrito
						</NavLink>
					</li>
					
				</ul>
				<hr />
				
			</div>
		</>
	);
};

export default Header;
