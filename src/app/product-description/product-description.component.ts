import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service'


@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  albumInfo;

  constructor(private_productService: ProductService) { }

  ngOnInit() {
    this._ProductService.getAlbum(1).suscribe(response =>
      this.albumInfo = response);
  }

}
