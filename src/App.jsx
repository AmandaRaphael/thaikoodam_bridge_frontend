import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/HomePage";
import About from "./routes/AboutPage";
import Profiles from "./routes/ProfilePage/Profiles";
import Musicians from "./routes/ProfilePage/Musicians";
import MoreInfo from "./routes/ProfilePage/MoreInfo";
import Contact from "./routes/ProfilePage/Contact";
import "./App.css";
import CareerPage from "./routes/CareerPage/CareerPage";
import SignInForm from "./routes/signInPage/SignInForm";
const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="profiles" element={<Profiles />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <h2>Our Musicians</h2>
              </main>
            }
          />
          <Route path=":musician" element={<Musicians />}>
            <Route path=":musicianId" element={<MoreInfo />}>
              <Route path=":musicianNum" element={<Contact />} />
            </Route>
          </Route>
        </Route>
        <Route path="career" element={<CareerPage />} />
        <Route path="signIn" element={<SignInForm />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;
