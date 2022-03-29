import { Component, OnInit } from '@angular/core';
import {FirebaseService} from 'src/app/shared/firebase.service'
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  fromhometochat: any
  constructor(public firebaseService : FirebaseService) { }
  chat:any
  messages: any = []
  ngOnInit() 
  {
    this. zoomintigrationDateFormat()
    this.getAllChatMessages()
    this.fromhometochat = localStorage.getItem('datasendfromhometochat')
    console.log(this.fromhometochat)
  }

  timeformat:any = '2022-03-14 13:36:00'
  changedDateFormat:any

  zoomintigrationDateFormat()
  {
    let x  = this.timeformat.split(' ')
    console.log(x[0])
    console.log(x[1])
    let y  = `${x[0]}T`+`${x[1]}Z`
    this.changedDateFormat  = y
    console.log('y : '+y)
  }
  
  getAllChatMessages()
  {
    // this.firebaseService.readFunctionality().subscribe(val=>{
    //   this.messages = val
    
    // })
  }
  onSubmit(val:any)
  {
    this.firebaseService.createFunctionality({
      message: "iloveyou"
    })
  }
}
