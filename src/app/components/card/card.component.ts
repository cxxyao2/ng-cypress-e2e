import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-card',
  template: `<div class="card">
    <div class="card-header">
      <ng-content select="[cardHeader]"></ng-content>
    </div>
    <div class="card-body">
      <ng-content></ng-content>
    </div>
    <p>card {{ id }} is displayed.</p>
    <div>
      <button (click)="goBack()">Back to List</button>
    </div>
  </div>`,
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  id = '';
  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    console.log('id is,', this.id);
  }

  goBack(): void {
    this.location.back();
  }
}
