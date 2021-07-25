import React from 'react';

export class GridSelect extends React.Component {
	state = {
		gridSize: 0,
	};

	handleOnChange = (event) => {
		this.setState({ gridSize: parseInt(event.target.value) || 0 });
	};

	render() {
		return (
			<select
				id="gridSelect"
				className="select margin"
				onChange={this.handleOnChange}
				value={
					this.state.gridSize
						? this.state.gridSize
						: 'Select Grid Size'
				}
			>
				<option disabled>Select Grid Size</option>
				<option value={8}>8x8</option>
				<option value={16}>16x16</option>
				<option value={32}>32x32</option>
				<option value={64}>64x64</option>
			</select>
		);
	}
}
