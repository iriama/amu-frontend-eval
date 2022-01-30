import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-index-customers',
  templateUrl: './index-customers.component.html',
  styleUrls: ['./index-customers.component.scss']
})
export class IndexCustomersComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle(
      environment.app_name + " - Clients"
    )
  }

}
