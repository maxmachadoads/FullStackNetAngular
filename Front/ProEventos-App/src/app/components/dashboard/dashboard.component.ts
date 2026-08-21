import { Component, OnInit } from '@angular/core';
import { TituloComponent } from '../../shared/titulo/titulo.component';

@Component({
  imports: [TituloComponent],
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
