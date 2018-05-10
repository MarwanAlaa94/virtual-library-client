import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  constructor(private route:ActivatedRoute,
              private _bookService:BookService) { }
  public book: any;
  public inFav = false;
  public inToBeRead = false;
  public inDone = false;
  public rated = false;
  public curReview = '';
  ngOnInit() {
      this.route.queryParams.subscribe(params =>{
          this.book = JSON.parse(params["book"]);
          console.log(this.book);
          this.book.averageRating = 0;
      });
      this._bookService.getRate(this.book.title, this.book.isbn).subscribe(
        data => {
          this.book.averageRating = data;
        }
      );
      this._bookService.getReviews(this.book.title, this.book.isbn).subscribe(
        data => {
          this.book.reviews = data;
        }
      );
  }

  addToFav(book) {
    this.inFav = true;
    this._bookService.addToFav(book.isbn).subscribe();
  }

  addToBeRead(book) {
    this.inToBeRead = true;
    this._bookService.addToBeRead(book.isbn).subscribe();
  }

  addToDone(book) {
    this.inDone = true;
    this._bookService.addToDone(book.isbn).subscribe();
  }
  rateBook(book, rate) {
    if(this.rated) {
      alert("You have already rated this book before");
    }
    else{
      this.rated = true;
      this._bookService.rate(book.title, book.isbn, rate).subscribe(
        data => {
          this.book.averageRating = data;
          if(this.book)
          console.log(data);
        }
      );
    }
  }

  addReview(book) {
    this.rated = true;
    this._bookService.addReview(book.title, book.isbn, this.curReview).subscribe(
      data => {
        this.book.reviews = data;
        console.log(this.book.reviews);
      }
    );
    this.curReview = '';
  }
}
