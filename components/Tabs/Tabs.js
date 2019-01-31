
class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
     this.element = element;
    
    // Get the custom data attribute on the Link
     this.data = this.element.dataset.tabs;
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = this.element.querySelector(`.tabs-item[data-tab='${element.dataset.tab}']`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method on click
    element.addEventListener('click', () => this.select());

  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelector('.tabs-link');
    const linksSelected = document.querySelector('.tabs-links-selected');

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    //Array.from(links).forEach(this.element =>);

    // for (let i = 0; i < links.length; i ++){
    //   console.log(links[i]);
    // }

    // Add a class named "tabs-link-selected" to this link
    // this.element;
    
    // Call the select method on the item associated with this link

    console.log(this.links);

  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelector('.tabs-item');

    // Remove the class "tabs-item-selected" from each element
    
    // Add a class named "tabs-item-selected" to this element
    //this.element;
  }
}

//START HERE:

//- Select all classes named ".tabs-link" and assign that value to the links variable
let links = document.querySelectorAll('.tabs-link');

//- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList
//- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

links.forEach(element => new TabLink(element));





