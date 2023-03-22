import './tabs.scss'
export const TabsContent = ({id, activeTab, children}) => {
    return(
        activeTab === id ? (
            <section className="tabContent">
                {children}
            </section>
        ) : null
    )
}
