import {AiFillGithub} from 'react-icons/ai'
import {BiPlay} from 'react-icons/bi'
import './projectsCard.scss'
export const ProjectsCard = ({name,tech,demo,gitHub,description}) => {
    return(
        <div className='projectCard'>
            <h4>{name}</h4>
            <p>{description}</p>
            <a href={demo}>
                <BiPlay/>
            </a>
            <a href={gitHub}>
                <AiFillGithub/>
            </a>
            <ul className='projectCard--list'>
                {tech.map((t, i)=> (
                    <li key={i}>{t}</li>
                ))}
            </ul>
        </div>
    )
}