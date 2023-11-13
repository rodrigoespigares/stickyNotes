var div;
var myNotes;
var count = 0;
var ratonEncima = false;
var notes;
var posX, posY;
var validateColours = ["pink","green","blue","yellow"]
var myNote;

window.onload = () => {
	div = new viewNote();
	myNotes = new ListNotes();
	myNotes.getAllNotes().forEach((note, key) => {
		
		myNote = new Note(note["title"], note["text"], note["hour"], note["posX"], note["posY"], note["colour"]);
		div.load(key, myNote.getTitle(), myNote.getText(), myNote.getHour(), myNote.getPosX(), myNote.getPosY(), myNote.getColour());
		count++;
	});
	document.getElementById("btnNote").addEventListener("click", () => {
		div.create(count);
		saveBtn(count);
		count++;
	});

	setTimeout(moveNote,0);
};

function saveBtn(count) {
	let btn = document.getElementById("save" + count);
	btn.addEventListener("click", () => {
		let tit = document.getElementById("inputTitle" + count).value;
		let txt = document.getElementById("inputText" + count).value;

		let now = new Date();
		let h = now.getHours().toString().padStart(2, "0");
		let m = now.getMinutes().toString().padStart(2, "0");
		let hour = h + "." + m;

		myNote = new Note(count, tit, txt, hour);
		myNotes.addNotes(myNote);
		div.successful(
			count,
			myNote.getTitle(),
			myNote.getText(),
			myNote.getHour()
		);
		let btnsMove = document.getElementsByClassName("move");
		for (const btnMove of btnsMove) {
			btnMove.addEventListener("click", () => {
			  	moveNote(myNote);
			});
		}
		let btnsTrash = document.getElementsByClassName("trash");
		for (const btnTrash of btnsTrash) {
			btnTrash.addEventListener("click", () => {
				let id = btnTrash.parentNode.parentNode.parentNode.id;
				let index = myNotes.getAllNotes().findIndex((element) => {
					return element.id === id;
				})
				myNotes.deleteNote(index);
				div.delete(id);
			});
		}
		let btnsColour = document.getElementsByClassName("note__header__colour");
		for (const btnColour of btnsColour) {
			btnColour.addEventListener("click", (e) => {
				if (validateColours.includes(e.target.className)) {
					e.target.parentNode.parentNode.parentNode.parentNode.classList = "note "+e.target.className+" on";
					myNote.setColour(e.target.className);
				}
			});
		}
		myNotes.saveToLocalStorage();
	});
}
function moveNote(myNote) {
    let notes = document.getElementsByClassName("on");

    for (let i = 0; i < notes.length; i++) {
        notes[i].ratonEncima = false;

        notes[i].addEventListener("click", function (e) {
            this.ratonEncima = !this.ratonEncima;
            if (this.ratonEncima) {
                let rect = this.getBoundingClientRect();
                this.posX = e.clientX - rect.left;
                this.posY = e.clientY - rect.top;
            } else {
                myNote.setPosX(parseInt(notes[i].style.left));
                myNote.setPosY(parseInt(notes[i].style.top));
            }
            myNotes.saveToLocalStorage();
        });
    }

    document.addEventListener("mousemove", function (e) {
        for (let i = 0; i < notes.length; i++) {
            if (notes[i].ratonEncima) {
                notes[i].style.top = e.clientY - notes[i].posY + "px";
                notes[i].style.left = e.clientX - notes[i].posX + "px";
            }
        }
    });
}