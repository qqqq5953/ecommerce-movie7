(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c1cd9e5c"],{"159b":function(t,e,c){var s=c("da84"),r=c("fdbc"),a=c("785a"),i=c("17c2"),n=c("9112"),o=function(t){if(t&&t.forEach!==i)try{n(t,"forEach",i)}catch(e){t.forEach=i}};for(var l in r)r[l]&&o(s[l]&&s[l].prototype);o(a)},"17c2":function(t,e,c){"use strict";var s=c("b727").forEach,r=c("a640"),a=r("forEach");t.exports=a?[].forEach:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}},2532:function(t,e,c){"use strict";var s=c("23e7"),r=c("e330"),a=c("5a34"),i=c("1d80"),n=c("577e"),o=c("ab13"),l=r("".indexOf);s({target:"String",proto:!0,forced:!o("includes")},{includes:function(t){return!!~l(n(i(this)),n(a(t)),arguments.length>1?arguments[1]:void 0)}})},"5a34":function(t,e,c){var s=c("da84"),r=c("44e7"),a=s.TypeError;t.exports=function(t){if(r(t))throw a("The method doesn't accept regular expressions");return t}},ab13:function(t,e,c){var s=c("b622"),r=s("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(c){try{return e[r]=!1,"/./"[t](e)}catch(s){}}return!1}},b727:function(t,e,c){var s=c("0366"),r=c("e330"),a=c("44ad"),i=c("7b0b"),n=c("07fa"),o=c("65f0"),l=r([].push),d=function(t){var e=1==t,c=2==t,r=3==t,d=4==t,u=6==t,b=7==t,h=5==t||u;return function(m,f,p,g){for(var v,w,j=i(m),O=a(j),y=s(f,p),x=n(O),k=0,I=g||o,P=e?I(m,x):c||b?I(m,0):void 0;x>k;k++)if((h||k in O)&&(v=O[k],w=y(v,k,j),t))if(e)P[k]=w;else if(w)switch(t){case 3:return!0;case 5:return v;case 6:return k;case 2:l(P,v)}else switch(t){case 4:return!1;case 7:l(P,v)}return u?-1:r||d?d:P}};t.exports={forEach:d(0),map:d(1),filter:d(2),some:d(3),every:d(4),find:d(5),findIndex:d(6),filterReject:d(7)}},caad:function(t,e,c){"use strict";var s=c("23e7"),r=c("4d64").includes,a=c("44d2");s({target:"Array",proto:!0},{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),a("includes")},dbc9:function(t,e,c){"use strict";c.r(e);var s=c("7a23"),r={class:"container py-5 px-5 px-xl-0"},a=Object(s["h"])("header",null,[Object(s["h"])("div",{class:"d-flex align-items-center"},[Object(s["h"])("i",{class:"bi bi-columns-gap text-warning me-3 fs-2"}),Object(s["h"])("h2",{class:"h1 mb-0"},"Pricing")])],-1),i={class:"py-4"},n={class:"row row-cols-1 row-cols-lg-3 mb-5 text-center list-unstyled"},o={class:"col mb-4 mb-lg-0"},l={class:"card mb-4 rounded-3 shadow-sm h-100"},d=Object(s["h"])("div",{class:"card-header py-3"},[Object(s["h"])("h4",{class:"my-0 fw-normal"},"Free")],-1),u={class:"card-body d-flex flex-column"},b=Object(s["i"])('<h1 class="card-title pricing-card-title"> NT$0<small class="text-muted fw-light">/month</small></h1><ul class="mt-3 mb-4 text-start"><li class="mb-3">Unlimited access to details of Movies</li><li class="mb-3">10 quotas for Watchlist</li></ul>',2),h=Object(s["j"])("See our products"),m={class:"col mb-4 mb-lg-0"},f={class:"card mb-4 rounded-3 shadow-sm h-100"},p=Object(s["h"])("div",{class:"card-header py-3"},[Object(s["h"])("h4",{class:"my-0 fw-normal"},"Rent a disc")],-1),g={class:"card-body d-flex flex-column"},v=Object(s["i"])('<h1 class="card-title pricing-card-title"> $0.99<small class="text-muted fw-light">/week</small></h1><ul class="mt-3 mb-4 text-start"><li class="mb-3">Unlimited access to details of Movies</li><li class="mb-3">50 quotas for Watchlist</li><li class="mb-3"> Enjoy the rented Movies with <strong class="fw-bold">HD</strong> quality </li><li>Access to rating the rented Movies</li><li>Watch on 1 screen only</li></ul>',2),w=Object(s["j"])("Pick a movie"),j={class:"col"},O={class:"card mb-4 rounded-3 shadow-sm border-primary h-100"},y=Object(s["h"])("div",{class:"card-header py-3 bg-primary border-primary"},[Object(s["h"])("h4",{class:"my-0 fw-normal text-white"},"SUBSCRIPTION")],-1),x={class:"card-body d-flex flex-column"},k=Object(s["i"])('<h1 class="card-title pricing-card-title"> $9.99<small class="text-muted fw-light">/month</small></h1><ul class="mt-3 mb-4 text-start"><li class="mb-3">Unlimited access to details of Movies</li><li class="mb-3">50 quotas for Watchlist</li><li class="mb-3"> Enjoy <strong class="fw-bold">ALL</strong> Movies with <strong class="fw-bold">4K</strong> quality </li><li class="mb-3"> Unlimited access to rating <strong class="fw-bold">ALL</strong> Movies </li><li> Watch on <strong class="fw-bold">2</strong> screens at the same time </li><li> Receive seasonal promotions up to <strong class="fw-bold">20% DISCOUNT</strong></li></ul>',2),I=["disabled"],P={key:0,class:"spinner-border spinner-grow-sm"},C=Object(s["h"])("span",null,"SUBSCRIBE NOW",-1),R={key:1,class:"mt-auto"},D=Object(s["h"])("div",{class:"text-muted"},"SUBSCRIBED !",-1),S=Object(s["h"])("span",{class:"text-light"},"Go to my cart",-1),E=Object(s["i"])('<div class="d-flex align-items-center"><i class="bi bi-columns-gap text-warning me-3 fs-2"></i><h2 class="h1 mb-0">Compare plans</h2></div><div class="table-responsive"><table class="table text-center align-middle"><thead><tr><th style="width:34%;"></th><th style="width:22%;">Free</th><th style="width:22%;">Rent</th><th style="width:22%;">SUBSCRIPTION</th></tr></thead><tbody><tr><th scope="row" class="text-start">Content Details</th><td><i class="bi bi-check2 fs-4"></i></td><td><i class="bi bi-check2 fs-4"></i></td><td><i class="bi bi-check2 fs-4"></i></td></tr><tr><th scope="row" class="text-start">Watchlist</th><td><i class="bi bi-check2 fs-4"></i></td><td><i class="bi bi-check2 fs-4"></i></td><td><i class="bi bi-check2 fs-4"></i></td></tr></tbody><tbody><tr><th scope="row" class="text-start">Quality</th><td></td><td>HD</td><td>4K</td></tr><tr><th scope="row" class="text-start">Rating</th><td></td><td><i class="bi bi-check2 fs-4"></i><div>(Limited)</div></td><td><i class="bi bi-check2 fs-4"></i><div>(Unlimited)</div></td></tr><tr><th scope="row" class="text-start">Discount</th><td></td><td></td><td><i class="bi bi-check2 fs-4"></i><div>(Up to 20%)</div></td></tr></tbody></table></div>',2);function U(t,e,c,U,T,A){var M=Object(s["J"])("router-link");return Object(s["z"])(),Object(s["g"])("div",r,[a,Object(s["h"])("main",i,[Object(s["h"])("ul",n,[Object(s["h"])("li",o,[Object(s["h"])("div",l,[d,Object(s["h"])("div",u,[b,Object(s["k"])(M,{to:{name:"AllProducts"},class:"w-100 btn btn-outline-primary mt-auto mb-2"},{default:Object(s["V"])((function(){return[h]})),_:1})])])]),Object(s["h"])("li",m,[Object(s["h"])("div",f,[p,Object(s["h"])("div",g,[v,Object(s["k"])(M,{to:{name:"AllProducts"},class:"w-100 btn btn-outline-primary mt-auto mb-2"},{default:Object(s["V"])((function(){return[w]})),_:1})])])]),Object(s["h"])("li",j,[Object(s["h"])("div",O,[y,Object(s["h"])("div",x,[k,T.isSubscriptionInCart?(Object(s["z"])(),Object(s["g"])("div",R,[D,Object(s["k"])(M,{to:{name:"Cart"},class:"w-100 btn btn-warning mt-2 mb-2 border border-warning border-2"},{default:Object(s["V"])((function(){return[S]})),_:1})])):(Object(s["z"])(),Object(s["g"])("button",{key:0,type:"button",class:"btn btn-primary border border-primary mt-auto mb-2 w-100",disabled:T.status.loadingProductID===A.subscriptionID,onClick:e[0]||(e[0]=function(t){return A.addProductToCart(A.subscriptionID)})},[T.status.loadingProductID===A.subscriptionID?(Object(s["z"])(),Object(s["g"])("span",P)):Object(s["f"])("",!0),C],8,I))])])])]),E])])}var T=c("1da1"),A=(c("96cf"),c("99af"),c("d3b7"),c("159b"),c("caad"),c("2532"),c("cfb9")),M={data:function(){return{status:{loadingProductID:""},isSubscriptionInCart:!1}},computed:{subscriptionID:function(){return"-MvtGpQQ9ctVDEyXHcX0"}},methods:{addProductToCart:function(t){var e=this;return Object(T["a"])(regeneratorRuntime.mark((function c(){var s,r,a,i;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return e.status.loadingProductID=t,s="".concat("https://vue3-course-api.hexschool.io/","api/").concat("e-commerce-api","/cart"),r={data:{product_id:t,qty:1}},c.next=5,e.$http.post(s,r).catch((function(t){console.log(t)}));case 5:return a=c.sent,console.log("addProductToCart",a.data),c.next=9,e.getCartProductNumber();case 9:return i=c.sent,A["a"].emit("calculate-product-number",i),c.next=13,e.hasSubscription();case 13:e.status.loadingProductID="";case 14:case"end":return c.stop()}}),c)})))()},cartAPIResponse:function(){var t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("e-commerce-api","/cart");return this.$http.get(t)},getCartProductNumber:function(){var t=this;return Object(T["a"])(regeneratorRuntime.mark((function e(){var c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.cartAPIResponse().catch((function(t){console.log(t)}));case 2:return c=e.sent,console.log("getCartProductNumber",c.data),e.abrupt("return",c.data.data.carts.length);case 5:case"end":return e.stop()}}),e)})))()},hasSubscription:function(){var t=this;return Object(T["a"])(regeneratorRuntime.mark((function e(){var c,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.cartAPIResponse().catch((function(t){console.log(t)}));case 2:c=e.sent,s=[],c.data.data.carts.forEach((function(t){s.push(t.product_id.includes("-MvtGpQQ9ctVDEyXHcX0"))})),t.isSubscriptionInCart=s.includes(!0);case 6:case"end":return e.stop()}}),e)})))()}},created:function(){window.scrollTo(0,-1e3),this.hasSubscription()}},N=c("6b0d"),W=c.n(N);const q=W()(M,[["render",U]]);e["default"]=q}}]);
//# sourceMappingURL=chunk-c1cd9e5c.0d35d220.js.map