(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63c08971"],{"159b":function(e,t,n){var c=n("da84"),i=n("fdbc"),s=n("785a"),o=n("17c2"),r=n("9112"),a=function(e){if(e&&e.forEach!==o)try{r(e,"forEach",o)}catch(t){e.forEach=o}};for(var d in i)i[d]&&a(c[d]&&c[d].prototype);a(s)},"17c2":function(e,t,n){"use strict";var c=n("b727").forEach,i=n("a640"),s=i("forEach");e.exports=s?[].forEach:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}},8082:function(e,t,n){"use strict";n("f2a4")},b0c0:function(e,t,n){var c=n("83ab"),i=n("5e77").EXISTS,s=n("e330"),o=n("9bf2").f,r=Function.prototype,a=s(r.toString),d=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=s(d.exec),p="name";c&&!i&&o(r,p,{configurable:!0,get:function(){try{return l(d,a(this))[1]}catch(e){return""}}})},b727:function(e,t,n){var c=n("0366"),i=n("e330"),s=n("44ad"),o=n("7b0b"),r=n("07fa"),a=n("65f0"),d=i([].push),l=function(e){var t=1==e,n=2==e,i=3==e,l=4==e,p=6==e,u=7==e,b=5==e||p;return function(h,f,y,v){for(var j,m,g=o(h),O=s(g),w=c(f,y),T=r(O),x=0,k=v||a,V=t?k(h,T):n||u?k(h,0):void 0;T>x;x++)if((b||x in O)&&(j=O[x],m=w(j,x,g),e))if(t)V[x]=m;else if(m)switch(e){case 3:return!0;case 5:return j;case 6:return x;case 2:d(V,j)}else switch(e){case 4:return!1;case 7:d(V,j)}return p?-1:i||l?l:V}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},d288:function(e,t,n){"use strict";n.r(t);n("ac1f"),n("1276"),n("b0c0");var c=n("7a23"),i=function(e){return Object(c["C"])("data-v-718619bc"),e=e(),Object(c["A"])(),e},s={class:"bg-dark"},o={class:"container py-4 px-5 px-xl-0"},r={class:"d-flex justify-content-md-between flex-wrap align-items-center border-bottom pb-4"},a={class:"col text-white d-flex flex-wrap align-items-lg-center"},d=i((function(){return Object(c["h"])("h2",{class:"flex-shrink-0 h1 mb-lg-0 text-white"},"Video Gallery：",-1)})),l={class:"flex-shrink-0 h4 mb-md-0 mb-3 text-white"},p={key:0,class:"text-muted me-2"},u={class:"col-xl-2 col-lg-3 col-md-4 col-12 align-self-end"},b={class:"dropdown"},h={class:"btn btn-secondary btn-sm w-100 d-flex justify-content-between dropdown-toggle",type:"button",id:"videoTypeButton","data-bs-toggle":"dropdown","aria-expanded":"false"},f=i((function(){return Object(c["h"])("i",{class:"bi bi-caret-down-fill"},null,-1)})),y={class:"dropdown-menu w-100","aria-labelledby":"videoTypeButton"},v=["onClick"],j={class:"pt-4"},m={class:"text-white list-unstyled row justify-content-between"},g={class:"text-white bg-primary py-2 px-3 flex-grow-1 d-none d-xl-block"},O={class:"video-wrapper"},w=["src"];function T(e,t,n,i,T,x){return Object(c["z"])(),Object(c["g"])("div",s,[Object(c["h"])("div",o,[Object(c["h"])("header",r,[Object(c["h"])("div",a,[d,Object(c["h"])("h3",l,[Object(c["j"])(Object(c["M"])(T.titlePassIn)+" ",1),T.product.release_date?(Object(c["z"])(),Object(c["g"])("span",p,"("+Object(c["M"])(T.product.release_date.split("-")[0])+")",1)):Object(c["f"])("",!0)])]),Object(c["h"])("div",u,[Object(c["h"])("div",b,[Object(c["h"])("button",h,[Object(c["h"])("span",null,Object(c["M"])(T.selectedVideoType),1),f]),Object(c["h"])("ul",y,[(Object(c["z"])(!0),Object(c["g"])(c["a"],null,Object(c["H"])(T.videoType,(function(e){return Object(c["z"])(),Object(c["g"])("li",{key:e.title},[e.content.length?(Object(c["z"])(),Object(c["g"])("button",{key:0,class:"dropdown-item py-2",type:"button",onClick:function(t){return x.selectVideoType(e.type)}},Object(c["M"])(e.type),9,v)):Object(c["f"])("",!0)])})),128))])])])]),Object(c["h"])("main",j,[Object(c["h"])("ul",m,[(Object(c["z"])(!0),Object(c["g"])(c["a"],null,Object(c["H"])(x.videoContent,(function(e){return Object(c["z"])(),Object(c["g"])("li",{key:e,class:"col-md-6 mb-md-3 mb-4 d-flex flex-column justify-content-between"},[Object(c["h"])("h4",g,Object(c["M"])(e.name.split(" | ")[2]||e.name.split(" | ")[1]||e.name.split(" | ")[0]||e.name),1),Object(c["h"])("div",O,[Object(c["h"])("iframe",{type:"text/html",allowfullscreen:"",width:"100%",height:"100%",src:T.baseYoutubeUrl+e.key},"\n              ",8,w)])])})),128))])])])])}var x=n("1da1"),k=(n("96cf"),n("99af"),n("d3b7"),n("159b"),{props:{movieID:{type:String},movieTitle:{type:String},movieVideoType:{type:String}},inject:["emitter"],data:function(){return{key:"7bbe6005cfda593dc21cceb93eaf9a8e",baseImageUrl:"https://image.tmdb.org/t/p/w300",baseYoutubeUrl:"https://www.youtube.com/embed/",idPassIn:"",titlePassIn:"",selectedVideoTypePassIn:"",selectedVideoType:"",product:[],videoType:{behind:{type:"Behind the Scenes",content:[]},clips:{type:"Clips",content:[]},teasers:{type:"Teasers",content:[]},trailers:{type:"Trailers",content:[]},featurettes:{type:"Featurettes",content:[]},others:{type:"Others",content:[]}}}},computed:{videoContent:function(){var e=[];return e="Behind the Scenes"===this.selectedVideoType?this.videoType.behind.content:this.videoType[this.selectedVideoType.toLowerCase()].content,e.reverse()}},methods:{selectVideoType:function(e){this.selectedVideoType=e},getData:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("https://api.themoviedb.org/3/movie/".concat(e.idPassIn,"?api_key=").concat(e.key,"&language=en-US&append_to_response=videos,images"));case 2:n=t.sent,console.log("getData",n),e.product=n.data,e.arrangeVideoType(n.data.videos.results);case 6:case"end":return t.stop()}}),t)})))()},arrangeVideoType:function(e){var t=this;e.forEach((function(e){"Clip"===e.type?t.videoType.clips.content.push(e):"Teaser"===e.type?t.videoType.teasers.content.push(e):"Trailer"===e.type?t.videoType.trailers.content.push(e):"Featurette"===e.type?t.videoType.featurettes.content.push(e):"Behind the Scenes"===e.type?t.videoType.behind.content.push(e):t.videoType.others.content.push(e)}))}},created:function(){window.scrollTo(0,-1e3),this.idPassIn=this.movieID,this.titlePassIn=this.movieTitle,this.selectedVideoTypePassIn=this.movieVideoType,this.selectedVideoType=this.selectedVideoTypePassIn,this.getData()}}),V=(n("8082"),n("6b0d")),I=n.n(V);const S=I()(k,[["render",T],["__scopeId","data-v-718619bc"]]);t["default"]=S},f2a4:function(e,t,n){}}]);
//# sourceMappingURL=chunk-63c08971.8eee2b9d.js.map