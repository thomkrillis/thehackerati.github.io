---
title: "In Defense of Browsers"
post_author: "Eddy Garcia"
post_gravatar: [a53f1632974b3117a829e5e160381dcb]
layout: blog_entry
comments: true
tags: [tech, culture, mobile, JavaScript]
published: true
---
![Alt text]({{ site.url }}/blog/assets/img/browser-mobile.png)

TL;DR
---

The Browser and JavaScripts = SUCH WOW, SO AMAZE!!11!! 
![Alt text]({{ site.url }}/blog/assets/img/doge.png)

In response to: [Browsers Are the Worst]({{ site.url }}/blog/2014/07/15/the-days-of-browsers-are-numbered.html)

Really, Alex? REALLY?
---
I completely disagree with you, Alex. I believe that browsers are the future of application development, especially when it comes to mobile. When mobile devices first came out, the general strategy was to be the first app in the marketplace to be competitive. But the strategy has shifted to differentiating an app with better performance and UI, which is mainly achieved through native libraries. 

In the near future, users will increasingly own heterogeneous devices across a range of manufacturers, with wearables and other connected devices entering the mix. Users have come to expect a seamless app experience across all of these devices and continuous updates throughout the lifetime of the app. The only way to deliver this at the speed of today's trends and stay competitive by covering all of these devices is to use a web-based strategy by leveraging existing browser technologies into applications. 

Browsers were originally designed for delivering static HTML pages, but I believe we are seeing a round of new thinking towards browsers running modern applications. While most browsers have traditionally been CPU-intensive, frameworks and technologies are tackling app performance by taking advantage of GPUs for UI (see [WebGL](http://get.webgl.org/) and [Famo.us](http://famo.us)) and rethinking how DOM manipulations occur (see [react](http://facebook.github.io/react/)). Below are some links to applications being built on browsers:

[https://www.mobilespan.com/content/chrome-is-the-new-c-runtime](https://www.mobilespan.com/content/chrome-is-the-new-c-runtime)

[https://github.com/rogerwang/node-webkit](https://github.com/rogerwang/node-webkit)

[https://atom.io/](https://atom.io/) (Built on top of webkit; takes advantage of JavaScript/CSS/HTML for extensibility/plugins)

As for JavaScript, I really can't imagine a more exciting language right now. Whole operating systems are being developed to run exclusively HTML5/CSS/Javascript apps (Firefox Mobile OS, ChromeOS). It's easy enough to get started for beginners, and now that you can build more than just web frontends, it has really taken open source to the next level with the average layman releasing a new library every week. 

The depth of the language is now evident with its prominence in the reactive/asynchronous programming and functional programming movements. The fact that you can run JavaScript code written by a stranger without having to install it or care too much about security is unique, along with its ubiquity in terms of developer talent and its ability to run on any platform with low overhead. 

Even if you don't like the particulars of the language, you can take still take advantage by leveraging projects like Emscripten to compile your favorite language into JS bytecode. Below are some impressive examples of what the future of JavaScript might hold:

[http://vps2.etotheipiplusone.com:30176/redmine/projects/emscripten-qt/wiki/Demos](http://vps2.etotheipiplusone.com:30176/redmine/projects/emscripten-qt/wiki/Demos): Qt GUI framework running in your browser

[http://kripken.github.io/sql.js/GUI/](http://kripken.github.io/sql.js/GUI/): SQLite Database in your browser

[http://www.quakejs.com/](http://www.quakejs.com/): Quake 3 running in your browser

[http://github.com/kripken/emscripten/wiki](https://github.com/kripken/emscripten/wiki): More examples of projects converted to JS

[http://bellard.org/jslinux/](http://bellard.org/jslinux/): Linux OS in your browser (not Emscripten—straight JS implementation)
