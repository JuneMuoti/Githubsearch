import { Component, OnInit } from '@angular/core';
import {GithubService} from '../Services/github.service'

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
profile:any[];
  constructor(private githubService:GithubService) {
this.githubService.getGithubInfo().subscribe(profile => {
  console.log(profile)
  this.profile = profile;
});
   }

  ngOnInit() {


  }

}
