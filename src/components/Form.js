import React from "react";

import { TextField, Button } from "@material-ui/core";

const Form = () => {
  return (
    <form>
      <TextField
        style={{ paddingBottom: "20px" }}
        fullWidth
        type="number"
        name="guess"
        label="Enter your guess"
        required
      />
      <Button fullWidth varient="contained" color="primary" type="submit">
        Guess
      </Button>
    </form>
  );
};

export default Form;
