import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { SelectItem } from 'primeng/api';

import { TestManService } from '../../shared/services/testman.service';
import { CaseManageService } from './casemanage.service';

@Component({
  moduleId: module.id,
  templateUrl: './casemanage.component.html',
  styleUrls: ['./casemanage.component.scss']
})
export class CaseManageComponent implements OnInit {
  cteator: any = '全部';
  cteators: SelectItem[];
  updator: any = '全部';
  updators: SelectItem[];
  sort: any = '全部';
  sorts: SelectItem[];
  state: any = '全部';
  states: SelectItem[];
  testCases: Array<any> = [];
  allTestCases: Array<any> = [];
  updateDate: Date = new Date();
  searchText: any = '';
  @ViewChild('dataTable') dataTable;
  constructor(private router: Router, private testManService: TestManService) {

  }

  ngOnInit() {
    this.cteators = this.testManService.members;
    this.updators = this.testManService.members;
    this.sorts = this.testManService.sorts;
    this.states = this.testManService.states;

    this.testCases = [
      {
        num: 1,
        apiName: '登陆友邻市集',
        caseName: '普通商品详情页获取',
        sort: '冒烟测试',
        state: '有效',
        creator: '郑婷婷',
        updator: '黎律',
        updateTime: '2018/03/01'
      }, {
        num: 2,
        apiName: '商家列表接口',
        caseName: '团购商品详情页获取',
        sort: '功能测试',
        state: '无效',
        creator: '胡媛洁',
        updator: '许春洋',
        updateTime: '2018/03/15'
      }, {
        num: 3,
        apiName: '登陆友邻市集',
        caseName: '老用户登陆友邻市集',
        sort: '回归测试',
        state: '有效',
        creator: '黎律',
        updator: '许春洋',
        updateTime: '2018/04/15'
      }, {
        num: 4,
        apiName: '购物车',
        caseName: '购物车用例',
        sort: '预发布测试',
        state: '有效',
        creator: '郑婷婷',
        updator: '胡媛洁',
        updateTime: '2018/04/20'
      }, {
        num: 5,
        apiName: '登陆友邻市集1',
        caseName: '普通商品详情页获取1',
        sort: '预发布测试',
        state: '有效',
        creator: '许春洋',
        updator: '黎律',
        updateTime: '2018/04/21'
      }, {
        num: 6,
        apiName: '商家列表接口1',
        caseName: '团购商品详情页获取1',
        sort: '冒烟测试',
        state: '无效',
        creator: '许春洋',
        updator: '胡媛洁',
        updateTime: '2018/04/23'
      }, {
        num: 7,
        apiName: '登陆友邻市集1',
        caseName: '老用户登陆友邻市集1',
        sort: '回归测试',
        state: '有效',
        creator: '黎律',
        updator: '郑婷婷',
        updateTime: '2018/04/25'
      }, {
        num: 8,
        apiName: '购物车1',
        caseName: '购物车用例1',
        sort: '预发布测试',
        state: '有效',
        creator: '郑婷婷',
        updator: '胡媛洁',
        updateTime: '2018/04/30'
      }
    ];
    this.allTestCases = JSON.parse(JSON.stringify(this.testCases));
  }

  // 过滤
  onFilter() {
    let testCases = this.allTestCases;
    // 选择创建人
    if (this.cteator !== '全部') {
      testCases = testCases.filter(item => item['creator'] === this.cteator);
    }
    // 选择更新人
    if (this.updator !== '全部') {
      testCases = testCases.filter(item => item['updator'] === this.updator);
    }
    // 选择分类
    if (this.sort !== '全部') {
      testCases = testCases.filter(item => item['sort'] === this.sort);
    }
    // 选择状态
    if (this.state !== '全部') {
      testCases = testCases.filter(item => item['state'] === this.state);
    }
    // 搜索关键字
    if (this.searchText) {
      testCases = testCases.filter(item => (item['apiName'].indexOf(this.searchText) !== -1) || (item['caseName'].indexOf(this.searchText) !== -1));
    }
    // 选择日期
    if (this.updateDate && (this.updateDate[0] || this.updateDate[1])) {
      let minDate, maxDate, nowDate;
      nowDate = new Date().getTime();
      minDate = this.updateDate[0] ? new Date(this.updateDate[0]).getTime() : 0;
      maxDate = this.updateDate[1] ? new Date(this.updateDate[1]).getTime() : nowDate;
      testCases = testCases.filter(item => (new Date(item['updateTime']).getTime() >= minDate)
        && (new Date(item['updateTime']).getTime() <= maxDate));
    }
    this.testCases = testCases;
    this.dataTable.value = testCases;
  }

  // 搜索
  onSearch(event) {
    this.searchText = event;
    this.onFilter();
  }

  // 删除用例
  deleteCase(index) {
    this.testCases.splice(index, 1);
    this.dataTable.value = this.testCases;
    console.log(this.testCases);
  }

}
