import React from 'react';
import Logo from '../../assets/img/btnhoflix.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
	return (
			<nav className="Menu">
				<a href="/">
					<img className="Logo" src={Logo} alt="Logo do Btnhoflix"/>
				</a>
				<Button as="a" href="/" className="ButtonLink">
					Novo vídeo
				</Button>
			</nav>
		);
}
export default Menu;
