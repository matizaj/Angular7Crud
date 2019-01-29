import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  url = 'http://localhost:4200/business';
  constructor(private http: HttpClient) { }

  addBusiness(personName, businessName, businessNumber) {
    const obj = {
      personName: personName,
      businessName: businessName,
      businessNumber: businessNumber,
    };
    console.log(obj);
    this.http.post(this.url + '/add', obj).subscribe(data => console.log(data));
  }
}
