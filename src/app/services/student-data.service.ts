import { Injectable } from '@angular/core';
import { Student } from '../enum/student';
import { Observable, of } from 'rxjs';
import { Country } from '../enum/coutry';
import { State } from '../enum/state';
import { City } from '../enum/city';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  student: any = Student
  state: any = State
  city: any = City

  constructor() { }

  getProductData(): Observable<any> {
    return of(Student);
  }

  getCoutry(): Observable<any> {
    return of(Country);
  }

  getState(): Observable<any> {
    return of(State);
  }

  getCity(): Observable<any> {
    return of(City);

  }
}
