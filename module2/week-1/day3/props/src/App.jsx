import "./App.css";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";
import PetsList from "./components/PetsList";

function App() {
  //js world
  const data = [
    {
      name: "Ragnar",
      age: 5,
      owner: "Joshua",
    },
    {
      name: "Bamboo",
      age: 10,
      owner: "Eugenie",
    },
    {
      name: "Teddy",
      age: 5,
      owner: "Busola",
    },

    {
      name: "Kurt",
      age: 8,
      owner: "Julian",
    },
  ];
  return (
    <>
      <Navbar />
      <main>
        <PetsList pet={data[0]} />
        <PetsList pet={data[1]} />
        <PetsList pet={data[2]} />
        <PetsList pet={data[3]} />
      </main>
      <Footer />
    </>
  );
}

export default App;
