export const play = (e) => {
  let key;

  if (e.key === "Enter") {
    key = document.getElementById("key1");
  } else if ("aei".includes(e.key)) {
    key = document.getElementById("key2");
  } else if ("uoy".includes(e.key)) {
    key = document.getElementById("key3");
  } else if ("dhtn".includes(e.key)) {
    key = document.getElementById("key4");
  } else if ("cgj".includes(e.key)) {
    key = document.getElementById("key5");
  } else if ("bkmp".includes(e.key)) {
    key = document.getElementById("key6");
  } else {
    key = document.getElementById("key0");
  }

  if (key) {
    key.play();
  }
};
