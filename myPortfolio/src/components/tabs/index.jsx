import {ExperienceFade} from '../experienceFade'
import './tabs.scss'
export const TabsContent = ({id, activeTab, children}) => {
    return(
        activeTab === id ? (
            <section className="tabContent">                
                <ExperienceFade>
                 {children}
                </ExperienceFade>
            </section>
        ) : null
    )
}
