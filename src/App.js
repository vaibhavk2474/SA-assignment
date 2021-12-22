import React,{useState,useEffect} from 'react';
import './App.css';
import Page_01 from './components/Page_01';
import {data as Data} from './store/data/Data';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router ,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";
import Page_02 from './components/Page_02';


function App() {

  // const [state, setstate] = useState([]);

  // useEffect(() => {
  //   let data = [...Data];
  //   // console.log(data,13);
  //   setstate(data)


  // },[])

  return (

    <>
    <Router>
      <Switch>
        <Route path="/" element={ <Page_01></Page_01>}>
         
        </Route>

        <Route path="/:itemId" element={<Page_02></Page_02>}></Route>
      </Switch>
      </Router>
      </>
  );
}


export default App;
