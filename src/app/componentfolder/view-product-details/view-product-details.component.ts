import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product-details',
  standalone: true,
  imports: [],
  templateUrl: './view-product-details.component.html',
  styleUrl: './view-product-details.component.css'
})
export class ViewProductDetailsComponent {
  selectedProduct! : Product;

  constructor(private productService: ProductService,
              private route: ActivatedRoute
  ){}

  ngOnInit():void{
    let selectedProductId = this.route.snapshot.paramMap.get('id')
    
    this.productService.getProductById(selectedProductId).subscribe((res)=>{
      this.selectedProduct = res.data;
    })
  }
}
