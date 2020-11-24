import { Component, OnInit } from '@angular/core';
import { JsondatasourceService } from '../jsondatasource.service';
import { Customer } from '../customer.model';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  _customerList: Object;
  _domainCustomerList: Customer[];
  constructor(private dataSource: JsondatasourceService) { }

  ngOnInit() {
    this._customerList = [];
    this.dataSource.getAllCustomers().subscribe(
      customers => this.doAction(customers)
    );
  }


  private doAction(customers) {
    this._domainCustomerList = [];
    JSON.parse(JSON.stringify(customers)).forEach(customer => {
      let singleCustomer: Customer = new Customer();
      singleCustomer = customer.id;
      singleCustomer.userName = customer.username;
      singleCustomer.website = customer.website;
      this._domainCustomerList.push(singleCustomer);
    });
    console.log(this._domainCustomerList);
  }

  private loadMockData() {
    this._customerList[0] = {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    };
  }
}
