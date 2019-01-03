import { Component, OnInit, HostListener } from '@angular/core';

import { Repository } from '../repository';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  template: `
     <ngx-masonry>
       <ngxMasonryItem class="masonry-item ia_repository" *ngFor="let repository of repositories">
         <a routerLink="/details/{{repository.id}}"><span class="ia_ico_details"></span></a>
         <img class="ia_avatar" src="{{repository.owner.avatar_url}}" alt="{{repository.owner.login}}"/>
         <div class="ia_card">
           <div class="ia_name">{{repository.name}}</div>
           <div class="ia_owner">{{repository.owner.login}}</div>
           <div class="ia_description">{{repository.description}}</div>
         </div>
      </ngxMasonryItem>
     </ngx-masonry>
     `
})

export class CardsComponent implements OnInit {
  repositories: Repository[];
  nextUrl: string = "https://api.github.com/repositories";

  constructor(private repositoryService: RepositoryService) { }

  ngOnInit() {
    this.getRepositories();
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.getRepositories();
    }
  }

  getRepositories(): void {
    this.repositoryService.getRepositories(this.nextUrl)
    .subscribe(resp => {
          var link = resp.headers.get("link");
          this.nextUrl = link.split(';')[0].substring(1, link.split(';')[0].length-1);
          if(this.repositories == null){
            this.repositories = resp.body;
          }else{
            this.repositories = this.repositories.concat(resp.body);
          }
        });

  }
}
