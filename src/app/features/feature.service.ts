import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  constructor() {}

  getFeatures() {
    return [
      {
        icon: 'fas fa-desktop fa-3x',
        title: 'Desktop App',
        desc:
          // tslint:disable-next-line:max-line-length
          'Complete E-commerce Shopify, Wix, or WordPress store / website. Envizn will also build a custom responsive website using HTML, CSS, Bootstrap, and JavaScript.',
      },
      {
        icon: 'fas fa-mobile-alt fa-3x',
        title: 'Mobile App',
        desc:
          // tslint:disable-next-line:max-line-length
          'Get optimum performance on any device by allowing Envizn’s certified professionals to build an eye-popping mobile application, with fast and convenient delivery.',
      },
      {
        icon: 'fas fa-pencil-ruler fa-3x',
        title: 'UX Design',
        desc:
          'We will design stunning wireframes and prototypes for websites and any mobile applications that will enhance the early concept of your company product.',
      },
      {
        icon: 'fas fa-pen-nib fa-3x',
        title: 'Logo Design',
        desc:
          'Get a unique designed logo created by professional designers that will make a statement for your brand.',
      },
      {
        icon: 'fab fa-google fa-3x',
        title: 'Google Services',
        desc:
          // tslint:disable-next-line:max-line-length
          'Take the stress and hassle out of setting up and linking your Google accounts. We will set up your AdWords, Analytics, and Remarketing accounts.',
      },
      {
        icon: 'fab fa-instagram fa-3x',
        title: 'Social Media Post',
        desc:
          'We will create an engaging post for any social media platform that will have your followers interacting and sharing.',
      },
      // {
      //   icon: 'report',
      //   title: 'Weekly Reports',
      //   desc:
      //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
      // },
      // {
      //   icon: 'add_shopping_cart',
      //   title: 'E-commerce',
      //   desc:
      //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
      // }
    ];
  }
}
