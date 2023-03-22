import {BiChevronRight, BiChevronLeft, BiCircle} from 'react-icons/bi'
import {BsCircleFill} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import { useEffect, useRef, useState } from 'react'
import './carousel.scss'
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
          demo: ""

      },
      Sendy: {
          title: "Sendy",
          desc: "A group chat application where you can talk to any person that joins the room",
          stack: ["Typescript", "React", "Redux" ,"Sass", "Express","MongoDB"],
          image: "",
          gitHub: "https://github.com/Cesarleops/ovtouch_frontend",
          demo: ""
  
          }

  }
export const Carousel = ({children}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const slideShow = useRef(null)
    const nextSlide = () => {
        if(currentIndex === slideShow.current.children.length-1) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex+1)
        }
			const firstSlide = slideShow.current.children[0];
			slideShow.current.style.transition = `300ms ease-out all`;
			const width = slideShow.current.children[0].offsetWidth;
			slideShow.current.style.transform = `translateX(-${width}px)`;
           
			const transition = () => {
				
				slideShow.current.style.transition = 'none';
				slideShow.current.style.transform = `translateX(0)`;
				slideShow.current.appendChild(firstSlide);
				slideShow.current.removeEventListener('transitionend', transition);
			}

			
			slideShow.current.addEventListener('transitionend', transition);


}

    const prevSlide = () => {
        if(currentIndex === 0) {
            setCurrentIndex(slideShow.current.children.length-1)
        } else {
            setCurrentIndex(currentIndex-1)
        }
        const index = slideShow.current.children.length - 1;
            
			const lastSlide = slideShow.current.children[index];
			slideShow.current.insertBefore(lastSlide, slideShow.current.firstChild);
			
			slideShow.current.style.transition = 'none';
			const width = slideShow.current.children[0].offsetWidth;
			slideShow.current.style.transform = `translateX(-${width}px)`;
		
			setTimeout(() => {
				slideShow.current.style.transition = `300ms ease-out all`;
				slideShow.current.style.transform = `translateX(0)`;
			}, 30);
    }
    
    return (
            <section className="carouselContainer">
                  <div ref={slideShow} className='slideShowContainer'>
                    {
                        Object.keys(myProjects).map((key,i)=> (
                            <div key={i} className='slide'>
                                <h4 className='slide--title'>{myProjects[key]["title"]}</h4>
                                <p className='slide--desc'>{myProjects[key]["desc"]}</p>
                                <ul className='slide--list'>
                                    {myProjects[key]["stack"].map((tech,i) => (
                                        <li key={i}>{tech}</li>
                                    ))}
                                </ul>
                                <a className='gitIcon' href={myProjects[key]["gitHub"]}>
                                    <AiFillGithub className='gitIcon--icon'/>
                                </a>
                            </div>
                        ))
                    }
                  </div>
                  <div className='controls'>
                    <button onClick={prevSlide}  className='controls--left'>
                        <BiChevronLeft/>
                    </button>

                    <button onClick={nextSlide} className='controls--right'>
                         <BiChevronRight  />
                    </button>
                     
                  </div>
                  <ul className='carouselContainer--indicators'>
                    {Object.keys(myProjects).map((key,i)=> (
                       
                        <li className={`${currentIndex === i ? 'current' : ''}`} key={i}>

                            {currentIndex === i ? <BsCircleFill/>:  <BiCircle/>}
                        </li>
                    ))

                    }
                  </ul>
            </section>
    )
}