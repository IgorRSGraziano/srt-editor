import SrtEditor from "./components/srt-editor";
import SrtText from "./components/srt-text";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./components/ui/resizable";

function App() {
	return (
		<div className="p-4 flex gap-4 items-start">
			<ResizablePanelGroup direction="horizontal" className="rounded-md border">
				<ResizablePanel minSize={25}>
					<SrtEditor />
				</ResizablePanel>
				<ResizableHandle withHandle />
				<ResizablePanel minSize={25}>
					<SrtText />
				</ResizablePanel>
			</ResizablePanelGroup>
		</div>
	);
}

export default App;
