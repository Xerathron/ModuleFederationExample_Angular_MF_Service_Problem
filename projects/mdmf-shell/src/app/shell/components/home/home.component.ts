import { Component, OnInit } from '@angular/core';
import { MdmfSharedService } from 'projects/mdmf-shared/src/public-api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isClicked = false;
  
  
  constructor(private service: MdmfSharedService) {}
  ngOnInit(): void {
    this.service.observer.subscribe(data => this.isClicked = data);
  }

  btnClick(): void {
    console.log('test');
    
    this.service.setClick();
  }
}
