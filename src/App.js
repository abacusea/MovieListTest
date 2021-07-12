import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.css';
import "./index.css";
import "./scss/App.scss";
import Routes from "./router";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes />
    </>
    
  )
}
  export default App;