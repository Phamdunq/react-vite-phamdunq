import { Input, Modal, notification } from "antd";
import { useEffect, useState } from "react";
import { updateUserApi } from "../../services/api.services";

const UpdateUserModal = (props) => {
  const [id, setId] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const { isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate, loadUser } = props;

  useEffect(() => {
    if (dataUpdate) {
      setId(dataUpdate._id);
      setFullName(dataUpdate.fullName);
      setPhoneNumber(dataUpdate.phone);
    }
  }, [dataUpdate]);

  const handelSubmitButton = async () => {
    const res = await updateUserApi(id, fullName, phoneNumber);
    if (res.data) {
      notification.success({
        message: "update user",
        description: "update user thanh cong",
      });
      resetAndCloseModal();
      await loadUser()
    } else {
      console.log("Check user:", res.data);
    }
  };

  const resetAndCloseModal = () => {
    setId("");
    setIsModalUpdateOpen(false);
    setFullName("");
    setPhoneNumber("");
    setDataUpdate(null)

  };
  return (
    <Modal
      title="Update a User"
      okText="Save"
      open={isModalUpdateOpen}
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
          <span>Id</span>
          <Input value={id} disabled />
        </div>
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
