import { Component, OnInit, ViewChild } from '@angular/core';
import {FirebaseService, Item} from 'src/app/shared/firebase.service'
import { Annyang } from 'annyang';
import Speech from 'speak-tts'
import { Platform, ToastController, IonList } from '@ionic/angular';
import { IonicSelectableComponent } from 'ionic-selectable';
//import { List } from 'ionic-angular';
//import { Platform } from '@ionic-angular';
//import { StatusBar } from '@ionic-native/status-bar';
//import { SplashScreen } from '@ionic-native/splash-screen';
//import { Platform } from '@ionic/angular';
//import { Camera, CameraOptions } from '@ionic-native/camera'
//import { WebView } from '@awesome-cordova-plugins/ionic-webview/ngx';
//import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@awesome-cordova-plugins/camera-preview/ngx';

class friendsinterface {
 public name: string;
 public phone: string;
 public email: string;
 public password:string;
 public profile:string;
 public requeststatus: string;
 public id:string;
 public connectid: string;
}

interface topics
{
  id: number;
  topic: string;
}
interface languages
{
  id: number;
  topic: string;
}
interface users
{
  id: number;
  name: string;
}
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  friendsinterfaceinfo :friendsinterface[];

  items: Item[] = [];
  newItem: Item = <Item>{};
  @ViewChild('mylist')mylist: IonList
  listData = []
  friendsList:any = []
  followFollowingChange:any = 'follow'
  date_now:any 
  ifsendRequest:boolean = true;
  ifrequested:boolean = false;
  iffollowing:boolean = false;
  noselfFriend:any = localStorage.getItem("RegisterSignInPhoneId")
  allRequested:any = []
  allfollowing:any = []
  currentdate = new Date(); 
  datetime:any = this.currentdate.getDate() + "/"
                + (this.currentdate.getMonth()+1)  + "/" 
                + this.currentdate.getFullYear() + " "  
                + this.currentdate.getHours() + ":"  
                + this.currentdate.getMinutes() + ":" 
                + this.currentdate.getSeconds();
  
timedate()
{
  let currentdate1 = new Date(); 
  let datetime1:any = currentdate1.getDate() + "/"
                + (currentdate1.getMonth()+1)  + "/" 
                + currentdate1.getFullYear() + " "  
                + currentdate1.getHours() + ":"  
                + currentdate1.getMinutes() + ":" 
                + currentdate1.getSeconds();
  return datetime1
}

//   userImg: any = '';
// base64Img = '';
// cameraOptions: CameraOptions = {
//  quality: 100,
//  destinationType: this.camera.DestinationType.DATA_URL,
//  encodingType: this.camera.EncodingType.JPEG,
//  mediaType: this.camera.MediaType.PICTURE,
//  allowEdit: true
// }

