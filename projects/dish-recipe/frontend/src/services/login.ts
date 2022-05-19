import axios from 'axios'

interface UserInfo {
  name: string
}

export const login = async (name:string) => {
  const config = {
     headers: {
       'Content-Type': 'application/json',
     },
   }
   const { data } = await axios.post(
     '/api/users/login',
     { name },
     config
   )

  localStorage.setItem('userInfo', JSON.stringify(data))
  
  return data as UserInfo
}