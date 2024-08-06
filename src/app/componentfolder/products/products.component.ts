import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductService } from '../../services/product.service';
import { AddProductComponent } from '../add-product/add-product.component';
import { CommonModule } from '@angular/common';
import { ContentLimiterPipe } from '../../pipe/content-limiter.pipe';
import { EditProductComponent } from "../edit-product/edit-product.component";
import { ViewProductDetailsComponent } from "../view-product-details/view-product-details.component";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true,
  imports: [CommonModule, AddProductComponent, ContentLimiterPipe, EditProductComponent, ViewProductDetailsComponent]
})
export class ProductsComponent implements OnInit {
  public rowIndex! : number;
  showAddProduct! : boolean;
  isLoading : boolean = false;
  showEditProduct! : boolean;
  selectedProduct!: Product;
  message! : string;
  public products: Product[] = [];

  @ViewChild(ViewProductDetailsComponent) viewComponent! : ViewProductDetailsComponent


  constructor(private productService: ProductService) {}
  

  ngOnInit(): void {
    this.getProducts();
  }

  ngAfterViewInit() {
    // this.message = this.viewComponent.childMessage;
  }

  public selectProduct(selectedRow: number, product: Product) {
    this.rowIndex = selectedRow;
    this.selectedProduct = product;
  }

  showAddProducts() {
    if (this.showEditProduct) {
      this.showEditProduct = false;
    }
    this.showAddProduct = true;
  }

  hideAddProducts() {
    this.showAddProduct = false;
  }

  refresh() {
    this.getProducts();
  }

  getProducts() {
    this.isLoading = true;
    this.productService.getProducts().subscribe((res) => {
      this.products = res.data;
      // this.products.forEach(product => {
      //   const quantity = product.quantity
      //   if (quantity > 150){
      //   console.log('Quantity:', quantity);
      // }
      // });
      this.isLoading = false;
    });
  }

  updateProductList() {
    this.getProducts() // now the list will update automatically without refresh button
  }

  openEditProductView(){
    if (this.showAddProduct){
      this.showAddProduct = false;
    }
    this.showEditProduct = true;
  }
 
  closeEditView(){
    this.showEditProduct = false;
  }

  closeAddView(){
    this.showAddProduct = false;
  }
}
