import { ProjectsCard } from '../ProjectsCard'
import './mobileProjects.scss'

const myProjects = {
    AllGames: {
          title: "AllGames",
          desc: "It is a library where you can find information about any video game such as description, release date, reviews and more. You can see the most popular games as well as use filters to simplify your search.",
          stack: ["Javascript", "React", "Redux", "CSS", "PostgreSql", "Express"],
          image: "",
          gitHub: "https://github.com/Cesarleops/PI-Videogames",
          demo: ""
  
          },
     Hbuy: {
          title: "H-BUY",
          desc: "E-Commerce developed as a team, we used the MERN stack to develop an E-commerce that was functional for different industries, it has authorization, payment gateway, administrative profiles and other functionalities. ",
          stack: ["Javascript", "React", "Redux", "Bootstrap", "MongoDB", "MaterialUI", "Express"],
          image: "",
          gitHub: "https://github.com/Felipesch96/PF-H-Buy",
          demo: "https://main.d2d0y3pf0pfssa.amplifyapp.com/"

      },
      Umoob: {
          title: "Umoob",
          desc: "Umoob is a business management app and a marketplace focused on the fitness industry. I've worked as a front-end developer in several development cycles ",
          stack: ["Typescript", "Python", "React", "Redux" ,"Sass", "Django"],
          image: "../../assets/image1.jpg",
          demo: "https://www.umoob.com/"
  
          }

  }
export const MobileProjects = () => {

    return(
        <div className='mobileContainer'>
            {Object.keys(myProjects).map((key,i)=> (
                <ProjectsCard name={myProjects[key]["title"]} 
                              demo={myProjects[key]["demo"]}
                              gitHub={myProjects[key]["gitHub"]}
                              description={myProjects[key]["desc"]}
                              tech={myProjects[key]["stack"]}
                              key={i}
                />
            ))}
        </div>
    )
}