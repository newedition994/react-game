import React from "react";

import { Typography } from "@material-ui/core";

const Progress = () => {
  return (
    <div>
      <Typography className="progressBar" variant="h2">
        Guess # {attempt}{" "}
      </Typography>
      <ul className="progressBar_history">{guestList}</ul>
    </div>
  );
};

export default Progress;
