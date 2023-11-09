import Hero from "./components/Hero";
import Buttons from "./components/Buttons";
import Title from "./components/Title";
import Plans from "./components/Plans";

function App() {
  return (
    <main>
      <Hero />
      <div className="main-content">
        <Title text={"order summary"}/>
        <Plans />
        <Buttons />
      </div>
    </main>
  );
}

export default App;
