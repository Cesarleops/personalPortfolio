
import { Carousel } from "../carousel"
import { MobileProjects } from "../mobileProjects"
import './projects.scss'
export const Projects = () => {
    const isMobile = window.innerWidth < 600
    return(
        <main className="projects"> 
            {
                isMobile ?   
                <section>
                    <MobileProjects/>
                </section>  :
                  <section className="projectsContainer">
                    <Carousel/>
                  </section>  
            }
                           
        </main>
    
    )
}