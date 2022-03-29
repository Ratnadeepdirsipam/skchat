import { Component, OnInit } from '@angular/core';
import {FirebaseService} from 'src/app/shared/firebase.service'

 //const Meeting = require('googleapis').meet;

// Meeting({
// clientId : 'XXXXdds420ghq7195tfsbi04i7rduaans.apps.googleusercontent.com',
// clientSecret : 'XXXXxxeh2mrCZ',
// refreshToken : 'XXXXXXXXXCNfW2MMGvJUSk4V7LplXAXXXX',
// date : "2020-12-01",
// time : "10:59",
// summary : 'summary',
// location : 'location',
// description : 'description'
// }).then(function(result){
// console.log(result);//result is the final link
// })



@Component({
  selector: 'app-spokenenglish',
  templateUrl: './spokenenglish.page.html',
  styleUrls: ['./spokenenglish.page.scss'],
})
export class SpokenenglishPage implements OnInit {

  fromMain
  fromMainId
  constructor(
    public fs:FirebaseService
  ) {
    
   }

  ngOnInit() {
    this.fromMain = localStorage.getItem("sendDataFromMainToSpokenEnglish")
    this.fromMainId = localStorage.getItem("sendIdFromMainToSpokenEnglish")
    console.log(this.fromMain,this.fromMainId)
  }

  pdata()
  {
    let reqdata = 
    {
      "topic": "Interview",
      "type":2,
      "start_time": "2022-02-11T12:00:00Z",
      "duration":"3",
      "settings":{
       "host_video":true,
       "participant_video":true,
       "join_before_host":true,
       "mute_upon_entry":"true",
       "watermark": "true",
       "audio": "voip",
       "auto_recording": "cloud"

      }
      //"access_token":"eyJhbGciOiJIUzUxMiIsInYiOiIyLjAiLCJraWQiOiJmYmNkY2ViOS1iYTE5LTQ3MTItOGQ5MS1kNTAxMDA0ZGMzODkifQ.eyJ2ZXIiOjcsImF1aWQiOiI5ZDcxNzVjZDNjNzUwZDMwYTY3NDNjNzg2YTZjMzk5OSIsImNvZGUiOiJiN3FZRmZ0dFhvX205MUhzc0NnUkc2N3Q4Y1JzNm16eEEiLCJpc3MiOiJ6bTpjaWQ6bUJqbVlZTlJSVHk2WTdaUExNRVZBIiwiZ25vIjowLCJ0eXBlIjowLCJ0aWQiOjAsImF1ZCI6Imh0dHBzOi8vb2F1dGguem9vbS51cyIsInVpZCI6Im05MUhzc0NnUkc2N3Q4Y1JzNm16eEEiLCJuYmYiOjE2NDQ0NzQ1ODcsImV4cCI6MTY0NDQ3ODE4NywiaWF0IjoxNjQ0NDc0NTg3LCJhaWQiOiJqUlI0Q1NvSFFmU21IX1hzcUM5QkhRIiwianRpIjoiNDM4OWUzNjAtYTk2NC00MjMyLTlhMWUtZGVhOWM1OTg2ODA2In0.1_vHKi2T8fs_YneNB1JSeqGNesBKr_SjSPE5ErzDIksGzyP04IbcpRWzGa6Iwgr_yM6Ch4XLSt5LgtDskAnR0w"
       
        //  },
        //  "recurrence": {
        //   "type": 1,
        //   "repeat_interval": 1,
        //   "end_date_time": "2022-02-11T12:00:00Z" 
        //   }, 
     }
    
    this.fs.postdata(reqdata).subscribe((r)=>{
      alert(r)
    })
  }

}
// "topic": "string",
//       "type": 2,
//       "start_time": "2022-02-11T10:35:01",
//       "duration": 60,
//       "schedule_for": "",
//       "timezone": "Asia/Shanghai",
//       "password": "",
//       "agenda": "string",
//       "recurrence": {
//         "type": null,
//         "repeat_interval": null,
//         "weekly_days": null,
//         "monthly_day": null,
//         "monthly_week": null,
//         "monthly_week_day": null,
//         "end_times": null,
//         "end_date_time": null
//       },
//       "settings": {
//         "host_video": true,
//         "participant_video": false,
//         "cn_meeting": false,
//         "in_meeting": false,
//         "join_before_host": true,
//         "mute_upon_entry": true,
//         "watermark": false,
//         "use_pmi": false,
//         "approval_type": 2,
//         "registration_type": 1,
//         "audio": "both",
//         "auto_recording": "none",
//         "enforce_login": false,
//         "enforce_login_domains": "",
//         "alternative_hosts": "",
//         "global_dial_in_countries": null,
//         "registrants_email_notification": false