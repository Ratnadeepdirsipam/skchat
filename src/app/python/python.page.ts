import { Component, OnInit } from '@angular/core';
import {FirebaseService} from 'src/app/shared/firebase.service'
import * as $ from 'jquery'

@Component({
  selector: 'app-python',
  templateUrl: './python.page.html',
  styleUrls: ['./python.page.scss'],
})
export class PythonPage implements OnInit {
  boxBlue:any
  textb:any

  constructor(public fbs:FirebaseService) { }

  ngOnInit() {
    this.jqueryMethod()
    this.boxBlue = document.getElementById('bluebox')
    this.boxBlue.style.marginLeft = '10px';
    //this.textb = document.getElementById('textbox')
  }

 
  jqueryMethod()
  {
    //longPress
    $(document).ready(function() {
      $('#moveleft').click(function() {
        $('#textbox').animate({
        'marginLeft' : "-=10px" //moves left
        });
      });
      $('#moveright').on( 'mousedown',()=> {
        $('#textbox').animate({
        'marginLeft' : "+=10px" //moves right
        });
      });
      $('#movedown').click(function() {
        $('#textbox').animate({
        'marginTop' : "+=10px" //moves down
        });
      });
      $('#moveup').click(function() {
        $('#textbox').animate({
        'marginTop' : "-=10px" //moves up
        });
      });
    });
  }
  moveLd = '50'
  moveRd = '50'
  moveTd = '0'
  moveBd = '0'
  mld:any = 50
  mrd:any = 50
  mtd:any = 0
  mbd:any = 0
  marginL:any = '0px'
  marginT:any = '0px'
  ml:any = 0
  mu:any = 0
  moveL()
  {
    this.mld = this.mld + 10

    this.ml = this.ml + 10
    this.boxBlue.style.marginLeft = `${this.ml}`+"px"
    localStorage.setItem("left-right",this.ml)
    // this.marginL = `${localStorage.getItem("left-right")}`+"px"
    // this.marginT = `${localStorage.getItem("top-bottom")}`+"px"
    console.log("margin-left-right : "+this.marginL)
    console.log("margin-top:bottom : "+this.marginT)
    if(this.boxBlue == '0px')
    {
      console.log('collision')
    }
    
  }

  moveR()
  {
    
    this.mrd = this.mrd + 10
    this.ml = this.ml - 10
    this.boxBlue.style.marginLeft = `${this.ml}`+"px"
    localStorage.setItem("left-right",this.ml)
    // this.marginL = `${localStorage.getItem("left-right")}`+"px"
    // this.marginT = `${localStorage.getItem("top-bottom")}`+"px"
    console.log("margin-left-right : "+this.marginL)
    console.log("margin-top:bottom : "+this.marginT)
    if(this.boxBlue == '0px')
    {
      console.log('collision')
    }
   
  }
  moveT()
  {
    this.ml
    this.mu = this.mu - 10
    localStorage.setItem("top-bottom",this.mu)
    this.boxBlue.style.marginTop = `${this.mu}`+"px"
    // this.marginT = `${localStorage.getItem("top-bottom")}`+"px"
    // this.marginL = `${localStorage.getItem("left-right")}`+"px"
    console.log("margin-left-right : "+this.marginL)
    console.log("margin-top:bottom : "+this.marginT)
  }
  moveB()
  {
     this.ml
    this.mu = this.mu + 10
    this.boxBlue.style.marginTop = `${this.mu}`+"px"
    localStorage.setItem("top-bottom",this.mu)
    // this.marginT = `${localStorage.getItem("top-bottom")}`+"px"
    // this.marginL = `${localStorage.getItem("left-right")}`+"px"
    console.log("margin-left-right : "+this.marginL)
    console.log("margin-top:bottom : "+this.marginT)
  }

  counter(i: number) {
    return new Array(i);
}

getPositionXY(element) {
  console.log('fired')
  var rect = element.getBoundingClientRect();
  // document.getElementById('gfg').innerHTML =
  // 'X: ' + rect.x + ', ' + 'Y: ' + rect.y
  console.log('X: ' + rect.x + ', ' + 'Y: ' + rect.y)
}

getColor() {
  return 'white';
}
mLMethod()
{
  this.mL()
}

getColord()
{
  return '150';
}


getImgMarginTop()
{
  return '50px';
}

mLM:Number = 100
mRM:Number = 0
mTM:Number = 0
mBM:Number = 0
mL()
{
  return this.fbs.servicemL
}
mR()
{
  //return 10 +'px';
}
mT()
{
  //return 100 +'px';
}
mB()
{
  //return 10 +'px';
}

multiple_compiler()
{
  let payload = {
    "code":`public class program{
      public static void main(String [] args){
          System.out.println(5+5+6);
        }
      }`,
"language":"java",
"input":""
  }
  console.log("fired")
  this.fbs.codex_multiple_compiler(payload).subscribe((response)=>{
    console.log("response : "+response)
  })
}
}
