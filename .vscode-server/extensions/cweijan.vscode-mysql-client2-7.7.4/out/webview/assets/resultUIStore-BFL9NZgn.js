import{l as u,aG as a,q as l}from"./app-CSosM33B.js";import{D as n}from"./constants-BpYHMiwN.js";import{b as o}from"./wrapper-dg0Nafb1.js";import{i as c}from"./viewUtil-C7po9rYW.js";const h=u("result",{state:()=>({data:[],backupData:[],isArrayResult:!1,fields:[],dbType:null,costTime:0,sql:"",transId:null,hasTruncate:!1,readonly:!1,reverseData:!1,columnList:null,columnTypeMap:null,database:null,table:null,withDot:null,tableCount:null,pageNum:null,pageSize:null}),getters:{noTable(e){return e.tableCount!=1},primaryKeyList(e){var t;return[n.ES,n.MONGO_DB].includes(e.dbType)?[{name:"_id",type:"text"}]:(t=e.columnList)==null?void 0:t.filter(s=>s.isPrimary)},hasPK(){var e;return(e=this.primaryKeyList)==null?void 0:e.length},isNoSQL(){return["ElasticSearch","MongoDB"].includes(this.dbType)}},actions:{getTypeByField(e){var s;if(this.dbType==n.ES&&e.name=="_id")return"text";const t=(s=this.columnTypeMap)==null?void 0:s[e.name];if(t){const{type:r,originType:m,maximum_length:d}=t;if(c(r)&&d>65535)return m}return t==null?void 0:t.type}}});function w(e,t){return e?h().withDot?o(e,t):e.split(".").map(r=>o(r,t)).join("."):null}class f{constructor(){this.commands=[],this.index=0}push(t){this.commands.push(t),this.index=this.commands.length-1}previous(){if(this.commands.length!=0){if(this.index--<0){this.index=0;return}return this.commands[this.index]}}next(){if(this.commands.length!=0){if(this.index++>=this.commands.length){this.index=this.commands.length-1;return}return this.commands[this.index]}}}const i=h(),S=u("UI",{state:()=>({showSQLPanel:!1,history:new f,state:{...a},user:null,viewColumn:2,viewType:"Default",info:{sql:null,message:null,error:!1},tableStatus:{remainHeight:0,doNotClear:!1,loadingTimeout:null,rawColumnWidth:500},table:{search:"",loading:!1,start:new Date().getTime(),loadingTimer:null,widthItem:{},sort:{ascIndex:null,descIndex:null},sortKeys:[],filterKeys:{},expandKeys:[],selectedRows:[],selectedRowKeys:[]},page:{pageNum:1,pageSize:-1,total:0},aggregate:{sum:0,avg:0,min:0,max:0,count:0},dialog:{importVisible:!1,exportVisible:!1,detailScope:null,detailVisible:!1},toolbar:{sql:null,showSaveBtn:!1,saveLoading:!1,filter:{},showColumns:[]},deleteConfirm:{sql:"",visible:!1,skipForeignCheck:!1}}),getters:{hasResult(){var e;return((e=i.fields)==null?void 0:e.length)>0},notAllowUpdate(){return i.tableCount!=1||i.readonly||!this.hasResult},notAllowUpdateLevel2(){return this.notAllowUpdate||this.reverseData},isSplitView(){return this.viewColumn>=2},reverseData(){return this.viewType=="Reverse"}},actions:{checkShowSQLPanel(){var e,t,s;if(this.isSplitView&&([n.ES].includes(i.dbType)||window.innerHeight<500||((s=(t=(e=this.toolbar)==null?void 0:e.sql)==null?void 0:t.match(/\n/g))==null?void 0:s.length)>1))return this.showSQLPanel=!1;this.showSQLPanel=!0},resetConfig(){this.viewType="Default";for(const e of Object.keys(a))e!="resetFilter"&&(this.state[e]=a[e],l.emit("upState",{key:e,value:a[e],ignore:!0}));document.querySelector(".codemirror-container").style.height="40px"},closeConfig(){l.emitImmediately("closeConfig")},refresh(){this.execute(i.sql)},execute(e,t={}){e&&(l.emit("executeSQL",{sql:e,...t}),this.table.start=new Date().getTime(),this.queueLoading())},queueLoading(){this.tableStatus.doNotClear||(this.info.message=null),clearTimeout(this.tableStatus.loadingTimeout),this.tableStatus.loadingTimeout=setTimeout(()=>{this.table.loading=!0,i.costTime=0,clearInterval(this.table.loadingTimer),this.table.loadingTimer=setInterval(()=>{i.costTime=new Date().getTime()-this.table.start},79)},100)},upState(e,t=this.state[e]){l.emit("upState",{key:e,value:t})}}});export{h as a,S as u,w};