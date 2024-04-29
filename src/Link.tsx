import { EVENTS } from "./interfaces/consts"

export function navigate(href: any) {
    window.history.pushState({}, '', href) // agrega al historial una nueva url
    const navigationEvent = new Event(EVENTS.PUSHSTATE) //crea el nuevo evento
    window.dispatchEvent(navigationEvent) //lanza el nuevo evento
}

export function Link({ target, to, ...props }: { target?: string | undefined, to: string | undefined, [key: string]: any }) {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        const isMainEvent = event.button === 0 // click principal (click izquierdo)
        const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
        const isManageableEvent = target === undefined || target === '_self'

        if (isMainEvent && isManageableEvent && !isModifiedEvent) {
            event.preventDefault()
            navigate(to)
        }
    }

    return <a onClick={handleClick} href={to} target={target} {...props} />
}
