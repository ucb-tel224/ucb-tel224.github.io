(function(){
	window.addEventListener("load",function(){
		var a,b;
		if(document.body.getElementsByTagNameNS("http://www.w3.org/1998/Math/MathML","math")[0]
			&&(
				document.body.insertAdjacentHTML("afterbegin","<div style='border: 0; clip: rect(0 0 0 0); height: 1px; margin: -1px; overflow: hidden; padding: 0; position: absolute; width: 1px;'><math xmlns='http://www.w3.org/1998/Math/MathML'><mpadded height='23px' width='77px'></mpadded></math></div>"),
				b=document.body.firstChild,
				a=b.firstChild.firstChild.getBoundingClientRect(),
				document.body.removeChild(b),
				1<Math.abs(a.height-23)||1<Math.abs(a.width-77)
			)
		)
			a=document.createElement("script"),
			a.src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=MML_HTMLorMML",
			document.head.appendChild(a)
	})
})();
