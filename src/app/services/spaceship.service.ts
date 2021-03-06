import {Injectable} from '@angular/core';
import {Spaceship} from '../models/spaceship';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpaceshipService {

  spaceships = [
    new Spaceship(1, 'X-Wing', 12.5, 11.4, 2.3, 1, true, 'xwing.jpg'),
    new Spaceship(2, 'Millenium Falcon', 34.75, 20, 7.8, 10, true, 'falcon.jpg'),
    new Spaceship(3, 'Star Destroyer', 1600, 600, 220, 37000, true, 'stardestroyer.jpg')
  ];

  apiUrl = 'http://localhost:3000/spaceships';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  getAllSpaceships(): Observable<Spaceship[]> {
    return this.http.get<Spaceship[]>(this.apiUrl, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getSpaceshipById(id: number): Observable<Spaceship> {
    return this.http.get<Spaceship>(this.apiUrl + '/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  addSpaceship(spaceship: Spaceship): Observable<Spaceship> {
    return this.http.post<Spaceship>(this.apiUrl, spaceship, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  removeById(id: number): Observable<Spaceship> {
    return this.http.delete<Spaceship>(this.apiUrl + '/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  edit(spaceshipToUpdate: Spaceship): Observable<Spaceship> {
    return this.http.put<Spaceship>(this.apiUrl + '/' + spaceshipToUpdate.id, spaceshipToUpdate, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
// Get client-side error
      errorMessage = error.error.message;
    } else {
// Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
