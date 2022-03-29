import { Component,ViewChild } from '@angular/core';
import {FirebaseService} from 'src/app/shared/firebase.service'
import { NavController, ModalController, AlertController } from '@ionic/angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // @ViewChild('appDashboard', { static: false }) appDashboard: HomePage;

  // callSendWeatherResult(): void {
  // this.appDashboard.testrl()
  // }
  result: any = []
  inputs:any

  constructor( public firebaseService : FirebaseService,
    public navctrl: NavController
    //public rl:RegandloginPage
     ) {}

  ngOnInit()
  {
    this.inputs = document.getElementById('check');
    //this.getAllUsers()
    //this.onSubmit("")
    this.removeItem()
  }

  clickMe(){
    this.inputs.checked = true;
    console.log(this.inputs.checked)
    //this.firebaseService.sendClickEvent();
    //alert("home page clicked")
  }

  uncheck()
  {
    this.inputs.checked = false;
    console.log(this.inputs.checked)
  }

  testrl()
  {
    alert("am at home page")
  }

  arr:any
  removeItem()
  {
    // var ar = ['1', '2', '3', '4', '5', '6'];
    // console.log( ar );
    // delete ar['4']; // delete element with index 4
    
    // console.log( ar ); 
    
    // [1, 2, 3, 4, undefined, 6]
    
  

    this.arr = ['d1','d2','d3','d4','d5'];
    localStorage.setItem('testArr', this.arr)
    console.log(" before : "+ localStorage.getItem('testArr'))
    // delete this.arr['d4']
    console.log(this.arr)
    for( var i = 0; i < this.arr.length; i++){ 
    
        if ( this.arr[i] === 'd3') { 
          
           console.log(this.arr.splice(i, 1)) 
        }
        else{
          
        }
    
    }
    localStorage.setItem('testArr', this.arr)
    console.log(" after : "+ localStorage.getItem('testArr'))
  }

  navigeteToRegLog()
  {
    this.navctrl.navigateForward('/regandlogin')
  }
  // onSubmit(val)
  // {
  //   this.firebaseService.createFunctionality({
  //     deepu: "honey"
  //   })
  //   let q = {}
  //   localStorage.setItem("datasendfromhometochat",val)
  //   //location.href='chat'
  // }

  // getAllUsers()
  // {
  //   this.firebaseService.readFunctionality().subscribe(val=>{
  //     this.result = val
    
  //   })
  // }

}
