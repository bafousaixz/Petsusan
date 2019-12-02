import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http'
import { List } from '../_models/list-item.class';
import { Observable, BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListItemsService {

  public API_ITEMS : string = 'http://127.0.0.1:8000/api/item/';

  private messageSource = new BehaviorSubject('Default message');
  currentMessage = this.messageSource.asObservable();

  constructor(private http : HttpClient
    ) {}

  // public get Value(){
  //   return this.countValue;
  // }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
  
  getAllItems() : Observable<List[]>{
    return this.http.get<List[]>(this.API_ITEMS);
  }

  getDetails(id) : Observable<List[]>{
    return this.http.get<List[]>(this.API_ITEMS + id);
  }

}