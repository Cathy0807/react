
require('./app/lib/common.css');
import React from 'react';
import ReactDOM from 'react-dom';

import Search from './app/components/search.jsx'; 
import Header from './app/components/header.jsx'; 
import Otherapp from './app/components/otherapp.jsx'; 
import Spike from './app/components/spike.jsx'; 
import More from './app/components/more.jsx'; 
import Like from './app/components/like.jsx'; 

ReactDOM.render(
	<div>
		<Search />
		<Header source="http://localhost:3000/data/swiper" />
		<Otherapp source="http://localhost:3000/data/otherapp" />
		<Spike source="http://localhost:3000/data/spike" />
		<More source="http://localhost:3000/data/more" />
		<Like source="http://localhost:3000/data/like" />
	</div>, 
	document.querySelector("#myApp")
);
