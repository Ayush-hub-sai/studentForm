import { jsDocComment } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  education: any = {
    collegeName: '',
    stream: '',
    passYear: '',
    marks: '',
  }
  educationList: any[] = []

  @Output() educationDetails = new EventEmitter<any>();
  templist: any = []
  submitEducation() {
    const newEducation = { ...this.education };
    this.educationList.push(newEducation);
    this.educationDetails.emit(this.educationList);

    this.education = {
      collegeName: '',
      stream: '',
      passYear: null,
      marks: ''
    };
  }

  deleteEdu(index: number) {
    this.educationList.splice(index, 1);
    this.educationDetails.emit(this.educationList);
  }
}
