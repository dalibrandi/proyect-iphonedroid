import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Owner } from '../owner';
import { DetailsRepository } from '../detailsRepository';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  detailsRepository: DetailsRepository;
  contributors: Owner[];
  constructor(
    private route: ActivatedRoute,
	  private repositoryService: RepositoryService
  ) { }

  ngOnInit() {
    this.getRepository();
  }

  getRepository(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.repositoryService.getRepository(id)
      .subscribe(resp => {
              this.detailsRepository = resp.body;
          }
      );
  }

  getContributors(): void {
    this.repositoryService.getContributors(this.detailsRepository.full_name)
      .subscribe(resp => {
              this.contributors = resp.body;
          }
      );
  }
}
