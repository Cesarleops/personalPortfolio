import { Fade } from '../fade'
import './about.scss'
export const AboutMe = () => {

    return(
        <section className="aboutSection">
            <h2 className='aboutSection--title'>Some things about me</h2>
            <Fade>
                <p className='aboutSection--info'>I'm currently studying software engineering at Universidad Nacional in Medellin, and I've been working as a front-end developer at Umoob, a fitness Start Up. I really enjoy working as a member of a team, I like to share ideas and work with a common objective, I enjoy solving problems and learning new things constantly.
                    Besides of work and studies I like to read novels and books related with space, I also like to play a lot of games.
                </p>
            </Fade>
         
        </section>
    )
}