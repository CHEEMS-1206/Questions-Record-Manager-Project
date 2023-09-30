import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Masonry from "react-masonry-css";

import NoteCard from "../components/NoteCard";

export default function Notes(props) {
  const [notes, setNotes] = useState([]);

  // sorted notes
  const sortNotes = () => {
    if (props.sorting === true) {
      let low = 0,
        mid = 0,
        high = notes.length - 1;

      while (mid <= high) {
        if (notes[mid].category === "Easy") {
          let t = notes[mid];
          notes[low] = notes[mid];
          notes[mid] = t;
          low++;
          mid++;
        } else if (notes[mid] === "Medium") {
          mid++;
        } else {
          let t = notes[high];
          notes[high] = notes[mid];
          notes[mid] = t;
          high--;
        }
      }
    }
  };
  if (props.sorting === true) {
    console.log(props.sorting)
    sortNotes();
    console.log(props.sorting);
  } else {
    console.log(props.sorting);
    notes.sort((a, b) => a.id - b.id);
    console.log(props.sorting);
  }

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch("http://localhost:8000/notes/" + id, {
      method: "DELETE",
    });
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <div key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
}
