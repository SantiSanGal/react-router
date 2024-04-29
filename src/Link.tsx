import { EVENTS } from "./interfaces/consts"

export function navigate(href: any) {
    window.history.pushState({}, '', href) // agrega al historial una nueva url
    const navigationEvent = new Event(EVENTS.PUSHSTATE) //crea el nuevo evento
    window.dispatchEvent(navigationEvent) //lanza el nuevo evento
}

export function Link({ target = '', to = '/', ...props }) {
    const handleClick = (e: any) => {


        const isMainEvent = e.button === 0 // click principal (click derecho)
        const isModifiedEvent = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey
        const isManageableEvent = target === undefined || target === '_self'

        if (isMainEvent && isManageableEvent && !isModifiedEvent) {
            e.preventDefault()
            navigate(to)
        }
    }

    return <a onClick={handleClick} href={to} target={target} {...props} />
}
