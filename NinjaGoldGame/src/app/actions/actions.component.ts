import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  
  @Output() updateGold = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
  processGold(site:String){
    //console.log(site)
    if(site == 'farm'){
      this.updateGold.emit({location:'farm',amount:this.getRandom(2,5)})
    }else if(site == 'cave'){
      this.updateGold.emit({location:'cave',amount:this.getRandom(5,10)})
    }else if(site == 'house'){
      this.updateGold.emit({location:'house',amount:this.getRandom(7,15)})
    }else if(site == 'casino'){
      this.updateGold.emit({location:'casino',amount:this.getRandom(-50,50)})
    }
  }

  getRandom(min:number,max:number):number{
    return Math.floor(Math.random()*(max-min+1) + min)
  }

}
