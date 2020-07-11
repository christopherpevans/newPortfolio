import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./our-services.component.scss'],
})
export class OurServicesComponent implements OnInit {
  public services;
  public servicesCarouselConfig: NguCarouselConfig;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.services = this.projectService.getServices();
    this.servicesCarouselConfig = {
      grid: { xs: 1, sm: 2, md: 3, lg: 4, all: 0 },
      slide: 1,
      speed: 500,
      interval: {
        timing: 4000,
      },
      point: {
        visible: true,
      },
      loop: true,
      touch: true,
      custom: 'banner',
      // RTL: this.settings.rtl
    };
  }
}
