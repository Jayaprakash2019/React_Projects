import React, { useEffect, useState } from 'react'

const Randomcolor = () => {
    const [typeOfColor,settypeOfColor] = useState("hex")
    const [color, setColor] = useState("#000000")

    function randomColorUtility(length){
        return Math.floor(Math.random()*length)
    }

    function handleCreateRandomHexColor(){
        const hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
        let hexcolor =  '#';

        for(let i=0;i<6;i++){
            hexcolor += hex[randomColorUtility(hex.length)]
        }
        setColor(hexcolor)
    }

    function handleCreateRandomRGBColor(){
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        setColor(`rgb(${r},${g},${b})`)
    }

    useEffect(()=>{
        if(typeOfColor === 'rgb') handleCreateRandomRGBColor();
        else handleCreateRandomHexColor();
    },[typeOfColor])

  return (
    <div style={{
        width: '100vw',
        height:'100vh',
        background: color, 
    }}>
        <button onClick={()=>settypeOfColor('hex')}> Create Hex Button </button>
        <button onClick={()=>settypeOfColor('rgb')}> Create RGB Button </button>
        <button 
        onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRGBColor}> 
            Generate Random Button </button>
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "60px",
            marginTop: "50px",
            flexDirection:'column',
            gap: "20px"
        }}>
            <h3> {typeOfColor ==='rgb'? 'RGB Color ':'HEX Color ' } </h3>
            <h1>{color}</h1>
        </div>
    </div>
  )
}

export default Randomcolor