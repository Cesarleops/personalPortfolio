import { useState } from 'react'
import { TabSelector } from '../tabNav'
import './experience.scss'
import { TabsContent } from '../tabs'
export const Experience = () => {

    const [activeTab, setActiveTab] = useState('college')
    return(
        <main>
            <ul className='experienceList'>
                <TabSelector id="college" name={"UNAL"} activeTab={activeTab} setActiveTab={setActiveTab}/>
                <TabSelector id="umoob" name={"Umoob"} activeTab={activeTab} setActiveTab={setActiveTab}/>
                <TabSelector id="henry"  name={"Henry"} activeTab={activeTab} setActiveTab={setActiveTab}/>
            </ul>

            <section>
                <TabsContent id={"college"} activeTab={activeTab}>
                    <p>
                        sagsagasgasaagsgsa
                    </p>
                    <p>
                        asfadgasggasgasagsgassgagsgsa
                    </p>
                    <p>
                        adasasfasfasf
                    </p>
                </TabsContent>
                <TabsContent id={"umoob"} activeTab={activeTab}>
                    <p>
                        ppppp
                    </p>
                    <p>
                        pppppp
                    </p>
                    <p>
                      ppppp
                    </p>
                </TabsContent>
                <TabsContent id={"henry"} activeTab={activeTab}>
                    <p>
                        cccccc
                    </p>
                    <p>
                        cccccccc
                    </p>
                    <p>
                        cccccc
                    </p>
                </TabsContent>
            </section>
         
        </main>
    )
}