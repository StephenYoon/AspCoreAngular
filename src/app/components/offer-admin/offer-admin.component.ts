import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-admin',
  templateUrl: './offer-admin.component.html',
  styleUrls: ['./offer-admin.component.scss']
})
export class OfferAdminComponent implements OnInit {

    public isEditMode: boolean = false;

    constructor() { }

    ngOnInit() {
    }

    public editTitleClick() {
        this.isEditMode = !this.isEditMode;
    }
}
