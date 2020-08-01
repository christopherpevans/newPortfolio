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
      hosting: 'Hosting Setup',
      pages: '5 pages',
      website: 'Custom Website',
      domain: 'Domain Registration',
    },
    {
      name: 'blog',
      price: 3000,
      desc: 'The most popular package we offer',
      hosting: 'Hosting Setup',
      pages: '10 pages',
      website: 'Custom Website',
      domain: 'Domain Registration',
    },
    {
      name: 'ecommerce',
      price: 8000,
      desc: 'Perfect for your small business.',
      hosting: 'Hosting Setup',
      pages: '20 pages',
      website: 'Custom Website',
      domain: 'Domain Registration',
    },
    {
      name: 'enterprise',
      price: 12000,
      desc: 'Our most advanced & complete package',
      hosting: 'Hosting Setup',
      pages: 'Unlimited',
      website: 'Custom Website',
      domain: 'Domain Registration',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
