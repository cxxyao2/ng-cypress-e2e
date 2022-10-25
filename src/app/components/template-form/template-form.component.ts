import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent implements OnInit {
  powers = ['Really Smart', 'Super Smark', 'Top1'];
  model = new Hero(18, 'Dr.IQ', this.powers[0], 'Chuck');
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newHero() {
    this.model = new Hero(42, 'Dr.I2', '');
  }

  constructor() {}

  ngOnInit(): void {}
}
