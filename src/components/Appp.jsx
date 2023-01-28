import React from 'react'
import { useState } from 'react';

const Appp = () => {
    const [name, setname]= useState({
        fname : '',
        lname : '',
    });
    const [newname, newsetname]= useState();
    const onSubmit = (e)=>{
        newsetname(name.fname);
    }

    const inputevent = (e)=>{
        const val = e.target.value;
        const name = e.target.name;
        setname((e)=>{
            return{...e,[name]:val}
        })
    }
    

    return (
        <>
            <div>
                <h1>hello {newname} {name.lname} </h1>
        <input type='text' placeholder='enter' name='fname' onChange={inputevent}  />
        <input type='text' placeholder='enter' name='lname' onChange={inputevent} value={name.lname} />
                <button onClick={onSubmit}>click me</button>
            </div>
        </>
    )
}
export default Appp;
