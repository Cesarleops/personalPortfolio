import {AiFillGithub} from 'react-icons/ai'
import {BiPlay} from 'react-icons/bi'
export const ProjectsCard = ({name,tech,demo,gitHub,description}) => {
    return(
        <div>
            <h4>{name}</h4>
            <p>{description}</p>
            <a href={demo}>
                <BiPlay/>
            </a>
            <a href={gitHub}>
                <AiFillGithub/>
            </a>
            <ul>
                {tech.map((t, i)=> (
                    <li key={i}>{t}</li>
                ))}
            </ul>
        </div>
    )
}