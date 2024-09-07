import "./Detail.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/products/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1>detail</h1>
      <h1>{data.id}</h1>
      <h1>{data.name}</h1>
    </>
  );
};

export default Detail;
