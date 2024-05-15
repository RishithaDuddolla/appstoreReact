// Write your code here
import './index.css'

const TabItem = props => {
  const {displayText, tabId, isActive, onTabChange} = props
  console.log(tabId, displayText)
  const classname = isActive ? 'activeTab' : ''
  const clicked = () => {
    onTabChange(tabId)
  }
  return (
    <li className="li">
      <button onClick={clicked} type="button" className={`btn ${classname}`}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
