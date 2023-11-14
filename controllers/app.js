var div;
var myNotes = new ListNotes();
var count = myNotes.getAllNotes().length >0?parseInt(myNotes.getAllNotes()[(myNotes.getAllNotes().length)-1]['id']):0;
var ratonEncima = false;
var notes;
var posX, posY;
var validateColours = ["pink","green","blue","yellow"]
var myNote;
window.onload = () => {
	div = new viewNote();
	myNotes.getAllNotes().forEach((note, key) => {
		div.load(key, note["title"], note["text"], note["hour"], note["posX"], note["posY"], note["colour"]);
		count++;
	});
	document.getElementById("btnNote").addEventListener("click", () => {
		div.create(count);
		saveBtn(count);
		count++;
	});
	setTimeout(moveNote,0);
	setTimeout(colour,0);
	setTimeout(trash,0)
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
				trash();
			});
		}
		let btnsColours = document.getElementsByClassName("note__header__colour");
		for (const btnColours of btnsColours) {
			btnColours.addEventListener("click", () => {
			  	colour();
			});
		}
		myNotes.saveToLocalStorage();
	});
}
function moveNote() {
    let notes = document.getElementsByClassName("on");
    for (let i = 0; i < notes.length; i++) {
        notes[i].ratonEncima = false;
        notes[i].addEventListener("click", function (e) {
			if (e.target.parentNode.id == "move") {
				this.ratonEncima = !this.ratonEncima;
				if (this.ratonEncima) {
					let rect = this.getBoundingClientRect();
					this.posX = e.clientX - rect.left;
					this.posY = e.clientY - rect.top;
				} else {
					myNotes.getAllNotes()[i]['posX']=(parseInt(notes[i].style.left));
					myNotes.getAllNotes()[i]['posY']=(parseInt(notes[i].style.top));
				}
				myNotes.saveToLocalStorage();
			}     
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
function colour() {
	let notes = document.getElementsByClassName("on");
    for (let i = 0; i < notes.length; i++) {
        notes[i].addEventListener("click", function (e) {
			if (validateColours.includes(e.target.className)) {
					e.target.parentNode.parentNode.parentNode.parentNode.classList = "note "+e.target.className+" on";
					myNotes.getAllNotes()[i]['colour']=e.target.className
				myNotes.saveToLocalStorage();
			}     
        });
    }
	myNotes.saveToLocalStorage();
}
function trash(){
	let btnsTrash = document.getElementsByClassName("trash");
	let index
	for (const btnTrash of btnsTrash) {
		btnTrash.addEventListener("click", () => {
			let id = parseInt(btnTrash.parentNode.parentNode.parentNode.id);
			index = myNotes.getAllNotes().findIndex((element) => {
				return element.id == id;			
			})
			myNotes.deleteNote(index);
			div.delete(id)
			myNotes.saveToLocalStorage();
		});
	}
}