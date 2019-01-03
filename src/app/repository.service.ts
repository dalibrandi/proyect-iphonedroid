import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Owner } from './owner';
import { Repository } from './repository';
import { DetailsRepository } from './detailsRepository';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClient) { }

  getRepositories(url:string): Observable<HttpResponse<Repository[]>>{
    return this.http.get<Repository[]>(url, { observe: 'response' })
  }

  getRepository(id:number): Observable<HttpResponse<DetailsRepository>>{
    return this.http.get<DetailsRepository>("https://api.github.com/repositories/"+id, { observe: 'response' })
  }

  getRepository(repo:string): Observable<HttpResponse<Owner[]>>{
    return this.http.get<Owner[]>("https://api.github.com/repos/"+repo+"/contributors", { observe: 'response' })
  }

  getContributors(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.repositoryService.getContributors(id)
      .subscribe(resp => {
              this.contributors = resp.body;
          }
      );
  }
  https://api.github.com/repos/mojombo/god/contributors
}
