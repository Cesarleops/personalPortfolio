
export const TabsContent = ({id, activeTab, children}) => {
    return(
        activeTab === id ? (
            <section>
                {children}
            </section>
        ) : null
    )
}
