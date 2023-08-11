import Furniture from './ReactProjects/Furniture';
import CatSec from './ReactProjects/CartItem';
import Why from './ReactProjects/Why';
import FurnitureForm from "./ReactProjects/Form";
import './App.css';
import { useState } from 'react';

function App() {

  const buttonTitle = "Register";
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [gmail, setGmail] = useState("")
  const [newsGmail, SetNewsGmail] = useState("")



  const [Mcount, setCount] = useState(0)
  const handleplus = () => {
    setCount(prev => prev + 1)
  }
  const handlereset = () => {
    setCount(0)
  }


  return (
    <div className="App">
      <Furniture logo="The Johnsons" Mcount={Mcount} />
      <CatSec explore="explore" handleplus={handleplus} />
      <Why/>
      <FurnitureForm
        firstName={firstName}
        lastName={lastName}
        setFirstName={setFirstName}
        setLastName={setLastName}
        gmail={gmail}
        setGmail={setGmail}
        newsGmail={newsGmail}
        setNewsGmail={SetNewsGmail}
      />
    </div>
  );
}

export default App;
