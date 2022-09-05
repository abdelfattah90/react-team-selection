import maleProfile from './images/maleProfile.png'
import femaleProfile from './images/femaleProfile.png'
import { useContext } from 'react'
import DataContext from './context/DataContext'

const TeamMemberCard = ({ employee }) => {
  const { handleEmployeeCardClick, selectedTeam } = useContext(DataContext)

  return (
    <>
      <div
        id={employee.id}
        onClick={handleEmployeeCardClick}
        style={{ cursor: 'pointer' }}
        className={
          employee.teamName === selectedTeam
            ? ' m-2 p-3 border border-3 border-success'
            : ' m-2 p-3 border border-3 border-light'
        }>
        {employee.gender === 'male' ? (
          <img src={maleProfile} alt='profile' height={100} width={100} />
        ) : (
          <img src={femaleProfile} alt='profile' height={100} width={100} />
        )}
        <div style={{ display: 'inline-table' }}>
          <h4 className='card-title'>{employee.name}</h4>
          <p className='card-text'>{employee.designation}</p>
        </div>
      </div>
    </>
  )
}

export default TeamMemberCard
