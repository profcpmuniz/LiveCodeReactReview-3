import React, {useState} from "react";
export function Footer ({data}){
    const [text, setText] = useState(' love')
    console.log(text);
    return (
        <p>
            <button onClick={()=> setText(' love')}>love</button> or <button onClick={()=> setText(' passion')}>passion</button>
            Made by{" "}
            <a href="http://www.4geeksacademy.com">4Geeks {data}</a>, with
            {text}!
        </p>
        )

}