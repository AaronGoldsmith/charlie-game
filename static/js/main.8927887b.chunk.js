(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"charlie1",image:"/assets/images/charlie1.jpg"},{id:2,name:"charlie2",image:"/assets/images/charlie2.jpg"},{id:3,name:"charlie3",image:"/assets/images/charlie3.jpg"},{id:4,name:"charlie4",image:"/assets/images/charlie4.jpg"},{id:5,name:"charlie5",image:"/assets/images/charlie5.jpg"},{id:6,name:"charlie6",image:"/assets/images/charlie6.jpg"},{id:7,name:"charlie7",image:"/assets/images/charlie7.jpg"},{id:8,name:"charlie8",image:"/src/assets/images/charlie8.jpg"},{id:9,name:"charlie9",image:"/assets/images/charlie9.jpg"},{id:10,name:"charlie10",image:"/assets/images/charlie10.jpg"},{id:11,name:"charlie11",image:"/assets/images/charlie11.jpg"},{id:12,name:"charlie12",image:"/assets/images/charlie12.jpg"}]},,,,,,function(e,a,t){e.exports=t.p+"static/media/charlie1.b2254210.jpg"},function(e,a,t){e.exports=t.p+"static/media/charlie2.b95d7efe.jpg"},function(e,a,t){e.exports=t.p+"static/media/charlie3.43d178ad.jpg"},function(e,a,t){e.exports=t.p+"static/media/charlie4.46114632.jpg"},function(e,a,t){e.exports=t.p+"static/media/charlie5.d249ff1b.jpg"},function(e,a,t){e.exports=t.p+"static/media/charlie6.1b504a7a.jpg"},function(e,a,t){e.exports=t.p+"static/media/charlie7.71fb8d5b.jpg"},function(e,a,t){e.exports=t.p+"static/media/charlie8.34c689fd.jpg"},function(e,a,t){e.exports=t.p+"static/media/charlie9.bc4058bd.jpg"},function(e,a,t){e.exports=t.p+"static/media/charlie10.dc502de9.jpg"},function(e,a,t){e.exports=t.p+"static/media/charlie11.17e1e938.jpg"},function(e,a,t){e.exports=t.p+"static/media/charlie12.31cf3e43.jpg"},,,function(e,a,t){e.exports=t(30)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),s=t(3),c=t.n(s),l=(t(27),t(4)),r=t(5),h=t(19),m=t(6),d=t(20),o=function(e){var a=e.size,t=e.children;return n.a.createElement("div",{className:a.split(" ").map(function(e){return"col-"+e}).join(" ")},t)},g=(t(28),function(e){var a=e.fluid,t=e.children;return n.a.createElement("div",{className:"wrapper container".concat(a?"-fluid":"")},t)}),p=function(e){var a=e.fluid,t=e.children;return n.a.createElement("div",{className:"py-3 row".concat(a?"-fluid":"")},t)},u=t(1),f=function(e){return n.a.createElement("div",null,n.a.createElement("nav",{className:"nav navbar navbar-lg bg-primary "},n.a.createElement("div",{className:"float-left"},n.a.createElement("h1",null,e.message)),n.a.createElement("div",{className:"float-right"},n.a.createElement("h2",null,"Score:  ",e.score),n.a.createElement("h2",null,"High Score:  ",e.highscore))))},E=t(7),k=t.n(E),j=t(8),C=t.n(j),v=t(9),b=t.n(v),x=t(10),w=t.n(x),A=t(11),I=t.n(A),N=t(12),y=t.n(N),O=t(13),S=t.n(O),z=t(14),B=t.n(z),J=t(15),M=t.n(J),W=t(16),q=t.n(W),G=t(17),H=t.n(G),T=t(18),$=t.n(T),D=(t(29),[k.a,C.a,b.a,w.a,I.a,y.a,S.a,B.a,M.a,q.a,H.a,$.a]),F=function(e){return n.a.createElement(o,{className:"mx-1 my-3",size:"md-3"},n.a.createElement("div",{className:"imgContent"},n.a.createElement("h3",{className:"helper"},e.id),n.a.createElement("img",{className:"square",onClick:e.handleClick,clicked:!1,id:e.id,src:D["".concat(e.id)-1],alt:"charlie"})))},K=function(e){function a(){var e,t;Object(l.a)(this,a);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(t=Object(h.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={AllImages:u,id:0,message:"Make a guess",score:0,highscore:0},t.handleClick=function(e){var a=e.target;e.clicked=!0,t.state.id===a.id?t.setState({message:"That's not right!",score:0}):t.setState({id:a.id,score:t.state.score+1,message:"Good Choice",highscore:t.state.score+1>t.state.highscore?t.state.score+1:t.state.highscore}),u.sort(function(){return.5-Math.random()})},t}return Object(d.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(f,{message:this.state.message,score:this.state.score,highscore:this.state.highscore}),n.a.createElement(g,{fluid:!0},n.a.createElement("div",{className:"mx-auto pt-4"},n.a.createElement(p,null,n.a.createElement(F,{id:this.state.AllImages[0].id,handleClick:this.handleClick}),n.a.createElement(F,{id:this.state.AllImages[1].id,handleClick:this.handleClick}),n.a.createElement(F,{id:this.state.AllImages[2].id,handleClick:this.handleClick}),n.a.createElement(F,{id:this.state.AllImages[3].id,handleClick:this.handleClick})),n.a.createElement(p,null,n.a.createElement(F,{id:this.state.AllImages[4].id,handleClick:this.handleClick}),n.a.createElement(F,{id:this.state.AllImages[5].id,handleClick:this.handleClick}),n.a.createElement(F,{id:this.state.AllImages[6].id,handleClick:this.handleClick}),n.a.createElement(F,{id:this.state.AllImages[7].id,handleClick:this.handleClick})),n.a.createElement(p,null,n.a.createElement(F,{id:this.state.AllImages[8].id,handleClick:this.handleClick}),n.a.createElement(F,{id:this.state.AllImages[9].id,handleClick:this.handleClick}),n.a.createElement(F,{id:this.state.AllImages[10].id,handleClick:this.handleClick}),n.a.createElement(F,{id:this.state.AllImages[11].id,handleClick:this.handleClick})))))}}]),a}(i.Component),L=function(){return n.a.createElement(K,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[21,1,2]]]);
//# sourceMappingURL=main.8927887b.chunk.js.map