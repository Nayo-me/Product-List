import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../model/product.model';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {
  @Input() product! : Product;
  @Input() productId! : number;
  @Output() editProductEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() cancelEditEvent  : EventEmitter<void>  = new EventEmitter<void>();
  isDataUploading = false;

  constructor(private productService: ProductService){ }

  ngOnInit(){}

  onSubmit(){
    this.isDataUploading = true;
    this.productService.updateProduct(this.product).subscribe((res)=>{
      this.isDataUploading = false;
      this.editProductEvent.emit();
      this.cancelEditEvent.emit();
    });
  }

  cancel(){
    this.cancelEditEvent.emit();
  }
}
