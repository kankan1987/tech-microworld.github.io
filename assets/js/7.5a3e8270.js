(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{357:function(t,r,e){t.exports=e.p+"assets/img/rewrite-settings.0afff283.jpg"},364:function(t,r,e){"use strict";e.r(r);var a=e(25),s=Object(a.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"rewrite-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rewrite-plugin"}},[t._v("#")]),t._v(" rewrite plugin")]),t._v(" "),a("blockquote",[a("p",[t._v("rewrite_plugin.lua")])]),t._v(" "),a("h2",{attrs:{id:"说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),a("p",[t._v("rewrite 插件用于重写请求 url 再转发到上游服务")]),t._v(" "),a("h2",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数名")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("rewrite_url_regex")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("nil")]),t._v(" "),a("td",[t._v("匹配正则")])]),t._v(" "),a("tr",[a("td",[t._v("rewrite_replace")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("nil")]),t._v(" "),a("td",[t._v("替换字符串")])])])]),t._v(" "),a("blockquote",[a("p",[t._v('通过 ngx.re.gsub(uri, rewrite_url_regex, rewrite_replace, "jo") 替换得到目标 url')])]),t._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rewrite_url_regex"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^/openapi/(.*)/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rewrite_replace"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/openapi/"')]),t._v("\n")])])]),a("p",[t._v("当请求 "),a("code",[t._v("/openapi/demo1/info")]),t._v(" url 会重写为 "),a("code",[t._v("/openapi/info")])]),t._v(" "),a("h2",{attrs:{id:"设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置"}},[t._v("#")]),t._v(" 设置")]),t._v(" "),a("p",[a("img",{attrs:{src:e(357),alt:"url重写"}})])])}),[],!1,null,null,null);r.default=s.exports}}]);