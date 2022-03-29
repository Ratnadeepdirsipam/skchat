import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {FirebaseService, Item} from 'src/app/shared/firebase.service'

import { nameValidator } from '../shared/all-validation';
import * as $ from 'jquery'
import { HomePage } from '../home/home.page';
import { HomePageModule } from '../home/home.module';
import { Subscription } from 'rxjs';
//import { HomePage } from '../home/home.page';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

@Component({
  selector: 'app-regandlogin',
  templateUrl: './regandlogin.page.html',
  styleUrls: ['./regandlogin.page.scss'],
})
export class RegandloginPage implements OnInit {
  sr:any = SpeechRecognition
  getAllRegUsers:any = []
  getAllRegUsersPhone:any = []
  getAllRegUsersMail:any = []
  getAllRegUsersPassword:any = []
  reglog:boolean = true
  heading:any = 'Registration'
  hp:any
  response:any

  

  clickEventSubscription:Subscription;
  // @ViewChild('appDashboard', { static: false }) appDashboard: HomePage;

  // callSendWeatherResult(): void {
  // this.appDashboard.testrl()
  // }
  
  registerationform = this.formbuilder.group({
    name: [],
    email: [],
    password: []
  })
  constructor(
    public formbuilder: FormBuilder,
    public fb: FirebaseService,
    public nc:NavController
    //public hp:HomePage
  ) {
    // this.clickEventSubscription = this.fb.getClickEvent().subscribe(() =>{
    //   //this.increment()
    //   alert("reg page clicked")
    // })
   }

  
   
  
  ngOnInit() {
    this.getAllRegistrationUsers()
    //this.fb.initializeRequirementPayload()
    //this.hp = new HomePage();
    //this.hp = new HomePage()
    
  }


  //Registration
  submitRegistration(v1,v2,v3,v4)
  {
    let registration = {
      name:v1,
      phone:v2,
      email:v3,
      password:v4,
      profile:'',
      requeststatus: 'follow',
      id:v2,
      connectid: v2
    }
    if(navigator.onLine)
    {
      localStorage.setItem("RegisterSignInPhoneId",v2)
      localStorage.setItem("Registrationsuccess",'false')
    //localStorage.setItem("RegistrationMobileNumber",v2)
    console.log(registration)
    this.fb.userRegistration('RegisteationLogin',v2,registration)
    //this.fb.userRegistration('RegisteationLoginchatstatusvideocallfriends',v2,rlcsvf)

    //connectedIds
    this.fb.connectedIds('RegisteationLoginchatstatusvideocallfriends',v2,{v2:v1})
    
    //userInfo
    this.fb.userInfo('RegisteationLoginchatstatusvideocallfriends',v2,registration)

    //userChats
    this.fb.userChats('RegisteationLoginchatstatusvideocallfriends',v2,'chats',{})

    //userStatus
    this.fb.userStatus('RegisteationLoginchatstatusvideocallfriends',v2,{})
    

    //userVideocalls
    this.fb.userVideocalls('RegisteationLoginchatstatusvideocallfriends',v2,{})
    

    //userfriends
    this.fb.userfriends('RegisteationLoginchatstatusvideocallfriends',v2,{})
    

    //userFriendRequests
    this.fb.userFriendRequests('RegisteationLoginchatstatusvideocallfriends',v2,{})
  
    setTimeout(() => {
      if(localStorage.getItem("Registrationsuccess") == 'true')
    {
      alert("registraion successfully")
      this.nc.navigateForward('main')
      localStorage.setItem("Registrationsuccess",'false')
     // location.href = 'main'
    }
    }, 2000);
    }
  }

  //getAllUsersInfo
  getAllRegistrationUsers()
  {
    this.fb.getAllRegisterData().subscribe((response) =>{
      this.getAllRegUsers = response
      console.log(this.getAllRegUsers)
      this.getAllRegUsers.map((p) =>{
        if(this.getAllRegUsersPhone.includes(p.phone))
        {
          console.log('data already exists')
        }
        else{
          this.getAllRegUsersPhone.push(p.phone)//phone
        }
        if(this.getAllRegUsersMail.includes(p.email))
        {
          console.log('data already exists')
        }
        else{
          this.getAllRegUsersMail.push(p.email)//phone
        }
        if(this.getAllRegUsersPassword.includes(p.password))
        {
          console.log('data already exists')
        }
        else{
          this.getAllRegUsersPassword.push(p.password)
        }
        
        
        
      })
      console.log(this.getAllRegUsersPhone)
      console.log(this.getAllRegUsersMail)
      console.log(this.getAllRegUsersPassword)
      //console.log(this.getAllRegUsersPhone.indexOf("9502032337"))
     
    })
  }


