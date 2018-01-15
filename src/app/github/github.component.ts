import { Component, OnInit } from '@angular/core';
import {GithubService} from '../Services/github.service'

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
profile:any[];
repos:any[];
username:string;
  constructor(private githubService:GithubService) {

   }
   findProfile(){
     this.githubService.updateGithub(this.username);
     this.githubService.getGithubInfo().subscribe(profile => {
       console.log(profile)
       this.profile = profile;
     });
     this.githubService.getGithubRepos().subscribe(repos => {
       console.log(repos)
       this.repos = repos;
     })
   }
   

  ngOnInit() {}

};
