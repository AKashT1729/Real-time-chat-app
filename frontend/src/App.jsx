import { Route, Routes } from "react-router-dom";
import "./App.css";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import Home from "./component/Home";
import About from "./component/About";
import ChatDashboard from "./component/ChatDashboard";

function App() {
  return (
    <>

       <Routes>
        <Route index element= {<Home/>} />
        <Route path="about" element= {<About/>}/>
        <Route path="login" element={<LogIn/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="chatdashboard" element={<ChatDashboard/>}/>
       </Routes>
       </>
  );
}

export default App;
