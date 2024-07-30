import '../../css/Card.css'

const Card = ({openPopup}) =>{

    const handlePopup = () => {
        openPopup();
    }

  return(
    <div className="card">
        <h1>Department Name</h1>
        <h1>Department Users</h1>
        <h1>First IP</h1>
        <h1>Last IP</h1>
        <h1>Subnet mask</h1>
        <button onClick={handlePopup}>View</button>
    </div>
  )
}

export default Card;