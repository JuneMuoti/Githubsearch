import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username:string;
  private clientid ='8bd8e4a1593f6c592a96';
  private clientsecret ='cf570f5e74bba802d6e191d0a275858ea2eef50c';

  constructor(private http:Http) {
  console.log("service is now ready!");
this.username ='JuneMuoti'
 }
 getGithubInfo ()
 {
   return this.http.get ("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
.map(res => res.json());
 }

}
