import React, { Component } from 'react';

import InputEditor from './components/inputEditor';
import OutputEditor from './components/outputEditor';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
		};
		this.handleTextInput = this.handleTextInput.bind(this);
	}

	handleTextInput(value) {
		this.setState({
			value,
		});
	}

	render() {
		return (
			<div className='container'>
				<h2 style={{ color: 'green', textAlign: 'center' }}>
					Markdown Playground
				</h2>
        <br />
				<div className='row'>
					<InputEditor handleInput={this.handleTextInput} />
					<OutputEditor value={this.state.value} />
				</div>
			</div>
		);
	}
}

export default App;
