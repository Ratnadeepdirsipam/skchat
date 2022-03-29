import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage'
//import { Observable, Subject } from 'rxjs';

export interface Item {
  id: number,
  title: string,
  value: string,
  modified: number
}

const ITEMS_KEY = 'my-items';
const STORAGE_KEY = 'mylist'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  // private subject = new Subject<any>();

  // sendClickEvent()
  // {
  //   this.subject.next()
  // }
  // getClickEvent():Observable<any>
  // {
  //   return this.subject.asObservable();
  // }

  // private subject = new Subject<any>();
  // sendClickEvent() 
  // {
  //   this.subject.next();
  // }
  // getClickEvent(): Observable<any>
  // { 
  //   return this.subject.asObservable();
  // }

  endPath = 'https://api.zoom.us/v2/users/me/meetings'
  codex_endpath = 'https://codexweb.netlify.app/.netlify/functions/enforceCode'
  database = 'http://localhost:3000/users'
  


  constructor(public angulardb: AngularFireDatabase,
    private http:HttpClient,
    private storage:Storage
    ) { 
      this.init();
      this.dataretrive()
    }

    async init()
    {
      
      this.createFunctionality({ILvU:"ilove"});
      console.log("init")
      await this.storage.create();
      console.log("Done")
    }

   
    //Registration
    userRegistration(childRef:string,childRef1:string,payload:any)
    {
      var dataRef = this.angulardb.database.ref('/finalYearProjectForSrkr').child(childRef).child(childRef1)//.child('chats')
      dataRef.set(payload).then(res =>{
        localStorage.setItem("Registrationsuccess",'true')
      }) 
    }

    //registration data for login
    getAllRegisterData()
    {
      return this.angulardb.list('/finalYearProjectForSrkr'+'/'+'RegisteationLogin').valueChanges();
      //return this.angulardb.database.ref('/finalYearProjectForSrkr').child('RegisteationLogin')//.child(localStorage.getItem("RegistrationMobileNumber"))
    }

    //login
    userLogin()
    {

    }

    //connectedIds
    connectedIds(childRef:string,childRef1:string,payload:any)
    {
      var dataRef = this.angulardb.database.ref('/finalYearProjectForSrkr').child(childRef).child(childRef1).child('connectedIds')
      dataRef.set(payload).then(res =>{
        //localStorage.setItem("Registrationsuccess",'true')
      }) 
    }

    //userInfo
    userInfo(childRef:string,childRef1:string,payload:any)
    {
      var dataRef = this.angulardb.database.ref('/finalYearProjectForSrkr').child(childRef).child(childRef1).child('info')
      dataRef.set(payload).then(res =>{
        //localStorage.setItem("Registrationsuccess",'true')
      }) 
    }

    //userChats
    userChats(childRef:string,childRef1:string,childRef2:string,payload:any)
    {
      var dataRef = this.angulardb.database.ref('/finalYearProjectForSrkr').child(childRef).child(childRef1).child('chats')
      dataRef.set({def:'user chats '}).then(res =>{
        //localStorage.setItem("Registrationsuccess",'true')
      }) 
    }

    //userStatus
    userStatus(childRef:string,childRef1:string,payload:any)
    {
      var dataRef = this.angulardb.database.ref('/finalYearProjectForSrkr').child(childRef).child(childRef1).child('status')
      dataRef.set({def:'user ststus '}).then(res =>{
        //localStorage.setItem("Registrationsuccess",'true')
      }) 
    }

    //userVideocalls
    userVideocalls(childRef:string,childRef1:string,payload:any)
    {
      var dataRef = this.angulardb.database.ref('/finalYearProjectForSrkr').child(childRef).child(childRef1).child('videocalls')
      dataRef.set({def:'user videocalls'}).then(res =>{
        //localStorage.setItem("Registrationsuccess",'true')
      }) 
    }

    //userfriends
    userfriends(childRef:string,childRef1:string,payload:any)
    {
      var dataRef = this.angulardb.database.ref('/finalYearProjectForSrkr').child(childRef).child(childRef1).child('friends')
      dataRef.set({def:'user friends'}).then(res =>{
        //localStorage.setItem("Registrationsuccess",'true')
      }) 
    }

    //userFriendRequests
    userFriendRequests(childRef:string,childRef1:string,payload:any)
    {
      var dataRef = this.angulardb.database.ref('/finalYearProjectForSrkr').child(childRef).child(childRef1).child('friendrequests')
      dataRef.set({def:'user friendrequests'}).then(res =>{
        //localStorage.setItem("Registrationsuccess",'true')
      }) 
    }

    //friend request for follow to following and also unfollow
    clickFollowFollowing()
    {
      
    }

    //sendRequest
    sendRequest(childRef:string,childRef1:string,userid:string,payload:any)
    {
      var dataRef = this.angulardb.database.ref('/finalYearProjectForSrkr').child(childRef).child(childRef1).child('connectedIds').child(userid)
      dataRef.set(payload).then(res =>{
        //localStorage.setItem("Registrationsuccess",'true')
      }) 
    }

    getsendRequestData(c1:string,c2:string,c3:string)
    {
      //finalYearProjectForSrkr/RegisteationLoginchatstatusvideocallfriends/7288805512/9502032337s7288805512
      console.log('/finalYearProjectForSrkr'+'/'+c1+'/'+c2+'/'+c3)
      return this.angulardb.database.ref('/finalYearProjectForSrkr')
      .child(c1)
      .child(c2)
      .child('connectedIds')
      .child(c3)//.valueChanges();
    }

    getallsendRequestData(c1:string,c2:string,c3:string)
    {
      return this.angulardb.list('/finalYearProjectForSrkr/RegisteationLoginchatstatusvideocallfriends/'+c2+'/connectedIds').valueChanges();
    }

    //database 

    getData(get_request)
    {
      return this.storage.get(get_request) || [];
    }

    async addData(item,payload)
    {
      const storedData = await this.storage.get(payload) || [];
      storedData.push(item);
      return this.storage.set(payload, storedData);
    }

    async removeItem(index,remove_request)
    {
      const storeData = await this.storage.get(remove_request) || [];
      storeData.splice(index, 1);
      return this.storage.set(remove_request, storeData)
    }

    //database
    

    

    insertData(payload : any,childRef:any,childRef1:any)
    {
      var dataRef = this.angulardb.database.ref('/finalYearProjectForSrkr').child(childRef).child(childRef1)
      dataRef.set(payload).then(res =>{
        localStorage.setItem("Registrationsuccess",'true')
      })
      //dataRef.push(payload).then(res =>{});
    }

    requests(payload:any,childRef,request)
    {
      
      var dataRef = this.angulardb.database.ref('/finalYearProjectForSrkr').child('RegisteationLogin').child(childRef).child('requests').child(request)
      dataRef.set(payload).then(res =>{
        
      })
    }

    followRequest(payload:any,child:any)
    {
      var dataRef = this.angulardb.database.ref('/finalYearProjectForSrkr').child('RegisteationLogin').child(child)
      dataRef.set(payload).then(res =>{
        localStorage.setItem("Registrationsuccess",'true')
      })
    }

  createFunctionality(payload : any)
  {
    
    // const dbref = this.angulardb.list('/deepu')
    // dbref.push(payload).then(res => {
    //   payload.id = res.key
    //   console.log(payload.id)
    //   this.angulardb.object('/deepu/'+`${payload.id}`).update(payload)
    // })
    // console.log("cratefun")
    // var dataRef = this.angulardb.database.ref('/honey').child('honey')
    // dataRef.set({
    //   ILvU:"deepu1",
    //   ILvU1:"deepu2",
    //   ILvU2:"deepu3",
    //   ILvU3:"deepu4",
    //   ILvU4:"deepu5"
    // }).then(res =>{
    //         //this.angulardb.object('/deepu/'+`${payload.id}`).update(payload)
    //       });

    // var dataRef = this.angulardb.database.ref('/honey').child('honey')//.push();
    // dataRef.set(
    //     {
    //            honey:'honey1',
    //            deepu:'deepu1',
    //            teja:'teja',
    //            sudha:'sudha'

    //     }).then(res =>{
    //       //this.angulardb.object('/deepu/'+`${payload.id}`).update(payload)
    //     });
    
    //alert("submit successfully")
  }
  readFunctionality(childref)
  {
    
    return this.angulardb.list('/finalYearProjectForSrkr'+'/'+childref).valueChanges();
  }
  
  friendRequests(req:any)
  {
     const dbref = this.angulardb.database.ref('/friendRequestsForUsers').child('1')
    dbref.push(req).then(res => {
      req.id = res.key
      console.log(req.id)
      //this.angulardb.object('/deepu/'+`${req.id}`).update(req)
    })
  }

  getFriendRequests(ref:string,child:any)
  {
    let reference:string = localStorage.getItem('friendRequestsForUsers1')//'/friendRequestsForUsers'
    //reference = ref.toString()
    return this.angulardb.database.ref('/friendRequestsForUsers').child('chatUsers')
  }

  retriveData(childref:any)
  {
    console.log(localStorage.getItem("RegistrationMobileNumber"))
    return this.angulardb.database.ref('/finalYearProjectForSrkr').child('RegisteationLogin').child(localStorage.getItem("RegistrationMobileNumber"))
  }
  dataretrive()
  {
    let retriview_List = []
    console.log("dataretrive()")
    var leadsRef = this.angulardb.database.ref('honey/').child('honey');
    leadsRef.get().then((r) => {
      console.log("r : "+ JSON.stringify(r))
    })
    leadsRef.on('child_added',(snapshot) => {
        
        //document.getElementById("UpProgress").innerHTML = snapshot.val().ImageName;
        //document.getElementById("imagedescription").innerHTML = snapshot.val().IMGDESC;
        let obj = snapshot
        console.log()

        // console.log("obj.toJSON() : "+obj.toJSON())
        // retriview_List.push(obj.toJSON())
        // console.log(retriview_List)
        // console.log("snapshot : "+ JSON.stringify(snapshot))
        // retriview_List.push(JSON.stringify(snapshot))
        // console.log("retriview_List : "+retriview_List)
        //console.log(JSON.parse(snapshot))
        //console.log("snapshot1 : "+ JSON.stringify(snapshot.val()))
        const flag = false;
        try
        {
            //document.getElementById("output").src = snapshot.val().ImageURL;
            //const vd = document.createElement('video');
            //vd.src = snapshot.val().ImageURL;
            //document.getElementById("voutput").src = snapshot.val().ImageURL;
            
        }
        catch(err)
        {
            console.log("error bro");
        }

      //Do something with the data
      //alert("image retive successfully"); 
      return snapshot.val().deepu
    });
    
  }
  updateFunctionality()
  {
    
  }
  deleteFunctionality()
  {
    
  }

  postdata(data:any)
  {
    return this.http.post(this.endPath,data)
    //return this.http.get('https://api.zoom.us/v2/users/me/meetings',data)
  }

  codex_multiple_compiler(data:any)
  {
    return this.http.post(this.codex_endpath,data)
  }

  servicemL()
  {
    return '100px';
  }

  getDB()
  {
    return this.http.get(this.database)
  }

  posttoDB(data:any)
  {
    return this.http.post(this.database,data)
  }

  //create
  // addItem(item: Item,key:string): Promise<any> 
  // {
  //   return this.storage.get(key).then((items: Item[])=>{
  //     if(items)
  //     {
  //       return this.storage.set(key, items)
  //     }
  //     else{
  //       return this.storage.set(key, [item])
  //     }
  //   })
  // }

  // //Read
  // getItems(): Promise<Item[]>
  // {
  //   return this.storage.get(ITEMS_KEY)
  // }

  // //Update
  // updateItem(item: Item)
  // {
  //   return this.storage.get(ITEMS_KEY).then((items: Item[])=>{
  //     if(!items || items.length === 0)
  //     {
  //       return null
  //     }
  //     let newItems: Item[] = []
  //     for (let i of items)
  //     {
  //       if(i.id === item.id)
  //       {
  //       newItems.push(item);
  //       }
  //       else
  //       {
      
  //         newItems.push(i)
  //       }
  //     }
  //     return this.storage.set(ITEMS_KEY, newItems)
    
  //   })
  // }

  // //Detete
  // deleteItem(id: number): Promise<Item>
  // {
  //   return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
  //     if(!items || items.length === 0)
  //     {
  //       return null
  //     }
  //     let toKeep = [];

  //     for (let i of items)
  //     {
  //       if(i.id !== id)
  //       {
  //         toKeep.push(i)
  //       }
  //     }
  //     return this.storage.set(ITEMS_KEY, toKeep)
  //   })
  // }
}
