import { AboutMe } from '../about'
import { Experience } from '../experience'
import { Pageheader } from '../header'
import { Projects } from '../projects'
import './home.scss'

export const Home = () => {

    return(
        <main className="mainContainer">
           <Pageheader/>
           <AboutMe/>
           <Experience/>
           <Projects/>

        </main>
    )
}