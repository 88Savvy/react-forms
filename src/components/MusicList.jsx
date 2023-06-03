import { useState } from "react";

export default function FormLogin() {
  const [form, setForm] = useState({
    songName: "",
    artist: "",
  });

  const [songs, setSongs] = useState([]);

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newSong = { songName: form.songName, artist: form.artist };
    setSongs([...songs, newSong]);
  }

  console.log(songs);

  return (
    <>
      <form>
        <label>Song name</label>
        <input
          type="text"
          name="songName"
          value={form.songName}
          onChange={handleChange}
        />
        <label>Artist</label>
        <input
          type="text"
          name="artist"
          value={form.artist}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Add Song</button>
      </form>

      <div>
        {songs.map((song, index) => (
          <div key={song}>
            <p>
              Song: {song.songName}, Artist: {song.artist}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
