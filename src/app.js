import React, {useState} from 'react';
import Nav from './components/nav'
import Loop from './components/loop'

const App = () => {
    
    //this is where you write javascript
    //look at the name variable that is put inside Tweet component
    //it is a way to put in data to the component by using props
    //props in this case is test
    //you can name your props whatever you want
    const name = "lili";


    //state example
    
    // let counter = 0
    //now let's change our counter variable to an array

    const [counter, setCounter] = useState(0)

    //so here is what happen when we use state, the first element (counter)
    //is a variable equal to the default value that we set in to our useState
    //in this example will be zero
    //setCounter is a callback function that we will be using
    //to make react know what to do

    //in this example before we set any state to react, react won't
    //change according to the logic we have given so how do we make it
    //react? use state of course that way react will know
    //that way react component will change according the state we given
    const increment = () => {
        // counter += 1
        //for this example let's change the counter += 1 to this
        
        // setCounter((prev) => prev + 1)

        //so prev here is means previous state we set it as a funtion because
        //this is the callback function that react will use to process the logic
        //we want

        setCounter(counter + 1)

        //we can also make a simple counter like this

        console.log(counter);
    }

    //return only used for returning jsx putting javascript logic here 
    //is not recomended
    return (
        <div className="App">
            <h1>Tweter</h1>
                <div className="Props">
                    <Nav />
                    <Loop />
                </div>
                <div className="State">
                    State example <br/>
                    Counter {counter} <br/>
                    <button onClick={increment}>add to counter</button>
                </div>
        </div>
    )
}

export default App