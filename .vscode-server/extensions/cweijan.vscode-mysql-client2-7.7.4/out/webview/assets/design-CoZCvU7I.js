import{l as ln,a as Te,r as F,z as Ce,A as se,c as P,I as _e,q as f,C as re,o as A,e as w,f as M,g as E,D as $,$ as T,j as h,h as s,Z as W,E as m,G as y,t as g,a1 as le,F as J,x as ae,M as sn,N as Le,J as on,K as En,y as We,L as cn,n as Ve}from"./app-CSosM33B.js";import{c as Me,s as Ge,e as be}from"./notify-B3uo9RRx.js";import{D as R}from"./constants-BpYHMiwN.js";import{a as ye}from"./viewUtil-C7po9rYW.js";import{c as Se}from"./codemirror-CKhW-kxh.js";import{E as $e,a as Ie}from"./index-CjUXJ7DM.js";import{E as qe}from"./index-DpC6it7c.js";import{E as Be,a as ve}from"./index-DT1kZQY9.js";import{E as he,a as we}from"./index-CcxL_kiJ.js";import{E as fe}from"./index-ZTo4Eioy.js";import{v as Oe}from"./directive-BTMhizBW.js";import{E as De}from"./index-Dig24fm9.js";import{A as Ye}from"./arrayUtil-1UUyiO7U.js";import{E as un}from"./index-BLzOhdyJ.js";import{S as H}from"./stringBuilder-DUZQE8vS.js";import{g as ee,c as G,a as mn,i as Tn,b as ie,E as _n}from"./wrapper-dg0Nafb1.js";import{l as dn}from"./common_view_utils-COSTzBo1.js";import"./focus-trap-oW3Oz0pJ.js";import"./validator-DN1lxiX_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B69GrENz.js";import"./index-CwAalyKH.js";import"./isUndefined-DCTLXrZ8.js";import"./_baseIteratee-CcDVmX61.js";import"./isEqual-B2A1MZL7.js";import"./merge-_9lU3S1-.js";import"./_initCloneObject-C1N_ki7v.js";import"./isArrayLikeObject-C0bNowXW.js";import"./index-3vLwHw63.js";import"./index-D5RJZE9_.js";import"./_baseFindIndex-D7XfJLKM.js";import"./castArray-84ZwkcTC.js";import"./clone-CdkeVV7A.js";import"./_baseClone-B546CWjF.js";import"./objectUtil-Z6JRxuBJ.js";const de=ln("design",{state:()=>({schema:"",table:"",columns:[],tableMeta:{},dbType:R.MYSQL,dialect:null,remainHeight:0,activePanel:"column"}),getters:{canAlterTable(c){return![R.SQLITE].includes(c.dbType)},supportForeignKey(c){return![R.CLICKHOUSE].includes(c.dbType)&&(!c.tableMeta.engine||c.tableMeta.engine!="MyISAM")},supportCheck(c){return![R.SQLITE,R.DUCK_DB,R.CLICKHOUSE,R.SNOWFLAKE].includes(c.dbType)},supportIndex(c){return![R.SNOWFLAKE].includes(c.dbType)}},actions:{updateDBType(c){this.dbType=c},updateFullInfo(c){for(const e in c)this[e]=c[e]}}}),An={class:"design-toolbar"},Nn={class:"text-center"},Rn=M("br",null,null,-1),Cn=M("br",null,null,-1),Sn=Te({__name:"IndexPanel",setup(c){const e=F([]),n=F([]),t=F(!0),r=de(),{dbType:a,dialect:l,remainHeight:o,activePanel:i}=Ce(r),u=se({visible:!1,loading:!1,column:null,columns:null,type:null}),b=P(()=>{var C;return((C=u.columns)==null?void 0:C.length)>0?l.value.newIndex({...u}):""});_e(()=>{f.on("designMetaNext",()=>{u.visible=!1,n.value=l.value.indexTypes(),O()}).on("indexes",C=>{e.value=C,t.value=!1}).on("success",C=>{C=="index"&&(u.loading=!1,u.visible=!1,O())}).on("error",()=>{u.loading=!1})});const O=()=>{f.emit("indexes"),t.value=!0},N=()=>{u.visible=!0,u.loading=!1,u.columns=null,u.type="INDEX"},v=C=>l.value.formatIndexType(C),k=()=>{u.loading=!0,f.emit("execute",{type:"index",sql:b.value})},d=C=>{Me(T("design.deleteIndexConfirm")).then(()=>{f.emit("execute",{type:"index",sql:l.value.dropIndex(C.index_name)})})};return(C,B)=>{const Y=re("vsc-button"),I=$e,D=qe,q=Ie,V=re("RedMark"),j=Be,ne=ve,K=he,x=we,z=fe,ue=Oe;return A(),w("div",null,[M("div",An,[["ClickHouse"].includes(E(a))?h("",!0):(A(),$(Y,{key:0,type:"icon",icon:"codicon-add text-base",title:E(T)("common.new"),onClick:N},null,8,["title"])),s(Y,{type:"icon",icon:"codicon-refresh text-base",title:E(T)("common.refresh"),onClick:O},null,8,["title"])]),E(i)=="index"?W((A(),$(q,{key:0,data:e.value,height:E(o),border:""},{default:m(()=>[s(I,{resizable:!0,align:"center",prop:"index_name",label:E(T)("design.indexName"),width:"200"},null,8,["label"]),s(I,{resizable:!0,align:"center",prop:"column_name",label:E(T)("design.column"),width:"200"},null,8,["label"]),s(I,{align:"center",prop:"isUnique",label:E(T)("design.unique"),width:"200"},{default:m(({row:U})=>[s(D,{disabled:"","model-value":E(ye)(U.isUnique)},null,8,["model-value"])]),_:1},8,["label"]),s(I,{resizable:!0,align:"center",prop:"index_type",label:E(T)("common.type"),width:"200"},{default:m(({row:U})=>[y(g(v(U)),1)]),_:1},8,["label"]),["PostgreSQL"].includes(E(a))?(A(),$(I,{key:0,resizable:!0,align:"center",prop:"index_method",label:E(T)("design.indexMethod"),width:"200"},null,8,["label"])):h("",!0),["ClickHouse"].includes(E(a))?h("",!0):(A(),$(I,{key:1,label:E(T)("design.operation"),width:"120"},{default:m(({row:U})=>[M("div",Nn,[s(Y,{type:"icon",icon:"el-icon-delete",style:{color:"#f56c6c"},title:"delete",onClick:me=>d(U)},null,8,["onClick"])])]),_:1},8,["label"]))]),_:1},8,["data","height"])),[[ue,t.value]]):h("",!0),s(z,{modelValue:u.visible,"onUpdate:modelValue":B[3]||(B[3]=U=>u.visible=U),title:E(T)("design.newIndex"),width:"520px",closeOnClickModal:!1,center:""},{footer:m(()=>[s(Y,{type:"secondary",onClick:B[2]||(B[2]=U=>u.visible=!1)},{default:m(()=>[y(g(E(T)("common.cancel")),1)]),_:1}),s(Y,{type:"primary",loading:u.loading,onClick:k},{default:m(()=>[y(g(E(T)("common.ok")),1)]),_:1},8,["loading"]),Rn,y(),Cn,W(s(Se,{ref:"cmEditor",value:b.value,readonly:!0},null,8,["value"]),[[le,b.value]])]),default:m(()=>[s(x,{inline:!0,"label-width":"75px",size:"small"},{default:m(()=>[s(K,null,{label:m(()=>[s(V),y(g(E(T)("design.column")),1)]),default:m(()=>[s(ne,{modelValue:u.columns,"onUpdate:modelValue":B[0]||(B[0]=U=>u.columns=U),size:"small",filterable:"",multiple:"",class:"!w-[150px]"},{default:m(()=>[(A(!0),w(J,null,ae(E(r).columns,U=>(A(),$(j,{key:U.name,label:U.name,value:U.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(K,null,{label:m(()=>[s(V),y(g(E(T)("common.type")),1)]),default:m(()=>[s(ne,{modelValue:u.type,"onUpdate:modelValue":B[1]||(B[1]=U=>u.type=U),size:"small",class:"!w-[110px]"},{default:m(()=>[(A(!0),w(J,null,ae(n.value,(U,me)=>(A(),$(j,{key:me,label:U.label,value:U.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","title"])])}}}),On={ref:"infoPanel",class:"design-toolbar"},pn=Te({__name:"DDL",setup(c){const e=de(),n=F(!1),t=F("");_e(()=>{f.on("designMetaNext",()=>{f.emit("ddl")}).on("ddl",({ddl:a})=>{n.value=!1,t.value=a})});const r=()=>{navigator.clipboard.writeText(t.value),Ge("Copy DDL success!")};return(a,l)=>{const o=re("vsc-button"),i=Oe;return W((A(),w("div",null,[M("div",On,[s(o,{type:"icon",icon:"el-icon-document-copy text-base",title:"Copy DDL",onClick:r}),s(o,{type:"icon",icon:"codicon-refresh text-base",title:a.$t("common.refresh"),onClick:l[0]||(l[0]=u=>E(f).emit("ddl"))},null,8,["title"])],512),E(e).activePanel=="ddl"?(A(),$(Se,{key:0,dbType:E(e).dbType,value:t.value,readonly:!0,style:sn({maxHeight:E(e).remainHeight+"px",overflow:"auto"}),class:"large"},null,8,["dbType","value","style"])):h("",!0)])),[[i,n.value]])}}}),Ln={key:0,class:"design-toolbar"},bn={class:"text-center"},Mn=M("br",null,null,-1),$n=M("br",null,null,-1),In=M("br",null,null,-1),hn=Te({__name:"ForeignKey",setup(c){const e=de(),{dialect:n,canAlterTable:t,remainHeight:r,activePanel:a}=Ce(e),l=F([]),o=F([]),i=F([]),u=F([]),b=F(!0),O=se({visible:!1,loading:!1}),N=se({column:null,refTable:null,refColumn:null,foreignKeyName:null,onUpdate:"NO ACTION",onDelete:"NO ACTION"}),v=P(()=>{const{column:I,refTable:D,refColumn:q}=N;return I||D||q?n.value.newForeignKey(N):""});_e(()=>{f.on("designMetaNext",()=>{O.visible=!1,u.value=n.value.strategies(),d(),f.emit("tables")}).on("foreignKeys",I=>{b.value=!1,l.value=I}).on("columnsById",I=>{N.refColumn="",i.value=I}).on("success",I=>{I=="fk"&&(O.loading=!1,O.visible=!1,d())}).on("error",()=>{O.loading=!1}).on("tables",I=>{o.value=I})});const k=I=>{f.emit("columnsById",I)},d=()=>{const I=n.value.showForeignKeys();I&&(b.value=!0,f.emit("foreignKeys",I))},C=()=>{O.visible=!0,O.loading=!1,N.column=null,N.refTable=null,N.refColumn=null,N.onUpdate="NO ACTION",N.onDelete="NO ACTION"},B=()=>{O.loading=!0,f.emit("execute",{type:"fk",sql:v.value})},Y=I=>{Me(T("design.deleteFkConfirm")).then(()=>{f.emit("execute",{type:"fk",sql:n.value.dropForeignKey(I.constraint_name)})})};return(I,D)=>{const q=re("vsc-button"),V=$e,j=Ie,ne=re("RedMark"),K=Be,x=ve,z=he,ue=De,U=we,me=fe,Ae=Oe;return A(),w("div",null,[E(t)?(A(),w("div",Ln,[s(q,{type:"icon",icon:"codicon-add text-base",title:E(T)("common.new"),onClick:C},null,8,["title"]),s(q,{type:"icon",icon:"codicon-refresh text-base",title:E(T)("common.refresh"),onClick:d},null,8,["title"])])):h("",!0),E(a)=="foreignKey"?W((A(),$(j,{key:1,data:l.value,style:{width:"100%"},height:E(r),border:""},{default:m(()=>[E(t)?(A(),$(V,{key:0,resizable:!0,align:"center",prop:"constraint_name",label:E(T)("design.constraintName"),width:"150"},null,8,["label"])):h("",!0),s(V,{resizable:!0,align:"center",prop:"column_name",label:E(T)("design.column"),width:"150"},null,8,["label"]),s(V,{resizable:!0,align:"center",prop:"referenced_table",label:E(T)("design.referencedTable"),width:"150"},null,8,["label"]),s(V,{resizable:!0,align:"center",prop:"referenced_column",label:E(T)("design.referencedColumn"),width:"155"},null,8,["label"]),s(V,{align:"center",prop:"updateRule",label:E(T)("design.updateRule"),width:"150"},null,8,["label"]),s(V,{align:"center",prop:"deleteRule",label:E(T)("design.deleteRule"),width:"150"},null,8,["label"]),E(t)?(A(),$(V,{key:1,label:E(T)("design.operation"),width:"120"},{default:m(({row:p})=>[M("div",bn,[s(q,{type:"icon",icon:"el-icon-delete",style:{color:"#f56c6c"},title:"delete",onClick:Ue=>Y(p)},null,8,["onClick"])])]),_:1},8,["label"])):h("",!0)]),_:1},8,["data","height"])),[[Ae,b.value]]):h("",!0),s(me,{modelValue:O.visible,"onUpdate:modelValue":D[7]||(D[7]=p=>O.visible=p),title:E(T)("design.newForeignKey"),width:"780px",closeOnClickModal:!1,center:""},{footer:m(()=>[s(q,{type:"secondary",onClick:D[6]||(D[6]=p=>O.visible=!1)},{default:m(()=>[y(g(E(T)("common.cancel")),1)]),_:1}),s(q,{type:"primary",loading:O.loading,onClick:B},{default:m(()=>[y(g(E(T)("common.ok")),1)]),_:1},8,["loading"]),$n,y(),In,W(s(Se,{ref:"cmEditor",value:v.value,readonly:!0},null,8,["value"]),[[le,v.value]])]),default:m(()=>[s(U,{inline:!0,"label-width":"150px","label-position":"left",size:"small"},{default:m(()=>[s(z,null,{label:m(()=>[s(ne),y(g(E(T)("design.column")),1)]),default:m(()=>[s(x,{modelValue:N.column,"onUpdate:modelValue":D[0]||(D[0]=p=>N.column=p),size:"small",filterable:"",class:"!w-[170px] mr-4"},{default:m(()=>[(A(!0),w(J,null,ae(E(e).columns,p=>(A(),$(K,{key:p.name,label:p.name,value:p.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(z,null,{default:m(()=>[s(ue,{modelValue:N.foreignKeyName,"onUpdate:modelValue":D[1]||(D[1]=p=>N.foreignKeyName=p),class:"!w-[170px]"},null,8,["modelValue"])]),_:1}),Mn,s(z,null,{label:m(()=>[s(ne),y(g(E(T)("design.referencedTable")),1)]),default:m(()=>[s(x,{modelValue:N.refTable,"onUpdate:modelValue":D[2]||(D[2]=p=>N.refTable=p),size:"small",filterable:"",class:"!w-[170px] mr-4"},{default:m(()=>[(A(!0),w(J,null,ae(o.value,p=>(A(),$(K,{key:p.name,label:p.name,value:p.name,onClick:Ue=>k(p.id)},null,8,["label","value","onClick"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(z,null,{label:m(()=>[s(ne),y(g(E(T)("design.referencedColumn")),1)]),default:m(()=>[s(x,{modelValue:N.refColumn,"onUpdate:modelValue":D[3]||(D[3]=p=>N.refColumn=p),size:"small",filterable:"",class:"!w-[170px]"},{default:m(()=>[(A(!0),w(J,null,ae(i.value,p=>(A(),$(K,{key:p.name,label:p.name,value:p.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(z,{label:"On Update"},{default:m(()=>[s(x,{modelValue:N.onUpdate,"onUpdate:modelValue":D[4]||(D[4]=p=>N.onUpdate=p),size:"small",filterable:"",class:"!w-[170px] mr-4"},{default:m(()=>[(A(!0),w(J,null,ae(u.value,p=>(A(),$(K,{key:p,label:p,value:p},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(z,{label:"On Delete"},{default:m(()=>[s(x,{modelValue:N.onDelete,"onUpdate:modelValue":D[5]||(D[5]=p=>N.onDelete=p),size:"small",filterable:"",class:"!w-[170px]"},{default:m(()=>[(A(!0),w(J,null,ae(u.value,p=>(A(),$(K,{key:p,label:p,value:p},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","title"])])}}}),Fe=c=>(on("data-v-5a2816c1"),c=c(),En(),c),wn={key:0,ref:"infoPanel",class:"design-toolbar"},fn=["title"],Dn={class:"text-center"},gn=Fe(()=>M("br",null,null,-1)),Un={class:"max-h-[300px]"},yn=["onClick"],Bn=Fe(()=>M("br",null,null,-1)),vn=Fe(()=>M("br",null,null,-1)),Fn=Te({__name:"ColumnPanel",setup(c){const e=F(null),n=de(),{dbType:t,columns:r,dialect:a,canAlterTable:l,remainHeight:o,activePanel:i}=Ce(n),u=se({visible:!1,inputting:!1}),b=P(()=>a.value.columnTypes()),O=F([]),N=F(!1),v=F(!0),k=F([]),d=se({name:"",type:"",unsigned:null,zerofill:null,comment:null,isNotNull:null,defaultValue:null,useCurrentTimestamp:null}),C=se({isNew:!0,editDisable:!1,editVisible:!1,editLoading:!1}),B=P(()=>{var S,L;return D.value&&((L=(S=d.type)==null?void 0:S.match)==null?void 0:L.call(S,/(\bint|decimal|float|double)/i))}),Y=P(()=>{var S,L;return D.value&&((L=(S=d.type)==null?void 0:S.match)==null?void 0:L.call(S,/timestamp/i))}),I=P(()=>window.innerWidth<=1200),D=P(()=>["MySQL","Doris","MariaDB"].includes(t.value)),q=P(()=>{const S=C.isNew?"design.newColumn":"design.updateColumn";return T(S)}),V=P(()=>u.inputting&&d.type?b.value.filter(S=>(S.label||S).match(new RegExp(d.type,"i"))):b.value),j=P(()=>{if(C.isNew){const{name:S,type:L}=d;return S&&L?a.value.newColumn(d):""}B.value||(d.zerofill=!1,d.unsigned=!1),Y.value||(d.useCurrentTimestamp=!1);try{return a.value.updateColumn({table:e.value,newColumnName:d.name,columnType:d.type,nullable:!d.isNotNull,...d})}catch(S){return C.editDisable=!0,S}}),ne=P(()=>[R.MYSQL,R.MARIA_DB,R.PG,R.DB2].includes(t.value));_e(()=>{f.on("designMetaNext",S=>{k.value=Ye.clone(S.columns),C.editVisible=!1,v.value=!1}).on("columns",S=>{k.value=Ye.clone(S),v.value=!1}).on("indexes",S=>{N.value=!0,O.value=S.filter(L=>ye(L.isUnique)).map(L=>L.column_name)}).on("success",S=>{S=="column"&&(C.editLoading=!1,C.editVisible=!1,ue())}).on("error",()=>{C.editLoading=!1,ue()})});const K=(...S)=>!S.includes(t.value),x=S=>{S&&(d.defaultValue="CURRENT_TIMESTAMP")},z=()=>{const S=V.value[0];S&&(d.type=S.value||S,u.visible=!1)},ue=()=>{f.emit("columns"),v.value=!0},U=()=>{d.name="",d.type="",C.isNew=!0,C.editVisible=!0},me=S=>{Object.assign(d,{...S,columnName:S.name,oldRow:S}),C.isNew=!1,C.editVisible=!0,C.editDisable=!1,C.editLoading=!1},Ae=(S,L)=>{C.isNew=!1,Object.assign(d,{...S,columnName:S.name,oldRow:k.value[L]}),p()},p=()=>{if(!j.value)return be("No any change!");if(C.editLoading=!0,C.isNew)return Ue();try{f.emit("execute",{type:"column",sql:j.value})}catch(S){be(S.message),C.editLoading=!1}},Ue=()=>{f.emit("execute",{type:"column",sql:j.value})},Ze=S=>{Me(T("design.deleteColumnConfirm")).then(()=>{f.emit("execute",{type:"column",sql:a.value.dropColumn(S.name)})})};return(S,L)=>{const Ne=re("vsc-button"),Q=$e,te=qe,en=Ie,ke=re("RedMark"),pe=De,Ee=he,nn=un,tn=we,an=fe,rn=Oe;return A(),w("div",null,[E(l)?(A(),w("div",wn,[s(Ne,{type:"icon",icon:"codicon-add text-base",title:E(T)("common.new"),onClick:U},null,8,["title"]),s(Ne,{type:"icon",icon:"codicon-refresh text-base",title:E(T)("common.refresh"),onClick:ue},null,8,["title"])],512)):h("",!0),E(i)=="column"?W((A(),$(en,{key:1,data:E(r),height:E(o),border:"",onRowDblclick:me},{default:m(()=>[s(Q,{resizable:!0,align:"center",prop:"name",label:E(T)("common.name"),width:"180"},null,8,["label"]),s(Q,{resizable:!0,align:"center",prop:"type",label:E(T)("common.type"),width:I.value?100:130},null,8,["label","width"]),s(Q,{resizable:!0,align:"center",prop:"maximum_length",width:80,label:E(T)("design.length")},null,8,["label"]),["DuckDB"].includes(E(t))?h("",!0):(A(),$(Q,{key:0,resizable:!0,align:"center",prop:"comment",label:E(T)("common.comment"),width:"100"},{default:m(({row:_})=>[M("span",{title:_==null?void 0:_.comment},g(_==null?void 0:_.comment),9,fn)]),_:1},8,["label"])),s(Q,{resizable:!0,align:"center",prop:"defaultValue",width:I.value?75:110,label:E(T)("common.default")},null,8,["width","label"]),s(Q,{align:"center",label:"Not Null",width:80},{default:m(({row:_,rowIndex:Z})=>[s(te,{modelValue:_.isNotNull,"onUpdate:modelValue":X=>_.isNotNull=X,onChange:X=>Ae(_,Z)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),s(Q,{align:"center",label:E(T)("design.isPrimary"),width:110},{default:m(({row:_})=>[s(te,{disabled:"","model-value":_.isPrimary},null,8,["model-value"])]),_:1},8,["label"]),N.value||["MySQL","MariaDB","Doris"].includes(E(t))?(A(),$(Q,{key:1,align:"center",label:E(T)("design.isUnique"),width:80},{default:m(({row:_})=>[s(te,{disabled:"","model-value":_.isUnique||O.value.includes(_.name)},null,8,["model-value"])]),_:1},8,["label"])):h("",!0),["DuckDB"].includes(E(t))?h("",!0):(A(),$(Q,{key:2,align:"center",label:E(T)("design.isAutoIncrement"),width:"130"},{default:m(({row:_,rowIndex:Z})=>[s(te,{modelValue:_.isAutoIncrement,"onUpdate:modelValue":X=>_.isAutoIncrement=X,disabled:!_.isPrimary||!ne.value,onChange:X=>Ae(_,Z)},null,8,["modelValue","onUpdate:modelValue","disabled","onChange"])]),_:1},8,["label"])),["SQLite"].includes(E(t))?h("",!0):(A(),$(Q,{key:3,label:E(T)("design.operation"),width:"100"},{default:m(({row:_})=>[M("div",Dn,[s(Ne,{type:"icon",icon:"codicon-edit",title:"edit",onClick:Z=>me(_)},null,8,["onClick"]),s(Ne,{type:"icon",icon:"el-icon-delete",style:{color:"#f56c6c"},title:"delete",onClick:Z=>Ze(_)},null,8,["onClick"])])]),_:1},8,["label"])),D.value?(A(),w(J,{key:4},[s(Q,{align:"center",label:"UNSIGNED",width:"100"},{default:m(({row:_,rowIndex:Z})=>[s(te,{modelValue:_.unsigned,"onUpdate:modelValue":X=>_.unsigned=X,"true-value":"1","false-value":"0",onChange:X=>Ae(_,Z)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),s(Q,{align:"center",label:"Zerofill",width:"80"},{default:m(({row:_,rowIndex:Z})=>[s(te,{modelValue:_.zerofill,"onUpdate:modelValue":X=>_.zerofill=X,"true-value":"1","false-value":"0",onChange:X=>Ae(_,Z)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1})],64)):h("",!0)]),_:1},8,["data","height"])),[[rn,v.value]]):h("",!0),s(an,{modelValue:C.editVisible,"onUpdate:modelValue":L[12]||(L[12]=_=>C.editVisible=_),title:q.value,width:"680px",closeOnClickModal:!1,center:""},{footer:m(()=>[s(Ne,{type:"secondary",onClick:L[11]||(L[11]=_=>C.editVisible=!1)},{default:m(()=>[y(g(E(T)("common.cancel")),1)]),_:1}),s(Ne,{type:"primary",loading:C.editLoading,disabled:C.editDisable,onClick:p},{default:m(()=>[y(g(E(T)("common.ok")),1)]),_:1},8,["loading","disabled"]),Bn,y(),vn,W(s(Se,{ref:"cmEditor",value:j.value,readonly:!0},null,8,["value"]),[[le,j.value]])]),default:m(()=>[s(tn,{inline:!0,"label-width":"90px",size:"small"},{default:m(()=>[s(Ee,null,{label:m(()=>[s(ke),y(g(E(T)("common.name")),1)]),default:m(()=>[s(pe,{modelValue:d.name,"onUpdate:modelValue":L[0]||(L[0]=_=>d.name=_),size:"small",fixed:""},null,8,["modelValue"])]),_:1}),B.value?(A(),$(Ee,{key:0,label:"ZEROFILL"},{default:m(()=>[s(te,{modelValue:d.zerofill,"onUpdate:modelValue":L[1]||(L[1]=_=>d.zerofill=_),"true-value":"1","false-value":"0"},null,8,["modelValue"])]),_:1})):h("",!0),Y.value?(A(),$(Ee,{key:1,label:"CURRENT_TIMESTAMP","label-width":"160px"},{default:m(()=>[s(te,{modelValue:d.useCurrentTimestamp,"onUpdate:modelValue":L[2]||(L[2]=_=>d.useCurrentTimestamp=_),onChange:x},null,8,["modelValue"])]),_:1})):h("",!0),gn,s(Ee,null,{label:m(()=>[s(ke),y(g(E(T)("common.type")),1)]),default:m(()=>[s(nn,{visible:u.visible,"onUpdate:visible":L[6]||(L[6]=_=>u.visible=_),placement:"bottom-start","popper-class":"!p-0",trigger:"click",tabindex:null},{reference:m(()=>[s(pe,{modelValue:d.type,"onUpdate:modelValue":L[3]||(L[3]=_=>d.type=_),size:"small",fixed:"",onKeyup:Le(z,["enter"]),onInput:L[4]||(L[4]=_=>{u.inputting=!0,u.visible=!0}),onClick:L[5]||(L[5]=_=>u.inputting=!1)},null,8,["modelValue"])]),default:m(()=>[M("div",Un,[(A(!0),w(J,null,ae(V.value,(_,Z)=>(A(),w(J,null,[_=="hr"?(A(),w("div",{key:Z,class:"w-full type-hr bg-bg"})):(A(),w("div",{key:1,class:"el-select-dropdown__item !h-6 min-w-[190px] bg-[var(--vscode-dropdown-background)]",onClick:X=>{d.type=_.value||_,u.visible=!1}},g(_.label||_),9,yn))],64))),256))])]),_:1},8,["visible"])]),_:1}),K("ClickHouse")?(A(),$(Ee,{key:2,label:E(T)("design.isNotNull")},{default:m(()=>[s(te,{modelValue:d.isNotNull,"onUpdate:modelValue":L[7]||(L[7]=_=>d.isNotNull=_)},null,8,["modelValue"])]),_:1},8,["label"])):h("",!0),B.value?(A(),$(Ee,{key:3,label:"UNSIGNED"},{default:m(()=>[s(te,{modelValue:d.unsigned,"onUpdate:modelValue":L[8]||(L[8]=_=>d.unsigned=_),"true-value":"1","false-value":"0"},null,8,["modelValue"])]),_:1})):h("",!0),!["SqlServer","Snowflake"].includes(E(t))||C.isNew?(A(),$(Ee,{key:4,label:E(T)("common.default")},{default:m(()=>[s(pe,{modelValue:d.defaultValue,"onUpdate:modelValue":L[9]||(L[9]=_=>d.defaultValue=_),size:"small",fixed:""},null,8,["modelValue"])]),_:1},8,["label"])):h("",!0),["DuckDB"].includes(E(t))?h("",!0):(A(),$(Ee,{key:5,label:E(T)("common.comment")},{default:m(()=>[s(pe,{modelValue:d.comment,"onUpdate:modelValue":L[10]||(L[10]=_=>d.comment=_),size:"small",fixed:""},null,8,["modelValue"])]),_:1},8,["label"]))]),_:1})]),_:1},8,["modelValue","title"])])}}}),Hn=We(Fn,[["__scopeId","data-v-5a2816c1"]]),Pn={class:"ml-4"},xn={class:"flex flex-col gap-y-2"},kn={class:"flex-wrap"},Vn={class:"inline-block mr-5"},Yn={class:"font-bold mr-5 inline-block"},Wn={class:"inline-block mr-5"},Gn={class:"font-bold mr-5 inline-block"},qn={class:"flex-wrap"},jn={key:0,class:"inline-block mr-5"},Kn={class:"font-bold mr-5 inline-block"},Qn={key:1,class:"inline-block mr-5"},Xn={class:"font-bold mr-5 inline-block"},Jn={class:"inline-block pt-1"},zn=Te({__name:"InfoPanel",setup(c){const e=de(),{dialect:n}=Ce(e),t=F([]),r=se({name:null,schema:null,newTableName:null,comment:null,newComment:null,collation:null,newCollation:null});_e(()=>{f.on("designMetaNext",l=>{r.name=l.table,r.schema=l.schema,r.newTableName=l.table,r.comment=l.comment,r.newComment=l.comment,r.collation=l.collation,r.newCollation=l.collation}).on("collations",l=>{t.value=l})});const a=()=>{const l={...r,table:r.name};f.emit("updateTable",l);const o=n.value.updateTable(l);o?f.emit("execute",{type:"table",sql:o}):be("No any change!")};return(l,o)=>{const i=De,u=Be,b=ve,O=re("vsc-button");return A(),w("div",Pn,[M("div",xn,[M("div",kn,[M("div",Vn,[M("label",Yn,g(l.$t("design.table")),1),s(i,{modelValue:r.newTableName,"onUpdate:modelValue":o[0]||(o[0]=N=>r.newTableName=N),class:"!w-48",required:"",onKeyup:Le(a,["enter"])},null,8,["modelValue"])]),M("div",Wn,[M("label",Gn,g(l.$t("common.comment")),1),s(i,{modelValue:r.newComment,"onUpdate:modelValue":o[1]||(o[1]=N=>r.newComment=N),class:"!w-48",onKeyup:Le(a,["enter"])},null,8,["modelValue"])])]),M("div",qn,[E(e).tableMeta.engine?(A(),w("div",jn,[M("label",Kn,g(l.$t("design.engine")),1),s(i,{value:E(e).tableMeta.engine,class:"!w-24",disabled:""},null,8,["value"])])):h("",!0),r.collation&&t.value.length>0?(A(),w("div",Qn,[M("label",Xn,g(l.$t("design.collate")),1),s(b,{modelValue:r.newCollation,"onUpdate:modelValue":o[2]||(o[2]=N=>r.newCollation=N),size:"small",filterable:""},{default:m(()=>[(A(!0),w(J,null,ae(t.value,N=>(A(),$(u,{key:N.name,label:N.name,value:N.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])):h("",!0),M("div",Jn,[s(O,{type:"success",onClick:a},{default:m(()=>[y(g(l.$t("common.update")),1)]),_:1})])])])])}}}),Zn={key:0,class:"design-toolbar"},et={class:"text-center"},nt=M("br",null,null,-1),tt=M("br",null,null,-1),at=Te({__name:"Check",setup(c){const e=de(),{dialect:n,canAlterTable:t,remainHeight:r,activePanel:a}=Ce(e),l=F([]),o=F(!0),i=se({visible:!1,loading:!1}),u=se({clause:null}),b=P(()=>u.clause?n.value.newCheck(u.clause):"");_e(()=>{f.on("designMetaNext",()=>{O(),i.visible=!1}).on("checks",d=>{o.value=!1,l.value=d}).on("success",d=>{d=="check"&&(O(),i.visible=!1,i.loading=!1)}).on("error",()=>{i.loading=!1})});const O=()=>{const d=n.value.showChecks();if(!d){console.log("This database type does not currently support check."),o.value=!1;return}o.value=!0,f.emit("checks",d)},N=()=>{i.visible=!0,i.loading=!1,u.clause=null},v=()=>{i.loading=!0,f.emit("execute",{type:"check",sql:b.value})},k=d=>{Me(T("design.deleteCheckConfirm")).then(()=>{f.emit("execute",{type:"check",sql:n.value.dropCheck(d.name)})})};return(d,C)=>{const B=re("vsc-button"),Y=$e,I=Ie,D=re("RedMark"),q=De,V=he,j=we,ne=fe,K=Oe;return A(),w("div",null,[E(t)?(A(),w("div",Zn,[s(B,{type:"icon",icon:"codicon-add text-base",title:E(T)("common.new"),onClick:N},null,8,["title"]),s(B,{type:"icon",icon:"codicon-refresh text-base",title:E(T)("common.refresh"),onClick:O},null,8,["title"])])):h("",!0),E(a)=="check"?W((A(),$(I,{key:1,data:l.value,height:E(r),border:""},{default:m(()=>[E(t)?(A(),$(Y,{key:0,resizable:!0,align:"center",prop:"name",label:E(T)("design.constraintName"),width:"200"},null,8,["label"])):h("",!0),s(Y,{resizable:!0,align:"center",prop:"clause",label:E(T)("design.clause"),width:"200"},null,8,["label"]),E(t)?(A(),$(Y,{key:1,label:E(T)("design.operation"),width:"100"},{default:m(({row:x})=>[M("div",et,[s(B,{type:"icon",icon:"el-icon-delete",style:{color:"#f56c6c"},title:"delete",onClick:z=>k(x)},null,8,["onClick"])])]),_:1},8,["label"])):h("",!0)]),_:1},8,["data","height"])),[[K,o.value]]):h("",!0),s(ne,{modelValue:i.visible,"onUpdate:modelValue":C[3]||(C[3]=x=>i.visible=x),title:E(T)("design.newCheck"),width:"430px",closeOnClickModal:!1,center:""},{footer:m(()=>[s(B,{type:"secondary",onClick:C[2]||(C[2]=x=>i.visible=!1)},{default:m(()=>[y(g(E(T)("common.cancel")),1)]),_:1}),s(B,{type:"primary",loading:i.loading,onClick:v},{default:m(()=>[y(g(E(T)("common.ok")),1)]),_:1},8,["loading"]),nt,y(),tt,W(s(Se,{ref:"cmEditor",value:b.value,readonly:!0},null,8,["value"]),[[le,b.value]])]),default:m(()=>[s(j,{inline:!0,"label-width":"80px","label-position":"left",onSubmit:C[1]||(C[1]=cn(()=>{},["prevent"])),onKeyup:Le(v,["enter"])},{default:m(()=>[s(V,null,{label:m(()=>[s(D),y(g(E(T)("design.clause")),1)]),default:m(()=>[s(q,{modelValue:u.clause,"onUpdate:modelValue":C[0]||(C[0]=x=>u.clause=x),class:"!w-[290px]",size:"small",placeholder:"e.g. id >20 and name!='admin'"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","title"])])}}});class oe{showAllComments(){return null}showAllForeignKeys(){return null}showAllConstraints(){return null}dropIndex(e,n){throw new Error("Method not implemented.")}showVersion(){return null}showIndex(e,n){return null}createIndex(e){return null}showDatabases(){return null}updateUser(e){return null}showCollations(){return null}showPackages(e){return null}showChecks(e,n){return null}showPartitions(e,n){return null}showActualPartitions(e,n){return null}showForeignKeys(e,n){return null}updateColumnSql(e){throw new Error("Method not implemented.")}showMaterialViews(e,n){return""}showTriggers(e,n){return null}showSequences(e){return null}showCustomTypes(e){return null}showExternalTables(e){return`select foreign_table_name "name",foreign_server_name "server",foreign_server_catalog "server_db" from information_schema.foreign_tables where foreign_table_schema='${e}';`}showEvents(e){return`SELECT EVENT_NAME "name" FROM information_schema.EVENTS where EVENT_SCHEMA='${e}' ORDER BY EVENT_NAME;`}dropEventTemplate(e){return`DROP EVENT IF EXISTS ${e};`}showTableSource(e,n){return null}triggerTemplate(e){return`CREATE TRIGGER trigger_name$1
[BEFORE/AFTER] INSERT ON ${e??"[table_name]$2"}
FOR EACH ROW BEGIN
    $3
END;`}eventTemplate(){return`CREATE EVENT event_name$1
ON SCHEDULE AT CURRENT_TIMESTAMP + INTERVAL 1 HOUR
DO
BEGIN
    SELECT now()$2;
END;`}kill(e){return null}pingDataBase(e,n){return null}dropTriggerTemplate(e,n){return`DROP TRIGGER ${e}`}}class rt extends oe{showVersion(){return"select version() server_version"}createIndex(e){const n=e.indexType||"btree";return`CREATE INDEX ${e.column}_${new Date().getTime()}_index ON ${e.table} USING ${n} (${e.column})`}dropIndex(e,n){return`DROP INDEX ${n}`}showIndex(e,n){return`select name index_name,is_in_sorting_key indexdef  FROM system.columns WHERE database = '${e}' and table ='${n}' and indexdef=1`}variableList(){return"select name , value as setting,description from system.settings s "}statusList(){return"select name as db , engine as status from system.databases d "}kill(e){return`KILL QUERY WHERE query_id='${e.ID}'`}processList(){return`
    SELECT query_id AS "ID", user AS "User",
    current_database AS "DB",os_user AS "State",
    addSeconds(now(), elapsed) AS "Time",
    query AS "SQL"
    FROM system.processes p 
    ORDER BY elapsed desc`}addColumn(e,n){return`ALTER TABLE ${e} 
    ADD COLUMN [column] [type]`}createUser(){return"CREATE USER [name] WITH PASSWORD 'password'"}updateColumn(e,n){const{name:t,type:r,comment:a,nullable:l,defaultValue:o}=n;return`-- change column type
ALTER TABLE ${e} 
    ALTER COLUMN ${t} TYPE ${r};
-- change column name
ALTER TABLE ${e}  
    RENAME COLUMN ${t} TO [newColumnName]`}updateColumnSql(e){const{columnName:n,columnType:t,newColumnName:r,comment:a,table:l,defaultValue:o,oldRow:i}=e;return console.log(t,i),new H("",`
`).if(t!=i.type,`ALTER TABLE ${l} ALTER COLUMN ${n} TYPE ${t};`).if(o&&o!=i.defaultValue,`ALTER TABLE ${l} MODIFY COLUMN ${n} DEFAULT ${ee(o,t)};`).if(a&&a!=i.comment,`ALTER TABLE ${l} MODIFY COLUMN ${n} COMMENT '${a}';`).if(n!=r,`ALTER TABLE ${l} RENAME COLUMN ${n} TO ${r};`).toString()}showUsers(){return"SELECT * FROM system.users"}updateTable(e){const{table:n,newTableName:t,comment:r,newComment:a}=e;let l="";return a&&a!=r&&(l=`ALTER TABLE ${n} MODIFY COMMENT '${a}';`),t&&n!=t&&(l+=`ALTER TABLE ${n} RENAME TO ${t};`),l}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE "',TABLE_NAME, '";') trun FROM INFORMATION_SCHEMA.TABLES WHERE  table_schema ='${e}' AND table_type='BASE TABLE';`}createDatabase(e){return"CREATE DATABASE $1"}showTableSource(e,n){return`SELECT create_table_query as "Create Table",name as table_name,'definition' as view_definition from system.tables WHERE database='${e}' and name='${n}'`}showViewSource(e,n){return`SELECT create_table_query as "Create View",name as table_name,'definition' as view_definition from system.tables WHERE database='${e}' and name='${n}'`}showProcedureSource(e,n){return"select number from system.numbers where 1=0"}showFunctionSource(e,n){return"select number from system.numbers where 1=0"}showTriggerSource(e,n){return"select number from system.numbers where 1=0"}showColumns(e,n){return`select name,type, null as maximum_length,default_expression as defaultValue,is_in_primary_key as key from system.columns c where database='${e}' and table='${n}' `}showProcedures(e){return"select number from system.numbers where 1=0"}showFunctions(e){return`select name as "ROUTINE_NAME" from system.functions  where origin !='System'`}showViews(e){return`select name ,engine as type from system.tables where database='${e}' and engine = 'View' ORDER BY name`}buildPageSql(e,n,t){return`SELECT * FROM ${n} LIMIT ${t}`}showTables(e){return`select name, engine as type from system.tables where database='${e}' and engine <> 'View' ORDER BY name`}showDatabases(){return"SELECT name as Database FROM system.databases where name not in ('information_schema','INFORMATION_SCHEMA') order by name ASC"}showSchemas(){return this.showDatabases()}tableTemplate(){return`CREATE TABLE table_name$1(  
    id UUID,
    create_time DATETIME,
    name$2 String
)
ENGINE = MergeTree()
ORDER BY (id)
PRIMARY KEY(id);`}viewTemplate(){return`CREATE VIEW $1
AS
SELECT * FROM $2`}procedureTemplate(){return"select number from system.numbers where 1=0"}functionTemplate(){return"CREATE FUNCTION [func_name] AS (a, b, c) -> a * b * c;"}}class ge{constructor(e){this.param=e,this.afterTablePrefix=`ALTER TABLE "${e.table}"`,this.afterColumnPrefix=`${this.afterTablePrefix} ALTER COLUMN "${e.columnName}"`}genAlterSQL(){const{columnName:e,newColumnName:n}=this.param;return new H("",`
`).append(this.changeTypePart()).append(this.notNullPart()).append(this.defaultPart()).append(this.otherPart()).append(this.commentPart()).if(e!=n,`${this.afterTablePrefix} RENAME COLUMN "${e}" TO "${n}";`).toString()}changeTypePart(){const{oldRow:e,columnType:n}=this.param;return e.type==n?"":`${this.afterColumnPrefix} TYPE ${n};`}notNullPart(){const{oldRow:e,isNotNull:n}=this.param;return e.isNotNull==n?"":`${this.afterColumnPrefix} ${n?"SET NOT NULL":"DROP NOT NULL"};`}otherPart(){return null}defaultPart(){const{oldRow:e,defaultValue:n,columnType:t}=this.param;return e.defaultValue==n?"":`${this.afterColumnPrefix} ${G(n)?"DROP DEFAULT":`SET DEFAULT ${ee(n,t)}`};`}commentPart(){return""}}class Re extends oe{showVersion(){return""}createIndex(e){return`ALTER TABLE ${e.table} ADD ${e.type||"key"} ("${e.column||"[column]"}")`}dropIndex(e,n){return`DROP INDEX "${n}"`}showIndex(e,n){return null}variableList(){return null}statusList(){return null}processList(){return null}addColumn(e,n){const t=n?` AFTER "${n}"`:"";return`ALTER TABLE ${e}
    ADD COLUMN [column] [type] COMMENT ''${t};`}createUser(){return`CREATE USER 'username'@'%' IDENTIFIED BY 'password';
-- Grant select privilege to all databases;
GRANT SELECT ON *.* TO 'username'@'%' WITH GRANT OPTION;
-- Grant all privileges to all databases;
GRANT ALL PRIVILEGES ON *.* TO 'username'@'%' WITH GRANT OPTION;`}updateUser(e){return`update mysql.user set
    password = PASSWORD("newPassword")
    where User = '${e}';
FLUSH PRIVILEGES;
-- since mysql version 5.7, password column need change to authentication_string=PASSWORD("newPassword")`}updateColumn(e,n){var O;const{name:t,type:r,comment:a,nullable:l,defaultValue:o,extra:i,character_set_name:u,collation_name:b}=n;return new H(`ALTER TABLE ${e}`).append(`
	CHANGE ${t} ${t} ${r}`).if(u,`CHARACTER SET ${u}`).if(b,`COLLATE ${b}`).if(l!="YES","NOT NULL").if((O=i==null?void 0:i.toLowerCase())==null?void 0:O.includes("auto_increment"),"AUTO_INCREMENT").if(a,`COMMENT '${a}'`).if(o,`DEFAULT ${o=="CURRENT_TIMESTAMP"?o:`'${o}'`}`).toString()}updateColumnSql(e){return new ge(e).genAlterSQL()}showUsers(){return"SELECT concat(user,'@',host) user FROM mysql.user;"}updateTable(e){const{table:n,newTableName:t,comment:r,newComment:a}=e;let l="";return a&&a!=r&&(l=`COMMENT ON TABLE "${n}" IS '${a}';`),t&&n!=t&&(l+=`RENAME TABLE "${n}" TO "${t}";`),l}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE "',table_schema,'"."',TABLE_NAME, '";') trun FROM INFORMATION_SCHEMA.TABLES where  table_schema ='${e}' and TABLE_TYPE<>'VIEW';`}createDatabase(e){return"CREATE DATABASE $1;"}showTableSource(e,n){return`SHOW CREATE TABLE ${e}.${n};`}showViewSource(e,n,t){return`SHOW CREATE VIEW database.${n};`}showProcedureSource(e,n){return`SHOW CREATE PROCEDURE database.${n};`}showFunctionSource(e,n,t){return`SHOW CREATE FUNCTION database.${n};`}showTriggerSource(e,n){return`SHOW CREATE TRIGGER database.${n};`}showColumns(e,n){return`SELECT COLUMN_NAME name,DATA_TYPE type, IS_NULLABLE nullable
            FROM information_schema.columns WHERE table_schema = '${e}' AND table_name = '${n}' ORDER BY ORDINAL_POSITION;`}showTriggers(e,n){return""}showProcedures(e){return""}showFunctions(e){return""}buildPageSql(e,n,t){return`SELECT * FROM ${n} LIMIT ${t};`}showTables(e,n=e){return`SELECT TABLE_NAME "name" FROM information_schema.TABLES  WHERE TABLE_SCHEMA = '${n}' and TABLE_TYPE<>'VIEW' ORDER BY TABLE_NAME;`}showViews(e,n=e){return`SELECT TABLE_NAME name FROM information_schema.VIEWS  WHERE TABLE_SCHEMA = '${n}' ORDER BY TABLE_NAME`}showDatabases(){return'SELECT SCHEMA_NAME "Database" FROM information_schema.schemata ORDER BY "Database";'}showSchemas(e){return'SELECT SCHEMA_NAME "schema" FROM information_schema.schemata ORDER BY "schema";'}tableTemplate(e){return`CREATE TABLE table_name$1(
    id int,
    create_time DATE,
    update_time DATE,
    content VARCHAR(255)
);`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM `}procedureTemplate(){return`CREATE PROCEDURE procedure_name$1()
BEGIN
    $2
END;`}functionTemplate(){return`CREATE FUNCTION function_name$1() RETURNS int
BEGIN
    $2
    return 0;
END;`}}class He extends oe{updateColumn(e,n){return null}showSchemas(e){return null}showTables(e,n){return null}addColumn(e,n){return null}showColumns(e,n,t){return null}showViews(e,n){return null}showUsers(){return null}createUser(){return null}showTriggers(e,n){return null}showProcedures(e){return null}showFunctions(e){return null}buildPageSql(e,n,t,r){return null}createDatabase(e){return null}truncateDatabase(e){return null}updateTable(e){return null}showViewSource(e,n,t){return null}showProcedureSource(e,n){return null}showFunctionSource(e,n,t){return null}showTriggerSource(e,n){return null}tableTemplate(e){return null}viewTemplate(e){return null}procedureTemplate(){return null}functionTemplate(){return null}processList(){return null}variableList(){return null}statusList(){return null}}class je extends oe{showVersion(){return`select RTRIM(SUBSTR(REPLACE(banner,'Oracle Database ',''),1,3)) "server_version" from v$version where rownum=1`}showAllForeignKeys(){return`SELECT 
    a.constraint_name AS "constraint_name",
    a.owner AS "table_schema",
    a.table_name AS "table_name",
    a.column_name AS "column_name",
    c.owner AS "referenced_schema",
    c.table_name AS "referenced_table",
    c.column_name AS "referenced_column"
FROM 
    ALL_CONS_COLUMNS a 
JOIN 
    ALL_CONSTRAINTS b ON a.owner = b.owner AND a.constraint_name = b.constraint_name
JOIN 
    ALL_CONS_COLUMNS c ON b.r_owner = c.owner AND b.r_constraint_name = c.constraint_name
WHERE 
    b.constraint_type = 'R'
    and a.owner not in ('SYS','APEX_040200')`}showAllConstraints(){return`SELECT 
        b.CONSTRAINT_NAME "constraint_name",
        c.CONSTRAINT_TYPE "constraint_type",
        b.owner "table_schema",
        b.table_name "table_name",
        b.COLUMN_NAME "column_name"
         FROM ALL_CONS_COLUMNS b 
          join ALL_CONSTRAINTS c on b.CONSTRAINT_NAME=c.CONSTRAINT_NAME 
          WHERE CONSTRAINT_TYPE='P'
          and b.owner not in ('SYS','APEX_040200')`}showAllComments(){return`SELECT 
        owner "table_schema",
        table_name "table_name",
        COLUMN_NAME "column_name",
        COMMENTS "comment"
         FROM all_col_comments WHERE COMMENTS is not null
         and owner not in ('SYS','APEX_040200')`}createIndex(e){const{table:n,column:t}=e;return`CREATE INDEX ${`${n}_${t}`} ON ${n}(${t})`}dropIndex(e,n){return`DROP INDEX ${n}`}showIndex(e,n){return`SELECT 
col.COLUMN_NAME "column_name",col.INDEX_NAME "index_name",idx.UNIQUENESS='UNIQUE' "isUnique"
from ALL_IND_COLUMNS col
join ALL_INDEXES idx on col.index_name = idx.index_name
WHERE col.TABLE_OWNER='${e}'
     and col.TABLE_NAME='${n}';`}variableList(){return"show global VARIABLES"}statusList(){return"show global status"}kill(e){const{SID:n,SERIAL:t}=e;return`ALTER SYSTEM KILL SESSION '${n},${t}' IMMEDIATE;`}processList(){return`SELECT 
        SID, SERIAL# as SERIAL,
        s.username "User", s.schemaname "Schema", 
        s.status "Status", 
        sql.sql_text SQL
        FROM v$session s,
             v$sql     sql
       WHERE sql.sql_id(+) = s.sql_id
         AND s.type     = 'USER'`}addColumn(e,n){return`ALTER TABLE ${e} 
    ADD [column] [type];
COMMENT ON COLUMN ${e}.[column] IS 'comment'`}createUser(){return`CREATE USER $1 IDENTIFIED BY [password$2];
GRANT CONNECT TO $1;
ALTER USER $1 quota unlimited on USERS;
        `}updateUser(e){return`ALTER USER ${e} IDENTIFIED BY [new_password]`}updateColumn(e,n){const{name:t,type:r,comment:a,nullable:l,defaultValue:o}=n;return`-- change column type
ALTER TABLE ${e} MODIFY ${t} ${r};
-- change column name
ALTER TABLE ${e} RENAME COLUMN ${t} TO [newColumnName];
COMMENT ON COLUMN ${e}.${t} IS '${a||""}'`}updateColumnSql(e){const{columnName:n,columnType:t,newColumnName:r,comment:a,defaultValue:l,table:o,isNotNull:i,oldRow:u}=e;return new H("","").if(t!=u.type,`ALTER TABLE "${o}" MODIFY "${n}" ${t};`).if(i!=u.isNotNull,`
ALTER TABLE "${o}" MODIFY "${n}"${i?"NOT NULL":"NULL"};`).if(l!=null&&l!=u.defaultValue,`
ALTER TABLE "${o}" MODIFY "${n}" DEFAULT ${l!=null&&l.match(/(:|nextval)/i)?l:`'${l==null?void 0:l.replace(/(^'|'$)/g,"")}'`};`).if(a&&a!=u.comment,`
COMMENT ON COLUMN "${o}"."${n}" is '${a}';`).if(n!=r,`
ALTER TABLE "${o}" RENAME COLUMN "${n}" TO "${r}";`).toString()}showUsers(){return'SELECT username "user" FROM all_users'}pingDataBase(e){return e?`ALTER SESSION SET current_schema = "${e}"`:null}updateTable(e){const{table:n,newTableName:t,comment:r,newComment:a}=e;let l="";return a&&a!=r&&(l=`COMMENT ON TABLE "${n}" IS '${a}';`),t&&n!=t&&(l+=`ALTER TABLE "${n}" RENAME TO "${t}"`),l}truncateDatabase(e){return`SELECT 'TRUNCATE TABLE "' || owner || '"."' || object_name || '";' trun FROM all_objects where  owner ='${e}' and object_type ='TABLE'`}createDatabase(e){return"CREATE USER $1 IDENTIFIED BY password$2;"}showViewSource(e,n,t){return t?`select QUERY "Create View" from ALL_MVIEWS where OWNER='${e}' and mview_name='${n}'`:`SELECT DBMS_METADATA.GET_DDL('VIEW', '${n}', '${e}') AS VIEW_DDL FROM DUAL;`}showProcedureSource(e,n){return`SELECT text "Create Procedure"
        FROM all_source
       WHERE owner = '${e}'
         AND name  = '${n}'
       ORDER BY line`}showFunctionSource(e,n){return`SELECT 'CREATE ' || LISTAGG(text) within group( order by line ) "source"
        FROM all_source
       WHERE owner = '${e}'
         AND name  = '${n}'
       ORDER BY line`}showTriggerSource(e,n){return`SELECT text
        FROM all_source
       WHERE owner = '${e}'
         AND name  = '${n}'
       ORDER BY line`}showColumns(e,n){return e?`select
        a.COLUMN_NAME "name",
        a.DATA_DEFAULT "defaultValue",
        a.DATA_PRECISION "precision",
        a.DATA_SCALE "scale",
        a.DATA_TYPE "type",
        COALESCE(a.DATA_PRECISION, a.data_length) "maximum_length",
        a.NULLABLE "nullable"
      from
        all_tab_columns a
      where
        a.owner = '${e}'
        and a.table_name = '${n}'`:`select
a.COLUMN_NAME "name",
a.DATA_DEFAULT "defaultValue",
a.DATA_PRECISION "precision",
a.DATA_SCALE "scale",
a.DATA_TYPE "type",
COALESCE(a.DATA_PRECISION, a.data_length) "maximum_length",
a.NULLABLE "nullable"
from
    user_tab_columns a
where
a.table_name = '${n}'`}showChecks(e,n){return`SELECT
        c.constraint_name "name",
        c.search_condition "clause"
    FROM
        all_constraints c
    WHERE
        c.owner = '${e}' and
        c.table_name = '${n}'
        AND c.constraint_type = 'C';`}showForeignKeys(e,n){let t=`select
        b.CONSTRAINT_NAME "constraint_name",
        b.COLUMN_NAME "column_name",
        c_pk.table_name "referenced_table",
        b_pk.COLUMN_NAME "referenced_column"
    from ALL_CONS_COLUMNS b
        join ALL_CONSTRAINTS c on b.owner=c.owner and b.CONSTRAINT_NAME = c.CONSTRAINT_NAME
        JOIN all_constraints c_pk ON c.r_owner = c_pk.owner AND c.r_constraint_name = c_pk.constraint_name
        join ALL_CONS_COLUMNS b_pk on b_pk.CONSTRAINT_NAME = c_pk.CONSTRAINT_NAME
    where
        b.owner = '${e}' and
        b.table_name = '${n}'
        and c.CONSTRAINT_TYPE = 'R';`;return e||(t=t.replace(/all_/ig,"USER_").replace("b.owner = 'undefined' and","")),t}showTriggers(e,n){const t=n?` AND TABLE_NAME='${n}'`:"";return`SELECT TRIGGER_NAME "trigger_name",TABLE_NAME "table_name",TRIGGERING_EVENT "event" FROM all_triggers WHERE TABLE_OWNER='${e}' ${t} ORDER BY TRIGGER_NAME`}showPackages(e){return`SELECT object_name "name" FROM ALL_OBJECTS WHERE OBJECT_TYPE IN ('PACKAGE') and owner='${e}' ORDER BY "name"`}showProcedures(e){return`select object_name "ROUTINE_NAME" from all_objects where object_type = 'PROCEDURE' and owner='${e}' ORDER BY "ROUTINE_NAME"`}showFunctions(e){return`select object_name "ROUTINE_NAME" from all_objects where object_type = 'FUNCTION' and owner='${e}' ORDER BY "ROUTINE_NAME"`}showViews(e,n){return`select object_type "type",object_name "name" from all_objects where object_type = 'VIEW' and owner='${n}' ORDER BY "type","name"`}showMaterialViews(e,n){return`select object_type "type",object_name "name" from all_objects where object_type = 'MATERIALIZED VIEW' and owner='${n}' ORDER BY "type","name"`}buildPageSql(e,n,t){return`SELECT * FROM ${n} WHERE ROWNUM <= ${t}`}showTables(e,n){return`select o.object_name "name", nvl(t.num_rows, -1) "table_rows", c.comments "comment" from all_objects o
        LEFT JOIN all_tables t on o.owner = t.owner and o.object_name = t.table_name
        LEFT JOIN all_tab_comments c on o.owner = c.owner and o.object_name = c.table_name
        where o.owner = '${n}' and o.object_type = 'TABLE' ORDER BY "name"`}showDatabases(){return'select username as "Database" from sys.all_users order by username'}showSchemas(){return'select username as "Database" from sys.all_users order by username'}tableTemplate(){return`CREATE TABLE table_name$1(  
    id NUMBER GENERATED AS IDENTITY PRIMARY KEY,
    create_time DATE,
    name$2 VARCHAR2(255)
);
COMMENT ON TABLE table_name$1 IS '$3';
COMMENT ON COLUMN table_name$1.$2 IS '$4'`}viewTemplate(e){return`CREATE ${e?"MATERIALIZED ":""}VIEW view_name$1
AS
SELECT * FROM $2`}procedureTemplate(){return`CREATE PROCEDURE proc_name$1(x IN OUT NUMBER, y OUT NUMBER)
IS
BEGIN
   $2
   y:=4 * x;
END;`}functionTemplate(){return`CREATE FUNCTION fun_name$1(x IN NUMBER) 
RETURN NUMBER 
BEGIN 
    $2
    RETURN x*2;
END;`}}class lt extends je{showVersion(){return`SELECT REPLACE(banner,'DM Database Server 64 ','') "server_version"  FROM v$version where rownum=1;`}createIndex(e){const{table:n,column:t="$2"}=e;return`CREATE INDEX ${`${n}_${t}`} ON ${n}(${t});`}dropIndex(e,n){return`DROP INDEX ${n};`}showIndex(e,n){return`SELECT COLUMN_NAME "column_name",INDEX_NAME "index_name" from all_IND_COLUMNS WHERE TABLE_OWNER='${e}' and TABLE_NAME='${n}';`}variableList(){return"show global VARIABLES"}statusList(){return"show global status"}processList(){return"SELECT SESS_ID,STATE,SQL_TEXT FROM v$sessions"}addColumn(e,n){return`ALTER TABLE ${e} 
    ADD COLUMN $1 $2;
COMMENT ON COLUMN ${e}.$3 IS 'comment$4';`}createUser(){return"CREATE USER $1 IDENTIFIED BY [password]$2;"}updateUser(e){return`ALTER USER ${e} IDENTIFIED BY [new_password];`}updateColumn(e,n){const{name:t,type:r,comment:a,nullable:l,defaultValue:o}=n;return`-- change column type
ALTER TABLE ${e} MODIFY ${t} ${r};
-- change column name
ALTER TABLE ${e} RENAME COLUMN ${t} TO [newColumnName];
COMMENT ON COLUMN ${e}.${t} IS '${a||""}';`}updateColumnSql(e){const{columnName:n,columnType:t,newColumnName:r,comment:a,defaultValue:l,table:o,isNotNull:i,oldRow:u}=e;return new H("","").if(t!=u.type,`ALTER TABLE "${o}" MODIFY "${n}" ${t};`).if(i!=u.isNotNull,`
ALTER TABLE "${o}" MODIFY "${n}"${i?"NOT NULL":"NULL"};`).if(l!=null&&l!=u.defaultValue,`
ALTER TABLE "${o}" MODIFY "${n}" DEFAULT ${l!=null&&l.match(/(:|nextval)/i)?l:`'${l==null?void 0:l.replace(/(^'|'$)/g,"")}'`};`).if(a&&a!=u.comment,`
COMMENT ON COLUMN "${o}"."${n}" is '${a}';`).if(n!=r,`
ALTER TABLE "${o}" RENAME COLUMN "${n}" TO "${r}";`).toString()}showUsers(){return'SELECT username "user" FROM all_users'}pingDataBase(e){return e?`set SCHEMA ${e}`:null}updateTable(e){const{table:n,newTableName:t,comment:r,newComment:a}=e;let l="";return a&&a!=r&&(l=`COMMENT ON TABLE "${n}" IS '${a}';`),t&&n!=t&&(l+=`ALTER TABLE "${n}" RENAME TO "${t}"`),l}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE \`',table_schema,'\`.\`',TABLE_NAME, '\`;') trun FROM INFORMATION_SCHEMA.TABLES where  table_schema ='${e}' and TABLE_TYPE<>'VIEW';`}createDatabase(e){return"CREATE USER [name] IDENTIFIED BY [password];"}showViewSource(e,n){return`CALL SP_VIEWDEF('${e}', '${n}');`}showProcedureSource(e,n){return`SELECT LISTAGG(text) within group(order by line) "Create Procedure"
        FROM all_source
       WHERE owner = '${e}'
         AND name  = '${n}'
       ORDER BY line`}showFunctionSource(e,n){return`select DBMS_METADATA.GET_DDL('FUNCTION', '${n}','${e}') "Create Function";`}showColumns(e,n){return`select
        a.COLUMN_NAME "name",
        a.DATA_DEFAULT "defaultValue",
        a.DATA_TYPE "type",
        a.DATA_PRECISION "precision",
        a.DATA_SCALE "scale",
        a.data_length "maximum_length",
        a.NULLABLE "nullable",
        c.CONSTRAINT_TYPE "key",
        cc.COMMENTS "comment",
        sc."INFO2" "extra"
      from
        all_tab_columns a
        left join all_col_comments cc on a.COLUMN_NAME=cc.COLUMN_NAME and a.OWNER=cc.SCHEMA_NAME and a.table_name=cc.table_name
        left join ALL_CONS_COLUMNS b on a.COLUMN_NAME=b.COLUMN_NAME and a.OWNER=b.OWNER and a.table_name=b.table_name
        left join all_CONSTRAINTS c on b.CONSTRAINT_NAME=c.CONSTRAINT_NAME
        left join sys.syscolumns sc on sc.id = (
            SELECT OBJECT_ID
                FROM all_objects t
                WHERE t.owner =a.OWNER
                AND t.object_name = a.table_name
                AND t.OBJECT_TYPE='TABLE'
        ) and sc."NAME"=a.COLUMN_NAME
      where
        a.owner = '${e}'
        and a.table_name = '${n}';`}showProcedures(e){return`select object_name "ROUTINE_NAME" from all_objects where object_type = 'PROCEDURE' and owner='${e}' ORDER BY "ROUTINE_NAME";`}showFunctions(e){return`select object_name "ROUTINE_NAME" from all_objects where object_type = 'FUNCTION' and owner='${e}' ORDER BY "ROUTINE_NAME";`}showViews(e){return`select object_name "name" from all_objects where object_type = 'VIEW' and owner='${e}';`}buildPageSql(e,n,t){return`SELECT * FROM ${n} LIMIT ${t};`}showTables(e,n){return`SELECT a.object_name "name",b.COMMENTS "comment" from all_objects a
join ALL_TAB_COMMENTS b on a.OWNER=b.OWNER and a.object_name=b.TABLE_NAME
where a.object_type = 'TABLE' and a.owner='${n}' and a.TEMPORARY<>'Y';`}showDatabases(){return`select object_name "Database" from all_objects where object_type = 'SCH';`}showSchemas(){return`select object_name "Database" from all_objects where object_type = 'SCH';`}tableTemplate(){return`CREATE TABLE table_name$1(  
    id int NOT NULL PRIMARY KEY IDENTITY(1,1),
    create_time DATETIME,
    name$2 VARCHAR(255)
);
COMMENT ON TABLE $1 IS '$3';
COMMENT ON COLUMN $1.$2 IS '$4';`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM $2`}procedureTemplate(){return`CREATE PROCEDURE proc_name$1(x IN OUT NUMBER, y OUT NUMBER)
IS
BEGIN
   $2
   y:=4 * x;
END;`}functionTemplate(){return`CREATE FUNCTION fun_name$1(x IN int) RETURN int$2
AS
BEGIN
    $3
    return x*2;
END;`}}class Pe extends oe{showVersion(){return"select @@version server_version;"}showAllForeignKeys(){return`SELECT 
        CONSTRAINT_NAME constraint_name,
        TABLE_SCHEMA table_schema,
        TABLE_NAME table_name,
        COLUMN_NAME column_name,
        REFERENCED_TABLE_SCHEMA referenced_schema,
        REFERENCED_TABLE_NAME referenced_table,
        REFERENCED_COLUMN_NAME referenced_column
         FROM information_schema.KEY_COLUMN_USAGE 
         WHERE REFERENCED_TABLE_NAME is not null`}createIndex(e){let n=`${e.type||"key"}`;return n.match(/BTREE/i)&&(n="key"),`ALTER TABLE ${e.table} ADD ${n} (\`${e.column||"$1"}\`)`}dropIndex(e,n){return`ALTER TABLE ${e} DROP INDEX \`${n}\``}showIndex(e,n){return`SELECT column_name "column_name",index_name "index_name",index_type "index_type",non_unique=0 "isUnique" FROM INFORMATION_SCHEMA.STATISTICS WHERE table_schema='${e}' and table_name='${n}';`}variableList(){return"show global VARIABLES"}statusList(){return"show global status"}kill(e){return`KILL ${e==null?void 0:e.ID};`}processList(){return"SELECT ID, USER User, DB, COMMAND Command, STATE State, TIME Time, INFO `SQL`\nFROM information_schema.PROCESSLIST;"}addColumn(e,n){const t=n?` AFTER \`${n}\``:"";return`ALTER TABLE ${e} 
    ADD COLUMN $1 [type]$2 COMMENT '$3'${t};`}createUser(){return`CREATE USER '$1'@'%' IDENTIFIED BY 'password$2';
-- Grant select privilege to all databases;
GRANT SELECT ON *.* TO '$1'@'%' WITH GRANT OPTION;
-- Grant all privileges to all databases;
GRANT ALL PRIVILEGES ON *.* TO '$1'@'%' WITH GRANT OPTION;`}updateUser(e){return`update mysql.user set 
    password = PASSWORD("newPassword")
    where User = '${e}';
FLUSH PRIVILEGES;
-- since mysql version 5.7, password column need change to authentication_string=PASSWORD("newPassword")`}updateColumn(e,n){var a,l;const{nullable:t,extra:r}=n;return this.updateColumnSql({table:e,...n,isNotNull:t!="YES",isAutoIncrement:(l=(a=r==null?void 0:r.toLowerCase())==null?void 0:a.includes)==null?void 0:l.call(a,"auto_increment")})}updateColumnSql(e){const{table:n,name:t,columnName:r=t,type:a,unsigned:l,zerofill:o,useCurrentTimestamp:i,isNotNull:u,isAutoIncrement:b,comment:O,defaultValue:N,character_set_name:v,collation_name:k}=e,d=a.match(/char|text|set|enum|blob|binary/i);return new H(`ALTER TABLE \`${n}\``).append(`
	CHANGE \`${r}\` \`${t}\` ${a}`).if(l=="1","UNSIGNED").if(o=="1","ZEROFILL").if(i,"ON UPDATE CURRENT_TIMESTAMP").if(d&&v,`CHARACTER SET ${v}`).if(d&&k,`COLLATE ${k}`).if(u,"NOT NULL").if(b,"AUTO_INCREMENT").if(O,`COMMENT '${O}'`).if(G(N)&&!u,"DEFAULT NULL").if(!G(N),`DEFAULT ${N=="CURRENT_TIMESTAMP"?N:`${ee(N,a)}`}`).append(";").toString()}showCollations(){return'select DEFAULT_COLLATE_NAME "name",CHARACTER_SET_NAME "charset",DESCRIPTION "description" from information_schema.CHARACTER_SETS ORDER BY name;'}showChecks(e,n){return`SELECT
        tc.CONSTRAINT_NAME "name",
        cc.CHECK_CLAUSE "clause"
    FROM
        information_schema.CHECK_CONSTRAINTS AS cc,
        information_schema.TABLE_CONSTRAINTS AS tc
    WHERE
        tc.CONSTRAINT_SCHEMA = '${e}'
        AND tc.TABLE_NAME = '${n}'
        AND tc.CONSTRAINT_TYPE = 'CHECK'
        AND tc.CONSTRAINT_SCHEMA = cc.CONSTRAINT_SCHEMA
        AND tc.CONSTRAINT_NAME = cc.CONSTRAINT_NAME;`}showUsers(){return"SELECT user user,host host FROM mysql.user;"}pingDataBase(e){return e?`use \`${e}\``:null}updateTable(e){const{table:n,newTableName:t,comment:r,newComment:a,collation:l,newCollation:o}=e;let i="";return a&&a!=r&&(i=`ALTER TABLE \`${n}\` COMMENT = '${a}';`),o&&o!=l&&(i+=`ALTER TABLE \`${n}\` collate = '${o}';`),t&&n!=t&&(i+=`ALTER TABLE \`${n}\` RENAME TO \`${t}\`;`),i}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE \`',table_schema,'\`.\`',TABLE_NAME, '\`;') trun FROM INFORMATION_SCHEMA.TABLES where  table_schema ='${e}' and TABLE_TYPE<>'VIEW';`}createDatabase(e){return`CREATE DATABASE $1
    DEFAULT CHARACTER SET = 'utf8mb4';`}showTableSource(e,n){return`SHOW CREATE TABLE \`${e}\`.\`${n}\`;`}showPartitions(e,n){return`SELECT 
PARTITION_NAME "name",PARTITION_METHOD "strategy",PARTITION_EXPRESSION "columnName",
PARTITION_DESCRIPTION "value",TABLE_ROWS "rows",DATA_LENGTH "length"
        FROM information_schema.partitions WHERE TABLE_SCHEMA='${e}' AND TABLE_NAME = '${n}' AND PARTITION_NAME IS NOT NULL`}showViewSource(e,n){return`SHOW CREATE VIEW  \`${e}\`.\`${n}\`;`}showProcedureSource(e,n){return`SHOW CREATE PROCEDURE \`${e}\`.\`${n}\`;`}showFunctionSource(e,n){return`SHOW CREATE FUNCTION \`${e}\`.\`${n}\`;`}showTriggerSource(e,n){return`SHOW CREATE TRIGGER \`${e}\`.\`${n}\`;`}showColumns(e,n){return`SELECT 
        c.COLUMN_NAME name,
        COLUMN_TYPE type,
        COLUMN_COMMENT comment,COLUMN_KEY \`key\`,IS_NULLABLE nullable,
        CHARACTER_MAXIMUM_LENGTH maximum_length,
        COLUMN_DEFAULT defaultValue,
        INSTR(COLUMN_TYPE,'zerofill')>0 "zerofill",
        INSTR(COLUMN_TYPE,'unsigned')>0 "unsigned",
        EXTRA extra,
        COLLATION_NAME collation_name,
        CHARACTER_SET_NAME character_set_name 
        FROM information_schema.columns c
        WHERE c.table_schema = '${e}' AND c.table_name = '${n}' 
        ORDER BY c.ORDINAL_POSITION;`}showForeignKeys(e,n){return`SELECT
        c.COLUMN_NAME column_name, ik.CONSTRAINT_NAME constraint_name,
        ik.REFERENCED_TABLE_NAME referenced_table, ik.REFERENCED_COLUMN_NAME referenced_column,
        UPDATE_RULE "updateRule",
        DELETE_RULE "deleteRule"
        FROM
        information_schema.columns c join information_schema.KEY_COLUMN_USAGE ik on c.table_schema = ik.TABLE_SCHEMA
        and c.table_name = ik.TABLE_NAME and c.COLUMN_NAME = ik.COLUMN_NAME
        JOIN information_schema.REFERENTIAL_CONSTRAINTS ir on ik.CONSTRAINT_NAME=ir.CONSTRAINT_NAME
        WHERE c.table_schema = '${e}' and c.table_name = '${n}' ORDER BY ik.CONSTRAINT_NAME;`}showTriggers(e,n){const t=n?` AND EVENT_OBJECT_TABLE='${n}'`:"";return`SELECT TRIGGER_NAME "trigger_name",event_object_table table_name,event_manipulation event FROM information_schema.TRIGGERS WHERE TRIGGER_SCHEMA = '${e}' ${t} ORDER BY TRIGGER_NAME;`}showProcedures(e){return`SELECT ROUTINE_NAME FROM information_schema.routines WHERE ROUTINE_SCHEMA = '${e}' and ROUTINE_TYPE='PROCEDURE' ORDER BY ROUTINE_NAME`}showFunctions(e){return`SELECT ROUTINE_NAME FROM information_schema.routines WHERE ROUTINE_SCHEMA = '${e}' and ROUTINE_TYPE='FUNCTION' ORDER BY ROUTINE_NAME`}showViews(e){return`SELECT TABLE_NAME name,SECURITY_TYPE "view_group" FROM information_schema.VIEWS  WHERE TABLE_SCHEMA = '${e}' ORDER BY TABLE_NAME`}buildPageSql(e,n,t,r=!1){return`SELECT * FROM ${r?e+".":""}${n} LIMIT ${t};`}showTables(e){return`SELECT TABLE_COMMENT "comment",TABLE_NAME "name",TABLE_ROWS "table_rows",\`AUTO_INCREMENT\` "auto_increment",
        row_format "row_format",DATA_LENGTH "data_length",INDEX_LENGTH "index_length",TABLE_COLLATION "collation",
        TABLE_TYPE "view_group",\`ENGINE\` engine
        FROM information_schema.TABLES  WHERE TABLE_SCHEMA = '${e}' and TABLE_TYPE<>'VIEW' ORDER BY TABLE_NAME;`}showDatabases(){return"show DATABASES"}showSchemas(){return this.showDatabases()}tableTemplate(){return`CREATE TABLE table_name$1(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME COMMENT 'Create Time',
    name$2 VARCHAR(255)
) COMMENT '$4';`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM $2`}procedureTemplate(){return`CREATE PROCEDURE proc_name$1()
BEGIN
$2
END;`}functionTemplate(){return`CREATE FUNCTION fun_name$1() RETURNS int$2
READS SQL DATA
BEGIN
    $3
    return 0;
END;`}}class st extends Pe{showVersion(){return"select replace(@@version,'-MariaDB','') server_version;"}}class ot extends He{showVersion(){return"show version"}showDatabases(){return"show dbs"}buildPageSql(e,n,t){return`db('${e}').collection('${n}').find({}).limit(${t}).toArray()`}showIndex(e,n){return`db('${e}').collection('${n}').indexes();`}createIndex(e){const{database:n,table:t,column:r}=e;return`db('${n}').collection('${t}').createIndex({ ${r||"column_name"}: 1 });`}createDatabase(e){return'db("db_name").createCollection("collection")'}}class Et extends oe{showVersion(){return"SELECT CAST(SERVERPROPERTY('ProductVersion') AS SYSNAME)+' '+CAST(SERVERPROPERTY('Edition') AS SYSNAME) AS server_version"}showAllForeignKeys(){return`SELECT 
    OBJECT_SCHEMA_NAME(fk.parent_object_id) AS table_schema,
    OBJECT_NAME(fk.parent_object_id) AS table_name,
    COL_NAME(fc.parent_object_id, fc.parent_column_id) AS column_name,
    OBJECT_SCHEMA_NAME(fk.referenced_object_id) AS referenced_schema,
    OBJECT_NAME(fk.referenced_object_id) AS referenced_table,
    COL_NAME(fc.referenced_object_id, fc.referenced_column_id) AS referenced_column
FROM 
    sys.foreign_keys fk
JOIN 
    sys.foreign_key_columns fc ON fk.object_id = fc.constraint_object_id`}showAllComments(){return`SELECT 
        s.name table_schema,
        t.name AS table_name,
        c2.name AS column_name,
        prop.value AS comment
        FROM 
           sys.columns c2 
                join sys.tables t on c2.object_id=t.object_id
                join sys.schemas s on t.schema_id=s.schema_id 
                join sys.extended_properties prop ON prop.major_id = c2.object_id AND prop.minor_id = c2.column_id`}createIndex(e){return`ALTER TABLE ${e.table} ADD ${e.type} (${e.column})`}dropIndex(e,n){return`DROP INDEX ${e}.${n}`}showIndex(e,n){return`SELECT
        index_name = ind.name,
        column_name = col.name,
        ind.is_primary_key "isPrimary",
        ind.is_unique "isUnique",
        ind.is_unique_constraint,
        CASE 
            WHEN ind.is_primary_key=1 THEN 'PRIMARY'
            WHEN ind.is_unique=1 THEN 'UNIQUE'
            WHEN ind.is_unique_constraint=1 THEN 'UNIQUE'
        ELSE 'INDEX' END index_type
      FROM
        sys.indexes ind
        INNER JOIN sys.index_columns ic ON ind.object_id = ic.object_id
        and ind.index_id = ic.index_id
        INNER JOIN sys.columns col ON ic.object_id = col.object_id
        and ic.column_id = col.column_id
        INNER JOIN sys.tables t ON ind.object_id = t.object_id
      WHERE
        t.name = '${n}';`}variableList(){throw new Error("Method not implemented.")}statusList(){throw new Error("Method not implemented.")}kill(e){return`kill ${e.ID};`}processList(){return`SELECT
    s.session_id "ID",
    s.login_name "User",
    s.program_name "Client",
    r.status "Status",
    r.wait_time "Wait Time",
    d.text "SQL"
FROM sys.dm_exec_sessions s
LEFT JOIN sys.dm_exec_requests r ON s.session_id = r.session_id
Outer APPLY sys.dm_exec_sql_text(sql_handle) d
WHERE s.is_user_process = 1;`}addColumn(e,n){return`ALTER TABLE ${e} 
    ADD $1 [type]$2;`}createUser(){return`CREATE LOGIN loginName$1 WITH PASSWORD = 'password$2';
-- user master[YourDatabaseName]
CREATE USER userName$3 FOR LOGIN loginName$1;
ALTER ROLE db_datareader ADD MEMBER userName$3;
ALTER ROLE db_datawriter ADD MEMBER userName$3;
-- ALTER ROLE db_ddladmin ADD MEMBER userName$3;`}updateColumn(e,n){const{name:t,type:r,comment:a,nullable:l,defaultValue:o}=n,i=l=="YES"?"NULL":"NOT NULL";return`-- change column type
ALTER TABLE ${e} 
    ALTER COLUMN ${t} ${r} ${i};
-- change column name
EXEC sp_rename '${e}.${t}', '${t}', 'COLUMN';`}updateColumnSql(e){const{columnName:n,columnType:t,newColumnName:r,comment:a,oldRow:l,isNotNull:o,schema:i,table:u}=e,b=o?"NOT NULL":"NULL";return new H(`ALTER TABLE "${i}"."${u}" ALTER COLUMN ${n} ${t} ${b};`,`
`).if(n!=r,()=>`EXEC sp_rename '${i}.${u}.${n}' , '${r}', 'COLUMN';`).if(a!=l.comment,()=>`EXEC ${l.comment?"sp_updateextendedproperty":"sp_addextendedproperty"} 
@level0type = N'Schema', @level0name = '${i}',
@level1type = N'Table', @level1name = '${u}', 
@level2type = N'Column', @level2name = '${r}',
@name = N'MS_Description', @value = N'${a}';`).toString()}showUsers(){return"SELECT name [user] from sys.database_principals where type='S'"}updateTable(e){const{schema:n,table:t,newTableName:r,comment:a,newComment:l}=e;let o="";return l&&l!=a&&(o=`EXEC ${a?"sp_updateextendedproperty":"sp_addextendedproperty"} 
@level0type = N'Schema', @level0name = '${n}',
@level1type = N'Table', @level1name = '${t}', 
@name = N'MS_Description', @value = N'${l}';`),r&&t!=r&&(o+=`sp_rename '${t}', '${r}';`),o}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE [',table_schema,'].[',TABLE_NAME, '];') trun FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE'  AND TABLE_SCHEMA='${e}'`}createDatabase(e){return`create database ${e||"[name]"}`}showViewSource(e,n){return`SELECT definition 'Create View' FROM sys.sql_modules WHERE object_id = OBJECT_ID('${e}.${n}');`}showProcedureSource(e,n){return`SELECT definition 'Create Procedure','${e}.${n}' "Procedure" FROM sys.sql_modules WHERE object_id = OBJECT_ID('${e}.${n}');`}showFunctionSource(e,n){return`SELECT definition 'Create Function','${e}.${n}' "Function" FROM sys.sql_modules WHERE object_id = OBJECT_ID('${e}.${n}');`}showTriggerSource(e,n){return`SELECT definition 'SQL Original Statement','${e}.${n}' "Trigger" FROM sys.sql_modules WHERE object_id = OBJECT_ID('${e}.${n}');`}showColumns(e,n){return["information_schema","sys"].includes(e==null?void 0:e.toLowerCase())?`SELECT
            name,
            type_name(system_type_id) "type",
            is_nullable nullable,
            max_length "maximum_length"
        FROM
            sys.all_columns
        WHERE
            object_id = OBJECT_ID('${e}.${n}') ;`:`SELECT 
               c.COLUMN_NAME "name",
               DATA_TYPE "type",
               numeric_precision "precision",
               numeric_scale "scale",
               IS_NULLABLE nullable, CHARACTER_MAXIMUM_LENGTH "maximum_length", COLUMN_DEFAULT "defaultValue", '' "comment", tc.constraint_type "key",
               COLUMNPROPERTY(object_id('${e}.${n}'), c.COLUMN_NAME, 'IsIdentity') extra
               FROM
               INFORMATION_SCHEMA.COLUMNS c
               left join  INFORMATION_SCHEMA.CONSTRAINT_COLUMN_USAGE ccu
               on c.COLUMN_NAME=ccu.column_name and c.table_name=ccu.table_name and ccu.TABLE_SCHEMA=c.TABLE_SCHEMA
               left join  INFORMATION_SCHEMA.TABLE_CONSTRAINTS tc
               on tc.constraint_name=ccu.constraint_name
               and tc.TABLE_SCHEMA=c.TABLE_SCHEMA and tc.table_name=c.table_name WHERE c.TABLE_SCHEMA = '${e}' AND c.table_name = '${n}' ORDER BY ORDINAL_POSITION`}showChecks(e,n){return`SELECT
        tc.CONSTRAINT_NAME "name",
        cc.CHECK_CLAUSE "clause"
    FROM
        "INFORMATION_SCHEMA"."CHECK_CONSTRAINTS" AS cc,
        "INFORMATION_SCHEMA"."TABLE_CONSTRAINTS" AS tc
    WHERE
        tc.CONSTRAINT_SCHEMA = '${e}'
        AND tc.TABLE_NAME = '${n}'
        AND tc.CONSTRAINT_TYPE = 'CHECK'
        AND tc.CONSTRAINT_SCHEMA = cc.CONSTRAINT_SCHEMA
        AND tc.CONSTRAINT_NAME = cc.CONSTRAINT_NAME;`}showForeignKeys(e,n){return`SELECT
        f.name AS "constraint_name",
        COL_NAME( fkc.parent_object_id, fkc.parent_column_id ) AS "column_name",
        OBJECT_NAME (fkc.referenced_object_id) AS "referenced_table",
        COL_NAME( fkc.referenced_object_id, fkc.referenced_column_id )  AS "referenced_column",
        update_referential_action_desc "updateRule",
        delete_referential_action_desc "deleteRule"
    FROM
        sys.foreign_key_columns fkc
        JOIN sys.foreign_keys f ON f.object_id = fkc.constraint_object_id
        JOIN sys.tables tab1 ON tab1.object_id = fkc.parent_object_id and tab1.name='${n}' and SCHEMA_NAME(tab1.schema_id)='${e}'
    ;`}showTriggers(e,n){const t=n?` AND tb.name='${n}'`:"";return`SELECT 
                tr.name AS trigger_name, 
                tb.name AS table_name 
            FROM 
                sys.triggers tr
                INNER JOIN sys.tables tb ON tr.parent_id = tb.object_id
                INNER JOIN sys.schemas sc ON tb.schema_id = sc.schema_id
            WHERE 
                tr.is_ms_shipped = 0
                AND sc.name = '${e}' ${t}`}showProcedures(e){return`SELECT ROUTINE_NAME FROM INFORMATION_SCHEMA.ROUTINES WHERE SPECIFIC_SCHEMA = '${e}' and ROUTINE_TYPE='PROCEDURE' ORDER BY ROUTINE_NAME`}showFunctions(e){return`SELECT ROUTINE_NAME FROM INFORMATION_SCHEMA.ROUTINES WHERE SPECIFIC_SCHEMA = '${e}' and ROUTINE_TYPE='FUNCTION' ORDER BY ROUTINE_NAME`}showViews(e,n){return`SELECT name FROM sys.all_views t where SCHEMA_NAME(t.schema_id)='${n}' order by name`}buildPageSql(e,n,t){return`SELECT TOP ${t} * FROM ${n};`}showTables(e,n,t){const{showRowCount:r}=t??{};return`SELECT t.name AS 'name', ep.value AS 'comment'
        ${r?", ds.row_count 'table_rows'":""}
FROM sys.tables t
    LEFT JOIN sys.extended_properties ep ON ep.major_id = t.object_id
    AND ep.minor_id = 0 AND ep.name = 'MS_Description'
    ${r?`LEFT JOIN sys.dm_db_partition_stats ds on ds.object_id = object_id('${n}.'+ t.name)
    and ds.index_id IN (0, 1)`:""}
WHERE
    t.schema_id = SCHEMA_ID('${n}') ORDER BY t.name;`}showDatabases(){return"SELECT name 'Database' FROM sys.databases"}showSchemas(){return"SELECT SCHEMA_NAME [schema] FROM INFORMATION_SCHEMA.SCHEMATA"}tableTemplate(e){return`CREATE TABLE ${(e=="dbo"?"":`${e}.`)+"table_name"}$1(  
    id int IDENTITY(1,1) primary key,
    create_time DATETIME,
    update_time DATETIME,
    content$2 NVARCHAR(255)
);
EXECUTE sp_addextendedproperty N'MS_Description', '[table_comment]', N'user', N'dbo', N'table', N'[table_name]', NULL, NULL;
EXECUTE sp_addextendedproperty N'MS_Description', '[column_comment]', N'user', N'dbo', N'table', N'[table_name]', N'column', N'[column_name]';
`}viewTemplate(){return`CREATE VIEW dbo.view_name$1
AS
SELECT * FROM 
GO`}procedureTemplate(){return`CREATE PROCEDURE dbo.procedure_name$1
AS
BEGIN
    $2
END;`}functionTemplate(){return`CREATE FUNCTION dbo.function_name$1() RETURNS [TYPE]
BEGIN
    $2
    return [value];
END;`}triggerTemplate(e){return`CREATE TRIGGER trigger_name$1
ON ${e??"[table_name]$2"}
[FOR/AFTER] INSERT
AS
BEGIN
    $3
END;`}}class it extends He{showVersion(){return"call dbms.components() yield name, versions, edition unwind versions as server_version return server_version;"}showDatabases(){return"SHOW DATABASES yield name AS Database"}showSchemas(){return this.showDatabases()}showTables(e){return"call db.labels() yield label as name RETURN name ORDER BY toLower(name)"}addColumn(e,n){return`MATCH (n:${e}) WHERE id(n) = 1 SET n.name = 'name' RETURN n`}showColumns(e,n){return`MATCH(n:\`${n}\`) UNWIND keys(n) AS name RETURN DISTINCT name`}showIndex(e,n){return`show indexes yield name as index_name, properties as column_name, type as index_type, labelsOrTypes where '${n}' in labelsOrTypes`}showViews(e){return"call db.relationshipTypes() yield relationshipType AS name RETURN name ORDER BY toLower(name)"}showUsers(){return"SHOW USERS"}createUser(){return`CREATE USER [name] IF NOT EXISTS 
    SET PASSWORD 'password';`}buildPageSql(e,n,t){return`MATCH (n${n=="*"?"":`:${n}`}) RETURN n LIMIT ${t}`}createDatabase(e){return"CREATE DATABASE $1"}tableTemplate(){return"CREATE (n:node {id:1}) return n;"}createIndex(e){return`CREATE INDEX FOR (n:${e.table}) ON (n.id)`}dropIndex(e,n){return`DROP INDEX \`${n}\``}viewTemplate(){return"MATCH (n1:node {id:1}), (n2:node {id:2}) CREATE (n1)-[r:TO]->(n2) RETURN type(r)"}}class Ke extends ge{defaultPart(){var b,O;const{oldRow:e,isAutoIncrement:n,defaultValue:t,columnType:r}=this.param,a=(b=t==null?void 0:t.match)==null?void 0:b.call(t,/\bnextval\b/);if(n&&!e.isAutoIncrement&&!a)return`${this.afterColumnPrefix} ADD GENERATED ALWAYS AS IDENTITY;`;if(!n&&e.isAutoIncrement&&!a)return`${this.afterColumnPrefix} DROP IDENTITY;`;if(!n&&e.isAutoIncrement&&a)return`${this.afterColumnPrefix} DROP DEFAULT;`;if(e.defaultValue==t)return"";const u=(O=t==null?void 0:t.match)!=null&&O.call(t,/\bnextval\b/)?t:ee(t,r);return`${this.afterColumnPrefix} ${G(t)?"DROP DEFAULT":`SET DEFAULT ${u}`};`}commentPart(){const{oldRow:e,table:n,columnName:t,comment:r}=this.param;if(r!=e.comment)return`COMMENT ON COLUMN "${n}"."${t}" is '${r}';`}}class Qe extends oe{showVersion(){return"SHOW server_version;"}createIndex(e){const n=e.name??`${e.column||"[column]"}`,t=e.indexType||"btree";return`CREATE INDEX ${n}_${new Date().getTime()}_index ON 
    ${e.table} USING ${t} ("${e.column||"[column]"}");`}dropIndex(e,n){return`DROP INDEX "${n}"`}showIndex(e,n){return`select
    t.relname as table_name,
    i.relname as index_name,
    a.attname as column_name,
    ix.indisprimary "isPrimary",
    ix.indisunique "isUnique",
    CASE ix.indisprimary
        WHEN true THEN 'PRIMARY'
    ELSE CASE ix.indisunique
        WHEN true THEN 'UNIQUE'
    ELSE 'KEY'
    END
    END AS index_type,
    am.amname index_method
  from
    pg_class t
    join pg_catalog.pg_namespace pgn ON pgn.oid=t.relnamespace and pgn.nspname='${e}'
    join pg_index ix on t.oid = ix.indrelid
    join pg_attribute a on t.oid = a.attrelid and a.attnum = ANY(string_to_array(textin(int2vectorout(ix.indkey)),' ')::int[])
    join pg_class i on ix.indexrelid = i.oid
    JOIN pg_am am ON am.oid=i.relam
  where
     t.relkind = 'r'
    and t.relname = '${n}'
  order by
    ix.indexrelid;`}variableList(){return"SHOW ALL"}statusList(){return`SELECT
        'db_numbackends' AS db,
        pg_stat_get_db_numbackends(datid) AS status
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_xact_commit',
        pg_stat_get_db_xact_commit(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_xact_rollback',
        pg_stat_get_db_xact_rollback(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_blocks_fetched',
        pg_stat_get_db_blocks_fetched(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_blocks_hit',
        pg_stat_get_db_blocks_hit(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()`}kill(e){return`SELECT pg_terminate_backend(${e.ID})`}processList(){return`SELECT
        a.pid AS "ID",
        query_start AS "Time",
        datname AS "db",
        CASE
        WHEN c.relname IS NOT NULL THEN c.relname
        ELSE l.virtualtransaction
        END AS "Target",
        l.mode AS "State",
        query AS "SQL"
      FROM
        pg_stat_activity a
        LEFT JOIN pg_locks l ON a.pid = l.pid
        LEFT JOIN pg_class c ON l.relation = c.oid
      ORDER BY
        a.pid ASC,
        c.relname ASC`}addColumn(e,n){return`ALTER TABLE ${e} 
  ADD COLUMN [column] [type];
COMMENT ON COLUMN ${e}.[column] IS 'comment';`}createUser(){return`CREATE USER $1 WITH PASSWORD 'password$2';
-- Grant select privilege;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO $1;
-- Grant all privileges;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO $1;`}updateUser(e){return`ALTER USER ${e} WITH PASSWORD 'new_password';`}updateColumn(e,n){const{name:t,type:r,comment:a,nullable:l,defaultValue:o}=n;return`-- change column type
ALTER TABLE ${e} 
    ALTER COLUMN ${t} TYPE ${r};
-- change column name
ALTER TABLE ${e} 
    RENAME COLUMN ${t} TO ${t};
-- Change column comment
COMMENT ON COLUMN ${e}.${t} IS '${a||"comment"}';`}updateColumnSql(e){return new Ke(e).genAlterSQL()}showUsers(){return'SELECT usename "user" from pg_user '}showAllForeignKeys(){return`SELECT
      refc.constraint_name "constraint_name",
      refc.constraint_schema "table_schema",
      kcu.table_name "table_name",
      kcu.column_name AS "column_name",
      ccu.table_name AS "referenced_table",
      ccu.column_name AS "referenced_column"
  FROM
      information_schema.referential_constraints AS refc,
      information_schema.key_column_usage AS kcu,
      information_schema.constraint_column_usage AS ccu
  WHERE
      refc.constraint_name = kcu.constraint_name
      AND refc.constraint_schema = kcu.table_schema
      AND ccu.constraint_name = refc.constraint_name;`}showForeignKeys(e,n){return`SELECT
      refc.constraint_name constraint_name,
      kcu.column_name AS column_name,
      ccu.table_name AS referenced_table,
      ccu.column_name AS referenced_column,
      kcu.ordinal_position AS ord_position,
      refc.update_rule "updateRule",
      refc.delete_rule "deleteRule"
  FROM
      information_schema.referential_constraints AS refc,
      information_schema.key_column_usage AS kcu,
      information_schema.constraint_column_usage AS ccu
  WHERE
      refc.constraint_schema = '${e}'
      AND refc.constraint_name = kcu.constraint_name
      AND refc.constraint_schema = kcu.table_schema
      AND ccu.constraint_name = refc.constraint_name
      AND kcu.table_name = '${n}'
  ORDER BY ord_position;`}pingDataBase(e){return e?`set search_path to '${e}';`:null}updateTable(e){const{table:n,newTableName:t,comment:r,newComment:a}=e;let l="";return a&&a!=r&&(l=`COMMENT ON TABLE "${n}" IS '${a}';`),t&&n!=t&&(l+=`ALTER TABLE "${n}" RENAME TO "${t}";`),l}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE "',TABLE_NAME, '";') trun FROM INFORMATION_SCHEMA.TABLES WHERE  table_schema ='${e}' AND table_type='BASE TABLE';`}createDatabase(e){return"CREATE DATABASE $1"}showViewSource(e,n,t){return t?`SELECT CONCAT('CREATE MATERIALIZED VIEW ',matviewname,'
AS
(',regexp_replace(definition,';$',''),')') "Create View"
    ,matviewname "table_name",'definition' "view_definition" from pg_matviews
    WHERE schemaname='${e}' and matviewname='${n}';`:`SELECT CONCAT('CREATE VIEW ',table_name,'
AS
(',regexp_replace(view_definition,';$',''),')') "Create View"
    ,table_name,view_definition from information_schema.views 
    where table_schema='${e}' and table_name='${n}'`}showMaterialViewSource(e,n){return`SELECT CONCAT('CREATE MATERIALIZED VIEW ',matviewname,'
AS
(',regexp_replace(definition,';$',''),')') "Create View"
    ,matviewname "table_name",'definition' "view_definition" from pg_matviews
    WHERE schemaname='${e}' and matviewname='${n}';`}showProcedureSource(e,n){return`select pg_get_functiondef('${e}.${n}' :: regproc) "Create Procedure",'${n}' "Procedure";`}showTriggerSource(e,n){return`select pg_get_triggerdef(oid) "SQL Original Statement",'${e}.${n}' "Trigger" from pg_trigger where tgname = '${n}';`}showColumns(e,n,t){return`SELECT 
          ${t?"c.*,":""}
          c.COLUMN_NAME "name", 
          atttypid::regtype AS pg_reg_type,
          DATA_TYPE "type",
          IS_NULLABLE nullable, 
          numeric_precision "precision",
          numeric_scale "scale",
          CHARACTER_MAXIMUM_LENGTH "maximum_length", 
          COLUMN_DEFAULT "defaultValue", 
          pg_catalog.col_description(pgc.oid, c.ordinal_position::int) AS "comment",
          tc.constraint_type "key",
          tc.constraint_name "constraint_name",
          cc.table_name "referenced_table",
          cc.column_name "referenced_column",
          pa.*
        FROM information_schema.columns c
        JOIN pg_catalog.pg_class pgc ON c.table_name = pgc.relname 
        JOIN pg_catalog.pg_namespace pgn ON pgn.oid=pgc.relnamespace and pgn.nspname=c.table_schema
        JOIN pg_attribute pa on pa.attname =c.column_name and pa.attrelid =pgc.oid 
        LEFT JOIN information_schema.key_column_usage ccu on ccu.table_schema=c.table_schema
          and ccu.table_name=c.table_name and ccu.column_name=c.COLUMN_NAME
        LEFT JOIN information_schema.table_constraints tc on tc.table_schema=c.table_schema 
          and tc.table_name=c.table_name and tc.constraint_name=ccu.constraint_name
        LEFT JOIN information_schema.constraint_column_usage cc on cc.table_schema=c.table_schema 
          and cc.constraint_name=tc.constraint_name and  tc.constraint_type='FOREIGN KEY'
        WHERE c.TABLE_SCHEMA = '${e}' AND c.table_name = '${n}' 
        ORDER BY c.ORDINAL_POSITION;`}showChecks(e,n){return`SELECT
    tc.CONSTRAINT_NAME "name",
    cc.CHECK_CLAUSE "clause"
FROM
    "information_schema"."check_constraints" AS cc,
    "information_schema"."table_constraints" AS tc
WHERE
    tc.CONSTRAINT_SCHEMA = '${e}'
    AND tc.TABLE_NAME = '${n}'
    AND tc.CONSTRAINT_TYPE = 'CHECK'
    AND tc.CONSTRAINT_SCHEMA = cc.CONSTRAINT_SCHEMA
    AND tc.CONSTRAINT_NAME = cc.CONSTRAINT_NAME
    AND cc.CONSTRAINT_NAME NOT LIKE '%_not_null'`}showPartitions(e,n){return`select col.column_name "columnName", pt.partition_strategy "strategy" from (
      select
          partrelid, partnatts, case partstrat when 'h' then 'HASH' when 'l' then 'LIST' when 'r' then 'RANGE' end as partition_strategy, unnest(partattrs) column_index
      from
          pg_partitioned_table ) pt
      join pg_class pc on pc.oid = pt.partrelid
      join information_schema.columns col on col.table_schema = pc.relnamespace :: regnamespace :: text
        and col.table_name = pc.relname and col.ordinal_position = pt.column_index
      WHERE col.table_schema='${e}' and col.table_name='${n}';`}showTriggers(e,n){const t=n?` AND event_object_table='${n}'`:"";return`SELECT TRIGGER_NAME "trigger_name",event_object_table table_name,string_agg(event_manipulation, ',') as event FROM information_schema.TRIGGERS WHERE 
    trigger_schema = '${e}' ${t} GROUP BY event_object_table,trigger_name ORDER BY TRIGGER_NAME ASC`}showProcedures(e){return`SELECT ROUTINE_NAME "ROUTINE_NAME",pg_get_functiondef(p.oid) source,p.oid FROM information_schema.routines r
    join pg_proc p on r.ROUTINE_NAME=p.proname JOIN pg_namespace n ON p.pronamespace = n.oid and n.nspname='${e}'
    WHERE r.ROUTINE_SCHEMA = '${e}' and r.ROUTINE_TYPE='PROCEDURE' ORDER BY r.ROUTINE_NAME ASC`}showFunctions(e){return`SELECT r.ROUTINE_NAME "ROUTINE_NAME",
    p.oid FROM information_schema.routines r
    join pg_proc p on r.ROUTINE_NAME=p.proname JOIN pg_namespace n ON p.pronamespace = n.oid and n.nspname='${e}'
    WHERE r.ROUTINE_SCHEMA = '${e}' and r.ROUTINE_TYPE='FUNCTION' ORDER BY r.ROUTINE_NAME ASC `}showFunctionSource(e,n,t){return t?`select pg_get_functiondef('${t}') "Create Function",'${n}' "Function";`:`select pg_get_functiondef('${e}.${n}' :: regproc) "Create Function",'${n}' "Function";`}showViews(e,n){return`select table_name "name" from information_schema.tables where table_schema='${n}' and table_type='VIEW' order by "name";`}showMaterialViews(e,n){return`SELECT matviewname "name" from pg_matviews WHERE schemaname='${n}' order by "name" ASC`}buildPageSql(e,n,t){return`SELECT * FROM ${n} LIMIT ${t};`}showTables(e,n){return`SELECT t.table_name "name", pg_catalog.obj_description(pgc.oid, 'pg_class') "comment",pgc.reltuples "table_rows"
FROM information_schema.tables t
JOIN pg_catalog.pg_class pgc ON t.table_name = pgc.relname 
JOIN pg_catalog.pg_namespace pgn ON pgn.oid=pgc.relnamespace and pgn.nspname=t.table_schema
WHERE t.table_type='BASE TABLE'
AND t.table_schema='${n}' order by t.table_name;`}showDatabases(){return"SELECT datname FROM pg_database WHERE datistemplate = false order by datname ASC;"}showSchemas(){return'SELECT nspname "schema" from pg_catalog.pg_namespace order by nspname ASC;'}showSequences(e){return`select sequencename as name,last_value as sequence from pg_sequences WHERE schemaname='${e}' ORDER BY name;`}showCustomTypes(e){return`SELECT  t.typname as name,typtype as type,string_agg(pg_enum.enumlabel, ',') enum_values
    FROM        pg_type t 
    LEFT JOIN   pg_enum ON pg_enum.enumtypid = t.oid
    LEFT JOIN   pg_catalog.pg_namespace n ON n.oid = t.typnamespace 
    WHERE (t.typrelid = 0 OR (SELECT c.relkind = 'c' FROM pg_catalog.pg_class c WHERE c.oid = t.typrelid)) 
    AND     NOT EXISTS(SELECT 1 FROM pg_catalog.pg_type el WHERE el.oid = t.typelem AND el.typarray = t.oid)
    and n.nspname='${e}' GROUP BY name,type;`}tableTemplate(){return`CREATE TABLE table_name$1(  
    id int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    create_time DATE,
    name$2 VARCHAR(255)
);
COMMENT ON TABLE table_name$1 IS '$3';
COMMENT ON COLUMN table_name$1.name$2 IS '$4';`}viewTemplate(e){return`CREATE ${e?"MATERIALIZED ":""}VIEW view_name$1
AS
SELECT * FROM $2`}procedureTemplate(){return`CREATE PROCEDURE proc_name$1()
LANGUAGE SQL
as $$
[$2]
$$;`}triggerTemplate(e){return`CREATE FUNCTION trigger_fun$1() RETURNS TRIGGER AS 
\\$body\\$
BEGIN
    $2
    RETURN [value];
END;
\\$body\\$ 
LANGUAGE plpgsql;

CREATE TRIGGER [name]$3
[BEFORE/AFTER] INSERT
ON ${e??"[table_name]$4"}
FOR EACH ROW
EXECUTE PROCEDURE [trigger_fun]();`}dropTriggerTemplate(e,n){return`DROP TRIGGER ${e} on ${n}`}functionTemplate(){return`CREATE FUNCTION fun_name$1() 
RETURNS int$2 AS $$
BEGIN
    $3
    return 0;
END;
$$ LANGUAGE plpgsql;`}}class ct extends Qe{showVersion(){return"SELECT VERSION() as server_version"}createIndex(e){throw new Error("Redshift not support index!")}variableList(){return"SHOW ALL"}statusList(){return`SELECT
        'db_numbackends' AS db,
        pg_stat_get_db_numbackends(datid) AS status
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_xact_commit',
        pg_stat_get_db_xact_commit(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_xact_rollback',
        pg_stat_get_db_xact_rollback(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_blocks_fetched',
        pg_stat_get_db_blocks_fetched(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_blocks_hit',
        pg_stat_get_db_blocks_hit(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()`}processList(){return`SELECT
        a.pid AS "Id",
        a.usename AS "User",
        a.client_addr AS "Host",
        a.client_port AS "Port",
        datname AS "db",
        query AS "Command",
        l.mode AS "State",
        query_start AS "Time",
        CASE
          WHEN c.relname IS NOT NULL THEN 'Locked Object: ' || c.relname
          ELSE 'Locked Transaction: ' || l.virtualtransaction
        END AS "Info"
      FROM
        pg_stat_activity a
        LEFT JOIN pg_locks l ON a.pid = l.pid
        LEFT JOIN pg_class c ON l.relation = c.oid
      ORDER BY
        a.pid ASC,
        c.relname ASC`}addColumn(e,n){return`ALTER TABLE ${e}
  ADD COLUMN [column] [type];
COMMENT ON COLUMN ${e}.[column] IS 'comment';`}createUser(){return"CREATE USER [name] WITH PASSWORD 'password';"}updateUser(e){return`ALTER USER ${e} WITH PASSWORD 'new_password';`}updateColumn(e,n){const{name:t,type:r}=n;return`-- change column type
ALTER TABLE ${e}
    ALTER COLUMN ${t} TYPE ${r};
-- change column name
ALTER TABLE ${e}
    RENAME COLUMN ${t} TO ${t};`}updateColumnSql(e){return new Ke(e).genAlterSQL()}showUsers(){return'SELECT usename "user" from pg_user '}updateTable(e){const{table:n,newTableName:t,comment:r,newComment:a}=e;let l="";return a&&a!=r&&(l=`COMMENT ON TABLE "${n}" IS '${a}';`),t&&n!=t&&(l+=`ALTER TABLE "${n}" RENAME TO "${t}";`),l}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE "',TABLE_NAME, '";') trun FROM INFORMATION_SCHEMA.TABLES WHERE  table_schema ='${e}' AND table_type='BASE TABLE';`}createDatabase(e){return"CREATE DATABASE $1"}showTableSource(e,n){return`SHOW TABLE "${e}"."${n}"`}showViewSource(e,n){return`SHOW VIEW "${e}"."${n}"`}showProcedureSource(e,n){return`select pg_get_functiondef('${e}.${n}' :: regproc) "Create Procedure",'${n}' "Procedure";`}showFunctionSource(e,n){return`select pg_get_functiondef('${e}.${n}' :: regproc) "Create Function",'${n}' "Function";`}showTriggerSource(e,n){return`select pg_get_triggerdef(oid) "SQL Original Statement",'${e}.${n}' "Trigger" from pg_trigger where tgname = '${n}';`}showPartitions(e,n){return""}showSequences(e){return`SELECT sequence_name name FROM information_schema.sequences WHERE sequence_schema = '${e}' ORDER BY sequence_name`}showTriggers(e,n){const t=n?` AND event_object_table='${n}'`:"";return`SELECT TRIGGER_NAME "trigger_name" FROM information_schema.TRIGGERS WHERE trigger_schema = '${e}' ${t} ORDER BY TRIGGER_NAME ASC`}showProcedures(e){return`SELECT ROUTINE_NAME "ROUTINE_NAME" FROM information_schema.routines WHERE ROUTINE_SCHEMA = '${e}' and ROUTINE_TYPE='PROCEDURE' ORDER BY ROUTINE_NAME ASC`}showFunctions(e){return`SELECT ROUTINE_NAME "ROUTINE_NAME" FROM information_schema.routines WHERE ROUTINE_SCHEMA = '${e}' and ROUTINE_TYPE='FUNCTION' ORDER BY ROUTINE_NAME ASC `}showTables(e,n){return`  SELECT t.table_name "name", pg_catalog.obj_description(pgc.oid, 'pg_class') "comment"
FROM information_schema.tables t
JOIN pg_catalog.pg_class pgc ON t.table_name = pgc.relname
JOIN pg_catalog.pg_namespace pgn ON pgn.oid=pgc.relnamespace and pgn.nspname=t.table_schema
WHERE t.table_type='BASE TABLE'
AND t.table_schema='${n}' order by t.table_name;`}showSchemas(){return'SELECT nspname "schema" from pg_catalog.pg_namespace order by nspname ASC;'}tableTemplate(){return`CREATE TABLE table_name$1(
    id INT identity(1, 1) NOT NULL PRIMARY KEY,
    create_time DATE,
    update_time DATE,
    content$2 VARCHAR(255)
);
COMMENT ON TABLE table_name IS 'table_comment';
COMMENT ON COLUMN table_name.content IS 'content';`}procedureTemplate(){return`CREATE PROCEDURE procedure_name()
as $$
begin
    SELECT 1;
END;
$$ LANGUAGE plpgsql;`}functionTemplate(){return`CREATE FUNCTION function_name()
RETURNS int STABLE
AS $$
    SELECT 1
$$ LANGUAGE sql;`}}class ut extends oe{showVersion(){return'select CURRENT_VERSION() as "server_version";'}createIndex(e){let n=`${e.type||"key"}`;return n.match(/BTREE/i)&&(n="key"),`ALTER TABLE ${e.table} ADD ${n} (\`${e.column||"$1"}\`)`}dropIndex(e,n){return`ALTER TABLE ${e} DROP INDEX \`${n}\``}showIndex(e,n){return""}variableList(){return"show global VARIABLES"}statusList(){return"show global status"}processList(){return"show processlist"}addColumn(e,n){const t=n?` AFTER \`${n}\``:"";return`ALTER TABLE ${e} 
    ADD COLUMN $1 [type]$2 COMMENT '$3'${t};`}createUser(){return`CREATE USER '$1'@'%' IDENTIFIED BY 'password$2';
-- Grant select privilege to all databases;
GRANT SELECT ON *.* TO '$1'@'%' WITH GRANT OPTION;
-- Grant all privileges to all databases;
GRANT ALL PRIVILEGES ON *.* TO '$1'@'%' WITH GRANT OPTION;`}updateUser(e){return`update mysql.user set 
    password = PASSWORD("newPassword")
    where User = '${e}';
FLUSH PRIVILEGES;
-- since mysql version 5.7, password column need change to authentication_string=PASSWORD("newPassword")`}updateColumn(e,n){var N;const{name:t,type:r,comment:a,nullable:l,defaultValue:o,extra:i,character_set_name:u,collation_name:b}=n,O=l!="YES";return new H(`ALTER TABLE ${e}`).append(`
	CHANGE ${t} ${t} ${r}`).if(u,`CHARACTER SET ${u}`).if(b,`COLLATE ${b}`).if(O,"NOT NULL").if((N=i==null?void 0:i.toLowerCase())==null?void 0:N.includes("auto_increment"),"AUTO_INCREMENT").if(a,`COMMENT '${a}'`).if(G(o)&&!O,"DEFAULT NULL").if(!G(o),`DEFAULT ${o=="CURRENT_TIMESTAMP"?o:`'${mn(o)}'`}`).toString()}updateColumnSql(e){const{table:n,columnName:t,newColumnName:r,columnType:a,isNotNull:l,isAutoIncrement:o,comment:i,defaultValue:u,oldRow:b}=e,O=`ALTER TABLE "${n}"`,N=l?"SET NOT NULL":"DROP NOT NULL";return new H(`${O} ALTER COLUMN "${t}" TYPE ${a};`,`
`).if(i&&i!=b.comment,`${O} ALTER COLUMN "${t}" COMMENT '${i}';`).if(l!=b.isNotNull,`${O} ALTER COLUMN "${t}" ${N};`).if(t!=r,`${O} RENAME COLUMN "${t}" TO "${r}";`).toString()}showCollations(){return""}showChecks(e,n){return""}showUsers(){return"SELECT user user,host host FROM mysql.user;"}pingDataBase(e,n){return e?`use "${n}"."${e}"`:"select 1"}updateTable(e){const{table:n,newTableName:t,comment:r,newComment:a,collation:l,newCollation:o}=e;let i="";return a&&a!=r&&(i=`ALTER TABLE \`${n}\` COMMENT = '${a}';`),o&&o!=l&&(i+=`ALTER TABLE \`${n}\` collate = '${o}';`),t&&n!=t&&(i+=`ALTER TABLE \`${n}\` RENAME TO \`${t}\`;`),i}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE \`',table_schema,'\`.\`',TABLE_NAME, '\`;') trun FROM INFORMATION_SCHEMA.TABLES where  table_schema ='${e}' and TABLE_TYPE<>'VIEW';`}createDatabase(e){return`CREATE DATABASE $1
    DEFAULT CHARACTER SET = 'utf8mb4';`}showTableSource(e,n){return`select get_ddl('table', '${e}.${n}') "Create Table";`}showViewSource(e,n){return`select get_ddl('view', '${e}.${n}') "Create View";`}showProcedureSource(e,n){return`select get_ddl('PROCEDURE', '${e}.${n}()') "Create Procedure";`}showFunctionSource(e,n){return`select get_ddl('FUNCTION', '${e}.${n}()') "Create Function";`}showTriggerSource(e,n){return`SHOW CREATE TRIGGER \`${e}\`.\`${n}\`;`}showColumns(e,n){return`SELECT 
        c.COLUMN_NAME "name",
        DATA_TYPE "type",
        CHARACTER_MAXIMUM_LENGTH "maximum_length",
        IS_IDENTITY "key",
        COMMENT "comment",
        IS_NULLABLE "nullable",
        COLUMN_DEFAULT "defaultValue",
        COLLATION_NAME "$"
        FROM information_schema.columns c
        WHERE c.table_schema = '${e}' AND c.table_name = '${n}' 
        ORDER BY c.ORDINAL_POSITION;`}showTriggers(e,n){const t=n?` AND EVENT_OBJECT_TABLE='${n}'`:"";return`SELECT TRIGGER_NAME FROM information_schema.TRIGGERS WHERE TRIGGER_SCHEMA = '${e}' ${t} ORDER BY TRIGGER_NAME;`}showProcedures(e){return`SELECT PROCEDURE_NAME ROUTINE_NAME FROM information_schema.PROCEDURES WHERE PROCEDURE_SCHEMA = '${e}' ORDER BY PROCEDURE_NAME`}showFunctions(e){return`SELECT FUNCTION_NAME ROUTINE_NAME FROM INFORMATION_SCHEMA.FUNCTIONS WHERE FUNCTION_SCHEMA='${e}' ORDER BY FUNCTION_NAME`}showViews(e,n){return`SELECT COMMENT "comment",TABLE_NAME "name",ROW_COUNT "table_rows"
        FROM information_schema.TABLES  WHERE TABLE_SCHEMA = '${n}' and TABLE_TYPE='VIEW' ORDER BY TABLE_NAME;`}buildPageSql(e,n,t){return`SELECT * FROM ${n} LIMIT ${t};`}showTables(e,n){return`SELECT COMMENT "comment",TABLE_NAME "name",ROW_COUNT "table_rows"
        FROM information_schema.TABLES  WHERE TABLE_SCHEMA = '${n}' and TABLE_TYPE<>'VIEW' ORDER BY TABLE_NAME;`}showDatabases(){return"show databases;"}showSchemas(){return'SELECT SCHEMA_NAME "schema" FROM INFORMATION_SCHEMA.SCHEMATA;'}tableTemplate(){return`CREATE TABLE table_name$1(  
    id int NOT NULL PRIMARY KEY AUTOINCREMENT,
    create_time DATE,
    name$2 VARCHAR(255)
);
COMMENT ON TABLE table_name$1 IS '$3';
COMMENT ON COLUMN table_name$1.name$2 IS '$4';`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM $2`}procedureTemplate(){return`create procedure proc_name$1() returns string
language javascript
as $$
    $2return 1+1;
$$;`}functionTemplate(){return`CREATE FUNCTION fun_name$1() RETURNS int
AS
$$
    $2return 1;
$$`}}class Xe extends He{showVersion(){return"select sqlite_version() as server_version"}updateColumn(e,n){throw new Error("SQLite not support update column.")}updateColumnSql(e){throw new Error("SQLite not support update column.")}createIndex(e){const{table:n,column:t="$2"}=e;return`CREATE INDEX ${`${n}_${t}`} ON ${n}(${t});`}showIndex(e,n){return`SELECT name index_name FROM sqlite_master WHERE type='index' and tbl_name='${n}' `}dropIndex(e,n){return`DROP INDEX ${n};`}showTables(e,n){return"SELECT name, type FROM sqlite_master WHERE type='table' ORDER BY type ASC, name ASC;"}addColumn(e,n){return`ALTER TABLE ${e} 
    ADD COLUMN $1 [type$2];`}showSequences(e){return"SELECT name,seq sequence FROM sqlite_sequence"}showColumns(e,n){return`SELECT t1.*,t1.pk "key",t1.dflt_value "defaultValue",t2."table" "referenced_table",t2."to" "referenced_column" FROM PRAGMA_TABLE_INFO('${n}') t1
        left join (
            SELECT * FROM  pragma_foreign_key_list('${n}')
        ) t2  on t1.name=t2.'from';`}showViews(e,n){return"SELECT name, type FROM sqlite_master WHERE type='view' AND name <> 'sqlite_sequence' AND name <> 'sqlite_stat1' ORDER BY type ASC, name ASC;"}showTriggers(e,n){return`SELECT name, tbl_name, sql FROM sqlite_master WHERE type='trigger' ${n?` AND tbl_name='${n}'`:""} ORDER BY name ASC;`}buildPageSql(e,n,t){return`SELECT * FROM ${n} LIMIT ${t};`}showTableSource(e,n){return`SELECT sql "Create Table" FROM sqlite_master where name='${n}' and type='table';`}showViewSource(e,n){return`SELECT sql "Create View" FROM sqlite_master where name='${n}' and type='view';`}showTriggerSource(e,n){return`SELECT sql FROM sqlite_master where name='${n}' and type='trigger';`}tableTemplate(){return`CREATE TABLE table_name$1(  
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    content TEXT
);`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM $2`}}class mt extends Xe{showVersion(){return"SELECT library_version as server_version from pragma_version()"}pingDataBase(e,n){return e?`set schema '${e}';`:null}showDatabases(){return'SELECT DISTINCT catalog_name "Database" from information_schema.schemata ORDER BY catalog_name'}showSchemas(e){return`SELECT schema_name "schema" from information_schema.schemata WHERE catalog_name='${e}' ORDER BY schema_name`}showTables(e,n){return`SELECT table_name "name" FROM information_schema.tables
        WHERE table_type in ('BASE TABLE','LOCAL TEMPORARY') and table_catalog='${e}' and table_schema = '${n}' order by table_name`}showViews(e,n){return`
SELECT table_name "name",1 "view_group",null "source" FROM information_schema.tables
        WHERE table_type='VIEW' and table_catalog='${e}' and table_schema = '${n}'
        UNION all
SELECT viewname "name",2 "view_group",definition "source" FROM pg_catalog.pg_views
        WHERE schemaname = '${n}'
ORDER BY "view_group",name`}tableTemplate(){return`CREATE TABLE table_name$1(  
    id INTEGER NOT NULL PRIMARY KEY,
    content TEXT
);`}showColumns(e,n){return["system","temp"].includes(e)?`SELECT column_name "name", data_type "type",
        column_default "defaultValue", is_nullable "nullable"
        FROM information_schema.columns c
        WHERE c.table_schema = '${e}' AND c.table_name = '${n}' 
        ORDER BY c.ORDINAL_POSITION;`:`SELECT t1.*,t1.pk "key",t1.dflt_value "defaultValue" FROM PRAGMA_TABLE_INFO('${n}') t1;`}updateColumn(e,n){const{name:t,type:r}=n;return`-- change column type
ALTER TABLE ${e} 
    ALTER COLUMN ${t} TYPE ${r};
-- change column name
ALTER TABLE ${e} 
    RENAME COLUMN ${t} TO ${t};`}updateColumnSql(e){return new ge(e).genAlterSQL()}}class Je extends Re{showVersion(){return"select version() as server_version;"}showDatabases(){return"show databases"}showTables(e,n){return`show tables in ${e}`}showColumns(e,n){return`describe ${e}.${n};`}showViews(e,n){return`show views in ${e}`}}class Tt extends Re{showVersion(){return"SELECT node_version as server_version FROM system.runtime.nodes;"}pingDataBase(e){return e?`use ${e}`:null}showDatabases(){return"show catalogs"}}class _t extends Re{showVersion(){return"SELECT cql_version as server_version FROM system.local;"}showUsers(){return'SELECT role as "user" FROM system_auth.roles;'}pingDataBase(e){return e?`use ${e}`:null}createDatabase(e){return`CREATE KEYSPACE $1
WITH REPLICATION = { 
    'class' : 'SimpleStrategy', 
    'replication_factor' : 1 
};`}showDatabases(){return'select keyspace_name as "database" from system_schema.keyspaces;'}showTables(e,n){return`select table_name as "name" from system_schema.tables where keyspace_name='${e}'`}showColumns(e,n){return`select column_name as "name", type, kind as "key" 
                from system_schema.columns 
                where keyspace_name='${e}' 
                and table_name='${n}'`}tableTemplate(){return`CREATE TABLE table_name$1(  
    id int PRIMARY key,
    create_time DATE,
    update_time DATE,
    content TEXT
);`}}class dt extends ge{otherPart(){const{oldRow:e,isAutoIncrement:n}=this.param;return!e.isAutoIncrement&&n?`${this.afterColumnPrefix} SET GENERATED ALWAYS as identity;`:e.isAutoIncrement&&!n?`${this.afterColumnPrefix} DROP GENERATED;`:null}commentPart(){const{oldRow:e,table:n,columnName:t,comment:r}=this.param;if(r!=e.comment)return`COMMENT ON COLUMN "${n}"."${t}" is '${r}';`}changeTypePart(){const{oldRow:e,columnType:n}=this.param;return e.type==n?"":`${this.afterColumnPrefix} SET DATA TYPE ${n};`}}class ze extends Re{showVersion(){return'SELECT SERVICE_LEVEL as "server_version" FROM SYSIBMADM.ENV_INST_INFO;'}showUsers(){return`SELECT GRANTEE "user" FROM syscat.dbauth WHERE GRANTEETYPE='U';`}pingDataBase(e){return e?`set SCHEMA ${e}`:null}showDatabases(){return'select schemaname "database" from syscat.schemata'}showTableSource(e,n){return null}showTables(e,n){return`select tabname "name", remarks "comment" from syscat.tables where tabschema='${n}' and TYPE='T' order by tabname`}showColumns(e,n){return`select COLUMN_NAME "name",
        DATA_TYPE "type",
        IS_NULLABLE "nullable",
        NUMERIC_PRECISION "precision",
        NUMERIC_SCALE "scale",
        CHARACTER_MAXIMUM_LENGTH "maximum_length",
        sc.length "number_length",
        COLUMN_DEFAULT "defaultValue",
        tc.TYPE "key",
        sc.remarks "comment",
        sc.IDENTITY "extra",
        r.REFTABNAME "referenced_table",
        trim(r.PK_COLNAMES) "referenced_column"
        from SYSIBM.columns c
        left join syscat.keycoluse kc
            on c.TABLE_SCHEMA=kc.TABSCHEMA and c.TABLE_NAME=kc.TABNAME  and c.COLUMN_NAME=kc.COLNAME
        left join SYSCAT.tabconst tc
            on c.TABLE_SCHEMA=tc.TABSCHEMA and c.TABLE_NAME=tc.TABNAME  and tc.CONSTNAME=kc.CONSTNAME
        left join sysibm.syscolumns sc
            on c.TABLE_SCHEMA=sc.TBCREATOR and c.TABLE_NAME=sc.TBNAME  and c.COLUMN_NAME=sc.NAME
        left join syscat.references r
            on c.TABLE_SCHEMA=r.TABSCHEMA and c.TABLE_NAME=r.TABNAME  and c.COLUMN_NAME=trim(r.FK_COLNAMES)
        where
            TABLE_SCHEMA = '${e}'
            and TABLE_NAME = '${n}'
        order by ORDINAL_POSITION;`}updateColumnSql(e){return new dt(e).genAlterSQL()}showAllForeignKeys(){return`SELECT 
        CONSTNAME "constraint_name",
        TABSCHEMA "table_schema",
        TABNAME "table_name",
        FK_COLNAMES "column_name",
    REFTABNAME "referenced_table",
    PK_COLNAMES "referenced_column"
     FROM syscat.references`}showForeignKeys(e,n){return`SELECT 
        FK_COLNAMES "column_name",
        CONSTNAME "constraint_name",
        REFTABNAME "referenced_table",
        PK_COLNAMES "referenced_column",
        UPDATERULE "updateRule",
        DELETERULE "deleteRule"
         FROM syscat.references WHERE 
        TABSCHEMA='${e}' and TABNAME='${n}'`}showIndex(e,n){return`SELECT 
        COLNAMES "column_name",
        INDNAME "index_name",
        UNIQUERULE='U' "isUnique"
         FROM SYSCAT.INDEXES WHERE TABNAME = '${n}' AND TABSCHEMA = '${e}'`}showViews(e,n){return`select VIEWNAME "name",TEXT "source" from SYSCAT.VIEWS where VIEWSCHEMA = '${n}';`}showProcedures(e){return`select PROCNAME "routine_name",TEXT "source" from SYSCAT.procedures where PROCSCHEMA = '${e}' order by PROCNAME;`}showChecks(e,n){return`SELECT CONSTNAME "name",TEXT "clause" FROM SYSCAT.CHECKS WHERE TABNAME = '${n}' AND TABSCHEMA = '${e}';`}showTriggers(e,n){let t=`SELECT TRIGNAME "trigger_name",TEXT "source",TABNAME "table_name",TRIGEVENT "event" FROM syscat.triggers WHERE TABSCHEMA = '${e}'`;return n&&(t+=`AND TABNAME = '${n}'`),t}showFunctions(e){return`select FUNCNAME "routine_name",BODY "source" from SYSCAT.FUNCTIONS where FUNCSCHEMA = '${e}' order by FUNCNAME;`}dropIndex(e,n){return`DROP INDEX "${n}"`}createDatabase(e){return`CREATE SCHEMA ${e}$1;`}tableTemplate(){return`CREATE TABLE table_name$1(  
    id INTEGER NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    create_time DATE,
    update_time DATE,
    content VARCHAR(255)
);`}processList(){return`SELECT session_auth_id,
        application_handle,
        elapsed_time_sec,
        activity_state,
        rows_read,
        stmt_text info
 FROM sysibmadm.mon_current_sql
 ORDER BY elapsed_time_sec DESC`}}class At extends Pe{tableTemplate(){return`CREATE TABLE table_name(  
    id int NOT NULL  COMMENT 'Primary Key',
    create_time DATETIME COMMENT 'Create Time',
    name VARCHAR(255)
) 
AGGREGATE KEY(id,create_time,name)
DISTRIBUTED BY HASH(id) BUCKETS 1
PROPERTIES (
    "replication_allocation" = "tag.location.default: 1"
);`}showColumns(e,n){return`SELECT 
        c.COLUMN_NAME name,
        COLUMN_TYPE type,
        COLUMN_COMMENT comment,COLUMN_KEY \`key\`,IS_NULLABLE nullable,
        CHARACTER_MAXIMUM_LENGTH maximum_length,
        COLUMN_DEFAULT defaultValue,
        INSTR(COLUMN_TYPE,'zerofill')>0 "zerofill",
        INSTR(COLUMN_TYPE,'unsigned')>0 "unsigned",
        EXTRA extra,
        COLLATION_NAME collation_name,
        CHARACTER_SET_NAME character_set_name 
        FROM information_schema.columns c
        WHERE c.table_schema = '${e}' AND c.table_name = '${n}' 
        ORDER BY c.ORDINAL_POSITION;`}}class Nt extends oe{showVersion(){return"SELECT SERVER_VERSION();"}createIndex(e){let n=`${e.type||"key"}`;return n.match(/BTREE/i)&&(n="key"),`ALTER TABLE ${e.table} ADD ${n} (\`${e.column||"$1"}\`)`}dropIndex(e,n){return`ALTER TABLE ${e} DROP INDEX \`${n}\``}showIndex(e,n){return`SELECT column_name "column_name",index_name "index_name",index_type "index_type",non_unique=0 "isUnique" FROM INFORMATION_SCHEMA.STATISTICS WHERE table_schema='${e}' and table_name='${n}';`}variableList(){return"show global VARIABLES"}statusList(){return"show global status"}processList(){return"show processlist"}addColumn(e,n){const t=n?` AFTER \`${n}\``:"";return`ALTER TABLE ${e} 
    ADD COLUMN $1 [type]$2 COMMENT '$3'${t};`}createUser(){return`CREATE USER '$1'@'%' IDENTIFIED BY 'password$2';
-- Grant select privilege to all databases;
GRANT SELECT ON *.* TO '$1'@'%' WITH GRANT OPTION;
-- Grant all privileges to all databases;
GRANT ALL PRIVILEGES ON *.* TO '$1'@'%' WITH GRANT OPTION;`}updateUser(e){return`update mysql.user set 
    password = PASSWORD("newPassword")
    where User = '${e}';
FLUSH PRIVILEGES;
-- since mysql version 5.7, password column need change to authentication_string=PASSWORD("newPassword")`}updateColumn(e,n){var a,l;const{nullable:t,extra:r}=n;return this.updateColumnSql({table:e,...n,isNotNull:t!="YES",isAutoIncrement:(l=(a=r==null?void 0:r.toLowerCase())==null?void 0:a.includes)==null?void 0:l.call(a,"auto_increment")})}updateColumnSql(e){const{table:n,name:t,columnName:r=t,type:a,unsigned:l,zerofill:o,useCurrentTimestamp:i,isNotNull:u,isAutoIncrement:b,comment:O,defaultValue:N,character_set_name:v,collation_name:k}=e,d=!Tn(a)&&!a.match(/json/i);return new H(`ALTER TABLE \`${n}\``).append(`
	CHANGE \`${r}\` \`${t}\` ${a}`).if(l=="1","UNSIGNED").if(o=="1","ZEROFILL").if(i,"ON UPDATE CURRENT_TIMESTAMP").if(d&&v,`CHARACTER SET ${v}`).if(d&&k,`COLLATE ${k}`).if(u,"NOT NULL").if(b,"AUTO_INCREMENT").if(O,`COMMENT '${O}'`).if(G(N)&&!u,"DEFAULT NULL").if(!G(N),`DEFAULT ${N=="CURRENT_TIMESTAMP"?N:`${ee(N,a)}`}`).append(";").toString()}showCollations(){return null}showChecks(e,n){return`SELECT
        tc.CONSTRAINT_NAME "name",
        cc.CHECK_CLAUSE "clause"
    FROM
        information_schema.CHECK_CONSTRAINTS AS cc,
        information_schema.TABLE_CONSTRAINTS AS tc
    WHERE
        tc.CONSTRAINT_SCHEMA = '${e}'
        AND tc.TABLE_NAME = '${n}'
        AND tc.CONSTRAINT_TYPE = 'CHECK'
        AND tc.CONSTRAINT_SCHEMA = cc.CONSTRAINT_SCHEMA
        AND tc.CONSTRAINT_NAME = cc.CONSTRAINT_NAME;`}showUsers(){return"SELECT user user,host host FROM mysql.user;"}pingDataBase(e){return e?`use \`${e}\``:null}updateTable(e){const{table:n,newTableName:t,comment:r,newComment:a,collation:l,newCollation:o}=e;let i="";return a&&a!=r&&(i=`ALTER TABLE \`${n}\` COMMENT = '${a}';`),o&&o!=l&&(i+=`ALTER TABLE \`${n}\` collate = '${o}';`),t&&n!=t&&(i+=`ALTER TABLE \`${n}\` RENAME TO \`${t}\`;`),i}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE \`',table_schema,'\`.\`',TABLE_NAME, '\`;') trun FROM INFORMATION_SCHEMA.TABLES where  table_schema ='${e}' and TABLE_TYPE<>'VIEW';`}createDatabase(e){return"CREATE DATABASE $1;"}showTableSource(e,n){return`SHOW CREATE TABLE \`${e}\`.\`${n}\`;`}showPartitions(e,n){return`SELECT 
PARTITION_NAME "name",PARTITION_METHOD "strategy",PARTITION_EXPRESSION "columnName",
PARTITION_DESCRIPTION "value",TABLE_ROWS "rows",DATA_LENGTH "length"
        FROM information_schema.partitions WHERE TABLE_SCHEMA='${e}' AND TABLE_NAME = '${n}' AND PARTITION_NAME IS NOT NULL`}showViewSource(e,n){return`SHOW CREATE VIEW  \`${e}\`.\`${n}\`;`}showProcedureSource(e,n){return`SHOW CREATE PROCEDURE \`${e}\`.\`${n}\`;`}showFunctionSource(e,n){return`SHOW CREATE FUNCTION \`${e}\`.\`${n}\`;`}showTriggerSource(e,n){return`SHOW CREATE TRIGGER \`${e}\`.\`${n}\`;`}showColumns(e,n){return`desc ${n}`}showForeignKeys(e,n){return`SELECT
        c.COLUMN_NAME column_name, ik.CONSTRAINT_NAME constraint_name,
        ik.REFERENCED_TABLE_NAME referenced_table, ik.REFERENCED_COLUMN_NAME referenced_column,
        UPDATE_RULE "updateRule",
        DELETE_RULE "deleteRule"
        FROM
        information_schema.columns c join information_schema.KEY_COLUMN_USAGE ik on c.table_schema = ik.TABLE_SCHEMA
        and c.table_name = ik.TABLE_NAME and c.COLUMN_NAME = ik.COLUMN_NAME
        JOIN information_schema.REFERENTIAL_CONSTRAINTS ir on ik.CONSTRAINT_NAME=ir.CONSTRAINT_NAME
        WHERE c.table_schema = '${e}' and c.table_name = '${n}' ORDER BY ik.CONSTRAINT_NAME;`}showProcedures(e){return`SELECT ROUTINE_NAME FROM information_schema.routines WHERE ROUTINE_SCHEMA = '${e}' and ROUTINE_TYPE='PROCEDURE' ORDER BY ROUTINE_NAME`}showFunctions(e){return`SELECT ROUTINE_NAME FROM information_schema.routines WHERE ROUTINE_SCHEMA = '${e}' and ROUTINE_TYPE='FUNCTION' ORDER BY ROUTINE_NAME`}showViews(e){return`SELECT TABLE_NAME name,SECURITY_TYPE "view_group" FROM information_schema.VIEWS  WHERE TABLE_SCHEMA = '${e}' ORDER BY TABLE_NAME`}buildPageSql(e,n,t){return`SELECT * FROM ${n} LIMIT ${t};`}showTables(e){return`show ${e}.tables;`}showDatabases(){return"show databases"}showSchemas(){return this.showDatabases()}tableTemplate(e){return`CREATE TABLE table_name$1(  
    create_time timestamp,
    name$2 NCHAR(255)
);`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM $2`}procedureTemplate(){return`CREATE PROCEDURE proc_name$1()
BEGIN
$2
END;`}functionTemplate(){return`CREATE FUNCTION fun_name$1() RETURNS int$2
READS SQL DATA
BEGIN
    $3
    return 0;
END;`}}class Rt extends Je{showVersion(){return""}}class Ct extends Re{showDatabases(){return"SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA ORDER BY SCHEMA_NAME;"}showTables(e,n=e){return`SELECT table_name,ddl source FROM ${n}.INFORMATION_SCHEMA.TABLES  WHERE TABLE_SCHEMA = '${n}' and TABLE_TYPE<>'VIEW' ORDER BY TABLE_NAME;`}showTableSource(e,n){return`SELECT ddl source FROM ${e}.INFORMATION_SCHEMA.TABLES  WHERE TABLE_SCHEMA = '${e}' and table_name='${n}' ORDER BY TABLE_NAME;`}showColumns(e,n){return`SELECT COLUMN_NAME name,DATA_TYPE type, IS_NULLABLE nullable 
            FROM ${e}.INFORMATION_SCHEMA.COLUMNS WHERE table_schema = '${e}' AND table_name = '${n}' ORDER BY ORDINAL_POSITION;`}showViews(e,n=e){return`SELECT TABLE_NAME,view_definition source FROM ${n}.INFORMATION_SCHEMA.VIEWS  WHERE TABLE_SCHEMA = '${n}' ORDER BY TABLE_NAME`}tableTemplate(e){return`CREATE TABLE ${e}.table_name$1(  
    id INT64,
    create_time DATE,
    update_time DATE,
    content STRING
);`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM `}}class St extends ze{showVersion(){return"SELECT SYSTEM_VALUE_NAME, CURRENT_CHARACTER_VALUE FROM QSYS2.SYSTEM_VALUE_INFO WHERE SYSTEM_VALUE_NAME IN ('QSRLNBR', 'QMODEL');"}showUsers(){return`SELECT AUTHORIZATION_NAME AS "user" FROM QSYS2.USER_INFO WHERE STATUS = 'ENABLED';`}pingDataBase(e){return e?`SET SCHEMA ${e}`:null}showDatabases(){return'SELECT SCHEMA_NAME AS "database" FROM QSYS2.SYSSCHEMAS;'}showTables(e,n){return`SELECT TABLE_NAME AS "name", TABLE_TEXT AS "comment" FROM QSYS2.SYSTABLES WHERE TABLE_SCHEMA='${n}' AND TABLE_TYPE='T' ORDER BY TABLE_NAME;`}showColumns(e,n){return`SELECT COLUMN_NAME AS "name",
                       DATA_TYPE AS "type",
                       IS_NULLABLE AS "nullable",
                       NUMERIC_PRECISION AS "precision",
                       NUMERIC_SCALE AS "scale",
                       CHARACTER_MAXIMUM_LENGTH AS "maximum_length",
                       COLUMN_DEFAULT AS "defaultValue",
                       COLUMN_TEXT AS "comment",
                       IDENTITY AS "extra"
                FROM QSYS2.SYSCOLUMNS
                WHERE TABLE_SCHEMA = '${e}'
                  AND TABLE_NAME = '${n}'
                ORDER BY ORDINAL_POSITION;`}showAllForeignKeys(){return`SELECT 
                    CONSTRAINT_NAME AS "constraint_name",
                    TABLE_SCHEMA AS "table_schema",
                    TABLE_NAME AS "table_name",
                    CONSTRAINT_KEYS AS "column_name",
                    SYSTEM_TABLE_NAME AS "referenced_table",
                    SYSTEM_CONSTRAINT_SCHEMA AS "referenced_column"
                FROM QSYS2.SYSCST
                WHERE CONSTRAINT_TYPE = 'FOREIGN KEY';`}showForeignKeys(e,n){return`SELECT 
                    CONSTRAINT_KEYS AS "column_name",
                    CONSTRAINT_NAME AS "constraint_name",
                    SYSTEM_TABLE_NAME AS "referenced_table",
                    SYSTEM_CONSTRAINT_SCHEMA AS "referenced_column"
                FROM QSYS2.SYSCST
                WHERE TABLE_SCHEMA='${e}' AND TABLE_NAME='${n}' AND CONSTRAINT_TYPE='FOREIGN KEY';`}showIndex(e,n){return`SELECT 
                    INDEX_NAME AS "index_name",
                    COLUMN_NAME AS "column_name",
                    CASE WHEN NON_UNIQUE = 0 THEN 'YES' ELSE 'NO' END AS "isUnique"
                FROM QSYS2.SYSINDEXES
                WHERE TABLE_NAME = '${n}' AND TABLE_SCHEMA = '${e}';`}showViews(e,n){return`SELECT VIEW_NAME AS "name", VIEW_DEFINITION AS "source" FROM QSYS2.SYSVIEWS WHERE TABLE_SCHEMA = '${n}';`}showProcedures(e){return`SELECT SPECIFIC_NAME AS "routine_name", ROUTINE_DEFINITION AS "source" FROM QSYS2.SYSROUTINES WHERE ROUTINE_SCHEMA = '${e}' ORDER BY SPECIFIC_NAME;`}showChecks(e,n){return`SELECT CONSTRAINT_NAME AS "name", CHECK_CLAUSE AS "clause" FROM QSYS2.SYSCST WHERE TABLE_NAME = '${n}' AND TABLE_SCHEMA = '${e}' AND CONSTRAINT_TYPE = 'CHECK';`}showTriggers(e,n){return`SELECT TRIGGER_NAME AS "trigger_name", ACTION_STATEMENT AS "source", EVENT_OBJECT_TABLE AS "table_name", EVENT_MANIPULATION AS "event" FROM QSYS2.SYSTRIGGERS WHERE EVENT_OBJECT_SCHEMA = '${e}'${n?` AND EVENT_OBJECT_TABLE = '${n}'`:""};`}showFunctions(e){return`SELECT SPECIFIC_NAME AS "routine_name", ROUTINE_DEFINITION AS "source" FROM QSYS2.SYSFUNCS WHERE FUNCTION_SCHEMA = '${e}' ORDER BY SPECIFIC_NAME;`}dropIndex(e,n){return`DROP INDEX ${e}.${n};`}processList(){return`SELECT JOB_NAME, 
                       AUTHORIZATION_NAME, 
                       TOTAL_CPU_TIME, 
                       TOTAL_DISK_IO_COUNT, 
                       TOTAL_MEMORY_USAGE 
                FROM QSYS2.ACTIVE_JOB_INFO 
                ORDER BY TOTAL_CPU_TIME DESC;`}}function Ot(c){switch(c||(c=R.MYSQL),c){case null:case R.MYSQL:return new Pe;case R.MARIA_DB:return new st;case R.DORIS:return new At;case R.SQLServer:return new Et;case R.libSQL:case R.SQLITE:return new Xe;case R.DUCK_DB:return new mt;case R.REDSHIFT:return new ct;case R.SNOWFLAKE:return new ut;case R.PG:return new Qe;case R.CLICKHOUSE:return new rt;case R.DM:return new lt;case R.ORACLE:return new je;case R.CASSANDRA:return new _t;case R.BIG_QUERY:return new Ct;case R.PRESTO:case R.TRINO:return new Tt;case R.HIVE:return new Je;case R.ATHENA:return new Rt;case R.DB2:return new ze;case R.AS400:return new St;case R.MONGO_DB:return new ot;case R.NEO4J:return new it;case R.TDengine:return new Nt}return new Re}class ce{constructor(e){this.meta=e,this.dialect=Ot(e.dbType),this.wrappedTable=ie(this.meta.table,this.meta.dbType,_n.Always)}updateTable(e){return this.dialect.updateTable(e)}columnTypes(){return["INTEGER",{label:"VARCHAR",value:"VARCHAR(255)"},{label:"CHAR",value:"CHAR(50)"},"hr","DATE","TIMESTAMP","hr","BOOLEAN","FLOAT","DOUBLE","hr","TEXT","JSON","BLOB"]}strategies(){return["RESTRICT","CASCADE","SET NULL","SET DEFAULT","NO ACTION"]}newColumn(e){const{name:n,type:t,isNotNull:r}=e,a=r?" NOT NULL":"";return`ALTER TABLE ${this.wrappedTable} ADD COLUMN ${ie(n,this.meta.dbType)} ${t}${a}`}updateColumn(e){return this.dialect.updateColumnSql({...e,table:this.meta.table,schema:this.meta.schema})}dropColumn(e){return`ALTER TABLE ${this.wrappedTable} DROP COLUMN ${ie(e,this.meta.dbType)}`}formatIndexType(e){return e.index_type}indexTypes(){return[{label:"INDEX",value:"INDEX"},{label:"UNIQUE",value:"UNIQUE"}]}dropIndex(e){return this.dialect.dropIndex(this.wrappedTable,e)}showChecks(){return this.dialect.showChecks(this.meta.schema,this.meta.table)}showForeignKeys(){return this.dialect.showForeignKeys(this.meta.schema,this.meta.table)}newForeignKey(e){const{column:n,foreignKeyName:t,refTable:r,refColumn:a,onUpdate:l,onDelete:o}=e,i=l=="NO ACTION"?"":` ON UPDATE ${l}`,u=o=="NO ACTION"?"":` ON DELETE ${o}`;return new H(`ALTER TABLE "${this.meta.table}"`).if(t,()=>`ADD CONSTRAINT ${t}`).if(!t,"ADD").append(`FOREIGN KEY ("${n}") REFERENCES "${r}"("${a}")${i}${u};`).toString()}dropForeignKey(e){return`ALTER TABLE "${this.meta.table}" DROP CONSTRAINT ${e};`}newCheck(e){return`ALTER TABLE ${this.wrappedTable} ADD CHECK (${e});`}dropCheck(e){return`ALTER TABLE ${this.wrappedTable} DROP CONSTRAINT ${e};`}splitColumn(e,n='"'){return e.map(t=>n+t+n).join(",")}}class pt extends ce{columnTypes(){return["Int32","String","Float32","hr","Date","DateTime","hr","BOOLEAN","UUID",{label:"Array",value:"Array(String)"},"hr","JSON",{label:"Tuple",value:"Tuple(String)"},{label:"Map",value:"Map(String,String)"}]}newColumn(e){const{name:n,type:t,defaultValue:r,comment:a}=e;return new H(`ALTER TABLE ${this.wrappedTable} ADD COLUMN "${n}" ${t}`).if(!G(r),`DEFAULT ${ee(r,t)}`).if(a,`COMMENT '${a}'`).toString()}newIndex(e){const{columns:n}=e;return`ALTER TABLE "${this.meta.table}" ADD INDEX ${n.join("")}_${new Date().getTime()}_index expression TYPE type GRANULARITY value AFTER ${this.splitColumn(n)}`}showForeignKeys(){return null}showChecks(){return null}}class xe extends ce{newColumn(e){const{name:n,type:t,defaultValue:r,isNotNull:a}=e;return new H(`ALTER TABLE "${this.meta.schema}".${ie(this.meta.table,this.meta.dbType)} ADD ${ie(n,this.meta.dbType)} ${t}`).if(a,"NOT NULL").if(!G(r),`DEFAULT ${ee(r,t)}`).toString()}dropColumn(e){return`ALTER TABLE "${this.meta.schema}".${this.wrappedTable} DROP COLUMN ${ie(e,this.meta.dbType)}`}newIndex(e){const{table:n=this.meta.table,columns:t,type:r}=e,a=`${n}_${t.join("_")}_${new Date().getTime()}`;return`CREATE ${r=="UNIQUE"?"UNIQUE":""} INDEX ${a} ON "${this.meta.schema}"."${n}"(${this.splitColumn(t)});`}newCheck(e){return`ALTER TABLE "${this.meta.schema}".${this.wrappedTable} ADD CHECK (${e});`}dropCheck(e){return`ALTER TABLE "${this.meta.schema}".${this.wrappedTable} DROP CONSTRAINT ${e};`}dropForeignKey(e){return`ALTER TABLE "${this.meta.schema}"."${this.meta.table}" DROP CONSTRAINT ${e};`}newForeignKey(e){return super.newForeignKey(e).replace(`"${this.meta.table}"`,`"${this.meta.schema}"."${this.meta.table}"`)}}class Lt extends ce{indexTypes(){return[{label:"INDEX",value:"INDEX"},{label:"UNIQUE",value:"UNIQUE"},{label:"FULLTEXT",value:"FULLTEXT"}]}columnTypes(){return["INT",{label:"VARCHAR",value:"VARCHAR(255)"},{label:"CHAR",value:"CHAR(50)"},"hr","DATETIME","TIMESTAMP","DATE","hr","BIT","FLOAT","DOUBLE",{label:"DECIMAL",value:"DECIMAL(10,2)"},"BIGINT","hr","TEXT","JSON","BLOB","BINARY","hr",{label:"ENUM",value:"ENUM('item')"},{label:"SET",value:"SET('item')"}]}newColumn(e){const{name:n,type:t,comment:r,defaultValue:a,isNotNull:l,unsigned:o,zerofill:i}=e;return console.log(e),new H(`ALTER TABLE ${this.wrappedTable} ADD COLUMN \`${n}\` ${t}`).if(o&&o!=0,"UNSIGNED").if(i,"ZEROFILL").if(l,"NOT NULL").if(r,`COMMENT '${r}'`).if(!G(a),`DEFAULT ${ee(a,t)}`).toString()}formatIndexType(e){const n=e.index_type.toUpperCase();return n=="BTREE"?e.index_name=="PRIMARY"?"PRIMARY":ye(e.isUnique)?"UNIQUE":"KEY":n}newIndex(e){const{type:n="key",columns:t}=e;return`ALTER TABLE \`${this.meta.table}\` ADD ${n} (${this.splitColumn(t,"`")})`}newForeignKey(e){const{column:n,foreignKeyName:t,refTable:r,refColumn:a,onUpdate:l,onDelete:o}=e,i=l=="NO ACTION"?"":` ON UPDATE ${l}`,u=o=="NO ACTION"?"":` ON DELETE ${o}`;return new H(`ALTER TABLE \`${this.meta.table}\``).if(t,()=>`ADD CONSTRAINT ${t}`).if(!t,"ADD").append(`FOREIGN KEY (\`${n}\`) REFERENCES \`${r}\`(\`${a}\`)${i}${u};`).toString()}dropForeignKey(e){return`ALTER TABLE \`${this.meta.table}\` DROP FOREIGN KEY ${e};`}}class bt extends ce{newIndex(e){const{table:n=this.meta.table,columns:t,type:r}=e,a=`${n}_${t.join("_")}_${new Date().getTime()}`;return`CREATE ${r=="UNIQUE"?"UNIQUE":""} INDEX ${a} ON "${n}"(${this.splitColumn(t)})`}newColumn(e){const{name:n,type:t,isNotNull:r,defaultValue:a,comment:l}=e;return new H(`ALTER TABLE ${ie(this.meta.table,this.meta.dbType)} ADD ${n} ${t}`).if(!G(a),`DEFAULT ${ee(a,t)}`).if(r,"NOT NULL").if(l,`;
COMMENT ON COLUMN ${this.wrappedTable}."${n.toUpperCase()}" is '${l}';`).toString()}newForeignKey(e){const{column:n,foreignKeyName:t,refTable:r,refColumn:a,onUpdate:l,onDelete:o}=e,i=l=="NO ACTION"?"":` ON UPDATE ${l}`,u=o=="NO ACTION"?"":` ON DELETE ${o}`,b=t||`${n}_${r}_${a}_fk_${Math.floor(Math.random()*30)}`;return`ALTER TABLE "${this.meta.table}" ADD CONSTRAINT ${b} FOREIGN KEY ("${n}") REFERENCES ${r}(${a})${i}${u};`}showForeignKeys(){var n;let{schema:e}=this.meta;return(e==null?void 0:e.toLowerCase())==((n=this.meta.user)==null?void 0:n.toLowerCase())&&(e=void 0),this.dialect.showForeignKeys(e,this.meta.table)}}class Mt extends ce{newColumn(e){const{name:n,type:t,comment:r,defaultValue:a,isNotNull:l}=e,o=this.wrappedTable;return new H(`ALTER TABLE ${o} ADD COLUMN "${n}" ${t}`).if(l,"NOT NULL").if(!G(a),`DEFAULT ${ee(a,t)}`).append(";").if(r,`
COMMENT ON COLUMN ${o}."${n}" is '${r}';`).toString()}columnTypes(){return["INTEGER",{label:"VARCHAR",value:"VARCHAR(255)"},{label:"CHAR",value:"CHAR(50)"},"TIMESTAMP","DATE","BOOLEAN","FLOAT","TEXT","JSON","BLOB"]}indexTypes(){return[{label:"INDEX",value:"INDEX"},{label:"UNIQUE",value:"UNIQUE"},{label:"HASH",value:"HASH"}]}newIndex(e){const{table:n=this.meta.table,columns:t,type:r}=e,a=r=="HASH"?"hash":"btree";return`CREATE ${r=="UNIQUE"?"UNIQUE":""} INDEX ${t.join("_")}_${new Date().getTime()}_index ON "${n}" USING ${a} (${this.splitColumn(t)});`}}class $t extends ce{newIndex(e){throw new Error("Method not implemented.")}dropForeignKey(e){return`ALTER TABLE "${this.meta.table}" DROP CONSTRAINT "${e}";`}showForeignKeys(){return`select
       rco.constraint_name "constraint_name",
       rco.UPDATE_RULE "updateRule",
       rco.DELETE_RULE "deleteRule",
       pk_tco.table_name "referenced_table"
from information_schema.referential_constraints rco
    join information_schema.table_constraints fk_tco on fk_tco.constraint_name = rco.constraint_name and fk_tco.constraint_schema = rco.constraint_schema
    join information_schema.table_constraints pk_tco on pk_tco.constraint_name = rco.unique_constraint_name and pk_tco.constraint_schema = rco.unique_constraint_schema
    WHERE fk_tco.TABLE_SCHEMA='${this.meta.schema}' and fk_tco.table_name='${this.meta.table}' 
    ORDER BY rco.CREATED`}}class It extends ce{newIndex(e){const{table:n=this.meta.table,columns:t}=e;return`CREATE INDEX ${`${n}_${t.join("_")}_${new Date().getTime()}`} ON "${n}"(${this.splitColumn(t)});`}showForeignKeys(){return`SELECT "from" column_name, "table" referenced_table, "to" referenced_column,
        on_update, on_delete 
        FROM pragma_foreign_key_list('${this.meta.table}');`}showChecks(){return null}}class ht extends ce{newColumn(e){const{type:n,defaultValue:t}=e;return new H(super.newColumn(e)).if(!G(t),`DEFAULT ${ee(t,n)}`).toString()}newIndex(e){const{table:n=this.meta.table,columns:t}=e;return`CREATE INDEX ${`${n}_${t.join("_")}_${new Date().getTime()}`} ON "${n}"(${this.splitColumn(t)});`}showForeignKeys(){return`SELECT constraint_column_names "column_name" FROM duckdb_constraints()
        WHERE constraint_type='FOREIGN KEY' and database_name not in ('system','temp') and schema_name='${this.meta.schema}' and table_name='${this.meta.table}'`}showChecks(){return null}}class wt extends xe{}class ft extends xe{columnTypes(){return["INTEGER","TEXT","hr","DATE","TIMESTAMP","hr","BOOLEAN","FLOAT","DOUBLE","hr","BLOB"]}dropColumn(e){return`ALTER TABLE ${this.wrappedTable} DROP ${ie(e,this.meta.dbType)}`}}function Dt(c){switch(c.dbType){case R.PG:case R.REDSHIFT:return new Mt(c);case R.DM:case R.ORACLE:return new bt(c);case R.DB2:return new wt(c);case R.CASSANDRA:return new ft(c);case R.SQLServer:return new xe(c);case R.SNOWFLAKE:return new $t(c);case R.CLICKHOUSE:return new pt(c);case R.DUCK_DB:return new ht(c);case R.SQLITE:return new It(c);case R.MYSQL:case R.MARIA_DB:default:return new Lt(c)}}const gt={class:"mt-2 design-container"},Ut={id:"infoPanel"},yt={class:"tab"},Bt=["onClick"],vt={class:"design-data-container"},Ft=Te({__name:"design",setup(c){const e=de(),n=P(()=>e.activePanel),t=P(()=>[{id:"ddl",i18n:"design.ddl",icon:"codicon-edit green"},{id:"column",i18n:"design.column",icon:"codicon-symbol-field blue"},{id:"foreignKey",i18n:"design.foreignKey",icon:"codicon-symbol-class yellow",hidden:P(()=>!e.supportForeignKey)},{id:"index",i18n:"design.index",icon:"codicon-github-action purple",hidden:P(()=>!e.supportIndex)},{id:"check",i18n:"design.check",icon:"codicon-tools orange",hidden:P(()=>!e.supportCheck)}].filter(a=>{var l;return((l=a==null?void 0:a.hidden)==null?void 0:l.value)!=!0}));_e(()=>{f.on("dbType",a=>{e.updateDBType(a)}).on("designMeta",a=>{e.dialect=Dt(a),e.updateFullInfo(a),f.emitImmediately("designMetaNext",a)}).on("success",()=>{Ge(T("design.updateSuccess"))}).on("error",a=>{be(a)}).on("refresh_design",()=>{r()}),r(),dn(55,["tableTab","infoPanel"],a=>{e.remainHeight=a})});const r=()=>{f.emit("init",{type:"design"})};return(a,l)=>(A(),w("div",gt,[M("div",Ut,[s(zn),M("ul",yt,[(A(!0),w(J,null,ae(t.value,(o,i)=>(A(),w("li",{key:i,class:Ve(["tab__item",{"tab__item--active":n.value==o.id}]),onClick:u=>E(e).activePanel=o.id},[o.icon?(A(),w("i",{key:0,type:"icon",class:Ve(o.icon),style:{position:"relative",top:"3px"}},null,2)):h("",!0),y(" "+g(E(T)(o.i18n)),1)],10,Bt))),128))])]),M("div",vt,[W(s(Hn,null,null,512),[[le,n.value=="column"]]),W(s(hn,null,null,512),[[le,n.value=="foreignKey"]]),W(s(Sn,null,null,512),[[le,n.value=="index"]]),W(s(at,null,null,512),[[le,n.value=="check"]]),W(s(pn,null,null,512),[[le,n.value=="ddl"]])])]))}}),Ca=We(Ft,[["__scopeId","data-v-0402bbcb"]]);export{Ca as default};
