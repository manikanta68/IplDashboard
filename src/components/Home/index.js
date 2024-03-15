import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teams: [], isLoading: true}

  componentDidMount() {
    this.getTeamsApiUrl()
  }

  getTeamsApiUrl = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const jsonResponse = await response.json()
    const newData = jsonResponse.teams

    const updateData = newData.map(element => ({
      id: element.id,
      name: element.name,
      teamImageUrl: element.team_image_url,
    }))
    this.setState({teams: updateData, isLoading: false})
  }

  render() {
    const {teams, isLoading} = this.state

    return (
      <div className="Home-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <div className="heading-container">
              <img
                className="ipl-logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
              <h1 className="heading">IPL Dashboard</h1>
            </div>

            <ul className="TeamCard-list">
              {teams.map(eachItem => (
                <TeamCard eachItem={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
