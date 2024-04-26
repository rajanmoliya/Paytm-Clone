import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import User from "../components/User";
import axios from "axios";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`)
      .then((response) => {
        setUsers(response.data.user);
      });
  }, [filter]);

  return (
    <div>
      <Navbar />

      <div className=" h-screen">
        <div className="flex p-4 font-bold ">
          <h1 className="mr-3">Your balance</h1>
          <h1>Rs 10,000</h1>
        </div>
        <div className="flex font-bold ml-4">Users</div>
        <div className="p-4">
          <input
            type="text"
            className="border  w-full p-4 h-5 "
            placeholder="Search users..."
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          />
        </div>
        {users.map((user, index) => (
          <User user={user.firstName} id={user._id} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
