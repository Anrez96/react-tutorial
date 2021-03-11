import React from 'react';

//now look at props inside the parameter of Tweet
//it is an empty object that later on will be used by our jsx to
//as an input of variable
//important to know, props can only be passed down not passed up
//it means that it can only pass the props downstream from app to the
//component not the other way around

const Tweet = (props) => {
    return(
        <div>
            props example
            <h1>{props.content}</h1>
            <h2>{props.name}</h2>
        </div>
    )
}

export default Tweet