  //login
  signIn(v1,v2)
  {
    console.log(v1,v2)
    //let registrationMobNum = localStorage.getItem("RegistrationMobileNumber")
    let signin = {
      email:v1,
      password:v2
    }

    //console.log("signin"+signin)
    let confirmemailorphone = 'phone'
    for(let i =0; i<v1.length; i++)
    {
      //console.log(v1[i])
      if(v1[i] == '@')
      {
        console.log("matched @")
        confirmemailorphone = 'email'
      }
    }

    let loginPasswordinfo =  this.getAllRegUsers[this.getAllRegUsersPassword.indexOf(v1)]
    //console.log(this.getAllRegUsersPassword.indexOf(v1))
    //console.log(loginPasswordinfo)
    if(confirmemailorphone == 'email')
    {
     
      let loginemailinfo =  this.getAllRegUsers[this.getAllRegUsersMail.indexOf(v1)]
      //console.log("this.getAllRegUsersMail.indexOf(v1)"+this.getAllRegUsersMail.indexOf(v1))
      console.log(this.getAllRegUsers[this.getAllRegUsersMail.indexOf(v1)])
      //console.log(loginemailinfo.email+""+loginemailinfo.password)
      localStorage.setItem("RegisterSignInPhoneId",loginemailinfo.phone)

      if(loginemailinfo.email == v1 && loginemailinfo.password == v2)
      {
        alert("login successfully with gmail")
        this.nc.navigateForward('main')
      }
    }
    else if(confirmemailorphone == 'phone')
    {
    
      let loginPhoneinfo =  this.getAllRegUsers[this.getAllRegUsersPhone.indexOf(v1)]
      //console.log("this.getAllRegUsersPhone.indexOf(v1)"+this.getAllRegUsersPhone.indexOf(v1))
      //console.log(this.getAllRegUsers[this.getAllRegUsersPhone.indexOf(v1)])
      //console.log(loginPhoneinfo.phone,loginPasswordinfo.password)
      localStorage.setItem("RegisterSignInPhoneId",loginPhoneinfo.phone)

      if(loginPhoneinfo.phone == v1 && loginPhoneinfo.password == v2)
      {
        alert("login successfully with phone")
        this.nc.navigateForward('main')
      }
    } 
  }



  SpeechRecognationMethod()
  {
    this.sr.hasPermission()
    .then((hasPermission: boolean) => console.log(hasPermission))

    this.sr.requestPermission()
    .then(
      () => {
        alert('granted')
        console.log('Granted')
      },
      () => {
        alert('deninded')
        console.log('Denied')
      }
    )

    this.sr.isRecognitionAvailable().then((available: boolean) => {
      console.log(available)
      alert(available)
    })
    this.sr.startListening('')
    .subscribe(
      (matches: Array<string>) => {
        alert(matches)
        console.log(matches)
      },
      (onerror) => {
        console.log('error:', onerror)
        alert(onerror)
    }
    )
  }

  firstFunction() {    
    alert( 'Hello ' + '\nWelcome to C# Corner \nFunction in First Component');    
  }   

  count:number = 0;
  increment()
  {
     this.count ++;
  }

  hptest()
  {
    this.hp.testrl()
  }

  signin()
  {
    this.reglog = false 
    this.heading = 'Sign In'
  }

  reg()
  {
    this.reglog = true
    this.heading = 'Registration'
  } 

 

  
  
  
  data = [  
    {  
       "id":198,
       "name":"Aaron Garo",
    },
    {  
       "id":345,
       "name":"Michael Stines",
    },
    {  
       "id":545,
       "name":"Ully Heiz",
    },
    {  
       "id":678,
       "name":"Asgaf Torino",
    }
 ]
 
 output = "";


 /* SEEKER FUNCTION */
//  if (!RegExp.escape) {
//   RegExp.escape = function (s) {
//     return s.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
//   };
// }

// jQuery(()=>{
//  var $rows = $('.values');
//  $('#seeker').keyup(function () {
//    var regex =  new RegExp(RegExp.escape($.trim(this.value).replace(/\s+/g, ' ')), 'i')
//    $rows.hide().filter(function () {
//      var text = $(this).children(".value-name").text().replace(/\s+/g, ' ');
//      return regex.test(text)
//    }).show();
//  });
// });
submit(myForm)
{
  console.log(myForm.value) 
}

}
