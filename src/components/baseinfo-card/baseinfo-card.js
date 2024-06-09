import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

function BaseInfoCard({ data }) {
  console.log("🚀 ~ BaseInfoCard ~ data:", data.activeDays);
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <div>
          Active Days:<strong>{data.activeDays.days}</strong>
        </div>
        <div>
          Insight:{" "}
          <strong>
            {data.activeDays.insight[0].length === 0
              ? "N/A"
              : data.activeDays.insight[0]}
          </strong>
        </div>
        <div>
          Burn Out Status : <strong>{data.activeDays.isBurnOut}</strong>
        </div>
      </CardContent>
    </Card>
  );
}

export default BaseInfoCard;
