# Homework 4: Github and the DOM

> - Due date: March 20th 11:59pm
> - To submit: See assignment explanation

## PART I: SETUP & REVIEW

### 1. Fork and Clone the homework from GitHub

Fork the following file on github in your account: prof-amartin/MM113Spring2022.git

Then, open the Terminal:

```

$ cd #put the path to your local foler here
$ git clone YourCloningURL
$ ls #list the files
$ open index.html #will open index.html in your default browser
```

Or use Github Desktop to fork and pull the files. Github desktop is an easy alternative to the Command Line Interface
https://desktop.github.com/

### 2. VSCode-access Github from left menu

- VsCode: https://visualstudio.github.com/
- Brackets: Brackets Git

### 3. If you would like, review information on DOM selectors at the following URLS:

[document.getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

[document.querySelectory](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

## PART II: MAKE CHANGES TO MAIN.JS

### 1. Modifying InnerHTML

Update the **_modifyText_** function so that it:

- Changes the text of message2 to be the message of the StarTrekTweet object
- Changes the text of link2 to be the name from the StarTrekTweet object
- Changes the text of message 2 class to be the handle from the StarTrekTweet object

### 2. Modifying Attributes: Part I

Update the **_changeLinkAndImageAttributes_** function so that it:

- Sets the href attribute for link1 to point to the first element in the links array
- Sets the href attribute for link2 to point to the second element in the links array
- Sets the src attribute for the Ohlone image to point to the third element in the links array

### 3. Modifying Attributes: Part II

Update the **_changeClassAttribute_** function so that it replaces the “tweet” class with the “tweet-pink” class for the two tweets.

### 4. Appending Elements

Update the appendElements function so that it adds the following elements to the bottom of tweet1:

- An "a" element (a link) that links to the ohlone college website (http://www.ohlone.edu) and has a link text that say "Intro to JavaScript."
- An "img" element (an image) that points to an image of your choice, symbolizing something about the course.

### 5. EXTRA CREDIT 1 (Recommended if you have time): Manipulating the DOM Using Data

To try a slightly more complicated example, open using_data.html and the tweet-data.js files, and:

- Complete the tweet2() function, using tweet1() as a model
- Complete the tweet3() function

### 6. EXTRA CREDIT 2: Adding Details & Adding Loops

- Add more HTML and JavaScript to output more Tweet details
- Make a loop to output all of the Tweets (if you are familiar w/loops)

## PART III: SUBMIT

You may submit the homework in one of two ways:

### 1. Using GitHub:

- Commit your updated files to your local repo
- Push your local commit to a remote repository that you create
- Paste a link to Canvas

\- OR -

### 2. Through Canvas:

Zip all of your files and upload to Canvas
