import './index.css'

const AppItem = props => {
  const {appName, imageUrl} = props
  return (
    <li className="card">
      <img src={imageUrl} alt={appName} className="imgcss" />
      <p className="app">{appName}</p>
    </li>
  )
}

export default AppItem
