//META{"name":"OsuTyping", "website":"https://github.com/happynger/OsuTyping", "source":"https://github.com/happynger/OsuTyping"}*//
const audioCtx = new AudioContext();
const audio = new Audio();
audio.src = "https://raw.githubusercontent.com/BirbBoi/yes/blob/main/key-press-1.wav";
class OsuTyping
{
	getName() {return "Osu Typing";}
	getVersion() {return "1.0";}
	getAuthor() {return "Happy Ori";}
	getDescription() {return "Adds a clicking sound when you type";}

	initConstructor() {}

	load()
	{
                   
		audio.src = "https://raw.githubusercontent.com/BirbBoi/yes/main/key-press-1.wav";
			
			
			addEventListener('keydown', function(event) {
                           audio.pause();
                           audio.currentTime = 0;
                           audio.play();
                           });
    

		
	}

	unload()
	{
		audio.src = "";
		
	}

	start()
	{
		
	}

	initialize()
	{
		
		
	}

	stop()
	{
		
	}

	onSwitch()
	{
		
	}

	getChat()
	{
		l
	}
}