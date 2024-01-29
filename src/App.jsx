import Edge from "./components/Edge";
import Frequent from "./components/Frequent";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Partner from "./components/Partner";
import Testimonial from "./components/Testimonial";
function App() {
  return (
    <>
      <div className="container mx-auto p-16">
        <Navbar/>
        <Header/>
        <Partner/>
        <Edge/>
        <Testimonial/>
        <Frequent/>
      </div>
    </>
  );
}

export default App;
