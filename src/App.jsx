
import Banner from "./header/Banner";
import Navber from "./header/Navber";
import AllFoods from "./main/AllFoods";
import OurResepi from "./main/OurResepi";

function App() {
  return (
    <>
      <header>
        <Navber></Navber>
        <Banner></Banner>
      </header>
      <main>
        <OurResepi></OurResepi>
        <AllFoods></AllFoods>
      </main>
    </>
  );
}

export default App;
