(this.webpackJsonppersonal_website=this.webpackJsonppersonal_website||[]).push([[0],{72:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(17),c=n.n(r),o=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,116)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))},s=n(55),l=n(101),d=n(104),j=n(52),p=n.n(j),b=n(53),u=n.n(b),h=n(38),m=n(74),g=n(75),x=n(105),O=n(2),v=Object(l.a)((function(e){return{mainFeaturedPost:{position:"relative",backgroundColor:e.palette.grey[800],color:e.palette.common.white,marginBottom:e.spacing(4),backgroundImage:"url(https://source.unsplash.com/random)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},overlay:{position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:"rgba(0,0,0,.3)"},mainFeaturedPostContent:Object(h.a)({position:"relative",padding:e.spacing(3)},e.breakpoints.up("md"),{padding:e.spacing(6),paddingRight:0})}}));function f(e){var t=v(),n=e.post;return Object(O.jsxs)(m.a,{className:t.mainFeaturedPost,style:{backgroundImage:"url(".concat(n.image,")")},children:[Object(O.jsx)("img",{style:{display:"none"},src:n.image,alt:n.imageText}),Object(O.jsx)("div",{className:t.overlay}),Object(O.jsx)(d.a,{container:!0,children:Object(O.jsx)(d.a,{item:!0,md:6,children:Object(O.jsxs)("div",{className:t.mainFeaturedPostContent,children:[Object(O.jsx)(g.a,{component:"h1",variant:"h3",color:"inherit",gutterBottom:!0,children:n.title}),Object(O.jsx)(g.a,{variant:"h5",color:"inherit",paragraph:!0,children:n.description}),Object(O.jsx)(x.a,{variant:"subtitle1",href:"#",children:n.linkText})]})})})]})}var y=n(106),k=n(113),w=n(107),C=n(108),B=n(114),I=i.a.createContext(),T=Object(l.a)({card:{display:"flex"},cardDetails:{flex:1},cardMedia:{width:160}});function S(e){var t=i.a.useContext(I).selectContent,n=T(),a=e.post;return Object(O.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(O.jsx)(k.a,{component:"a",onClick:function(){t(a.page)},children:Object(O.jsxs)(y.a,{className:n.card,children:[Object(O.jsx)("div",{className:n.cardDetails,children:Object(O.jsxs)(w.a,{children:[Object(O.jsx)(g.a,{component:"h2",variant:"h5",children:a.title}),Object(O.jsx)(g.a,{variant:"subtitle1",color:"textSecondary",children:a.date}),Object(O.jsx)(g.a,{variant:"subtitle1",paragraph:!0,children:a.description})]})}),Object(O.jsx)(B.a,{xsDown:!0,children:Object(O.jsx)(C.a,{className:n.cardMedia,image:a.image,title:a.imageTitle})})]})})})}var N=n(29),P=n(109),F=n(56),L=n(51),M=n(5),A={overrides:{h1:{component:g.a,props:{gutterBottom:!0,variant:"h5"}},h2:{component:g.a,props:{gutterBottom:!0,variant:"h6"}},h3:{component:g.a,props:{gutterBottom:!0,variant:"subtitle1"}},h4:{component:g.a,props:{gutterBottom:!0,variant:"caption",paragraph:!0}},p:{component:g.a,props:{paragraph:!0}},a:{component:x.a},li:{component:Object(M.a)((function(e){return{listItem:{marginTop:e.spacing(1)}}}))((function(e){var t=e.classes,n=Object(F.a)(e,["classes"]);return Object(O.jsx)("li",{className:t.listItem,children:Object(O.jsx)(g.a,Object(N.a)({component:"span"},n))})}))}}};function D(e){return Object(O.jsx)(L.a,Object(N.a)({options:A},e))}var W=Object(l.a)((function(e){return{markdown:Object(N.a)(Object(N.a)({},e.typography.body2),{},{padding:e.spacing(3,0)})}}));function H(e){var t=W(),n=e.posts,a=e.title;return Object(O.jsxs)(d.a,{item:!0,xs:12,md:8,children:[Object(O.jsx)(g.a,{variant:"h6",gutterBottom:!0,children:a}),Object(O.jsx)(P.a,{}),null===n||void 0===n?void 0:n.map((function(e){return Object(O.jsx)(D,{className:t.markdown,children:e},e.substring(0,40))}))]})}var G=Object(l.a)((function(e){return{sidebarAboutBox:{padding:e.spacing(2),backgroundColor:e.palette.grey[200]},sidebarSection:{marginTop:e.spacing(3)}}}));function U(e){var t=G(),n=e.description,a=e.social,i=e.title;return Object(O.jsxs)(d.a,{item:!0,xs:12,md:4,children:[Object(O.jsxs)(m.a,{elevation:0,className:t.sidebarAboutBox,children:[Object(O.jsx)(g.a,{variant:"h6",gutterBottom:!0,children:i}),Object(O.jsx)(g.a,{children:n})]}),Object(O.jsx)(g.a,{variant:"h6",gutterBottom:!0,className:t.sidebarSection,children:"Social"}),a.map((function(e){return Object(O.jsx)(x.a,{display:"block",variant:"body1",href:e.url,children:Object(O.jsxs)(d.a,{container:!0,direction:"row",spacing:1,alignItems:"center",children:[Object(O.jsx)(d.a,{item:!0,children:Object(O.jsx)(e.icon,{})}),Object(O.jsx)(d.a,{item:!0,children:e.name})]})},e)}))]})}var z=n(112),E=n(111),J=n(110),R=Object(l.a)((function(e){return{toolbar:{borderBottom:"1px solid ".concat(e.palette.divider)},toolbarTitle:{flex:1},toolbarSecondary:{justifyContent:"space-between",overflowX:"auto"},toolbarLink:{padding:e.spacing(1),flexShrink:0}}}));function _(e){var t=R(),n=e.title;return Object(O.jsxs)(i.a.Fragment,{children:[Object(O.jsx)(J.a,{className:t.toolbar,children:Object(O.jsx)(g.a,{component:"h2",variant:"h5",color:"inherit",align:"center",noWrap:!0,className:t.toolbarTitle,children:n})}),Object(O.jsx)("ul",{})]})}function Q(){return Object(O.jsxs)(g.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(O.jsx)(x.a,{color:"inherit",href:"https://material-ui.com/",children:"Markus Heiervang"})," ",(new Date).getFullYear()]})}var X=Object(l.a)((function(e){return{footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6,0)}}}));function Y(e){var t=X(),n=e.description,a=e.title;return Object(O.jsx)("footer",{className:t.footer,children:Object(O.jsxs)(E.a,{maxWidth:"lg",children:[Object(O.jsx)(g.a,{variant:"h6",align:"center",gutterBottom:!0,children:a}),Object(O.jsx)(g.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:n}),Object(O.jsx)(Q,{})]})})}function q(e){return Object(O.jsxs)(i.a.Fragment,{children:[Object(O.jsx)(z.a,{}),Object(O.jsxs)(E.a,{maxWidth:"lg",children:[Object(O.jsx)(_,{title:"Markus Heiervang",sections:[],href:"/"}),e.children]}),Object(O.jsx)(Y,{title:"What should I put here?",description:"I have no clue!"})]})}var K={title:"Welcome",description:"to my personal website",image:"earth.jpg",imgText:"main image description"},V={main:{title:"Blog",date:"",description:"The place where I share and discuss things I have recently learned",image:"blog.png",imageText:"Portrait",page:"main"},about:{title:"About me",date:"",description:"I am a Machine Learning enthusiast currently pursuing a masters degree at the University of Oslo ... ",image:"portrait.jpg",imageText:"Portrait",page:"about"},portfolio:{title:"Portfolio",date:"",description:"Click here to view all my published projects, code and more!",image:"projects.jpg",imageText:"Code",page:"portfolio"}},Z=["\n# Web page launch\n\nOnly time will tell if I'll ever publish something here\n"],$={title:"Useless sidebar",description:"This is a sidebar that I dont know if i'll ever use",archives:[{title:"March 2020",url:"#"}],social:[{name:"GitHub",url:"https://github.com/marksverdhei",icon:p.a},{name:"LinkedIn",url:"https://www.linkedin.com/in/markus-heiervang/",icon:u.a}]},ee=Object(l.a)((function(e){return{mainGrid:{marginTop:e.spacing(3)}}}));function te(e){switch(e){case"about":return Object(O.jsx)(H,{title:"About",posts:[]});case"portfolio":return Object(O.jsx)(H,{title:"Portfolio",posts:[]});default:return Object(O.jsx)(H,{title:"Blog",posts:Z})}}function ne(){var e=i.a.useState("main"),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object.keys(V).filter((function(e){return e!==n})).map((function(e){return V[e]})),c=ee(),o={selectedContent:a,selectContent:a};return Object(O.jsx)(q,{children:Object(O.jsx)(I.Provider,{value:o,children:Object(O.jsxs)("main",{children:[Object(O.jsx)(f,{post:K}),Object(O.jsx)(d.a,{container:!0,spacing:4,children:r.map((function(e){return Object(O.jsx)(S,{post:e},e.title)}))}),Object(O.jsxs)(d.a,{container:!0,spacing:5,className:c.mainGrid,children:[te(n),Object(O.jsx)(U,{title:$.title,description:$.description,archives:$.archives,social:$.social})]})]})})})}function ae(){return Object(O.jsx)(q,{children:Object(O.jsx)(g.a,{children:'Currently pursuing an MS in Machine Learning and Natural Language Processing @ the University of Oslo. Last spring, I completed my Bachelor in Computer Science. Though incredibly challenging, completing the degree over the course of 2 years was also a lot of fun. Next to studies i\'ve also taught the courses "Search Technology" and "Introduction to Object-oriented programming" Aspiring to become a data scientist, MLE, researcher or something along those lines Academic interests: Deep Learning, Question Answering systems, Summarization, Applied Machine Learning, Interdisciplinary Data Science, ML interpretability, High Performance Computing'})})}function ie(){return Object(O.jsx)(O.Fragment,{})}var re=n(115),ce=n(54),oe=n(7);function se(){return Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(ce.a,{children:Object(O.jsxs)(oe.c,{children:[Object(O.jsx)(oe.a,{path:"/about",children:Object(O.jsx)(ae,{})}),Object(O.jsx)(oe.a,{path:"/portfolio",children:Object(O.jsx)(ie,{})}),Object(O.jsx)(re.a,{children:Object(O.jsx)(oe.a,{path:"/",children:Object(O.jsx)(ne,{})})})]})})})}c.a.render(Object(O.jsx)(se,{}),document.getElementById("root")),o()}},[[72,1,2]]]);
//# sourceMappingURL=main.7da53924.chunk.js.map