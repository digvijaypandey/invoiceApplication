import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, RequiredValidator, Validators, FormBuilder, FormArray } from '@angular/forms';
import { InvoiceGenerateService } from 'src/services/invoice-generate.service';

@Component({
  selector: 'app-invoice-generate',
  templateUrl: './invoice-generate.component.html',
  styleUrls: ['./invoice-generate.component.css']
})
export class InvoiceGenerateComponent implements OnInit {
  invoiceForm: FormGroup;
  ProductData = [{name:'product 1', id:'product_1', price:'10'},
                {name:'product 2', id:'product_2', price:'50'},
                {name:'product 3', id:'product_3', price:'40'},
]

submittedData = [];

constructor(
  private fb: FormBuilder,
  private invoiceService: InvoiceGenerateService
) {}

ngOnInit() {debugger

  this.createForm()
  
  // this.invoiceForm = 
  // this.invoiceForm = new FormGroup({
  //   thisshipping = fb.group({
  //     productName: new FormControl('', Validators.required),
  //     productCode: new FormControl(''),
  //     quantity: new FormControl('', Validators.required),
  //     price: new FormControl(''),
  //     totalPrice: new FormControl(''),
  //     todayDate: new FormControl(new Date)
  //   })
      
  //   })
  }

  createForm(){
    this.invoiceForm = this.fb.group({
      invoiceNumber:'',
      invoice_nr:'',
      subtotal:'',
      paid:'',
      shipping:this.fb.group({
          name: '',
          address: '',
          city:'',
          state:'',
          country:'',
          postalCode:'',
      }),
      items:this.fb.array([]),
      invoiceDetail:this.fb.group({
        productName: new FormControl('', Validators.required),
        productCode: new FormControl(''),
        quantity: new FormControl('', Validators.required),
        price: new FormControl(''),
        totalPrice: new FormControl(''),
      })

    })

  }

  // createsubmittedDataForm(){
  //   return this.fb.group({
  //     productName: '',
  //     productCode: '',
  //     quantity: '',
  //     price: '',
  //     totalPrice: '',
  //   })
  // }
  selectedProduct(value){debugger
    this.invoiceForm.controls.invoiceDetail.get('quantity').reset()
    this.invoiceForm.controls.invoiceDetail.get('totalPrice').reset()
    const product = this.ProductData.find((productData) => productData.id === value);
    this.invoiceForm.controls.invoiceDetail.get('price').patchValue(product.price);
    this.invoiceForm.controls.invoiceDetail.get('productCode').patchValue(product.id);
    // this.invoiceForm.controls.invoiceDetail.get('productCode').value = product.id
  }
  productQuantity(){
    this.invoiceForm.controls.invoiceDetail.get('totalPrice').patchValue((this.invoiceForm.controls.invoiceDetail.get('quantity').value)*(this.invoiceForm.controls.invoiceDetail.get('price').value))
  }
  editInvoice(data, index){
    this.invoiceForm.controls.invoiceDetail.patchValue(data)
  }
  deleteInvoice(data, index){
    this.submittedData.splice(index, 1)
  }
  submitBtn(){

    if (this.invoiceForm.valid){
      if(this.submittedData.length != 0){
      this.submittedData.forEach((data, dataIndex) => {

        if(data.productCode == this.invoiceForm.controls.invoiceDetail.get('productCode').value && 
        data.quantity != this.invoiceForm.controls.invoiceDetail.get('quantity').value){
            this.submittedData.push(this.invoiceForm.value.invoiceDetail);
            alert('record updated Successfully')
        } else if(data.productCode == this.invoiceForm.controls.invoiceDetail.get('productCode').value){
          alert('record already exist')
        }else{
          this.submittedData.push(this.invoiceForm.value.invoiceDetail);
          alert('data Added successfully');
        }
      });
    }else{
      alert('data Added successfully');
      this.submittedData.push(this.invoiceForm.value.invoiceDetail);
    }
    this.invoiceForm.controls.invoiceDetail.reset();
    }else{
      alert('plrase update mandatory field')
    }
  }

  saveInvoice(){
    debugger;
    this.submittedData.forEach(element => {
      <FormArray>(this.invoiceForm.get('items')).value.push(element);
      console.log(this.invoiceForm.value)
    });
    this.invoiceService.getInvoice(this.invoiceForm.value).subscribe((res) => {
      debugger;
    });
  }

}
