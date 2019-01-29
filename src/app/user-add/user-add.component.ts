import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BusinessService } from '../services/business.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private bs: BusinessService) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.angForm = this.fb.group({
      personName: ['', Validators.required],
      businessName: ['', Validators.required],
      businessNumber: ['', Validators.required]
    });
  }

  addBusiness(personName, businessName, businessNumber) {
    this.bs.addBusiness(personName, businessName, businessNumber);
  }
}
