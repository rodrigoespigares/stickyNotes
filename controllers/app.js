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
	myNotes.getAllNotes().forEach((note) => {
		div.load(note['id'], note["title"], note["text"], note["hour"], note["posX"], note["posY"], note["colour"]);
	});
	document.getElementById("btnNote").addEventListener("click", () => {
		div.create(++count);
		saveBtn(count);
	});
	document.addEventListener('dragstart', function(evt) {
		if (evt.target.tagName == 'IMG') {
		  evt.preventDefault();
		}
	  });
	colour();
	trash();
	editNote();
	moveNote();
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
		myNotes.saveToLocalStorage();
		trash();
		colour();
		editNote();
		moveNote();
	});
	
}
function moveNote() {
    let notes = document.getElementsByClassName("on");

    for (let i = 0; i < notes.length; i++) {
        notes[i].ratonEncima = false;
        notes[i].posX = 0;
        notes[i].posY = 0;

		notes[i].addEventListener("click", function () {
			this.style.zIndex = 1;
		});

        notes[i].addEventListener("mousedown", function (e) {
            if (e.target.parentNode.id == "move") {
                this.ratonEncima = true;
                let rect = this.getBoundingClientRect();
                this.posX = e.clientX - rect.left;
                this.posY = e.clientY - rect.top;
            }
        });

        notes[i].addEventListener("mouseup", function (e) {
            if (this.ratonEncima) {
                this.ratonEncima = false;
                myNotes.getAllNotes()[i]['posX'] = parseFloat(this.style.left);
                myNotes.getAllNotes()[i]['posY'] = parseFloat(this.style.top);
				this.style.zindex=0;
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
        notes[i].addEventListener("mouseup", function (e) {
			parentElement = e.target.parentNode.parentNode.parentNode.parentNode;
			if (validateColours.includes(e.target.className) && !isNaN(parseInt(parentElement.id))) {
				parentElement.classList = "note "+e.target.className+" on";
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
		btnTrash.addEventListener("mouseup", () => {
			let id = parseInt(btnTrash.parentNode.parentNode.parentNode.id);
			index = myNotes.getAllNotes().findIndex((element) => {
				return element.id == id;			
			})
			if (index !== -1) {
				myNotes.deleteNote(index);
				div.delete(id);
				myNotes.saveToLocalStorage();
			}
		});
	}
}
function editNote() {
    let editButtons = document.getElementsByClassName("edit");
    let index;

    for (let i = 0; i < editButtons.length; i++) {
        let editButton = editButtons[i];

        editButton.addEventListener("mouseup", () => {
			
			if (editButton.parentNode && editButton.parentNode.parentNode && editButton.parentNode.parentNode.parentNode) {
				let id = parseInt(editButton.parentNode.parentNode.parentNode.id);
				index = myNotes.getAllNotes().findIndex((element) => {
					return element.id == id;
				});

				let posX = editButton.parentNode.parentNode.parentNode.style.left;
				let X = posX.substr(0, posX.length - 2);
				let posY = editButton.parentNode.parentNode.parentNode.style.top;
				let Y = posY.substr(0, posY.length - 2);
				let color = editButton.parentNode.parentNode.parentNode.classList[1];

				myNotes.deleteNote(index);
				div.edit(id);
				saveBtn(id, X, Y, color);
				myNotes.saveToLocalStorage();
			}
        });
    }
}