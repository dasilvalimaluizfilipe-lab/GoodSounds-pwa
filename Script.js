const search = document.getElementById("search");
const songs = document.querySelectorAll("#music-list li");

search.addEventListener("keyup", () => {
  const value = search.value.toLowerCase();

  songs.forEach(song => {
    song.style.display = song.dataset.name.includes(value)
      ? "block"
      : "none";
  });
});

