class Note {
    
	constructor(title, text, hour) {
		this.title = title;
		this.text = text;
		this.hour = hour;
        this.allNotes=[];
	}
    getTitle()
    {
        return this.title;
    }
    getText()
    {
        return this.text;
    }
    getHour()
    {
        return this.hour;
    }
    setTitle(title)
    {
        this.title = title;
    }
    setText(text)
    {
        this.text = text;
    }
    setHour(hour)
    {
        this.hour = hour;
    }
    
}