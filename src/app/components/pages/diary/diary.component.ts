import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  numNotes: number;
  selectedNoteId: number;
  navNotes: string[];
  navDates: string[];
  content: string[];
  navButtonClasses: string[];
  newContent: string;


  constructor() {
    this.selectedNoteId = 0;
    this.numNotes = 4;
    this.navButtonClasses = ['active', 'inactive', 'inactive', 'inactive', 'inactive', 'inactive', 'inactive'];
    this.navNotes = ['Кръвно налягане', 'Гадене', 'Загуба на апетит', 'Стомашно разстройство',
      'Ниска кръвна захар', 'Нямам симптоми', 'Неспокойство'];
    this.navDates = ['21.02.2018', '13.01.2018', '07.01.2018', '02.01.2018', '25.12.2017',
      '15.11.2017', '21.10.2017'];
    this.content = ['Кръвното ми налягане е извън норма.',
      'От суттринта ми се гади',
      'През последната седмица губя апетит',
      'Стомахът ми се бунтува',
      'Ниска кръвна захар',
      'Всичко привидно ми е наред, но ',
      'През последните дни съм много неспокоен'
    ];

  }

  changeNote(clickedNoteId: number): void {
    this.navButtonClasses[this.selectedNoteId] = 'inactive';
    this.selectedNoteId = clickedNoteId;
    this.navButtonClasses[clickedNoteId] = 'active';
  }

  ngOnInit() {
  }

}
