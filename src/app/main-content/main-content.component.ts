import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  constructor() {
    AOS.init({ duration: 1000 });
    this.productList();
  }

  ngOnInit() {
    AOS.init({ duration: 1000 });
  }
list: any[];
  productList() {
    this.list = [
      {title: 'edu seedor', des: "Eduaction/Learning/training"},
      {title: 'crm seedor', des: "Customer Relationship Management"},
      {title: 'factory seedor', des: "Manufacturing/Warehouse/freight"},
      {title: 'my seedor', des: "Membership/Institution/Public Sector"},
      {title: 'cafe seedor', des: "Hospitality/Restaurant/Hotels"},
      {title: 'build seedor', des: "MEP/Construction/Facade"},
      {title: 'book seedor', des: "Professional/Accounting/Other"},
      {title: 'bill seedor', des: "Retail/Billing/Trade"},
    ]
  }
}
