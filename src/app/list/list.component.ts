import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Course, Query } from '../types';
import { allCoursesQuery } from '../graphql';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  courses: Observable<Course[]>;
  constructor(private apollo: Apollo) { }
  ngOnInit() {
    this.courses = this.apollo.watchQuery<Query>({
      query: allCoursesQuery
    })
      .valueChanges
      .pipe(
        map(result => result.data.allCourses)
      );
  }
}
