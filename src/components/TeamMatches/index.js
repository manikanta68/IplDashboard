import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {matchDetails: [], isLoading: false}

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const responseData = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const jsonData = await responseData.json()

    const latestMatches = {
      competingTeam: jsonData.latest_match_details.competing_team,
      competingTeamLogo: jsonData.latest_match_details.competing_team_logo,
      date: jsonData.latest_match_details.date,
      firstInnings: jsonData.latest_match_details.first_innings,
      id: jsonData.latest_match_details.id,
      manOfTheMatch: jsonData.latest_match_details.man_of_the_match,
      matchStatus: jsonData.latest_match_details.match_status,
      result: jsonData.latest_match_details.result,
      secondInnings: jsonData.latest_match_details.second_innings,
      umpires: jsonData.latest_match_details.umpires,
      venue: jsonData.latest_match_details.venue,
    }

    const recentMatches = jsonData.recent_matches.map(element => ({
      competingTeam: element.competing_team,
      competingTeamLogo: element.competing_team_logo,
      date: element.date,
      firstInnings: element.first_innings,
      id: element.id,
      manOfTheMatch: element.man_of_the_match,
      matchStatus: element.match_status,
      result: element.result,
      secondInnings: element.second_innings,
      umpires: element.umpires,
      venue: element.venue,
    }))

    const teamBannerUrl = jsonData.team_banner_url

    const newData = {latestMatches, recentMatches, teamBannerUrl}

    this.setState({matchDetails: newData, isLoading: true})
  }

  render() {
    const {matchDetails, isLoading} = this.state
    console.log(matchDetails)

    return (
      <div>
        {isLoading ? (
          <div className="bg-container">
            <img src={matchDetails.teamBannerUrl} alt="team banner" />
            <div className="head">
              <h1>latest Matches</h1>

              <LatestMatch
                latestMatch={isLoading && matchDetails.latestMatches}
              />
            </div>

            <ul className="list-type">
              {isLoading &&
                matchDetails.recentMatches.map(eachItem => (
                  <MatchCard eachItem={eachItem} key={eachItem.id} />
                ))}
            </ul>
          </div>
        ) : (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
