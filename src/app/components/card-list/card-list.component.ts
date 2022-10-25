import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  cards = [
    {
      _id: 'b',
      name: 'Mrs.B',
    },
    {
      _id: 'c',
      name: 'Mrs.C',
    },
  ];
  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.service.getProducts().subscribe((data) => {
      console.log('data', data);
      this.cards = data;
    });
  }
}
