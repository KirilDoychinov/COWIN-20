import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: '../../assets/covid.json', name: 'Произход и разпространение на Covid-19' },
      { id: '../../assets/pandemic.json', name: 'Какво знаем за пандемиите' },
    ];
  }

}

