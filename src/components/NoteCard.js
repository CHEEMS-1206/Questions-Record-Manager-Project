import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import { makeStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { yellow, green, blue, red } from "@material-ui/core/colors";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (note) => {
      if (note.category === "Easy") {
        return green[700];
      }
      if (note.category === "Medium") {
        return yellow[700];
      }
      if (note.category === "Hard") {
        return red[800];
      }
      return blue[800];
    },
  },
  pre: {
    padding: "10px 20px",
    overflow: "auto",
  },
  header: {
    backgroundColor: (note) => {
      if (note.category === "Easy") {
        return green[100];
      }
      if (note.category === "Medium") {
        return yellow[100];
      }
      if (note.category === "Hard") {
        return red[100];
      }
      return blue[800];
    },
  },
});

export default function NoteCard({ note, handleDelete }) {
  const classes = useStyles(note);

  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          className={classes.header}
          avatar={
            <Avatar className={classes.avatar}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.questionName}
          subheader={note.date}
        />
        <CardContent>
          <Typography variant="body1">{note.approach}</Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2">{note.note}</Typography>
        </CardContent>
        <pre className={classes.pre}>
          <Typography variant="body2" color="textSecondary">
            {note.code}
          </Typography>
        </pre>
      </Card>
    </div>
  );
}
