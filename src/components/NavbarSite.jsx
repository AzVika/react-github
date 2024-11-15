import { NavLink } from 'react-router-dom';

export const NavbarSite = () => (
	<>
		<nav className="navbar navbar-dark navbar-expand-sm bg-primary">
			<div className="container-fluid">

				<NavLink to="/" className="navbar-brand">Github Search</NavLink>

				<div className="navbar-nav">
					<NavLink to="/" className="nav-link active" aria-current="page">Main</NavLink>
					<NavLink to="/about" className="nav-link">Info</NavLink>
				</div>
			</div>
		</nav>
	</>

);