import { UpperHeader } from "./components/UpperHeader";
import { SlideShow } from "./components/SlideShow";
import {Services} from "./components/Services";


function App() {
  return (
    <div className="App">
      <UpperHeader/> 
        
          <SlideShow/>
          <Services/>
        
    </div>
  );
}

export default App;
