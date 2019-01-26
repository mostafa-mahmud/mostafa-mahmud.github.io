import React, { Component } from 'react';
import './components.css';
import './js file.js';

 {/*header*/}
class Header extends Component {
	constructor(props) {
		super(props);{
			this.Button = this.Button.bind(this)
			this.button = this.button.bind(this)
		}
	}
	Button () {
		let a = document.getElementById("a").value;
		let b = document.getElementById("b").value;
		let c = document.getElementById("c").value;
		let d = document.getElementById("d").value;
		console.log(a, b, c, d);
	}
	button () {
		let e = document.getElementById("e").value;
		console.log(e);
	}
	render() {
    return (
		<header>
		 {/*nav*/}
			<nav>
				<div className="container">
					<a href="ss"><img alt="ss" src="https://lh3.google.com/u/0/d/1k_TNmbkDk-b1VdM_z_rkX9U-y9xL6HMb=w1366-h626-iv1"/></a>
					<ul>
						<li className="active"><a href="ss">HOME</a></li>
						<li><a href="ss">COMIANIES</a></li>
						<li><a href="ss">ABOUT US</a></li>
						<li><a href="ss">CONTACT US</a></li>
					</ul>
					<ul>
						<li><a href="ss">SIGN IN</a></li>
						<li className="bu"><a href="ss">REGISTER</a></li>
						<li><button><span></span><span></span><span></span></button></li>
					</ul>
				</div>
				<div className="clear-fix"></div>
			</nav>
{/*nav*/}
{/*scroll*/}		
			<main className="scroll">
				<div className="scroll-back">
					<div className="container">
						<div>
							<ul>
								<li className="one active">ADVANCED SEARCH</li>
								<li className="two">NORMAL SEARCH</li>
							</ul>

							<div className="one">
								<ul>
									<li>
										<select id="a" >
											<option>compuny</option>
											{this.props.CompunyName}
										</select>
									</li>
									<li>
										<select id="b" >
											<option>model</option>
											{this.props.Model}
										</select>
									</li>
									<li>
										<select id="c" >
											<option>part category</option>
											{this.props.Category}
										</select>
									</li>
									<li>
										<select  id="d" >
											<option>yearofmanufacture</option>
											{this.props.Year}
										</select>
									</li>
									<li>
										 <button onClick={this.Button}>search</button>
									</li>
								</ul>
							</div>
							<div className="two">
								<ul>
									<li>
										<input id="e" type="text" placeholder="enter your spare part name here"/>
									</li>
									<li>
										<button onClick={this.button}>search</button>
									</li>
								</ul>
							</div>
						</div>
						<div>
							<h1>Your Spare Part Online Store</h1>
							<p>Book your spare part now</p>
						</div>
						<div>
							<span><i className="fa fa-arrow-down fa-1x"></i></span>	
						</div>
					</div>
				</div>
			</main>
{/*scroll*/}		
		</header>
    );
  }
}
{/*header*/}
{/*seller*/}
class Seller extends Component {
	render() {
		return(
			<div>
				<img alt="ss" src={this.props.S_src}/>
				<h3>{this.props.S_headding3}</h3>
				<p>{this.props.S_para}</p>
				<h2>{this.props.S_headding2} L.E</h2>
				<button className="bu">{this.props.S_button}</button>
				<div className="clear-fix"></div>
			</div>
		);
	}
}
{/*seller*/}
{/*top compunies and top prads*/}
class Top extends Component {
  render() {
    return (
		<div>
			<img alt={this.props.alt} src={this.props.src}/>
			<h3>{this.props.hName}</h3>
		</div>	
	);
  }
}
{/*top compunies and top prads*/}
{/*fotter*/}
class Footer extends Component {
  render() {
    return (
		<footer>
			<div className="first">
				<div className="container">
					<div>
						<div>
							<img alt="ss" src="https://lh3.google.com/u/0/d/1k_TNmbkDk-b1VdM_z_rkX9U-y9xL6HMb=w1366-h626-iv1"/>
						</div>
						<div>
							<aside>
								<h5>Company</h5>
								<ul>
									<li><a href="ss">about</a></li>
									<li><a href="ss">contact us</a></li>
								</ul>
							</aside>
							<aside>
								<h5>Legel</h5>
								<ul>
									<li><a href="ss">Term &amp; Condtion</a></li>
									<li><a href="ss">Privacy policy</a></li>
									<li><a href="ss">Legal information</a></li>
								</ul>
							</aside>
							<aside>
								<h5>Explors</h5>
								<ul>
									<li><a href="ss">How to work</a></li>
									<li><a href="ss">Help</a></li>
									<li><a href="ss">Faq</a></li>
								</ul>
							</aside>
						</div>
					</div>
					<div className="clear-fix"></div>
					<div>
						<div>
							<h3>Boody Car for iOS &amp; Android</h3>
							<p>download OurBoody Car App for mobile device<br/> for the easier access.</p>
							<a href="ss"><span><img alt="ss" src="https://lh3.google.com/u/0/d/1m8riK1NS79UuMZzPXditUma7wTZqP92C=w1366-h384-iv2"/></span></a>
							<a href="ss"><span><img alt="ss" src="https://lh3.google.com/u/0/d/15RLbu_eIPQHTJQ5NdlBQ5Ii066dEc6Yt=w1366-h384-iv2"/></span></a>
							<div>
								<h5>site language</h5>
								<select>
									<option>english</option>
									<option>arabic</option>
									<option>franch</option>
								</select>
							</div>
						</div>

						<div className="clear-fix"></div>
					</div>				
				</div>
				<div className="clear-fix"></div>
			</div>
			<div className="last">
				<div className="container">
					<ul>
						<li><a href="ss"><i className="fab fa-skype fa-fw fa-1x"></i></a></li>
						<li><a href="ss"><i className="fab fa-pinterest-p fa-fw fa-1x"></i></a></li>
						<li><a href="ss"><i className="fab fa-youtube fa-fw fa-1x"></i></a></li>
						<li><a href="ss"><i className="fab fa-instagram fa-fw fa-1x"></i></a></li>
						<li><a href="ss"><i className="fab fa-twitter fa-fw fa-1x"></i></a></li>
						<li><a href="ss"><i className="fab fa-facebook-f fa-fw fa-1x"></i></a></li>
					</ul>
					<div className="copy">
						<p>copyright &copy; 2018 body car.All Rights Reserved</p>
					</div>
				</div>
				<div className="clear-fix"></div>
			</div>
		</footer>
	);
  }
}
{/*fotter*/}
export {Header, Seller, Top, Footer};

