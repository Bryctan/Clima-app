import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{

  clock:BehaviorSubject<Date> = new BehaviorSubject<Date>(new Date()) 
  currentTime:any

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    setInterval(() => {
      this.clock.next(new Date());
      this.currentTime = this.clock.value
    }, 1000);
  }
  
}
