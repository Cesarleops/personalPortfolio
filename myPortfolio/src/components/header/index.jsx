import {AiOutlineMail} from 'react-icons/ai'
import './header.scss'
export const Pageheader = () => {
    return( 
    <section className='header'>
        <section>
        <h4>Hello,</h4>
        <h4>I'm <span className='header--name'>Cesar Leyton</span></h4>
        </section>

        <section>
            <h5 className='header--subtitle'>I enjoy building cool and helpful stuff</h5>
            <button className='header--button'>
            <AiOutlineMail className='header--button__icon'/>
                <p className='header--button__icon__text'>Get in touch!</p>
            </button>
        </section>
    </section>)
}