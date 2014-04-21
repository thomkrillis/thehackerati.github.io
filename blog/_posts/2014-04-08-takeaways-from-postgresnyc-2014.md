---
title: Takeaways From PostgresNYC 2014
post_author: Alan Johnson
post_gravatar: [31c7b5855877e79d99ce5ede7a3e2816]
layout: blog_entry
comments: true
tags: [databases, postgres, tech]
---

[My other post]({% post_url 2014-04-08-drinking-the-postgres-kool-aid-and-loving-it %}) discusses on a high level how PostgresNYC 2014 reinforced my belief that it makes a very attractive default choice for the database for most projects. This piece covers some of the specific tools from the presentations and some thoughts.

## Postgres as the data model layer
A theme I found interesting is that many of the presenters are doing much of their back-end development directly within Postgres, as opposed to in their web server. After seeing how much innovation is going on in the Postgres community, it makes a lot of sense. It's really difficult to imagine that it will remain productive to try to project the full power of the DB in ORM layers. This has always been a drawback of the ORM, but we're at a point where very commonly used features, like document types, will likely never have standard SQL semantics.

At the same time, much of the rigor of development on the app server is being applied to database development. Sessions discussed using pgTap for testing, strategies for version control of schema and procedural SQL code, and workflows for continuous deployment. One session mentioned representing the data model via stored procedures to abstract the service layer from data layer implementation details. If the native PL/SQL isn't your cup of tea, you could write this procedural code in [a variety of alternative languages][]. Several other sessions mentioned using [foreign data wrappers][] to interface directly with a huge variety of external services. If the tools can mature to match the simplicity of defining the data model in Django Models or Rails Active Records, it may be worthwhile to move away from the ORM, and have the service layer interact directly with the DB again.

Considering the fact that for many web apps, the front-end has taken on much of the UI logic, what was once thought of as the "back-end" may have to be reconceptualized as something a bit more limited, like the "service layer" or "app server".

## New tricks for structured data
The relational data model has proven to be both incredibly general and remarkably flexible in its ability to be tuned for a wide variety of data modeling problems at scale. That doesn't mean it's always easy though. Certain structures, like trees and lists, can be difficult to model in such a way that they're efficiently queryable. And semi-structured information is famously challenging to integrate into relational schemas, as well.

Postgres has developed data types that help with these problems. Array and set types can make adding collections to models simpler. The [jsonb][] type in the upcoming Postgres 9.4 release will combine the benefits of both hstore key-value and JSON document column types for a better semistructured data type. The resulting data can be efficiently queried, even at arbitrary depth within the document. It can also be efficiently modified and updated. It's a huge coup for winning over Mongo fans. The older [ltree][] data type can augment hierarchical data with columns that describe hierarchical position, giving an ability to write powerful tree queries. The efficiency of each of these types is given by the very powerful full-text indexing frameworks, which by the way also give Postgres impressive capabilities as a text search engine, as well.

Lastly, Postgres offers [window functions][] for working with sequential data. I don't want to get into too much detail, but if you've ever wanted to select rows based on previous or following rows in the table, these give you some very powerful tools.

## Integration with other data systems
There are definitely roles in a product's architecture that Postgres can't/shouldn't fill, and it was interesting seeing how some presenters were integrating Postgres into larger architectures. The server monitoring company DataDog processes a massive amount of data from a continuous stream and uses Postgres as the storage and querying engine. But they also integrate Apache Kafka for doing the heavy lifting in processing that data as it comes in, Redis for caching recent data (which is most likely to be viewed), and S3 for storage of raw information that isn't necessarily searchable.

Another presenter explained the workings of RabbitMQ as flexible connection layer between services in an architecture. By using it for communication instead of having services communicate directly via TCP/IP, it becomes easy to redirect, split, and recombine data flows between components, without changing the components themselves. Postgres can actually [interface directly with Rabbit][]. Not only can it poll queues for messages, but it can also subscribe to queues and have procedures run on-demand.

## In summary
I'm extremely impressed with the breadth of work going on with and within Postgres. To give a glimpse of what's on the horizon, there were a lot of calls for simpler data partitioning support, column-based facilities, auditing tools, configuration of the server from within its own tables, and cleaner APIs. There's a lot to be excited about. 

[a variety of alternative languages]: http://www.postgresql.org/docs/current/static/external-pl.html
[foreign data wrappers]: http://wiki.postgresql.org/wiki/Foreign_data_wrappers
[jsonb]: http://pgeoghegan.blogspot.com/2014/03/what-i-think-of-jsonb.html
[ltree]: http://leopard.in.ua/2013/09/02/postgresql-ltree/
[window functions]: http://tapoueh.org/blog/2013/08/20-Window-Functions
[interface directly with Rabbit]: http://wiki.postgresql.org/images/2/22/On_Rabbits_and_Elephants_-_pgCon_2011.pdf
