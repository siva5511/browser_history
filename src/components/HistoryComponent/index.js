import './index.css'

const HistoryComponent = props => {
  const {eachHistoryItem, onDelete} = props

  const {id} = eachHistoryItem

  const onRemove = () => {
    onDelete(id)
  }

  return (
    <li className="eachHistoryItem-prop">
      <p className="p1-prop">{eachHistoryItem.timeAccessed}</p>
      <div className="inner-cont-prop">
        <img
          alt="domain logo"
          className="logo-prop"
          key={eachHistoryItem.logoUrl}
          src={eachHistoryItem.logoUrl}
        />
        <p className="t-prop">{eachHistoryItem.title}</p>
        <p className="d-prop">{eachHistoryItem.domainUrl}</p>
      </div>
      <button className="button-prop" type="button" data-testid="delete">
        <img
          onClick={onRemove}
          className="dlt-icon-prop"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        />
      </button>
    </li>
  )
}

export default HistoryComponent
