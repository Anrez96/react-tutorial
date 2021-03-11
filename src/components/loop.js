import React from 'react'
import Tweet from './tweet'

const Loop = () => {
    let data = [{
        name:'hmmm',
        tweet:'test'
    },{
        name:'hmmm',
        tweet:'test'
    }]

    return (
        <section>
            <section>
            {data.map((tweet) =>(
                <Tweet content = {tweet.tweet} name = {tweet.name}/>
            ))}
        </section>
        </section>
    )
}

export default Loop