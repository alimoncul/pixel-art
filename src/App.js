import './App.css';
import { ColorPicker } from './components/ColorPicker';
import { GridSelect } from './components/GridSelect';
import { ColorCircle } from './components/ColorCircle';

function App() {
	return (
		<div className="parent">
			<div className="div1 padding">
				<GridSelect />
				<ColorPicker />
			</div>
			<div className="div2 padding">
				<h3>Color History</h3>
				<ColorCircle color="#fff" />
			</div>
			<div className="div3 padding"> div3</div>
			<div className="div4 padding"> div4</div>
		</div>
	);
}

export default App;
