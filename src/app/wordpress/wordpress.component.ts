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
      hosting: 'Hosting Setup',
      pages: '1 page with 5 sections',
      website: 'Wordpress Website',
      domain: 'Domain Registration',
    },
    {
      name: 'blog',
      price: 800,
      desc: 'The most popular package we offer',
      hosting: 'Hosting Setup',
      pages: '5 pages of content',
      website: 'Wordpress Website',
      domain: 'Domain Registration',
    },
    {
      name: 'ecommerce',
      price: 2000,
      desc: 'Perfect for your small business.',
      hosting: 'Hosting Setup',
      pages: '20 pages of content',
      website: 'Wordpress Website',
      domain: 'Domain Registration',
    },
    {
      name: 'enterprise',
      price: 3000,
      desc: 'Our most advanced & complete package',
      hosting: 'Hosting Setup',
      pages: 'Unlimited pages',
      website: 'Wordpress Website',
      domain: 'Domain Registration',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
