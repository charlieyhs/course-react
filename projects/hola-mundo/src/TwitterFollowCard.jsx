import { useState } from "react";

export function TwitterFollowCard({userName='unknown', children, initialIsFollowing}){
    /*const state = useState(false);
    const isFollowing = state[0]; // El estado actual
    const setIsFollowing = state[1]; // La función o metodo para cambiar el estado*/
    // Las lineas anteriores, es lo mismo que esta linea
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const srcImage = `https://unavatar.io/${userName}`;
    const  text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing 
    ? 'ch-followCard-button is-following'
    : 'ch-followCard-button';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return (
        <article className='ch-followCard'>
            <header className='ch-followCard-header'>
                <img className='ch-followCard-avatar'
                    alt="Avatar de prueba"
                    src={srcImage}/>
                <div className='ch-followCard-info'>
                    <strong>{children}</strong>
                    <span className='ch-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button onClick={handleClick} className={buttonClassName}>
                <span className='ch-followCard-text'>{text}</span>
                    <span className='ch-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}