// import logo from './logo.svg';
import { HashRouter } from "react-router-dom";
import "./App.css";
// import { HashRouter } from 'react-router-dom';
// import ImageLoad from './ImageLoad';
// import ImageView from './ImageView';
// import ImageTest from './ImageTest';
import Navigation from "./Navigation";
import AadharUpload from "./AadharUpload";

// import home from "./Components/home";
import home from "./Home.js";

function App() {
  return (
    <div>
      <HashRouter>
        <Navigation></Navigation>
        <home></home>
      </HashRouter>

      {/* <AadharUpload></AadharUpload> */}
    </div>
  );
}

export default App;
