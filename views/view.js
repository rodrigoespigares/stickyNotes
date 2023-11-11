class viewNote {
	myCreate = {
		h3: document.createElement("h3"),
		p: document.createElement("p"),
		h6: document.createElement("h6"),
	};
	create(id) {
		let div = document.createElement("div");
		div.classList = "note yellow";
		div.id = id;
		let input = document.createElement("input");
		input.className = "title";
		input.id = "inputTitle" + id;
		let textarea = document.createElement("textarea");
		textarea.className = "text";
		textarea.id = "inputText" + id;
		let btnSave = document.createElement("button");
		btnSave.id = "save" + id;
		btnSave.textContent = "Save";
		div.appendChild(input);
		div.appendChild(textarea);
		div.appendChild(btnSave);
		document.body.appendChild(div);
	}
	successful(id, title, text, hour) {
		let div = document.getElementById(id);
		div.classList.add("on");
		let input = document.getElementById("inputTitle" + id);
		let textarea = document.getElementById("inputText" + id);
		let button = document.getElementById("save" + id);
		let h3 = document.createElement("h3");
		h3.textContent = title;
		let p = document.createElement("p");
		p.textContent = text;
		let h6 = document.createElement("h6");
		h6.textContent = hour;
		if (input) div.removeChild(input);
		if (textarea) div.removeChild(textarea);
		if (button) div.removeChild(button);
		h3.className = "title";
		h3.id = "title" + id;
		p.className = "text";
		p.id = "text" + id;
		h6.className = "hour";
		h6.id = "hour" + id;
		let move = document.createElement("button");
		move.id = "move";
		move.className = "move";
		let ico = document.createElement("img");
		ico.src = "src/img/move.png";
		ico.className = "ico";
		move.appendChild(ico);

		let h6btn = document.createElement("div");
		h6btn.className = "note__container";

		h6btn.appendChild(h6);
		h6btn.appendChild(move);

		div.appendChild(h3);
		div.appendChild(p);
		div.appendChild(h6btn);
	}
	load(id, title, text, hour,posX,posY) {
		let div = document.createElement("div");
		div.classList = "note yellow on";
		div.id = id;
		
		let h3 = document.createElement("h3");
		h3.textContent = title;
		let p = document.createElement("p");
		p.textContent = text;
		let h6 = document.createElement("h6");
		h6.textContent = hour;
		h3.className = "title";
		h3.id = "title" + id;
		p.className = "text";
		p.id = "text" + id;
		h6.className = "hour";
		h6.id = "hour" + id;
		let move = document.createElement("button");
		move.id = "move";
		move.className = "move";
		let ico = document.createElement("img");
		ico.src = "src/img/move.png";
		ico.className = "ico";
		move.appendChild(ico);

		let h6btn = document.createElement("div");
		h6btn.className = "note__container";
		h6btn.appendChild(h6);
		h6btn.appendChild(move);
		div.appendChild(h3);
		div.appendChild(p);
		div.appendChild(h6btn);
		div.style.left = `${posX}px`; // Establecer la posición horizontal
    	div.style.top = `${posY}px`; // Establecer la posición vertical

    	document.body.appendChild(div);

		
		
		
	}
}
