(this["webpackJsonplogin-portal"]=this["webpackJsonplogin-portal"]||[]).push([[0],{112:function(e,t,a){e.exports=a.p+"static/media/logo-full.270843b7.png"},164:function(e,t,a){e.exports=a.p+"static/media/frontpage.2cfe6fcf.png"},180:function(e,t,a){e.exports=a.p+"static/media/login.e3519500.png"},181:function(e,t,a){e.exports=a.p+"static/media/register.bb1366df.png"},189:function(e,t,a){e.exports=a(344)},194:function(e,t,a){},195:function(e,t,a){},344:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),o=a.n(s),l=(a(194),a(195),a(77)),i=a(103),c=a(182),u=a(186),m=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={hasError:!1,error:null},n}return Object(i.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e.toString()}),console.log(e,t)}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("div",{className:"vertically-center"},r.a.createElement("h1",null,'Something went wrong - Reason -> "',this.state.error,'"'),r.a.createElement("h2",null,"Please mail this to support@grambuddy.com with above error reason.")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),a}(r.a.Component),d=a(43),p=a(26),h=a(28),f=a.n(h),E=a(38),g=a(127),b=a.n(g),w=function(){function e(t,a,n){Object(l.a)(this,e),this.body=t,this.status=a,this.error=n}return Object(i.a)(e,[{key:"isValid",value:function(){return!(this.status<200||this.status>300)}}]),e}();function y(){localStorage.removeItem("authToken"),window.location.reload()}var v=function(){var e=Object(E.a)(f.a.mark((function e(t){var a,n,r,s=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>1&&void 0!==s[1]?s[1]:null,n=s.length>2&&void 0!==s[2]?s[2]:null,e.prev=2,e.next=5,b.a.post(t,a,{headers:n});case 5:return r=e.sent,e.abrupt("return",new w(r.data,r.status,null));case 9:if(e.prev=9,e.t0=e.catch(2),!e.t0.response){e.next=16;break}return 401===e.t0.response.status&&y(),e.abrupt("return",new w(null,e.t0.response.status,e.t0.response.data));case 16:return e.abrupt("return",new w(null,500,e.t0.message));case 17:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),k=function e(t){Object(l.a)(this,e),this.message=t};function I(e){return"https://localhost:3000"+e}function x(e){return new k("Something went wrong. Error: "+e)}var O=function(){var e=Object(E.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,v(I("/api/v1/me"),{},{Authorization:"Bearer ".concat(t)});case 3:a=e.sent,e.next=7;break;case 6:a=new w({data:{data:{id:1,email:"admin@profilemate.com",permissions:["PREMIUM_TRAINING"]},success:!0,errors:[]}},200,null);case 7:if(!a.isValid()){e.next=11;break}return e.abrupt("return",a.body);case 11:return n="Something went wrong. Please contact support@profilebud.com. Error: ".concat(a.error),e.abrupt("return",new k(n));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j={Success:"Success",Failure:"Failure"},C=a(185),F=a(354),S=a(357);var T=function(e,t){var a,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];a=e===j.Failure?r.a.createElement(F.a,null):r.a.createElement(S.a,null);var s=5;n&&(s=20),C.a.open({message:"",description:t,icon:a,duration:s})},N=a(85),P=function(e){var t=e.Component,a=e.isAuthed,n=e.user;e.setUser,Object(N.a)(e,["Component","isAuthed","user","setUser"]);return r.a.createElement(p.b,{render:function(e){return a?r.a.createElement(t,{user:n}):r.a.createElement(p.a,{to:{pathname:"/sign-in"}})}})},L=a(345),q=a(352),U=a(69),W=a(112),H=a.n(W),_=a(356),z=a(359),A=a(358),J=a(355),V=a(349),B=a(87),G=a(55),K=a(346),R=L.a.Content,D=function(e){var t=e.children,a=e.marginLess,n=e.style;return r.a.createElement(R,{style:n,className:"site-layout-background content-wrapper "+(a?"content-wrapper-margin-less":"")},t)},M=L.a.Content,Q=function(e){var t=e.children;return r.a.createElement(M,{className:"content-wrapper"},t)},$=function(e){var t=e.url;return t||(t="https://www.youtube.com/embed/tFNWHLEIiJ0"),r.a.createElement("div",{className:"iframe-container"},r.a.createElement("iframe",{width:"560px",height:"315px",src:t,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))},X=a(164),Y=a.n(X),Z=V.a.Title,ee=function(e){var t=e.setKey,a=e.user;return r.a.createElement(Q,null,r.a.createElement(B.a,{justify:"center",gutter:24},r.a.createElement(G.a,{md:{span:24},lg:{span:12}},r.a.createElement(D,{marginLess:!0},r.a.createElement(Z,{style:{fontWeight:"medium"}},"Hey ",a.email,"!",r.a.createElement("br",null),"Here's what you can do with ProfileMate!"),r.a.createElement(K.a,{style:{borderTop:"1px solid black"}}),r.a.createElement($,{url:"https://www.youtube.com/embed/tFNWHLEIiJ0"}))),r.a.createElement(G.a,{md:{span:24},lg:{span:12}},r.a.createElement("div",null,r.a.createElement("img",{width:"100%",src:Y.a,alt:"image"}),r.a.createElement(U.a,{onClick:function(){return t(2)},className:"dark-button",type:"primary",block:!0,size:"large"},"Download")))))},te=a(347),ae=te.a.Meta,ne=V.a.Title,re=[{img:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et"},{img:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et"},{img:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et"},{img:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et"}],se=function(){return r.a.createElement(D,null,r.a.createElement(ne,null,"Upsell"),r.a.createElement(K.a,null),r.a.createElement(B.a,{gutter:[24,16]},re.map((function(e){return r.a.createElement(G.a,{md:{span:12},lg:{span:6}},r.a.createElement(te.a,{cover:r.a.createElement("img",{alt:"example",src:e.img})},r.a.createElement("div",{className:"align-center"},r.a.createElement(ae,{description:e.desc}),r.a.createElement("br",null),r.a.createElement(U.a,{type:"primary"},"Button"))))}))))},oe=V.a.Title,le=[{link:"https://www.youtube.com/embed/tFNWHLEIiJ0",text:"Lorem ipsum dolor sit amet."},{link:"https://www.youtube.com/embed/tFNWHLEIiJ0",text:"Lorem ipsum dolor sit amet."},{link:"https://www.youtube.com/embed/tFNWHLEIiJ0",text:"Lorem ipsum dolor sit amet."},{link:"https://www.youtube.com/embed/tFNWHLEIiJ0",text:"Lorem ipsum dolor sit amet."}],ie=function(){return r.a.createElement(D,null,r.a.createElement(oe,null,"Training"),r.a.createElement(K.a,null),r.a.createElement(B.a,{gutter:[24,24]},le.map((function(e){return r.a.createElement(G.a,{sm:{span:24},lg:{span:12},className:"is-marginless"},r.a.createElement($,{url:e.link}),r.a.createElement(oe,{level:3,style:{margin:"1rem"}},e.text))}))))},ce=a(174),ue=a.n(ce),me=a(351),de=me.a.Panel,pe=[{question:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",answer:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"},{question:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",answer:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"},{question:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",answer:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"},{question:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",answer:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"},{question:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",answer:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"}],he=function(){return r.a.createElement(Q,null,r.a.createElement(me.a,{accordion:!0,bordered:!0,ghost:!0,className:"site-collapse-custom-collapse"},pe.map((function(e,t){return r.a.createElement(de,{header:e.question,key:t,className:"site-collapse-custom-panel"},r.a.createElement("p",{style:{color:"white",fontWeight:"bold"}},e.answer))}))))},fe=L.a.Header,Ee=L.a.Sider,ge=(L.a.Content,function(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),s=a[0],o=a[1],l=Object(n.useState)(1),i=Object(d.a)(l,2),c=i[0],u=i[1];return e=e.user,console.log("child",e),Object(n.useEffect)((function(){ue()()&&o(!0)}),[]),r.a.createElement(L.a,{className:"is-fullheight"},r.a.createElement(fe,{className:"header",style:{backgroundColor:"white"}},r.a.createElement("img",{className:"logo-img",alt:"Logo",src:H.a}),r.a.createElement(q.a,{mode:"horizontal",style:{float:"right"}},r.a.createElement(q.a.Item,{key:"1"},r.a.createElement(U.a,{block:!0},"Webinar")),r.a.createElement(q.a.Item,{key:"2"},r.a.createElement(U.a,{block:!0},"Support")),r.a.createElement(q.a.Item,{key:"3"},r.a.createElement(U.a,{block:!0,onClick:function(){return localStorage.removeItem("authToken"),void window.location.reload()},type:"primary",className:"dark-button"},"Log out")))),r.a.createElement(L.a,{className:"site-layout"},r.a.createElement(Ee,{collapsible:!0,collapsed:s,onCollapse:function(){o(!s)}},r.a.createElement(q.a,{theme:"dark",selectedKeys:String(c),mode:"inline",onClick:function(e){return u(parseInt(e.key))},defaultSelectedKeys:["1"]},r.a.createElement(q.a.Item,{key:"1",icon:r.a.createElement(_.a,null)},"Home"),r.a.createElement(q.a.Item,{key:"2",icon:r.a.createElement(z.a,null)},"Download"),r.a.createElement(q.a.Item,{key:"3",icon:r.a.createElement(A.a,null)},"Training"),r.a.createElement(q.a.Item,{key:"4",icon:r.a.createElement(J.a,null)},"Premium Training"),r.a.createElement(q.a.Item,{key:"5"},"Upsell"),r.a.createElement(q.a.Item,{key:"6"},"WhiteLabel"),r.a.createElement(q.a.Item,{key:"7"},"FAQ"))),function(){switch(c){case 1:return r.a.createElement(ee,{user:e,setKey:u});case 3:return r.a.createElement(ie,null);case 5:return r.a.createElement(se,null);case 7:return r.a.createElement(he,null);default:return r.a.createElement(ee,{user:e,setKey:u})}}()))}),be=function(e){var t=e.Component;Object(N.a)(e,["Component"]);return r.a.createElement(p.b,{render:function(e){return r.a.createElement(t,e)}})},we=function(e){var t=e.children,a=e.isAuthed,n=e.user,s=(e.setUser,Object(N.a)(e,["children","isAuthed","user","setUser"]));return console.log(n,s),r.a.createElement(p.b,{render:function(e){return a?r.a.createElement(p.a,{to:{pathname:"/"}}):t}})},ye=a(65),ve=L.a.Header,ke=L.a.Content,Ie=(L.a.Footer,function(e){var t=e.children;return r.a.createElement(L.a,{className:"is-fullheight"},r.a.createElement(ve,{style:{position:"fixed",zIndex:1,backgroundColor:"#F0F2F5",width:"100%"}},r.a.createElement(ye.b,{to:"/"},r.a.createElement("img",{className:"logo-img logo",alt:"Logo",src:H.a})),r.a.createElement(q.a,{mode:"horizontal",className:"menu-float-right theme-background"},r.a.createElement(q.a.Item,{key:"1"},r.a.createElement(U.a,null,"Support")))),r.a.createElement(L.a,{className:"site-layout"},r.a.createElement(ke,{className:"content-wrapper"},t)))}),xe=V.a.Title,Oe=function(){return r.a.createElement(Ie,null,r.a.createElement(B.a,null,r.a.createElement(G.a,{md:{span:12},lg:{span:16}},r.a.createElement(Q,null,r.a.createElement(xe,null,"Welcome Page")))))},je=a(348),Ce=a(350),Fe=a(353);var Se=function(){var e=Object(E.a)(f.a.mark((function e(t,a){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,v(I("/api/v1/login"),{email:t,password:a});case 3:n=e.sent,e.next=7;break;case 6:n=new w({data:{data:{token:"Blq_dSbonnLT2e4Hs7F9Kve4RKbFps"},success:!0,errors:[]}},200,null);case 7:if(!n.isValid()){e.next=11;break}return e.abrupt("return",n.body.data);case 11:return r="Something went wrong. Error: ".concat(n.error),e.abrupt("return",new k(r));case 13:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();var Te=function(){var e=Object(E.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,v(I("/api/v1/forgot_password/send_mail"),{email:t});case 3:a=e.sent,e.next=7;break;case 6:a=new w({data:{data:{message:"Check your Email"},success:!0,errors:[]}},200,null);case 7:if(!a.isValid()){e.next=11;break}return e.abrupt("return",a.body.data);case 11:return e.abrupt("return",x(a.error));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ne={wrapperCol:{span:24}},Pe={wrapperCol:{span:24}},Le=function(e){var t=e.visible,a=e.onCreate,n=e.onCancel,s=je.a.useForm(),o=Object(d.a)(s,1)[0];return r.a.createElement(Ce.a,{visible:t,title:"Forgot Password",okText:"Confirm Email",cancelText:"Cancel",onCancel:n,onOk:function(){o.validateFields().then((function(e){o.resetFields(),a(e)})).catch((function(e){console.log("Validate Failed:",e)}))}},r.a.createElement(je.a,{form:o,layout:"vertical",name:"form_in_modal",initialValues:{modifier:"public"}},r.a.createElement(je.a.Item,{name:"username",label:"Username",rules:[{required:!0,message:"Please input your Username"}]},r.a.createElement(Fe.a,{type:"email"}))))},qe=function(e){var t=e.setTab,a=e.setUser,s=Object(n.useState)(!1),o=Object(d.a)(s,2),l=o[0],i=o[1];return r.a.createElement("div",null,r.a.createElement(je.a,Object.assign({},Ne,{initialValues:{remember:!0},onFinish:function(e){Se(e.username,e.password).then((function(e){console.log(e),e.success?(localStorage.setItem("authToken",e.data.token),a()):T(j.Failure,"Bad Credentials")}))},onFinishFailed:function(e){T(j.Failure,e)}}),r.a.createElement(je.a.Item,{name:"username",rules:[{required:!0,message:"Please input your username!"}]},r.a.createElement(Fe.a,{placeholder:"Username",type:"text"})),r.a.createElement(je.a.Item,{name:"password",rules:[{required:!0,message:"Please input your password!"}]},r.a.createElement(Fe.a.Password,{placeholder:"Password"})),r.a.createElement(je.a.Item,Pe,r.a.createElement("div",{className:"align-center"},r.a.createElement(U.a,{className:"dark-button",size:"large",type:"primary",htmlType:"submit"},"LOGIN"),"\xa0\xa0\xa0",r.a.createElement(U.a,{size:"large",onClick:function(){return t(0)}},"SIGN UP"))),r.a.createElement(je.a.Item,null,r.a.createElement("div",{className:"align-center"},r.a.createElement(U.a,{type:"primary",onClick:function(){i(!0)}},"Forgot Password?")))),r.a.createElement(Le,{visible:l,onCreate:function(e){Te(e.username).then((function(e){T("",e.message)})),i(!1)},onCancel:function(){i(!1)}}))};var Ue=function(){var e=Object(E.a)(f.a.mark((function e(t,a){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,v(I("/api/v1/register"),{password:a,email:t});case 3:n=e.sent,e.next=7;break;case 6:n=new w({data:{data:{message:"User Registered"},success:!0,errors:[]}},200,null);case 7:if(!n.isValid()){e.next=11;break}return e.abrupt("return",n.body.data);case 11:return e.abrupt("return",x(n.error));case 12:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),We=function(e){return new Promise((function(t){return setTimeout(t,e)}))},He={wrapperCol:{span:24}},_e={wrapperCol:{span:24}},ze=function(e){var t=e.setTab;return r.a.createElement(je.a,Object.assign({},He,{initialValues:{remember:!0},onFinish:function(e){e.password===e.confirm_password?(Ue(e.email,e.password).then((function(e){e.success?(T(j.Success,e.data.message),We(3e3).then((function(){return t(1)}))):T(j.Failure,e.errors[0].message)})),console.log("Success:",e)):T(j.Success,"Passwords doesn't match")},onFinishFailed:function(e){console.log("Failed:",e)}}),r.a.createElement(je.a.Item,{name:"Email",rules:[{required:!0,message:"Please input your email!"}]},r.a.createElement(Fe.a,{placeholder:"Email",type:"email"})),r.a.createElement(je.a.Item,{name:"password",rules:[{required:!0,message:"Please input your password!"}]},r.a.createElement(Fe.a.Password,{placeholder:"Password"})),r.a.createElement(je.a.Item,{name:"confirm_password",rules:[{required:!0,message:"Please input your password!"}]},r.a.createElement(Fe.a.Password,{placeholder:"Confirm Password"})),r.a.createElement(je.a.Item,_e,r.a.createElement("div",{className:"align-center"},r.a.createElement(U.a,{size:"large",type:"primary",htmlType:"submit"},"Sign Up"),"\xa0\xa0\xa0",r.a.createElement(U.a,{size:"large",onClick:function(){return t(1)}},"SIGN IN"))))},Ae=a(180),Je=a.n(Ae),Ve=a(181),Be=a.n(Ve),Ge=V.a.Title,Ke=function(e){var t=e.setUser,a=Object(n.useState)(1),s=Object(d.a)(a,2),o=s[0],l=s[1],i=o?"Welcome Back!":"Come, Join us!",c=o?"Sign In":"Sign Up",u=o?Je.a:Be.a;return r.a.createElement(Ie,null,r.a.createElement(B.a,{align:"center"},r.a.createElement(G.a,{md:{span:12},lg:{span:16}},r.a.createElement(Q,null,r.a.createElement(Ge,null,i),r.a.createElement("img",{width:"100%",alt:"image",src:u}))),r.a.createElement(G.a,{md:{span:8}},r.a.createElement(D,{style:{height:"80%"}},r.a.createElement(Ge,null,c),r.a.createElement(K.a,null),o?r.a.createElement(qe,{setTab:l,setUser:t}):r.a.createElement(ze,{setTab:l})))))};var Re=function(){var e=Object(E.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,v(I("/api/v1/forgot_password/validate"),{token:t});case 3:a=e.sent,e.next=7;break;case 6:a=new w({data:{data:{token_validity:!0},success:!0,errors:[]}},200,null);case 7:if(!a.isValid()){e.next=11;break}return e.abrupt("return",a.body.data);case 11:return e.abrupt("return",x(a.error));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var De=function(){var e=Object(E.a)(f.a.mark((function e(t,a){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,v(I("/api/v1/forgot_password/send_mail"),{token:t,password:a});case 3:n=e.sent,e.next=7;break;case 6:n=new w({data:{data:{message:"Password Changed"},success:!0,errors:[]}},200,null);case 7:if(!n.isValid()){e.next=11;break}return e.abrupt("return",n.body.data);case 11:return e.abrupt("return",x(n.error));case 12:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),Me=V.a.Title,Qe=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],s=t[1],o=Object(n.useState)(null),l=Object(d.a)(o,2),i=l[0],c=l[1],u=Object(p.g)("/validate/:id");return Object(n.useEffect)((function(){return c(u.params.id),void(u.params.id?Re(u.params.id).then((function(e){s(e.token_validity),e.token_validity||T(j.Failure,"Invalid Token")})):T(j.Failure,"Invalid Token"))}),[]),r.a.createElement(Ie,null,r.a.createElement(B.a,{align:"center"},r.a.createElement(G.a,{md:{span:16}},r.a.createElement(D,{style:{height:"80%"}},r.a.createElement(Me,null,"Set New Password"),r.a.createElement(K.a,null),a?r.a.createElement(je.a,{initialValues:{remember:!0},onFinish:function(e){e.password===e.confirm_password?De(i,e.password).then((function(e){T(j.Success,e.message)})):T(j.Success,"Passwords doesn't match")},onFinishFailed:function(e){T(j.Failure,e)}},r.a.createElement(je.a.Item,{name:"password",rules:[{required:!0,message:"Please input your password!"}]},r.a.createElement(Fe.a.Password,{placeholder:"Password"})),r.a.createElement(je.a.Item,{name:"confirm_password",rules:[{required:!0,message:"Please input your password!"}]},r.a.createElement(Fe.a.Password,{placeholder:"Confirm Password"})),r.a.createElement(je.a.Item,null,r.a.createElement("div",{className:"align-center"},r.a.createElement(U.a,{size:"large",htmlType:"submit"},"Set Password")))):r.a.createElement("p",null,"Token Invalid")))))},$e=V.a.Title,Xe=function(){return r.a.createElement(Ie,null,r.a.createElement(B.a,null,r.a.createElement(G.a,{md:{span:12},lg:{span:16}},r.a.createElement(Q,null,r.a.createElement($e,null,"Page Not Found")))))},Ye=function(){var e=Object(n.useState)(null),t=Object(d.a)(e,2),a=t[0],s=t[1],o=Object(n.useState)(!1),l=Object(d.a)(o,2),i=l[0],c=l[1];function u(){var e=localStorage.getItem("authToken");e&&O(e).then((function(e){e?s(e):T(j.Success,"Bad Credentials")}))}return Object(n.useEffect)((function(){return u()}),[]),Object(n.useEffect)((function(){a&&c(!0)})),r.a.createElement(p.d,null,r.a.createElement(P,{path:"/",exact:!0,user:a,isAuthed:i,Component:ge}),r.a.createElement(we,{path:"/sign-in",exact:!0,isAuthed:i,setUser:u},r.a.createElement(Ke,{setUser:u})),r.a.createElement(we,{path:"/validate/:id",exact:!0},r.a.createElement(Qe,null)),r.a.createElement(be,{path:"/general",Component:Oe}),r.a.createElement(be,{Component:Xe}))};var Ze=function(){var e=function(e){return r.a.createElement(m,null,r.a.createElement(Ye,e))};return r.a.createElement(e,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ye.a,null,r.a.createElement(Ze,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[189,1,2]]]);
//# sourceMappingURL=main.95e02cdd.chunk.js.map