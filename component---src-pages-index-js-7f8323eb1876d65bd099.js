(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(144),l=(a(74),a(75),a(76),a(33),a(148),Object(r.b)(["25%{transform:scale(1.2);}50%{transform:scale(1);}75%{transform:scale(1.2);}100%{transform:scale(1);}"])),o=r.a.div.withConfig({displayName:"styled__StyledWrapper",componentId:"sc-1s70tzx-0"})(["width:50%;@media (max-width:800px){width:100%;}"]),d=r.a.a.withConfig({displayName:"styled__StyledVideo",componentId:"sc-1s70tzx-1"})(["margin:1.2rem;padding:1rem;display:block;text-decoration:none;background:#f6e510c4;color:#010101;border-radius:10px;box-shadow:10px 10px 20px rgba(136,136,136,0.14);"]),c=r.a.div.withConfig({displayName:"styled__StyledDetails",componentId:"sc-1s70tzx-2"})(["padding:1rem;"]),s=r.a.div.withConfig({displayName:"styled__StyledContent",componentId:"sc-1s70tzx-3"})([""]),p=(r.a.div.withConfig({displayName:"styled__StyledImage",componentId:"sc-1s70tzx-4"})(["margin:0;text-align:center;img{height:150px;border-radius:50%;padding:3px;border:5px solid black;}:hover{animation:"," 2s linear infinite;}"],l),r.a.p.withConfig({displayName:"styled__StyledText",componentId:"sc-1s70tzx-5"})([""])),m=r.a.h3.withConfig({displayName:"styled__StyledTitle",componentId:"sc-1s70tzx-6"})(["text-align:center;"]),u=r.a.div.withConfig({displayName:"styled__StyledFooter",componentId:"sc-1s70tzx-7"})(["display:flex;"]),g=r.a.div.withConfig({displayName:"styled__StyledIcon",componentId:"sc-1s70tzx-8"})(["flex:1;text-align:center;"]);a(73);var f=function(e){var t,a,n,r,l,f,y=e.id,h=e.snippet,x=e.contentDetails,w=e.statistics;return i.a.createElement(o,null,i.a.createElement(d,{key:y,href:"https://www.youtube.com/watch?v="+y,"aria-label":"open "+h.title,target:"_blank"},i.a.createElement(s,null,i.a.createElement(c,null,i.a.createElement(m,null,h.title),i.a.createElement(p,null,h.description.replace(/---Description\s*/,"").replace(/\s*---[\w\W]*/,"")))),i.a.createElement(u,null,i.a.createElement(g,null,"⌛"+(l=x.duration,f=l.match(/\d+/g),l.indexOf("M")>=0&&-1==l.indexOf("H")&&-1==l.indexOf("S")&&(f=[0,f[0],0]),l.indexOf("H")>=0&&-1==l.indexOf("M")&&(f=[f[0],0,f[1]]),l.indexOf("H")>=0&&-1==l.indexOf("M")&&-1==l.indexOf("S")&&(f=[f[0],0,0]),l=0,3==f.length&&(l+=3600*parseInt(f[0]),l+=60*parseInt(f[1]),l+=parseInt(f[2])),2==f.length&&(l+=60*parseInt(f[0]),l+=parseInt(f[1])),1==f.length&&(l+=parseInt(f[0])),t=parseInt(l,10),a=Math.floor(t/3600),n=Math.floor((t-3600*a)/60),r=t-3600*a-60*n,a<10&&(a="0"+a),n<10&&(n="0"+n),r<10&&(r="0"+r),a>0?a+":"+n+":"+r:n+":"+r)),i.a.createElement(g,null,"👀"+w.viewCount))))},y=r.a.div.withConfig({displayName:"styled__StyledWrapper",componentId:"sc-1k6t4l8-0"})(["margin-left:auto;margin-right:auto;max-width:60rem;padding-top:100px;"]),h=r.a.div.withConfig({displayName:"styled__StyledVideos",componentId:"sc-1k6t4l8-1"})(["display:flex;flex-wrap:wrap;justify-content:center;"]),x=function(e){var t=e.playlists;return i.a.createElement(y,null,t&&t.map(function(e){return i.a.createElement("div",null,i.a.createElement("h2",null,e.snippet.title),i.a.createElement(h,null,e.playlistItems.map(function(e){var t=e.video.items[0];return i.a.createElement(f,{id:t.id,snippet:t.snippet,contentDetails:t.contentDetails,statistics:t.statistics})})))}))},w=r.a.div.withConfig({displayName:"styled__StyledWrapper",componentId:"sc-52t8i8-0"})(["position:fixed;top:0;right:0;left:0;z-index:1;background:white;padding:1rem;-webkit-box-shadow:0px 0px 9px 3px rgba(41,41,41,0.04);-moz-box-shadow:0px 0px 9px 3px rgba(41,41,41,0.04);box-shadow:0px 0px 9px 3px rgba(41,41,41,0.04);"]),v=(r.a.h1.withConfig({displayName:"styled__StyledTitle",componentId:"sc-52t8i8-1"})(["font-size:2em;margin:0;text-transform:uppercase;"]),r.a.h1.withConfig({displayName:"logo__StyledText",componentId:"sc-9sovxt-0"})(["margin:0;display:inline;"])),E=r.a.h1.withConfig({displayName:"logo__StyledBrackets",componentId:"sc-9sovxt-1"})(["margin:0 1rem;display:inline;"]),_=r.a.div.withConfig({displayName:"logo__StyledWrapper",componentId:"sc-9sovxt-2"})(["width:380px;background:#f8ea6194;padding:0.5rem;border-radius:5px;"]),b=function(){return i.a.createElement(_,null,i.a.createElement(E,null,"<"),i.a.createElement(v,null,"Frontendtopics"),i.a.createElement(E,null,"/>"))},I=function(){return i.a.createElement(w,null,i.a.createElement(b,null))},S=a(157),C=a(158),N=a(4),k=a.n(N),T=a(146),q=function(e){var t=e.title,a=e.description,n=e.image,r=e.pathname,l=e.article;return i.a.createElement(T.StaticQuery,{query:O,render:function(e){var o=e.site.siteMetadata,d=o.defaultTitle,c=o.defaultDescription,s=o.siteUrl,p=o.defaultImage,m=o.twitterUsername,u={title:t||d,description:a||c,image:""+s+(n||p),url:""+s+(r||"/")};return i.a.createElement(i.a.Fragment,null,i.a.createElement(C.Helmet,{title:u.title},i.a.createElement("meta",{name:"description",content:u.description}),i.a.createElement("meta",{name:"image",content:u.image}),u.url&&i.a.createElement("meta",{property:"og:url",content:u.url}),!l?null:i.a.createElement("meta",{property:"og:type",content:"article"}),u.title&&i.a.createElement("meta",{property:"og:title",content:u.title}),u.description&&i.a.createElement("meta",{property:"og:description",content:u.description}),u.image&&i.a.createElement("meta",{property:"og:image",content:u.image}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),m&&i.a.createElement("meta",{name:"twitter:creator",content:m}),u.title&&i.a.createElement("meta",{name:"twitter:title",content:u.title}),u.description&&i.a.createElement("meta",{name:"twitter:description",content:u.description}),u.image&&i.a.createElement("meta",{name:"twitter:image",content:u.image})))},data:S})},z=q;q.propTypes={title:k.a.string,description:k.a.string,image:k.a.string,pathname:k.a.string,article:k.a.bool},q.defaultProps={title:null,description:null,image:null,pathname:null,article:!1};var O="728552493";a.d(t,"StyledWrapper",function(){return j}),a.d(t,"query",function(){return D});var j=r.a.div.withConfig({displayName:"pages__StyledWrapper",componentId:"ifild7-0"})(["margin:1rem;"]),D=(t.default=function(e){var t=e.data;return i.a.createElement(j,null,i.a.createElement(z,null),i.a.createElement(I,null),i.a.createElement(x,{playlists:t.ytNode.childrenYtPlaylist}))},"4173281922")},146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return u});var n=a(0),i=a.n(n),r=a(4),l=a.n(r),o=a(143),d=a.n(o);a.d(t,"Link",function(){return d.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var c=a(147),s=a.n(c);a.d(t,"PageRenderer",function(){return s.a});var p=a(49);a.d(t,"parsePath",function(){return p.a});var m=i.a.createContext({}),u=function(e){return i.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},147:function(e,t,a){var n;e.exports=(n=a(168))&&n.default||n},157:function(e){e.exports={data:{site:{siteMetadata:{defaultTitle:"Frontend Topics",defaultDescription:"The first front-end development community",siteUrl:"https://www.frontendtopics.com",defaultImage:"/img/javascript.jpg",twitterUsername:"@alancampora"}}}}},168:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),i=a.n(n),r=a(4),l=a.n(r),o=a(68),d=a(2),c=function(e){var t=e.location,a=d.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c}}]);
//# sourceMappingURL=component---src-pages-index-js-7f8323eb1876d65bd099.js.map