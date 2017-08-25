import { Component, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() {}

  musicOn:boolean = true;
  musicOff:boolean = false;

  changeMusic(choice:boolean){
    let elOn: NodeListOf<Element> = document.getElementsByClassName("turn-on");
    let elOff: NodeListOf<Element> = document.getElementsByClassName("turn-off");

    if(choice == false){
      this.player.nativeElement.pause();
      elOn[0].classList.add('active');
      elOff[0].classList.remove('active');
    }else{
      this.player.nativeElement.play();
      elOff[0].classList.add('active');
      elOn[0].classList.remove('active');
    }
  }
  @ViewChild('audioplayer') player;

  ngOnInit() {}

  @Input() isActive:string;

  @Output() isActiveChange = new EventEmitter<string>();
  onNameChange(model: string){
    this.isActive = model;
    this.isActiveChange.emit(model);

    let elOn: NodeListOf<Element> = document.getElementsByClassName("button-toggle");

    if(model == 'on'){
      elOn[0].classList.add('active');
    }
  }
}
