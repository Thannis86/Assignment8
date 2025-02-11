06/02 4pm

Init upload. All wireframe and other bits will be in the planning folder

---

07/02 11am

Added wireframe and database plan

---

09/02 1pm

Created navbar. I decided to add this straight to the layout so it would be on every page

---

09/02 2pm

Started working on form on new post page. This is pretty easy, just like the one I made for last week's assignment pretty much.

I'm trying to separate the on submit function to a different file to keep it clean. The initial issue I had was that it wasn't rendering client side and I forgot I had to set it to do that, which I now have. Now I'm getting a weird error about PG (posted in discord).

I have tried moving the submit function directly to the form file, but it's now coming up with the error about it needing to be client side again.

I am dumb, it needed to be server side rendering. All is fine now.

After another slight issue where I forgot to add $3 to the formsubmit, the database is now connected and properly receiving information from the client.

I currently have an upload section for images, which I will probably try to figure out later if I have the time to do so.

---

09/02 5pm

I've sucessfully setup the posts page similar to how we setup things earlier this week. I've yet to start on the individual pages, but I have just noticed that I forgot the like count. Just gonna sneak that into the database. I'm also going to update the formsubmit because I know it doesn't like when it starts as 'null'.

It's definitely early, but I'm also working on the edit page. Everything was pretty easy to add, just add the post columns into the placeholders, all I need to figure out now is how to get the ID across to the updateForm file.

Taking a break from that I've started working on the like button. I'm attempting to do it in a similar way to how I did my assignment 7. However, there seems to be an issue with server side and client side stuff, so I'm just experimenting with a few different things.

---

09/02 7pm

For my like button I was intending to use it to figure out other aspects of the website, mostly the edit and the delete functions. I kept searching for an elegant solution, including using an arrow function in the onclick. Throughout my google searches I saw a dozen different options and none of them seemed to work. I did have an idea earlier to shove the button into a form, but the idea is ugly and I was hoping to avoid it. But currently, I have few other options.

PLEASE LET ME KNOW IF THERE IS A NEATER WAY TO HAVE DONE THIS

---

09/02 9pm

This update was relatively easy and my biggest difficulty came from the posts. When I had more than 1, I realised I had setup the divs wrap and the posts were overlapping. It took me a moment to figure out why. Essentially, I didn't have a div around the map, so when I was using grid area on the div inside the map, it would individually add every mapped element to the grid, so they would overlap. To combat this I just added a div around the map, then used that for the grid area.

I also worked on the edit form section. This part was quite easy, the only real difficulty came from the actual submission. If you didn't fill in all the boxes, it would put some of them as null. For the dropdown box it was an easy fix, but for the text boxes, not so much. I know that I can't add just a value to it normally because I tried that and it crashed. After some research however, I found I could add a default value that would automatically fill in the inputs.

Lastly I added the delete button function. This was pretty easy as it was a copy and paste of the like function that I struggled with earlier, just changing the SQL instead.

Second lastly, I adjusted the edit button to a Link directing to the edit for that post page.

---

09/02 10pm

In this final push before the deadline that I'm hoping to get an extension on due to personal circimstances, I have worked on the sort posts function. I have chosen to sort by the age of the post, using the ID as the reference point as it will always be in order of newest to oldest post by default.

I also started working on comments, but was unfortunately unable to get this finished in time. Currently I have created a comments page with a form and a function ready to be built.

---

This push will be my midnight rantings push where things have just sort of happened and I've not been keeping great track of it because I started at midnight and it's now 1:30am.

In this update, I finished my comments. I struggled with joining the comments to the posts and resorted to recreating the comments table to get them properly linked. Still not sure what the exact purpose is, but it's linked. Prior to that, I created the comments form and included a section on it to also add the post ID to the comments table. That was a little weird and there were a lot of errors, but it was mostly from my own missing of bits.

Now I've moved onto recreating the individual posts page and have setup a query to get comments based on the post page id. It's all come through fine, I just need to pretty it up at some point.

I'm getting some sleep but not going to push this yet as I'm waiting to see if I will get an extention. If I do, I will also add a like button to my comments and an edit feature. Depending on the time I get, I may also go for the catergory stretch goal too.

---

10/02 8pm

This update is basically cleaning the UI. There's not much new to it, just sorting through the CSS and better showing things and to generally look better and be better for the user experience.

I also added the edit comments feature. This was basically a copy and post of the edit post function, just shifting a few things around. The only problem I had was with the routes and next not liking me putting an [id] inside another even with comments seperating it. So I created a new route in the main root for this and directed the link to edit the comment to that.

I did setup vaguely to categorise the posts, however, including class today I've spent 8 hours staring at this screen with 10 hours staring yesterday, so I'm happy to call it a day at 2/3 stretch goals.

Vercel still hasn't got back to me on creating an account, but as soon as it works, I'll add the link here.

---

11/02 8am

Vercel link

https://assignment8-sand.vercel.app

---

Requirements

Completed requirements
🎯 Display all posts on the page, with an option to sort them in ascending or descending order.
🎯 Create a delete button on posts that allows users to delete the post from the database.
🎯 Add a redirect when a user creates a post to redirect them to the posts page.
🎯 Create a SQL schema for a posts table and a comments table, with the comments being connected to the posts table with a foreign key.
Please submit your database schema, as is mentioned in the submission instructions.
🎯 Create a form which saves comments to a dedicated comments table, with the comments being connected to the posts table with a foreign key.
🎯 Allow users to comment on individual posts in their dynamic routes. Comments should be associated with posts, and have a dynamic route (e.g. /posts/:postid).

Stretch Goals

🏹 Implement a select input (or similar mechanism) that allows users to categorise posts during creation, storing them in their own table in the database. Ensure appropriate routing for categories, with endpoints such as /categories and /categories/:id to enable users to browse and interact with posts by category.

Completed Stretch Goals
🏹 Create an edit functionality accessible via /posts/:id/edit, which pre-fills a form for post data. Create a working PUT route to update the post in the database.
🏹 Develop an edit comment feature accessible via /posts/:id/comments/:id/edit, which pre-fills a form for comment data. Create a working PUT route to update the comment in the database.
