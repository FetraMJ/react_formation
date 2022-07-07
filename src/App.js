import { UpperHeader } from "./components/UpperHeader";
import { SlideShow } from "./components/SlideShow";
import {Services} from "./components/Services";
import {References} from "./components/References";


function App() {
  return (
    <div className="App">
      <UpperHeader/> 
        
          <SlideShow/>
          <Services/>
          <References/>
        
    </div>
  );
}

export default App;
