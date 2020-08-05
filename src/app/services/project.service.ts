import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor() {}

  getWorks() {
    return [
      {
        name: 'Hair-N-Paris',
        desc:
          // tslint:disable-next-line:max-line-length
          'Complete Shopify eCommerce store with the implementation of products. Setup of store payment processing through Stripe and PayPal. Installed Fraud app to protect the client from at-risk orders.',
        src: '../../assets/img/hnp1.jpg',
        link: 'https://www.hairnparis.com',
      },
      {
        name: 'Brooklyn Banking',
        desc:
          // tslint:disable-next-line:max-line-length
          "Internet Banking application that has various levels of interactions between the bank and its customers to provides the customers with the necessary banking interfaces at the customer's fingertips.",
        src: '../../assets/img/Group_1.jpg',
        link: 'https://www.envizn.io/ux',
      },
      {
        name: 'Legacy Looks',
        desc:
          // tslint:disable-next-line:max-line-length
          'Complete Shopify eCommerce store with the implementation of products. Setup of store payment processing through Stripe and PayPal. Installed Fraud app to protect the client from at-risk orders.',
        src: '../../assets/img/rsz_legacy7.jpg',
        link: 'https://www.envizn.io/portfolio',
      },
      {
        name: 'Bantr App',
        desc:
          'High-fidelity prototype messaging app built with Sketch and Adobe XD.',
        src: '../../assets/img/pjimage.jpg',
        link: 'https://www.envizn.io/ux',
      },
      {
        name: 'UX Portfolio',
        desc:
          // tslint:disable-next-line:max-line-length
          'This project is a portfolio for a UX Designer using HTML, CSS and BootStrap. This project also included domain registration and hosting.',
        src: '../../assets/img/uxbyparis.png',
        link: 'https://www.uxbyparis.com',
      },
      // {
      //   name: 'Project 6',
      //   desc:
      //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.',
      //   src:
      //     'https://images.unsplash.com/photo-1501856777435-29877ed80a3d?w=650'
      // }
    ];
  }

  getServices() {
    return [
      {
        icon: 'computer',
        title: 'Web Development',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.',
      },
      {
        icon: 'palette',
        title: 'Web Design',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.',
      },
      {
        icon: 'photo_camera',
        title: 'Photography',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.',
      },
      {
        icon: 'queue_music',
        title: 'Music Writing',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.',
      },
      {
        icon: 'volume_up',
        title: 'Advertising',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.',
      },
      {
        icon: 'contact_support',
        title: '24/7 Support',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.',
      },
    ];
  }

  getClients() {
    return [
      'assets/img/clients/dream.png',
      'assets/img/clients/congrats.png',
      'assets/img/clients/best.png',
      'assets/img/clients/original.png',
      'assets/img/clients/king.png',
      'assets/img/clients/love.png',
      'assets/img/clients/the.png',
      'assets/img/clients/easter.png',
      'assets/img/clients/with.png',
      'assets/img/clients/special.png',
      'assets/img/clients/bravo.png',
    ];
  }

  getTestimonials() {
    return [
      {
        text:
          // tslint:disable-next-line:max-line-length
          'I hired Envizn to create a demo mobile banking app for my company and I was blown away by the quality of work, the professionalism, and the speed of project delivery. ',
        author: 'Nick',
        company: 'General Electric',
        image: 'assets/img/profile/adam.jpg',
      },
      {
        text:
          // tslint:disable-next-line:max-line-length
          'Amazing work Envizn! I absolutely love my Wix website. I will be returning to have you guys create and design content for my social media accounts. I could not have asked for better.',
        author: 'Hidi',
        company: 'Dell EMC',
        image: 'assets/img/profile/ashley.jpg',
      },
      {
        text:
          // tslint:disable-next-line:max-line-length
          "Envizn has the best customer service I’ve ever experienced. There is always a positive interaction when speaking to members of their team. I can't help but smile when I contact them because they truly make me feel like family. The employees are super friendly, and you immediately form a connection with them.",
        author: 'Vernon',
        company: 'Southwest Airlines',
        image: 'assets/img/profile/bruno.jpg',
      },
      {
        text:
          // tslint:disable-next-line:max-line-length
          'Contacting Envizn to setup my Shopify store was the best choice I ever made. Envizn created my logo, setup my products, as well as created amazing content to help with SEO for my site. I love this company.',
        author: 'Julia',
        company: 'RX2 Solutions',
        image: 'assets/img/profile/julia.jpg',
      },
    ];
  }
}
