import React, { Component } from 'react';
import Markdown from 'react-markdown';

class OutputEditor extends Component {
	render() {
		return (
			<div className='col-md-6'>
				<Markdown source={this.props.value} />
			</div>
		);
	}
}

export default OutputEditor;
