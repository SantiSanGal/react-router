import { useEffect, useState } from 'react';
import { EVENTS } from './interfaces/consts';

type Route = {
    path: string;
    Component: React.ComponentType<any>;
}

type RouterProps = {
    routes: Route[];
    defaultComponent?: React.ComponentType<any>
}

export function Router({ routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }: RouterProps) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {
        const onLocationChange = () => { //cuando se lanza el nuevo evento setea el estado de la url
            setCurrentPath(window.location.pathname)
        }

        //pone a escuchar el nuevo evento
        window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
        window.addEventListener(EVENTS.POPSTATE, onLocationChange)

        return () => { //se limpian las referencias
            window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
            window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
        }
    }, [])

    const Page = routes.find(({ path }) => path === currentPath)?.Component
    return Page ? <Page /> : <DefaultComponent />
}