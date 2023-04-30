(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{313:function(t,c,r){var content=r(327);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("f0fd0812",content,!0,{sourceMap:!1})},317:function(t,c,r){"use strict";r.r(c);var e=r(323),l=r.n(e),n=r(324),f=r.n(n),h=r(325),o=r.n(h),d={name:"Pricing",components:{progressIcon:l.a,projectIcon:f.a,moneyIcon:o.a},data:function(){return{features:["Design to HTML","Animation & Interaction","Vue/React SPA","API Integration","SSR (Nuxt/Next)","Documentation","PWA"],priceModels:[{thumb:"progress-icon",type:"Basic",price:15,featureIds:[0,1]},{thumb:"project-icon",type:"Pro",price:25,featureIds:[0,1,2,3]},{thumb:"money-icon",type:"Advanced",price:35,featureIds:[0,1,2,3,4,5,6]}]}}},v=(r(326),r(14)),component=Object(v.a)(d,(function(){var t=this,c=t.$createElement,r=t._self._c||c;return r("div",{staticClass:"flex flex-wrap -mx-2"},[t._m(0),t._v(" "),t._l(t.priceModels,(function(c,e){return r("div",{key:e,staticClass:"w-full sm:w-1/2 md:w-1/4 px-2 mb-4"},[r("div",{staticClass:"h-full p-4 flex flex-col items-center justify-center pricing-card border shadow-lg rounded-xl bg-white"},[r(c.thumb,{tag:"component",staticClass:"w-20 h-20 mb-3"}),t._v(" "),r("h3",{staticClass:"text-color-light font-semibold text-lg mb-4"},[t._v("\n        "+t._s(c.type)+"\n      ")]),t._v(" "),r("ul",{staticClass:"pricing-items mb-4"},t._l(t.features,(function(e,l){return r("li",{key:l,staticClass:"text-sm text-color-light mb-2",class:{"opacity-40":!c.featureIds.includes(l)}},[t._v("\n          "+t._s(e)+"\n        ")])})),0),t._v(" "),r("h5",[r("span",{staticClass:"font-bold text-accent-dark text-2xl"},[t._v("$"+t._s(c.price))]),t._v(" "),r("span",{staticClass:"font-light"},[t._v("/hour")])])],1)])}))],2)}),[function(){var t=this,c=t.$createElement,r=t._self._c||c;return r("div",{staticClass:"w-full sm:w-1/2 md:w-1/4 px-2 mb-4 flex flex-col"},[r("h2",{staticClass:"text-accent-light font-semibold text-2xl mb-3"},[t._v("\n      pricing\n    ")]),t._v(" "),r("p",{staticClass:"text-color-light text-md font-light"},[t._v("\n      The price here is just for a rough estimation. It will certainly vary\n      based on the nature of a project. Let's finalize the price upon\n      discussion :)\n    ")])])}],!1,null,null,null);c.default=component.exports},323:function(t,c,r){r(24),r(18),r(23),r(31),r(19),r(32);var e=r(59),l=r(60),n=["class","staticClass","style","staticStyle","attrs"];function f(object,t){var c=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),c.push.apply(c,r)}return c}r(39),t.exports={functional:!0,render:function(t,c){var r=c._c,data=(c._v,c.data),h=c.children,o=void 0===h?[]:h,d=data.class,v=data.staticClass,style=data.style,y=data.staticStyle,m=data.attrs,z=void 0===m?{}:m,w=l(data,n);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(c){e(t,c,source[c])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(c){Object.defineProperty(t,c,Object.getOwnPropertyDescriptor(source,c))}))}return t}({class:[d,v],style:[style,y],attrs:Object.assign({id:"Capa_1","enable-background":"new 0 0 512 512",height:"512",viewBox:"0 0 512 512",width:"512",xmlns:"http://www.w3.org/2000/svg"},z)},w),o.concat([r("g",[r("g",{attrs:{fill:"#0ed290"}},[r("path",{attrs:{d:"m256 22c-135.31 0-245 109.69-245 245 0 30.737 5.677 60.143 16.011 87.25l14.328 1h62.958c3.898-13.276 16.183-23 30.703-23s26.804 9.724 30.703 23h72.461c3.301-6.514 10.047-11 17.836-11s14.535 4.486 17.836 11h74.328c3.301-6.514 10.047-11 17.836-11s14.535 4.486 17.836 11h88.139l13.014-1c10.334-27.107 16.011-56.513 16.011-87.25 0-135.31-109.69-245-245-245z"}}),r("path",{attrs:{d:"m463.199 373.25h-79.364c-3.301 6.514-10.047 11-17.836 11s-14.535-4.486-17.836-11h-74.328c-3.301 6.514-10.047 11-17.836 11s-14.535-4.486-17.836-11h-72.461c-3.898 13.276-16.183 23-30.703 23s-26.804-9.724-30.703-23h-54.634l-13.989 1c39.773 81.555 123.483 137.75 220.327 137.75s180.554-56.195 220.327-137.75z"}})]),r("g",[r("path",{attrs:{d:"m135 165.324c0-44.395 35.99-80.385 80.385-80.385h-30c-44.395 0-80.385 35.99-80.385 80.385v138.78c0 4.276 5.019 6.579 8.26 3.791l21.74-18.7z",fill:"#00c285"}}),r("path",{attrs:{d:"m466 84.939h-89.721c-4.886 36.086-35.874 64-73.279 64s-68.393-27.914-73.279-64h-14.336c-44.395 0-80.385 35.99-80.385 80.385v138.78c0 4.276 5.019 6.579 8.26 3.791l32.446-27.909c4.536-3.901 10.32-6.047 16.303-6.047h198.606c44.395 0 80.385-35.99 80.385-80.385v-103.615c0-2.761-2.239-5-5-5z",fill:"#fed402"}}),r("path",{attrs:{d:"m228.71 84.939h-13.325c-44.395 0-80.385 35.99-80.385 80.385v138.78c0 4.276 5.019 6.579 8.26 3.791l32.446-27.909c.73-.628 1.502-1.193 2.293-1.726v-112.936c0-34.247 21.426-63.474 51.598-75.055-.363-1.753-.648-3.534-.887-5.33z",fill:"#fac600"}}),r("g",[r("path",{attrs:{d:"m165.391 354.25c1.039 3.148 1.609 6.508 1.609 10s-.57 6.852-1.609 10h73.315c-1.71-2.946-2.706-6.355-2.706-10s.996-7.054 2.706-10z",fill:"#e8b800"}}),r("g",{attrs:{fill:"#08a9f1"}},[r("path",{attrs:{d:"m348.706 374.25c-1.71-2.946-2.706-6.355-2.706-10s.996-7.054 2.706-10h-75.412c1.71 2.946 2.706 6.355 2.706 10s-.996 7.054-2.706 10z"}}),r("path",{attrs:{d:"m103 364.25c0-3.492.57-6.852 1.609-10h-77.598c2.599 6.817 5.487 13.49 8.661 20h68.936c-1.038-3.148-1.608-6.508-1.608-10z"}}),r("path",{attrs:{d:"m383.294 354.25c1.71 2.946 2.706 6.355 2.706 10s-.996 7.054-2.706 10h93.033c3.175-6.51 6.062-13.183 8.661-20z"}})])]),r("g",[r("circle",{attrs:{cx:"135",cy:"364.25",fill:"#fed402",r:"33"}})]),r("path",{attrs:{d:"m126 364.25c0-13.99 8.71-25.938 21-30.74-3.72-1.453-7.765-2.26-12-2.26-18.225 0-33 14.775-33 33s14.775 33 33 33c4.235 0 8.28-.807 12-2.26-12.29-4.802-21-16.75-21-30.74z",fill:"#fac600"}}),r("g",[r("circle",{attrs:{cx:"256",cy:"364.25",fill:"#c8effe",r:"21"}})]),r("path",{attrs:{d:"m251 364.25c0-8.764 5.372-16.266 13-19.413-2.467-1.018-5.166-1.587-8-1.587-11.598 0-21 9.402-21 21s9.402 21 21 21c2.834 0 5.533-.569 8-1.587-7.628-3.147-13-10.649-13-19.413z",fill:"#99e6fc"}}),r("g",[r("circle",{attrs:{cx:"366",cy:"364.25",fill:"#c8effe",r:"21"}})]),r("path",{attrs:{d:"m361 364.25c0-8.764 5.372-16.266 13-19.413-2.467-1.018-5.166-1.587-8-1.587-11.598 0-21 9.402-21 21s9.402 21 21 21c2.834 0 5.533-.569 8-1.587-7.628-3.147-13-10.649-13-19.413z",fill:"#99e6fc"}}),r("g",[r("g",[r("g",[r("circle",{attrs:{cx:"303",cy:"74.97",fill:"#99e6fc",r:"74.97"}})]),r("g",[r("circle",{attrs:{cx:"303",cy:"74.97",fill:"#01c0fa",r:"53.004"}})]),r("path",{attrs:{d:"m275 74.969c0-24.965 17.264-45.886 40.502-51.507-4.01-.97-8.194-1.497-12.502-1.497-29.273 0-53.004 23.731-53.004 53.004s23.731 53.004 53.004 53.004c4.308 0 8.492-.527 12.502-1.497-23.238-5.621-40.502-26.542-40.502-51.507z",fill:"#08a9f1"}})]),r("g",[r("g",[r("g",[r("path",{attrs:{d:"m311 106.174h-9c-1.657 0-3-1.343-3-3v-46.372h-4.497c-1.657 0-3-1.343-3-3v-9c0-1.657 1.343-3 3-3h11.997c4.142 0 7.5 3.358 7.5 7.5v53.872c0 1.657-1.343 3-3 3z",fill:"#fff"}})])])])]),r("g",[r("path",{attrs:{d:"m413 183.5h-148c-2.761 0-5-2.239-5-5v-5c0-2.761 2.239-5 5-5h148c2.761 0 5 2.239 5 5v5c0 2.761-2.239 5-5 5z",fill:"#fff"}})]),r("g",[r("path",{attrs:{d:"m235 183.5h-42c-2.761 0-5-2.239-5-5v-5c0-2.761 2.239-5 5-5h42c2.761 0 5 2.239 5 5v5c0 2.761-2.239 5-5 5z",fill:"#fff"}})]),r("g",[r("path",{attrs:{d:"m333 225.5h-140c-2.761 0-5-2.239-5-5v-5c0-2.761 2.239-5 5-5h140c2.761 0 5 2.239 5 5v5c0 2.761-2.239 5-5 5z",fill:"#fff"}})]),r("g",[r("g",[r("path",{attrs:{d:"m370 424.5h-184c-2.761 0-5-2.239-5-5v-5c0-2.761 2.239-5 5-5h184c2.761 0 5 2.239 5 5v5c0 2.761-2.239 5-5 5z",fill:"#c8effe"}})]),r("g",[r("path",{attrs:{d:"m295 460.5h-109c-2.761 0-5-2.239-5-5v-5c0-2.761 2.239-5 5-5h109c2.761 0 5 2.239 5 5v5c0 2.761-2.239 5-5 5z",fill:"#c8effe"}})])])])])]))}}},324:function(t,c,r){r(24),r(18),r(23),r(31),r(19),r(32);var e=r(59),l=r(60),n=["class","staticClass","style","staticStyle","attrs"];function f(object,t){var c=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),c.push.apply(c,r)}return c}r(39),t.exports={functional:!0,render:function(t,c){var r=c._c,data=(c._v,c.data),h=c.children,o=void 0===h?[]:h,d=data.class,v=data.staticClass,style=data.style,y=data.staticStyle,m=data.attrs,z=void 0===m?{}:m,w=l(data,n);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(c){e(t,c,source[c])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(c){Object.defineProperty(t,c,Object.getOwnPropertyDescriptor(source,c))}))}return t}({class:[d,v],style:[{"enable-background":"new 0 0 512 512"},style,y],attrs:Object.assign({version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",style:"enable-background:new 0 0 512 512;","xml:space":"preserve"},z)},w),o.concat([r("circle",{staticStyle:{fill:"#1A2B63"},attrs:{cx:"256",cy:"267",r:"245"}}),r("path",{staticStyle:{fill:"#D9EAFC"},attrs:{d:"M216.796,378.925c12.65,0,24.304,6.362,31.175,17.02c0.169,0.263,0.453,0.432,0.765,0.455\r\n\tc0.025,0.002,0.051,0.003,0.076,0.003c0.286,0,0.559-0.122,0.749-0.338c10.3-11.651,25.108-18.333,40.627-18.333\r\n\tc5.288,0,10.396,0.774,15.231,2.193l-17.846-45.745h-63.146l-18.041,46.244C209.691,379.454,213.182,378.925,216.796,378.925z"}}),r("g",[r("path",{staticStyle:{fill:"#AEC1ED"},attrs:{d:"M232.659,334.179h-8.232l-18.041,46.244c2.808-0.823,5.756-1.306,8.794-1.44L232.659,334.179z"}}),r("path",{staticStyle:{fill:"#AEC1ED"},attrs:{d:"M197.586,426.192c0.04,0.264,0.183,0.501,0.398,0.659c0.172,0.127,0.38,0.194,0.591,0.194\r\n\t\tc0.052,0,0.105-0.004,0.157-0.012c3.57-0.568,7.155-0.856,10.655-0.856c17.099,0,33.41,6.425,45.931,18.091\r\n\t\tc0.192,0.179,0.437,0.268,0.682,0.268c0.245,0,0.49-0.089,0.682-0.268c12.52-11.666,28.832-18.091,45.931-18.091\r\n\t\tc3.499,0,7.085,0.288,10.655,0.856c0.053,0.008,0.105,0.012,0.157,0.012c0.211,0,0.419-0.067,0.591-0.194\r\n\t\tc0.215-0.158,0.358-0.395,0.398-0.659c1.848-12.438,6.529-24.218,13.552-34.499c-9.878-9.272-23.159-14.962-37.778-14.962\r\n\t\tc-16.477,0-31.259,7.226-41.376,18.671c-6.776-10.511-18.578-17.478-32.015-17.478c-12.889,0-24.273,6.411-31.162,16.212\r\n\t\tC191.765,403.825,195.883,414.727,197.586,426.192z"}})]),r("path",{staticStyle:{fill:"#445EA0"},attrs:{d:"M198.576,426.045c-6.018-40.51-40.935-71.591-83.119-71.591c-29.285,0-55.061,14.984-70.105,37.697\r\n\tc23.034,38.687,56.425,70.475,96.344,91.571C145.965,454.156,169.144,430.721,198.576,426.045z"}}),r("path",{staticStyle:{fill:"#293D7C"},attrs:{d:"M123.849,364.787c21.432,0,41.078,7.602,56.425,20.237c-15.413-18.665-38.719-30.57-64.817-30.57\r\n\tc-29.285,0-55.061,14.984-70.105,37.697c1.987,3.337,4.057,6.62,6.196,9.852C67.667,379.477,94.036,364.787,123.849,364.787z"}}),r("path",{staticStyle:{fill:"#445EA0"},attrs:{d:"M396.543,354.454c-42.184,0-77.101,31.082-83.119,71.591c29.432,4.676,52.611,28.111,56.88,57.677\r\n\tc39.918-21.096,73.31-52.885,96.344-91.571C451.604,369.438,425.828,354.454,396.543,354.454z"}}),r("g",[r("path",{staticStyle:{fill:"#293D7C"},attrs:{d:"M401.627,354.61c-1.682-0.1-3.376-0.156-5.084-0.156c-42.184,0-77.101,31.082-83.119,71.591\r\n\t\tc3.136,0.498,6.196,1.222,9.174,2.131C330.96,389.897,362.404,360.256,401.627,354.61z"}}),r("path",{staticStyle:{fill:"#293D7C"},attrs:{d:"M302.612,425.177c-18.016,0-34.395,6.976-46.612,18.359c-12.217-11.384-28.596-18.359-46.612-18.359\r\n\t\tc-34.435,0-62.92,25.446-67.695,58.558C175.821,501.772,214.713,512,256,512s80.179-10.228,114.307-28.265\r\n\t\tC365.532,450.623,337.047,425.177,302.612,425.177z"}})]),r("path",{staticStyle:{fill:"#1A2B63"},attrs:{d:"M223.686,433.681c9.435,0,18.439,1.835,26.68,5.162c-11.423-8.569-25.6-13.666-40.979-13.666\r\n\tc-34.435,0-62.92,25.446-67.695,58.558c4.023,2.126,8.114,4.14,12.265,6.044C160.964,457.704,189.508,433.681,223.686,433.681z"}}),r("g",[r("path",{staticStyle:{fill:"#AEC1ED"},attrs:{d:"M278.528,334.179h-15.119l1.929,15.261c0.519,4.11,4.277,7.017,8.381,6.5\r\n\t\tc4.109-0.52,7.02-4.272,6.5-8.381L278.528,334.179z"}}),r("path",{staticStyle:{fill:"#AEC1ED"},attrs:{d:"M233.472,334.179l-3.966,31.38c-0.519,4.109,2.391,7.862,6.501,8.381\r\n\t\tc0.319,0.04,0.636,0.06,0.95,0.06c3.723-0.001,6.953-2.771,7.432-6.561l4.204-33.261h-15.121V334.179z"}})]),r("path",{staticStyle:{fill:"#FE3745"},attrs:{d:"M179.108,195.717c0-8.155,0.306-16.288,0.878-24.362c-24.06,13.549-40.636,43.733-40.636,78.678\r\n\tc0,18.456,4.589,36.057,13.27,50.9c0.815,1.394,2.29,2.191,3.822,2.191c0.56,0,1.127-0.106,1.672-0.329\r\n\tc11.409-4.664,23.601-7.06,36.244-7.16C184.375,264.907,179.108,230.591,179.108,195.717z"}}),r("path",{staticStyle:{fill:"#B7092B"},attrs:{d:"M150.689,250.033c0-28.863,11.315-54.467,28.808-70.143c0.134-2.851,0.289-5.697,0.49-8.535\r\n\tc-24.06,13.549-40.636,43.733-40.636,78.678c0,18.456,4.589,36.057,13.27,50.9c0.815,1.394,2.29,2.191,3.822,2.191\r\n\tc0.56,0,1.127-0.106,1.672-0.329c1.88-0.769,3.79-1.453,5.711-2.098C155.233,285.903,150.689,268.392,150.689,250.033z"}}),r("g",[r("path",{staticStyle:{fill:"#FE3745"},attrs:{d:"M332.013,171.355c0.572,8.075,0.878,16.208,0.878,24.362c0,34.873-5.267,69.189-15.251,99.918\r\n\t\tc12.644,0.1,24.835,2.496,36.244,7.16c0.545,0.223,1.113,0.329,1.672,0.329c1.533,0,3.007-0.798,3.822-2.191\r\n\t\tc8.682-14.843,13.27-32.444,13.27-50.9C372.649,215.088,356.073,184.904,332.013,171.355z"}}),r("path",{staticStyle:{fill:"#FE3745"},attrs:{d:"M217.708,307.125v23.054c0,2.75,2.25,5,5,5h66.583c2.75,0,5-2.25,5-5v-23.054H217.708z"}})]),r("path",{staticStyle:{fill:"#B7092B"},attrs:{d:"M234.715,330.179v-23.054h-17.007v23.054c0,2.75,2.25,5,5,5h17.007\r\n\tC236.965,335.179,234.715,332.929,234.715,330.179z"}}),r("path",{staticStyle:{fill:"#EEF6FF"},attrs:{d:"M316.854,90.318H195.145c-11.154,32.153-17.037,68.343-17.037,105.399\r\n\tc0,38.522,6.389,76.387,18.475,109.5c0.638,1.746,2.298,2.908,4.157,2.908h110.519c1.859,0,3.52-1.162,4.157-2.908\r\n\tc12.086-33.113,18.475-70.978,18.475-109.5C333.892,158.661,328.009,122.472,316.854,90.318z"}}),r("path",{staticStyle:{fill:"#D9EAFC"},attrs:{d:"M210.756,305.217c-12.087-33.113-18.475-70.978-18.475-109.5c0-37.056,5.883-73.246,17.037-105.399\r\n\th-14.172c-11.154,32.153-17.037,68.343-17.037,105.399c0,38.522,6.389,76.387,18.475,109.5c0.638,1.746,2.298,2.908,4.157,2.908\r\n\th14.172C213.054,308.125,211.394,306.963,210.756,305.217z"}}),r("path",{staticStyle:{fill:"#EA2A3D"},attrs:{d:"M227.179,90.318v16.594c0,2.75,2.25,5,5,5h47.642c2.75,0,5-2.25,5-5V90.318H227.179z"}}),r("path",{staticStyle:{fill:"#B7092B"},attrs:{d:"M238.517,106.912V90.318h-11.338v16.594c0,2.75,2.25,5,5,5h11.338\r\n\tC240.767,111.912,238.517,109.662,238.517,106.912z"}}),r("path",{staticStyle:{fill:"#FE3745"},attrs:{d:"M256,0c-0.987,0-1.973,0.329-2.785,0.986c-22.338,18.089-41.154,45.529-54.411,79.354\r\n\tc-1.41,3.599-2.735,7.269-4.006,10.978h122.403c-1.271-3.709-2.596-7.379-4.006-10.978c-13.257-33.825-32.072-61.265-54.411-79.354\r\n\tC257.973,0.329,256.987,0,256,0z"}}),r("path",{staticStyle:{fill:"#B7092B"},attrs:{d:"M263.086,4.628c-1.419-1.251-2.852-2.468-4.301-3.642C257.973,0.329,256.987,0,256,0\r\n\ts-1.973,0.329-2.785,0.986c-22.338,18.089-41.154,45.529-54.411,79.354c-1.41,3.599-2.735,7.269-4.006,10.978h14.172\r\n\tc1.271-3.709,2.596-7.379,4.006-10.978C225.374,48.709,242.632,22.667,263.086,4.628z"}}),r("circle",{staticStyle:{fill:"#445EA0"},attrs:{cx:"256",cy:"180.93",r:"51.02"}}),r("circle",{staticStyle:{fill:"#69CDFF"},attrs:{cx:"256",cy:"180.93",r:"32.731"}}),r("path",{staticStyle:{fill:"#52BBEF"},attrs:{d:"M235.268,180.932c0,16.027,11.521,29.355,26.732,32.174c-1.946,0.36-3.949,0.558-6,0.558\r\n\tc-18.078,0-32.731-14.655-32.731-32.732s14.654-32.731,32.731-32.731c2.05,0,4.054,0.198,6,0.558\r\n\tC246.789,151.578,235.268,164.905,235.268,180.932z"}}),r("path",{staticStyle:{fill:"#FFD00D"},attrs:{d:"M110.136,178.737c-1.147,0-2.181-0.691-2.62-1.751c-5.583-13.479-9.699-17.594-23.178-23.177\r\n\tc-1.06-0.439-1.75-1.473-1.75-2.62c0-1.147,0.691-2.181,1.75-2.62c13.48-5.585,17.595-9.701,23.178-23.179\r\n\tc0.439-1.06,1.473-1.751,2.62-1.751s2.181,0.691,2.62,1.751c5.584,13.478,9.7,17.594,23.179,23.179\r\n\tc1.06,0.439,1.751,1.473,1.751,2.62c0,1.147-0.691,2.182-1.751,2.62c-13.479,5.582-17.595,9.698-23.179,23.177\r\n\tC112.317,178.046,111.283,178.737,110.136,178.737L110.136,178.737z"}}),r("path",{staticStyle:{fill:"#FFAF10"},attrs:{d:"M113.185,171.317c-5.583-13.479-9.699-17.594-23.178-23.177c-0.666-0.275-1.185-0.787-1.48-1.413\r\n\tc-1.294,0.606-2.674,1.214-4.189,1.842c-1.06,0.439-1.75,1.473-1.75,2.62c0,1.147,0.691,2.182,1.75,2.62\r\n\tc13.479,5.583,17.595,9.698,23.178,23.177c0.439,1.06,1.473,1.751,2.62,1.751s2.181-0.691,2.62-1.751\r\n\tc0.627-1.515,1.236-2.895,1.841-4.188C113.972,172.503,113.461,171.983,113.185,171.317z"}}),r("path",{staticStyle:{fill:"#FFFFFF"},attrs:{d:"M411.469,201.404c-1.008,0-1.917-0.607-2.303-1.539c-4.907-11.848-8.525-15.465-20.373-20.372\r\n\tc-0.931-0.385-1.539-1.295-1.539-2.303c0-1.009,0.607-1.917,1.539-2.303c11.849-4.909,15.466-8.527,20.373-20.374\r\n\tc0.386-0.932,1.295-1.539,2.303-1.539s1.917,0.607,2.303,1.539c4.908,11.848,8.526,15.465,20.375,20.374\r\n\tc0.931,0.386,1.538,1.294,1.538,2.303c0,1.008-0.607,1.917-1.539,2.303c-11.848,4.907-15.466,8.524-20.374,20.372\r\n\tC413.387,200.796,412.478,201.404,411.469,201.404L411.469,201.404z"}}),r("path",{staticStyle:{fill:"#D9EAFC"},attrs:{d:"M414.149,194.882c-4.908-11.848-8.525-15.465-20.374-20.373c-0.585-0.242-1.042-0.691-1.301-1.242\r\n\tc-1.137,0.532-2.351,1.067-3.682,1.619c-0.931,0.386-1.539,1.294-1.539,2.303c0,1.008,0.607,1.917,1.539,2.303\r\n\tc11.849,4.907,15.466,8.524,20.373,20.372c0.386,0.932,1.295,1.539,2.303,1.539s1.917-0.607,2.303-1.539\r\n\tc0.551-1.331,1.086-2.545,1.619-3.682C414.841,195.924,414.392,195.467,414.149,194.882z"}}),r("path",{staticStyle:{fill:"#FF9518"},attrs:{d:"M385.469,96.071c-1.175,0-2.234-0.708-2.684-1.793c-5.718-13.806-9.933-18.021-23.739-23.738\r\n\tc-1.085-0.449-1.792-1.509-1.792-2.683c0-1.176,0.708-2.234,1.792-2.684c13.807-5.72,18.022-9.935,23.739-23.739\r\n\tc0.45-1.086,1.509-1.794,2.684-1.794s2.234,0.708,2.684,1.794c5.719,13.805,9.934,18.02,23.74,23.739\r\n\tc1.085,0.45,1.792,1.508,1.792,2.684c0,1.174-0.708,2.234-1.793,2.683c-13.806,5.717-18.02,9.933-23.74,23.738\r\n\tC387.703,95.363,386.644,96.071,385.469,96.071L385.469,96.071z"}}),r("path",{staticStyle:{fill:"#EF8318"},attrs:{d:"M388.592,88.472c-5.719-13.805-9.934-18.02-23.74-23.738c-0.682-0.282-1.213-0.806-1.516-1.447\r\n\tc-1.324,0.621-2.739,1.244-4.291,1.886c-1.085,0.45-1.792,1.508-1.792,2.684c0,1.174,0.708,2.234,1.792,2.683\r\n\tc13.806,5.718,18.022,9.933,23.739,23.738c0.45,1.085,1.509,1.793,2.684,1.793s2.234-0.708,2.684-1.793\r\n\tc0.643-1.552,1.266-2.966,1.886-4.29C389.397,89.686,388.874,89.154,388.592,88.472z"}}),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g")]))}}},325:function(t,c,r){r(24),r(18),r(23),r(31),r(19),r(32);var e=r(59),l=r(60),n=["class","staticClass","style","staticStyle","attrs"];function f(object,t){var c=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),c.push.apply(c,r)}return c}r(39),t.exports={functional:!0,render:function(t,c){var r=c._c,data=(c._v,c.data),h=c.children,o=void 0===h?[]:h,d=data.class,v=data.staticClass,style=data.style,y=data.staticStyle,m=data.attrs,z=void 0===m?{}:m,w=l(data,n);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(c){e(t,c,source[c])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(c){Object.defineProperty(t,c,Object.getOwnPropertyDescriptor(source,c))}))}return t}({class:[d,v],style:[style,y],attrs:Object.assign({id:"Capa_1","enable-background":"new 0 0 512 512",height:"512",viewBox:"0 0 512 512",width:"512",xmlns:"http://www.w3.org/2000/svg"},z)},w),o.concat([r("g",[r("circle",{attrs:{cx:"256",cy:"267",fill:"#af66da",r:"245"}}),r("g",[r("path",{attrs:{d:"m320.912 0h-129.824c-3.637 0-6.057 3.759-4.551 7.07l30.895 67.93h77.137l30.895-67.93c1.505-3.311-.915-7.07-4.552-7.07z",fill:"#0ed290"}})]),r("path",{attrs:{d:"m422.009 228.68c-1.926 0-3.657 1.07-4.519 2.793l-3.901 7.801c1.581 9.008 2.411 18.272 2.411 27.726 0 88.224-71.775 160-160 160-18.042 0-35.395-3.005-51.588-8.536-1.444 5.006-3.3 9.839-5.534 14.457 25.42 16.793 55.876 26.578 88.622 26.578 88.918 0 161-72.082 161-161 0-25.016-5.706-48.7-15.886-69.82h-10.605z",fill:"#9857bd"}}),r("path",{attrs:{d:"m302.579 112.852c-.513.092-1.039.148-1.579.148h-90c-.54 0-1.066-.056-1.579-.148-66.204 19.979-114.421 81.428-114.421 154.148 0 88.918 72.082 161 161 161s161-72.082 161-161c0-72.72-48.217-134.169-114.421-154.148z",fill:"#0ed290"}}),r("path",{attrs:{d:"m152 267c0-72.54 47.977-133.866 113.928-154h-54.928c-.54 0-1.066-.056-1.579-.148-66.204 19.979-114.421 81.428-114.421 154.148 0 88.918 72.082 161 161 161 9.726 0 19.25-.862 28.5-2.515-75.324-13.455-132.5-79.293-132.5-158.485z",fill:"#00c285"}}),r("path",{attrs:{d:"m293.918 232.569c2.761 0 5-2.239 5-5v-15c0-2.761-2.239-5-5-5h-25.418v-12.763c0-2.761-2.239-5-5-5h-15c-2.761 0-5 2.239-5 5v12.763h-6.299c-13.32 0-24.119 10.798-24.119 24.119v24.091c0 13.32 10.798 24.118 24.118 24.118h36.718v21.534h-55.836c-2.761 0-5 2.239-5 5v15c0 2.761 2.239 5 5 5h25.418v12.763c0 2.761 2.239 5 5 5h15c2.761 0 5-2.239 5-5v-12.763h6.299c13.32 0 24.119-10.798 24.119-24.119v-23.297c0-13.32-10.798-24.118-24.118-24.118h-36.718v-22.328z",fill:"#fff"}}),r("g",[r("circle",{attrs:{cx:"116",cy:"393",fill:"#fed402",r:"93"}}),r("circle",{attrs:{cx:"116",cy:"393",fill:"#fac600",r:"67.006"}}),r("path",{attrs:{d:"m74 393c0-32.732 23.475-59.965 54.503-65.824-4.053-.765-8.228-1.183-12.503-1.183-37.007 0-67.006 30-67.006 67.006s30 67.006 67.006 67.006c4.275 0 8.451-.417 12.503-1.183-31.028-5.857-54.503-33.09-54.503-65.822z",fill:"#e8b800"}}),r("path",{attrs:{d:"m136.07 373.391c2.761 0 5-2.239 5-5v-5c0-2.761-2.239-5-5-5h-12.57v-5.261c0-2.761-2.239-5-5-5h-5c-2.761 0-5 2.239-5 5v5.261h-3.359c-7.849 0-14.211 6.363-14.211 14.211v13.916c0 7.849 6.362 14.211 14.211 14.211h20.93v11.88h-30.141c-2.761 0-5 2.239-5 5v5c0 2.761 2.239 5 5 5h12.57v5.261c0 2.761 2.239 5 5 5h5c2.761 0 5-2.239 5-5v-5.261h3.359c7.849 0 14.211-6.363 14.211-14.211v-13.458c0-7.849-6.362-14.211-14.211-14.211h-20.93v-12.338z",fill:"#fff"}})]),r("g",[r("path",{attrs:{d:"m264.977 74-30.44-66.93c-1.506-3.311.914-7.07 4.551-7.07h-48c-3.637 0-6.057 3.759-4.551 7.07l30.44 66.93z",fill:"#00c285"}})]),r("path",{attrs:{d:"m301 114h-90c-5.523 0-10-4.477-10-10v-20c0-5.523 4.477-10 10-10h90c5.523 0 10 4.477 10 10v20c0 5.523-4.477 10-10 10z",fill:"#fed402"}}),r("path",{attrs:{d:"m241 104v-20c0-5.523 4.477-10 10-10h-40c-5.523 0-10 4.477-10 10v20c0 5.523 4.477 10 10 10h40c-5.523 0-10-4.477-10-10z",fill:"#fac600"}}),r("g",[r("path",{attrs:{d:"m471.627 83h-138.575c-2.238 0-4.052 1.814-4.052 4.052v138.575c0 2.238 1.814 4.052 4.052 4.052h49.618c1.535 0 2.938.867 3.625 2.24l12.42 24.84c1.493 2.987 5.756 2.987 7.249 0l12.42-24.84c.686-1.373 2.09-2.24 3.625-2.24h49.618c2.238 0 4.052-1.814 4.052-4.052v-138.575c.001-2.238-1.814-4.052-4.052-4.052z",fill:"#fed402"}}),r("g",[r("path",{attrs:{d:"m365.32 225.627v-138.575c0-2.238 1.814-4.052 4.052-4.052h-36.32c-2.238 0-4.052 1.814-4.052 4.052v138.575c0 2.238 1.814 4.052 4.052 4.052h36.32c-2.237.001-4.052-1.814-4.052-4.052z",fill:"#fac600"}})]),r("g",{attrs:{fill:"#fff"}},[r("path",{attrs:{d:"m405 112.5h-46.289c-2.761 0-5 2.239-5 5v5c0 2.761 2.239 5 5 5h46.289c2.761 0 5-2.239 5-5v-5c0-2.761-2.239-5-5-5z"}}),r("path",{attrs:{d:"m353.711 151.5v5c0 2.761 2.239 5 5 5h87.258c2.761 0 5-2.239 5-5v-5c0-2.761-2.239-5-5-5h-87.258c-2.761 0-5 2.239-5 5z"}}),r("path",{attrs:{d:"m358.711 195.5h87.258c2.761 0 5-2.239 5-5v-5c0-2.761-2.239-5-5-5h-87.258c-2.761 0-5 2.239-5 5v5c0 2.761 2.239 5 5 5z"}})])])])]))}}},326:function(t,c,r){"use strict";r(313)},327:function(t,c,r){var e=r(40)((function(i){return i[1]}));e.push([t.i,"/*purgecss start ignore*/\n.pricing-card{\n  transition:transform .3s var(--easing-function)\n}\n.pricing-card:hover{\n  transform:translateY(-10px)\n}\n\n/*purgecss end ignore*/",""]),e.locals={},t.exports=e}}]);