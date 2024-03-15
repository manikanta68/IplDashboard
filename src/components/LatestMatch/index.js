import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props

  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatch

  return (
    <div className="enemy">
      <div>
        <p className="match-heading">{competingTeam}</p>
        <p>{date}</p>
        <p>{result}</p>
        <p>{venue}</p>
      </div>

      <img
        className="url-logo"
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
      />
      <div>
        <p>{manOfTheMatch}</p>
        <p>{matchStatus}</p>
        <p>{firstInnings}</p>
        <p>{secondInnings}</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
