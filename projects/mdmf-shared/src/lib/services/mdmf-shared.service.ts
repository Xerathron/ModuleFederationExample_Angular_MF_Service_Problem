import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'platform',
})
export class MdmfSharedService {
  private subject = new ReplaySubject<boolean>(1);
  public observer = this.subject.asObservable();
  
  private subjectState = false;
  
  constructor() {}

  setClick() {
    this.subjectState = !this.subjectState;
    this.subject.next(this.subjectState);
  }
}
