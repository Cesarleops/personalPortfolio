import { ProjectsCard } from '../ProjectsCard'
import './mobileProjects.scss'
import FirstPic from '../../../public/assets/firsts.png'
import SecondPic from '../../../public/assets/seconds.png'
import ThirdPic from '../../../public/assets/thirds.png'
import FourthPic from  '../../../public/assets/fo.png'
import FifthPic from  '../../../public/assets/fifths.png'
import SixthPic from  '../../../public/assets/six.png'
import SeventhPic from  '../../../public/assets/seven.png'
import EighthPic from  '../../../public/assets/eight.png'
import AllOne from '../../../public/assets/all1.png'
import AllTwo from '../../../public/assets/all2.png'
import AllThree from '../../../public/assets/all3.png'
import AllFourth from '../../../public/assets/all4.png'
import HBuy from '../../../public/assets/Captura de Pantalla 2023-05-04 a la(s) 7.56.13 a.m..png'
import UmoobOne from '../../../public/assets/imagen.png'
import UmoobTwo from '../../../public/assets/umoob2.png'
import UmoobThree from '../../../public/assets/umoob3.png'
const myProjects = {
    AdvancedSignUp: {
        title: "Sign Up form",
          desc: "A funny challenge from Front-End Mentor where you have to develop a responsive form for a games suscription with a stepper.",
          stack: ["Typescript", "React", "Scss"],
          image: [FirstPic, SecondPic, ThirdPic,
                    FourthPic, FifthPic,SixthPic, SeventhPic, EighthPic],
          gitHub: "https://github.com/Cesarleops/advancedSignUp",
          demo: "https://neon-mousse-70d49d.netlify.app"
    },

    AllGames: {
          title: "AllGames",
          desc: "A non-responsive library where you can find information about any video game such as description, release date, reviews and more. You can see the most popular games as well as use filters to simplify your search.",
          stack: ["Javascript", "React", "Redux", "CSS", "PostgreSql", "Express"],
          image: [AllOne, AllTwo, AllThree, AllFourth ],
          gitHub: "https://github.com/Cesarleops/PI-Videogames",
          demo: "https://pi-videogames-luh0u0eyu-cesarleops.vercel.app"
  
          },
     Hbuy: {
          title: "H-BUY",
          desc: "E-Commerce developed as a team, we used the MERN stack to develop an E-commerce that was functional for different industries, it has authorization, payment gateway, administrative profiles and other functionalities. ",
          stack: ["Javascript", "React", "Redux", "Bootstrap", "MongoDB", "MaterialUI", "Express"],
          image: [HBuy],
          gitHub: "https://github.com/Felipesch96/PF-H-Buy",
          demo: "https://main.d2d0y3pf0pfssa.amplifyapp.com/"

      },
      Umoob: {
          title: "Umoob",
          desc: "Umoob is a business management app and a marketplace focused on the fitness industry. I've worked as a front-end developer in several development cycles ",
          stack: ["Typescript", "Python", "React", "Redux" ,"Sass", "Django"],
          image: [UmoobOne, UmoobTwo, UmoobThree],
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