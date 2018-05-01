import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { SelectItem } from 'primeng/api';

import { TestManService } from '../../shared/services/testman.service';
import { AddCaseService } from './addcase.service';
import * as $ from 'jquery';

@Component({
  moduleId: module.id,
  templateUrl: './addcase.component.html',
  styleUrls: ['./addcase.component.scss']
})
export class AddCaseComponent implements OnInit {
  urlParams: Array<any> = [];
  regions: SelectItem[];
  apis: SelectItem[];
  caseName: String = '普通商品详情页获取';
  caseDescription: String = '';
  api: String = '';
  region: String = 'blackpearltest.4009515151.com';
  apiUrl: String = '';
  tabType: String = 'Header';
  jsonHeader: any;
  jsonBody: any;
  activeIndex: Number = 0;
  @ViewChild('tabView') tabView;
  constructor(private router: Router, private testManService: TestManService,
    private addApiService: AddCaseService) {

  }

  ngOnInit() {
    this.apis = [
      { label: '', value: '' },
      { label: '友邻商品详情接口', value: '/interfaces/goods/info/{goods_id}' },
      { label: '友邻市集创建订单接口', value: '/interfaces/goods/create/{goods_id}/{order_id}' },
      { label: '友邻市集登陆接口', value: '/interfaces/goods/login/{user_id}' },
      { label: '友邻市集注册接口', value: '/interfaces/goods/sign/{sign_up_id}/{user_id}' }
    ];
    this.regions = [
      { label: 'blackpearltest.4009515151.com', value: 'blackpearltest.4009515151.com' },
      { label: 'www.baidu.com', value: 'www.baidu.com' },
      { label: 'www.google.com', value: 'www.google.com' }
    ];

    this.jsonHeader = '{"Access-Control-Allow-Credentials": true,"Access-Control-Allow-Origin": "http://uiistest.4009515151.com","Content-Type": "application/json;charset=UTF-8","Date": "2018/05/01"}';
    this.jsonBody = '{"code":0,"result":{"goods_id":"176","head_imgs":["http://odso6i1fb.bkt.clouddn.com/2018/01/16/m30puac9k1va68gy.jpg","http://odso6i1fb.bkt.clouddn.com/2018/01/16/3r1lrzbw0otb92vn.jpg","http://odso6i1fb.bkt.clouddn.com/2018/01/16/wz5081bkxko60s3.JPG"],"name":"吃的","title":"吃的吃的吃的吃的","min_price":100,"max_price":100,"end_time":1559376360000,"sunshine_community":true,"sunshine_price":1,"extend_product":false,"specs":[],"products":[{"product_id":"382","price":100,"stock":1000,"property":[],"limit_buy_num":null}],"shiping":0,"features":[],"introduce_goods":{"title":"商品介绍","content":"吃的吃的吃的吃的吃的吃的吃的吃的吃的吃的","img":["http://odso6i1fb.bkt.clouddn.com/2018/01/16/3i75p5md7wtvdhs1.jpg"]},"introduce_special":{"title":null,"content":null,"img":null},"supplier":{"supplier_name":"固定分类的商家","supplier_icon":"http://odso6i1fb.bkt.clouddn.com/2018/01/08/0ei047yddljuj0tr.png","supplier_id":25},"activity":{"id":309,"name":"23424","type":"GROUPON","price":99,"stock":null,"limit_buy_num":1,"curr_time":1524620535678,"start_time":1517205480000,"end_time":1524981480000,"groupon_num":2,"groupon_paid_num":0,"paid_user_num":0,"source":"","introduction":"","activity_img_url":null,"activity_status":null,"unpaid":false,"over":true},"nationwide_sales":1,"snap_id":238,"supplier_id":25,"category_id":640,"free_shipping":null},"message":null}';

  }

  // 获取接口名称参数
  getParamInApiName() {
    let url = this.apiUrl;
    if (url.indexOf('http') !== -1) {
      if (url.indexOf('?') !== -1) {
        this.urlParams = [];
        url = url.slice(url.indexOf('//') + 2, url.indexOf('?'));
        this.GetRequest(this.apiUrl);
      } else {
        url = url.slice(url.indexOf('//') + 2);
      }
      url = url.slice(url.indexOf('/'));
      this.apiUrl = url;
    }
    let ApiUrls: any = [];
    ApiUrls = url.split('/');
    ApiUrls.forEach(element => {
      if (element.match(/{(\w+)}/g)) {
        const name = element.slice(1, element.length - 1);
        if (this.urlParams.filter(item => item['name'] === name).length === 0) {
          const obj = new Object();
          obj['name'] = element.slice(1, element.length - 1);
          obj['value'] = '';
          this.urlParams.push(obj);
        }
      }
    });
  }

  // 获取路径?后面key和value值
  GetRequest(url) {
    if (url.indexOf('?') !== -1) {
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
  }

  // 切换接口名称
  changeApiName(event) {
    this.apiUrl = event['value'];
    this.urlParams = [];
    this.getParamInApiName();
  }
}
