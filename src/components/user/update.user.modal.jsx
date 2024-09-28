import { Input, Modal, notification } from "antd";
import { useState } from "react";
import { createUserApi } from "../../services/api.services";


const UpdateUserModal = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(true);

  const handelSubmitButton = async () => {
    const res = await createUserApi(fullName, email, password, phoneNumber);
    if (res.data) {
      notification.success({
        message: "create user",
        description: "Tao user thanh cong",
      });
      resetAndCloseModal();
    //   await loadUser()
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
    <Modal
      title="Update a User"
      okText="Luu"
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
  );
};

export default UpdateUserModal;
