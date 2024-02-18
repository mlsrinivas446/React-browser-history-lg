import './index.css'

const BrowserHistory = props => {
  const {historyItem, deleteHistory} = props
  const {id, title, domainUrl, logoUrl, timeAccessed} = historyItem

  const onDeleteHistory = () => {
    deleteHistory(id)
  }
  return (
    <li className="history-container">
      <div className="history">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo" />
        <p className="title">{title}</p>
        <p className="domainUrl">{domainUrl}</p>
      </div>

      <button
        className="button"
        onClick={onDeleteHistory}
        type="button"
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
          data-testid="delete"
        />
      </button>
    </li>
  )
}

export default BrowserHistory
