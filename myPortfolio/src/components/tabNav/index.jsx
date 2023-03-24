import './tabNav.scss'
export const TabSelector = ({id, activeTab, setActiveTab, name}) => {

    const selectTab = () => {
        setActiveTab(id)
    }

    return(
        <li className={`tabList ${activeTab === id ? 'active' : null}`} onClick={selectTab}>{name}</li>
    )
}