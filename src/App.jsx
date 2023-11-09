import Hero from "./components/Hero";
import Buttons from "./components/Buttons";
import Title from "./components/Title";

function App() {
  return (
    <main>
      <Hero />
      <div className="main-content">
        <Title text={"order summary"}/>
        <Buttons />
      </div>
    </main>
  );
}

export default App;
