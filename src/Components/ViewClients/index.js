import React from "react";
import "../../styles/ViewClient.css";
import Dashboard from "../Dashboard";
import TableView from "./TableView";

const VeiwClint = () => {
  return (
    <div className="main-container">
      <div className="Ds_container">
        <Dashboard Ac_ids={1} />
        <TableView />
      </div>
    </div>
  );
};

export default VeiwClint;
