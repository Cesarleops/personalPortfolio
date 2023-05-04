import { ProjectsCard } from '../ProjectsCard'
import './mobileProjects.scss'

const myProjects = {
    AdvancedSignUp: {
        title: "Sign Up form",
          desc: "A funny challenge from Front-End Mentor where you have to develop a responsive form for a games suscription with a stepper.",
          stack: ["Typescript", "React", "Scss"],
          image: ["src/assets/firsts.png", "src/assets/seconds.png", "src/assets/thirds.png",
                    "src/assets/fo.png", "src/assets/fifths.png", "src/assets/six.png", "src/assets/seven.png", "src/assets/eight.png"],
          gitHub: "https://github.com/Cesarleops/PI-Videogames",
          demo: "https://pi-videogames-luh0u0eyu-cesarleops.vercel.app"
    },

    AllGames: {
          title: "AllGames",
          desc: "A non-responsive library where you can find information about any video game such as description, release date, reviews and more. You can see the most popular games as well as use filters to simplify your search.",
          stack: ["Javascript", "React", "Redux", "CSS", "PostgreSql", "Express"],
          image: ["src/assets/all1.png", "src/assets/all2.png","src/assets/all3.png","src/assets/all4.png", ],
          gitHub: "https://github.com/Cesarleops/PI-Videogames",
          demo: "https://pi-videogames-luh0u0eyu-cesarleops.vercel.app"
  
          },
     Hbuy: {
          title: "H-BUY",
          desc: "E-Commerce developed as a team, we used the MERN stack to develop an E-commerce that was functional for different industries, it has authorization, payment gateway, administrative profiles and other functionalities. ",
          stack: ["Javascript", "React", "Redux", "Bootstrap", "MongoDB", "MaterialUI", "Express"],
          image: ["src/assets/Captura de Pantalla 2023-05-04 a la(s) 7.56.13 a.m..png"],
          gitHub: "https://github.com/Felipesch96/PF-H-Buy",
          demo: "https://main.d2d0y3pf0pfssa.amplifyapp.com/"

      },
      Umoob: {
          title: "Umoob",
          desc: "Umoob is a business management app and a marketplace focused on the fitness industry. I've worked as a front-end developer in several development cycles ",
          stack: ["Typescript", "Python", "React", "Redux" ,"Sass", "Django"],
          image: ["src/assets/imagen.png", "src/assets/umoob2.png", "src/assets/umoob3.png"],
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
                              images={myProjects[key]["image"]}
                              key={i}
                />
               
            ))}
             
     
          
            
        </div>

       
    )
}