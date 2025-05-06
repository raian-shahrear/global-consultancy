import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-center font-bold text-4xl">Hello from new app</h1>
        <Button>Click</Button>
      </div>
    </div>
  );
}

export default App;
