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

  addSpaceship(spaceship: Spaceship) {
    this.spaceships.push(spaceship);
  }

  removeById(id: number): Spaceship[] {
    this.spaceships = this.spaceships.filter(spaceship => spaceship.id !== id);
    return this.spaceships;
  }

  edit(spaceshipToUpdate: Spaceship): void {
    this.spaceships.filter(spaceship => spaceship === spaceshipToUpdate)[0] = spaceshipToUpdate;
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
