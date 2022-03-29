import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
@Component({
  selector: 'app-kotlin',
  templateUrl: './kotlin.page.html',
  styleUrls: ['./kotlin.page.scss'],
})
export class KotlinPage implements OnInit {

  ionicForm: FormGroup;
  //constructor() { }
  myGroup
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() { 
    this.myGroup = new FormGroup({
      firstName: new FormControl()
    });
   }


 
    // this.myGroup = new FormGroup({
    //     //firstName: new FormControl()
    // });

  getDate(e) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.ionicForm.get('dob').setValue(date, {
       onlyself: true
    })
 }

 submitForm() {
  console.log(this.ionicForm.value)
  console.log(this.myGroup.value)
}
}
