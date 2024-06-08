import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import DataTable from "../table/table";
import ActivityData from "../activity-data/activity-data";

const UserDetails = () => {
  const location = useLocation();
  const { user } = location.state || {};
  console.log("🚀 ~ UserDetails ~ user:", user);

  return (
    <div>
      <h1>User Details</h1>

      {/* {name ? <p>Details for user: {name}</p> : <p>No user data provided.</p>} */}

      <div>Hello,{user.name}</div>

      {/* <DataTable data={user.dayWiseActivity}></DataTable> */}

      <ActivityData data={user} />
    </div>
  );
};

export default UserDetails;
