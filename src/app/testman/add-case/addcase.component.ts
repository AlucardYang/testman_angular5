import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { TestManService } from '../../shared/services/testman.service';
import { AddCaseService } from './addcase.service';

@Component({
  moduleId: module.id,
  templateUrl: './addcase.component.html',
  styleUrls: ['./addcase.component.scss']
})
export class AddCaseComponent implements OnInit {
  urlParams: Array<any> = [];
  regions: SelectItem[];
  apiMethods: SelectItem[];
  apiName: String = '/interfaces/goods/info/{good_id}/{good_id1}';
  apiDescription: String = '';
  apiMethod: String = 'GET';
  region: String = 'blackpearltest.4009515151.com';
  apiUrl: String = 'http://blackpearltest.4009515151.com/interfaces/goods/info/152/344?project_code=44190010';
  apiAddress = '12.32.23.23:8080';
  constructor(private testManService: TestManService, private addCaseService: AddCaseService) {

  }

  ngOnInit() {
    this.apiMethods = this.testManService.apiMethods;
    this.regions = [
      { label: 'blackpearltest.4009515151.com', value: 'blackpearltest.4009515151.com' },
      { label: 'www.baidu.com', value: 'www.baidu.com' },
      { label: 'www.google.com', value: 'www.google.com' }
    ];
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

  }
}
