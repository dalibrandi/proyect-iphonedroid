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
    return this.http.get<DetailsRepository>("https://api.github.com/repositories/"+id+"&access_token=95d2ac367d0f467e9ee7fe1bdb0464e5ceaadd29", { observe: 'response' })
  }

  getContributors(repo:string): Observable<HttpResponse<Owner[]>>{
    return this.http.get<Owner[]>("https://api.github.com/repos/"+repo+"/contributors&access_token=95d2ac367d0f467e9ee7fe1bdb0464e5ceaadd29", { observe: 'response' })
  }

  getRepositoriesSearch(url:string): Observable<HttpResponse<Repository[]>>{
    return this.http.get<Repository[]>(url+"&access_token=95d2ac367d0f467e9ee7fe1bdb0464e5ceaadd29", { observe: 'response' })
  }

}
