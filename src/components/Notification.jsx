import { useSelector } from "react-redux"

const Notification = () => {
  const notificationMessage = useSelector(({notification}) => notification)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 10
  }

  return (
    notificationMessage && (
      <div style={style}>{notificationMessage}</div>
    )
  )
}

export default Notification
