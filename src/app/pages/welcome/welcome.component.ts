import { Component, OnInit } from '@angular/core';
import { SOUNDS } from 'src/app/sound-list';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  disabled = false;
  sounds: any[] = SOUNDS;
  playing : any = 0;
  constructor(private message: NzMessageService) {
  }
  ngOnInit() {}

  playSound(i:any) {
    let audio = document.getElementById(i) as HTMLAudioElement;
    if(this.playing >= 4 && !this.sounds[i].playing) {
      this.message.error('You can only play 4 sounds at a time');
    }else{
      if (audio) {
        audio.paused ? audio.play() : audio.pause();
        audio.paused ? this.sounds[i].playing = false : this.sounds[i].playing = true;
        audio.paused ? this.message.info('Paused ' + this.sounds[i].name) : this.message.success('Playing ' + this.sounds[i].name);
        audio.paused ? this.playing = this.playing - 1 :  this.playing = this.playing + 1;
      }else {
        this.createSound(i);
      }
    }
  }

  createSound(i:any) {
    this.playing =  this.playing + 1;
    const audio = new Audio();
    audio.loop = true;
    audio.id = i;
    audio.src  = this.sounds[i].track;
    audio.volume = this.sounds[i].volume/10;
    audio.play();
    this.message.success('Playing ' + this.sounds[i].name);
    this.sounds[i].playing = true;
    document.body.appendChild(audio);
  }

  setVolume(i:any, volume:any) {
    let audio = document.getElementById(i) as HTMLAudioElement;
    audio.volume = volume/10;
  }
}
