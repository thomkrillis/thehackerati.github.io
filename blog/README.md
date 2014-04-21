Blog
====


The Hackerati blog and _you_

Step One
--------

Fork the repo, then:

    git clone git@github.com:<username>/thehackerati.github.io.git
    cd thehackerati.github.io
    gem install jekyll
    jekyll build

Step Two
--------

Set up your repository to track the remote blog branch:

    git checkout master
    git fetch
    git branch --track blog origin/blog

Every blog post you make should be done on a branch you create off of the blog branch.
ie:
    git checkout blog
    git pull
    git checkout -b your-branch-name

Step Three
----------

In the \_posts folder, start writing your files! You will be using markdown, so get cozy with this [cheat sheet](http://bit.ly/LTtexM)

Your files must stick to some conventions such as the following:
* The name of your file must have the date, then the name. ie: 2014-02-06-title-of-article.md
* If you would like your name and picture to be associated with your article, you will have to add a little [frontmatter](http://jekyllrb.com/docs/frontmatter/) to the top of your markdown.

    \-\-\-
    post_author: Alex Sheehan
    post_gravatar: [c22b31aaaf01e8126d671fcd4c219dcc, hash-n]
    layout: blog_entry
    comments: true
    tags: [tag-1, tag-2, ..., tag-n]
    \-\-\-

* The post\_gravatar value is an md5 hash. You will need to make a gravatar and generate the hash from your email address. Delete all leading and trailing white space and make sure its all lower case. Here is a website that makes it [easy peasy](http://bit.ly/LBDlq9). You must put the hash(es) in an array.

* If you would like to disable comments on your entry, leave this line out.

* Always include one of the big bucket titles as a tag. This ensures that the buckets filter correctly

* For tags to function correctly, you must build the site locally before making your pull request. After adding your post, run

    jekyll build

Step Four
----------

Make a [pull request](http://bit.ly/1eudZYq) with blog as the base branch (vital to national hackerati security).

Once your pull request is made, a moderator (Mr. Ketigian) will review the entry and merge it into our site.

Feedback
----------
If there is a problem, email alex@thehackerati.com to file a report. If you can't see the repo, email geoff@thehackerati.com.
