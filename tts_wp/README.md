### tts word processor / command activator doodad.

voice recognition is used to input sentance array's into a pattern detector.

<li>1-3 word commands</li>
<li>patterns based on wp_command_file data structure dataObject</li>
<li>sentace is formed from child-object-key-names being defined as function</li>



this is some simple word detection and command triggering.
essentially Alexa level stuff. 1-3 word commands; command can be embedded in sentance as long as it conflicts with no other commands. - fix this.

# bugs:

If commands without children detected; sentace is thrown out; even if the rest of sentace has valid commands. 
### solve-scheduled::
- cut the wordslist that caused the undefined child; and throw the updated worldlist back in the cycle. -- will come in advanced command system and be retro fitted once refined.



## follow this repositories evolution live::
# https://twitch.tv/d74g0n