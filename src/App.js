import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers, selectUser } from './features/userSlice'

const App = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUser)
  console.log(users)
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div>App</div>
  )
}

export default App