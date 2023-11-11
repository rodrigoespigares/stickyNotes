class viewNote
{
    myCreate = {
        h3 : document.createElement("h3"),
        p : document.createElement("p"),
        h6 : document.createElement("h6"),
    }
    create(id)
    {
        let div = document.createElement("div");
        div.className = "note";
        div.id = id;
        let input = document.createElement("input");
        input.className = "title";
        input.id = "inputTitle"+id;
        let textarea = document.createElement("textarea");
        textarea.className = "text";
        textarea.id = "inputText"+id; 
        let btnSave = document.createElement("button");
        btnSave.id = "save"+id;
        btnSave.textContent="Save";
        div.appendChild(input);
        div.appendChild(textarea);
        div.appendChild(btnSave);
        document.body.appendChild(div);
    }
    successful(id, title, text, hour) 
    {
        let div = document.getElementById(id)
        div.classList="note on"
        let input = document.getElementById("inputTitle"+id);
        let textarea = document.getElementById("inputText"+id);
        let button = document.getElementById("save"+id);
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
        h3.id = "title"+id;
        p.className = "text";
        p.id = "text"+id;
        h6.className = "hour";
        h6.id = "hour"+id;
        let move = document.createElement("button");
        move.id="move"+id;
        move.className="move";
        move.textContent="Move";
        div.appendChild(h3);
        div.appendChild(p);
        div.appendChild(h6);
        div.appendChild(move);
    }
    move(note, deltaX, deltaY) {
        // Mover la nota sumando las diferencias a las coordenadas actuales
        let currentLeft = parseInt(window.getComputedStyle(note).left);
        let currentTop = parseInt(window.getComputedStyle(note).top);

        note.style.left = currentLeft + deltaX + 'px';
        note.style.top = currentTop + deltaY + 'px';
    }
}