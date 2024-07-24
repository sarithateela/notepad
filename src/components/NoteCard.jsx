import React from "react";

export default function NoteCard({
  title,
  setCurrentEditing,
  index,
  deleteNote,
}) {
  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        <h2 className="temp" onClick={() => setCurrentEditing(index)}>
          {title.substr(0, 20)}....
        </h2>
        <button onClick={() => deleteNote(index)}>Delete</button>
      </div>
      <hr />
    </div>
  );
}