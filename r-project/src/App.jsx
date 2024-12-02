import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import './App.css';
import Films from "./components/Films";
import Anm from "./components/Anm";
import Delete from "./components/Delete";
import Sign from "./components/Sign";
import Signup from "./components/Signup";
import Series from "./components/Series";
import Mylist from "./components/Mylist";

const App = () => {
  const [searchQuery, setSearchQuery]=useState('');
  const [myList, setMyList] = useState([]); // Shared state for My List

  // Function to add an item to My List
  const addToMyList = (item) => {
    if (!myList.some(existingItem => existingItem.id === item.id)) {
      setMyList([...myList, item]); // Add item to My List if it's not already added
    } else {
      alert("Item already in My List!");
    }
  };
  return (
    <BrowserRouter>
      <Navbar onSearch={setSearchQuery}/>
      <Routes>
        <Route path='/' element={<Home searchQuery={searchQuery} addToMyList={addToMyList}/>}/>
        <Route path='/films' element={<Films searchQuery={searchQuery} />}/>
        <Route path="/series" element={<Series searchQuery={searchQuery}/>}/>
        <Route path="/list" element={<Mylist searchQuery={searchQuery} myList={myList}/>}/>
        <Route path='/create' element={<Anm/>}/>
        <Route path='/delete' element={<Delete searchQuery={searchQuery}/>}/>
      </Routes>
    </BrowserRouter>
    // <BrowserRouter>
    //     <Routes>
    //       <Route path='/' element={<Sign/>} />
    //       <Route path='/signup' element={<Signup />} />

    //       <Route path="/nav" element={<>
    //         <Navbar />
    //         <Routes>
    //           <Route path='/' element={<Home />} />
    //         </Routes>
    //       </>} />
    //     </Routes>
    // </BrowserRouter>
  );
}

export default App;
