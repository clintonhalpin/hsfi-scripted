import React from 'react';
import { Link } from 'react-router';
import Marked from './Marked';
import Sessions from './../../Sessions.md';
import Faq from './../../Faq.md';
import Resources from './../../Resources.md';
import Instructors from './../../Instructors.md';

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
	      	<div className="container py1 px2" style={{ 'paddingBottom': '4rem' }}>
	      		<Marked content={Sessions} />
	      		<Marked content={Faq} />
	      		<Marked content={Resources} />
	      		<Marked content={Instructors} />
	      	</div>
		</div>
    )
  }
}