## Chapter 3 and 4 questions

#### 1. There are three main types of lists in HTML: ordered, unordered, and definition. What are their differences?  
Ordered lists are numbered, unordered lists usually have bullet points or some other symbol in front of each item, and definition lists are terms and their definitions.
#### 2. What is the basic structure of an element used to link to another website?  
An <a> and a closing </a> tag with an href attribute in the opening tag.
#### 3. What attribute should you include in a link to open a new tab when the link is clicked?  
You can use the target attribute.  The value should be `_blank`.
####  4. How do you link to a specific part of the same page?  
First you must create an element id for the portion of the page you would like to link to. When that is done, the href attribute should look like: `href="#elementID"`

## Chapter 10, 11 and 12 questions

#### 1. What is the purpose of CSS?  
CSS allows you to apply rules that govern the appearance of HTML elements.  
#### 2. What does CSS stand for? What does cascading mean in this case?  
Cascading Style Sheets. "Cascading" comes from the priority rules that determine which style rules apply if more than one rule matches a particular element.  
#### 3. What is the basic structure of a CSS rule?  
The basic structure of a CSS rule consists of a selector and a declaration that is used to specify the element that the rule applies to. The declaration determines how the selector should be styled. The declaration can be further broken down into a property and its associated value.  Properties are the specific aspects of the element like color, font or margin and the value is the actual setting you choose to set the property to.  
#### 4. How do you link a CSS stylesheet to your HTML document?  
You should use a <link> element in the HTML document of the webpage.  It will have an href attribute with the path of the CSS file, a type attribute that tells what type of document the file in the href attribute is, and an rel attribute which tells the relationship of the HTML page and the file it is linked to.  
#### 5. When is it useful to use external stylesheets as opposed to using internal CSS?  
When an author wants to build a site with more than one page that will have the same styling, it is more useful to have an external CSS file.  That way you can alter the one CSS file and not each individual HTML page with internal styling if you need to make changes.  
#### 6. Describe what a color hex code is.  
These are six-digit codes that start with a "#".  Different combination of digits represent different colors.  
#### 7. What are the three parts of an HSL color property?  
Hue (an angle between o and 360 degrees), saturation (a percentage that represents the intensity of a color), and lightness (expressed as percentage between 0% and 100% representing the color space's brightness).  
#### 8. In the world of typeface, what are the three main categories of fonts? What are the differences between them?  
Serif, sans-serif, and monospace. Serif has little extra details on the letters, sans-serif do not have the details and have straight ends to the letters. Monospace fonts have the same width, no matter the letter or character or symbol.  
#### 9. When specifying font-size, what are the main three units used?  
Pixels allow for very precise control over how much space their text will take up. Default size of text in different HTML elements can change according to a percentage.  If the default size of 16px for an element is given a font-size value of 50%, it will be 8px in size. An em is the width of a letter "m", and ems can change text size relative to the parent element.

https://codepen.io/emackinnon1/pen/zYxoKWV
