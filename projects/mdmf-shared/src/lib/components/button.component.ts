import { Component, OnInit } from "@angular/core";
import { MdmfSharedService } from "../services/mdmf-shared.service";

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css'],
  })
  export class ButtonComponent implements OnInit {
  
    btnClicked: boolean = false;
  
    constructor(private service: MdmfSharedService) {
    }

    ngOnInit(): void {
        this.service.observer.subscribe(data => this.btnClicked = data);
    }

    clicked() {
        this.service.setClick();
    }
}