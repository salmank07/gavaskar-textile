import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-online-service',
  templateUrl: './online-service.component.html',
  styleUrls: ['./online-service.component.scss']
})
export class OnlineServiceComponent implements OnInit {

  constructor() {
    
    AOS.init({ duration: 1000 });
  }

  ngOnInit(): void {
    this.loadThis();
  }
  services: Array<any> = [];
  allService: Array<any> = [];

  loadThis = () => {
    this.services = [
      { title: 'Passport', src: '../assets/images/bg34.jpg' },
      { title: 'Nala Variyam', src: '../assets/images/bg40.jpg' },
      { title: 'Train Ticket Booking', src: '../assets/images/bg38.jpg' },
      { title: 'Flight Ticket Booking', src: '../assets/images/bg39.jpg' },
      { title: 'Loan', src: '../assets/images/bg37.jpg' },
      { title: 'Disability ID Card', src: '../assets/images/bg31.jpg' },
      { title: 'Marriage Certificate', src: '../assets/images/bg32.jpg' },
      { title: 'Apply Life Certificate On Time', src: '../assets/images/bg33.jpg' },
      { title: 'Apply for Central Govt Health ID Card', src: '../assets/images/bg36.jpg' },
      { title: 'Pocket-friendly Covid vaccine card', src: '../assets/images/bg35.jpg' }
    ]

    this.allService = [
      { Title: "Income Certificate" },
      { Title: "Community Certificate" },
      { Title: "Nativity/Residence Certificate" },
      { Title: "First Graduate" },
      { Title: "Deserted Women Certificate" },
      { Title: "Family Migration Certificate" },
      { Title: "Unemployment Certificate" },
      { Title: "Widow/Destitute WidowCertificate" },
      { Title: "Intercaste Marriage" },
      { Title: "Legal Heir Certificate" },
      { Title: "OBC Certificate" },
      { Title: "Solvency Certificate" },
      { Title: "No Male Child Certificate" },
      { Title: "Unmarried Certificate" },
      { Title: "Destitute Widow Certificate" },
      { Title: "License under Pawn Broker Act" },
      { Title: "Money Lenders License" },
      { Title: "Fisherman Relief assistance Scheme" },
      { Title: "Marriage Assistance Scheme" },
      { Title: "OAP Schemes" },
      { Title: "Widow /Destitute Widow Pension ( )" },
      { Title: "Disability Pension" },
      { Title: "Unmarried Women Pension" },
      { Title: " Destitute Deserted Women Pension" },
      { Title: "Drug License" },
      { Title: "Birth | Death" },
      { Title: "Certificate Crop InsurancePMFBY" },
      { Title: "PMAYHousing Loan" },
      { Title: "CMCHS/AB-PMJAY ComprehensiveHealth Insurance" },
      { Title: "Marriage Registration" },
      { Title: "Patta | EC | Copy of Document" },
      { Title: "Stamp Paper / Court Fee StampAuthorized Vendor" },
      { Title: "Notary/Affidavit" },
      { Title: "Ration Card" },
      { Title: "Passport" },
      { Title: "Aadhar" },
      { Title: "Voter ID" },
      { Title: "PANGovt Approved Agent" },
      { Title: "IT Filing" },
      { Title: "FSSAI certificate" },
      { Title: "UDYOG AadharMSME registration" },
      { Title: "Employment Registration/Renewal" },
      { Title: "LIC Premium Payment" },
      { Title: "Tamil Nadu Unorganised Workers Welfare Card" },
      { Title: "PMDISHAFree Computer Course" },
      { Title: "TELE LAWFree LegalAdvice" },
      { Title: "PF Withdrawal" },
      { Title: "Life Certificate / Jeevan Pramaan" },
      { Title: "UDID Card" },
      { Title: "Police Verification Certificate" },
      { Title: "Banking ServicesGovt Approved vendor" },
      { Title: " MICRO ATM Facility" },
      { Title: "All Banks Money Transfer AEPS" },
      { Title: "Money Withdrawal / Deposit" },
      { Title: "Zero Balance Account Opening" },
      { Title: "Spiral Binding" }
    ]

  }


}
