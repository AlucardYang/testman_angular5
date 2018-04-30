import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { SelectItem } from 'primeng/api';

import { TestManService } from '../../shared/services/testman.service';
import { AddApiService } from './addapi.service';

@Component({
  moduleId: module.id,
  templateUrl: './addapi.component.html',
  styleUrls: ['./addapi.component.scss']
})
export class AddApiComponent implements OnInit {
  urlParams: Array<any> = [];
  regions: SelectItem[];
  apiMethods: SelectItem[];
  apiName: String = '/interfaces/goods/info/{good_id}/{good_id1}';
  apiDescription: String = '';
  apiMethod: String = 'GET';
  region: String = 'blackpearltest.4009515151.com';
  apiUrl: String = 'http://blackpearltest.4009515151.com/interfaces/goods/info/152/344?project_code=44190010';
  tabType: String = 'Header';
  jsonHeader: any;
  jsonBody: any;
  jsonResponse: any;
  apiAddress = '12.32.23.23:8080';
  isShowResponse: Boolean = false;
  constructor(private router: Router, private testManService: TestManService, private addApiService: AddApiService) {

  }

  ngOnInit() {
    this.apiMethods = this.testManService.apiMethods;
    this.regions = [
      { label: 'blackpearltest.4009515151.com', value: 'blackpearltest.4009515151.com' },
      { label: 'www.baidu.com', value: 'www.baidu.com' },
      { label: 'www.google.com', value: 'www.google.com' }
    ];

    this.jsonBody = '{"code":0,"result":{"goods_id":"176","head_imgs":["http://odso6i1fb.bkt.clouddn.com/2018/01/16/m30puac9k1va68gy.jpg","http://odso6i1fb.bkt.clouddn.com/2018/01/16/3r1lrzbw0otb92vn.jpg","http://odso6i1fb.bkt.clouddn.com/2018/01/16/wz5081bkxko60s3.JPG"],"name":"吃的","title":"吃的吃的吃的吃的","min_price":100,"max_price":100,"end_time":1559376360000,"sunshine_community":true,"sunshine_price":1,"extend_product":false,"specs":[],"products":[{"product_id":"382","price":100,"stock":1000,"property":[],"limit_buy_num":null}],"shiping":0,"features":[],"introduce_goods":{"title":"商品介绍","content":"吃的吃的吃的吃的吃的吃的吃的吃的吃的吃的","img":["http://odso6i1fb.bkt.clouddn.com/2018/01/16/3i75p5md7wtvdhs1.jpg"]},"introduce_special":{"title":null,"content":null,"img":null},"supplier":{"supplier_name":"固定分类的商家","supplier_icon":"http://odso6i1fb.bkt.clouddn.com/2018/01/08/0ei047yddljuj0tr.png","supplier_id":25},"activity":{"id":309,"name":"23424","type":"GROUPON","price":99,"stock":null,"limit_buy_num":1,"curr_time":1524620535678,"start_time":1517205480000,"end_time":1524981480000,"groupon_num":2,"groupon_paid_num":0,"paid_user_num":0,"source":"","introduction":"","activity_img_url":null,"activity_status":null,"unpaid":false,"over":true},"nationwide_sales":1,"snap_id":238,"supplier_id":25,"category_id":640,"free_shipping":null},"message":null}';

    this.getParamInApiName();
  }

  // 获取接口名称参数
  getParamInApiName() {
    this.urlParams = [];
    const apiNames = this.apiName.split('/');
    let ApiUrls: any = [];
    if (this.apiUrl.indexOf('?') !== -1) {
      ApiUrls = this.apiUrl.slice(this.apiUrl.indexOf('//') + 2, this.apiUrl.indexOf('?')).split('/');
    } else {
      ApiUrls = this.apiUrl.slice(this.apiUrl.indexOf('//') + 2).split('/');
    }
    apiNames.forEach((element, index) => {
      if (element.match(/{(\w+)}/g)) {
        const obj = new Object();
        obj['name'] = element.slice(1, element.length - 1);
        obj['value'] = ApiUrls[index];
        this.urlParams.push(obj);
      }
    });
    if (this.apiUrl.indexOf('?') !== -1) {
      this.GetRequest(this.apiUrl);
    }
  }

  // 获取路径?后面key和value值
  GetRequest(url) {
    const theRequest = new Object();
    const str = url.substr(url.indexOf('?') + 1);
    const strs = str.split('&');
    strs.forEach((element, index) => {
      const obj = new Object();
      obj['name'] = element.split('=')[0];
      obj['value'] = element.split('=')[1];
      this.urlParams.push(obj);
    });
  }

  // 切换域名
  changeRegion(event) {
    if (this.apiUrl) {
      const reg = /(\/\/[^\/\/]*\/)/g;
      this.apiUrl = this.apiUrl.replace(reg, '//' + event['value'] + '/');
    }
  }

  // 运行接口
  runApi() {
    this.jsonResponse = '{"code":"0","is_right":"1","result":{"id":"25","name":"固定分类的商家","desc":"固定分类的商家固定分类的商家","contact":"啊哈哈哈","contact_number":"13450367912","city_company":null,"create_time":"2018-01-0810:44:31","icon":"http://odso6i1fb.bkt.clouddn.com/2018/01/08/0ei047yddljuj0tr.png","free_shipping":null},"message":null}';
    this.isShowResponse = true;
    this.tabType = 'Response';
    setTimeout(() => {
      const href = window.location.href;
      if (href.indexOf('#') !== -1) {
        window.location.href = href.slice(0, href.indexOf('#')) + '#headerBodyContent';
      } else {
        window.location.href = href + '#headerBodyContent';
      }
    });
  }
}
