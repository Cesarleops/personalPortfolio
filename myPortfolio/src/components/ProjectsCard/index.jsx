import {AiFillGithub} from 'react-icons/ai'
import {BiPlay} from 'react-icons/bi'
import './projectsCard.scss'
export const ProjectsCard = ({name,tech,demo,gitHub,description}) => {
    return(
        <div className='projectCard'>
            <h4 className='projectCard--name'>{name}</h4>
            <p className='projectCard--desc'>{description}</p>
            <div className='projectCard--icons'>
            <a href={demo}>
                <BiPlay/>
            </a>
            <a href={gitHub}>
                <AiFillGithub/>
            </a>
            </div>
            <ul className='projectCard--list'>
                {tech.map((t, i)=> (
                    <li key={i}>{t}</li>
                ))}
            </ul>
        </div>
    )
}