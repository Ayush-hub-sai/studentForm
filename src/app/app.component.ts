import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { StudentDataService } from './services/student-data.service';
import { Country } from './enum/coutry';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'studentForm';
  myForm!: FormGroup;
  countryList: any[] = []
  stateList: any[] = []
  cityList: any[] = []
  countryId: any = ''
  stateId: any = ''
  cityId: any = ''

  studentObj: any = {
    fName: '',
    lName: '',
    mobile: '',
    email: '',
    gender: '',
    picture: '',
    address: [],
    education: []
  }
  studentList: any = []

  constructor(private _studentService: StudentDataService) {

  }



  ngOnInit(): void {
    this.getCountryList()
  }

  getCountryList() {
    this._studentService.getCoutry().subscribe((res: any) => {
      this.countryList = res
    })
  }

  ChangeCountry(data: any) {
    this.getStateList()
  }

  getStateList() {
    var tempState: any = []
    this._studentService.getState().subscribe((res: any) => {
      tempState = res
    })
    this.stateList = tempState.filter((res: any) => res.country_id == this.countryId)
  }

  ChangeState(data: any) {
    this.getCityLit()
  }

  getCityLit() {
    var tempcity: any = []
    this._studentService.getCity().subscribe((res: any) => {
      tempcity = res
    })
    this.cityList = tempcity.filter((res: any) => res.state_id == this.stateId)
    this.cityId = this.cityList[0].id
  }

  onSubmitTemplateDrivenForm() {
    var studentAdd: any = {
      coutrId: this.countryId,
      stateId: this.stateId,
      cityID: this.cityId
    }
    this.studentObj.address.push(studentAdd)
    this.studentObj.education.push(this.educationList)
    this.studentList.push(this.studentObj)
    console.log(this.studentList);

  }

  educationList: any[] = []
  educationData(data: any) {
    this.educationList = data
  }

  imagePreview: string | ArrayBuffer | null = null;

  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      this.studentObj.picture = file.name
      reader.readAsDataURL(file);
    }
  }

}
