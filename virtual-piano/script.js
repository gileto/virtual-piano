const COLLECTION = document.querySelectorAll(".piano-key");
const PIANO = document.getElementById("piano");

COLLECTION.forEach(key => {
key.addEventListener("click", startSound);
});

function startSound(event) {
let key = event.target;
key.classList.add("piano-key-active");
let note = document.getElementById(key.dataset.note);
note.play();
}


const stopSound = (event) => {
 event.target.classList.remove("piano-key-active");
 }

const startCorrespondOver = (event) => {
 event.target.classList.add("piano-key-active");
COLLECTION.forEach((elem) => {
elem.addEventListener("mouseover", startSound);
 elem.addEventListener("mouseout", stopSound);
  });
}

const stopCorrespondOver = (event) => {
COLLECTION.forEach((elem) => {
  elem.classList.remove("piano-key-active");
  elem.removeEventListener("mouseover", startSound);
    elem.removeEventListener("mouseout", stopSound);
 })
 }
PIANO.addEventListener("mousedown", startCorrespondOver);

PIANO.addEventListener("mouseup", stopCorrespondOver);

document.querySelector(".fullscreen").addEventListener("click", toggleScreen);

function toggleScreen() {
    if (document.fullscreenElement === null) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

let notesBtn = document.querySelector(".btn-notes");
notesBtn.addEventListener("click", toggleButton);
let lettersBtn = document.querySelector(".btn-letters")
lettersBtn.addEventListener("click", toggleButton);

const letter = document.querySelectorAll("[data-letter]");

function toggleButton(event) {
    if (notesBtn.classList.contains("btn-active")) {
        notesBtn.classList.remove("btn-active");
        lettersBtn.classList.add("btn-active");
        PIANO.classList.add("show-letters");

    } else {
        notesBtn.classList.add("btn-active");
        lettersBtn.classList.remove("btn-active");
        PIANO.classList.remove("show-letters");
    
    }
}
window.addEventListener("keydown", (event) => playKey(event));

function playKey(event) {
    let letter = document.getElementById("c");
    let note;
    let key = event.target;

    COLLECTION.forEach((el) => {
        if(el.classList.contains('piano-key-active')) {
          el.classList.remove('piano-key-active');
        }
      event.target.classList.add('piano-key-active');
    });

    if (event.code === 'KeyD') {
        letter = document.getElementById("c");
        letter.play();

        note = document.getElementById("keyc");
        note.classList.add("piano-key-active");

    } else if (event.code === "KeyF") {
        letter = document.getElementById("d");
        letter.play();
        //

        note = document.getElementById("keyd");
        note.classList.add("piano-key-active");
    } else if (event.code === "KeyG") {
        letter = document.getElementById("e");
        letter.play();
        // 
        note = document.getElementById("keye");
        note.classList.add("piano-key-active");
       
    } else if (event.code === "KeyH") {
        letter = document.getElementById("f");
        letter.play();
        //
        note = document.getElementById("keyf");
        note.classList.add("piano-key-active");
    } else if (event.code === "KeyJ") {
        letter = document.getElementById("g");
        letter.play();
        //
        note = document.getElementById("keyg");
        note.classList.add("piano-key-active");
    } else if (event.code === "KeyK") {
        letter = document.getElementById("a");
        letter.play();
        //
        note = document.getElementById("keya");
        note.classList.add("piano-key-active");
    } else if (event.code === "KeyL") {
        letter = document.getElementById("b");
        letter.play();
        //
        note = document.getElementById("keyb");
        note.classList.add("piano-key-active");
    } else if (event.code === "KeyR") {
        letter = document.getElementById("Cs");
        letter.play();
        //
        note = document.getElementById("keyCs");
        note.classList.add("piano-key-active");
    } else if (event.code === "KeyT") {
        letter = document.getElementById("Ds");
        letter.play();
        //
        note = document.getElementById("keyDs");
        note.classList.add("piano-key-active");
    } else if (event.code === "KeyU") {
        letter = document.getElementById("Fs");
        letter.play();
        //
        note = document.getElementById("keyFs");
        note.classList.add("piano-key-active");
    } else if (event.code === "KeyI") {
        letter = document.getElementById("Gs");
        letter.play();
        //
        note = document.getElementById("keyGs");
        note.classList.add("piano-key-active");
    } else if (event.code === "KeyO") {
        letter = document.getElementById("As");
        letter.play();
        //
        note = document.getElementById("keyAs");
        note.classList.add("piano-key-active");
    }
}


    


