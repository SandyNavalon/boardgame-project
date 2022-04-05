import { Component, OnInit } from '@angular/core';
import { faAngleDoubleRight, faHeart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /* ICONS */
  faheart = faHeart;
  faArrow = faAngleDoubleRight;


  constructor() { }

  ngOnInit(): void {}



}


