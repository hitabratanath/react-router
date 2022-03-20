import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Users = () => {
  const { userID } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const getData = () => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
      .then((resp) => resp.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="users-container">
      <h2>User's page</h2>
      {loading ? <CircularProgress /> : <h3>Hello {data && data.name} </h3>}
      <button onClick={getData}>Click</button>
    </div>
  );
};
export default Users;
