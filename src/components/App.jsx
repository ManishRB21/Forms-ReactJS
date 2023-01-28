import React from 'react'
import { useState } from 'react';

const App = () => {
    const [name, setname]= useState();
    const [fullName, setFullname] = useState();

    const onSubmit = () => {
        setFullname(name);
    }


    const inputevent = (e) => {
        
        setname(e.target.value);
    }

    return (
        <>
            <div>
                <h1>hello {fullName}</h1>
        <input type='text' placeholder='enter' onChange={inputevent} value={name} />
                <button onClick={onSubmit}>click me</button>
            </div>
        </>
    )
}
export default App;
