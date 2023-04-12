import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from './userSlice'

export const UserView = () => {
    const user = useSelector((state) => state.user)
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(fetchUsers())
   }, [])

console.log('bbb', user.users.length)
  return (
    <div>
    <h1>List of Users</h1>
    {user.loading && <div>Loading...</div>}
    {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
    {!user.loading && user.users.length ? (
        <ul>
            {
                user.users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))
            }
        </ul>
    ) : null}
    </div>
  )
}
