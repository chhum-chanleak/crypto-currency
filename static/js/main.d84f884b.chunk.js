(this["webpackJsonpcountdown-timer"]=this["webpackJsonpcountdown-timer"]||[]).push([[0],{272:function(e,t,c){},274:function(e,t,c){"use strict";c.r(t);var a,s=c(0),n=c.n(s),i=c(37),r=c(28),l=c.n(r),o=c(30),j=c(11),d=c(98),h=c(40),b={"x-rapidapi-host":"coinranking1.p.rapidapi.com","x-rapidapi-key":"809f6dff89msh65dd40af7b545e4p11e683jsn8351145d59f2"},u=function(e){return{url:e,headers:b}},O=Object(d.a)({reducerPath:"cryptoApi",baseQuery:Object(h.d)({baseUrl:"https://coinranking1.p.rapidapi.com"}),endpoints:function(e){return{getCryptos:e.query({query:function(e){return u("/coins?limit=".concat(e))}}),getCryptoDetails:e.query({query:function(e){return u("/coin/".concat(e))}}),getCryptoHistory:e.query({query:function(e){var t=e.coinId,c=e.timePeriod;return u("/coin/".concat(t,"/history/").concat(c))}}),getExchanges:e.query({query:function(){return u("/exchanges")}})}}}),x=O.useGetCryptosQuery,p=O.useGetCryptoDetailsQuery,m=O.useGetCryptoHistoryQuery,v=O.useGetExchangesQuery,g={"x-bingapis-sdk":"true","x-rapidapi-host":"bing-news-search1.p.rapidapi.com","x-rapidapi-key":"809f6dff89msh65dd40af7b545e4p11e683jsn8351145d59f2"},y=Object(d.a)({reducerPath:"cryptoNewsApi",baseQuery:Object(h.d)({baseUrl:"https://bing-news-search1.p.rapidapi.com"}),endpoints:function(e){return{getCryptoNews:e.query({query:function(e){var t=e.newsCategory,c=e.count;return{url:"/news/search?q=".concat(t,"&safeSearch=Off&textFormat=Raw&freshness=Day&count=").concat(c),headers:g}}})}}}),f=y.useGetCryptoNewsQuery,N=Object(j.a)({reducer:(a={},Object(o.a)(a,O.reducerPath,O.reducer),Object(o.a)(a,y.reducerPath,y.reducer),a)}),w=c(276),C=c(278),k=c(285),S=c(20),P=c(32),T=c(31),E=c(282),L=c(157),M=c(284),q=c(286),A=c(287),F=c(288),I=c(289),U=c(290),V=c.p+"static/media/cryptocurrency.1548aced.png",Q=c(4),$=function(){var e=Object(s.useState)(!0),t=Object(T.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(null),i=Object(T.a)(n,2),r=i[0],l=i[1];return Object(s.useEffect)((function(){var e=function(){return l(window.innerWidth)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),Object(s.useEffect)((function(){a(!(r<768))}),[r]),Object(Q.jsxs)("div",{className:"nav-container",children:[Object(Q.jsxs)("div",{className:"logo-container",children:[Object(Q.jsx)(E.a,{src:V,size:"large"}),Object(Q.jsx)(C.a.Title,{level:2,className:"logo",children:Object(Q.jsx)(P.b,{to:"/",children:"Cryptoverse"})}),Object(Q.jsx)(L.a,{className:"menu-control-container",onClick:function(){return a(!0)},children:Object(Q.jsx)(q.a,{})})]}),c&&Object(Q.jsxs)(M.a,{theme:"dark",children:[Object(Q.jsx)(M.a.Item,{icon:Object(Q.jsx)(A.a,{}),children:Object(Q.jsx)(P.b,{to:"/",children:"Home"})}),Object(Q.jsx)(M.a.Item,{icon:Object(Q.jsx)(F.a,{}),children:Object(Q.jsx)(P.b,{to:"/cryptocurrencies",children:"Cryptocurrencies"})}),Object(Q.jsx)(M.a.Item,{icon:Object(Q.jsx)(I.a,{}),children:Object(Q.jsx)(P.b,{to:"/exchanges",children:"Exchanges"})}),Object(Q.jsx)(M.a.Item,{icon:Object(Q.jsx)(U.a,{}),children:Object(Q.jsx)(P.b,{to:"/news",children:"News"})})]})]})},G=c(29),H=c.n(G),D=c(83),R=c(49),z=c(279),J=C.a.Title,W=function(){var e,t=x(10),c=t.data,a=t.isFetching,s=null===c||void 0===c||null===(e=c.data)||void 0===e?void 0:e.stats;return console.log(c),a?"Loading...":Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(J,{className:"heading",level:2,children:"Global Crypto Statistics"}),Object(Q.jsxs)(D.a,{children:[Object(Q.jsx)(R.a,{span:12,children:Object(Q.jsx)(z.a,{title:"Total Cryptocurrencies",value:s.total})}),Object(Q.jsx)(R.a,{span:12,children:Object(Q.jsx)(z.a,{title:"Total Exchanges",value:H()(s.totalExchanges)})}),Object(Q.jsx)(R.a,{span:12,children:Object(Q.jsx)(z.a,{title:"Total Market Cap",value:H()(s.totalMarketCap)})}),Object(Q.jsx)(R.a,{span:12,children:Object(Q.jsx)(z.a,{title:"Total 24h Volume",value:H()(s.total24hVolume)})}),Object(Q.jsx)(R.a,{span:12,children:Object(Q.jsx)(z.a,{title:"Total Markets",value:H()(s.totalMarkets)})})]}),Object(Q.jsxs)("div",{className:"home-heading-container",children:[Object(Q.jsx)(J,{className:"home-title",level:2,children:"Top 10 Cryptocurrencies in the world."}),Object(Q.jsx)(J,{className:"show-more",level:3,children:Object(Q.jsx)(P.b,{to:"/cryptocurrencies",children:"Show More"})})]}),Object(Q.jsx)(te,{simplified:!0}),Object(Q.jsxs)("div",{className:"home-heading-container",children:[Object(Q.jsx)(J,{className:"home-title",level:2,children:"Latest Cryptocurrencies News"}),Object(Q.jsx)(J,{className:"show-more",level:3,children:Object(Q.jsx)(P.b,{to:"/news",children:"Show More"})})]}),Object(Q.jsx)(Ne,{simplified:!0})]})},Z=c(283),_=c(111),B=C.a.Text,K=Z.a.Panel,X=function(){var e,t=v(),c=t.data,a=t.isFetching,s=null===c||void 0===c||null===(e=c.data)||void 0===e?void 0:e.exchanges;return a?"Loading...":Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsxs)(D.a,{children:[Object(Q.jsx)(R.a,{span:6,children:"Exchanges"}),Object(Q.jsx)(R.a,{span:6,children:"24h Trade Volume"}),Object(Q.jsx)(R.a,{span:6,children:"Markets"}),Object(Q.jsx)(R.a,{span:6,children:"Change"})]}),Object(Q.jsx)(D.a,{children:s.map((function(e){return Object(Q.jsx)(R.a,{span:24,children:Object(Q.jsx)(Z.a,{children:Object(Q.jsx)(K,{showArrow:!1,header:Object(Q.jsxs)(D.a,{children:[Object(Q.jsxs)(R.a,{span:6,children:[Object(Q.jsx)(B,{children:Object(Q.jsxs)("strong",{children:[e.rank,"."]})}),Object(Q.jsx)(E.a,{className:"exchange-image",src:e.iconUrl}),Object(Q.jsx)(B,{children:Object(Q.jsx)("strong",{children:e.name})})]}),Object(Q.jsxs)(R.a,{span:6,children:["$",H()(e.volume)]}),Object(Q.jsx)(R.a,{span:6,children:H()(e.numberOfMarkets)}),Object(Q.jsxs)(R.a,{span:6,children:[H()(e.marketShare),"%"]})]},e.id),children:Object(_.a)(e.description||"")},e.id)})})}))})]})},Y=c(281),ee=c(277),te=function(e){var t=e.simplified,c=x(t?10:100),a=c.data,n=c.isFetching,i=Object(s.useState)([]),r=Object(T.a)(i,2),l=r[0],o=r[1],j=Object(s.useState)(""),d=Object(T.a)(j,2),h=d[0],b=d[1];return Object(s.useEffect)((function(){var e,t=null===a||void 0===a||null===(e=a.data)||void 0===e?void 0:e.coins.filter((function(e){return e.name.toLowerCase().includes(h.toLowerCase())}));o(t)}),[a,h]),n?"Loading...":Object(Q.jsxs)(Q.Fragment,{children:[!t&&Object(Q.jsx)("div",{className:"search-crypto",children:Object(Q.jsx)(Y.a,{placeholder:"Search Crypto Currency...",onChange:function(e){return b(e.target.value)}})}),Object(Q.jsx)(D.a,{className:"crypto-card-container",gutter:[32,32],children:null===l||void 0===l?void 0:l.map((function(e){return Object(Q.jsx)(R.a,{className:"crypto-card",xs:24,sm:12,lg:6,children:Object(Q.jsx)(P.b,{to:"/crypto/".concat(e.id),children:Object(Q.jsxs)(ee.a,{title:"".concat(e.rank,". ").concat(e.name),style:{borderRadius:"16px"},extra:Object(Q.jsx)("img",{className:"crypto-image",src:e.iconUrl,hoverable:!0,alt:"not found"}),children:[Object(Q.jsxs)("p",{children:["Price: ",H()(e.price)]}),Object(Q.jsxs)("p",{children:["Market Cap: ",H()(e.marketCap)]}),Object(Q.jsxs)("p",{children:["Daily Change: ",H()(e.change)]})]})})},e.id)}))})]})},ce=c(280),ae=c(291),se=c(292),ne=c(293),ie=c(294),re=c(112),le=c(295),oe=c(160),je=c(154),de=C.a.Title,he=function(e){for(var t,c=e.coinHistory,a=e.currentPrice,s=e.coinName,n=[],i=[],r=0;r<(null===c||void 0===c||null===(l=c.data)||void 0===l||null===(o=l.history)||void 0===o?void 0:o.length);r+=1){var l,o,j,d;n.push(null===c||void 0===c||null===(j=c.data)||void 0===j?void 0:j.history[r].price),i.push(new Date(null===c||void 0===c||null===(d=c.data)||void 0===d?void 0:d.history[r].timeStamp).toLocaleString())}var h={labels:i,datasets:[{label:"Price in US dollar",data:n,fill:!1,backgroundColor:"#0071bd",borderColor:"#0071bd"}]};return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsxs)(D.a,{className:"chart-header",children:[Object(Q.jsxs)(de,{level:2,className:"chart-title",children:[s," Price Chart"]}),Object(Q.jsxs)(R.a,{className:"price-container",children:[Object(Q.jsxs)(de,{className:"price-change",level:5,children:[null===c||void 0===c||null===(t=c.data)||void 0===t?void 0:t.change," %"]}),Object(Q.jsxs)(de,{className:"current-price",level:5,children:["Current ",s," Price: $ ",a]})]})]}),Object(Q.jsx)(je.a,{data:h,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})]})},be=C.a.Text,ue=C.a.Title,Oe=ce.a.Option,xe=function(){var e,t=Object(S.g)().coinId,c=Object(s.useState)("7d"),a=Object(T.a)(c,2),n=a[0],i=a[1],r=p(t),l=r.data,o=r.isFetching,j=m({coinId:t,timePeriod:n}).data,d=null===l||void 0===l||null===(e=l.data)||void 0===e?void 0:e.coin;if(o)return"Loading";var h=[{title:"Price to USD",value:"$ ".concat(d.price&&H()(d.price)),icon:Object(Q.jsx)(ae.a,{})},{title:"Rank",value:d.rank,icon:Object(Q.jsx)(se.a,{})},{title:"24h Volume",value:"$ ".concat(d.volume&&H()(d.volume)),icon:Object(Q.jsx)(ne.a,{})},{title:"Market Cap",value:"$ ".concat(d.marketCap&&H()(d.marketCap)),icon:Object(Q.jsx)(ae.a,{})},{title:"All-time-high(daily avg.)",value:"$ ".concat(H()(d.allTimeHigh.price)),icon:Object(Q.jsx)(ie.a,{})}],b=[{title:"Number Of Markets",value:d.numberOfMarkets,icon:Object(Q.jsx)(F.a,{})},{title:"Number Of Exchanges",value:d.numberOfExchanges,icon:Object(Q.jsx)(I.a,{})},{title:"Aprroved Supply",value:d.approvedSupply?Object(Q.jsx)(re.a,{}):Object(Q.jsx)(le.a,{}),icon:Object(Q.jsx)(oe.a,{})},{title:"Total Supply",value:"$ ".concat(H()(d.totalSupply)),icon:Object(Q.jsx)(oe.a,{})},{title:"Circulating Supply",value:"$ ".concat(H()(d.circulatingSupply)),icon:Object(Q.jsx)(oe.a,{})}];return Object(Q.jsxs)(R.a,{className:"coin-detail-container",children:[Object(Q.jsxs)(R.a,{className:"coin-heading-container",children:[Object(Q.jsxs)(ue,{className:"coin-name",level:2,children:[d.name," ",d.slug," Price"]}),Object(Q.jsxs)("p",{children:[d.name," live price in US dollars. View value statistics, market-cap and supply."," "]})]}),Object(Q.jsx)(ce.a,{defaultValue:"7d",className:"select-timeperiod",placeholder:"Select Time Period...",onChange:function(e){return i(e)},children:["3h","24h","7d","30d","1y","3m","3y","5y"].map((function(e){return Object(Q.jsx)(Oe,{children:e},e)}))}),Object(Q.jsx)(he,{coinHistory:j,currentPrice:H()(d.price),coinName:d.name})," ",Object(Q.jsxs)(R.a,{className:"stats-container",children:[Object(Q.jsxs)(R.a,{className:"coin-value-statistics",children:[Object(Q.jsxs)(R.a,{className:"coin-value-statistics-heading",children:[Object(Q.jsxs)(ue,{level:3,className:"coin-details-heading",children:[d.name," Value Statistics"]}),Object(Q.jsxs)("p",{children:["An overview showing the stats of ",d.name]})]}),h.map((function(e){var t=e.icon,c=e.title,a=e.value;return Object(Q.jsxs)(R.a,{className:"coin-stats",children:[Object(Q.jsxs)(R.a,{className:"coin-stats-name",children:[Object(Q.jsx)(be,{children:t}),Object(Q.jsx)(be,{children:c})]}),Object(Q.jsx)(be,{className:"stats",children:a})]})}))]}),Object(Q.jsxs)(R.a,{className:"other-stats-info",children:[Object(Q.jsxs)(R.a,{className:"coin-value-statistics-heading",children:[Object(Q.jsx)(ue,{level:3,className:"coin-details-heading",children:"Other Statistics"}),Object(Q.jsx)("p",{children:"An overview showing the stats of all cryptocurrencies"})]}),b.map((function(e){var t=e.icon,c=e.title,a=e.value;return Object(Q.jsxs)(R.a,{className:"coin-stats",children:[Object(Q.jsxs)(R.a,{className:"coin-stats-name",children:[Object(Q.jsx)(be,{children:t}),Object(Q.jsx)(be,{children:c})]}),Object(Q.jsx)(be,{className:"stats",children:a})]})}))]})]}),Object(Q.jsxs)(R.a,{className:"coin-desc-link",children:[Object(Q.jsx)(D.a,{className:"coin-desc",children:Object(Q.jsxs)(ue,{className:"coin-details-heading",level:3,children:["What is ",d.name," ?",Object(_.a)(d.description)]})}),Object(Q.jsxs)(R.a,{className:"coin-links",children:[Object(Q.jsxs)(ue,{className:"coin-details-heading",level:3,children:[d.name," Links"]}),d.links.map((function(e){return Object(Q.jsxs)(D.a,{className:"coin-link",children:[Object(Q.jsx)(ue,{className:"link-name",level:5,children:e.type}),Object(Q.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.name})]},e.name)}))]})]})]})},pe=c(153),me=c.n(pe),ve="https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News",ge=C.a.Text,ye=C.a.Title,fe=ce.a.Option,Ne=function(e){var t,c,a=e.simplified,n=Object(s.useState)("Cryptocurrency"),i=Object(T.a)(n,2),r=i[0],l=i[1],o=x(100).data,j=f({newsCategory:r,count:a?6:12}).data;return(null===j||void 0===j?void 0:j.value)?Object(Q.jsxs)(D.a,{gutter:[24,24],children:[!a&&Object(Q.jsx)(R.a,{span:24,children:Object(Q.jsxs)(ce.a,{showSearch:!0,className:"select-news",placeholder:"Select a Crypto",optionFilterProp:"children",onChange:function(e){return l(e)},filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:[Object(Q.jsx)(fe,{value:"Cryptocurency",children:"Cryptocurrency"}),null===o||void 0===o||null===(t=o.data)||void 0===t||null===(c=t.coins)||void 0===c?void 0:c.map((function(e){return Object(Q.jsx)(fe,{value:e.name,children:e.name})}))]})}),j.value.map((function(e,t){var c,a,s,n,i,r;return Object(Q.jsx)(R.a,{xs:24,sm:12,lg:8,children:Object(Q.jsx)(ee.a,{hoverable:!0,className:"news-card",style:{borderRadius:"16px"},children:Object(Q.jsxs)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:[Object(Q.jsxs)("div",{className:"news-image-container",children:[Object(Q.jsx)(ye,{className:"news-title",level:4,children:e.name}),Object(Q.jsx)("img",{src:(null===e||void 0===e||null===(c=e.image)||void 0===c||null===(a=c.thumbnail)||void 0===a?void 0:a.contentUrl)||ve,alt:""})]}),Object(Q.jsx)("p",{children:e.description.length>100?"".concat(e.description.substring(0,100),"..."):e.description}),Object(Q.jsxs)("div",{className:"provider-container",children:[Object(Q.jsxs)("div",{children:[Object(Q.jsx)(E.a,{src:(null===(s=e.provider[0])||void 0===s||null===(n=s.image)||void 0===n||null===(i=n.thumbnail)||void 0===i?void 0:i.contentUrl)||ve,alt:""}),Object(Q.jsx)(ge,{className:"provider-name",children:null===(r=e.provider[0])||void 0===r?void 0:r.name})]}),Object(Q.jsx)(ge,{children:me()(e.datePublished).startOf("ss").fromNow()})]})]})})},t)}))]}):"Loading..."},we=(c(272),function(){return Object(Q.jsxs)("div",{className:"app",children:[Object(Q.jsx)("div",{className:"navbar",children:Object(Q.jsx)($,{})}),Object(Q.jsxs)("div",{className:"main",children:[Object(Q.jsx)(w.a,{children:Object(Q.jsx)("div",{className:"routes",children:Object(Q.jsxs)(S.c,{children:[Object(Q.jsx)(S.a,{path:"/",element:Object(Q.jsx)(W,{})}),Object(Q.jsx)(S.a,{path:"/exchanges",element:Object(Q.jsx)(X,{})}),Object(Q.jsx)(S.a,{path:"/cryptocurrencies",element:Object(Q.jsx)(te,{})}),Object(Q.jsx)(S.a,{path:"/crypto/:coinId",element:Object(Q.jsx)(xe,{})}),Object(Q.jsx)(S.a,{path:"/news",element:Object(Q.jsx)(Ne,{})})]})})}),Object(Q.jsxs)("div",{className:"footer",children:[Object(Q.jsxs)(C.a.Title,{level:5,style:{color:"white",textAlign:"center"},children:["Cryptoverse ",Object(Q.jsx)("br",{}),"All rights reserved"]}),Object(Q.jsxs)(k.b,{children:[Object(Q.jsx)(P.b,{to:"/",children:"Home"}),Object(Q.jsx)(P.b,{to:"/exchanges",children:"Exchanges"}),Object(Q.jsx)(P.b,{to:"/news",children:"News"})]})]})]})]})});c(273);l.a.render(Object(Q.jsx)(n.a.StrictMode,{children:Object(Q.jsx)(P.a,{children:Object(Q.jsx)(i.a,{store:N,children:Object(Q.jsx)(we,{})})})}),document.getElementById("root"))}},[[274,1,2]]]);
//# sourceMappingURL=main.d84f884b.chunk.js.map