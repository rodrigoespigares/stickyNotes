class Note {
	constructor(id, title, text, hour, posX=0, posY=0, colour = "yellow") {
        this.id = id;
		this.title = title;
		this.text = text;
		this.hour = hour;
        this.posX = posX;
        this.posY = posY;
        this.colour = colour;
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
    getColour()
    {
        return this.colour;
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
    setColour(colour)
    {
        this.colour = colour;
    }
}
