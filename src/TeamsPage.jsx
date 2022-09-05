import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from './context/DataContext'

const TeamsPage = () => {
  const { employees, selectedTeam, setTeam } = useContext(DataContext)
  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers())

  function groupTeamMembers() {
    let teams = []

    let teamAMembers = employees.filter(
      (employee) => employee.teamName === 'Team A'
    )
    let teamA = {
      team: 'Team A',
      members: teamAMembers,
      collapsed: selectedTeam === 'Team A' ? false : true,
    }
    teams.push(teamA)

    let teamBMembers = employees.filter(
      (employee) => employee.teamName === 'Team B'
    )
    let teamB = {
      team: 'Team B',
      members: teamBMembers,
      collapsed: selectedTeam === 'Team B' ? false : true,
    }
    teams.push(teamB)

    let teamCMembers = employees.filter(
      (employee) => employee.teamName === 'Team C'
    )
    let teamC = {
      team: 'Team C',
      members: teamCMembers,
      collapsed: selectedTeam === 'Team C' ? false : true,
    }
    teams.push(teamC)

    let teamDMembers = employees.filter(
      (employee) => employee.teamName === 'Team D'
    )
    let teamD = {
      team: 'Team D',
      members: teamDMembers,
      collapsed: selectedTeam === 'Team D' ? false : true,
    }
    teams.push(teamD)

    return teams
  }
  function handleTeamClick(event) {
    let newGroupedData = groupedEmployees.map((groupedData) =>
      groupedData.team === event.currentTarget.id
        ? { ...groupedData, collapsed: !groupedData.collapsed }
        : groupedData
    )
    setGroupedData(newGroupedData)
    setTeam(event.currentTarget.id)
  }

  return (
    <main className='container'>
      <h3 className='p-3'>
        <Link to='/'>Home</Link>
      </h3>
      {groupedEmployees.map((item) => {
        return (
          <div key={item.team} className='card' style={{ cursor: 'pointer' }}>
            <h4
              id={item.team}
              className='card-header bg-success bg-gradient text-white'
              onClick={handleTeamClick}>
              {item.team}
            </h4>
            <div
              id={'collapse_' + item.team}
              className={item.collapsed === true ? 'collapse' : ''}>
              <hr />
              {item.members.map((member) => {
                return (
                  <div key={member.id} className='mt-2'>
                    <h5 className='card-title p-2'>
                      <span className='text-primary'>Name: </span>
                      <span>{member.name}</span>
                      <span> | </span>
                      <span className='text-warning'>Designation: </span>
                      <span className='text-muted'>{member.designation} </span>
                    </h5>
                  </div>
                )
              })}
            </div>
            <hr />
          </div>
        )
      })}
    </main>
  )
}
export default TeamsPage
