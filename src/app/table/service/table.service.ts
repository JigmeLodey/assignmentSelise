import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) {
  }

  getEmployee(): any{
    return this.http.get('http://localhost:3000/employee');
  }
}
