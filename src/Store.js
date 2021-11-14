import React, { useState } from 'react';
import { GRID_SIZE_ENUMS } from './constants';

const initialState = (function () {
	let colors = {};
	Object.values(GRID_SIZE_ENUMS).forEach((value) => {
		colors[value] = new Array(value).fill(new Array(value).fill('#000'));
	});
	return {
		gridSize: 0,
		colors,
	};
})();

export const Context = React.createContext();

const Store = ({ children }) => {
	const [state, setState] = useState(initialState);
	return (
		<Context.Provider value={[state, setState]}>
			{children}
		</Context.Provider>
	);
};

export default Store;
