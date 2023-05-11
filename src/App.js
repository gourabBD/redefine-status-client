
import { useState,useEffect, useContext } from 'react';
import './App.css';
import Main from './layout/Main';
import { AuthContext } from './contexts/ThemeContextApi';

function App() {
  
 
  return (
    <div   className="App overflow-x-hidden lg:pl-52 lg:pr-52 pt-5  min-h-screen bg-white dark:bg-black">
   
     <Main></Main>
    </div>
  );
}

export default App;
