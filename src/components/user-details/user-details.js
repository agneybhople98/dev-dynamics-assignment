import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ActivityData from "../activity-data/activity-data";
import BaseInfoCard from "../baseinfo-card/baseinfo-card";
import { Card } from "@mui/material";

const UserDetails = () => {
  const location = useLocation();
  const { user } = location.state || {};
  console.log("🚀 ~ UserDetails ~ user:", user);

  return (
    <div>
      <div className="mb-2 text-3xl">
        Hello,
        <strong className="">&nbsp;{user.name}</strong>
      </div>

      <BaseInfoCard data={user} />

      <div className="mt-4">
        <ActivityData data={user} />
      </div>
    </div>
  );
};

export default UserDetails;
