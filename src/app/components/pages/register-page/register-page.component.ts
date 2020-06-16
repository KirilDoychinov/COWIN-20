import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  username: string;
  password: string;
  repeatedPassword: string;
  email: string;
  name: string;
  surname: string;
  phonecode: string;
  phone: string;
  selectedGenderId: number;
  selectedCountry: string;
  selectButtonClasses: string[];
  countries: any[];
  countryCodes: Map<string, string>;


  constructor() {
    this.username = '';
    this.password = '';
    this.repeatedPassword = '';
    this.email = '';
    this.name = '';
    this.surname = '';
    this.phonecode = '+359';
    this.phone = '';
    this.selectedGenderId = 0;
    this.selectedCountry = 'bg';
    this.selectButtonClasses = ['active', 'inactive'];

    this.countries = [{ title: 'България', value: 'bg' },
    { title: 'Великобритания', value: 'en' },
    { title: 'Германия', value: 'de' },
    { title: 'Франция', value: 'fr' }
    ];

    this.countryCodes = new Map();
  }

  ngOnInit() {
    this.initializeMap();
  }

  initializeMap(): void {
    this.countryCodes.set('bg', '+359');
    this.countryCodes.set('en', '+44');
    this.countryCodes.set('fr', '+33');
    this.countryCodes.set('de', '+49');
  }

  changeGender(clickedTabId: number): void {
    this.selectButtonClasses[this.selectedGenderId] = 'inactive';
    this.selectedGenderId = clickedTabId;
    this.selectButtonClasses[this.selectedGenderId] = 'active';
  }

  getPhoneCode(): string {
    return this.countryCodes.get(this.selectedCountry);
  }

  addOption(select: any, text: string, value: string) {
    const option = document.createElement('option');
    option.text = text;
    option.value = value;
    select.options.add(option);
  }

  register(): void {
    console.log('User clicked \'Register\'');
  }

}
