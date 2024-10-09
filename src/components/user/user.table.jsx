import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Flex, notification, Popconfirm, Space, Table, Tag } from "antd";
import UpdateUserModal from "./update.user.modal";
import { useState } from "react";
import ViewUserDetail from "./view.user.detail";
import { deleteUserApi } from "../../services/api.services";

const UserTable = (props) => {
  const { 
    dataUsers,
    loadUser,
    current,
    pageSize,
    total,
    setCurrent,
    setPageSize
   } = props;
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [dataUpdate, setDataUpdate] = useState(null);

  const [dataDetail, setDataDetail] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handelDeleteUser = async (id) => {
    const res = await deleteUserApi(id)
    if(res.data) {
      notification.success({
        message: "Delete user",
        description: "xoa user thanh cong"
      })
      await loadUser();
    }else {
      notification.error({
        message: "Error delete user",
        description: JSON.stringify(res.message)
      })
    }
  }

  const columns = [
    {
      title: "STT",
      render: (_, record, index) => {
        return (
          <>
          {(index + 1) + (current -1) * pageSize}
          </>
        );
      },
    },
    {
      title: "Id",
      dataIndex: "_id",
      render: (_, record) => {
        return (
          <a
            href="#"
            onClick={() => {
              setDataDetail(record);
              setIsDetailOpen(true);
            }}
          >
            {record._id}
          </a>
        );
      },
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <div style={{ display: "flex", gap: "30px" }}>
            <EditOutlined
              style={{ cursor: "pointer" }}
              onClick={() => {
                setDataUpdate(record);
                setIsModalUpdateOpen(true);
              }}
            />
            <Popconfirm
              title="Delete user"
              description="Are you sure to delete this user?"
              onConfirm={() => {handelDeleteUser(record._id)}}
              okText="Yes"
              cancelText="No"
              placement="left"
            >
              <DeleteOutlined style={{ cursor: "pointer" }} />
            </Popconfirm>
          </div>
        </>
      ),
    },
  ];

  // const data = [
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park',
  //     tags: ['nice', 'developer'],
  //   },
  //   {
  //     key: '2',
  //     name: 'Jim Green',
  //     age: 42,
  //     address: 'London No. 1 Lake Park',
  //     tags: ['loser'],
  //   },
  //   {
  //     key: '3',
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sydney No. 1 Lake Park',
  //     tags: ['cool', 'teacher'],
  //   },
  // ];

  const onChange = (pagination, filters, sorter, extra) => {
    if(pagination && pagination.current) {
      if(+pagination.current !== +current) {//+: "5" => 5
        setCurrent(+pagination.current)
      }
    }
    if(pagination && pagination.pageSize) {
      if(+pagination.pageSize !== +pageSize) {//+: "5" => 5
        setPageSize(+pagination.pageSize)
      }
    }
   };
      
  return (
    <>
      <Table 
      columns={columns}
       dataSource={dataUsers}
        rowKey={"_id"}
        pagination={
          {
          current: current,
          pageSize: pageSize,
          showSizeChanger: true,
          total: total,
          showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total} rows</div>)}
          }}
          onChange={onChange}
         />
      <UpdateUserModal
        isModalUpdateOpen={isModalUpdateOpen}
        setIsModalUpdateOpen={setIsModalUpdateOpen}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        loadUser={loadUser}
      />

      <ViewUserDetail
        dataDetail={dataDetail}
        setDataDetail={setDataDetail}
        isDetailOpen={isDetailOpen}
        setIsDetailOpen={setIsDetailOpen}
        loadUser={loadUser}
      />
    </>
  );
};

export default UserTable;
