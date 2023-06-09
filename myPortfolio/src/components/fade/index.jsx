import { useEffect, useRef, useState } from 'react'
import './fade.scss'
export const Fade = ({children}) => {
    const [show, setShow] = useState(false)
    const fadeSection= useRef(null)

    useEffect(()=>{
        const onIntersect = (entries) => {

 
            entries.forEach(e => {
                if(e.isIntersecting){
                    setShow(e.isIntersecting)
                }
            })
        }
        const observer = new IntersectionObserver(onIntersect)

        observer.observe(fadeSection.current)
        return () => observer.unobserve(fadeSection.current)
    },[])
    return(
        <section className={`fadeSection ${show ? 'showing' : ''}`} ref={fadeSection}>
            {show ? children : null}
        </section>
    )
}