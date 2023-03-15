
export const TabSelector = ({id, activeTab, setActiveTab, name}) => {

    const selectTab = () => {
        setActiveTab(id)
    }

    return(
        <li className={`${activeTab === id ? 'active' : null}`} onClick={selectTab}>{name}</li>
    )
}