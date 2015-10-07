import React from 'react';
import marked from 'marked';

marked.setOptions({
    highlight: function (code) {
        return require('highlight.js').highlightAuto(code).value;
    }
});

let renderer = new marked.Renderer();

export default class Marked extends React.Component{
    render(){
    	let { content } = this.props;
        let html = marked(content, { renderer: renderer })        
        
        return (
        	<div dangerouslySetInnerHTML={{ __html: html }} />
        )
    }
}