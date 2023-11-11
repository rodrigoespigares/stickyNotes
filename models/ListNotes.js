class ListNotes {
    constructor() {
        this.listNotes = JSON.parse(localStorage.getItem('listNotes')) || [];
    }

    addNotes(note) {
        this.listNotes.push(note);
        this.saveToLocalStorage();
    }

    saveToLocalStorage() {
        localStorage.setItem('listNotes', JSON.stringify(this.listNotes));
    }
    getAllNotes() {
        return this.listNotes;
    }
}