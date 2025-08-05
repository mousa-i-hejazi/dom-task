//task 1 :

//Starting from document.body, write code that logs (in order):

//The tag name of the last element child of
//, using only navigation properties (no query selectors).
console.log(document.body.lastElementChild.tagName);

//The number of element children in (not text nodes).
console.log(document.body.children.length);

//The difference in length between childNodes and children of. Explain why they differ.
console.log(document.body.childNodes.length - document.body.children.length);
//الفرق بينهم :
//childNodes : بتحسب النصوص والمسافات
//يعني
//childNodes: elements + text nodes
//children: elements

//Determine:
//What is the nodeType and nodeName of the first node in document.body.childNodes?
//nodeType : text node
//nodeName : #text

//Is the first paragraph a sibling of the second, or a descendant?
//The first paragraph is a sibling of the second one and they are both children of the <section> element

//Twist:
//Can you find any unexpected text nodes in the DOM structure? Log them and explain their origin.
//childNodesبتظهر لما نستخدم ال html tagsناتجة عن الفراغات (الاسطر الجديدة والمسافات) بين ال unexpected text nodesال
console.log(document.body.childNodes);
//htmlومصدرها هو المسافات بال text قيمتها Node Listبتظهر في ال

//tast 2 :

const card = document.createElement("div");
card.className = "card";
card.dataset.role = "admin";
document.body.append(card);
const heading = document.createElement("h2");
heading.textContent = "Access Panel";
card.append(heading);
const paragraph = document.createElement("p");
paragraph.textContent = "Authenticated";
card.append(paragraph);

//Log the value of the data-role as a JS property, not via .getAttribute.
console.log(card.dataset.role);

//Change the paragraph text to "Welcome back, Admin" using a property, not a method.
paragraph.textContent = "Welcome back, Admin";

//Add two classes to the div: "authenticated" and "highlight" using classList.
card.classList.add("authenticated", "highlight");

//Challenge:
//Use classList.contains() to verify that "card" still exists, and remove it while keeping the others.
if (card.classList.contains("card")) {
  card.classList.remove("card");
}
