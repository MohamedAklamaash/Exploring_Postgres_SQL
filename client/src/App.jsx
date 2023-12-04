import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import UpdateDetailsPage from "./pages/UpdateDetailsPage";
import CreateNewRestraunt from "./pages/CreateNewRestraunt";
import SearchResults from "./pages/SearchResults";

const App = () => {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    // Check if user data is empty or undefined
    if (!userData) {
      return <Navigate to="/login" />;
    }
  }, [userData]);
  console.log(userData);
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <LoginPage userData={userData} setUserData={setUserData} />
            }
          />
          <Route path="/updateRestraunt/:id" element={<UpdateDetailsPage />} />
          <Route path="/createnew" element={<CreateNewRestraunt/>}/>
          <Route path="/search" element={<SearchResults/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
