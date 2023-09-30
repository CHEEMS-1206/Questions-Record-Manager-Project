import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Edit from "./Edit";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

export default function Update() {
  const classes = useStyles();
  var ele;

  const [id, setId] = useState(0);
  const [data, setData] = useState("");

  const [idError, setIdError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIdError(false);

    if (id === "") {
      setIdError(true);
    } else {
      fetch("http://localhost:8000/notes/" + id)
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  };

  // render elements accordingly
    if (data === "") {
      ele = (
        <>
          <Typography
            variant="h6"
            color="textSecondary"
            component="h2"
            gutterBottom
          >
            Update Note
          </Typography>

          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              className={classes.field}
              onChange={(e) => setId(e.target.value)}
              label="Id of the Question "
              variant="outlined"
              color="secondary"
              fullWidth
              required
              error={idError}
            />

            <Button
              type="submit"
              color="secondary"
              variant="contained"
              endIcon={<KeyboardArrowRightIcon />}
            >
              Submit
            </Button>
          </form>
        </>
      );
    } else{
        ele = <Edit data={data}/>
    }

  return (
    <Container size="sm">
        {ele}
    </Container>
  );
}
