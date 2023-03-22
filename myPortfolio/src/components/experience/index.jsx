import {TbPlaystationCircle} from 'react-icons/tb'
import { useState } from 'react'
import { TabSelector } from '../tabNav'
import './experience.scss'
import { TabsContent } from '../tabs'
export const Experience = () => {
    const stack = ["Javascript", "Typescript", "Python", "React JS", "Express", "Redux", "SASS", "MongoDB", "PostgreSql","Axios"]
    const [activeTab, setActiveTab] = useState('college')
    return(
        <main className='experienceContainer'>
            <h2 className='experienceContainer--title'>Experience</h2>
            <div className='navList'>
            <ul className='experienceList'>
                <TabSelector id="college" name={"UNAL"} activeTab={activeTab} setActiveTab={setActiveTab}/>
                <TabSelector id="umoob" name={"Umoob"} activeTab={activeTab} setActiveTab={setActiveTab}/>
                <TabSelector id="henry"  name={"Henry"} activeTab={activeTab} setActiveTab={setActiveTab}/>
            </ul>

            <section className='contents'>
                <TabsContent id={"college"} activeTab={activeTab}>
                    <p className='contents--text'>
                    <span><TbPlaystationCircle className='contents--text__icon'/></span>Collaborated with other students in the research groups of computational science and data analysis that belong to the university, where I have been able to develop my problem solving and communication skills. 
                    </p>
                </TabsContent>
                <TabsContent id={"umoob"} activeTab={activeTab}>
                    <p className='contents--text'>
                         <span><TbPlaystationCircle className='contents--text__icon'/></span>Developing responsive and reusable components with React+Typescript based on Figma designs.
                    </p>
                    <p className='contents--text'>
                    <span><TbPlaystationCircle className='contents--text__icon'/></span>Maintenance and improvement of the code.
                    </p>
                    <p className='contents--text'>
                    <span><TbPlaystationCircle className='contents--text__icon'/></span>Contribute ideas that improve user experience, development and teamwork.
                    </p>
                    <p className='contents--text'>
                    <span><TbPlaystationCircle className='contents--text__icon'/></span>collaborate with senior engineers following a complete software development cycle including development paradigms,methodologies such as Atomic design and BEM, code reviews and testing with Jest
                    </p>
                    <p className='contents--text'>  <span><TbPlaystationCircle className='contents--text__icon'/></span>Management of story books and development diary </p>
                </TabsContent>
                <TabsContent id={"henry"} activeTab={activeTab}>
                    <p className='contents--text'>
                    <span ><TbPlaystationCircle className='contents--text__icon'/></span>Collaborated with other Devs developing several Bootcamp projects, attending to code reviews, using testing and React Storybooks.
                    </p>
                    <p className='contents--text'>
                    <span ><TbPlaystationCircle className='contents--text__icon'/></span>Improved soft and tech skills through the multiple classes of the course
                    </p>
                </TabsContent>
            </section>
            </div>
         

            <section className='stackSection' >
                <h4 className='stackSection--title'>My Current Stack</h4>
                <div className='stack'>
                <ul className='stackList'>
                    {
                        stack.map((tech,i) => (
                            <li className='stackList--item' key={i}>{tech}</li>
                        ))
                    }
                </ul>
                </div>
            
            </section>
         
        </main>
    )
}