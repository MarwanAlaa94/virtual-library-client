import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import { ActivatedRoute } from '@angular/router';
import {Router, NavigationExtras} from '@angular/router';
@Component({
  selector: 'app-library-grid',
  templateUrl: './library-grid.component.html',
  styleUrls: ['./library-grid.component.css']
})
export class LibraryGridComponent implements OnInit {
  public books;
  public key;
  public value;
  constructor(private _bookService:BookService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    let k = this.route.snapshot.paramMap.get('key');
    let v = this.route.snapshot.paramMap.get('value');
    this.key = k;
    this.value = v;
    this._bookService.search(this.key, this.value).subscribe(
      data => {
        this.books = data;
      });
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
