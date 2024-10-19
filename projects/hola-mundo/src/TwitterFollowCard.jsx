export function TwitterFollowCard({formatUserName, userName, name, isFollowing}){
    const srcImage = `https://unavatar.io/${userName}`
    
    return (
        <article className='ch-followCard'>
            <header className='ch-followCard-header'>
                <img className='ch-followCard-avatar'
                    alt="Avatar de prueba"
                    src={srcImage}/>
                <div className='ch-followCard-info'>
                    <strong>{name}</strong>
                    <span className='ch-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className='ch-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}