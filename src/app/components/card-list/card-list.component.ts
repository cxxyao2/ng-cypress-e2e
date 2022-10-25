import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  cards = [
    {
      id: 'a',
      name: 'Mrs.A',
    },
    {
      id: 'b',
      name: 'Mrs.B',
    },
    {
      id: 'c',
      name: 'Mrs.C',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
