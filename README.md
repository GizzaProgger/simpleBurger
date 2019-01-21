# simpleBurger
This javascript code allows you to create a Burger menu is very simple and fast

First: You should download burger.js and burger.css, and include this files to your project
Second: Writing settings.
  Example:
  ``
  var settings = {
    windowSize: 720,
    elem: '.menu'
  }
  ``
Third: Init simpleBurger. new Burger(settings)

Full list of settings: windowSize - at what resolution of the window should replace the standard menu with Burgers
                       elem - class or ID of the menu you want to replace with a Burger
                       srcImg - url burger icon
                       inElem - class or id the element in which you want to insert the icon Burger

You can change styles burger menu in burger.css

Example:
  ```html
      <header>
        <ul>
          <li><a href="somelink 1">some text 1</a></li>
          <li><a href="somelink 2">some text 2</a></li>
          <li><a href="somelink 3">some text 3</a></li>
          <li><a href="somelink 4">some text 4</a></li>
          <li><a href="somelink 5">some text 5</a></li>
        </ul>
      </header>
  ```
    settings = {
      windowSize: 720 // Break point
      elem: 'ul' // Menu
      srcImg: 'https://image.flaticon.com/icons/svg/462/462998.svg' // Icon Burger
      inElem: 'header' // Place where to insert Burger button
    }
    burger = new Burger(settings);
