import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachItem} = props
  const {id, name, teamImageUrl} = eachItem
  return (
    <Link to={`/team-matches/${id}`} className="item-link">
      <li>
        <div className="teamCard-item-container">
          <img className="teamCard-image" src={teamImageUrl} alt={name} />
          <p className="teamCard-name">{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
