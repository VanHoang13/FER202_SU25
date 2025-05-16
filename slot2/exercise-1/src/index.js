import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import NamePerson from "./NamePerson";
import PeopleList from "./PeopleList";
import PersonDetails from "./PersonDetails";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <NamePerson />
    <PeopleList />
    <PersonDetails />
  </React.StrictMode>
);

reportWebVitals();
