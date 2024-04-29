import { Link, navigate } from "../Link"

export const AboutPage = () => {
    return (
        <>
            <h1>About</h1>
            <div>
                <img src="/public/images/kitty-baseline.jpg" alt="Yo" />
            </div>
            <p>Página de ejemplo para React Router</p>
            {/* <a href="/">ir a Home</a> */}
            {/* <button onClick={() => navigate('/')}> ir a Home </button> */}
            <Link to='/'> ir a Home </Link >
        </>
    )
}
