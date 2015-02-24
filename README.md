thehackerati.github.io
======================

Port of the www.thehackerati.com from Drupal/Pantheon to Jekyll

Development
-----------

    git clone https://github.com/thehackerati/thehackerati.github.io.git
    gem install jekyll
    cd thehackerati.github.io 
    sed -i 's/http:\/\/thehackerati.com//g' _config.yml
    jekyll serve

Browse the local version of your site here: http://localhost:4000

Make sure to reset the site variable in \_config.yml and run *jekyll build* before adding and committing changes to the site.

To create a test vesion of the site, look at the [wiki](https://github.com/thehackerati/thehackerati.github.io/wiki/The-Hackerati-Website#hosting-a-test-site).

Updating
--------

After you cloned the repository and each time a new gem is added into Gemfile you need to run the following commands:

	bundle install
	bundle update

Blogging
--------

To learn how to blog using Jekyll, visit the README file in the [blog](https://github.com/thehackerati/thehackerati.github.io/tree/master/blog) directory. It's super!
