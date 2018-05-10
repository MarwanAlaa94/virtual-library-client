import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public key = "";
  public value = "";
  constructor(private router:Router) { }

  ngOnInit() {
  }
  search(){
      if(this.key.length == 0) {
        alert('Choose from dropdown');
      }
      else if(this.value.length == 0) {
        alert('you must specify a value');
      }
      else{
        this.router.navigate(['bookGrid', this.key, this.value]);
      }

  }
}
