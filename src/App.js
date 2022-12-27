import { useState } from 'react';
import './App.css';
import Bmilist from './components/Bmilist';
import Bmiscore from './components/Bmiscore';
import Form from './components/Form'
 
function App() {
  const [bmi, setbmi ] = useState("")
  const [bmiType, setbmiType] = useState("")

  // let bmi= 18
  //  const changeBmi = () =>{
  //   // bmi = 19
  //   setbmi(19)
  // }
  return (
    <> 
     <Form/>
    <Bmiscore bmiNo = {bmi} bmiName={bmiType}/>
    <Bmilist/>
    </>
  );
}

export default App;
