import Main from './components/Main';
import CamionState from './hooks/camionState';
function App() {
	return (
		<div className='App'>
			<h1>Transportes</h1>
			<CamionState>
				<Main />
			</CamionState>
		</div>
	);
}

export default App;
