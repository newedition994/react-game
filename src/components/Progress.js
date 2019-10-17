import React from "react";

import { Typography } from "@material-ui/core";
import "./Progress.css";

const Progress = ({ attempt, guestList }) => {
  return (
    <div>
      <Typography variant="h2">Guess # {attempt}</Typography>
      <ul className="progressBar_history">{guestList}</ul>
    </div>
  );
};

export default Progress;
