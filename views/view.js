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
		/**
		 * CREATE DIV GENERAL
		 */
		let div = document.getElementById(id);
		div.classList.add("on");
		// Selected input
		let input = document.getElementById("inputTitle" + id);
		let textarea = document.getElementById("inputText" + id);
		let button = document.getElementById("save" + id);
		/**
		 * COLOURS BUTTONS
		 */
		let colour = document.createElement("div");
		colour.className = "note__header__colour";

		// Yellow
		let cY = document.createElement("button");
		cY.id = "yellow";
		cY.className = "yellow";
		let yellow = document.createElement("img");
		yellow.src = "src/img/yellow.png";
		yellow.className = "yellow";
		cY.appendChild(yellow);

		// Green
		let cG = document.createElement("button");
		cG.id = "green";
		cG.className = "green";
		let green = document.createElement("img");
		green.src = "src/img/green.png";
		green.className = "green";
		cG.appendChild(green);

		// Pink
		let cP = document.createElement("button");
		cP.id = "pink";
		cP.className = "pink";
		let pink = document.createElement("img");
		pink.src = "src/img/pink.png";
		pink.className = "pink";
		cP.appendChild(pink);

		// Blue
		let cB = document.createElement("button");
		cB.id = "blue";
		cB.className = "blue";
		let blue = document.createElement("img");
		blue.src = "src/img/blue.png";
		blue.className = "blue";
		cB.appendChild(blue);

		/**
		 * HEADER + COLOURS
		 */
		let headColour = document.createElement("div");
		headColour.className = "note__header";

		/**
		 * APPEND COLOURS
		 */
		colour.appendChild(cY);
		colour.appendChild(cG);
		colour.appendChild(cP);
		colour.appendChild(cB);

		/**
		 * TITLE
		 */
		let h3 = document.createElement("h3");
		h3.textContent = title;
		h3.className = "title";
		h3.id = "title" + id;
		/**
		 * TEXT
		 */
		let p = document.createElement("p");
		p.textContent = text;
		p.className = "text";
		p.id = "text" + id;
		/**
		 * HOUR
		 */
		let h6 = document.createElement("h6");
		h6.textContent = hour;
		h6.className = "hour";
		h6.id = "hour" + id;
		/**
		 * CHECK IF EXITS INPUT AND DELETE
		 */
		if (input) div.removeChild(input);
		if (textarea) div.removeChild(textarea);
		if (button) div.removeChild(button);

		/**
		 * CONFIG BUTONS
		 */
		let divbtns = document.createElement("div");
		// Move
		let move = document.createElement("button");
		move.id = "move";
		move.className = "move";
		// Icon move
		let ico = document.createElement("img");
		ico.src = "src/img/move.png";
		ico.className = "ico";
		move.appendChild(ico);
		// Trash
		let trash = document.createElement("button");
		trash.id = "trash";
		trash.className = "trash";
		// Icon trash
		let ico2 = document.createElement("img");
		ico2.src = "src/img/trash.png";
		ico2.className = "ico2";
		trash.appendChild(ico2);
		// edit
		let edit = document.createElement("button");
		edit.id = "edit";
		edit.className = "edit";
		// Icon edit
		let ico3 = document.createElement("img");
		ico3.src = "src/img/edit.png";
		ico3.className = "ico3";
		edit.appendChild(ico3);
		// Append
		divbtns.appendChild(move);
		divbtns.appendChild(trash);
		divbtns.appendChild(edit);

		/**
		 * HOUR + CONFIG BUTTONS
		 */
		let h6btn = document.createElement("div");
		h6btn.className = "note__container";
		// Append
		h6btn.appendChild(h6);
		h6btn.appendChild(divbtns);

		// Appends all
		headColour.appendChild(h3);
		headColour.appendChild(colour);
		div.appendChild(headColour);
		div.appendChild(p);
		div.appendChild(h6btn);
	}
	load(id, title, text, hour, posX, posY, noteColour) {
		/**
		 * GENERAL DIV
		 */
		let div = document.createElement("div");
		div.classList = "note";
		div.classList.add(noteColour);
		div.classList.add("on");
		div.id = id;
		/**
		 * TITLE
		 */
		let h3 = document.createElement("h3");
		h3.textContent = title;
		h3.className = "title";
		h3.id = "title" + id;
		/**
		 * TEXT
		 */
		let p = document.createElement("p");
		p.textContent = text;
		p.className = "text";
		p.id = "text" + id;
		/**
		 * HOUR
		 */
		let h6 = document.createElement("h6");
		h6.textContent = hour;
		h6.className = "hour";
		h6.id = "hour" + id;
		/**
		 * CONFIG BUTONS
		 */
		let divbtns = document.createElement("div");
		// Move
		let move = document.createElement("button");
		move.id = "move";
		move.className = "move";
		// Icon move
		let ico = document.createElement("img");
		ico.src = "src/img/move.png";
		ico.className = "ico";
		move.appendChild(ico);
		// Trash
		let trash = document.createElement("button");
		trash.id = "trash";
		trash.className = "trash";
		// Icon trash
		let ico2 = document.createElement("img");
		ico2.src = "src/img/trash.png";
		ico2.className = "ico2";
		trash.appendChild(ico2);
		// edit
		let edit = document.createElement("button");
		edit.id = "edit";
		edit.className = "edit";
		// Icon edit
		let ico3 = document.createElement("img");
		ico3.src = "src/img/edit.png";
		ico3.className = "ico3";
		edit.appendChild(ico3);
		// Append
		divbtns.appendChild(move);
		divbtns.appendChild(trash);
		divbtns.appendChild(edit);

		/**
		 * HOUR + CONFIG BUTTONS
		 */
		let h6btn = document.createElement("div");
		h6btn.className = "note__container";
		// Append
		h6btn.appendChild(h6);
		h6btn.appendChild(divbtns);

		/**
		 * COLOURS BUTTONS
		 */
		let colour = document.createElement("div");
		colour.className = "note__header__colour";

		// Yellow
		let cY = document.createElement("button");
		cY.id = "yellow";
		cY.className = "yellow";
		let yellow = document.createElement("img");
		yellow.src = "src/img/yellow.png";
		yellow.className = "yellow";
		cY.appendChild(yellow);

		// Green
		let cG = document.createElement("button");
		cG.id = "green";
		cG.className = "green";
		let green = document.createElement("img");
		green.src = "src/img/green.png";
		green.className = "green";
		cG.appendChild(green);

		// Pink
		let cP = document.createElement("button");
		cP.id = "pink";
		cP.className = "pink";
		let pink = document.createElement("img");
		pink.src = "src/img/pink.png";
		pink.className = "pink";
		cP.appendChild(pink);

		// Blue
		let cB = document.createElement("button");
		cB.id = "blue";
		cB.className = "blue";
		let blue = document.createElement("img");
		blue.src = "src/img/blue.png";
		blue.className = "blue";
		cB.appendChild(blue);

		/**
		 * HEADER + COLOURS
		 */
		let headColour = document.createElement("div");
		headColour.className = "note__header";

		/**
		 * APPEND COLOURS
		 */
		colour.appendChild(cY);
		colour.appendChild(cG);
		colour.appendChild(cP);
		colour.appendChild(cB);

		/**
		 * APPENDS ALL
		 */
		headColour.appendChild(h3);
		headColour.appendChild(colour);
		div.appendChild(headColour);
		div.appendChild(p);
		div.appendChild(h6btn);

		/**
		 * STYLE NOTE
		 */
		div.style.left = `${posX}px`;
		div.style.top = `${posY}px`;

		/**
		 * APPENDS ALL
		 */
		document.body.appendChild(div);
	}
	delete(index) {
		let div = document.getElementById(index);
		document.body.removeChild(div);
	}
	edit(index){
		/**
		 * CREATE GENERAL
		 */
		let div = document.getElementById(index);
		let headBtn = div.querySelector(".note__header")
		let footBtn = div.querySelector(".note__container")
		/**
		 * SELECT ELEMENT
		 */
		let h3 = document.getElementById("title"+index);
		let p = document.getElementById("text"+index);
		let hour = document.getElementById("hour"+index);
		/**
		 * CREATE ELEMENT
		 */
		let input = document.createElement("input");
		input.className = "title";
		input.id = "inputTitle" + index;
		input.value = h3.textContent;
		let textarea = document.createElement("textarea");
		textarea.className = "text";
		textarea.id = "inputText" + index;
		textarea.value = p.textContent;
		let btnSave = document.createElement("button");
		btnSave.id = "save" + index;
		btnSave.textContent = "Save";
		div.appendChild(input);
		div.appendChild(textarea);
		div.appendChild(btnSave);
		console.log(h3);
		div.removeChild(headBtn);
		div.removeChild(p);
		div.removeChild(footBtn);
		document.body.appendChild(div);
	}
}
