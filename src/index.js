import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let curDate=new Date();
curDate= curDate.getHours();
let grating='';
let cssColor={}



if(curDate>=1 && curDate<12){
grating='good Morning';
cssColor.color="green";}
else if (curDate>12 && curDate<23) {
  grating='Goof After Noon'
  cssColor.color="Orange";
} else {
  grating='good Night'
  cssColor.color="Black";
}


ReactDOM.render(<><div><h1>Hello Sir,<samp style={cssColor}>{grating}</samp>  </h1></div></>,document.getElementById("root"));