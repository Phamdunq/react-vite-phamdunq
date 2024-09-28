import { Button, Flex, Input, Modal, notification } from "antd";
import { useState } from "react";
import axios, { Axios } from "axios";
import { createUserApi } from "../../services/api.services";

const UserForm = (props) => {
  const { loadUser } = props;
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handelSubmitButton = async () => {
    const res = await createUserApi(fullName, email, password, phoneNumber);
    if (res.data) {
      notification.success({
        message: "create user",
        description: "Tao user thanh cong",
      });
      resetAndCloseModal();
      await loadUser()
    } else {
      console.log("Check user:", res.data);
    }
  };

  const resetAndCloseModal = () => {
    setIsModalOpen(false);
    setFullName("");
    setEmail("");
    setPassword("");
    setPhoneNumber("");
  };

  return (
    <div className="user-form" style={{ margin: "20px 20px" }}>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>Table Users</h3>
          <Button
            type="primary"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            Create user
          </Button>
        </div>
        <Modal
          title="Create User"
          okText="Create"
          open={isModalOpen}
          onOk={() => {
            handelSubmitButton();
          }}
          onCancel={() => {
            resetAndCloseModal();
          }}
          maskClosable={false}
        >
          <div>
            <div>
              <span>Full Name</span>
              <Input
                value={fullName}
                onChange={(event) => {
                  setFullName(event.target.value);
                }}
              />
            </div>
            <div>
              <span>Email</span>
              <Input
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div>
              <span>Password</span>
              <Input.Password
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <div>
              <span>Phone Number</span>
              <Input
                value={phoneNumber}
                onChange={(event) => {
                  setPhoneNumber(event.target.value);
                }}
              />
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default UserForm;
