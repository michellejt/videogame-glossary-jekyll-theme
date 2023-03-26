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

        divRandomPosts.append('<h3>Term of the day: <span>Term of the day</span></h3>');

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
                    divRandomPosts.append('<p><a href="' + postHREF + '">' + postTitle + '</a></p> <p><a href="' + postContent + '"></p>');
                }
                else 
                {
                    divRandomPosts.append('<p><a href="' + postHREF + '">' + postTitle + '</a></p> <p><a href="' + postContent + '"></p> <hr />');
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

