(this.webpackJsonppersonal_website=this.webpackJsonppersonal_website||[]).push([[0],{77:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(22),c=n.n(r),o=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,122)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))},s=n(59),l=n(105),d=n(108),b=n(56),j=n.n(b),p=n(57),h=n.n(p),m=n(37),u=n(79),g=n(80),x=n(109),O=n(2),f=Object(l.a)((function(e){return{mainFeaturedPost:{position:"relative",backgroundColor:e.palette.grey[800],color:e.palette.common.white,marginBottom:e.spacing(4),backgroundImage:"url(https://source.unsplash.com/random)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},overlay:{position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:"rgba(0,0,0,.3)"},mainFeaturedPostContent:Object(m.a)({position:"relative",padding:e.spacing(3)},e.breakpoints.up("md"),{padding:e.spacing(6),paddingRight:0})}}));function v(e){var t=f(),n=e.post;return Object(O.jsxs)(u.a,{className:t.mainFeaturedPost,style:{backgroundImage:"url(".concat(n.image,")")},children:[Object(O.jsx)("img",{style:{display:"none"},src:n.image,alt:n.imageText}),Object(O.jsx)("div",{className:t.overlay}),Object(O.jsx)(d.a,{container:!0,children:Object(O.jsx)(d.a,{item:!0,md:6,children:Object(O.jsxs)("div",{className:t.mainFeaturedPostContent,children:[Object(O.jsx)(g.a,{component:"h1",variant:"h3",color:"inherit",gutterBottom:!0,children:n.title}),Object(O.jsx)(g.a,{variant:"h5",color:"inherit",paragraph:!0,children:n.description}),Object(O.jsx)(x.a,{variant:"subtitle1",href:"#",children:n.linkText})]})})})]})}var k=n(111),w=n(110),y=n(112),_=n(113),T=n(120),P=i.a.createContext(),C=Object(l.a)({card:{display:"flex"},cardDetails:{flex:1},cardMedia:{width:160}});function N(e){var t=i.a.useContext(P).selectContent,n=C(),a=e.post;return Object(O.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(O.jsx)(w.a,{component:"a",onClick:function(){t(a.page)},children:Object(O.jsxs)(k.a,{className:n.card,children:[Object(O.jsx)("div",{className:n.cardDetails,children:Object(O.jsxs)(y.a,{children:[Object(O.jsx)(g.a,{component:"h2",variant:"h5",children:a.title}),Object(O.jsx)(g.a,{variant:"subtitle1",color:"textSecondary",children:a.date}),Object(O.jsx)(g.a,{variant:"subtitle1",paragraph:!0,children:a.description})]})}),Object(O.jsx)(T.a,{xsDown:!0,children:Object(O.jsx)(_.a,{className:n.cardMedia,image:a.image,title:a.imageTitle})})]})})})}var B=n(116),I=n(115),A=n(114),L=Object(l.a)((function(e){return{toolbar:{borderBottom:"1px solid ".concat(e.palette.divider)},toolbarTitle:{flex:1},toolbarSecondary:{justifyContent:"space-between",overflowX:"auto"},toolbarLink:{padding:e.spacing(1),flexShrink:0}}}));function M(e){var t=L(),n=e.title;return Object(O.jsxs)(i.a.Fragment,{children:[Object(O.jsx)(A.a,{className:t.toolbar,children:Object(O.jsx)(g.a,{component:"h2",variant:"h5",color:"inherit",align:"center",noWrap:!0,className:t.toolbarTitle,children:n})}),Object(O.jsx)("ul",{})]})}function D(){return Object(O.jsxs)(g.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(O.jsx)(x.a,{color:"inherit",href:"https://material-ui.com/",children:"Markus Heiervang"})," ",(new Date).getFullYear()]})}var F=Object(l.a)((function(e){return{footer:{backgroundColor:e.palette.background.paper,marginTop:e.spacing(14),padding:e.spacing(2,0)}}}));function S(e){var t=F();e.description,e.title;return Object(O.jsx)("footer",{className:t.footer,children:Object(O.jsx)(I.a,{maxWidth:"lg",children:Object(O.jsx)(D,{})})})}function G(e){return Object(O.jsxs)(i.a.Fragment,{children:[Object(O.jsx)(B.a,{}),Object(O.jsxs)(I.a,{maxWidth:"lg",children:[Object(O.jsx)(M,{title:"Markus Heiervang",sections:[],href:"/"}),e.children]}),Object(O.jsx)(S,{title:"What should I put here?",description:"I have no clue!"})]})}var X=n(19),H=n(117),Q=n(60),W=n(55),z=n(6),J={overrides:{h1:{component:g.a,props:{gutterBottom:!0,variant:"h5"}},h2:{component:g.a,props:{gutterBottom:!0,variant:"h6"}},h3:{component:g.a,props:{gutterBottom:!0,variant:"subtitle1"}},h4:{component:g.a,props:{gutterBottom:!0,variant:"caption",paragraph:!0}},p:{component:g.a,props:{paragraph:!0}},a:{component:x.a},li:{component:Object(z.a)((function(e){return{listItem:{marginTop:e.spacing(1)}}}))((function(e){var t=e.classes,n=Object(Q.a)(e,["classes"]);return Object(O.jsx)("li",{className:t.listItem,children:Object(O.jsx)(g.a,Object(X.a)({component:"span"},n))})}))}}};function R(e){return Object(O.jsx)(W.a,Object(X.a)({options:J},e))}var E=Object(l.a)((function(e){return{markdown:Object(X.a)(Object(X.a)({},e.typography.body2),{},{padding:e.spacing(3,0)})}}));function Y(e){var t=E(),n=e.posts,a=e.title;return Object(O.jsxs)(d.a,{item:!0,xs:12,md:8,children:[Object(O.jsx)(g.a,{variant:"h6",gutterBottom:!0,children:a}),Object(O.jsx)(H.a,{}),null===n||void 0===n?void 0:n.map((function(e){return Object(O.jsx)(R,{className:t.markdown,children:e},e.substring(0,40))}))]})}var q=[{title:"Bio-Diff",subtext:"bioinformatics",img:"dna.png",description:"Application for performing dna- and protein sequence alignments\n                  using the smith-waterman algorithm and dynamic programming (work in progress)",link:"/bioinformatics"},{title:"Explainable Machine Learning",subtext:"workshop",img:"https://scontent.fosl4-2.fna.fbcdn.net/v/t1.0-9/149690293_1025232981334224_4445167684213344847_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=340051&_nc_ohc=LNCmjgw9kGkAX8qQLZc&_nc_ht=scontent.fosl4-2.fna&oh=3792fc43e955dab1e8b538e97d4196b5&oe=6073EA2D",description:"A workshop held in collaboration with LI:ST showcasing methods\n                  for explainability in machine learning as well as an introduction\n                  to the SHAP library",link:"https://github.com/marksverdhei/explainable_machine_learning_workshop"},{title:"Mann eller Kvinne",subtext:"NLP",img:"https://raw.githubusercontent.com/LBlend/mann-eller-kvinne/main/.static/mann-eller-kvinne.png?token=AF55TQTQ2EPX6JP33MO4NLK73QQZG",description:"A norwegian web app that guesses your gender based on your writing style. Made in collaboration with Leander",link:"https://mannellerkvinne.lblend.moe/"},{title:"Advanced Data Visualzation",subtext:"workshop",img:"https://scontent.fosl4-2.fna.fbcdn.net/v/t1.0-9/84698837_754393085084883_541917717616132096_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=340051&_nc_ohc=3OXzYHfGR2QAX_zzLUc&_nc_oc=AQlaituYP6uHBRKbVX8Wi-X-j5yJGpG5Di2RMhYAsUr4V7sHDB-lk8JhPPwmXJRy31I&_nc_ht=scontent.fosl4-2.fna&oh=cf6f0e0bb5c1ede336841a3919fede77&oe=6076F8EA",description:'A simple 2-hour workshop in Norwegian covering more advanced visualzation techniques in the python library "Matlpotlib". Done in collaboration with LI:ST',link:"https://github.com/marksverdhei/advanced_matplotlib_workshop"},{title:"Personal website",subtext:"front-end",img:"website.PNG",description:"This very website",link:"/"}],K=n(118),U=n(119),V=Object(l.a)((function(e){return{markdown:Object(X.a)(Object(X.a)({},e.typography.body2),{},{padding:e.spacing(3,0)}),card:{display:"flex"},cardDetails:{flex:1},cardMedia:{width:160}}}));function Z(e){var t=V();e.title;return Object(O.jsxs)(d.a,{item:!0,xs:12,md:8,children:[Object(O.jsx)(g.a,{variant:"h6",gutterBottom:!0,children:"Portfolio"}),Object(O.jsx)(H.a,{}),Object(O.jsx)(K.a,{children:q.map((function(e){return Object(O.jsx)(U.a,{children:Object(O.jsx)(w.a,{component:"a",href:e.link,children:Object(O.jsxs)(k.a,{className:t.card,children:[Object(O.jsx)("div",{className:t.cardDetails,children:Object(O.jsxs)(y.a,{children:[Object(O.jsx)(g.a,{component:"h2",variant:"h5",children:e.title}),Object(O.jsx)(g.a,{variant:"subtitle1",color:"textSecondary",children:e.subtext}),Object(O.jsx)(g.a,{variant:"subtitle1",paragraph:!0,children:e.description})]})}),Object(O.jsx)(T.a,{xsDown:!0,children:Object(O.jsx)(_.a,{className:t.cardMedia,image:e.img,title:"post.imageTitle"})})]})})})}))})]})}var $=Object(l.a)((function(e){return{sidebarAboutBox:{padding:e.spacing(2),backgroundColor:e.palette.grey[200]},sidebarSection:{marginTop:e.spacing(3)}}}));function ee(e){var t=$(),n=(e.description,e.social),a=e.title;return Object(O.jsx)(d.a,{item:!0,xs:12,md:4,children:Object(O.jsxs)(u.a,{elevation:0,className:t.sidebarAboutBox,children:[Object(O.jsx)(g.a,{variant:"h6",gutterBottom:!0,children:a}),n.map((function(e){return Object(O.jsx)(x.a,{display:"block",variant:"body1",href:e.url,children:Object(O.jsxs)(d.a,{container:!0,direction:"row",spacing:1,alignItems:"center",children:[Object(O.jsx)(d.a,{item:!0,children:Object(O.jsx)(e.icon,{})}),Object(O.jsx)(d.a,{item:!0,children:e.name})]})},e)}))]})})}var te={title:"Welcome",description:"to my personal website",image:"earth.jpg",imgText:"main image description"},ne={main:{title:"Blog",date:"",description:"The place where I share and discuss things I have recently learned",image:"blog.png",imageText:"Portrait",page:"main"},about:{title:"About me",date:"",description:"I am a Machine Learning enthusiast currently pursuing a masters degree at the University of Oslo ... ",image:"portrait.jpg",imageText:"Portrait",page:"about"},portfolio:{title:"Portfolio",date:"",description:"Click here to view all my published projects, code and more!",image:"projects.jpg",imageText:"Code",page:"portfolio"}},ae=["\n# Web page launch\n\nOnly time will tell if I'll ever publish something here\n"],ie={title:"Links",description:"This is a sidebar that I dont know if i'll ever use",archives:[{title:"March 2020",url:"#"}],social:[{name:"GitHub",url:"https://github.com/marksverdhei",icon:j.a},{name:"LinkedIn",url:"https://www.linkedin.com/in/markus-heiervang/",icon:h.a}]},re=Object(l.a)((function(e){return{mainGrid:{marginTop:e.spacing(3)}}}));function ce(e){switch(e){case"about":return Object(O.jsx)(Y,{title:"About",posts:[]});case"portfolio":return Object(O.jsx)(Z,{title:"Portfolio",posts:[]});default:return Object(O.jsx)(Y,{title:"Blog",posts:ae})}}function oe(){var e=i.a.useState("main"),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object.keys(ne).filter((function(e){return e!==n})).map((function(e){return ne[e]})),c=re(),o={selectedContent:a,selectContent:a};return Object(O.jsx)(G,{children:Object(O.jsx)(P.Provider,{value:o,children:Object(O.jsxs)("main",{children:[Object(O.jsx)(v,{post:te}),Object(O.jsx)(d.a,{container:!0,spacing:4,children:r.map((function(e){return Object(O.jsx)(N,{post:e},e.title)}))}),Object(O.jsxs)(d.a,{container:!0,spacing:5,className:c.mainGrid,children:[ce(n),Object(O.jsx)(ee,{title:ie.title,description:ie.description,archives:ie.archives,social:ie.social})]})]})})})}function se(){return Object(O.jsx)(G,{children:Object(O.jsx)(g.a,{align:"center",children:Object(O.jsx)("h1",{children:"Coming soon"})})})}var le=n(58),de=n(7);function be(){return Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(le.a,{children:Object(O.jsxs)(de.c,{children:[Object(O.jsx)(de.a,{path:"/bioinformatics",children:Object(O.jsx)(se,{})}),Object(O.jsx)(de.a,{path:"/",children:Object(O.jsx)(oe,{})})]})})})}c.a.render(Object(O.jsx)(be,{}),document.getElementById("root")),o()}},[[77,1,2]]]);
//# sourceMappingURL=main.2c2cbd4d.chunk.js.map