(window.webpackJsonpcalculator=window.webpackJsonpcalculator||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(8),c=n.n(a),u=(n(14),n(15),n(2)),i=n(3),s=n(5),l=n(4),b=n(1),d=n(6),m=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).copyResult=n.copyResult.bind(Object(b.a)(n)),n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"copyResult",value:function(){var e=this.refs.screen;e.select(),e.setSelectionRange(0,99999),document.execCommand("copy")}},{key:"render",value:function(){return o.a.createElement("input",{readOnly:!0,ref:"screen",className:"Calculator-screen",value:this.props.result,onClick:this.copyResult})}}]),t}(o.a.Component),p=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Calculator-button",onClick:this.props.onClick},this.props.children)}}]),t}(o.a.Component),f=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).interpretKey=function(e){var t=e.key;switch(t){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case"0":n.inputNumber(t);break;case".":n.addDot();break;case"+":n.addAction(n.add);break;case"-":n.addAction(n.minus);break;case"*":n.addAction(n.multiply);break;case"/":n.addAction(n.divide);break;case"c":case"Escape":n.clearCalculator();break;case"Backspace":n.backSpace();break;case"Enter":n.addAction(null)}},n.clearCalculator=function(){n.props.setNewNumber(null),n.props.setOldNumber(0),n.setState({action:null})},n.backSpace=function(){if(null!=n.props.newNumber){var e=n.props.newNumber.toString().slice(0,-1);n.props.setNewNumber(""===e?null:e)}},n.addAction=function(e){if(null!==n.props.newNumber){var t=n.props.newNumber;n.state.action&&(t=n.state.action()),n.props.setNewNumber(null),n.props.setOldNumber(Number.parseFloat(Number.parseFloat(t).toFixed(10)))}n.setState({action:e})},n.addDot=function(){n.setState({addDot:!0})},n.divide=function(){return n.props.oldNumber/n.props.newNumber},n.multiply=function(){return n.props.oldNumber*n.props.newNumber},n.minus=function(){return n.props.oldNumber-n.props.newNumber},n.add=function(){return n.props.oldNumber+n.props.newNumber},n.inputNumber=n.inputNumber.bind(Object(b.a)(n)),n.state={action:null,addDot:!1},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.interpretKey)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.interpretKey)}},{key:"inputNumber",value:function(e){var t=0,n=this.props.newNumber;this.state.addDot&&(e="."+e,this.setState({addDot:!1})),t=null===n?e:n+e.toString(),this.props.setNewNumber(Number.parseFloat(t))}},{key:"render",value:function(){var e=this,t=[[{symbol:7,fn:function(){return e.inputNumber(7)}},{symbol:8,fn:function(){return e.inputNumber(8)}},{symbol:9,fn:function(){return e.inputNumber(9)}},{symbol:"\xf7",fn:function(){return e.addAction(e.divide)}},{symbol:4,fn:function(){return e.inputNumber(4)}},{symbol:5,fn:function(){return e.inputNumber(5)}},{symbol:6,fn:function(){return e.inputNumber(6)}},{symbol:"x",fn:function(){return e.addAction(e.multiply)}},{symbol:1,fn:function(){return e.inputNumber(1)}},{symbol:2,fn:function(){return e.inputNumber(2)}},{symbol:3,fn:function(){return e.inputNumber(3)}},{symbol:"-",fn:function(){return e.addAction(e.minus)}},{symbol:"c",fn:this.clearCalculator},{symbol:0,fn:function(){return e.inputNumber(0)}},{symbol:".",fn:this.addDot},{symbol:"+",fn:function(){return e.addAction(e.add)}}]];return o.a.createElement("div",{className:"Calculator-keyboard"},t.map(function(e){return e.map(function(e){var t=e.fn,n=e.symbol;return o.a.createElement(p,{key:n,onClick:t},n)})}))}}]),t}(o.a.Component),N=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={newNumber:null,oldNumber:0},n.setNewNumber=n.setNewNumber.bind(Object(b.a)(n)),n.setOldNumber=n.setOldNumber.bind(Object(b.a)(n)),n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"setNewNumber",value:function(e){this.setState({newNumber:e})}},{key:"setOldNumber",value:function(e){this.setState({oldNumber:e})}},{key:"render",value:function(){var e=this.state,t=e.oldNumber,n=e.newNumber,r=null===n?t:n;return o.a.createElement("div",{className:"Calculator"},o.a.createElement(m,{result:r}),o.a.createElement(f,{newNumber:this.state.newNumber,oldNumber:this.state.oldNumber,setNewNumber:this.setNewNumber,setOldNumber:this.setOldNumber}))}}]),t}(o.a.Component);var h=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h1",{className:"App-heading"},"Calculator"),o.a.createElement(N,null)))},v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(o.a.createElement(h,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-calculator",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/react-calculator","/service-worker.js");v?(!function(e,t){fetch(e).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):w(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):w(t,e)})}}()},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.680816ae.chunk.js.map