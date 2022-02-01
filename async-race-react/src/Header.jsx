import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
	<div>
		 <button className='garage-btn'>
			 <Link className='garage-link' to="/async-race-react/">Garage</Link>
		 </button>
		 <button className='winners-btn'>
			 <Link className='winners-link' to="/async-race-react/winners">Winners</Link>
		 </button>
	</div>
	
	);
};

export default Header;
