var div;
var myNotes;
var count = 0;
var ratonEncima = false;
var posX;
var posY;
var notes;

window.onload = () => {
	div = new viewNote();
	myNotes = new ListNotes();

	document.getElementById("btnNote").addEventListener("click", () => {
		div.create(count);
		saveBtn(count);
		count++;
	});
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

		let myNote = new Note(tit, txt, hour);
		myNotes.addNotes(myNote);
		div.successful(
			count,
			myNote.getTitle(),
			myNote.getText(),
			myNote.getHour()
		);
		let btnsMove = document.getElementsByClassName("move");
		for (const btnMove of btnsMove) {
			btnMove.addEventListener("click", moveNote);
		}
	});
}
function moveNote() {
	let notes = document.getElementsByClassName("on");

	for (let i = 0; i < notes.length; i++) {
		notes[i].ratonEncima = false;

		notes[i].addEventListener("click", function (e) {
			this.ratonEncima = !this.ratonEncima;
			if (this.ratonEncima) {
				let rect = this.getBoundingClientRect();
				this.posX = e.clientX - rect.left;
				this.posY = e.clientY - rect.top;
			}
		});
	}

	document.addEventListener("mousemove", function (e) {
		targetElement = e.target;
		for (let i = 0; i < notes.length; i++) {
			if (notes[i].ratonEncima) {
				notes[i].style.top = e.clientY - notes[i].posY + "px";
				notes[i].style.left = e.clientX - notes[i].posX + "px";
			}
		}
	});
}
