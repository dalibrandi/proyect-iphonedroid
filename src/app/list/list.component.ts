import { Component, OnInit, HostListener } from '@angular/core';
import * as $ from 'jquery';

import { Repository } from '../repository';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  breakpoint: number;
  valueSearch: string;
  repositories: Repository[];
  nextUrl: string;

  constructor(private repositoryService: RepositoryService) { }

  ngOnInit() {
  }

  openSearch() {
    $(".ia_form").show('fast');
    $("#input_search").focus();
  }
  closeSearch(){
    $(".ia_form").hide('fast');
    $("#ia_list").show('fast');
    $("#ia_search").hide('fast');
    this.valueSearch = "";
    this.repositories = null;
  }

  searchRepository(){
    this.getRepositoriesSearch("https://api.github.com/search/repositories?q="+this.valueSearch+"&sort=stars&order=desc");
    this.repositories = null;
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.getRepositoriesSearch(this.nextUrl);
    }
  }

  getRepositoriesSearch(url:string): void {
    this.repositoryService.getRepositoriesSearch(url)
    .subscribe(resp => {
          $("#ia_list").hide('fast');
          $("#ia_search").show('fast');
          var link = resp.headers.get("link");
          this.nextUrl = link.split(';')[0].substring(1, link.split(';')[0].length-1);
          if(this.repositories == null){
            this.repositories = resp.body.items;
          }else{
            this.repositories = this.repositories.concat(resp.body.items);
          }
        });
  }
}
