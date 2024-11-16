import "./App.css";
import Background from "./component/Background";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <div className="relative w-screen h-screen">
        <Background />
        {/* <LogIn /> */}
        <Register/>
      </div>
    </>
  );
}

export default App;
