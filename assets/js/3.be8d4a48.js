(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{324:function(t,a,r){t.exports=r.p+"assets/img/routes.2aa1eeab.jpg"},325:function(t,a,r){t.exports=r.p+"assets/img/services.0007c3f1.jpg"},358:function(t,a,r){t.exports=r.p+"assets/img/gateway.f38b9596.jpg"},376:function(t,a,r){"use strict";r.r(a);var e=r(25),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"ws-cloud-gateway"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ws-cloud-gateway"}},[t._v("#")]),t._v(" ws-cloud-gateway")]),t._v(" "),e("p",[t._v("基于 openresty + etcd 实现的网关服务")]),t._v(" "),e("ul",[e("li",[t._v("gateway: "),e("a",{attrs:{href:"https://github.com/tech-microworld/ws-cloud-gateway",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/tech-microworld/ws-cloud-gateway"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("dashboard: "),e("a",{attrs:{href:"https://github.com/tech-microworld/ws-cloud-admin",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/tech-microworld/ws-cloud-admin"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("目前市面上已经有很多网关组件，ws-cloud-gateway 的定位是比更加轻量、易上手，只保留在实践中经常使用到的组件，同时可以自定义插件，满足不用业务，定制化个性功能。")]),t._v(" "),e("p",[t._v("项目中参考了 "),e("a",{attrs:{href:"https://github.com/apache/incubator-apisix",target:"_blank",rel:"noopener noreferrer"}},[t._v("incubator-apisix"),e("OutboundLink")],1),t._v("，同时有部分代码直接引用了apisix源码。")]),t._v(" "),e("h2",{attrs:{id:"为什么选择-ws-cloud-gateway"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么选择-ws-cloud-gateway"}},[t._v("#")]),t._v(" 为什么选择 ws-cloud-gateway")]),t._v(" "),e("ol",[e("li",[t._v("高性能：底层使用 nginx 异步事件驱动的网络通信模型")]),t._v(" "),e("li",[t._v("轻量、灵活：将多个微服务组件整合到一起，对服务器开销小（节省服务器成本），适合初创业务，同时后期业务规模扩大后也容易调整")]),t._v(" "),e("li",[t._v("上手简单学习曲线低，支持自定义插件，可灵活定制个性化功能")]),t._v(" "),e("li",[t._v("上游服务节点使用etcd管理，可以通过推模式更新节点配置")]),t._v(" "),e("li",[t._v("无需重启服务，可实时修改参数配置")]),t._v(" "),e("li",[t._v("支持控制面板管理")])]),t._v(" "),e("h2",{attrs:{id:"文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文档"}},[t._v("#")]),t._v(" 文档")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ws-cloud/gateway/0.x/"}},[t._v("v0.x")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ws-cloud/gateway/1.x/"}},[t._v("v1.x")]),t._v("（推荐）")],1)]),t._v(" "),e("h2",{attrs:{id:"整体架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#整体架构"}},[t._v("#")]),t._v(" 整体架构")]),t._v(" "),e("p",[e("img",{attrs:{src:r(358),alt:"整体架构"}})]),t._v(" "),e("p",[t._v("服务启动时，将自己的节点信息注册到etcd，包括：服务名称、ip、端口")]),t._v(" "),e("p",[t._v("网关服务从etcd监听服务节点信息，保存到缓存中，从客户端请求的url中提取服务名称，通过服务名称查找节点信息，将请求转发到后端服务")]),t._v(" "),e("h2",{attrs:{id:"todo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#todo"}},[t._v("#")]),t._v(" todo")]),t._v(" "),e("ul",[e("li",[t._v("[x] 服务发现，动态路由")]),t._v(" "),e("li",[t._v("[x] 自动生成 requestId，方便链路跟踪")]),t._v(" "),e("li",[t._v("[x] 控制面板")]),t._v(" "),e("li",[t._v("[ ] gRPC 代理")]),t._v(" "),e("li",[t._v("[ ] 动态ip防火墙")]),t._v(" "),e("li",[t._v("[ ] 限流器")]),t._v(" "),e("li",[t._v("[ ] 用户登录认证")]),t._v(" "),e("li",[t._v("[ ] 接口协议加解密")]),t._v(" "),e("li",[t._v("[ ] 统一配置管理")])]),t._v(" "),e("h2",{attrs:{id:"控制面板"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#控制面板"}},[t._v("#")]),t._v(" 控制面板")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://localhost:10000/dashboard",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:10000/dashboard"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("img",{attrs:{src:r(324),alt:"路由管理"}})]),t._v(" "),e("p",[e("img",{attrs:{src:r(325),alt:"服务节点管理"}})]),t._v(" "),e("h2",{attrs:{id:"更新记录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新记录"}},[t._v("#")]),t._v(" "),e("RouterLink",{attrs:{to:"/ws-cloud/gateway/changelog/"}},[t._v("更新记录")])],1)])}),[],!1,null,null,null);a.default=s.exports}}]);