import React from "react";
import { Routes , Route} from "react-router-dom";
import MainNavbar from "./Components/MainNavbar";
import NavbarforImage from "./Components/Images/NavbarforImage";
import NavbarforContain from "./Components/Contain/NavbarforContain";
import NavbarforNews from "./Components/News/NavbarforNews";
import NavbarforVideos from "./Components/Videos/NavbarforVideo";
import { Provider } from "react-redux";
import store from "./Redux/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <MainNavbar/>
         <Routes>
           <Route path="/search" element={<NavbarforContain/>} />
           <Route path='/image' element = {<NavbarforImage/>}/>
           <Route path='/news' element = {<NavbarforNews/>}/>
           <Route path='/video' element = {<NavbarforVideos/>}/>
         </Routes>
      </Provider>
    </>
  );
}

export default App;