// gelleryOptions: CameraOptions = {
//   quality: 100,
//   sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
//   destinationType: this.camera.DestinationType.DATA_URL,
//   allowEdit: true
//   }
  


  result: any = []
  getDataFromDb :any = []

  constructor( public firebaseService : FirebaseService,
    private plt: Platform, private toastController: ToastController
    //private webview:WebView,
    //private cameraPreview: CameraPreview
    // private camera: Camera,
    // platform: Platform 
    ) {
      this.loadData();
      this.plt.ready().then(() =>{
        //this.loadItems();
      })
    //   platform.ready().then(() => {
    //     // Okay, so the platform is ready and our plugins are available.
    //    // Here you can do any higher level native things you might need.
    //    //statusBar.styleDefault();
    //    //splashScreen.hide();
    //   })
    //    this.userImg = 'assets/icon/favicon.png';
     }

  ngOnInit()
  {
    // this.zoomintigrationDateFormat()

    // this.insertrequestList()
    // this.insertvideocallList()
    // this.insertstatusList()
    // this.insertChatList('deepu')
     this.getAllUsers()
    // // this.friendRequests()
    //  this.getFriendRequests()
    //this.getDataFromDatabase()
    //this.onSubmit("")
  }

  async loadData()
  {
    
    this.listData = await this.firebaseService.getData('d1');
    console.log("this.loadData : "+this.listData)  
  }

  async addData(id,name)
  {
    let data = {
      id:id,
      name:name
    }
    await this.firebaseService.addData(data,'d1');
    //await this.firebaseService.addData(data);
    setTimeout(() => {
      this.loadData();
    }, 1000);
    //this.loadData();
  }

  async removeItem(index)
  {
    this.firebaseService.removeItem(index,'d1');
    this.listData.splice(index, 1);
    setTimeout(() => {
      this.loadData();
    }, 1000);
    //this.loadData();
  }


  //searchablefriends
  portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('port:', event.value);
  }


  //sendFriendRequest
  frms:any
  sendRequest(v1,v2,v3,v4,v5)
  {
    // this.ifsendRequest = false;
    // this.ifrequested = true;
    // this.iffollowing = false;
    let create_cid = `${this.noselfFriend}s${v2}` 
    this.firebaseService.sendRequest('RegisteationLoginchatstatusvideocallfriends',v2,create_cid,{id:v2,fromstatus:'requested',tostatus:''})
   setTimeout(() => {
    // this.firebaseService.getallsendRequestData('RegisteationLoginchatstatusvideocallfriends',v2,create_cid,).subscribe((r) =>{
    //   this.allRequested  = r
    //   console.log(this.allRequested)
    // })
    this.firebaseService.getsendRequestData('RegisteationLoginchatstatusvideocallfriends',v2,create_cid,).get().then((r) =>{
      this.frms = r.toJSON()
      this.allfollowing
      console.log(this.frms)
    })
   }, 1000);
  }

  friendRequests()
  {
    if(this.followFollowingChange == 'follow')
    {
      this.followFollowingChange = 'following'
    }
    else{
      this.followFollowingChange = 'follow'
    }
    let requests = {
      userId: '1',
      userName: 'deepu',
      time: this.datetime,
      request_status: this.followFollowingChange
    }
    console.log( requests)
    this.firebaseService.friendRequests(requests);
    //this.getFriendRequests()
  }

  allgetData:any = []
  allChatList:any = []
  allChatList1:any = []
  allStatusList:any = []
  allVideocallList:any = []
  allRequestList:any = []
  allfriendRequests:any = []

  rfreq = []
  getFriendRequests()
  { //rfreq.blockStatus
    // console.log("get fd req")
    // this.firebaseService.readFunctionality().subscribe(val=>{
    //   this.result = val
    //   console.log("get fd request : "+JSON.stringify(val))
    
    // })
    //working
    localStorage.setItem('friendRequestsForUsers1','friendRequestsForUsers')
    this.firebaseService.getFriendRequests('/friendRequestsForUser',1)
    .get().then((r) =>{
      console.log("JSON.stringify(r) : "+ JSON.stringify(r))
      this.allChatList1.push(JSON.stringify(r))
      console.log("this.allChatList1 : "+this.allChatList1)
      //this.result = JSON.stringify(r)
    })
  }

 

  users:any = 'deepu9502032337'
  insertChatList(data:any)
  {
    let chatPayload = {
      userId: '143',
      userName: 'deepu',
      datetime: this.timedate(),
      senderblockStatus:'unblock',
      receiverblockStatus:'unblock',
      chatSide:'left',
      message:'hii',
      messageType:'text'
    }
    this.firebaseService.insertData(chatPayload,'chatUsers',data)
  }
  insertstatusList()
  {
    let statusPayload = {
      userId: '144',
      userName: 'deepu1',
      datetime: this.timedate(),
      senderblockStatus:'unblock',
      receiverblockStatus:'unblock',
      chatSide:'left',
      message:'hii',
      messageType:'text'
    }
    this.firebaseService.insertData(statusPayload,'statusUsers',this.users)
  }
  insertvideocallList()
  {
    let videocallPayload = {
      userId: '145',
      userName: 'deepu3',
      datetime: this.timedate(),
      senderblockStatus:'unblock',
      receiverblockStatus:'unblock',
      chatSide:'left',
      message:'hii',
      messageType:'text'
    }
    this.firebaseService.insertData(videocallPayload,'videocallUsers',this.users)
  }
  insertrequestList()
  {
    let requestPayload = {
      userId: '146',
      userName: 'deepu3',
      datetime: this.timedate(),
      senderblockStatus:'unblock',
      receiverblockStatus:'unblock',
      chatSide:'left',
      message:'hii',
      messageType:'text'
    }
    this.firebaseService.insertData(requestPayload,'requestUsers',this.users)
  }

  requests(num)
  {
    alert("requests")
    let payload = {
      id:'hello'
    }
    this.firebaseService.requests(payload,num,localStorage.getItem("RegistrationMobileNumber"))
  }
  followRequest(v1,v2,v3,v4,v5)
  {
    let playload = {
      name:v1,
      phone:v2,
      email:v3,
      password:v4,
      connectid:`${localStorage.getItem("RegisterSignInPhoneId")}${v2}`,
      requeststatus: 'following'
    }
    let fplayload = {
      name:v1,
      phone:v2,
      email:v3,
      password:v4,
      requeststatus: 'follow'
    }
    if(v5 == 'following')
    {
      this.firebaseService.followRequest(fplayload,v2)
    }
    else
    {
      this.firebaseService.followRequest(playload,v2)
    }
    this.requests(v2)
  }

  getAllUsers()
  {//ILvU
    // this.firebaseService.readFunctionality('chatUsers').subscribe(val=>{
    //   this.allChatList = val
    // })
    // this.firebaseService.readFunctionality('statusUsers').subscribe(val=>{
    //   this.allStatusList = val
    // })
    // this.firebaseService.readFunctionality('videocallUsers').subscribe(val=>{
    //   this.allVideocallList = val
    // })
    // this.firebaseService.readFunctionality('requestUsers').subscribe(val=>{
    //   this.allRequestList = val
    // })
    this.firebaseService.readFunctionality('RegisteationLogin').subscribe(val=>{
      this.allfriendRequests = val
      this.friendsinterfaceinfo  = this.allfriendRequests
    })
    

    // this.result = this.firebaseService.readFunctionality()
    // console.log(this.result)
    
  }


  

  //CREATE
  // addItem()
  // {
  //   this.newItem.modified = Date.now();
  //   this.newItem.id = Date.now();

  //   this.firebaseService.addItem(this.newItem,'deeputest').then(item =>{
  //     this.newItem = <Item>{};
  //     this.showToast('item added')
  //     this.loadItems();
  //   })
  // }

  // //READ
  // loadItems()
  // {
  //    this.firebaseService.getItems().then(items => {
  //     this.items = items;
  //   })
  // }

  // //UPDATE
  // updateItem(item:Item)
  // {
  //   item.title = `UPDATED: ${item.title}`;
  //   item.modified = Date.now();
  //   this.firebaseService.updateItem(item).then(item => {
  //     this.showToast('item Updated');
  //     this.mylist.closeSlidingItems();
  //     this.loadItems();
  //   })
    
  // }

  // //DELETE
  // deleteItem(item: Item)
  // {
  //   this.firebaseService.deleteItem(item.id).then(item => {
  //     this.showToast('Item removed');
  //     this.mylist.closeSlidingItems();
  //     this.loadItems();
  //   })
  // }

  // async showToast(msg)
  // {
  //   const toast = await this.toastController.create({
  //     message: msg,
  //     duration: 2000
  //   });
  //   toast.present();
  // }

  spokenEnglish:topics[] = [
    {id:0,topic:'1 How to & What to Learn English'},
    {id:1,topic:'2 Types & Kinds of Pronouns'},
    {id:2,topic:'3 Question Words in English Learning'},
    {id:3,topic:'4 Use Of Can in English Learning'},
    {id:4,topic:'5 DO or Does'},
    {id:5,topic:'6 Will or Shall'},
    {id:6,topic:'7 Am is Are in English Learning'},
    {id:7,topic:'8 Will be or Shall be'},
    {id:8,topic:'9 Usage of Was Or Were'},
    {id:9,topic:'10 Did or V2 Usage'},
    {id:10,topic:'11 Verb Forms In Spoken English'},
    {id:11,topic:'12 How and When to Use Has & Have + V3 '},
    {id:12,topic:'13 How and When to Use Had + V3'},
    {id:13,topic:'14  Will Have or Shall Have'},
    {id:14,topic:'15 Hasbeen or Have Been'},
    {id:15,topic:'16 Use Of Had been'},
    {id:16,topic:'17 Use Of Be forms – Be, Being And Been Usage'},
    {id:17,topic:'18 Easy Combined Sentences for Daily Use'},
    {id:18,topic:'19 Prepositions With 50 Example Sentences'},
    {id:19,topic:'20 Use of May - 32 Sentences on Possibility Permission Wish'},
    {id:20,topic:'21 Use Of Might - 20 Sentences on Requests Conditions Suggestions'},
    {id:21,topic:'22 Must Usage - 30 Daily use sentences on Order Advice and Commands (Must - Must Not)'},
    {id:22,topic:'23 Usage of Should || 21 Sentences on Should For Daily Usage'},
    {id:23,topic:'24 English Phrases For Daily Use'},
    {id:24,topic:''},
    {id:25,topic:''},
    {id:26,topic:''},
    {id:27,topic:''},
    {id:28,topic:''},
    {id:29,topic:''},
    {id:30,topic:''},
    {id:31,topic:''},
    {id:32,topic:''},
    {id:33,topic:''},
    {id:34,topic:''},
    {id:35,topic:''},
    {id:36,topic:''},
    {id:37,topic:''},
    {id:38,topic:''},
    {id:39,topic:''},
    {id:40,topic:''},
    {id:41,topic:''},
    {id:42,topic:''},
    {id:43,topic:''},
    {id:44,topic:''},
    {id:45,topic:''},
    {id:46,topic:''},
    {id:47,topic:''},
    {id:48,topic:''},
    {id:49,topic:''},
    {id:50,topic:''},
  ]

  codeLanguages:languages[] = [
    {id:0,topic:'c'},
    {id:1,topic:'c++'},
    {id:2,topic:'java'},
    {id:3,topic:'python'},
    {id:4,topic:'html'},
    {id:5,topic:'css'},
    {id:6,topic:'javascript'},
    {id:7,topic:'typescript'},
    {id:8,topic:'kotlin'},
    {id:9,topic:'angular'},
    {id:10,topic:'react'},
    {id:11,topic:'androidstudio'},
    {id:12,topic:'django'},
    {id:13,topic:'php'},
    {id:14,topic:'selinium'},
    {id:15,topic:'dart'},
    {id:16,topic:'aws'},
    {id:17,topic:'devops'},
  ]

  onSubmit(val)
  {
    this.firebaseService.createFunctionality({
      deepu: "honey"
    })
    let q = {}
    localStorage.setItem("datasendfromhometochat",val)
    //location.href='chat'
  }
  retrive()
  {
    this.firebaseService.dataretrive()
  }

 

  //priya      "2022-10-31T12:00:00Z"     3/14/2022, 6:17 PM         2022-03-14 13:36:00
  timeformat:any = '3/14/2022, 6:17 PM '
  changedDateFormat:any

  zoomintigrationDateFormat()
  {
    let x  = this.timeformat.split(',')
    console.log(x[0])
    console.log(x[1])
    let x1  = x[0].split('/')
    let y1 = `${x1[2]}-`+`${x1[0]}-`+`${x1[1]}T`
    //alert(y1)
    let y  = `${x[0]}T`+`${x[1]}Z`
    let x2 = x[1].split(' ')
    let x3 = x2[1].split(':')
    let x4 = x3[1]
    console.log(x3[0])
    console.log(x3[1])
    console.log(x2[1]+" deepu "+x2[2])
    if(x2[2] == "PM")
    {
      x3 = parseInt(x3[0]) + 12
      console.log(x3)
    }
    else{
      x3 = parseInt(x3[0])
    }
    let result = `${y1}`+`${x3}`+`:${x4}`+`:00Z`
    console.log(result)
    //alert(result)
    //alert(x2[0]+" : "+x2[1])
    this.changedDateFormat  = result
  }

  followFollowing()
  {
    this.followFollowingChange = 'following'
  }

  codeLanguagesMethod(id,topic)
  {
    //alert(topic)
    if(topic == 'c++')
    {
      location.href = 'c-plus'
    }
    else{
      location.href = topic
    }
  }

  spokenEnglishMethod(id,topic)
  {
    const speech = new Speech() // will throw an exception if not browser supported
    if(speech.hasBrowserSupport()) 
    { // returns a boolean
    alert("speech synthesis supported")
    }
    else{
      alert("speech synthesis not supported")
    }
    speech.init().then((data) => {
      // The "data" object contains the list of available voices and the voice synthesis params
      console.log("Speech is ready, voices are available", data)
      }).catch(e => {
      console.error("An error occured while initializing : ", e)
      })

      speech.init({
        'volume': 1,
           'lang': 'en-GB',
           'rate': 1,
           'pitch': 1,
           'voice':'Google UK English Male',
           'splitSentences': true,
           'listeners': {
               'onvoiceschanged': (voices) => {
                   console.log("Event voiceschanged", voices)
               }
           }
   })
   
  // speech.setVoice('Fiona')
    console.log(id,topic)
    localStorage.setItem("sendDataFromMainToSpokenEnglish",topic)
    localStorage.setItem("sendIdFromMainToSpokenEnglish",id)

    speech.speak({
      text: topic,
      }).then(() => {
      console.log("Success !")
      }).catch(e => {
      console.error("An error occurred :", e)
      })
    location.href = 'spokenenglish'

    
  }

  // getDataFromDatabase()
  // {
  //   this.firebaseService.getDB().subscribe((response)=>{
  //     this.getDataFromDb = response
  //     console.log(this.getDataFromDb.name)
  //   })
  // }

  // postDatabase(id,name)
  // {
  //   let postPatload = {
  //     "id":id,
  //     "name":name
  //   }
  //   this.firebaseService.posttoDB(postPatload).subscribe((response)=>{
  //     console.log(response)
  //     this.getDataFromDatabase()
  //   })
  // }

  // openCamera() {
  //   this.camera.getPicture(this.cameraOptions).then((imgData) => {
  //   console.log('image data =>  ', imgData);
  //   this.base64Img = 'data:image/jpeg;base64,' + imgData;
  //   this.userImg = this.base64Img;
  //   }, (err) => {
  //   console.log(err);
  //   })
  //  }

  //  openGallery() {
  //   this.camera.getPicture(this.gelleryOptions).then((imgData) => {
  //    console.log('image data =>  ', imgData);
  //    this.base64Img = 'data:image/jpeg;base64,' + imgData;
  //    this.userImg = this.base64Img;
  //    }, (err) => {
  //    console.log(err);
  //    })
  //   }
}
