import { AboutMe } from '../about'
import { Experience } from '../experience'
import { Pageheader } from '../header'
import { Projects } from '../projects'
import './home.scss'

export const Home = () => {

    return(
        <main className="mainContainer">
            <div className='mainContainer--pageHeader'>
                <Pageheader/>
            </div>
            <div className='mainContainer--about'>
                <AboutMe/>
            </div>
            <div className='mainContainer--experience'>
                <Experience/>
            </div>
           
           <div className='mainContainer--projects'>
           <h4 className='mainContainer--projects__title'>My projects</h4>
                <Projects/>
           </div>
           
        </main>
    )
}