import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-site',
  templateUrl: './custom-site.component.html',
  styleUrls: ['./custom-site.component.scss'],
})
export class CustomSiteComponent implements OnInit {
  public items = [
    {
      name: 'landing page',
      price: 1000,
      desc: 'Simplest package to get you started',
      cards: '100 business cards',
      pages: '5 pages',
      website: 'Custom Website',
      ssl: false,
    },
    {
      name: 'blog',
      price: 3000,
      desc: 'The most popular package we offer',
      cards: '200 business cards',
      pages: '10 pages',
      website: 'Custom Website',
      ssl: false,
    },
    {
      name: 'ecommerce',
      price: 8000,
      desc: 'Perfect for your small business.',
      cards: '500 business cards',
      pages: '20 pages',
      website: 'Custom Website',
      ssl: false,
    },
    {
      name: 'enterprise',
      price: 12000,
      desc: 'Our most advanced & complete package',
      cards: '1000 business cards',
      pages: 'Unlimited',
      website: 'Custom Website',
      ssl: true,
    },
  ];
  constructor() {}

  ngOnInit() {}
}
