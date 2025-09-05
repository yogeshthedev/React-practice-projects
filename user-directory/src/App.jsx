import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <header className="shadow-md z-10">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-6 py-4">
        <Mainroutes />
      </main>
    </div>
  );
};

export default App;
