blog
====

The Hackerati blog and _you_

Step One
--------

Fork the repo, then:

    git clone git@github.com:<username>/thehackerati.github.io.git
    cd thehackerati.github.io
    gem install jekyll
    jekyll serve --watch

Step Two
--------

In the drafts folder, start writing your files! You will be using markdown, so get cozy with this [cheat sheet](http://bit.ly/LTtexM)

Your files must stick to some conventions such as the following:
* The name of your file must have the date, then the name. ie: 2014-02-06-title-of-article.md
* If you would like your name and picture to be associated with your article, you will have to add a little something to the top of your markdown. (make sure to include the ---'s)

    \-\-\-
    post_author: Alex Sheehan
    post_gravatar: c22b31aaaf01e8126d671fcd4c219dcc
    tags: [tag-1, tag-2, ..., tag-n]
    \-\-\-

* The post\_gravatar value is an md5 hash. You will need to make a gravatar and generate the hash from your email address. Delete all leading and trailing white space and make sure its all lower case. Here is a website that makes it [easy peasy](http://bit.ly/LBDlq9)

Step Three
----------

Make a [pull request](http://bit.ly/1eudZYq)!


Feedback
----------
If there is a problem, email alex@thehackerati.com to file a report. If you can't see the repo email geoff@thehackerati.com.
