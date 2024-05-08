import React, { useEffect } from "react";
import DataForms from "../components/DataForms";
import { useParams } from "react-router-dom";
import curdServices from "../services/curdServices";
import { useState } from "react";


const UpdatePage = (props) => {

  let { id } = useParams();
  let [data, setData] = useState(null);

  useEffect(() => {
    curdServices.singleData(id).then((res) => {
      setData(res.data);
  });
  }, [id])
  
  return (
    <>
      <DataForms data={data}/>
    </>
  );
};

export default UpdatePage;
