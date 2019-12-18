// pages/details/details.js
import { AppBase } from "../../appbase";
import { ApiConfig } from "../../apis/apiconfig";
import { InstApi } from "../../apis/inst.api.js";

class Content extends AppBase {
  constructor() {
    super();
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
    
    if (options.tps != undefined && options.tps != null){
      this.Base.setMyData({ tps: options.tps, barcode: options.barcode})
    }else{
      var jsondata = JSON.parse(options.json);
      this.Base.setMyData({ jsondata });
    }
   // this.Base.setMyData({ show:0})
  }
  onMyShow() {
    var that = this;
  }
  copy(e){
    var id=e.currentTarget.id;
    var text=e.currentTarget.dataset.text;
    console.log(text);
   this.Base.setMyData({show:id});
    wx.setClipboardData({
      data: text,
    })

  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow; 
body.copy = content.copy;
Page(body)