const roomId = new URLSearchParams(location.search).get("roomId");

function goNotes() {
  location.href = `notes.html?roomId=${roomId}`;
}

function goConference() {
  location.href = `conference.html?roomId=${roomId}`;
}
// Handle Android back button
document.addEventListener('ionBackButton', (ev) => {
  ev.detail.register(10, () => {
    // Add your exit room logic here
    exitRoom(); // your existing exit function
    window.history.back();
  });
});