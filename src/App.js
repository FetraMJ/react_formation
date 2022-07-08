import { UpperHeader } from "./components/UpperHeader";
import { SlideShow } from "./components/SlideShow";
import { Services } from "./components/Services";
import { References } from "./components/References";
import { Box } from "@mui/material";

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
