//META{"name":"Typing Sound", "website":"https://github.com/BirbBoi/yes", "source":"https://github.com/BirbBoi/yes"}*//
const audioCtx = new AudioContext();
const audio = new Audio();
class TypingSound
{
	getName() {return "Typing sound plugin";}
	getVersion() {return "1.0";}
	getAuthor() {return "Birb";}
	getDescription() {return "Typing sound, much cool very wow";}

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
