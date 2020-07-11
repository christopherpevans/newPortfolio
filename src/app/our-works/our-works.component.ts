import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-our-works',
  templateUrl: './our-works.component.html',
  styleUrls: ['./our-works.component.scss'],
})
export class OurWorksComponent implements OnInit {
  public works;
  public worksCarouselConfig: NguCarouselConfig;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.works = this.projectService.getWorks();
    this.worksCarouselConfig = {
      grid: { xs: 1, sm: 2, md: 3, lg: 4, all: 0 },
      slide: 1,
      speed: 400,
      interval: {
        timing: 4000,
      },
      point: {
        visible: false,
      },
      loop: true,
      touch: true,
      custom: 'banner',
      // RTL: this.settings.rtl
    };
  }
}
