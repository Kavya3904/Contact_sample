import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./components/contacts/Contacts";
import { Provider } from "./context";
import AddContact from "./components/contacts/AddContact";
import About from "./components/pages/About";
import Test from "./components/test/Test";
import EditContact from "./components/contacts/EditContact";
class App extends Component {
  render() {
    //? js without sugar coating
    //   return React.createElement(
    //     "div",
    //     { className: "App" },
    //     React.createElement("h1", null, "hai")
    //   );
    // const name =  'kavya';

    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="contact Manager" />

            <div className="container">
              <Routes>
                <Route exact path="/" element={<Contacts />} />
                <Route exact path="/contact/add" element={<AddContact />} />

                <Route exact path="/about" element={<About />} />
                <Route exact path="/test" element={<Test />} />
                <Route
                  exact
                  path="/contact/edit/:id"
                  element={<EditContact />}
                />
              </Routes>

              {/* <Contact  name="Kavya" email="kvy000@gmail.com" phone="9002999202"/> */}
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
