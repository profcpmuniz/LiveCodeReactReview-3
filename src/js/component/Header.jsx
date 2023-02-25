import React from 'react'


export function Header({image}){
    console.log("rendering Header")
    return (
        <>
                <h1 className="text-center mt-5">Hello Rigo!</h1>
                <p>
                    <img src={image} />
                </p>
        </>
    )
}