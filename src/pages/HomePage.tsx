import { navigate } from "../App"

export const HomePage = () => {
    return (
        <>
            <h1>Home</h1>
            <p>Página de ejemplo para React Router</p>
            {/* <a href="/about">Ir a About</a>    */}
            <button onClick={() => navigate('/about')}> Ir a About </button>
        </>
    )
}