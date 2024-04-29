import { Link } from '../../Link';
export const Page404 = () => {
    return (
        <>
            <div>
                <h1>No se encontró</h1>
                <img src="/public/images/thisisfine.gif" alt="" />
            </div>
            <Link to='/' >Volver a Home</Link>
        </>
    )
}