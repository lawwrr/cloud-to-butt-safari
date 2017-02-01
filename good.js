// I stole all this stuff from here: https://github.com/panicsteve/cloud-to-butt/blob/master/Source/content_script.js

walk(document.body);

function walk(node) {
	// I stole this function from here:
	// http://is.gd/mwZp7E
	var child, next;

	switch (node.nodeType) {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while (child) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;
		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)  {
	var v = textNode.nodeValue;

	v = v.replace(/\bTweet\b/g, "Good Post");
	v = v.replace(/\btweet\b/g, "good post");
	v = v.replace(/\bTweets\b/g, "Good Posts");
	v = v.replace(/\btweets\b/g, "good posts");

	textNode.nodeValue = v;
}
