import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private http: HttpClient) { }

  animeFilms: any;
  public columns: Array<any> = [
    {
      name: 'title',
      label: 'Anime Film Title'
    },
    {
      name: 'description',
      label: 'Description'
    }
  ]; 

  // map calls the callback function column for each of the element in the columns array
  //  and return a new array (displayedColumns) that contains the results.
  displayedColumns: string[] = this.columns.map(column => column.name);
  dataSource = new MatTableDataSource();

  ngOnInit() {
    this.getAnimeFilms();
  }

  getAnimeFilms() {
    return this.http.get('https://ghibliapi.herokuapp.com/films')
        .subscribe(response => {
          this.animeFilms = response;
          // set the data source data that should be rendered by the table
          this.dataSource.data = this.animeFilms.sort((a,b) => a.title.localeCompare(b.title));;
         // console.log(this.animeFilms);
        }, errors => {
          console.log(errors);
        }
      );
  }

  // filter out objects from the data array
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}