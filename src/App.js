import './App.css';
import Random from './components/Random';
import Display from './components/Display';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Layout from './layouts/HomeLayout';
function App() {

const [name, setName] = useState("");

const getUserName = (name) => {
  setName(name);
}
const data= "parent data 1"
const data2= "parent data 2"
const data3= "parent data 3"

  return (
    // <main>
    //   <Random />
    //   <Display parentData={data}
    //   parenrData1={data2}
    //   parentData2={data3} 
    //   nameFxn={getUserName}/>
    //   <div>{name}</div>
    // </main>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>} >

          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/' element={<Home />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


