import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Success from "./Components/Success";
import Protector from "./Components/Protector";
import { useAuth } from "./Components/AuthContext";
import NewNavbar from "./Components/NewNavbar";

function App() {
  const {user} = useAuth()
  return (
    <>
    {
      user === null ? (
        <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route 
          path="/dashboard" 
          element={
            <Protector>
              <Success />
            </Protector>
          } 
        />
      </Routes>
    </Router>
      ) : (
        <>
        {/* <Success/> */}
        <NewNavbar/>
        </>
      )
    }
    </>
    
  );
}

export default App;
