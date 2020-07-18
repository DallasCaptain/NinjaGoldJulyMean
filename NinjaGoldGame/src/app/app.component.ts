import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  gold:number = 100;
  title = 'NinjaGoldGame';
  history:any;

  ngOnInit(){
    this.history = []
  }


  changeGold(){
    this.gold = 99
  }

  updateFromActions(data){
    //console.log(data)
    this.gold += data.amount
    if(data.amount >= 0){
      this.history.push({win:true,event:'You earned '+data.amount+' at the '+data.location})

    }else{
      this.history.push({win:false,event:'You lost '+data.amount+' at the '+data.location})

    }
  }
}
