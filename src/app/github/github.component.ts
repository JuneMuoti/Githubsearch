import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('https://api.github.com/users/JuneMuoti?access_token=c3a680e6c64344d10aaa827ff43b116aec5ded6b'
).subscribe(data => {
  console.log(data);
})



  }

}
