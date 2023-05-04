import {BiChevronRight, BiChevronLeft} from 'react-icons/bi'
import {  useState } from 'react'
import './carousel.scss'


export const Carousel = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const next = () => {
      if (currentIndex === children.length - 1) {
        setCurrentIndex(0);
        return;
      }
      setCurrentIndex(currentIndex + 1);
    };
    const prev = () => {
      if (currentIndex === 0) {
        setCurrentIndex(children.length - 1);
        return;
      }
      setCurrentIndex(currentIndex - 1);
    };
    return (
      <div className='carousel'>
        <BiChevronRight className='carousel--button right' onClick={next}/>
        <div className='carousel--slides'>
            {children ? children[currentIndex] : ""}
        </div>
        
        <BiChevronLeft className='carousel--button left' onClick={prev}/>
      </div>
    );
  };