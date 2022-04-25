import{l as z}from"./element-plus.ffa3b174.js";import{d as M,r as g,W as L,w as h,V as I,o as W,c as H,a as e,Q as E,O as k,H as r,ae as l,u,b1 as Z,b0 as $}from"./@vue.0303ec2e.js";import{u as j}from"./vue-router.e6db8529.js";import{u as K}from"./vuex.a1b43142.js";import{H as S,_ as Q,M as v,a as U}from"./index.5cd04c4e.js";import{O as x}from"./objUtils.8a6bad93.js";import"./@vueuse.a950c1ff.js";import"./dayjs.b9cd1035.js";import"./axios.6b3d3030.js";import"./@element-plus.90e88801.js";import"./@ctrl.2e36ce53.js";import"./lodash-es.bf1863bb.js";import"./escape-html.e5dfadb9.js";import"./@popperjs.da6c49cb.js";import"./normalize-wheel-es.1c4ac15a.js";import"./mavon-editor.09f2d933.js";import"./vue.97e54053.js";const N="http://localhost:8080";function J(c){const p=`${N}/admin/user/login`;return S.post(p,c).then(i=>i.data).catch(i=>i)}function Y(c){const p=`${N}/admin/user/register`;return S.get(p,c).then(i=>i.data).catch(i=>i)}class F{constructor(){}static checkInput(p,i,d,_,f){if(p===""){d.classList.remove(f);return}p.match(i)?(d.classList.remove(f),d.classList.add(_)):(d.classList.remove(_),d.classList.add(f))}}const o=c=>(Z("data-v-c43a8362"),c=c(),$(),c),ee={class:"container"},se=o(()=>e("h1",{class:"title"}," \u5F00\u53D1\u8FDB\u5EA630% ",-1)),te=o(()=>e("summary",{class:"summary"},[e("s",null,"\u4E0D\u7BA1\u6709\u4EC0\u4E48\u529F\u80FD\uFF0C\u8981\u4E0D\u5148\u8BD5\u8BD5\u518D\u8BF4")],-1)),oe={class:"buttons"},ue={class:"document",href:"javascript:;"},ne=o(()=>e("span",{class:"link-text"}," \u67E5\u770B\u6587\u6863 ",-1)),ae=o(()=>e("a",{class:"gitee-link",target:"_blank",href:"https://gitee.com/pj_yools/yools-personal-workstation-ui"},[e("svg",{width:"1rem",height:"1rem",xmlns:"http://www.w3.org/2000/svg",name:"zi_tmGitee",viewBox:"0 0 2000 2000"},[e("path",{d:"M898 1992q183 0 344-69.5t283-191.5q122-122 191.5-283t69.5-344q0-183-69.5-344T1525 477q-122-122-283-191.5T898 216q-184 0-345 69.5T270 477Q148 599 78.5 760T9 1104q0 183 69.5 344T270 1731q122 122 283 191.5t345 69.5zm199-400H448q-17 0-30.5-14t-13.5-30V932q0-89 43.5-163.5T565 649q74-45 166-45h616q17 0 30.5 14t13.5 31v111q0 16-13.5 30t-30.5 14H731q-54 0-93.5 39.5T598 937v422q0 17 14 30.5t30 13.5h416q55 0 94.5-39.5t39.5-93.5v-22q0-17-14-30.5t-31-13.5H842q-17 0-30.5-14t-13.5-31v-111q0-16 13.5-30t30.5-14h505q17 0 30.5 14t13.5 30v250q0 121-86.5 207.5T1097 1592z"})]),e("span",{class:"link-text"},"Star it on Gitee!")],-1)),ie=o(()=>e("div",{class:"start-text"}," \u2728 Get Started ",-1)),re=[ie],le={class:"back-box"},ce=o(()=>e("div",{class:"back-text"}," \u8FD4\u56DE\u9996\u9875 ",-1)),de={class:"login"},me={class:"login-form"},pe=o(()=>e("h1",{class:"title"},"\u767B\u5F55\u4F60\u7684\u5DE5\u4F5C\u7AD9",-1)),_e={class:"login-form-item"},ge={class:"login-form-item"},fe=o(()=>e("span",{class:"login-button-text"},"Login Account",-1)),Ee=[fe],ve=o(()=>e("span",null,"\u6CA1\u6709\u8D26\u53F7\u5417\uFF1F",-1)),he=o(()=>e("span",{class:"register-button-text"},"\u70B9\u51FB\u6CE8\u518C",-1)),Fe=[he],be={class:"back-box"},ke=o(()=>e("div",{class:"back-text"}," \u8FD4\u56DE\u767B\u5F55 ",-1)),Ce={class:"register-form"},Be=o(()=>e("h1",{class:"register-form-title"},"\u6CE8\u518C",-1)),Ae={class:"register-form-items"},De=o(()=>e("span",{class:"register-form-split-item"},"\u7528\u6237\u57FA\u672C\u4FE1\u606F",-1)),we={class:"register-form-item"},Te=o(()=>e("label",{for:"username",class:"register-form-label-item"},"\u7528\u6237\u540D",-1)),Oe={class:"register-form-item"},Re=o(()=>e("label",{for:"account",class:"register-form-label-item"},"\u8D26\u53F7",-1)),Le={class:"register-form-item"},Ie=o(()=>e("label",{for:"password",class:"register-form-label-item"},"\u5BC6\u7801",-1)),Ue=o(()=>e("span",{class:"register-form-split-item"},"\u7B2C\u4E09\u65B9\u8D26\u53F7\u7ED1\u5B9A",-1)),xe={class:"register-form-item"},Se=o(()=>e("label",{for:"gitee-username",class:"register-form-label-item"},"Gitee \u8D26\u53F7",-1)),Ne={class:"register-form-item"},qe=o(()=>e("label",{for:"gitee-token",class:"register-form-label-item"},"Gitee Token",-1)),ye={class:"register-form-item"},Pe=o(()=>e("label",{for:"bing-token",class:"register-form-label-item"},"Bing Token",-1)),Ge={class:"register-form-item"},Ve=o(()=>e("label",{for:"netease-username",class:"register-form-label-item"},"\u7F51\u6613\u4E91\u97F3\u4E50\u8D26\u53F7",-1)),Xe={class:"register-form-item"},ze=o(()=>e("label",{for:"netease-password",class:"register-form-label-item"},"\u7F51\u6613\u4E91\u97F3\u4E50\u5BC6\u7801",-1)),Me=M({setup(c){const p=j(),i=K(),d=g(null),_=g(null),f=g(null),C=g(null),B=g(null),A=g(null),D=g(null),w=g(null);let m=L({username:"Nanami",password:"Nanamiyuu123"}),t=L({username:"",account:"",password:"",giteeAccount:"",giteeToken:"",bingToken:"",neteaseAccount:"",neteasePassword:""});function q(){_.value.classList.add("open"),d.value.classList.add("close")}function T(){_.value.classList.remove("open"),d.value.classList.remove("close")}function y(){_.value.classList.remove("open"),f.value.classList.add("open")}function O(){f.value.classList.remove("open"),_.value.classList.add("open")}async function P(){if(!m.username||!m.password){v.error("\u7528\u6237\u540D\u6216\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A");return}const n=await J(m);n.code==U.OK?(v.success(n.msg),p.getRoutes().forEach(s=>{s.meta.accessible=!0}),i.dispatch("admin/setLoginState",!0),localStorage.setItem("jwt",n.data),T()):v.error(n.msg)}async function G(){if(!t.username||!t.account||!t.password){v.error("\u7528\u6237\u540D\u3001\u8D26\u53F7\u6216\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A");return}const n=await Y(t);n.code==U.OK?(x.clear(t),v.success(n.msg),O()):v.error(n.msg)}function V(){x.clear(t)}return h(()=>m.username,n=>{const s="^[\u4E00-\u9FA5a-zA-Z0-9_-]{4,16}$";F.checkInput(n,s,C.value,"valid","invalid")}),h(()=>m.password,n=>{const s="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[^]{6,16}$";F.checkInput(n,s,B.value,"valid","invalid")}),h(()=>t.username,n=>{const s="^[\u4E00-\u9FA5a-zA-Z0-9_-]{4,16}$";F.checkInput(n,s,A.value,"valid","invalid")}),h(()=>t.account,n=>{const s="^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*\\.[a-zA-Z0-9]{2,6}$";F.checkInput(n,s,D.value,"valid","invalid")}),h(()=>t.password,n=>{const s="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[^]{6,16}$";F.checkInput(n,s,w.value,"valid","invalid")}),(n,s)=>{const X=I("document"),b=z,R=I("back");return W(),H("div",ee,[e("div",{class:"welcome-box",ref_key:"WELCOME_BOX",ref:d},[se,te,e("div",oe,[e("a",ue,[E(b,null,{default:k(()=>[E(X)]),_:1}),ne]),ae,e("button",{class:"get-started",onClick:q},re)])],512),e("div",{class:"login-box",ref_key:"LOGIN_BOX",ref:_},[e("div",le,[e("button",{class:"back-button",onClick:T},[E(b,null,{default:k(()=>[E(R)]),_:1}),ce])]),e("div",de,[e("div",me,[pe,e("div",_e,[r(e("input",{class:"login-form-input","onUpdate:modelValue":s[0]||(s[0]=a=>u(m).username=a),ref_key:"LOGIN_USERNAME",ref:C,placeholder:"\u8F93\u5165\u7528\u6237\u540D"},null,512),[[l,u(m).username]])]),e("div",ge,[r(e("input",{class:"login-form-input","onUpdate:modelValue":s[1]||(s[1]=a=>u(m).password=a),ref_key:"LOGIN_PASSWORD",ref:B,placeholder:"\u8F93\u5165\u5BC6\u7801",type:"password"},null,512),[[l,u(m).password]])])]),e("div",{class:"login-button-box"},[e("button",{class:"login-button",onClick:P},Ee)]),e("div",{class:"register-button-box"},[ve,e("button",{class:"register-button",onClick:y},Fe)])])],512),e("div",{class:"register-box",ref_key:"REGISTER_BOX",ref:f},[e("div",be,[e("button",{class:"back-button",onClick:O},[E(b,null,{default:k(()=>[E(R)]),_:1}),ke])]),e("div",Ce,[Be,e("div",Ae,[De,e("div",we,[Te,r(e("input",{id:"username",class:"register-form-input-item","onUpdate:modelValue":s[2]||(s[2]=a=>u(t).username=a),ref_key:"USERNAME_INPUT",ref:A,placeholder:"4-16\u4F4D\uFF0C\u53EF\u4EE5\u662F\u6C49\u5B57\u3001\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF"},null,512),[[l,u(t).username]])]),e("div",Oe,[Re,r(e("input",{id:"account",class:"register-form-input-item","onUpdate:modelValue":s[3]||(s[3]=a=>u(t).account=a),ref_key:"ACCOUNT_INPUT",ref:D,placeholder:"\u90AE\u7BB1: 123456@xxx.com"},null,512),[[l,u(t).account]])]),e("div",Le,[Ie,r(e("input",{type:"password",class:"register-form-input-item","onUpdate:modelValue":s[4]||(s[4]=a=>u(t).password=a),ref_key:"PASSWORD_INPUT",ref:w,placeholder:"8-16\u4F4D\uFF0C\u81F3\u5C11\u4E00\u4F4D\u5927\u5199\u5B57\u6BCD\u3001\u5C0F\u5199\u5B57\u6BCD\u3001\u6570\u5B57"},null,512),[[l,u(t).password]])]),Ue,e("div",xe,[Se,r(e("input",{id:"gitee-username",class:"register-form-input-item","onUpdate:modelValue":s[5]||(s[5]=a=>u(t).giteeAccount=a),placeholder:"\u4F60\u7684\u7801\u4E91\u7528\u6237\u540D"},null,512),[[l,u(t).giteeAccount]])]),e("div",Ne,[qe,r(e("input",{id:"gitee-token",class:"register-form-input-item","onUpdate:modelValue":s[6]||(s[6]=a=>u(t).giteeToken=a),type:"password",placeholder:"\u4F60\u7684\u7801\u4E91\u79C1\u4EBA\u4EE4\u724C"},null,512),[[l,u(t).giteeToken]])]),e("div",ye,[Pe,r(e("input",{id:"bing-token",class:"register-form-input-item","onUpdate:modelValue":s[7]||(s[7]=a=>u(t).bingToken=a),type:"password",placeholder:"\u4F60\u7684\u5FC5\u5E94\u5BC6\u94A5"},null,512),[[l,u(t).bingToken]])]),e("div",Ge,[Ve,r(e("input",{id:"netease-username",class:"register-form-input-item","onUpdate:modelValue":s[8]||(s[8]=a=>u(t).neteaseAccount=a),placeholder:"\u4F60\u7684\u7F51\u6613\u4E91\u97F3\u4E50\u8D26\u53F7"},null,512),[[l,u(t).neteaseAccount]])]),e("div",Xe,[ze,r(e("input",{id:"netease-password",class:"register-form-input-item","onUpdate:modelValue":s[9]||(s[9]=a=>u(t).neteasePassword=a),type:"password",placeholder:"\u4F60\u7684\u7F51\u6613\u4E91\u97F3\u4E50\u5BC6\u7801"},null,512),[[l,u(t).neteasePassword]])])]),e("div",{class:"register-form-buttons"},[e("button",{class:"register-submit",onClick:G},"\u6CE8\u518C"),e("button",{class:"register-clear",onClick:V},"\u6E05\u7A7A")])])],512)])}}});var rs=Q(Me,[["__scopeId","data-v-c43a8362"]]);export{rs as default};