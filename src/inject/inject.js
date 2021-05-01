// this is the code which will be injected into a given page...

(function() {

	document.addEventListener('DOMContentLoaded', function(){ 
		// just place a div at top right
		const urlParams = new URLSearchParams(window.location.search);
		
		const sku = urlParams.get('sku');
		const asin = urlParams.get('asin');
		const productType = urlParams.get('productType');

		const href = new URL("https://sellercentral.amazon.com/abis/ajax/edit");

		href.searchParams.append("sku", sku);
		href.searchParams.append("productType", productType);
		href.searchParams.append("asin", asin);

		const anchor = document.createElement('a');
		anchor.style.position = 'fixed';
		anchor.style.top = 0;
		anchor.style.right = "30px";
		anchor.style.zIndex = 100000;
		anchor.style.borderRadius = "0 0 6px 6px"
    anchor.style.background = "#002f36";
    anchor.style.color = "#fff";
    anchor.style.fontSize = "11px";
    anchor.style.height = "26px";
    anchor.style.lineHeight = "24px";
    anchor.style.padding = "0 10px";
    anchor.style.textDecoration = "none";
    anchor.style.fontWeight = "bold";
    anchor.style.borderTop = 0;
    anchor.style.fontFamily = "'Amazon Ember', sans-serif";

		anchor.textContent = 'GET CODE';
		anchor.setAttribute('href', href.href)
		anchor.setAttribute('target', '_blank');
		anchor.setAttribute('class',' button');

		document.body.appendChild(anchor);

	}, false);

})();