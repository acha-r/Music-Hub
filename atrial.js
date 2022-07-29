const songCollection = [];




function actions() {
    const input = +(prompt(`press 1 to add song
Press 2 to delete song
Press 3 to update a song
Press 4 to get a song`))
if (input === 1) {
    createNewSong();
} else if (input === 2) {
    deleteSong();
} 
}
actions();