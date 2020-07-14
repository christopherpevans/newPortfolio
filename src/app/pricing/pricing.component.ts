import { Component, OnInit } from '@angular/core';
import { faWordpress, faWix } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
})
export class PricingComponent implements OnInit {
  faWordpress = faWordpress;
  faWix = faWix;
  constructor() {}

  ngOnInit(): void {}
}
