import UserForm from "../components/user/user.form"
import UserTable from "../components/user/user.table"
import { useEffect, useState } from 'react';
import { fetchAllUSerApi } from '../services/api.services';


const UserPage = () => {
    const [dataUsers, setDataUsers] = useState([])
    //empty array => run once
    useEffect(() => {
      loadUser()
    }, [])
    
    const loadUser = async () => {
        const res = await fetchAllUSerApi()
        setDataUsers(res.data)
      }
    return (
        <div>
            <UserForm loadUser={loadUser}/>
            <UserTable dataUsers={dataUsers}/>
        </div>
    )
}

export default UserPage