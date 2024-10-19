import React, { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Carlos Hernández',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo H.',
        isFollowing: false
    },
    {
        userName: 'PacoHdezs',
        name: 'Paco Hdez',
        isFollowing: true
    },
    {
        userName: 'TMChein',
        name: 'Tomas',
        isFollowing: false
    }
]

export function App(){
    const format = (userName) => `@${userName}`;
        
    return(
        // El <React.Fragment> </React.Fragment> se puede reemplazar por <> </>
        //<React.Fragment>
        <section className='App'>
            {
                users.map(({userName, name, isFollowing}) => (
                    <TwitterFollowCard
                        key={name}
                        userName={userName}
                        initialIsFollowing={isFollowing}>
                        {name}
                    </TwitterFollowCard>
                ))
                /*
                users.map(user => {
                        const {userName, name, isFollowing} = user;
                        return (
                            <TwitterFollowCard
                                userName={userName}
                                initialIsFollowing={isFollowing}>
                                {name}
                            </TwitterFollowCard>

                        )
                    })
                }*/
            }
        </section>
        //</React.Fragment>
    )
}