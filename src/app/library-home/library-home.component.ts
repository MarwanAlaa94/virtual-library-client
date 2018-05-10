import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BookService} from '../book.service';
import {Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-library-home',
  templateUrl: './library-home.component.html',
  styleUrls: ['./library-home.component.css']
})
export class LibraryHomeComponent implements OnInit {
  public books = {};
  public categories = ['Romance', 'Sciencefiction', 'Mystery', 'Cartoon',
     'Geography', 'Animals'];
  constructor (private _bookService:BookService,
               private router:Router) { }

  ngOnInit() {
    this._bookService.getBooksForHome().subscribe(
      data => {
        this.books = data;
        console.log(this.books);
        console.log(data);
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

  search(category){
     this.router.navigate(['bookGrid', "Title", category);
  }

}
