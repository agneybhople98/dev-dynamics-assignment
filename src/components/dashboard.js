import SearchBar from "./searchbar";
import * as React from "react";

import Box from "@mui/material/Box";

import dummyData from "../datas/sample-data.json";
import DataTable from "./table/table";
import { useState } from "react";

function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activityData, setActivityData] = React.useState(dummyData);

  const rows = activityData.data.AuthorWorklog.rows;

  // Filter rows based on the search query
  const filteredRows = rows.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <React.Fragment>
      <div className="flex items-center justify-between ">
        <div>
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
      </div>

      {/* All the main components */}

      <Box sx={{ mt: 2, mb: 5 }}>
        {filteredRows.length > 0 ? (
          <DataTable data={filteredRows} />
        ) : (
          <div className="text-center h-[300px] flex justify-center items-center border-2 border-white">
            No search results found
          </div>
        )}
      </Box>
    </React.Fragment>
  );
}

export default Dashboard;
