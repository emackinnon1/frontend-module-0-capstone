# Chapter 7 questions  
## 1.  If you're using an input element in a form, what attribute controls the behavior of that input?  
The method attribute controls the behavior.  It will either be "get" or "push". Get is used to add the values from the form to the end of the URL specified in the action attribute. The post method sends the data in HTTP headers.  
## 2.  What element is used to create a dropdown list?  
A drop down list can be created with the <select> element, along with the <option> elements to denote what choices you would like the user to have.  
## 3.  If you're using an input element to send form data to a server, what should the `type` attribute be set to?  
The type should be set to "submit" in this instance.  
## 4.  What element is used to group similar form items together?  
The <fieldset> element is used to group separate but similar forms together.  

# Chapter 13 and 15 questions  
## 1.  Describe the differences between border, margin, and padding.  
Border is what separates the edge of one box from another, while margin is the space that sits outside of a border. Padding is the space between the content and the border of a box.  
## 2.  For a CSS rule `padding: 1px 2px 5px 10px`, what sides of the content box does each pixel value correspond to?  
top=1px, right=2px, bottom=5px, left=10px  
## 3.  Describe the difference between block-level and inline elements.  
Block-level elements are usually structural and take up the width of their parent element, while inline elements tend to be text-based and do not start on new lines as long as there is enough room for them in their parent element. They also cannot have top or bottom margins, or width or height properties.  
## 4.  What is the role of fixed positioning, and why is z-index important in the scenario of using fixed positioning?  
Fixed positioning can let you position an element in relation to the browser window instead of its containing element.  This is useful for navigation menus or something else you would like the user to have in their viewport no matter how far down the page they have scrolled. The z-index property allows you to control which boxes appear on top.  
## 5.  What is the difference between a fixed and liquid layout?  
Fixed width layouts do not adjust to the size of their browser window because of their tendency to have measurements given in pixels, while liquid layouts adjust due to their percentage-measured layouts.

https://codepen.io/emackinnon1/pen/zYxoKWV
