(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{10:function(t,e,n){t.exports=n(17)},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a,r=n(0),c=n.n(r),o=n(5),s=n.n(o),u=n(1),i=n.n(u),l=n(2),d=n(6),f=n(7),p=n(9),m=n(8);n(3);function v(t){var e=t.picture;return c.a.createElement("img",{className:"picture",src:e})}function h(t){var e=t.picture;return c.a.createElement("img",{className:"picture",src:e})}function g(t){var e=t.votes;return c.a.createElement("h3",{className:"voteCount"},e)}var V=function(t){Object(p.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(d.a)(this,n),(a=e.call(this,t)).state={catPictureURL:[],dogPictureURL:[],catVotes:0,dogVotes:0},a}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var t=Object(l.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(a=this).loadNewPictures(),t.t0=a,t.next=5,this.getVotes("cat");case 5:return t.t1=t.sent,t.next=8,this.getVotes("dog");case 8:t.t2=t.sent,t.t3={catVotes:t.t1,dogVotes:t.t2},t.t0.setState.call(t.t0,t.t3);case 11:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"loadNewPictures",value:function(){var t=Object(l.a)(i.a.mark((function t(){var e,n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://aws.random.cat/meow").then((function(t){return t.json()})).then((function(t){e=t.file}));case 2:r=!1;case 3:if(r){t.next=8;break}return t.next=6,fetch("https://random.dog/woof.json").then((function(t){return t.json()})).then((function(t){var e=t.url.substring(t.url.length-4,t.url.length).toLowerCase();".jpg"!==e&&".png"!==e||(r=!0,n=t.url)}));case 6:t.next=3;break;case 8:a.setState({catPictureURL:e,dogPictureURL:n});case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"getVotes",value:function(){var t=Object(l.a)(i.a.mark((function t(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"http://dreamlo.com/lb/5ec2880d0cf2aa0c28423922/json",t.next=3,fetch("http://dreamlo.com/lb/5ec2880d0cf2aa0c28423922/json").then((function(t){return t.json()})).then((function(t){if(null==t.dreamlo.leaderboard)a.setVotes(e,0),n=0;else{var r=t.dreamlo.leaderboard.entry;r=r.filter((function(t){return t.name==e})),n=Number(r[0].score)}}));case 3:return t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"setVotes",value:function(t,e){fetch("http://dreamlo.com/lb/rB0P6BG4_0y6ODkGEkwiBQyiBo5yCdykaB3uR9hY74_g/add/"+t+"/"+e)}},{key:"updateVotes",value:function(){var t=Object(l.a)(i.a.mark((function t(){var e,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.getVotes("cat");case 2:return e=t.sent,t.next=5,a.getVotes("dog");case 5:n=t.sent,a.setState({catVotes:e,dogVotes:n});case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"addVoteCat",value:function(){var t=Object(l.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.getVotes("cat");case 2:e=t.sent,e++,a.setVotes("cat",e),a.updateVotes(),a.loadNewPictures();case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"addVoteDog",value:function(){var t=Object(l.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.getVotes("dog");case 2:e=t.sent,e++,a.setVotes("dog",e),a.updateVotes(),a.loadNewPictures();case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.catPictureURL,n=t.dogPictureURL,a=t.catVotes,r=t.dogVotes;return c.a.createElement("div",{className:"background"},c.a.createElement("div",{className:"pictures"},c.a.createElement(v,{picture:e}),c.a.createElement(h,{picture:n})),c.a.createElement("div",{className:"voteBtns"},c.a.createElement("button",{className:"voteBtn",onClick:this.addVoteCat},"cat"),c.a.createElement("button",{className:"voteBtn",onClick:this.addVoteDog},"dog")),c.a.createElement("div",{className:"voteCounts"},c.a.createElement(g,{votes:a}),c.a.createElement(g,{votes:r})))}}]),n}(r.Component);n(16);s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(V,null)),document.getElementById("root"))},3:function(t,e,n){}},[[10,1,2]]]);
//# sourceMappingURL=main.68b5193e.chunk.js.map