import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

export default function Edit({ data }) {
  const classes = useStyles();
  const history = useHistory();

  const [questionName, setQuestionName] = useState(data.questionName);
  const [approach, setApproach] = useState(data.approach);
  const [code, setCode] = useState(data.code);
  const [note, setNote] = useState(data.note);
  const [category, setCategory] = useState(data.category);

  const [questionError, setQuestionError] = useState(false);
  const [approachError, setApproachError] = useState(false);
  const [codeError, setCodeError] = useState(false);
  const [noteError, setNoteError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (questionName === "") {
      setQuestionError(true);
    }
    if (approach === "") {
      setApproachError(true);
    }
    if (code === "") {
      setCodeError(true);
    }
    if (note === "") {
      setNoteError(true);
    }
    if (questionName && code && approach && note && category) {
      fetch("http://localhost:8000/notes/" + data.id, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ questionName, approach, code, category, note }),
      }).then(() => history.push("/"));
    }
  };

  return (
    <Container size="sm">
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
          onChange={(e) => setQuestionName(e.target.value)}
          //   label="Question Name"
          defaultValue={questionName}
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={questionError}
        />
        <TextField
          className={classes.field}
          onChange={(e) => setApproach(e.target.value)}
          //   label="Approach/Algorithm"
          defaultValue={approach}
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={approachError}
        />
        <TextField
          className={classes.field}
          onChange={(e) => setCode(e.target.value)}
          //   label="Code"
          defaultValue={code}
          variant="outlined"
          color="secondary"
          multiline
          minRows={4}
          fullWidth
          required
          error={codeError}
        />
        <TextField
          className={classes.field}
          onChange={(e) => setNote(e.target.value)}
          //   label="Approach/Algorithm"
          defaultValue={note}
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={noteError}
        />

        <FormControl className={classes.field}>
          <FormLabel>Question Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value="Easy" control={<Radio />} label="Easy" />
            <FormControlLabel
              value="Medium"
              control={<Radio />}
              label="Medium"
            />
            <FormControlLabel value="Hard" control={<Radio />} label="Hard" />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
