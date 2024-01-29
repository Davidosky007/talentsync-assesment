import Edge from "./components/Edge";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Partner from "./components/Partner";
function App() {
  return (
    <>
      <div className="container mx-auto p-16">
        <Navbar/>
        <Header/>
        <Partner/>
        <Edge/>
      </div>
    </>
  );
}

export default App;
