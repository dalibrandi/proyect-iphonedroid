import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isDetails:boolean;

  constructor(private location: Location, private router: Router) {
    router.events.subscribe((navEnd: NavigationEnd) => {
        if(navEnd.url != null){
          this.isDetails = navEnd.url.includes("details");
        }
    });
  }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }
}
