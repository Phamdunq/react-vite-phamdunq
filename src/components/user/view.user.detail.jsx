import { Button, Drawer, notification } from "antd";
import { useState } from "react";
import { handleUploadFileApi, updateUserAvatarApi } from "../../services/api.services";

const ViewUserDetail = (props) => {
  const { dataDetail, 
    setDataDetail, 
    isDetailOpen, 
    setIsDetailOpen,
    loadUser
   } = props;

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  const handleUploadFile = (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      setSelectedFile(null);
      setPreview(null);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdateUserAvatar = async() => {
    const resUpload = await handleUploadFileApi(selectedFile, "avatar")
    if(resUpload.data) {
      const newAvatar = resUpload.data.fileUploaded
      const resUploadAvatar = await updateUserAvatarApi(newAvatar, dataDetail._id, dataDetail.fullName, dataDetail.phone)
      if(resUploadAvatar.data) {
        setIsDetailOpen(false)
        setSelectedFile(null)
        setPreview(null)
        await loadUser()
        notification.success({
          message: "update user Avatar",
          description: "cap nhat avatar thanh cong"
        })
      } else {
        notification.error({
          message: "Error update user Avatar",
          description: JSON.stringify(resUploadAvatar.message)
        })
      }
    } else {
      notification.error({
        message: "Error upload file",
        description: JSON.stringify(resUpload.message)
      })
      return
    }

  }
  
  return (
    <>
      <Drawer
        width={"40vw"}
        title="Basic Drawer"
        onClose={() => {
          setDataDetail(null);
          setIsDetailOpen(false);
        }}
        open={isDetailOpen}
      >
        {dataDetail ? (
          <>
            <p>id: {dataDetail._id}</p>
            <br />
            <p>name: {dataDetail.fullName}</p>
            <br />
            <p>email: {dataDetail.email}</p>
            <br />
            <p>phone: {dataDetail.phone}</p>
            <br />
            <div
              style={{
                marginTop: "10px",
                height: "100px",
                width: "150px",
                border: "1px solid #ccc",
              }}
            >
              <img
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
                src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${
                  dataDetail.avatar
                }`}
              />
            </div>
            <div>
              <label
                style={{
                  display: "block",
                  width: "fit-content",
                  marginTop: "15px",
                  padding: "5px 10px",
                  background: "blue",
                  borderRadius: "5px",
                  cursor: "pointers",
                }}
                htmlFor="btnUpload"
              >
                Upload Avatar
              </label>
              <input
                type="file"
                id="btnUpload"
                hidden
                //onChange={handelUploadFile}
                onChange={(event) => {
                  handleUploadFile(event);
                }}
              />
            </div>
            {preview && (
              <>
              <div
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  height: "100px",
                  width: "150px",
                  border: "1px solid #ccc",
                }}
              >
                <img
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                  src={preview}
                />
              </div>
              <Button type="primary" onClick={() => {handleUpdateUserAvatar()}}>Save</Button>
              </>
            )}
          </>
        ) : (
          <p>Khong co du lieu</p>
        )}
      </Drawer>
    </>
  );
};

export default ViewUserDetail;
