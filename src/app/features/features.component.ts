import { Component, OnInit } from '@angular/core';
import { FeatureService } from './feature.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {
  public features: any;
  constructor(private featureService: FeatureService) {}

  ngOnInit() {
    this.features = this.featureService.getFeatures();
  }
}
