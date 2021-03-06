import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {

  constructor(private http:HttpClient) { }
  totalIssues:any;
  ngOnInit() {
    this.http.get('https://api.github.com/repos/facebook/react/issues').subscribe((res)=> {
      this.totalIssues = res;
    })
  }

}
