import React from 'react';
import Logo from '../../assets/img/btnhoflix.png';
import './Menu.css';
import Button from '../Button';
import { Link } from 'react-router-dom';

function Menu() {
	return (
			<nav className="Menu">
				<Link to="/">
					<img className="Logo" src={Logo} alt="Logo do Btnhoflix"/>
				</Link>
				<Button as={Link} to="/cadastro/video" className="ButtonLink">
					Novo vídeo
				</Button>
			</nav>
		);
}
export default Menu;
