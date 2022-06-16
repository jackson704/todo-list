import "./App.css";
import MainNavbar from "./components/MainNavbar";
import MainForm from "./components/MainForm";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container } from "react-bootstrap";
import React from "react";
import "./components/MainForm.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReadTodo from "./components/ReadTodo";
import CardState from "./context/CardState";

// REACT TOASTIFY
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import "./components/ContentTable.css"

function App() {
  // const {  } = useContext(CardContext);

  return (
    <>
      <CardState>
        <ToastContainer />
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <MainNavbar />
                  <Container fluid className="p-5">
                    <MainForm />
                  </Container>
                </>
              }
            />
            <Route
              path="read-todos"
              element={
                <>
                  <MainNavbar />
                  <ReadTodo />
                </>
              }
            />
          </Routes>
        </Router>
      </CardState>
    </>
  );
}

export default App;
