import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(){
    
    const format = (userName) => `@${userName}`

    return(
        // El <React.Fragment> </React.Fragment> se puede reemplazar por <> </>
        //<React.Fragment>
        <section className='App'>
            
            <TwitterFollowCard 
                formatUserName={format} 
                isFollowing 
                userName="midudev"
                name="Carlos Hernández"/>
            <TwitterFollowCard 
                formatUserName={format} 
                isFollowing={false} 
                userName="midudev" 
                name="Yecid Hernández"/>
            <TwitterFollowCard 
                isFollowing={true} 
                formatUserName={format} 
                userName="midudev" 
                name="Carlos"/>
            <TwitterFollowCard 
                isFollowing={false} 
                formatUserName={format} 
                userName="midudev" 
                name="Carlos Sánchez"/>

        </section>
        //</React.Fragment>
    )
}