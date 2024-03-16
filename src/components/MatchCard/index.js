import './index.css'

const MatchCard = props => {
  const {eachItem} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = eachItem
  const win = matchStatus === 'Lost' ? 'loss' : 'win'
  return (
    <li>
      <div className="hero">
        <img
          className="logo"
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
        />
        <p className="text">{competingTeam}</p>
        <p className="text">{result}</p>
        <p className={`text ${win}`}>{matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
