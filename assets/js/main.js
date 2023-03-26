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
        var postContent = posts[randomIndex].content;

        var divRandomPosts = $("#random_posts");

        divRandomPosts.append('<h3>Term of the day: <span><a href="' + postHREF + '">' + postTitle + '</a></span></h3>');

        while (counter < numberOfPosts)
        {
            var randomIndex = Math.floor(Math.random() * postsCount);

            if (randomIndexUsed.indexOf(randomIndex) == "-1")
            {
                var postHREF = posts[randomIndex].url;
                var postTitle = posts[randomIndex].title;
                var postContent = posts[randomIndex].content;


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

$(document).ready(function() {
  generateRandomPosts()
});

