import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import { router } from "./config/config";
import Search from "./components/Search/Search";
import Footer from "./components/Footer/Footer";
import Login from "./components/Loginpage/Login"; // Import Login Component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {!isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} /> // Pass a prop to handle login
      ) : (
        <Router>
          <NavBar />
          <Routes>
            {router.map((path) => (
              <Route
                exact
                key={uuidv4()}
                path={path.path}
                element={
                  <News
                    key={path.key}
                    newscategory={path.category}
                    country={path.country}
                  />
                }
              />
            ))}
            <Route path="/search/:query" element={<Search />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
