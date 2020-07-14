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
      cards: '100 cards',
      pages: '5 products uploaded',
      website: 'Shopify Website',
      ssl: false,
    },
    {
      name: 'premium',
      price: 1100,
      desc: 'The most popular package we offer',
      cards: '200 cards',
      pages: '10 products uploaded',
      website: 'Shopify Website',
      ssl: false,
    },
    {
      name: 'business',
      price: 1250,
      desc: 'Perfect for your small business.',
      cards: '500 cards',
      pages: '15 products uploaded',
      website: 'Shopify Website',
      ssl: false,
    },
    {
      name: 'enterprise',
      price: 1500,
      desc: 'Our most advanced & complete package',
      cards: '1000 cards',
      pages: 'Unlimited products uploaded',
      website: 'Shopify Website',
      ssl: true,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
