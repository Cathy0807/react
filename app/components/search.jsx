
require('./search.css');
import React from 'react'; 

let Search = React.createClass({
	getInitialState: function() {
		return {
			bg: "transparent",
		}
	},
	componentDidMount: function() {
		
		window.onscroll = (event) => {
			let realHeight = document.documentElement.scrollTop || document.body.scrollTop;
			let optatic = 0.8 * (realHeight/142);
			if(optatic <= 0.8 ) {
				this.setState({
					bg: `rgba(234, 44, 44, ${optatic})`,
				})
			}
		}
	},
	render: function() {
		let bColor = this.state.bg ? this.state.bg : 'transprent';
		return (
			<div id="search" className="pf"  style={{ background: bColor }}>
				<div className="search pr">
					<div className="sl pa">
						<i></i>
					</div>
					<div className="frc pr">
						<span className="searchicon pa"></span>
						<form>
							<input placeholder="全场畅饮，部分低至99减50" type="text"/>
						</form>
					</div>
					<div className="sub pa">
						<span>登录</span>
					</div>
				</div>
			</div>
		);
	}
})

module.exports = Search;