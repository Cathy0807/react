
require('./otherapp.css');
let jsonp = require('../util/jsonp.js');

import React from 'react'; 

let Otherapp = React.createClass({
	getInitialState: function() {
        return {
        	apps: [],
        };
 	},

 	componentDidMount: function() {
 		jsonp(this.props.source, "", "callback", (data) => {
 			if(data.status) {
 				if(this.isMounted()) {
 					this.setState({
 						apps: data.data,
 					})
 				}
 			}else {
 				alert(data.msg);
 			}
 		});
 	},
 	
	render: function() {
		let countId = 0;
		return (
			<div className="oapp">
				<ul>
					{
						this.state.apps.map((app) => {
							return <li key={ "otherapp" + countId++ }>
										<a href={ app.url }>
											<div className="app_icon">
												<img src={ app.icon } alt=""/>
											</div>
											<span>{ app.title }</span>
										</a>
									</li>
						})
					}
				</ul>
			</div>
		);
	}
})

module.exports = Otherapp;