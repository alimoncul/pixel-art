import React, { useContext } from 'react';
import { Context } from '../Store';
import { GRID_SIZE_ENUMS } from '../constants';

export const GridSelect = () => {
	const [state, setState] = useContext(Context);
	const handleOnChange = (event) => {
		const gridSize = parseInt(event.target.value) || 0;
		setState({
			gridSize: gridSize,
			colors: state.colors,
		});
	};
	return (
		<select
			id="gridSelect"
			className="select margin"
			onChange={handleOnChange}
			value={state.gridSize || 'Select Grid Size'}
		>
			<option disabled>Select Grid Size</option>
			<option value={GRID_SIZE_ENUMS.EIGHT}>8x8</option>
			<option value={GRID_SIZE_ENUMS.SIXTEEN}>16x16</option>
			<option value={GRID_SIZE_ENUMS.THIRTYTWO}>32x32</option>
			<option value={GRID_SIZE_ENUMS.SIXTYFOUR}>64x64</option>
		</select>
	);
};
