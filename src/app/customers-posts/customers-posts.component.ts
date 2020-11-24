import { Component, OnInit } from '@angular/core';
import { JsondatasourceService } from '../jsondatasource.service';
import { Post } from '../post.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customers-posts',
  templateUrl: './customers-posts.component.html',
  styleUrls: ['./customers-posts.component.css']
})
export class CustomersPostsComponent implements OnInit {

  _customerPostsList: Post[];
  _requestParams: Object;
  constructor(private dataSource: JsondatasourceService, route: ActivatedRoute) {
    route.params.subscribe(
      routeparameters => this._requestParams = routeparameters
    )
  }

  ngOnInit() {
    this.callAllCustomerPostsFromService();
  }


  private callAllCustomerPostsFromService() {
    this._customerPostsList = [];
    this.dataSource.getAllCustomersPost()
    .subscribe(postList => this._customerPostsList = postList);

  }
}
