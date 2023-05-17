import React, { createContext, useReducer } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import LoginPage from "./components/LoginPage";
import ContactPage from "./components/Contact";
import SignUp from "./components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import LogoutPage from "./components/LogoutPage";
import { initialState, reducer } from "./reducer/UseReducer";

export const UserContext = createContext();

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/logout" element={<LogoutPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Routing />
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default App;


// all down code is uncorrect it show this error annot destructure property 'basename' of 'react__WEBPACK_IMPORTED_MODULE_0__.useContext(...)' as it is null.

// and i found my mistake browserrouter i defined in routing function it will be stay in app function 
// import React, { createContext, useReducer } from "react";
// import Navbar from "./components/Navbar";
// import HomePage from "./components/HomePage";
// import AboutPage from "./components/AboutPage";
// import LoginPage from "./components/LoginPage";
// import ContactPage from "./components/Contact";
// import SignUp from "./components/SignUp";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ErrorPage from "./components/ErrorPage";
// import LogoutPage from "./components/LogoutPage";
// import { initialState,reducer } from "./reducer/UseReducer";

// export const UserContext = createContext();

// const Routing = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/signin" element={<LoginPage />} />
//         <Route path="/contact" element={<ContactPage />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/logout" element={<LogoutPage />} />
//         <Route path="/*" element={<ErrorPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };
// const App = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <>
//       <UserContext.Provider value={{state,dispatch}}>
//         <Navbar />
//         <Routing />
//       </UserContext.Provider>
//     </>
//   );
// };

// export default App;
