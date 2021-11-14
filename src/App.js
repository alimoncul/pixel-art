import './App.css';
import { ColorPicker } from './components/ColorPicker';
import { GridSelect } from './components/GridSelect';
import { ColorCircle } from './components/ColorCircle';
import { Grid } from './components/Grid';
import Store from './Store';

function App() {
	return (
		<Store>
			<div className="parent">
				<div className="div1 padding">
					<GridSelect />
					<ColorPicker />
				</div>
				<div className="div2 padding">
					<h3>Color History</h3>
					<ColorCircle color="#fff" />
					<ColorCircle color="#f2f" />
				</div>
				<div className="div3 padding">
					<h3>Favourite Colors</h3>
					<ColorCircle color="#abf" />
				</div>
				<Grid id="grid" className="div4 padding"></Grid>
			</div>
		</Store>
	);
}

export default App;
