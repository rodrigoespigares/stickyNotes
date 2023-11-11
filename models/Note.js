class Note {
    
	constructor(title, text, hour, posX = 0, posY = 0) {
		this.title = title;
		this.text = text;
		this.hour = hour;
        this.posX = posX;
        this.posY = posY;
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
    getPosX()
    {
        return this.posX;
    }
    getPosY()
    {
        return this.posY;
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
    setPosX(posX)
    {
        this.posX = posX;
    }
    setPosY(posY)
    {
        this.posY = posY;
    }
}
