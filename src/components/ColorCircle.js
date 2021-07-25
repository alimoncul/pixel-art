import React from 'react';

export class ColorCircle extends React.Component {
	state = {
		color: '#000',
	};

	render() {
		return (
			<div
				style={{ background: this.props.color, height: 20, width: 20 }}
			></div>
		);
	}
}
