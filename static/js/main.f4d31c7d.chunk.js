(this.webpackJsonpreddit_client=this.webpackJsonpreddit_client||[]).push([[0],[,function(t,e,n){t.exports={container:"LoadingPlug_container__34tjC",loading_plug_container:"LoadingPlug_loading_plug_container__1Xg-C",comment_author_container:"LoadingPlug_comment_author_container__3OJo6",post_container:"LoadingPlug_post_container__1tjZN",content_post:"LoadingPlug_content_post__3BQKj",ups_container:"LoadingPlug_ups_container__jG-AQ",ups_paragraph:"LoadingPlug_ups_paragraph__4haZc",arrow_button:"LoadingPlug_arrow_button__1W3uz",up_button:"LoadingPlug_up_button__28lQU",down_button:"LoadingPlug_down_button__3_YTI",loading_title:"LoadingPlug_loading_title__1l3mC",loading_title_comment:"LoadingPlug_loading_title_comment__1D7Pk",post_image_container:"LoadingPlug_post_image_container__1odC_",post_footer:"LoadingPlug_post_footer__j2WfL",post_author:"LoadingPlug_post_author__32HVY",post_created_time_load:"LoadingPlug_post_created_time_load__3h4iC",post_created_time_comment:"LoadingPlug_post_created_time_comment__lzXpD",comment_loading:"LoadingPlug_comment_loading__3LKuU",comment_icon:"LoadingPlug_comment_icon__2NL7I",cylon_eye:"LoadingPlug_cylon_eye__1XJPb",animate:"LoadingPlug_animate__39dIx"}},,function(t,e,n){t.exports={container:"ContentItem_container__3zQtU",post_container:"ContentItem_post_container__SbsOd",ups_container:"ContentItem_ups_container__1bh46",ups_paragraph:"ContentItem_ups_paragraph__1hsUE",arrow_button:"ContentItem_arrow_button__15W1n",up_button:"ContentItem_up_button__mf7Nh",down_button:"ContentItem_down_button__3CWoE",post_image_container:"ContentItem_post_image_container__1NI7x",post_image:"ContentItem_post_image__nmH05",post_footer:"ContentItem_post_footer__paSuq",comment_icon:"ContentItem_comment_icon__1DSKi",comment_count:"ContentItem_comment_count__3s2Xw"}},,function(t,e,n){t.exports={navbar_container:"Navbar_navbar_container__3soNj",logo:"Navbar_logo__1ojFd",logo_p:"Navbar_logo_p__1oF5g",subreddit_search_container:"Navbar_subreddit_search_container__SUe7S"}},function(t,e,n){t.exports={container:"CommentItem_container__1uK1n",author_container:"CommentItem_author_container__35ljc",author:"CommentItem_author__20fFq",publication_time:"CommentItem_publication_time__12DeW",comment_body:"CommentItem_comment_body__35res"}},function(t,e,n){t.exports={item_container:"AsideItem_item_container__3Cjvy",icon_img_container:"AsideItem_icon_img_container__2O91q",item_paragraph:"AsideItem_item_paragraph__3EiRp"}},function(t,e,n){t.exports={container:"ContentContainer_container__2mopm",subredditScroll:"ContentContainer_subredditScroll__13139",to_top_scroll:"ContentContainer_to_top_scroll__24MJa"}},,function(t,e,n){t.exports={aside_container:"Aside_aside_container__3BwbN",subreddits_title:"Aside_subreddits_title__DUEU_"}},,function(t,e,n){t.exports={container:"Content_container__3NTYW"}},,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(2),o=n.n(c),s=n(11),i=n.n(s),r=(n(18),n(19),n(4)),l=n(7),_=n.n(l),d=function(t){return Object(a.jsxs)("div",{className:_.a.item_container,onClick:function(){t.changeSrHandler(t.srUrl)},children:[""===t.icon?null:Object(a.jsx)("div",{className:_.a.icon_img_container,children:Object(a.jsx)("img",{src:t.icon,alt:""})}),Object(a.jsx)("p",{className:_.a.item_paragraph,children:t.title})]})},u=n(10),m=n.n(u),j=function(t){return Object(a.jsxs)("div",{className:m.a.aside_container,ref:t.refProp,children:[Object(a.jsx)("h2",{className:m.a.subreddits_title,children:"Subreddits"}),null===t.data?null:t.data.map((function(e){return Object(a.jsx)(d,{title:e.data.display_name,icon:e.data.icon_img,srUrl:e.data.url,changeSrHandler:t.changeSrHandler},e.data.id)}))]})},b=n(6),p=n.n(b),h=function(t){return Object(a.jsxs)("div",{className:p.a.container,children:[Object(a.jsxs)("div",{className:p.a.author_container,children:[Object(a.jsx)("p",{className:p.a.author,children:t.author}),Object(a.jsx)("p",{className:p.a.publication_time,children:Math.floor(t.publicationTime/36e5)<1?Math.floor(t.publicationTime/6e4)+" minutes ago":Math.floor(t.publicationTime/36e5)+" hours ago"})]}),Object(a.jsx)("p",{className:p.a.comment_body,children:t.body})]})},g=n(1),O=n.n(g),f=function(){return Object(a.jsxs)("div",{className:O.a.comments_container,children:[Object(a.jsxs)("div",{className:O.a.comment_author_container,children:[Object(a.jsx)("div",{className:O.a.post_author,children:Object(a.jsx)("div",{className:O.a.cylon_eye})}),Object(a.jsx)("div",{className:"".concat(O.a.post_created_time_load," ").concat(O.a.post_created_time_comment),children:Object(a.jsx)("div",{className:O.a.cylon_eye})})]}),Object(a.jsx)("div",{className:"".concat(O.a.loading_title," ").concat(O.a.loading_title_comment),children:Object(a.jsx)("div",{className:O.a.cylon_eye})})]})},x=function(){return Object(a.jsxs)("div",{className:O.a.container,children:[Object(a.jsxs)("div",{className:O.a.post_container,children:[Object(a.jsxs)("div",{className:O.a.ups_container,children:[Object(a.jsx)("button",{className:"".concat(O.a.arrow_button," ").concat(O.a.up_button),children:Object(a.jsx)("i",{className:"fas fa-arrow-up"})}),Object(a.jsx)("div",{className:O.a.ups_paragraph,children:Object(a.jsx)("div",{className:O.a.cylon_eye})}),Object(a.jsx)("button",{className:"".concat(O.a.arrow_button," ").concat(O.a.down_button),children:Object(a.jsx)("i",{className:"fas fa-arrow-down"})})]}),Object(a.jsxs)("div",{className:O.a.content_post,children:[Object(a.jsx)("div",{className:O.a.loading_title,children:Object(a.jsx)("div",{className:O.a.cylon_eye})}),Object(a.jsx)("div",{className:O.a.post_image_container,children:Object(a.jsx)("div",{className:O.a.cylon_eye})})]})]}),Object(a.jsxs)("div",{className:O.a.post_footer,children:[Object(a.jsx)("div",{className:O.a.post_author,children:Object(a.jsx)("div",{className:O.a.cylon_eye})}),Object(a.jsx)("div",{className:O.a.post_created_time_load,children:Object(a.jsx)("div",{className:O.a.cylon_eye})}),Object(a.jsxs)("div",{className:O.a.comment_loading,children:[Object(a.jsx)("div",{className:O.a.cylon_eye}),Object(a.jsx)("div",{className:O.a.comment_icon,children:Object(a.jsx)("i",{className:"far fa-comment"})})]})]})]})},N=function(t){return Object(a.jsx)("div",{className:O.a.loading_plug_container,children:[1,2,3].map((function(e){return"post"===t.renderItem?Object(a.jsx)(x,{},e):"comment"===t.renderItem?Object(a.jsx)(f,{},e):null}))})},v=n(3),w=n.n(v),C=function(t){return Object(a.jsxs)("div",{className:w.a.container,children:[Object(a.jsxs)("div",{className:w.a.post_container,children:[Object(a.jsxs)("div",{className:w.a.ups_container,children:[Object(a.jsx)("button",{className:"".concat(w.a.arrow_button," ").concat(w.a.up_button),children:Object(a.jsx)("i",{className:"fas fa-arrow-up"})}),Object(a.jsx)("p",{className:w.a.ups_paragraph,children:t.postUps}),Object(a.jsx)("button",{className:"".concat(w.a.arrow_button," ").concat(w.a.down_button),children:Object(a.jsx)("i",{className:"fas fa-arrow-down"})})]}),Object(a.jsxs)("div",{className:w.a.content_post,children:[Object(a.jsx)("p",{children:t.title}),Object(a.jsx)("div",{className:w.a.post_image_container,children:t.postImage.includes(".jpg")||t.postImage.includes(".png")||t.postImage.includes(".gif")?Object(a.jsx)("img",{src:t.postImage,className:w.a.post_image,alt:"postImage"}):null})]})]}),Object(a.jsxs)("div",{className:w.a.post_footer,children:[Object(a.jsx)("p",{children:t.postAuthor}),Object(a.jsx)("p",{children:Math.floor(t.postDate/36e5)<1?Math.floor(t.postDate/6e4)+" minutes ago":Math.floor(t.postDate/36e5)+" hours ago"}),Object(a.jsxs)("p",{className:w.a.comment_count,onClick:function(){t.commentBtnClickHandler((function(t){return!t})),t.showComments&&t.hideComments(!1)},children:[Object(a.jsx)("span",{className:w.a.comment_icon,children:Object(a.jsx)("i",{className:"far fa-comment"})}),t.postCommentNum]})]}),t.showComments&&t.commentsBtnActive?t.comments.map((function(t){return"t1"!==t.kind?null:Object(a.jsx)(h,{author:t.data.author,body:t.data.body,publicationTime:Date.now()-t.data.created_utc*"1".concat(new Array(Date.now().toString().length-t.data.created_utc.toString().length).fill(0).join(""))},t.data.id)})):t.commentsBtnActive?Object(a.jsx)(N,{renderItem:"comment"}):null]})},S=function(t){var e=Object(c.useState)(null),n=Object(r.a)(e,2),o=n[0],s=n[1],i=Object(c.useState)(!1),l=Object(r.a)(i,2),_=l[0],d=l[1],u=Object(c.useState)(!1),m=Object(r.a)(u,2),j=m[0],b=m[1];return Object(c.useEffect)((function(){!1!==_&&fetch("https://www.reddit.com".concat(t.permalink,".json")).then((function(t){if(t.ok)return t.json()})).then((function(t){s(t[1].data.children),b(!0)}))}),[_,t.permalink]),Object(a.jsx)(C,{title:t.title,postAuthor:t.postAuthor,postImage:t.postImage,postUps:t.postUps,postDate:t.postDate,postCommentNum:t.postCommentNum,showComments:j,comments:o,commentsBtnActive:_,commentBtnClickHandler:d,hideComments:b})},I=n(12),y=n.n(I),P=function(t){return Object(a.jsx)("div",{className:y.a.container,children:null===t.data?null:t.data.map((function(t){var e=t.data.url.includes(".jpg")||t.data.url.includes(".png")||t.data.url.includes(".gif")?t.data.url:t.data.thumbnail;return Object(a.jsx)(S,{title:t.data.title,postAuthor:t.data.author,postImage:e,postUps:t.data.ups,postDate:Date.now()-t.data.created_utc*"1".concat(new Array(Date.now().toString().length-t.data.created_utc.toString().length).fill(0).join("")),postCommentNum:t.data.num_comments,permalink:t.data.permalink},t.data.id)}))})},L=n(8),k=n.n(L),B=function(t){var e=Object(c.useState)(null),n=Object(r.a)(e,2),o=n[0],s=n[1],i=Object(c.useState)(null),l=Object(r.a)(i,2),_=l[0],d=l[1],u=Object(c.useState)(null),m=Object(r.a)(u,2),b=m[0],p=m[1],h=Object(c.useState)(!1),g=Object(r.a)(h,2),O=g[0],f=g[1],x=Object(c.useRef)(null),v=Object(c.useRef)(null);Object(c.useEffect)((function(){f(!0),fetch("https://www.reddit.com/r/popular.json").then((function(t){if(t.ok)return t.json()})).then((function(t){s(t.data.children),f(!1)}))}),[]),Object(c.useEffect)((function(){fetch("https://www.reddit.com/subreddits/popular.json").then((function(t){if(t.ok)return t.json()})).then((function(t){d(t.data.children)}))}),[]),Object(c.useEffect)((function(){null!==b&&(f(!0),fetch("https://www.reddit.com/".concat(b,"/.json")).then((function(t){if(t.ok)return t.json()})).then((function(t){s(t.data.children),f(!1)})))}),[b]),Object(c.useEffect)((function(){t.searchButtonState&&(f(!0),fetch("https://www.reddit.com/search.json?q=".concat(t.searchbarValue)).then((function(t){if(t.ok)return t.json()})).then((function(e){t.setSearchbarValue(""),t.setSearchButtonState(!1),s(e.data.children),f(!1)})))}),[t.searchButtonState]);return Object(a.jsxs)("div",{className:k.a.container,children:[Object(a.jsx)("div",{className:k.a.subredditScroll,ref:v,onClick:function(){return x.current.scrollIntoView({behavior:"smooth"})},children:"Go To Subreddits"}),Object(a.jsx)("div",{className:k.a.to_top_scroll,onClick:function(){return v.current.scrollIntoView({behavior:"smooth"})},children:Object(a.jsx)("i",{className:"fas fa-chevron-circle-up"})}),O?Object(a.jsx)(N,{renderItem:"post"}):Object(a.jsx)(P,{data:o}),Object(a.jsx)(j,{data:_,changeSrHandler:function(t){p(t)},refProp:x})]})},D=n(5),A=n.n(D),U=function(t){var e=function(){t.searchbarValue.length>0&&t.searchButtonClickHandler(!0)};return Object(a.jsxs)("div",{className:A.a.navbar_container,children:[Object(a.jsx)("div",{className:A.a.logo,children:Object(a.jsx)("svg",{stroke:"#3d5af1",fill:"#3d5af1",strokeWidth:"0",viewBox:"0 0 512 512",height:"2em",width:"2em",xmlns:"http://www.w3.org/2000/svg",children:Object(a.jsx)("path",{d:"M 201.5 305.5 c -13.8 0 -24.9 -11.1 -24.9 -24.6 c 0 -13.8 11.1 -24.9 24.9 -24.9 c 13.6 0 24.6 11.1 24.6 24.9 c 0 13.6 -11.1 24.6 -24.6 24.6 Z M 504 256 c 0 137 -111 248 -248 248 S 8 393 8 256 S 119 8 256 8 s 248 111 248 248 Z m -132.3 -41.2 c -9.4 0 -17.7 3.9 -23.8 10 c -22.4 -15.5 -52.6 -25.5 -86.1 -26.6 l 17.4 -78.3 l 55.4 12.5 c 0 13.6 11.1 24.6 24.6 24.6 c 13.8 0 24.9 -11.3 24.9 -24.9 s -11.1 -24.9 -24.9 -24.9 c -9.7 0 -18 5.8 -22.1 13.8 l -61.2 -13.6 c -3 -0.8 -6.1 1.4 -6.9 4.4 l -19.1 86.4 c -33.2 1.4 -63.1 11.3 -85.5 26.8 c -6.1 -6.4 -14.7 -10.2 -24.1 -10.2 c -34.9 0 -46.3 46.9 -14.4 62.8 c -1.1 5 -1.7 10.2 -1.7 15.5 c 0 52.6 59.2 95.2 132 95.2 c 73.1 0 132.3 -42.6 132.3 -95.2 c 0 -5.3 -0.6 -10.8 -1.9 -15.8 c 31.3 -16 19.8 -62.5 -14.9 -62.5 Z M 302.8 331 c -18.2 18.2 -76.1 17.9 -93.6 0 c -2.2 -2.2 -6.1 -2.2 -8.3 0 c -2.5 2.5 -2.5 6.4 0 8.6 c 22.8 22.8 87.3 22.8 110.2 0 c 2.5 -2.2 2.5 -6.1 0 -8.6 c -2.2 -2.2 -6.1 -2.2 -8.3 0 Z m 7.7 -75 c -13.6 0 -24.6 11.1 -24.6 24.9 c 0 13.6 11.1 24.6 24.6 24.6 c 13.8 0 24.9 -11.1 24.9 -24.6 c 0 -13.8 -11 -24.9 -24.9 -24.9 Z"})})}),Object(a.jsx)("div",{className:A.a.logo_p_container,children:Object(a.jsxs)("p",{className:A.a.logo_p,children:[Object(a.jsx)("span",{className:A.a.logo_span,children:"Reddit"}),"Minimal"]})}),Object(a.jsxs)("div",{className:A.a.subreddit_search_container,children:[Object(a.jsx)("input",{type:"text",placeholder:"Search",value:t.searchbarValue,onChange:function(e){return t.changeHandler(e.target.value)},onSubmit:e}),Object(a.jsx)("button",{onClick:e,children:Object(a.jsx)("i",{className:"fas fa-search"})})]})]})},H=function(){var t=Object(c.useState)(""),e=Object(r.a)(t,2),n=e[0],o=e[1],s=Object(c.useState)(!1),i=Object(r.a)(s,2),l=i[0],_=i[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(U,{searchbarValue:n,changeHandler:o,searchButtonClickHandler:_}),Object(a.jsx)(B,{setSearchButtonState:_,searchButtonState:l,searchbarValue:n,setSearchbarValue:o})]})};var M=function(){return Object(a.jsx)(H,{})},E=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),o(t),s(t)}))};i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(M,{})}),document.getElementById("root")),E()}],[[20,1,2]]]);
//# sourceMappingURL=main.f4d31c7d.chunk.js.map