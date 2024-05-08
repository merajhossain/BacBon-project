import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import curdServices from "../services/curdServices";


const HomePage = () => {

    const [allData, setAllData] = useState([]);

    useEffect(() => {
        getAllData();
    }, []);

    const getAllData = () => {
        curdServices.allData().then((res) => {
            setAllData(res.data);
        });
    }

    const deleteItem = (id) => {
        curdServices.singleDataDelete(id).then(() => {
            getAllData()
        });
    }
    


  return (
    <>
      <div className="table-responsive">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allData.length > 0 ?  allData.map((item, index) => (
                    <tr key={item._id}>
                        <td>{index + 1}</td>
                        <td>{item?.firstName}</td>
                        <td>{item?.lastName}</td>
                        <td>{item?.emailAddress}</td>
                        <td>
                            <div className="btn-group">
                                <Link to={'/single/' + item._id} className="btn btn-sm btn-primary btn-icon">Edit</Link>
                                <Button type="button" onClick={(e) => deleteItem(item?._id)} className="btn btn-sm btn-danger btn-icon">Delete</Button>
                            </div>
                        </td>
                    </tr>
                )) : "No Data Found"}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HomePage;
