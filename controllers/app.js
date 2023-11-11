var div, myNotes;
var count = 0;
window.onload = () => {
    div = new viewNote();
    myNotes = new ListNotes();

    document.getElementById("btnNote").addEventListener("click", () => {
        div.create(count);
        saveBtn(count);
        count++
    });
}

function saveBtn(count) {
    let btn = document.getElementById("save"+count)
    btn.addEventListener("click", () => {
        let tit = document.getElementById("inputTitle"+count).value;
        let txt = document.getElementById("inputText"+count).value;

        let now = new Date();
        let h = now.getHours().toString().padStart(2, '0');
        let m = now.getMinutes().toString().padStart(2, '0');
        let hour = h + "." + m;

        let myNote = new Note(tit, txt, hour);
        myNotes.addNotes(myNote);
        div.successful(count,myNote.getTitle(), myNote.getText(), myNote.getHour());
    });
}