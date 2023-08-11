import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import "./App.scss";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile";
import SignUp from "./Components/Auth/SignUp/SignUp";
import SignIn from "./Components/Auth/SignIn/SignIn";
import Header2 from "./Components/Header/Header2";

function App() {
  function Navbar() {
    const location = useLocation();
    const isSignupOrSigninPage =
      location.pathname === "/signup" || location.pathname === "/signin";

    return isSignupOrSigninPage ? <Header2 /> : <Header />;
  }

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
