import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class CommonService {
  private data = new BehaviorSubject('default data');
  data$ = this.data.asObservable();

  changeData(data: string) {
    this.data.next(data)
  }
}