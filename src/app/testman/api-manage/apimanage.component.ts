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
        region: 'www.sina.com',
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
        updateTime: '2018/03/01'
      }, {
        num: 6,
        apiName: '商家列表接口1',
        url: 'supplier/detail',
        region: 'www.baidu.com',
        creator: '许春洋',
        updator: '胡媛洁',
        updateTime: '2018/03/15'
      }, {
        num: 7,
        apiName: '登陆友邻市集1',
        url: '/admin/login?request_uri',
        region: 'www.google.com',
        creator: '黎律',
        updator: '郑婷婷',
        updateTime: '2018/04/15'
      }, {
        num: 8,
        apiName: '购物车1',
        url: '/shop/list',
        region: 'www.sina.com',
        creator: '郑婷婷',
        updator: '胡媛洁',
        updateTime: '2018/04/20'
      }
    ];
  }

  // 过滤创建人
  filterCreator(event) {
    if (event) {
      const testApis = this.testApis.filter(item => item['creator'] === event['value']);
      this.dataTable.value = testApis;
    }
  }

  // 过滤更新人
  filterUpdator(event) {
    if (event) {
      const testApis = this.testApis.filter(item => item['updator'] === event['value']);
      this.dataTable.value = testApis;
    }
  }

  // 过滤域
  filterRegion(event) {
    if (event) {
      const testApis = this.testApis.filter(item => item['region'] === event['value']);
      this.dataTable.value = testApis;
    }
  }

  // 选择日期
  onSelectDate() {
    console.log(this.updateDate);
  }

  // 关键字搜索
  onSearch(event) {
    const testApis = this.testApis.filter(item => (item['apiName'].indexOf(event) !== -1) || (item['url'].indexOf(event) !== -1));
    this.dataTable.value = testApis;
  }

  deleteApi(index) {
    this.testApis.splice(index, 1);
    this.dataTable.value = this.testApis;
    console.log(this.testApis);
  }

}
