import { UserProvider } from '../../context/UserContext'
import UsersBody from '../../components/users/Users'

const Users = () => {
   return (
      <UserProvider>
         <UsersBody />
      </UserProvider>
   )
}

export default Users
