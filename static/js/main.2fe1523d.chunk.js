(this["webpackJsonpcc-frontend"]=this["webpackJsonpcc-frontend"]||[]).push([[0],{233:function(e,a,t){e.exports=t.p+"static/media/cc_logo.b36dc237.png"},285:function(e,a,t){e.exports=t(482)},290:function(e,a,t){},482:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(17),l=t.n(i);t(290),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=t(40),c=t(50),m=t(74),s=t(3),u=t(536),d=t(543),p=t(562),g=t(559),E=t(544),h=t(545),f=t(548),b=t(68),x=t(547),v=t(546),y=t(549),w=t(550),j=t(484),S=t(119),C=t.n(S),O=t(121),N=t.n(O),k=t(530),B=t(533),I=t(534),L=t(535),D=t(221),F=t.n(D),T=t(222),P=t.n(T),M=t(223),V=t.n(M),A=t(124),z=t.n(A),H=t(37),W=r.a.createElement("div",null,r.a.createElement(H.b,{className:"drawer-link",to:"/dashboard"},r.a.createElement(k.a,{button:!0},r.a.createElement(B.a,null,r.a.createElement(F.a,null)),r.a.createElement(I.a,{primary:"Dashboard"}))),r.a.createElement(H.b,{className:"drawer-link",to:"/boxes"},r.a.createElement(k.a,{button:!0},r.a.createElement(B.a,null,r.a.createElement(P.a,null)),r.a.createElement(I.a,{primary:"Collection Boxes"}))),r.a.createElement(H.b,{className:"settings-link",to:"/settings"},r.a.createElement(k.a,{button:!0},r.a.createElement(B.a,null,r.a.createElement(V.a,null)),r.a.createElement(I.a,{primary:"Settings"})))),R=(L.a,k.a,B.a,z.a,I.a,k.a,B.a,z.a,I.a,k.a,B.a,z.a,I.a,t(26)),G=t(27);function K(e){return r.a.createElement(b.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},e.children)}function _(e,a){return{time:e,amount:a}}var U=[_("00:00",0),_("03:00",10),_("06:00",20),_("09:00",40),_("12:00",80),_("15:00",90),_("18:00",45),_("21:00",100),_("24:00",void 0)];function X(){var e=Object(R.a)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null,"Today"),r.a.createElement(G.d,null,r.a.createElement(G.c,{data:U,margin:{top:16,right:16,bottom:0,left:24}},r.a.createElement(G.e,{dataKey:"time",stroke:e.palette.text.secondary}),r.a.createElement(G.f,{stroke:e.palette.text.secondary,type:"number",domain:100},r.a.createElement(G.a,{angle:270,position:"left",style:{textAnchor:"middle",fill:e.palette.text.primary}},"Capacity (%)")),r.a.createElement(G.b,{type:"monotone",dataKey:"amount",stroke:e.palette.primary.main,dot:!1}))))}var Y=t(537);function J(e){e.preventDefault()}var Z=Object(u.a)({depositContext:{flex:1}});function $(){var e=Z(),a=Object(n.useState)(new Date),t=Object(o.a)(a,2),i=t[0];t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null,"Total Capacity"),r.a.createElement(b.a,{component:"p",variant:"h4"},"80%"),r.a.createElement(b.a,{color:"textSecondary",className:e.depositContext},"as of ",i.getMonth()+"/"+i.getDate()+"/"+i.getYear()),r.a.createElement("div",null,r.a.createElement(Y.a,{color:"primary",href:"#",onClick:J},"View Receptacles")))}var q=t(538),Q=t(542),ee=t(541),ae=t(539),te=t(540);function ne(e,a,t,n,r,i){return{id:e,date:a,name:t,shipTo:n,paymentMethod:r,amount:i}}var re=[ne(0,"16 Mar, 2019","Terminal 3","Tupelo, MS","VISA \u2800\u2022\u2022\u2022\u2022 3719",5.4),ne(1,"16 Mar, 3","Terminal 2","London, UK","VISA \u2800\u2022\u2022\u2022\u2022 2574",6.7),ne(2,"16 Mar, 2019","Terminal 3","Boston, MA","MC \u2800\u2022\u2022\u2022\u2022 1253",1.2),ne(3,"16 Mar, 2019","Terminal 3 ","Gary, IN","AMEX \u2800\u2022\u2022\u2022\u2022 2000",10.5),ne(4,"15 Mar, 2019","Terminal 1","Long Branch, NJ","VISA \u2800\u2022\u2022\u2022\u2022 5919",4.3)];function ie(e){e.preventDefault()}var le=Object(u.a)((function(e){return{seeMore:{marginTop:e.spacing(3)}}}));function oe(){var e=le();return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null,"Recent Deposits"),r.a.createElement(q.a,{size:"small"},r.a.createElement(ae.a,null,r.a.createElement(te.a,null,r.a.createElement(ee.a,null,"Date"),r.a.createElement(ee.a,null,"Location"),r.a.createElement(ee.a,{align:"right"},"Capacity (%)"))),r.a.createElement(Q.a,null,re.map((function(e){return r.a.createElement(te.a,{key:e.id},r.a.createElement(ee.a,null,e.date),r.a.createElement(ee.a,null,e.name),r.a.createElement(ee.a,{align:"right"},e.amount))})))),r.a.createElement("div",{className:e.seeMore},r.a.createElement(Y.a,{color:"primary",href:"#",onClick:ie},"See more deposits")))}function ce(){return r.a.createElement(b.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(Y.a,{color:"inherit",href:"https://www.commcurrency.com/"},"Community Currency")," ",(new Date).getFullYear(),".")}var me=Object(u.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(m.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(c.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));function se(){var e=me(),a=r.a.useState(!1),t=Object(o.a)(a,2),n=t[0],i=t[1],l=Object(s.a)(e.paper,e.fixedHeight);return r.a.createElement("div",{className:e.root},r.a.createElement(d.a,null),r.a.createElement(E.a,{position:"absolute",className:Object(s.a)(e.appBar,n&&e.appBarShift)},r.a.createElement(h.a,{className:e.toolbar},r.a.createElement(v.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){i(!0)},className:Object(s.a)(e.menuButton,n&&e.menuButtonHidden)},r.a.createElement(C.a,null)),r.a.createElement(b.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title},"Dashboard"))),r.a.createElement(p.a,{variant:"permanent",classes:{paper:Object(s.a)(e.drawerPaper,!n&&e.drawerPaperClose)},open:n},r.a.createElement("div",{className:e.toolbarIcon},r.a.createElement(v.a,{onClick:function(){i(!1)}},r.a.createElement(N.a,null))),r.a.createElement(x.a,null),r.a.createElement(f.a,null,W),r.a.createElement(x.a,null)),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpacer}),r.a.createElement(y.a,{maxWidth:"lg",className:e.container},r.a.createElement(w.a,{container:!0,spacing:3},r.a.createElement(w.a,{item:!0,xs:12,md:8,lg:9},r.a.createElement(j.a,{className:l},r.a.createElement(X,null))),r.a.createElement(w.a,{item:!0,xs:12,md:4,lg:3},r.a.createElement(j.a,{className:l},r.a.createElement($,null))),r.a.createElement(w.a,{item:!0,xs:12},r.a.createElement(j.a,{className:e.paper},r.a.createElement(oe,null)))),r.a.createElement(g.a,{pt:4},r.a.createElement(ce,null)))))}var ue=t(558),de=t(561),pe=t(553),ge=t(564);function Ee(){return r.a.createElement(b.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(Y.a,{color:"inherit",href:"https://www.commcurrency.com/"},"Community Currency")," ",(new Date).getFullYear(),".")}var he=Object(u.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},textfield:{height:24},toolbarIcon:Object(m.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(c.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:400}}}));function fe(){var e=he(),a=r.a.useState(!0),t=Object(o.a)(a,2),n=t[0],i=t[1],l=Object(s.a)(e.paper,e.fixedHeight),c=r.a.useState("Day"),m=Object(o.a)(c,2);m[0],m[1];return r.a.createElement("div",{className:e.root},r.a.createElement(d.a,null),r.a.createElement(E.a,{position:"absolute",className:Object(s.a)(e.appBar,n&&e.appBarShift)},r.a.createElement(h.a,{className:e.toolbar},r.a.createElement(v.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){i(!0)},className:Object(s.a)(e.menuButton,n&&e.menuButtonHidden)},r.a.createElement(C.a,null)),r.a.createElement(b.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title},"Settings"))),r.a.createElement(p.a,{variant:"permanent",classes:{paper:Object(s.a)(e.drawerPaper,!n&&e.drawerPaperClose)},open:n},r.a.createElement("div",{className:e.toolbarIcon},r.a.createElement(v.a,{onClick:function(){i(!1)}},r.a.createElement(N.a,null))),r.a.createElement(x.a,null),r.a.createElement(f.a,null,W),r.a.createElement(x.a,null)),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpacer}),r.a.createElement(y.a,{maxWidth:"lg",className:e.container},r.a.createElement(w.a,{container:!0,spacing:1},r.a.createElement(w.a,{item:!0,xs:12,md:12,lg:12},r.a.createElement(j.a,{className:l},r.a.createElement(K,null,"Account Info"),r.a.createElement(w.a,{container:!0,direction:"column"},r.a.createElement(w.a,{container:!0,direction:"row",style:{padding:5}},r.a.createElement(w.a,{item:!0,xs:2},r.a.createElement(b.a,{component:"p",variant:"h6"},"Name:")),r.a.createElement(w.a,{item:!0,xs:5},r.a.createElement(ue.a,{id:"UserName",size:"small",InputProps:{readOnly:!0},variant:"outlined",defaultValue:"First Last"}))),r.a.createElement(w.a,{container:!0,direction:"row",style:{padding:5}},r.a.createElement(w.a,{item:!0,xs:2},r.a.createElement(b.a,{component:"p",variant:"h6"},"Email:")),r.a.createElement(w.a,{item:!0,xs:3},r.a.createElement(ue.a,{id:"Email",size:"small",variant:"outlined",defaultValue:"email@gmail.com"})),r.a.createElement(w.a,{item:!0},r.a.createElement(pe.a,{value:"End",control:r.a.createElement(de.a,{color:"primary"}),label:"Notify Me",labelPlacement:"end"}))),r.a.createElement(w.a,{container:!0,direction:"column"},r.a.createElement(w.a,{item:!0,xs:7},r.a.createElement(b.a,{id:"percent-full"},"At what capcity?"),r.a.createElement(ge.a,{defaultValue:50,"aria-labelledby":"percent-full",valueLabelDisplay:"auto",step:10,marks:!0,min:10,max:100}))),r.a.createElement(w.a,{container:!0,direction:"row",style:{padding:5}},r.a.createElement(w.a,{item:!0,xs:2},r.a.createElement(b.a,{component:"p",variant:"h6"},"Phone Number:")),r.a.createElement(w.a,{item:!0,xs:3},r.a.createElement(ue.a,{id:"PhoneNum",size:"small",variant:"outlined",defaultValue:"123-456-7890"})),r.a.createElement(w.a,{item:!0},r.a.createElement(pe.a,{value:"End",control:r.a.createElement(de.a,{color:"primary"}),label:"Notify Me",labelPlacement:"end"}))),r.a.createElement(w.a,{container:!0,direction:"column"},r.a.createElement(w.a,{item:!0,xs:7},r.a.createElement(b.a,{id:"percent-full"},"At what capcity?"),r.a.createElement(ge.a,{defaultValue:50,"aria-labelledby":"percent-full",valueLabelDisplay:"auto",step:10,marks:!0,min:10,max:100}))))))),r.a.createElement(g.a,{pt:4},r.a.createElement(Ee,null)))))}var be=t(157),xe=t.n(be),ve=t(239),ye=t(551),we=t(566),je=t(555),Se=t(552),Ce=t(235),Oe=t.n(Ce),Ne=t(236),ke=t.n(Ne),Be=t(233),Ie=t.n(Be),Le=t(554),De=t(122),Fe=t(234),Te=t(67),Pe=t(238),Me=t(237),Ve=t(158),Ae="150789233013-48jt8dshg4abh9ivjgsfnn2c1d02ao1r.apps.googleusercontent.com",ze=function(e){Object(Pe.a)(t,e);var a=Object(Me.a)(t);function t(e){var n;return Object(De.a)(this,t),(n=a.call(this,e)).state={isLogined:!1,accessToken:""},n.login=n.login.bind(Object(Te.a)(n)),n.handleLoginFailure=n.handleLoginFailure.bind(Object(Te.a)(n)),n.logout=n.logout.bind(Object(Te.a)(n)),n.handleLogoutFailure=n.handleLogoutFailure.bind(Object(Te.a)(n)),n}return Object(Fe.a)(t,[{key:"login",value:function(e){e.Zi.access_token&&this.setState((function(a){return{isLogined:!0,accessToken:e.Zi.access_token}}))}},{key:"logout",value:function(e){this.setState((function(e){return{isLogined:!1,accessToken:""}}))}},{key:"handleLoginFailure",value:function(e){alert("Failed to log in")}},{key:"handleLogoutFailure",value:function(e){alert("Failed to log out")}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.isLogined?r.a.createElement(Ve.GoogleLogout,{clientId:Ae,buttonText:"Logout",onLogoutSuccess:this.logout,onFailure:this.handleLogoutFailure}):r.a.createElement(Ve.GoogleLogin,{clientId:Ae,buttonText:"Login",onSuccess:this.login,onFailure:this.handleLoginFailure,cookiePolicy:"single_host_origin",responseType:"code,token"}),this.state.accessToken?r.a.createElement("h5",null,"Your Access Token: ",r.a.createElement("br",null),r.a.createElement("br",null)," ",this.state.accessToken):null)}}]),t}(n.Component),He=Object(u.a)((function(e){return{margin:{margin:e.spacing(1)}}})),We=Object(ve.a)(Le.a)({background:"#3B54A5",color:"white",margin:20}),Re=Object(ve.a)(Le.a)({color:"#black","font-size":"8px"});var Ge=function(e){var a=He();return r.a.createElement("div",null,r.a.createElement(w.a,{container:!0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"100vh"}},r.a.createElement(w.a,{item:!0},r.a.createElement("img",{className:"logo",src:Ie.a,alt:"logo"})),r.a.createElement(w.a,{item:!0},r.a.createElement(Se.a,{className:a.margin},r.a.createElement(we.a,{htmlFor:"input-with-icon-adornment"},"Username"),r.a.createElement(ye.a,{id:"input-with-icon-adornment",startAdornment:r.a.createElement(je.a,{position:"start"},r.a.createElement(Oe.a,null))}))),r.a.createElement(w.a,{item:!0},r.a.createElement(ue.a,{className:a.margin,id:"input-with-icon-textfield",label:"Password",InputProps:{startAdornment:r.a.createElement(je.a,{position:"start"},r.a.createElement(ke.a,null))}})),r.a.createElement(w.a,{item:!0},r.a.createElement(H.b,{to:"/dashboard"},r.a.createElement(We,{variant:"contained",color:"primary"},"Login"))),r.a.createElement(w.a,{item:!0},r.a.createElement(Re,{variant:"text"},"Forgot Username/Password?")),r.a.createElement(w.a,{item:!0},r.a.createElement(ze,null))))},Ke=t(556),_e=t(557);function Ue(e){var a=Object(R.a)(),t=[],n=0;for(var i in e.data)n>Object.keys(e.data).length-50&&t.push({item:n,volume:e.data[i].volume}),n+=1;return console.log(t),r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null,"Recent data"),r.a.createElement(G.d,{width:"100%",height:200},r.a.createElement(G.c,{data:t,margin:{top:16,right:16,bottom:0,left:24}},r.a.createElement(G.e,{dataKey:"item",stroke:a.palette.text.secondary}),r.a.createElement(G.f,{stroke:a.palette.text.secondary},r.a.createElement(G.a,{angle:270,position:"left",style:{textAnchor:"middle",fill:a.palette.text.primary}},"Volume")),r.a.createElement(G.b,{type:"monotone",dataKey:"volume",stroke:a.palette.primary.main,dot:!1}))))}function Xe(e){var a=e.boxInfoList.sort((function(e,a){return e.volume/e.maxVolume<a.volume/a.maxVolume?1:-1})).map((function(e){return r.a.createElement(Ze,{key:e.name,boxInfo:e})}));return r.a.createElement(w.a,{container:!0,spacing:3},a)}function Ye(e,a,t){console.log("#"+e.toString(16)+a.toString(16)+t.toString(16));var n=(65536*e+256*a+t).toString(16);return 5===n.length&&(n="0"+n),console.log(n),"#"+n}function Je(e,a){console.log(e),console.log(a);var t=a/2;if(e>t){var n=a-t;return Ye(255,Math.floor(255-255*n/t),0)}return Ye(Math.floor(255-255*e/t),255,0)}function Ze(e){console.log(e.boxInfo);var a=$e(),t=Object(s.a)(a.paper,a.fixedHeight);e.boxInfo.volume,e.boxInfo.maxVolume;return r.a.createElement(w.a,{item:!0,xs:12,md:8,lg:12},r.a.createElement(j.a,{className:t,style:{paddingLeft:0,paddingRight:0,paddingTop:0,paddingBottom:0}},r.a.createElement(w.a,{container:!0,direction:"row",style:{height:"100%"}},r.a.createElement(w.a,{item:!0,xs:1,zeroMinWidth:!0,noWrap:!0},r.a.createElement("div",{style:{backgroundColor:Je(e.boxInfo.volume,e.boxInfo.maxVolume),width:20,height:"100%"}})),r.a.createElement(w.a,{item:!0,xs:4,zeroMinWidth:!0,style:{padding:20}},r.a.createElement(b.a,{variant:"h4",noWrap:!0},e.boxInfo.name),r.a.createElement(b.a,{noWrap:!0},e.boxInfo.location),r.a.createElement(b.a,null,"Current Volume: ",e.boxInfo.volume),r.a.createElement(b.a,null,"Max Volume: ",e.boxInfo.maxVolume),r.a.createElement(b.a,null,"Fullness: %",(100*e.boxInfo.volume/e.boxInfo.maxVolume).toFixed(2))),r.a.createElement(w.a,{item:!0,xs:4,style:{width:"100%"}},r.a.createElement(Ue,{data:e.boxInfo.chartData})))))}var $e=Object(u.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(m.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(c.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));function qe(e){var a=Object(n.useState)([]),t=Object(o.a)(a,2),i=t[0],l=t[1];Object(n.useEffect)((function(){e.api.boxData({id:1}).then((function(e){l(e.data),console.log(e)}))}),[]);var c=$e(),m=r.a.useState(!0),u=Object(o.a)(m,2),w=u[0],j=u[1];Object(s.a)(c.paper,c.fixedHeight);return r.a.createElement("div",{className:c.root},r.a.createElement(d.a,null),r.a.createElement(E.a,{position:"absolute",className:Object(s.a)(c.appBar,w&&c.appBarShift)},r.a.createElement(h.a,{className:c.toolbar},r.a.createElement(v.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){j(!0)},className:Object(s.a)(c.menuButton,w&&c.menuButtonHidden)},r.a.createElement(Ke.a,null)),r.a.createElement(b.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:c.title},"Collection Boxes"))),r.a.createElement(p.a,{variant:"permanent",classes:{paper:Object(s.a)(c.drawerPaper,!w&&c.drawerPaperClose)},open:w},r.a.createElement("div",{className:c.toolbarIcon},r.a.createElement(v.a,{onClick:function(){j(!1)}},r.a.createElement(_e.a,null))),r.a.createElement(x.a,null),r.a.createElement(f.a,null,W),r.a.createElement(x.a,null)),r.a.createElement("main",{className:c.content},r.a.createElement("div",{className:c.appBarSpacer}),r.a.createElement(y.a,{maxWidth:"lg",className:c.container},r.a.createElement(Xe,{boxInfoList:i}),r.a.createElement(g.a,{pt:4},r.a.createElement(ce,null)))))}var Qe=t(57);function ea(e){return r.a.createElement(H.a,{forceRefresh:!0},r.a.createElement(Qe.c,null,r.a.createElement(Qe.a,{path:"/CommunityCurrency/dashboard"},r.a.createElement(se,null)),r.a.createElement(Qe.a,{path:"/CommunityCurrency/settings"},r.a.createElement(fe,null)),r.a.createElement(Qe.a,{path:"/CommunityCurrency/boxes"},r.a.createElement(qe,{api:e.api})),r.a.createElement(Qe.a,{path:"/CommunityCurrency/"},r.a.createElement(Ge,null))))}xe.a.initializeApp({projectId:"communitycurrency-109db"});var aa=new function e(a){Object(De.a)(this,e),this.chartData=a.httpsCallable("chartData"),this.boxData=a.httpsCallable("boxData"),this.updateChartData=a.httpsCallable("updateChartData")}(xe.a.functions());aa.updateChartData({id:0}).then((function(e){console.log(e)})),aa.updateChartData({id:1}).then((function(e){console.log(e)})),aa.updateChartData({id:2}).then((function(e){console.log(e)})),aa.boxData({id:1}).then((function(e){console.log(e)})),aa.chartData({id:0}).then((function(e){console.log(e)})),l.a.render(r.a.createElement(ea,{api:aa}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[285,1,2]]]);
//# sourceMappingURL=main.2fe1523d.chunk.js.map