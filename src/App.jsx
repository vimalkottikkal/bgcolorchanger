import React from "react";
import './App.css';
import { useState } from "react";

const App = ()=>{
    const [bgColor, setbgColor] = useState('white');
    const colors = ['Red','Green','blue','yellow','orange'];
    
    const changeColor = (color) =>{
        setbgColor(color)
    }

    return(
        <div style={{backgroundColor:bgColor, height:'100vh' }}>
            <h1>Background Color Change</h1>
            <div style={{display:'flex',justifyContent:'center',marginTop:'100px'}}>
                {colors.map((color) =>(
                    <button className="button" key={color} onClick={() => changeColor(color)} style={{backgroundColor:color}}>
                        {color}
                    </button>
                ))}
            </div>
        </div>
    )
}
export default App