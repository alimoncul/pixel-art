import React, { useContext } from 'react';
import { GridElement } from './GridElement';
import { Context } from '../Store';

export const Grid = (props) => {
	const [state] = useContext(Context);
	const generateGrid = () => {
		const { gridSize: grid, colors } = state;
		return new Array(grid).fill(0).map((a, firstIndex) => {
			return (
				<div
					key={firstIndex.toString()}
					style={{
						flexGrow: 1,
						flexDirection: 'row',
						display: 'flex',
					}}
				>
					{new Array(grid).fill(0).map((b, secondIndex) => {
						return (
							<GridElement
								key={secondIndex.toString()}
								color={colors[grid][firstIndex][secondIndex]}
							></GridElement>
						);
					})}
				</div>
			);
		});
	};
	return (
		<div id={props.id} className={props.className}>
			{generateGrid()}
		</div>
	);
};
