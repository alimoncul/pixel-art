import React from 'react';

export class ColorCircle extends React.Component {
	state = {
		color: '#000',
	};

	render() {
		return (
			<div className="colorHistorySwatch">
				<div
					className="colorHistory"
					style={{
						background: this.props.color,
					}}
				></div>
			</div>
		);
	}
}
