import { useEffect, useRef, useState } from 'react'
import './experienceFade.scss'
export const ExperienceFade = ({children}) => {
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
       
    },[])
    return(
        <section className={`fadeExperience ${show ? 'showingE' : ''}`} ref={fadeSection}>
            {show ? children : null}
        </section>
    )
}