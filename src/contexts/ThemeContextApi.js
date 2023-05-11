import React, { createContext, useEffect, useState } from 'react';


export const AuthContext = createContext();



const ThemeContextApi = ({children}) => {
    const [theme,setTheme]=useState('light')
    const [icons,setIcons]=useState(true)
  useEffect(()=>{
    if(theme==="dark"){
      document.documentElement.classList.add("dark")
    }
    else{
      document.documentElement.classList.remove("dark")
    }

  },[theme])

  const handleThemeSwitch=()=>{
    setTheme(theme === "dark" ? "light" : "dark");
    console.log("dark")
    setIcons(icons? false: true)
  }
   

    

    

   

  

    const ThemeInfo = {
        handleThemeSwitch,icons
    }
    return (
        <AuthContext.Provider value={ThemeInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ThemeContextApi;