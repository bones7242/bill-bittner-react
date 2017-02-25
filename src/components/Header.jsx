import React from 'react';
import './Header.css';
import { Link } from 'react-router';

export default function() {
	return <nav className="navbar navbar-default">
		<div className="container-fluid navbar-custom">
			<div className="row">
				<div className="navbar-header">
					<div className="col-xs-12">
						<Link className="navbar-brand" to="/" id="logo">Bill Bittner</Link>
					</div>
				</div>
				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul className="nav navbar-nav navbar-right navbar-right-custom">
						<li><Link to="/portfolio">Portfolio</Link></li>
						<li><Link to="/home">Home</Link></li>
					</ul>
				</div>
			</div>
		</div>
	</nav>;
}