(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a66bb57"],{"057f":function(t,e,n){var a=n("c6b6"),c=n("fc6a"),r=n("241c").f,i=n("4dae"),s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return r(t)}catch(e){return i(s)}};t.exports.f=function(t){return s&&"Window"==a(t)?o(t):r(c(t))}},"09dc":function(t,e,n){"use strict";n("1ea6")},"0b34":function(t,e,n){},"1ea6":function(t,e,n){},"428f":function(t,e,n){var a=n("da84");t.exports=a},"466d":function(t,e,n){"use strict";var a=n("c65b"),c=n("d784"),r=n("825a"),i=n("50c4"),s=n("577e"),o=n("1d80"),l=n("dc4a"),u=n("8aa5"),d=n("14c3");c("match",(function(t,e,n){return[function(e){var n=o(this),c=void 0==e?void 0:l(e,t);return c?a(c,e,n):new RegExp(e)[t](s(n))},function(t){var a=r(this),c=s(t),o=n(e,a,c);if(o.done)return o.value;if(!a.global)return d(a,c);var l=a.unicode;a.lastIndex=0;var b,f=[],h=0;while(null!==(b=d(a,c))){var p=s(b[0]);f[h]=p,""===p&&(a.lastIndex=u(c,i(a.lastIndex),l)),h++}return 0===h?null:f}]}))},"4de4":function(t,e,n){"use strict";var a=n("23e7"),c=n("b727").filter,r=n("1dde"),i=r("filter");a({target:"Array",proto:!0,forced:!i},{filter:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},"553a":function(t,e,n){},"746f":function(t,e,n){var a=n("428f"),c=n("1a2d"),r=n("e538"),i=n("9bf2").f;t.exports=function(t){var e=a.Symbol||(a.Symbol={});c(e,t)||i(e,t,{value:r.f(t)})}},7780:function(t,e,n){"use strict";n("0b34")},a4d3:function(t,e,n){"use strict";var a=n("23e7"),c=n("da84"),r=n("d066"),i=n("2ba4"),s=n("c65b"),o=n("e330"),l=n("c430"),u=n("83ab"),d=n("4930"),b=n("d039"),f=n("1a2d"),h=n("e8b5"),p=n("1626"),m=n("861d"),g=n("3a9b"),v=n("d9b5"),j=n("825a"),O=n("7b0b"),w=n("fc6a"),y=n("a04b"),x=n("577e"),k=n("5c6c"),P=n("7c73"),S=n("df75"),C=n("241c"),D=n("057f"),L=n("7418"),A=n("06cf"),_=n("9bf2"),M=n("37e8"),N=n("d1e7"),I=n("f36a"),R=n("6eeb"),V=n("5692"),U=n("f772"),B=n("d012"),z=n("90e3"),$=n("b622"),J=n("e538"),W=n("746f"),E=n("d44e"),F=n("69f3"),H=n("b727").forEach,T=U("hidden"),X="Symbol",q="prototype",Q=$("toPrimitive"),K=F.set,Y=F.getterFor(X),G=Object[q],Z=c.Symbol,tt=Z&&Z[q],et=c.TypeError,nt=c.QObject,at=r("JSON","stringify"),ct=A.f,rt=_.f,it=D.f,st=N.f,ot=o([].push),lt=V("symbols"),ut=V("op-symbols"),dt=V("string-to-symbol-registry"),bt=V("symbol-to-string-registry"),ft=V("wks"),ht=!nt||!nt[q]||!nt[q].findChild,pt=u&&b((function(){return 7!=P(rt({},"a",{get:function(){return rt(this,"a",{value:7}).a}})).a}))?function(t,e,n){var a=ct(G,e);a&&delete G[e],rt(t,e,n),a&&t!==G&&rt(G,e,a)}:rt,mt=function(t,e){var n=lt[t]=P(tt);return K(n,{type:X,tag:t,description:e}),u||(n.description=e),n},gt=function(t,e,n){t===G&&gt(ut,e,n),j(t);var a=y(e);return j(n),f(lt,a)?(n.enumerable?(f(t,T)&&t[T][a]&&(t[T][a]=!1),n=P(n,{enumerable:k(0,!1)})):(f(t,T)||rt(t,T,k(1,{})),t[T][a]=!0),pt(t,a,n)):rt(t,a,n)},vt=function(t,e){j(t);var n=w(e),a=S(n).concat(xt(n));return H(a,(function(e){u&&!s(Ot,n,e)||gt(t,e,n[e])})),t},jt=function(t,e){return void 0===e?P(t):vt(P(t),e)},Ot=function(t){var e=y(t),n=s(st,this,e);return!(this===G&&f(lt,e)&&!f(ut,e))&&(!(n||!f(this,e)||!f(lt,e)||f(this,T)&&this[T][e])||n)},wt=function(t,e){var n=w(t),a=y(e);if(n!==G||!f(lt,a)||f(ut,a)){var c=ct(n,a);return!c||!f(lt,a)||f(n,T)&&n[T][a]||(c.enumerable=!0),c}},yt=function(t){var e=it(w(t)),n=[];return H(e,(function(t){f(lt,t)||f(B,t)||ot(n,t)})),n},xt=function(t){var e=t===G,n=it(e?ut:w(t)),a=[];return H(n,(function(t){!f(lt,t)||e&&!f(G,t)||ot(a,lt[t])})),a};if(d||(Z=function(){if(g(tt,this))throw et("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?x(arguments[0]):void 0,e=z(t),n=function(t){this===G&&s(n,ut,t),f(this,T)&&f(this[T],e)&&(this[T][e]=!1),pt(this,e,k(1,t))};return u&&ht&&pt(G,e,{configurable:!0,set:n}),mt(e,t)},tt=Z[q],R(tt,"toString",(function(){return Y(this).tag})),R(Z,"withoutSetter",(function(t){return mt(z(t),t)})),N.f=Ot,_.f=gt,M.f=vt,A.f=wt,C.f=D.f=yt,L.f=xt,J.f=function(t){return mt($(t),t)},u&&(rt(tt,"description",{configurable:!0,get:function(){return Y(this).description}}),l||R(G,"propertyIsEnumerable",Ot,{unsafe:!0}))),a({global:!0,wrap:!0,forced:!d,sham:!d},{Symbol:Z}),H(S(ft),(function(t){W(t)})),a({target:X,stat:!0,forced:!d},{for:function(t){var e=x(t);if(f(dt,e))return dt[e];var n=Z(e);return dt[e]=n,bt[n]=e,n},keyFor:function(t){if(!v(t))throw et(t+" is not a symbol");if(f(bt,t))return bt[t]},useSetter:function(){ht=!0},useSimple:function(){ht=!1}}),a({target:"Object",stat:!0,forced:!d,sham:!u},{create:jt,defineProperty:gt,defineProperties:vt,getOwnPropertyDescriptor:wt}),a({target:"Object",stat:!0,forced:!d},{getOwnPropertyNames:yt,getOwnPropertySymbols:xt}),a({target:"Object",stat:!0,forced:b((function(){L.f(1)}))},{getOwnPropertySymbols:function(t){return L.f(O(t))}}),at){var kt=!d||b((function(){var t=Z();return"[null]"!=at([t])||"{}"!=at({a:t})||"{}"!=at(Object(t))}));a({target:"JSON",stat:!0,forced:kt},{stringify:function(t,e,n){var a=I(arguments),c=e;if((m(e)||void 0!==t)&&!v(t))return h(e)||(e=function(t,e){if(p(c)&&(e=s(c,this,t,e)),!v(e))return e}),a[1]=e,i(at,null,a)}})}if(!tt[Q]){var Pt=tt.valueOf;R(tt,Q,(function(t){return s(Pt,this)}))}E(Z,X),B[T]=!0},b727:function(t,e,n){var a=n("0366"),c=n("e330"),r=n("44ad"),i=n("7b0b"),s=n("07fa"),o=n("65f0"),l=c([].push),u=function(t){var e=1==t,n=2==t,c=3==t,u=4==t,d=6==t,b=7==t,f=5==t||d;return function(h,p,m,g){for(var v,j,O=i(h),w=r(O),y=a(p,m),x=s(w),k=0,P=g||o,S=e?P(h,x):n||b?P(h,0):void 0;x>k;k++)if((f||k in w)&&(v=w[k],j=y(v,k,O),t))if(e)S[k]=j;else if(j)switch(t){case 3:return!0;case 5:return v;case 6:return k;case 2:l(S,v)}else switch(t){case 4:return!1;case 7:l(S,v)}return d?-1:c||u?u:S}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},bb51:function(t,e,n){"use strict";n.r(e);var a=n("7a23"),c=function(t){return Object(a["C"])("data-v-d3025fc6"),t=t(),Object(a["A"])(),t},r={class:"bg-primary"},i={class:"container-md"},s={class:"position-relative d-md-none"},o={class:"d-md-none",style:{"max-height":"373px",overflow:"hidden"}},l=c((function(){return Object(a["h"])("div",{class:"header-background header-background-adjusted-mobile header-background-img-mobile"},null,-1)})),u={class:"header-background-img-cover position-absolute top-0 bottom-0 end-0 d-flex align-items-center w-100 h-100"},d={class:"position-relative d-flex flex-column justify-content-center h-100 w-100 mx-4"},b=Object(a["i"])('<div class="header-foreground position-absolute top-0 bottom-0 m-auto w-100" data-v-d3025fc6></div><div class="position-absolute d-flex justify-content-center align-items-center w-100" data-v-d3025fc6><h2 class="text-white text-center lh-base p-3 mb-0" data-v-d3025fc6><span class="d-block" data-v-d3025fc6>Offer worldwide</span><span class="text-warning" data-v-d3025fc6> latest movies </span> fitting your lifestyle </h2></div>',2),f={class:"position-absolute bottom-0 start-0 end-0 mb-3"},h=c((function(){return Object(a["h"])("span",null,"Pick a movie now",-1)})),p=c((function(){return Object(a["h"])("i",{class:"bi bi-arrow-right ms-2"},null,-1)})),m={class:"position-relative d-none d-md-block"},g={class:"position-relative"},v=c((function(){return Object(a["h"])("div",{class:"header-background header-background-img"},null,-1)})),j={class:"header-background-img-cover d-flex align-items-center h-100 position-absolute top-0 bottom-0 end-0 start-0"},O={class:"mb-0 mx-3 mx-md-4 mx-xl-5 p-4 header-foreground"},w=c((function(){return Object(a["h"])("h2",{class:"text-white"},[Object(a["h"])("span",{class:"d-block"},"Offer worldwide"),Object(a["h"])("span",{class:"text-warning"}," latest movies "),Object(a["j"])(" fitting your lifestyle ")],-1)})),y=c((function(){return Object(a["h"])("span",null,"Pick a movie now",-1)})),x=c((function(){return Object(a["h"])("i",{class:"bi bi-arrow-right ms-2"},null,-1)})),k={class:"py-5 px-5 px-xl-0"},P=Object(a["i"])('<section class="pb-xl-5" data-v-d3025fc6><h2 class="h1 text-white text-center mb-4" data-v-d3025fc6>Why CMDB</h2><ul class="row list-unstyled mb-xl-0" data-v-d3025fc6><li class="col mb-4 mb-xl-0" data-v-d3025fc6><div class="rounded-3 p-4 h-100 why-section-background" data-v-d3025fc6><h3 class="text-white text-center" data-v-d3025fc6>Diversity</h3><div class="d-flex justify-content-center my-3" data-v-d3025fc6><i class="bi bi-globe display-1 text-warning" data-v-d3025fc6></i></div><p class="text-white" data-v-d3025fc6> We collect the latest movies from <span class="fw-bold text-warning" data-v-d3025fc6>Asia, Europe, United States of America and Canada</span> , ensuring to keep on track of the trends. </p></div></li><li class="col mb-4 mb-xl-0" data-v-d3025fc6><div class="rounded-3 p-4 h-100 why-section-background" data-v-d3025fc6><h3 class="text-white text-center" data-v-d3025fc6>Quality</h3><div class="d-flex justify-content-center gap-3 my-3" data-v-d3025fc6><i class="bi bi-badge-4k display-1 text-warning" data-v-d3025fc6></i><i class="bi bi-badge-hd display-1 text-warning" data-v-d3025fc6></i></div><p class="text-white" data-v-d3025fc6> We provide <span class="fw-bold text-warning" data-v-d3025fc6>either 4K or HD</span> movies depending on the plan chosen, differentiating from the market where only premium members are qualified for receiving high quality entertainment. </p></div></li><li class="col mb-4 mb-xl-0" data-v-d3025fc6><div class="rounded-3 p-4 h-100 why-section-background" data-v-d3025fc6><h3 class="text-white text-center" data-v-d3025fc6>Flexibility</h3><div class="d-flex justify-content-center my-3" data-v-d3025fc6><i class="bi bi-calendar3 display-1 text-warning" data-v-d3025fc6></i></div><p class="text-white mb-4" data-v-d3025fc6><span data-v-d3025fc6>We offer 2 flexible plans:</span><span class="d-block" data-v-d3025fc6><span class="fw-bold text-warning" data-v-d3025fc6>SUBSCRIPTION:</span> unequaled entertainment experience</span><span class="d-block" data-v-d3025fc6><span class="fw-bold text-warning" data-v-d3025fc6>RENTAL:</span> prompt entertainment with high qualities.</span></p><p class="text-white" data-v-d3025fc6> You can also subscribe for week <span class="fw-bold text-warning" data-v-d3025fc6>only 1 month</span> or rent for <span class="fw-bold text-warning" data-v-d3025fc6>only 1 week</span> if you like. </p></div></li></ul></section>',1),S={class:"pb-5"},C={class:"h1 d-inline-block genre-title"},D=c((function(){return Object(a["h"])("div",{class:"d-none d-md-flex"},[Object(a["h"])("i",{class:"bi bi-camera-reels text-warning me-3 fs-4"}),Object(a["h"])("i",{class:"bi bi-camera-reels-fill d-none text-warning me-3 fs-4"})],-1)})),L=c((function(){return Object(a["h"])("span",null,"Now Playing",-1)})),A=c((function(){return Object(a["h"])("i",{class:"bi bi-chevron-right ms-2 fs-4"},null,-1)})),_=[D,L,A],M={class:"position-relative mt-3"},N={class:"overflow-auto card-scrollbar position-relative"},I=c((function(){return Object(a["h"])("div",{class:"position-absolute right-blur"},null,-1)})),R={class:"pb-5"},V={class:"h1 d-inline-block genre-title"},U=c((function(){return Object(a["h"])("div",{class:"d-none d-md-flex"},[Object(a["h"])("i",{class:"bi bi-camera-reels text-warning me-3 fs-4"}),Object(a["h"])("i",{class:"bi bi-camera-reels-fill d-none text-warning me-3 fs-4"})],-1)})),B=c((function(){return Object(a["h"])("span",null,"UpComing",-1)})),z=c((function(){return Object(a["h"])("i",{class:"bi bi-chevron-right ms-2 fs-4"},null,-1)})),$=[U,B,z],J={class:"position-relative mt-3"},W={class:"overflow-auto mt-3 mb-5 card-scrollbar position-relative"},E=c((function(){return Object(a["h"])("div",{class:"position-absolute right-blur"},null,-1)})),F={class:"bg-dark border-top"},H={class:"container"};function T(t,e,n,c,D,L){var A=Object(a["J"])("Loading"),U=Object(a["J"])("Navbar"),B=Object(a["J"])("router-link"),z=Object(a["J"])("CardVertical"),T=Object(a["J"])("Footer");return Object(a["z"])(),Object(a["g"])(a["a"],null,[Object(a["k"])(A,{active:D.isLoading},null,8,["active"]),Object(a["k"])(U),Object(a["h"])("div",r,[Object(a["h"])("div",i,[Object(a["h"])("header",s,[Object(a["h"])("section",o,[l,Object(a["h"])("div",u,[Object(a["h"])("div",d,[b,Object(a["h"])("div",f,[Object(a["k"])(B,{to:{name:"AllProducts"},class:"btn btn-warning btn-sm fs-6 w-100 text-primary"},{default:Object(a["V"])((function(){return[h,p]})),_:1})])])])])]),Object(a["h"])("header",m,[Object(a["h"])("section",g,[v,Object(a["h"])("div",j,[Object(a["h"])("div",O,[w,Object(a["k"])(B,{to:{name:"AllProducts"},class:"btn btn-warning fs-5 w-100 text-primary"},{default:Object(a["V"])((function(){return[y,x]})),_:1})])])])]),Object(a["h"])("main",k,[P,Object(a["h"])("section",S,[Object(a["h"])("h2",C,[Object(a["h"])("a",{href:"#",onClick:e[0]||(e[0]=Object(a["X"])((function(t){return L.moreResultsOfCMDB("nowplaying")}),["prevent"])),class:"text-white text-decoration-none d-flex align-items-center"},_)]),Object(a["h"])("div",M,[Object(a["h"])("section",N,[Object(a["k"])(z,{results:D.nowPlaying,language:D.language},null,8,["results","language"])]),I])]),Object(a["h"])("section",R,[Object(a["h"])("h2",V,[Object(a["h"])("a",{href:"#",onClick:e[1]||(e[1]=Object(a["X"])((function(t){return L.moreResultsOfCMDB("upcoming")}),["prevent"])),class:"text-white text-decoration-none d-flex align-items-center"},$)]),Object(a["h"])("div",J,[Object(a["h"])("section",W,[Object(a["k"])(z,{results:D.upComing,language:D.language},null,8,["results","language"])]),E])])])])]),Object(a["h"])("div",F,[Object(a["h"])("div",H,[Object(a["k"])(T)])])],64)}var X=n("1da1"),q=(n("96cf"),n("99af"),n("4de4"),n("d3b7"),n("ac1f"),n("1276"),n("d178")),Q=n("fd2d"),K=(n("a4d3"),n("e01a"),{class:"card-wrapper row flex-nowrap list-unstyled"}),Y=["onClick"],G={class:"position-relative h-100"},Z=["src","alt"],tt={class:"movie-intro position-absolute top-0 bottom-0 left-0 right-0 w-100 h-100 d-none d-xl-block",style:{background:"rgba(0, 0, 0, 0.7)"}},et={class:"d-flex flex-column text-white position-absolute bottom-0 m-auto p-4 w-100",style:{top:"35%"}},nt={class:"text-white text-center"},at={class:"mt-auto"},ct={class:"d-block fs-6 text-end"};function rt(t,e,n,c,r,i){return Object(a["z"])(),Object(a["g"])("ul",K,[(Object(a["z"])(!0),Object(a["g"])(a["a"],null,Object(a["H"])(n.results,(function(t){return Object(a["z"])(),Object(a["g"])("li",{class:"col-12 col-sm-8 col-md-5 col-lg-4 movie-poster",key:t.id,style:{"scroll-snap-align":"start"}},[Object(a["h"])("a",{href:"#",class:"d-block text-decoration-none h-100",onClick:Object(a["X"])((function(e){return i.getProductDetails(t.id)}),["prevent"])},[Object(a["h"])("div",G,[t.imageUrl[0]?(Object(a["z"])(),Object(a["g"])("img",{key:0,src:t.imageUrl[0],class:"img-fluid d-block h-100 w-100",alt:t.title,style:{"object-fit":"cover","object-position":"center center"}},null,8,Z)):Object(a["f"])("",!0),Object(a["h"])("div",tt,[Object(a["h"])("div",et,[Object(a["h"])("h3",nt,Object(a["M"])(t.title),1),Object(a["h"])("p",at,Object(a["M"])(t.description),1),Object(a["h"])("small",ct,Object(a["M"])(t.content.split("|")[2]),1)])])])],8,Y)])})),128))])}var it={props:{results:{type:Array},language:{type:String}},data:function(){return{baseImageUrl:"https://image.tmdb.org/t/p/w300",genre:"movie"}},methods:{getProductDetails:function(t){this.$router.push({name:"Product",params:{productID:t}})}}},st=(n("7780"),n("6b0d")),ot=n.n(st);const lt=ot()(it,[["render",rt],["__scopeId","data-v-632abdd6"]]);var ut=lt,dt={components:{CardVertical:ut,Navbar:q["a"],Footer:Q["a"]},inject:["sortData","emitter"],data:function(){return{baseUrl:"https://api.themoviedb.org/3/",key:"7bbe6005cfda593dc21cceb93eaf9a8e",products:[],nowPlaying:[],upComing:[],language:"en-US",region:"US",isLoading:!1}},methods:{moreResultsOfCMDB:function(t){this.$router.push({name:"AllResults",params:{genre:t}})},getProducts:function(){var t=this;return Object(X["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,n="".concat("https://vue3-course-api.hexschool.io/","api/").concat("e-commerce-api","/products/all"),e.next=4,t.$http.get(n).catch((function(t){console.log(t)}));case 4:a=e.sent,console.log("res",a.data),t.products=a.data.products,t.getNowPlaying(),t.getUpcoming(),t.isLoading=!1;case 10:case"end":return e.stop()}}),e)})))()},getNowPlaying:function(){this.nowPlaying=this.products.filter((function(t){var e=t.category.split("|")[1];return"nowplaying"===e})),this.nowPlaying=this.sortData(this.nowPlaying,"content")},getUpcoming:function(){this.upComing=this.products.filter((function(t){var e=t.category.split("|")[1];return"upcoming"===e})),this.upComing=this.sortData(this.upComing,"content")}},created:function(){window.scrollTo(0,-1e3),this.getProducts()}};n("c9e2");const bt=ot()(dt,[["render",T],["__scopeId","data-v-d3025fc6"]]);e["default"]=bt},c9e2:function(t,e,n){"use strict";n("553a")},d178:function(t,e,n){"use strict";n("ac1f"),n("466d"),n("1276");var a=n("7a23"),c=function(t){return Object(a["C"])("data-v-d37b5924"),t=t(),Object(a["A"])(),t},r={class:"navbar navbar-expand-lg navbar-dark bg-primary"},i={class:"container-fluid"},s={class:"mb-0"},o=Object(a["j"])("CMDB"),l=c((function(){return Object(a["h"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarDropdownMenu","aria-controls":"navbarDropdownMenu","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(a["h"])("span",{class:"navbar-toggler-icon"})],-1)})),u={class:"collapse navbar-collapse row flex-column flex-lg-row",id:"navbarDropdownMenu",ref:"navbarDropdownMenu"},d={class:"col"},b={class:"d-flex my-3"},f={class:"position-relative w-100"},h=c((function(){return Object(a["h"])("i",{class:"bi bi-x-lg"},null,-1)})),p=[h],m={key:0,class:"text-white list-unstyled position-absolute bg-dark mb-0 start-0 end-0 pt-3 search-list",ref:"searchList"},g=["src","alt"],v={class:"ms-3 text-light"},j={class:"text-light mb-0"},O={class:"text-light"},w=c((function(){return Object(a["h"])("li",null,[Object(a["h"])("hr",{class:"dropdown-divider my-0"})],-1)})),y={class:"px-4 py-3 search-item"},x={key:1,class:"px-4 pb-3 search-item"},k={class:"col"},P={class:"nav-item"},S=c((function(){return Object(a["h"])("span",null,"Pricing",-1)})),C={class:"nav-item"},D=c((function(){return Object(a["h"])("span",null,"Products",-1)})),L={class:"nav-item"},A=Object(a["j"])("Watchlist"),_={class:"nav-item"},M=Object(a["j"])("Admin"),N={class:"nav-item"},I={class:"bi bi-cart fs-3 position-relative"},R={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark fs-6"},V=c((function(){return Object(a["h"])("span",{class:"visually-hidden"},"items in cart",-1)})),U=c((function(){return Object(a["h"])("div",{class:"row"},null,-1)}));function B(t,e,n,c,h,B){var z=Object(a["J"])("router-link"),$=Object(a["J"])("Loading");return Object(a["z"])(),Object(a["g"])(a["a"],null,[Object(a["h"])("nav",r,[Object(a["h"])("div",i,[Object(a["h"])("h1",s,[Object(a["k"])(z,{class:"navbar-brand nav-link active",to:{name:"Home"}},{default:Object(a["V"])((function(){return[o]})),_:1})]),l,Object(a["h"])("div",u,[Object(a["h"])("div",d,[Object(a["h"])("form",b,[Object(a["h"])("div",f,[Object(a["W"])(Object(a["h"])("input",{class:"form-control form-control-sm h-100",type:"search",placeholder:"Search","onUpdate:modelValue":e[0]||(e[0]=function(t){return h.keywords=t}),"aria-label":"Search with dropdown button",ref:"searchBar",onInput:e[1]||(e[1]=function(){return B.searchInput&&B.searchInput.apply(B,arguments)})},null,544),[[a["Q"],h.keywords,void 0,{trim:!0}]]),Object(a["h"])("a",{href:"#",class:"position-absolute end-0 top-0 bottom-0 p-3 d-flex align-items-center",onClick:e[2]||(e[2]=Object(a["X"])((function(){return B.clearSearchBar&&B.clearSearchBar.apply(B,arguments)}),["prevent"]))},p),h.keywords?(Object(a["z"])(),Object(a["g"])("ul",m,[Object(a["k"])($,{active:h.isLoading,"is-full-page":!1},null,8,["active"]),h.match.length?(Object(a["z"])(),Object(a["g"])(a["a"],{key:0},[(Object(a["z"])(!0),Object(a["g"])(a["a"],null,Object(a["H"])(h.match,(function(t){return Object(a["z"])(),Object(a["g"])("li",{class:"px-4 py-2 search-item",key:t},[Object(a["k"])(z,{to:{name:"Product",params:{productID:t.id}},class:"text-decoration-none d-flex",onClick:e[3]||(e[3]=function(t){B.clearSearchBar(),B.toggleNavbarDropdown()})},{default:Object(a["V"])((function(){return[t.imageUrl[0]?(Object(a["z"])(),Object(a["g"])("img",{key:0,src:t.imageUrl[0],class:"card-img-top img-fluid d-block",alt:t.title},null,8,g)):Object(a["f"])("",!0),Object(a["h"])("div",v,[Object(a["h"])("h5",j,Object(a["M"])(t.title),1),Object(a["h"])("small",O,Object(a["M"])(t.content.split("|")[2]),1)])]})),_:2},1032,["to"])])})),128)),w,Object(a["h"])("li",y,[Object(a["h"])("a",{href:"#",class:"text-light",onClick:e[4]||(e[4]=Object(a["X"])((function(){return B.toAllResult&&B.toAllResult.apply(B,arguments)}),["prevent"]))},"See all results")])],64)):(Object(a["z"])(),Object(a["g"])("li",x,"no result"))],512)):Object(a["f"])("",!0)])])]),Object(a["h"])("div",k,[Object(a["h"])("ul",{class:"navbar-nav ms-auto mb-0 align-items-center justify-content-between",onClick:e[5]||(e[5]=function(){return B.toggleNavbarDropdown&&B.toggleNavbarDropdown.apply(B,arguments)})},[Object(a["h"])("li",P,[Object(a["k"])(z,{class:"nav-link",to:{name:"Pricing"}},{default:Object(a["V"])((function(){return[S]})),_:1})]),Object(a["h"])("li",C,[Object(a["k"])(z,{class:"nav-link",to:{name:"AllProducts"}},{default:Object(a["V"])((function(){return[D]})),_:1})]),Object(a["h"])("li",L,[Object(a["k"])(z,{class:"nav-link",to:{name:"Watchlist"}},{default:Object(a["V"])((function(){return[A]})),_:1})]),Object(a["h"])("li",_,[Object(a["k"])(z,{class:"nav-link",to:{name:"Login"}},{default:Object(a["V"])((function(){return[M]})),_:1})]),Object(a["h"])("li",N,[Object(a["k"])(z,{class:"nav-link",to:{name:"Cart"}},{default:Object(a["V"])((function(){return[Object(a["h"])("i",I,[Object(a["h"])("span",R,[Object(a["j"])(Object(a["M"])(h.cartLength)+" ",1),V])])]})),_:1})])])])],512)])]),U],64)}var z=n("1da1"),$=(n("96cf"),n("99af"),n("4de4"),n("d3b7"),n("a15b"),{data:function(){return{baseImageUrl:"https://image.tmdb.org/t/p/w200",keywords:"",language:"",isLoading:!1,products:[],match:[],cartLength:""}},inject:["emitter"],emits:["calculate-product-number"],methods:{getCartProductNumber:function(){var t=this;return Object(z["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n="".concat("https://vue3-course-api.hexschool.io/","api/").concat("e-commerce-api","/cart"),e.next=3,t.$http.get(n).catch((function(t){console.log(t)}));case 3:a=e.sent,t.cartLength=a.data.data.carts.length;case 5:case"end":return e.stop()}}),e)})))()},getAllProducts:function(){var t=this;return Object(z["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,n="".concat("https://vue3-course-api.hexschool.io/","api/").concat("e-commerce-api","/products/all"),e.next=4,t.$http.get(n).catch((function(t){console.log(t)}));case 4:a=e.sent,console.log("getAllProducts",a.data),t.products=a.data.products,t.products=t.products.filter((function(t){return"Subscription"!==t.category})),t.isLoading=!1;case 9:case"end":return e.stop()}}),e)})))()},searchInput:function(){var t=this;this.keywords&&(this.match=this.products.filter((function(e){return e.title.split("-").join(" ").toUpperCase().match(t.keywords.toUpperCase())})))},toggleSearchMenu:function(){var t=this;window.addEventListener("click",(function(e){var n=e.target;n!==t.$refs.searchBar&&t.keywords.length&&t.$refs.searchList.classList.add("d-none"),n===t.$refs.searchBar&&t.keywords.length&&t.$refs.searchList.classList.remove("d-none")}))},clearSearchBar:function(){this.keywords=""},toAllResult:function(){this.keywords&&(this.$router.push({name:"AllResults",params:{genre:this.keywords}}),this.clearSearchBar(),this.toggleNavbarDropdown())},toggleNavbarDropdown:function(){this.$refs.navbarDropdownMenu.classList.toggle("show")}},mounted:function(){var t=this;this.toggleSearchMenu(),this.getAllProducts(),this.getCartProductNumber(),this.emitter.on("calculate-product-number",(function(e){t.cartLength=e}))}}),J=(n("09dc"),n("6b0d")),W=n.n(J);const E=W()($,[["render",B],["__scopeId","data-v-d37b5924"]]);e["a"]=E},e01a:function(t,e,n){"use strict";var a=n("23e7"),c=n("83ab"),r=n("da84"),i=n("e330"),s=n("1a2d"),o=n("1626"),l=n("3a9b"),u=n("577e"),d=n("9bf2").f,b=n("e893"),f=r.Symbol,h=f&&f.prototype;if(c&&o(f)&&(!("description"in h)||void 0!==f().description)){var p={},m=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:u(arguments[0]),e=l(h,this)?new f(t):void 0===t?f():f(t);return""===t&&(p[e]=!0),e};b(m,f),m.prototype=h,h.constructor=m;var g="Symbol(test)"==String(f("test")),v=i(h.toString),j=i(h.valueOf),O=/^Symbol\((.*)\)[^)]+$/,w=i("".replace),y=i("".slice);d(h,"description",{configurable:!0,get:function(){var t=j(this),e=v(t);if(s(p,t))return"";var n=g?y(e,7,-1):w(e,O,"$1");return""===n?void 0:n}}),a({global:!0,forced:!0},{Symbol:m})}},e538:function(t,e,n){var a=n("b622");e.f=a},fd2d:function(t,e,n){"use strict";var a=n("7a23"),c={class:"py-5 px-5 px-xl-0"},r={class:"row flex-column flex-md-row justify-content-md-between"},i={class:"col col-md-8 pe-md-4"},s={class:"h1 border border-2 rounded-3 p-2 mb-0 d-inline-block"},o=Object(a["j"])("CMDB"),l=Object(a["h"])("p",{class:"text-white mt-3 mb-md-0"}," CMDB Offer worldwide latest movies fitting your lifestyle. ",-1),u=Object(a["h"])("p",{class:"text-white mt-3 mt-lg-0 mb-md-0"}," We differentiate ourselves with 3 advantages: Diversity, Quality and Flexibility. ",-1),d={class:"col py-2 py-md-0"},b={class:"nav flex-column w-50"},f={class:"nav-item me-0"},h=Object(a["h"])("span",null,"Products",-1),p={class:"nav-item me-0"},m=Object(a["h"])("span",null,"Pricing",-1),g={class:"nav-item me-0"},v=Object(a["j"])("Watchlist"),j={class:"nav-item me-0"},O=Object(a["j"])(" Cart"),w={class:"nav-item me-0"},y=Object(a["j"])("Admin"),x=Object(a["h"])("div",{class:"d-flex flex-column align-items-md-center d-md-block pt-3 fs-6 text-center"},[Object(a["h"])("span",null,"© 2022 Andy Hsieh."),Object(a["h"])("span",null," All rights reserved.")],-1);function k(t,e){var n=Object(a["J"])("router-link");return Object(a["z"])(),Object(a["g"])("footer",c,[Object(a["h"])("div",r,[Object(a["h"])("section",i,[Object(a["h"])("h2",s,[Object(a["k"])(n,{class:"text-white text-decoration-none",to:{name:"Home"}},{default:Object(a["V"])((function(){return[o]})),_:1})]),l,u]),Object(a["h"])("section",d,[Object(a["h"])("ul",b,[Object(a["h"])("li",f,[Object(a["k"])(n,{class:"nav-link text-muted ps-0",to:{name:"AllProducts"}},{default:Object(a["V"])((function(){return[h]})),_:1})]),Object(a["h"])("li",p,[Object(a["k"])(n,{class:"nav-link text-muted ps-0",to:{name:"Pricing"}},{default:Object(a["V"])((function(){return[m]})),_:1})]),Object(a["h"])("li",g,[Object(a["k"])(n,{class:"nav-link text-muted ps-0",to:{name:"Watchlist"}},{default:Object(a["V"])((function(){return[v]})),_:1})]),Object(a["h"])("li",j,[Object(a["k"])(n,{class:"nav-link text-muted ps-0",to:{name:"Cart"}},{default:Object(a["V"])((function(){return[O]})),_:1})]),Object(a["h"])("li",w,[Object(a["k"])(n,{class:"nav-link text-muted ps-0",to:{name:"Login"}},{default:Object(a["V"])((function(){return[y]})),_:1})])])])]),x])}var P=n("6b0d"),S=n.n(P);const C={},D=S()(C,[["render",k]]);e["a"]=D}}]);
//# sourceMappingURL=chunk-2a66bb57.87a60ac7.js.map