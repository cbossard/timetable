(function(e){function t(t){for(var o,i,s=t[0],l=t[1],c=t[2],p=0,v=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&v.push(a[i][0]),a[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(v.length)v.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/timetable/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),n("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1)]),n("v-main",[n("HelloWorld")],1)],1)},r=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-stepper",{attrs:{vertical:""},model:{value:e.e6,callback:function(t){e.e6=t},expression:"e6"}},[n("v-stepper-step",{attrs:{complete:e.e6>1,step:"1"}},[e._v(" Select a file "),n("small",[e._v("Import a CSV file containing all your sessions")])]),n("v-stepper-content",{attrs:{step:"1"}},[n("v-card",{staticClass:"mb-12",attrs:{color:"grey lighten-4",height:"70px"}},[n("simple-csv-parser",{attrs:{columns:e.columns},on:{"on-load":e.onLoad,"on-error":e.onError}})],1),n("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.e6=2}}},[e._v("Continue")])],1),n("v-stepper-step",{attrs:{complete:e.e6>2,step:"2"}},[e._v("Sign-in to your Google account")]),n("v-stepper-content",{attrs:{step:"2"}},[e.authorized?e._e():n("v-banner",{scopedSlots:e._u([{key:"actions",fn:function(){return[n("v-btn",{attrs:{text:"",color:"error"},on:{click:e.handleAuthClick}},[e._v("Sign In")])]},proxy:!0}],null,!1,3355577499)},[n("v-avatar",{attrs:{slot:"icon",color:"primary",size:"40"},slot:"icon"},[n("v-icon",{attrs:{icon:"mdi-lock",color:"white"}},[e._v(" mdi-lock ")])],1),e._v(" Please log in to your Google account ")],1),e.authorized?n("v-banner",{scopedSlots:e._u([{key:"actions",fn:function(){return[n("v-btn",{attrs:{text:"",color:"error"},on:{click:e.handleSignoutClick}},[e._v("Sign Out")])]},proxy:!0}],null,!1,1044833319)},[n("v-avatar",{attrs:{slot:"icon",color:"primary",size:"40"},slot:"icon"},[n("v-icon",{attrs:{icon:"mdi-lock",color:"white"}},[e._v(" mdi-lock ")])],1),e._v(" Your are already signed-in ")],1):e._e(),n("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.e6=3}}},[e._v("Continue")]),n("v-btn",{attrs:{text:""},on:{click:function(t){e.e6=1}}},[e._v("Cancel")])],1),n("v-stepper-step",{attrs:{complete:e.e6>3,step:"3"}},[e._v("Create events")]),n("v-stepper-content",{attrs:{step:"3"}},[n("v-banner",[e._v("Events will be created in your 'primary' calendar")]),n("v-btn",{attrs:{color:"primary"},on:{click:e.createEvent}},[e._v("Continue")]),n("v-btn",{attrs:{text:""},on:{click:function(t){e.e6=2}}},[e._v("Cancel")])],1),n("v-stepper-step",{attrs:{step:"4"}},[e._v("Done !")]),n("v-stepper-content",{attrs:{step:"4"}},[n("v-banner",[e._v("Events have been created ! Check your Google Calendar :-)")])],1)],1)],1)},s=[],l=(n("4160"),n("159b"),n("29ad")),c={name:"HelloWorld",components:{SimpleCsvParser:l["SimpleCsvParser"]},data:function(){return{e6:1,columns:[{name:"Holyday",value:"Holyday",isOptional:!0},{name:"Date",value:"Date"},{name:"DayOfweek",value:"dayOfWeek"},{name:"Period",value:"period"},{name:"StartTime",value:"startTime"},{name:"EndTime",value:"endTime"},{name:"Type",value:"type"},{name:"Session",value:"session",isOptional:!0},{name:"Emails",value:"emails",isOptional:!0},{name:"Location",value:"location",isOptional:!0},{name:"StartDateTime",value:"StartDateTime"},{name:"EndDateTime",value:"EndDateTime"}],results:null,calendarName:"",authorized:!1,api:void 0}},created:function(){this.$isAuthenticated()&&(this.authorized=!0)},methods:{onLoad:function(e){this.results=e},onError:function(e){console.log(e)},handleAuthClick:function(){var e=this;this.$login().then((function(){e.authorized=!0}))},handleSignoutClick:function(){var e=this;this.$logout().then((function(){e.authorized=!1}))},createEvent:function(){var e=this;this.$getGapiClient().then((function(t){var n=t.client.newBatch();e.results.forEach((function(o){if(o.Session&&!o.Holyday){var a=e.$moment(o.StartDateTime+" "+o.StartTime,"DD/MM/YYYY hh:mm:ss"),r=e.$moment(o.StartDateTime+" "+o.EndTime,"DD/MM/YYYY hh:mm:ss"),i={summary:o.Session,description:o.Session,start:{dateTime:a.toDate()},end:{dateTime:r.toDate()}};o.Location&&(i.location=o.Location),o.GroupEmail&&(i.attendees=[{email:o.GroupEmail}]),n.add(t.client.calendar.events.insert({calendarId:"primary",resource:i}))}})),n.then((function(){console.log("all jobs done!!!")}))})).then((function(){e.e6=4}))}}},u=c,p=n("2877"),v=Object(p["a"])(u,i,s,!1,null,null,null),d=v.exports,m={name:"App",components:{HelloWorld:d},data:function(){return{}}},f=m,h=Object(p["a"])(f,a,r,!1,null,null,null),y=h.exports,g=n("ce5b"),b=n.n(g);n("bf40");o["default"].use(b.a);var _=new b.a({theme:{themes:{light:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}}),k=(n("d5e8"),n("5363"),n("15fd")),w=n.n(k);o["default"].config.productionTip=!1;var S={apiKey:"AIzaSyA3u8gveFQVh9qj3c66L9_fyO15ymQeuvg",clientId:"919241210274-nnc284pu108au36e9qe80hjlbimnclpg.apps.googleusercontent.com",scope:"https://www.googleapis.com/auth/calendar.events",discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]};o["default"].use(w.a,S),o["default"].use(n("2ead")),new o["default"]({vuetify:_,render:function(e){return e(y)}}).$mount("#app")}});
//# sourceMappingURL=app.05869b1f.js.map