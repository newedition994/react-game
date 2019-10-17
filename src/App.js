import React from "react";

import { Grid, Typography, Paper, Divider } from "@material-ui/core";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Grid
        container
        style={{ height: "100vh" }}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={3}>
          <Paper style={{ padding: "50px" }} elevation={6}>
            <Typography align="center" variant="h2" gutterBottom>
              HOT or COLD
            </Typography>
            <Divider style={{ margin: "20px 0" }} />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default App;
