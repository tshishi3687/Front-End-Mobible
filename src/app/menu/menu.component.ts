import { Component, OnInit } from '@angular/core';
import {DonneeService} from '../services/donnee.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private donnee: DonneeService) { }

  donneee = this.donnee;

  ngOnInit(): void {
  }

}
