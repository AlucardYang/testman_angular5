import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { SelectItem } from 'primeng/api';

import { ApiManageService } from './apimanage.service';

@Component({
  moduleId: module.id,
  templateUrl: './apimanage.component.html',
  styleUrls: ['./apimanage.component.scss']
})
export class ApiManageComponent implements OnInit {
  cteator: any = '全部';
  cteators: SelectItem[];
  updator: any = '全部';
  updators: SelectItem[];
  region: any = '全部';
  regions: SelectItem[];
  testApis: Array<any> = [];
  allTestApis: Array<any> = [];
  updateDate: Date = new Date();
  searchText: any = '';
  @ViewChild('dataTable') dataTable;
  constructor(private router: Router, private apiManageService: ApiManageService) {

  }

  ngOnInit() {
    this.cteators = this.apiManageService.member;
    this.updators = this.apiManageService.member;
    this.regions = [
      { label: '全部', value: '全部' },
      { label: 'blackpearltest.4009515151.com', value: 'blackpearltest.4009515151.com' },
      { label: 'www.baidu.com', value: 'www.baidu.com' },
      { label: 'www.google.com', value: 'www.google.com' },
      { label: 'www.sina.com', value: 'www.sina.com' }
    ];

    this.testApis = [
      {
        num: 1,
        apiName: '登陆友邻市集',
        url: 'interfaces/goods/info',
        region: 'blackpearltest.4009515151.com',
        creator: '郑婷婷',
        updator: '黎律',
        updateTime: '2018/03/01'
      }, {
        num: 2,
        apiName: '商家列表接口',
        url: 'supplier/detail',
        region: 'www.baidu.com',
        creator: '胡媛洁',
        updator: '许春洋',
        updateTime: '2018/03/15'
      }, {
        num: 3,
        apiName: '登陆友邻市集',
        url: '/admin/login?request_uri',
        region: 'www.google.com',
        creator: '黎律',
        updator: '许春洋',
        updateTime: '2018/04/15'
      }, {
        num: 4,
        apiName: '购物车',
        url: '/shop/list',
        region: 'www.baidu.com',
        creator: '郑婷婷',
        updator: '胡媛洁',
        updateTime: '2018/04/20'
      }, {
        num: 5,
        apiName: '登陆友邻市集1',
        url: 'interfaces/goods/info',
        region: 'blackpearltest.4009515151.com',
        creator: '许春洋',
        updator: '黎律',
        updateTime: '2018/04/21'
      }, {
        num: 6,
        apiName: '商家列表接口1',
        url: 'supplier/detail',
        region: 'www.baidu.com',
        creator: '许春洋',
        updator: '胡媛洁',
        updateTime: '2018/04/23'
      }, {
        num: 7,
        apiName: '登陆友邻市集1',
        url: '/admin/login?request_uri',
        region: 'www.google.com',
        creator: '黎律',
        updator: '郑婷婷',
        updateTime: '2018/04/25'
      }, {
        num: 8,
        apiName: '购物车1',
        url: '/shop/list',
        region: 'www.sina.com',
        creator: '郑婷婷',
        updator: '胡媛洁',
        updateTime: '2018/04/30'
      }
    ];
    this.allTestApis = JSON.parse(JSON.stringify(this.testApis));
  }

  // 过滤
  onFilter() {
    let testApis = this.allTestApis;
    // 选择创建人
    if (this.cteator !== '全部') {
      testApis = testApis.filter(item => item['creator'] === this.cteator);
    }
    // 选择更新人
    if (this.updator !== '全部') {
      testApis = testApis.filter(item => item['updator'] === this.updator);
    }
    // 选择域
    if (this.region !== '全部') {
      testApis = testApis.filter(item => item['region'] === this.region);
    }
    // 搜索关键字
    if (this.searchText) {
      testApis = testApis.filter(item => (item['apiName'].indexOf(this.searchText) !== -1) || (item['url'].indexOf(this.searchText) !== -1));
    }
    // 选择日期
    if (this.updateDate && (this.updateDate[0] || this.updateDate[1])) {
      let minDate, maxDate, nowDate;
      nowDate = new Date().getTime();
      minDate = this.updateDate[0] ? new Date(this.updateDate[0]).getTime() : 0;
      maxDate = this.updateDate[1] ? new Date(this.updateDate[1]).getTime() : nowDate;
      testApis = testApis.filter(item => (new Date(item['updateTime']).getTime() >= minDate)
        && (new Date(item['updateTime']).getTime() <= maxDate));
    }
    this.testApis = testApis;
    this.dataTable.value = testApis;
  }

  // 搜索
  onSearch(event) {
    this.searchText = event;
    this.onFilter();
  }

  // 清除时间过滤
  onClear() {
    this.dataTable.value = this.allTestApis;
  }

  deleteApi(index) {
    this.testApis.splice(index, 1);
    this.dataTable.value = this.testApis;
    console.log(this.testApis);
  }

}
