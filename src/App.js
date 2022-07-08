import { UpperHeader } from "./components/UpperHeader";
import { SlideShow } from "./components/SlideShow";
import { Services } from "./components/Services";
import { References } from "./components/References";
import { LoginRegister } from "./containers/LoginRegister";
import { Login } from './components/authentification/Login';



function App() {
  return (
    <>
      <UpperHeader />
      <SlideShow />
      <Services />
      <References />


    </>

  );
}

export default App;
