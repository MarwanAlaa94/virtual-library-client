import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {BookService} from '../book.service';
import {Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  public id_token;
  public user: any;
  public favorites: any;
  public done: any;
  public toRead: any;
  constructor(private _bookService:BookService,
              private route:ActivatedRoute,
              private router:Router) { }


  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id_token');
    this.id_token = id;
    if (typeof(window.id_token) != "undefined") {
      this._bookService.initUser(this.id_token).subscribe(
        response => {
          this.user = response;
      });
    }
    else {
      this._bookService.getUser().subscribe(
        response => {
          this.user = response;
        });
    }
  }

  showDetails(book){
    let navigationExtras: NavigationExtras = {
      queryParams : {
        "book": JSON.stringify(book)
      }
    }
    this.router.navigate(['bookDetails'], navigationExtras);
  }
}
