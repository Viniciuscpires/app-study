import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Study } from 'src/app/services/study/study';


const API_URL = "http://localhost:3000"

@Injectable({
  providedIn: 'root'
})
export class StudyService {

  constructor(private http: HttpClient) { }

  getStudies() {
    return this.http
      .get<Study[]>(`${API_URL}/studies`);
  }
}
