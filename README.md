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

Requirements

🎯 Display all posts on the page, with an option to sort them in ascending or descending order.
🎯 Create a SQL schema for a posts table and a comments table, with the comments being connected to the posts table with a foreign key.
Please submit your database schema, as is mentioned in the submission instructions.
🎯 Create a delete button on posts that allows users to delete the post from the database.
🎯 Create a form which saves comments to a dedicated comments table, with the comments being connected to the posts table with a foreign key.
🎯 Allow users to comment on individual posts in their dynamic routes. Comments should be associated with posts, and have a dynamic route (e.g. /posts/:postid).
🎯 Add a redirect when a user creates a post to redirect them to the posts page.

Stretch Goals

🏹 Implement a select input (or similar mechanism) that allows users to categorise posts during creation, storing them in their own table in the database. Ensure appropriate routing for categories, with endpoints such as /categories and /categories/:id to enable users to browse and interact with posts by category.
🏹 Create an edit functionality accessible via /posts/:id/edit, which pre-fills a form for post data. Create a working PUT route to update the post in the database.
🏹 Develop an edit comment feature accessible via /posts/:id/comments/:id/edit, which pre-fills a form for comment data. Create a working PUT route to update the comment in the database.

Completed Stretch Goals
