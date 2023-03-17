
import { useRef } from 'react'
import './carousel.scss'
export const Carousel = ({children}) => {
    const slideShow = useRef(null)
    const nextButton = () => {
        const firstSlide = slideShow.current.children[0]

        slideShow.current.style.transition = `300ms ease-out all`;

        const movement = slideShow.current.children[0].offsetWidth;
        slideShow.current.style.transform = `translateX(-${movement}px)`;

        const transition = () => {
         
            slideShow.current.style.transition = 'none';
            slideShow.current.style.transform = `translateX(0)`;


            slideShow.current.appendChild(firstSlide);

            slideShow.current.removeEventListener('transitionend', transition);
        }

        
        slideShow.current.addEventListener('transitionend', transition);
    }

    const prevButton = () => {
        const index = slideShow.current.children.length - 1;
			const lastSlide = slideShow.current.children[index];
			slideShow.current.insertBefore(lastSlide, slideShow.current.firstChild);
			
			slideShow.current.style.transition = 'none';
			const slideWidth = slideShow.current.children[0].offsetWidth;
			slideShow.current.style.transform = `translateX(-${slideWidth}px)`;
		
			setTimeout(() => {
				slideShow.current.style.transition = `300ms ease-out all`;
				slideShow.current.style.transform = `translateX(0)`;
			}, 30);
    }
    return (
        <main>
            <section className="slideShow">
                <section ref={slideShow} className='slides'>
                  {children}
                </section>
                <div className="buttons">
                    <button className='buttons--left' onClick={prevButton}>Izquierda</button>
                    <button className='buttons--right' onClick={nextButton}>Derecha</button>
                </div>
            </section>
            
        </main>
    )
}