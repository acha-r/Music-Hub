const songList = []
const song = () => {
    title = prompt("What is the title of the song?"),
    artiste = prompt("Who is the artiste?")
}

class Song {
    constructor () {
        song()
        this.reviewStatus = false
        function reviewScore () {
            // if ()
        }
        // this.releaseDate = releaseDate
        // this.reviewStatus = false,
        // this.reviewScore = reviewScore
    }
} 
    
//A. Add Song
function createNewSong() {
    new Song ();
    songList.push({title, artiste})
    this.id = songList.indexOf({title, artiste}) + 1;
}
    

//B. Delete Song
function deleteSong() {
    song()
     let choiceIndex = songList.findIndex(choice => {
         if (choice.title == title && choice.artiste == artiste) {
             return true
         } return false 
     })
     
     songList.splice(choiceIndex, 1)
 }

//C. Get Song
function getSong() {
    const makeAChoice = prompt(`Press 1 to get a song 
    or press 2 to get ALL songs`)
    if (makeAChoice == 1){ 
    song()
    let choiceIndex = songList.findIndex(choice => {
        if (choice.title == title && choice.artiste == artiste) { 
            return true
    } return false
    })

    if (choiceIndex == -1) {
        alert("not found")
        if (confirm("Add new music?")) {
            createNewSong()
        }
    } else {
        let chosen = songList[choiceIndex]
        return chosen
    }
} else if (makeAChoice == 2) {
    return songList
}
}



function actions() {
    const input = +(prompt(`press 1 to add song
Press 2 to delete song
Press 3 to update a song
Press 4 to get a song`))
if (input === 1) {
    createNewSong();
} else if (input === 2) {
    deleteSong();
} else if (input === 4) {
    getSong()
} 
}
actions();
   



