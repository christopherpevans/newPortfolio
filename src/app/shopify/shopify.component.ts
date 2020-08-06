import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopify',
  templateUrl: './shopify.component.html',
  styleUrls: ['./shopify.component.scss'],
})
export class ShopifyComponent implements OnInit {
  public items = [
    {
      name: 'starter',
      price: 800,
      desc: 'Simplest package to get you started',
      hosting: 'Hosting Setup',
      pages: '5 products uploaded',
      website: 'Shopify Website',
      domain: 'Domain Registration',
    },
    {
      name: 'premium',
      price: 1100,
      desc: 'The most popular package we offer',
      hosting: 'Hosting Setup',
      pages: '10 products uploaded',
      website: 'Shopify Website',
      domain: 'Domain Registration',
    },
    {
      name: 'business',
      price: 1250,
      desc: 'Perfect for your small business.',
      hosting: 'Hosting Setup',
      pages: '15 products uploaded',
      website: 'Shopify Website',
      domain: 'Domain Registration',
    },
    {
      name: 'enterprise',
      price: 1500,
      desc: 'Our most advanced & complete package',
      hosting: 'Hosting Setup',
      pages: 'Unlimited products uploaded',
      website: 'Shopify Website',
      domain: 'Domain Registration',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
