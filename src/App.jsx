import './App.css'
import {useEffect, useState} from "react";
import Form from "./components/organisms/Form/index.jsx";
import H2Element from "./components/atoms/H2Element/index.jsx";
import Header from "./components/molecules/Header/index.jsx";
import Results from "./components/organisms/Results/index.jsx";

function App() {


  return (
    <>
        <Header />
        <div className= 'bg-cyan-700 min-h-screen'>
            <H2Element content="Where are you going, mate?"/>
            <Form />
            <Results numStops="numStops" line="line"/>
        </div>

    </>
  )
}

export default App
