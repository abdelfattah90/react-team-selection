import { createContext, useState, useEffect } from 'react'
import dataEmployee from './dataEmployee'
const DataContext = createContext({})

export const DataProvider = ({ children }) => {
  const [selectedTeam, setTeam] = useState(
    JSON.parse(localStorage.getItem('selectedTeam')) || 'Team A'
  )

  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem('employeeList')) || dataEmployee
  )

  useEffect(() => {
    localStorage.setItem('employeeList', JSON.stringify(employees))
  }, [employees])

  useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))
  }, [selectedTeam])

  function handleTeamSelectionChange(event) {
    setTeam(event.target.value)
  }

  function handleEmployeeCardClick(event) {
    const transformedEmployees = employees.map((employee) =>
      employee.id === parseInt(event.currentTarget.id)
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: '' }
          : { ...employee, teamName: selectedTeam }
        : employee
    )
    setEmployees(transformedEmployees)
  }
  return (
    <DataContext.Provider
      value={{
        employees,
        selectedTeam,
        handleTeamSelectionChange,
        handleEmployeeCardClick,
        setTeam,
      }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext
