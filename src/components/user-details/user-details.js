import React from "react";
import { useLocation } from "react-router-dom";
import ActivityData from "../activity-data/activity-data";
import BaseInfoCard from "../baseinfo-card/baseinfo-card";

const UserDetails = () => {
  const location = useLocation();
  const { user } = location.state || {};

  const formattedName = user.name
    .replace(/[@.]/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div>
      <div className="mb-2 text-3xl">
        Hello,
        <strong className="">
          &nbsp;
          {formattedName
            .split(" ")
            .filter((word) => word !== "Devdynamics" && word !== "Ai")
            .join(" ")}
        </strong>
      </div>

      <BaseInfoCard data={user} />

      <div className="mt-4">
        <ActivityData data={user} />
      </div>
    </div>
  );
};

export default UserDetails;
