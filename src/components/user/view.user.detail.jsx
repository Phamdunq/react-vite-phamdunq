import { Button, Drawer } from "antd";
import { useState } from "react";

const ViewUserDetail = (props) => {
  const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen } = props;

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  const handelUploadFile = (event) => {
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
                  handelUploadFile(event);
                }}
              />
            </div>
            {preview && (
              <div
                style={{
                  marginTop: "10px",
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
