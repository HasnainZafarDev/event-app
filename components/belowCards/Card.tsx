import './style.css'

const Card = () => {
  return (
    <div className='cardContainer'>
      <div className='card'>
        <h3>Add Events</h3>
        <span>2.10k</span>
      </div>

      <div className='card'>
        <h3>This Month Events</h3>
        <span>30</span>
      </div>

      <div className='card'>
        <h3>Favorite Events</h3>
        <span>25</span>
      </div>
    </div>
  )
}

export default Card
