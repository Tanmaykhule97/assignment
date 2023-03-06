import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
   import * as moment from 'moment-timezone';
import { MatchService } from '../match.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  constructor(private matchdate:MatchService,private router:Router){}
  myfun(){
  this.router.navigate(['matchname'])
  }
  [x: string]: any;
  title = 'my-app';
  weekdays:any[] = [];

  

trendproduct:any;
ngOnInit(): void {
  this.matchdate.trendingproduct().subscribe((data: any)=>{
    console.log(data)
    this.trendproduct=data;
  })



    let days:any = [];
    for (let i = 1; i <= 7; i++) {
      days.push( moment().add(i, 'days').format('DD MM YYYY') )
    
    }console.log(days);
    this.weekdays = days;
    }

    // public onClick(): void {
    //   console.log('https://cms.bettorlogic.com/api/BetBuilder/GetFixtures?sports=1');
      
  
    //  }

}
