import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from '_models/member';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // private getHttpOptions() {
  //   const user = JSON.parse(localStorage.getItem('user') || 'null');
  //   return {
  //     headers: new HttpHeaders({
  //       Authorization: user?.token ? 'Bearer ' + user.token : ''
  //     })
  //   };
  // }
  
  getMembers() {
    return this.http.get<Member[]>(this.baseUrl + 'users');
  }

  getMember(username: string) {
    return this.http.get<Member>(this.baseUrl + 'users/' + username);
  }
}