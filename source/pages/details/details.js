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
  }
  onMyShow() {
    var that = this;
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
Page(body)