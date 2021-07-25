import React from 'react';
import { SketchPicker } from 'react-color';
export class ColorPicker extends React.Component {
	state = {
		displayColorPicker: false,
		color: {
			r: '0',
			g: '0',
			b: '0',
			a: '1',
		},
	};

	handleClick = () => {
		this.setState({ displayColorPicker: !this.state.displayColorPicker });
	};

	handleClose = () => {
		this.setState({ displayColorPicker: false });
	};

	handleChange = (color) => {
		this.setState({ color: color.rgb });
	};

	getCurrentColor() {
		return this.state.color;
	}

	render() {
		return (
			<div>
				<div className="colorPickerSwatch" onClick={this.handleClick}>
					<div
						className="colorPickerWrapper"
						style={{
							background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
						}}
					/>
				</div>
				{this.state.displayColorPicker ? (
					<div className="colorPickerPopover">
						<div
							className="colorPicker"
							onClick={this.handleClose}
						/>
						<SketchPicker
							color={this.state.color}
							onChange={this.handleChange}
						/>
					</div>
				) : null}
			</div>
		);
	}
}
