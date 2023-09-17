import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'afya-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ButtonModule,
    CarouselModule,
    TagModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'afya';

  responsiveOptions: any[] | undefined;

  products = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    },
    {
      id: '1001',
      code: 'f230fh0g3',
      name: 'Bamboo Watch 1',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    },
    {
      id: '1002',
      code: 'f230fh0g3',
      name: 'Bamboo Watch 2',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    },
  ];

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1200px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  getSeverity(status: string): string {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'info';
    }
  }
}
