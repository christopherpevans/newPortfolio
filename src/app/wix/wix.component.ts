import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wix',
  templateUrl: './wix.component.html',
  styleUrls: ['./wix.component.scss'],
})
export class WixComponent implements OnInit {
  public items = [
    {
      name: 'landing page',
      price: 300,
      desc: 'Simplest package to get you started',
      cards: '100 business cards',
      website: 'Wix Website',
      special: '1 page with 5 sections',
      ssl: false,
    },
    {
      name: 'blog',
      price: 600,
      desc: 'The most popular package we offer',
      cards: '200 business cards',
      website: 'Wix Website',
      special: '5 pages',
      ssl: false,
    },
    {
      name: 'ecommerce',
      price: 1500,
      desc: 'Perfect for your small business.',
      cards: '500 business cards',
      website: 'Wix Website',
      special: 'Up to 50 products',
      ssl: false,
    },
    {
      name: 'enterprise',
      price: 2500,
      desc: 'Our most advanced & complete package',
      cards: '1000 business cards',
      website: 'Wix Website',
      special: 'Unlimited products',
      ssl: true,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
