import { Component, OnInit } from '@angular/core';
import { AuthorService} from '../authorService';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authorarray: any;
  constructor(private authorService: AuthorService) { }

  ngOnInit() {   
    this.authorService.loadAll().subscribe(
      (response:Response)=>{
       (this.authorarray = response);
          });

    //      this.authorService.getAlldata().subscribe(
      //      (response:Response)=>{
        //     (this.authorarray = response);
          //      });
  }
}
