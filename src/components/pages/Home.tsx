import './home.scss'

const Home = () => {
    const title = 'Welcome to react notes';
    const likes = 50;
    const person = {name: 'yoshi', color: 'green'}
    const link = 'https://google.com';
    
    return (
        <div className="home">
            <h1>{ title }</h1>
            <p>Liked { likes } times</p>
            <p>Name: { person.name }, Color: { person.color }</p>
            <a href={ link }>Google</a>
        </div>
    )
}

export default Home;