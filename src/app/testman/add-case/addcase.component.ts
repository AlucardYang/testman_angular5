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
  bodyParams: Array<any> = [];
  ResponseParams: Array<any> = [];
  apis: SelectItem[];
  runEnvironments: SelectItem[];
  caseName: String = '普通商品详情页获取';
  caseDescription: String = '';
  api: String = '';
  runEnvironment: String = '友邻市集测试环境';
  apiUrl: String = '';
  jsonHeader: any;
  activeIndex: Number = 1;
  isShowBodyParam: Boolean = false;
  isShowResponseParam: Boolean = false;
  isShowResponse: Boolean = false;
  expectResponse: String = '';
  realResponse: String = '';
  @ViewChild('tabView') tabView;
  @ViewChild('runTabView') runTabView;
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

    this.bodyParams = [
      {
        name: '',
        value: '',
        type: 'string',
        default: '否'
      }
    ];

    this.ResponseParams = [
      {
        name: '',
        value: '',
        type: 'string',
        default: '否'
      }
    ];

    this.runEnvironments = [
      { label: '友邻市集测试环境', value: '友邻市集测试环境' },
      { label: '友邻市集开发环境', value: '友邻市集开发环境' },
      { label: '友邻市集回归环境', value: '友邻市集回归环境 ' },
      { label: '猫头鹰冒烟环境', value: '猫头鹰冒烟环境' }
    ];

    this.jsonHeader = '{"Access-Control-Allow-Credentials": true,"Access-Control-Allow-Origin": "http://uiistest.4009515151.com","Content-Type": "application/json;charset=UTF-8","Date": "2018/05/01"}';

    this.expectResponse = '{"cnName": "string","createdAt": "2018-03-15T06:35:38.626Z","createdId": 0,"deptId": "string","email": "string","id": 0,"status": true,"title": "string","updatedAt": "2018-03-15T06:35:38.627Z","updatedId": 0,"userName": "string"}';
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

  // 运行用例
  runCase() {
    this.isShowResponse = true;
  }

  // 获取返回值
  getResponse() {
    this.realResponse = this.expectResponse;
    this.runTabView.tabs[0].selected = false;
    this.runTabView.tabs[1].selected = true;
  }

  // 返回运行操作
  resetResult() {
    this.isShowResponse = false;
    this.expectResponse = '';
  }
}
