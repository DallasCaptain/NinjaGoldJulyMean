import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
  styleUrls: ['./gold.component.scss']
})
export class GoldComponent implements OnInit {
  @Input()gold:number;
  constructor() { }

  ngOnInit() {
    
  }

}
