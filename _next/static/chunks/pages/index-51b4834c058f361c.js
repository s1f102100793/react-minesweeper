(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(85)}])},85:function(e,t,o){"use strict";o.r(t);var n=o(5893),l=o(7294),r=o(2729),a=o.n(r);let i=(e,t)=>{let[o,r]=(0,l.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),i=10,s=i,c=JSON.parse(JSON.stringify(o)),[d,f]=(0,l.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),_=[[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1]],[u,b]=(0,l.useState)(0),m=[[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1]],p=(e,t)=>{let o=0;for(let n of m)void 0!==_[e+n[0]]&&void 0!==_[t+n[1]]&&1===d[e+n[0]][t+n[1]]&&o++;if(11!==_[e][t]){if(0===o)for(let o of m)_[e][t]=0,void 0!==_[e+o[0]]&&void 0!==_[t+o[1]]&&-1===_[e+o[0]][t+o[1]]&&11!==_[e][t]&&p(e+o[0],t+o[1]);else _[e][t]=o}},x=0,h=0;for(let e=0;e<9;e++)for(let t=0;t<9;t++){if(1===o[e][t]){if(1===d[e][t]){for(let e=0;e<9;e++)for(let t=0;t<9;t++)1===d[e][t]&&(_[e][t]=11,x=1);continue}p(e,t)}2===o[e][t]?(_[e][t]=10,i--):3===o[e][t]&&(_[e][t]=9)}for(let e=0;e<9;e++)for(let t=0;t<9;t++)(-1===_[e][t]||10===_[e][t]||9===_[e][t])&&console.log("clearcount",++h);if(h===s){for(let e=0;e<9;e++)for(let t=0;t<9;t++)1===d[e][t]&&(_[e][t]=10);alert("GameClear")}console.log("board"),console.table(_),console.log("bombMap"),console.table(d),console.log("userInputs"),console.table(o);let v=0;for(let e=0;e<9;e++)for(let t=0;t<9;t++)1===d[e][t]&&v++;let g=(e,t,n)=>{if(2===n.button){n.preventDefault();let l=[...o],a=l[e][t];0===a?l[e][t]=2:2===a?l[e][t]=3:3===a&&(l[e][t]=0),r(l)}else if(0===o[e][t]){if(0===v){let o=0;for(;o<i;){let n=Math.floor(Math.random()*d.length),l=Math.floor(Math.random()*d[0].length);if(1!==d[l][n]&&"".concat(l).concat(n)!=="".concat(e).concat(t)){let e=[...d];e[l][n]=1,o++,f(e)}}console.log("一クリ目",e,t),b(0)}c[e][t]=1,r(c)}};return(0,l.useEffect)(()=>{let e;return v>0&&h!==s&&0===x&&(e=setInterval(()=>{b(e=>e+1)},1e3)),()=>clearInterval(e)},[v,h,i,s,x]),(0,n.jsx)("div",{className:a().container,children:(0,n.jsxs)("div",{className:a().boardboard,children:[(0,n.jsxs)("div",{className:a().upper,children:[(0,n.jsxs)("div",{className:a().left,children:[" ",String(i).padStart(3,"0")," "]}),(0,n.jsx)("div",{className:a().middle}),(0,n.jsx)("div",{className:a().right,children:String(u).padStart(3,"0")})]}),(0,n.jsx)("div",{className:a().board,children:_.map((e,t)=>e.map((e,o)=>(0,n.jsx)("div",{className:-1===e?a().stone:a().number,style:e>=0?{backgroundPosition:"".concat(-((e-1)*55.83),"px 0")}:{},onClick:e=>g(t,o,e),onContextMenu:e=>g(t,o,e)},"".concat(t,"-").concat(o))))})]})})};t.default=i},2729:function(e){e.exports={container:"index_container__gnN1f",boardboard:"index_boardboard__YE2Hj",board:"index_board__2d6xe",upper:"index_upper__5YRwV",left:"index_left__OQaUt",middle:"index_middle__lippZ",right:"index_right__Kv8ge",cell:"index_cell__3W8ZQ",number:"index_number__l0yF_",stone:"index_stone__oeDmm"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);