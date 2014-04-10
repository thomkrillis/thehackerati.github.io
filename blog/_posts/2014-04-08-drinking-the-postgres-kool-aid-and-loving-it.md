---
title: Drinking the Postgres Kool-Aid and Loving It
post_author: Alan Johnson
post_gravatar: 31c7b5855877e79d99ce5ede7a3e2816
layout: blog_entry
comments: true
tags: [databases, postgres, tech]
---

Data occupies a crucial position in the tech world, now more than ever. While much developer attention is occupied chasing the latest Javascript framework or newest server-side technology, the most crucial architectural step in many projects is determining how business data will be stored and manipulated. The Hackerati sent me to [PostgresNYC 2014][] to see how PostgreSQL is being used in modern applications at scale. *TL;DR: Postgres may not be the coolest kid on the block, but it is definitely alive and well.* 

Not long ago, [relational databases][] unquestionably ruled the data storage world. The decision of what database to use mostly came down to questions of budget (commercial vs. open-source) and taste, because for most purposes, the underlying design and relative capabilities of all the major options converged long ago. Postgres and MySQL split the vast majority of the open-source DBMS market. While MySQL was most popular, Postgres enjoyed a reputation for being the more mature of the two.

Two recent trends upset this duopoly. For small apps, document stores like MongoDB promised the ability to more rapidly prototype projects with a conceptually simpler data model. In such systems, there is much less need to fuss with relational concepts like normalization and joins. For apps at huge scale, column-oriented "big data" storage engines like Cassandra were developed for handling highly distributed datasets. Lost in the shuffle are the old RDBMS systems, so much so that the wide world of alternatives are often grouped together by what they're not, hence the moniker [NoSQL][].

Trying to track the [pros and cons of database systems][] with wildly varying data models is arguably much more perilous than deciding which front-end framework to invest in. And while the barriers of entry of many NoSQL databases are low, scaling them typically requires significant investment in mastery. The stakes of choosing correctly are massive. One cannot simply refactor one's database.

But while the past several years have seen much of the tech world distracted by flavor-of-the-week NoSQL systems, the venerable PostgreSQL quietly and continuously evolved with the times. The vibrant community has contributed a staggering array of features with an eye on modern day data problems. Unknown to many, key features of many alternative data stores exist within Postgres. These include the ability to store and query documents, full-text search, and to perform advanced aggregations on large data sets. I discuss some of these in [my companion piece]({% post_url 2014-04-08-takeaways-from-postgresnyc-2014 %}) from the conference.

PostgresNYC 2014 has featured great talks by presenters who are employing the database in all sorts of cutting-edge applications, which can be sampled from the [conference program][].

While there absolutely are workloads that demand specialized data stores, I'm fairly well convinced that Postgres makes a solid default choice for most projects until evidence proves otherwise. On the prototyping end of project spectrum, thoroughly understanding Postgres obviates many of the advantages of alternative data stores, and saves the pain of migrating to Postgres later when [warts of those alternatives][] emerge at scale. The impressive--if somewhat intimidating--breadth of Postgres's [capabilities][] reduces the need for employing and managing a heterogenous array of specialized databases. And up until a point few projects ever reach, Postgres actually can handle a lot of bigger data problems.

If Postgres has fallen short anywhere, it's in the fact that its evangelists have let it get lost in the NoSQL parade. But people are taking notice. Reportedly, attendance at PostgresNYC 2014 is more than double the previous couple years. Only database specialists really have the time to know multiple DBMSs inside out; the rest of us probably only have time to go long on one. You can't go wrong with Postgres.

[PostgresNYC 2014]: http://nyc.pgconf.us/2014/
[relational databases]: http://en.wikipedia.org/wiki/Relational_database
[NoSQL]: http://en.wikipedia.org/wiki/NoSQL
[pros and cons of database systems]: http://kkovacs.eu/cassandra-vs-mongodb-vs-couchdb-vs-redis
[conference program]: http://nyc.pgconf.us/2014/schedule/
[warts of those alternatives]: https://www.google.com/search?q=mongodb+problems
[capabilities]: http://www.postgresql.org/about/featurematrix/
