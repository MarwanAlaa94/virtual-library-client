import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBooksForHome(){
      return this.http.get('http://localhost:4200/library/home');
  }

  search(k, v) {
     return this.http.post('http://localhost:4200/library/search',{
       key: k,
       value: v
     });
  }

  initUser(id_token) {
    return this.http.post('http://localhost:4200/library/user',{
      token: id_token
    });
  }

   getUser() {
      return this.http.get('http://localhost:4200/library/userInfo');
   }

   getRate(title, isbn) {
     return this.http.post('http://localhost:4200/library/getRate',{
       ISBN: isbn,
       title: title
     });
   }

   getReviews(title, isbn) {
     return this.http.post('http://localhost:4200/library/getReviews',{
       ISBN: isbn,
       title: title
     });
   }

   addToFav(isbn) {
     return this.http.post('http://localhost:4200/library/addFav',{
       ISBN: isbn
     });
   }

   addToBeRead(isbn) {
     return this.http.post('http://localhost:4200/library/addToRead',{
       ISBN: isbn
     });
   }

   addToDone(isbn) {
     return this.http.post('http://localhost:4200/library/done',{
       ISBN: isbn
     });
   }

   rate(title, isbn, rate) {
     return this.http.post('http://localhost:4200/library/rate',{
       rate: rate,
       ISBN: isbn,
       title: title
     });
   }

   addReview(title, isbn, review) {
     return this.http.post('http://localhost:4200/library/addReview',{
       title: title,
       ISBN: isbn,
       review: review
     });
   }

}
