import { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from './context/DataContext'
import TeamMemberCard from './TeamMemberCard'

const HomePage = () => {
  const { employees, selectedTeam, handleTeamSelectionChange } =
    useContext(DataContext)

  const teamMemberCount = employees.filter(
    (employee) => employee.teamName === selectedTeam
  ).length

  return (
    <>
      <main className='row container-fluid justify-content-center'>
        <h3 className='col-3 p-2'>
          <Link to='/teams'>Teams</Link>
        </h3>
        <div className='col-3 p-2'>
          <select
            className='form-select form-select-lg'
            id='teams'
            value={selectedTeam}
            onChange={handleTeamSelectionChange}>
            <option value='Team A'>Team A</option>
            <option value='Team B'>Team B</option>
            <option value='Team C'>Team C</option>
            <option value='Team D'>Team D</option>
          </select>
        </div>

        <h3 className='col-3 p-2'>
          <span className='text-warning'> {selectedTeam} </span>
          has
          <span className='text-danger'> {teamMemberCount} </span> Members
        </h3>

        <div className='row'>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
            {employees.map((employee) => (
              <TeamMemberCard key={employee.id} employee={employee} />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
export default HomePage
