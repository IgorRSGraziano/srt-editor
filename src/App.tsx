import SrtEditor from "./components/srt-editor";
import SrtText from "./components/srt-text";

function App() {
	return (
		<div className="p-4 flex gap-4 items-start">
			<SrtEditor />
			<SrtText />
		</div>
	);
}

export default App;
