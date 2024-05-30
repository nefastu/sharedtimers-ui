import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-active-timers',
  standalone: true,
  imports: [],
  templateUrl: './active-timers.component.html',
  styleUrl: './active-timers.component.scss'
})
export class ActiveTimersComponent implements OnInit {
  private router: Router = inject(Router);

  ngOnInit(): void {
    // redirect to timer selection if 
  }

}
