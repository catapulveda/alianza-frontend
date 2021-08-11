import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-producto',
  templateUrl: './create-producto.component.html',
  styleUrls: ['./create-producto.component.scss']
})
export class CreateProductoComponent {

  miFormulario: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { 

    this.miFormulario = this.fb.group({
      nombreProducto: new FormControl(null, {validators: [Validators.required, Validators.minLength(5), Validators.maxLength(7)]}),
      precioProducto: [null, [Validators.required, Validators.min(10), Validators.max(50)]]
    });
  }

  saveProduct() {
    if (this.miFormulario.invalid) {
      return;
    }

    alert('GUARDANDO PRODUCTO');
  }

}
