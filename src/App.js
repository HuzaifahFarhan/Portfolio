import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import {Routes, Route, Router} from 'react-router-dom'
import Project from './Components/Project';
import CollapsibleExample from './Components/Responsiveheader';
import Resume from './Components/Resume';
import AppRouter from './Components/AppRouter';


function App() {
  return (
    <>
    <CollapsibleExample />
    {/* <Header /> */}
    <AppRouter />
    <Footer />
    </>
  );
}

export default App;
