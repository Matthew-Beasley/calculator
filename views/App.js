import React, {useState, useEffect} from 'react';
import { Route, Link } from 'react-router-dom';
import {Tabs, Tab} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home';
import Lengths from './Lengths';
import Weights from './Weights';


const App = () => {
  return (
    <div className="tabcontainer">
     <Tabs defaultActiveKey="home" id="tools" className="mb-3">
        <Tab eventKey="home" title="Home">
          <Home />
        </Tab>
        <Tab eventKey="lengths" title="Convert Lengths">
          <Lengths />
        </Tab>
        <Tab eventKey="weights" title="Convert Weights">
          <Weights />
        </Tab>
    </Tabs>
    </div>
  );
};

export default App;