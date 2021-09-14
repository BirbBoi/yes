//META{"name":"TypingSound", "website":"https://github.com/BirbBoi/yes", "source":"https://github.com/BirbBoi/yes", "updateUrl":"https://github.com/BirbBoi/yes/TypingSound.plugin.js }*//
const audioCtx = new AudioContext();
const audio = new Audio();
class TypingSound
{
	getName() {return "Typing sound plugin";}
	getVersion() {return "1.1";}
	getAuthor() {return "Birb";}
	getDescription() {return "Typing sound, much cool very wow";}

	initConstructor() {}

	load()
	{
                   
		audio.src = "https://raw.githubusercontent.com/BirbBoi/yes/main/key-press-1.wav";	
	}

	unload()
	{
		audio.src = "";
		
	}

	start()
	{
		addEventListener('keydown', function(event) {
                           audio.pause();
                           audio.currentTime = 0;
                           audio.play();
                           });
    
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
		
	}
}
