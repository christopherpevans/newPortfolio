import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  public testimonials;
  public testimonialsCarouselConfig: NguCarouselConfig;
  public clients;
  public clientsCarouselConfig: NguCarouselConfig;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.clients = this.projectService.getClients();
    this.testimonials = this.projectService.getTestimonials();
    this.clientsCarouselConfig = {
      grid: { xs: 3, sm: 4, md: 5, lg: 6, all: 0 },
      slide: 1,
      speed: 500,
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
    this.testimonialsCarouselConfig = {
      grid: { xs: 1, sm: 2, md: 3, lg: 3, all: 0 },
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
