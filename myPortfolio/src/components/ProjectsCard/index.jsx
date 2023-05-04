import {AiFillGithub} from 'react-icons/ai'
import {BiPlay} from 'react-icons/bi'
import './projectsCard.scss'
import { Carousel } from '../carousel'
export const ProjectsCard = ({name,tech,demo,gitHub,description,images}) => {
    const isMobile = window.innerWidth > 600
    return(
        <div className='projectCard'>
            <h4 className='projectCard--name'>{name}</h4>
            <p className='projectCard--desc'>{description}</p>
            <div className='projectCard--icons'>
            <a href={demo}>
                <BiPlay/>
            </a>

           { 
                name !== "Umoob" ? <a href={gitHub}>
                <AiFillGithub/>
            </a> : null}
            </div>
            <ul className='projectCard--list'>
                {tech.map((t, i)=> (
                    <li key={i}>{t}</li>
                ))}
            </ul>
            <div className='projectCard--carousel'>

           { 
               !isMobile &&  
                <Carousel>
                {images.map(e => (
                    <img key={e} src={`${e}`} alt='ilus' className='projectsCard--img'/>
                ))}
            </Carousel>}
            </div>
            
        </div>
    )
}