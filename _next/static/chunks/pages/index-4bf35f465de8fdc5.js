(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(8325)}])},8325:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return f}});var r=o(5893),n=o(922),l=o.n(n);let a=e=>(0,r.jsxs)("div",{className:l().upper,children:[(0,r.jsxs)("div",{className:l().left,children:[" ",String(e.bombcount).padStart(3,"0")," "]}),(0,r.jsx)("button",{className:e.clearcount===e.bombcount2?l().clear:1===e.gameover?l().over:l().middle,onClick:e.resetboard}),(0,r.jsx)("div",{className:l().right,children:String(e.timer).padStart(3,"0")})]});var c=o(7294);let s=()=>{let[e,t]=(0,c.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),o=JSON.parse(JSON.stringify(e)),[r,n]=(0,c.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]);return{board:[[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1]],userInputs:e,bombMap:r,bombcount:10,setuserInputs:t,setBombMap:n,newInputs:o,directions:[[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1]]}},i=()=>{let{board:e,userInputs:t,bombMap:o,setuserInputs:r,setBombMap:n,newInputs:l,directions:a,bombcount:i}=s(),[u,d]=(0,c.useState)(0),_=i,f=(t,r,n)=>void 0!==e[t+n[0]]&&void 0!==e[r+n[1]]&&1===o[t+n[0]][r+n[1]],b=(t,o,r)=>void 0!==e[t+r[0]]&&void 0!==e[o+r[1]]&&-1===e[t+r[0]][o+r[1]]&&11!==e[t][o],p=(t,o,r)=>{if(0===r)for(let r of a)e[t][o]=0,b(t,o,r)&&m(t+r[0],o+r[1]);else e[t][o]=r},m=(t,o)=>{let r=0;for(let e of a)f(t,o,e)&&r++;11!==e[t][o]&&p(t,o,r)},v=0,x=0,h=()=>{for(let t=0;t<9;t++)for(let r=0;r<9;r++)1===o[t][r]&&(e[t][r]=11,v=1)},g=e=>{for(let t=0;t<9;t++)for(let o=0;o<9;o++)e(t,o)};g((t,o)=>{(-1===e[t][o]||10===e[t][o]||9===e[t][o])&&x++});let N=(r,n)=>{if(1===t[r][n]){if(1===o[r][n]){h();return}m(r,n)}else 2===t[r][n]?(e[r][n]=10,_--):3===t[r][n]&&(e[r][n]=9)};g(N);let j=(t,r)=>{1===o[t][r]&&(e[t][r]=10)};x===_&&g(j);let S=(e,o,n)=>{let l=[...t];0===n?l[e][o]=2:2===n?l[e][o]=3:3===n&&(l[e][o]=0),r(l)},C=(e,t)=>{let r=0;for(;r<i;){let l=Math.floor(Math.random()*o.length),a=Math.floor(Math.random()*o[0].length);if(1!==o[a][l]&&"".concat(a).concat(l)!=="".concat(e).concat(t)){let e=[...o];e[a][l]=1,r++,n(e)}}console.log("一クリ目",e,t),d(0)},k=(e,o)=>{0===w&&C(e,o);let n=[...t];n[e][o]=1,r(n)},E=(e,o,n)=>{if(console.log("押されている"),2===n.button){n.preventDefault();let t=l[e][o];S(e,o,t)}else 0===t[e][o]&&(0===w&&k(e,o),l[e][o]=1,r(l))},w=0;for(let e=0;e<9;e++)for(let t=0;t<9;t++)1===o[e][t]&&w++;let M=()=>{for(let r=0;r<9;r++)for(let n=0;n<9;n++)e[r][n]=-1,t[r][n]=0,o[r][n]=0;w=0,d(0)};return console.log("board"),console.table(e),console.log("bombMap"),console.table(o),console.log("userInputs"),console.table(t),(0,c.useEffect)(()=>{let e;return w>0&&x!==_&&0===v&&(e=setInterval(()=>{d(e=>e+1)},1e3)),()=>clearInterval(e)},[w,x,i,_,v]),{clearcount:x,gameover:v,timer:u,onClick:E,setTimer:d,bombcount2:_,resetboard:M,board:e}};var u=o(2729),d=o.n(u);let _=()=>{let{bombcount:e}=s(),{clearcount:t,gameover:o,timer:n,onClick:l,bombcount2:c,resetboard:u,board:_}=i();return console.log("return前"),console.table(_),(0,r.jsx)("div",{className:d().container,children:(0,r.jsxs)("div",{className:d().boardboard,children:[(0,r.jsx)(a,{bombcount:e,clearcount:t,bombcount2:c,gameover:o,resetboard:u,timer:n}),(0,r.jsx)("div",{className:d().board,children:_.map((e,t)=>e.map((e,o)=>(0,r.jsx)("div",{className:-1===e?d().stone:d().number,style:e>=0?{backgroundPosition:"".concat(-((e-1)*55.83),"px 0")}:{},onClick:e=>l(t,o,e),onContextMenu:e=>l(t,o,e)},"".concat(t,"-").concat(o))))})]})})};var f=_},922:function(e){e.exports={upper:"upper_upper__IzObB",left:"upper_left___0CJT",middle:"upper_middle__v02Jx",right:"upper_right__txySA",over:"upper_over__8CKvu",clear:"upper_clear__B4cC8"}},2729:function(e){e.exports={container:"index_container__gnN1f",boardboard:"index_boardboard__YE2Hj",board:"index_board__2d6xe",cell:"index_cell__3W8ZQ",number:"index_number__l0yF_",stone:"index_stone__oeDmm"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);