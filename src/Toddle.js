import { useState } from "react"

const Toggle=()=>{
    const[background, setbackgroud] = useState("white")
    const [textcolor, settextcolor] = useState("#1b1b1b")
    const[buttonstyle, setbuttonstyle] = useState("white")  
    
    const handleclick=()=>{
        setbackgroud(background==='white'?"#1b1b1b": "white");
        settextcolor(textcolor==="#1b1b1b" ? "#ffa31a":"#1b1b1b")
        setbuttonstyle(background==="white"?"#1b1b1b":"white")
    }
    return(
        <>
        
        <section style={{background, color: textcolor}}>
            <button onClick={handleclick} style={{buttonstyle, color: textcolor, border:`2px solid ${textcolor}`}}>
          White theme
            </button>
        </section>
        <section className="content">
         <h1>Welcome to a </h1>

        </section>
        </>
    )
}

export default Toggle