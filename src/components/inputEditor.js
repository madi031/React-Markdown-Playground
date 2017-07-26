import React, { Component } from 'react';

class InputEditor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			value: event.target.value,
		});
		this.props.handleInput(event.target.value);
	}

	render() {
		return (
			<div className='col-md-6 form-group'>
				<textarea
          className='form-control'
					onChange={this.handleChange}
          rows='40'
					value={this.state.value}
				/>
			</div>
		);
	}
}

export default InputEditor;
