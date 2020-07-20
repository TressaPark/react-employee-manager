import React, { useState, useEffect } from 'react'
import API from "../../utils/API"

function EmployeeTable(props) {
    // this is where JS logic lives
    const [myVar, setMyVar] = useState ([
        {cell:(9)},
        {cell:(10)},
        {cell:(11)},
        {cell:(2)},
    ])
    let oldState=[]
    // useEffect(()=>{
    //     API.getUsers().then(stuff=>{
    //         setMyVar(stuff.data.results)
    //     })
    // })

    // function sortNumerically(){
    //     console.log("you clicked on hello world")
    //     let sorted = myVar.sort((a, b) => (a.cell > b.cell) ? 1 : -1)
    //     console.log("x",sorted)
    //     setMyVar(myVar.sort((a, b) => (a.cell > b.cell) ? 1 : -1))
    // }

    // this is where html stuff lives
    return (
        <>
            <p onClick={()=>{
                console.log(myVar)
              
                 oldState=myVar.sort((a, b) => (a.cell > b.cell) ? 1 : -1)
                 console.log(oldState)
                setMyVar(oldState)
            }
                }>Hello World</p>
            <p>{myVar[0].toString()}</p> 
            {myVar.map((person,index)=>{
                return (
                <p key={index}>{person.cell}</p>
                )
            })}
        </>
    )
}

export default EmployeeTable