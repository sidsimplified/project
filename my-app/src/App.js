import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/navbar'; 
import { useEffect,useState } from 'react';

function App() {
 const [slidein,setslidein] = useState(true)
 useEffect(()=>{
  if (window.innerWidth <= 768){
  setslidein(false)
  }
 },[])
 const handleslidein=()=>{
  if (window.innerWidth<=768){
    setslidein((state)=>!state);
  }
 };


  return (
    <div className="App">
     <Navbar handleslidein = {handleslidein}/>
    </div>
  );
}

export default App;
