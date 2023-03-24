import { AboutMe } from '../about'
import { Experience } from '../experience'
import { Pageheader } from '../header'
import { Projects } from '../projects'
import './home.scss'

export const Home = () => {
    
    return(
        <main className="mainContainer">
            <div className='mainContainer--navBar'>
                <ul>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#experience'>Experience</a></li>
                    <li><a href='#projects'>Projects</a></li>
                </ul>
            </div>
            <div className='mainContainer--pageHeader'>
                <Pageheader/>
            </div>
            <div id='about' className='mainContainer--about'>
                <AboutMe/>
            </div>
            <div id='experience' className='mainContainer--experience'>
                <Experience/>
            </div>
           
           <div id='projects' className='mainContainer--projects'>
           <h4  className='mainContainer--projects__title'>My projects</h4>
                <Projects/>
           </div>
           
        </main>
    )
}