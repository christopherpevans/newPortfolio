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
      hosting: 'Hosting Setup',
      website: 'Wix Website',
      special: '1 page with 5 sections',
      domain: 'Domain Registration',
    },
    {
      name: 'blog',
      price: 600,
      desc: 'The most popular package we offer',
      hosting: 'Hosting Setup',
      website: 'Wix Website',
      special: '5 pages',
      domain: 'Domain Registration',
    },
    {
      name: 'ecommerce',
      price: 1500,
      desc: 'Perfect for your small business.',
      hosting: 'Hosting Setup',
      website: 'Wix Website',
      special: 'Up to 50 products',
      domain: 'Domain Registration',
    },
    {
      name: 'enterprise',
      price: 2500,
      desc: 'Our most advanced & complete package',
      hosting: 'Hosting Setup',
      website: 'Wix Website',
      special: 'Unlimited products',
      domain: 'Domain Registration',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
