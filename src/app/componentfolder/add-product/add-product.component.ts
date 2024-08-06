import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Product } from '../../model/product.model';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class AddProductComponent implements OnInit {
  productForm = this.fb.group({
    productName: ['', Validators.required],
    description: ['', Validators.required],
    category: ['', Validators.required],
    brand : ['', Validators.required],
    expiredDate: ['', Validators.required],
    manufacturedDate: ['', Validators.required],
    batchNumber: ['', Validators.required],
    unitPrice: ['', [Validators.required, Validators.min(1)]],
    quantity: ['', [Validators.required, Validators.min(50)]],
  });

  isDataUploading = false;
  @Output() productAddEvent : EventEmitter<void>  = new EventEmitter<void>(); // child to parent communication should be trigerred during form submission/on click of product creation
  @Output() closeAddEvent : EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private productService :ProductService
  ) {}

  ngOnInit(): void {}

   get f() {
    return this.productForm.controls;
  }

  onSubmit() {
    const values = this.productForm.value as Product;
    values.createdDate = new Date().toDateString();
    this.isDataUploading = true;
    this.productService.addProduct(values as Product).subscribe((res) => {
      this.productAddEvent.emit();
      this.isDataUploading = false;
      this.productForm.reset();
    });
  }

  cancel(){
    this.closeAddEvent.emit();
  }
}
