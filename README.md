# Lab-5-ARSW

# Authors

- ## Natalia Durán
- ## Miguel Rivera

# Compile and run instructions

To download the project, we must open a cmd terminal and go to any directory, then we write the next code:

```$ git clone https://github.com/migue1994/Lab-5-ARSW.git```

After that, the project will be dowloaded in the directory where we are in.
To execute the project, write the code

```$ gradle runBoot```

And we go to the localhost address in our browser. There will be the main page of the web application where we can enter the name of any author and it displays a list with the name of all blueprints available, next to a button that allows us to draw the points of the blueprint in the canvas.

# Fronted views

After to create the directory that contains the javascript files, we've created the next index.html file:

![](https://github.com/migue1994/Lab-5-ARSW/blob/master/src/main/resources/img/formulario.PNG)

The code shown above belongs to a form that contains an input and a button, where we can query any author in as long as it is in the apimok.js file.

Once we do the query, a table will be show with the logs of the blueprints names and the number of points that owns. The code bellow correspond to the html block that makes the table.

![tablaHtml](https://github.com/migue1994/Lab-5-ARSW/blob/master/src/main/resources/img/tabla_html.PNG)

# Fronted Logic

Once we've copied the aplimock file to the js folder and put this files as resources in the html page, we created the javascript functions that allow us to perform the queries, this file looks as follows.

![capturaJs](https://github.com/migue1994/Lab-5-ARSW/blob/master/src/main/resources/img/capturaJs.PNG)

In the image above we can see the getPansByName function and getBlueprintsByNameAndAuthor function, wich use the functions contained in the apimock.js file, to execute the callbacks and call other function as follows

![tablaJs](https://github.com/migue1994/Lab-5-ARSW/blob/master/src/main/resources/img/tableJs.PNG)

The above code allows update the html table through a async method, wich allow modify the table without reload the page

That code of the table, has a block that contains a button wich calls a function that makes a canvas where the points of the blueprint are displayed in, this function is show in the bellow image

![canvasJs](https://github.com/migue1994/Lab-5-ARSW/blob/master/src/main/resources/img/canvasJs.PNG)
