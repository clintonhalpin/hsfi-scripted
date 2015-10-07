import React from 'react';
import { Link } from 'react-router';

export default class Main extends React.Component{
  render () {
    return (
    	<div>
	    	<div className="p2 bg-fuchsia">
		    	<div className="container py4 white">
		        	<h1>High School of Fashion Industries + Scripted</h1>
		        	<p>2015</p>
		      	</div>
		    </div>
	      	<div className="container py1 px2">
	      		<h1>This Week (MM/DD/YYYY @ 3:45pm)</h1>
	      		<ul className="list-reset">
					<li>[TBD]</li>
	      		</ul>
	      		<a href="!#">View All</a>
	      		<hr />
	      		<h3 className="py2">FAQ</h3>
	      		<ul className="list-reset">
					<li>
						<p><strong>Question</strong></p>
						<p>Answer!</p>
					</li>
	      		</ul>
	      		<h3 className="py2">Instructors</h3>
	      		<ul className="list-reset">
					<li className="border p1 mb1">
						<p className="m0"><strong>Tashay Green</strong></p>
						<p className="m0"><a href="#">tashay@scripted.org</a></p>
					</li>
					<li className="border p1 mb1">
						<p className="m0"><strong>Eric Lin</strong></p>
						<p className="m0"><a href="#">ericwilliamlin@gmail.com</a></p>
					</li>
					<li className="border p1 mb1">
						<p className="m0"><strong>Luis Ibanez</strong></p>
						<p className="m0"><a href="#">luisi@google.com</a></p>
					</li>
					<li className="border p1 mb1">
						<p className="m0"><strong>Clinton Halpin</strong></p>
						<p className="m0"><a href="#">clintonhalpin@gmail.com</a></p>
					</li>
	      		</ul>
	      	</div>
		</div>
    )
  }
}