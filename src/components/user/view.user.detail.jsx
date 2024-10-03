import { Button, Drawer } from "antd";

const ViewUserDetail = (props) => {
  const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen } = props;

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
            <div>
              <img 
              height={150} width={200}
              src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`}
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
                cursor: "pointers"
              }}
              htmlFor="btnUpload"
              >
                    Upload Avatar
              </label>
              <input type="file" id="btnUpload" hidden/>
            </div>
          </>
        ) : (
          <p>Khong co du lieu</p>
        )}
      </Drawer>
    </>
  );
};

export default ViewUserDetail;
