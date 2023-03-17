import { Carousel } from "../carousel"
import './projects.scss'
export const Projects = () => {
    return(
        <main className="projectsContainer">
               <p>My projects</p>
                <Carousel>
                    <div className="slideContent">
                        <h1>Primera</h1>
                    </div>
                    <div className="slideContent">
                        <h1>Segunda</h1>
                    </div>
                    <div className="slideContent">
                        <h1>Tercera</h1>
                    </div>
                </Carousel>

        </main>
    
    )
}