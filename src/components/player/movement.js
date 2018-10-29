export default function handleMovement(player) {
  window.addEventListener('keydown', e => handleKeyDown(e));

  function handleKeyDown(e) {
    e.preventDefault();
    switch(e.keyCode) {
      default: console.log(e.keyCode);
    }
  }

  return player;
}