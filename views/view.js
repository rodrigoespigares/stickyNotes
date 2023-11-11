class viewNote
{
    myCreate = {
        input : document.createElement("input"),
        h3 : document.createElement("h3"),
        textarea : document.createElement("textarea"),
        p : document.createElement("p"),
        h6 : document.createElement("h6"),
        btnSave : document.createElement("button"),
    }
    create(id)
    {
        let div = document.createElement("div");
        div.className = "note";
        div.id = id;
        this.myCreate.input.className = "title";
        this.myCreate.input.id = "inputTitle"+id;
        this.myCreate.textarea.className = "text";
        this.myCreate.textarea.id = "inputText"+id; 
        this.myCreate.btnSave.id = "save"+id;
        this.myCreate.btnSave.textContent="Save";
        div.appendChild(this.myCreate.input);
        div.appendChild(this.myCreate.textarea);
        div.appendChild(this.myCreate.btnSave);
        document.body.appendChild(div);
    }
    successful(id, title, text, hour) {
        let div = document.getElementById(id)
        let input = document.getElementById("inputTitle"+id);
        let textarea = document.getElementById("inputText"+id);
        let button = document.getElementById("save"+id); // Agregué esta línea para obtener el botón
        this.myCreate.h3.textContent = title;
        this.myCreate.p.textContent = text;
        this.myCreate.h6.textContent = hour;
        
        // Verifica si los elementos existen antes de intentar eliminarlos
        if (input) div.removeChild(input);
        if (textarea) div.removeChild(textarea);
        if (button) div.removeChild(button);

        this.myCreate.h3.className = "title";
        this.myCreate.h3.id = "title";
        this.myCreate.p.className = "text";
        this.myCreate.p.id = "text";
        this.myCreate.h6.className = "hour";
        this.myCreate.h6.id = "hour";
        div.appendChild(this.myCreate.h3);
        div.appendChild(this.myCreate.p);
        div.appendChild(this.myCreate.h6);
    }
}