import React, {Component} from 'react';
import soundfile from './TitleScreenMusic.mp3';
import Sound from 'react-sound';

class TitleScreenMusic extends Component{

  render(){
    return(
      <Sound
        url={soundfile}
        loop={true}
        playStatus={Sound.status.PLAYING}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
      />
    );
  }
}

  export default TitleScreenMusic;
