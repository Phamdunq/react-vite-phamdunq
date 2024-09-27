import { Button, Input, notification } from "antd";
import { useState } from "react";
import axios, { Axios } from "axios";
import { createUserApi } from "../../services/api.services";

const UserForm = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const handelClickButton = async () => {
       const res = await createUserApi(fullName, email, password, phoneNumber)
       if(res.data) {
           notification.success({
            message: "create user",
            description: "Tao user thanh cong"
           })
       }
       console.log("Check user:", res.data)
    }
    return (
        <div className="user-form">
            <div>
                <div>
                    <span>Full Name</span>
                    <Input 
                    value={fullName}
                    onChange={(event) => {setFullName(event.target.value)}}
                    />
                </div>
                <div>
                    <span>Email</span>
                    <Input 
                        value={email}
                        onChange={(event) => {setEmail(event.target.value)}}
                    />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password 
                        value={password}
                        onChange={(event) => {setPassword(event.target.value)}}
                    />
                </div>
                <div>
                    <span>Phone Number</span>
                    <Input 
                    value={phoneNumber}
                    onChange={(event) => {setPhoneNumber(event.target.value)}}
                    />
                </div>  
                <Button 
                type="primary"
                onClick={() => {handelClickButton()}}
                >Create user</Button>
            </div>
        </div>
    )
}

export default UserForm