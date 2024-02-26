import {useContext} from 'react'
import {Navigate} from 'react-router-dom'
import { authContext } from '../context/AuthContext'

const ProtectedRoute = ({children, allowedRoles}) => {
  return (
    <div>ProtectedRoute</div>
  )
}

export default ProtectedRoute