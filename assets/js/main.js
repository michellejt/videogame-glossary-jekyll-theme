/****************/
function modeSwitch() {
  const element = document.body;
  element.classList.toggle("dark-mode");
}
/****************/
function generateRandomPosts()
{
    $.getJSON("/assets/random.json", function(data) {
        console.log("[random.json loaded for random posts]");

        var postsCount = data.length;
        var posts = data;

        var randomIndexUsed = [];
        var counter = 0;
        var numberOfPosts = 1;
        
        var divRandomPosts = $("#random_posts");        

        console.log(posts)

        while (counter < numberOfPosts)
        {
            var randomIndex = Math.floor(Math.random() * postsCount);

            var postHREF = posts[randomIndex].url;
            var showContent = posts[randomIndex].show


            if ( showContent === "show" && randomIndexUsed.indexOf(randomIndex) == "-1")
            {
   
                var postTitle = posts[randomIndex].title;
                var postContent = posts[randomIndex].content;
                divRandomPosts.append('<h3>Term of the day: <span><a href="' + postHREF + '">' + postTitle + '</a></span></h3>');

                if (counter == (numberOfPosts - 1))
                {
                    divRandomPosts.append('<p> '+ postContent +' </p>');
                }
                else 
                {
                    divRandomPosts.append('<p> '+ postContent +' </p>');
                }

                randomIndexUsed.push(randomIndex);

                counter++;
            }
        }
    });
}

/* var intervalId = window.setInterval(function() {
    generateRandomPosts()
}, 5000) */

$(document).ready(function() {
  generateRandomPosts()
}); 

//loads after 2 seconds
/* $(document).ready(function() {
    setTimeout(generateRandomPosts, 2000);
  }); */
  

