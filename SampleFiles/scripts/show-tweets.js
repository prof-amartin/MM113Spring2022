console.log(tweets)
const tweet1 = () => {
    //console.log(tweets.statuses[0])
    document.querySelector('#tweet3 .message').innerHTML = tweets.statuses[0].text
    document.querySelector('#tweet3 .username').innerHTML = tweets.statuses[0].user.screen_name
    document.querySelector('#tweet3 .date').innerHTML = tweets.statuses[0].created_at
}

const tweet2 = () => {
    //TODO: output the contents of the second tweet below the first one:

    document.querySelector('#tweet2 .message').innerHTML = tweets.statuses[1].text
    document.querySelector('#tweet2 .username').innerHTML = tweets.statuses[1].user.screen_name
    document.querySelector('#tweet2 .date').innerHTML = tweets.statuses[1].created_at

}

const tweet3 = () => {
    //TODO: output the contents of the third tweet below the second one:
    document.querySelector('#tweet1 .message').innerHTML = tweets.statuses[2].text
    document.querySelector('#tweet1 .username').innerHTML = tweets.statuses[2].user.screen_name
    document.querySelector('#tweet1 .date').innerHTML = tweets.statuses[2].created_at
}

const showAll = () => {
    //https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
    var arrayLength = tweets.statuses.length;
    console.log(arrayLength)
    for (var i = 0; i < arrayLength; i++) {
      //creates the div container variable that is the parent
      newDiv = document.createElement('div')
      //div container variable with class
      newDiv.className = "twitterClassOne"
      //TextNode objects contain only text content without any HTML or XML markup.
      
      var textWrapper = document.createElement('div');
        textWrapper.className = "textClass"
      
      var textObject = document.createTextNode(tweets.statuses[i].text)
      textWrapper.appendChild(textObject);
      //
      
      var userWrapper = document.createElement('div');
      userWrapper.className = "UserClass"
      
      var userObject = document.createTextNode(tweets.statuses[i].user.screen_name)
      userWrapper.appendChild(userObject);

        newDiv.appendChild(userWrapper);
        newDiv.appendChild(textWrapper);
      //newDiv.innerHTML =  userWrapper.outerHTML +  textWrapper.outerHTML
      document.getElementById('all').appendChild(newDiv)

    }

}
