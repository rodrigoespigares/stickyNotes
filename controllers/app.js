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
	setTimeout(trash,0);
	setTimeout(editNote,0);
};
function saveBtn(count, X = 10, Y = 4, color = "yellow") {
	let btn = document.getElementById("save" + count);
	btn.addEventListener("click", () => {
		let tit = document.getElementById("inputTitle" + count).value;
		let txt = document.getElementById("inputText" + count).value;
		let now = new Date();
		let dia = now.getDate().toString().padStart(2, '0');
		let mes = (now.getMonth() + 1).toString().padStart(2, '0');
		let anio = now.getFullYear();
		let horas = now.getHours().toString().padStart(2, '0');
		let minutos = now.getMinutes().toString().padStart(2, '0');
		let hour = `${dia}.${mes}.${anio} ${horas}.${minutos}`;
		console.log("x: "+X);
		console.log("y: "+Y);
		myNote = new Note(count, tit, txt, hour, X , Y, color);
		myNotes.addNotes(myNote);
		div.delete(count);
		div.load(
			count,
			myNote.getTitle(),
			myNote.getText(),
			myNote.getHour(),
			myNote.getPosX(),
			myNote.getPosY(),
			myNote.getColour()
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
		let editButtons = document.getElementsByClassName("edit");
		for (const editButton of editButtons) {
			editButton.addEventListener("click", () => {
			  	editNote();
			});
		}
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
function editNote() {
	let editButtons = document.getElementsByClassName("edit");
	for (const editButton of editButtons) {
		editButton.addEventListener("click", () => {
			let id = parseInt(editButton.parentNode.parentNode.parentNode.id);
			let posX = editButton.parentNode.parentNode.parentNode.style.left;
			let X = posX.substr(0, posX.length - 2);
			let posY = editButton.parentNode.parentNode.parentNode.style.top;
			let Y = posX.substr(0, posY.length - 2);
			let color = editButton.parentNode.parentNode.parentNode.classList[1];
			myNotes.deleteNote(id);
			div.edit(id);
			console.log("x: "+X);
			console.log("y: "+Y);
			saveBtn(id,X,Y,color);
			myNotes.saveToLocalStorage();
		});
	}
}

