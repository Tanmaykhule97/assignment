import { Component,OnInit } from '@angular/core';
   import * as moment from 'moment-timezone';
import { MatchService } from './match.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  handleAction(){
    alert("hello")
  }
  [x: string]: any;
  title = 'my-app';
  weekdays:any[] = [];

  
constructor(private matchdate:MatchService){}
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

 
// ngOnInit(): void {


//   // let aryDate: any[] = [];
//   // for (let i = 7; i >= 1; i-- ){
//   //   let currDate = new Date();
//   //   aryDate.push
//   // }
// // let weekDays:any = [];
// // for (let i = 1; i <= 7; i++) {
// //   this.weekDays.push( moment().add(i, 'days').format('dddd') )

// // }console.log(weekDays);
// // let days: any[] = [];???
// let req = 7;
// for (let i= req;i>=1;i++) {
//   this.days.push(moment().subtract(i, 'days').format('dddd, Do MMMM YYYY'))
// }
// console.log(this.days)
// }
// }




// ngOnInit(): void {
//   let weekDays:any = [];
//   for (let i = 1; i <= 7; i++) {
//     this.days.push( moment().add(i, 'days').format('dddd') )
  
//   }console.log(weekDays);
  
//   }
//   }
