import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wordpress',
  templateUrl: './wordpress.component.html',
  styleUrls: ['./wordpress.component.scss'],
})
export class WordpressComponent implements OnInit {
  public items = [
    {
      name: 'landing page',
      price: 400,
      desc: 'Simplest package to get you started',
      cards: '100 business cards',
      pages: '1 page with 5 sections',
      website: 'Wordpress Website',
      ssl: false,
    },
    {
      name: 'blog',
      price: 800,
      desc: 'The most popular package we offer',
      cards: '200 business cards',
      pages: '5 pages of content',
      website: 'Wordpress Website',
      ssl: false,
    },
    {
      name: 'ecommerce',
      price: 2000,
      desc: 'Perfect for your small business.',
      cards: '500 business cards',
      pages: '20 pages of content',
      website: 'Wordpress Website',
      ssl: false,
    },
    {
      name: 'enterprise',
      price: 3000,
      desc: 'Our most advanced & complete package',
      cards: '1000 business cards',
      pages: 'Unlimited pages',
      website: 'Wordpress Website',
      ssl: true,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
