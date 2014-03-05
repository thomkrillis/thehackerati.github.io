---
post_author: Alex Sheehan
post_gravatar: c22b31aaaf01e8126d671fcd4c219dcc
layout: blog_entry
tags:
- this
- that
- theother
---

In the past few years, the brain child of Martin Odersky has grown from niche, to niche-chic, to a language du jour used by the likes of Twitter and LinkedIn. The Typesafe team is not resting on its Laurels however, in fact they have some pretty exciting plans for Scala in 2013.
What you will learn...

* A brief history lesson on what changed in 2.10
* A discussion of what is planned for 2.11, what has improved from 2.10, and how it will affect the community

What you should know...

* Concepts of the functional programming paradigm
* A little about the Scala compiler
* Intermediate knowledge of the Scala standard library

No one can deny the massive success the Scala programming language saw in 2012. If that is any indication of what's to come, there are plenty of reasons to adopt Scala into your stack, and embrace functional programming in general. If you are worried that the language has peaked, and all that can be done now is to standardize 3rd party libraries,  you are in for a surprising year. In this article, we are going to discuss three pillars of the improvements planned for 2.11; stability, speed and size.

The following paragraph may bore the initiated, but it is important to understand a little about Typesafe, the company behind Scala, Akka and Play!, before delving into what is to come. Typesafe is an open-source organization led by CEO Martin Odersky, who started designing Scala in 2001 at Ecole Polytechnique Federale de Lausanne (EPFL) in Switzerland (Scala was later released in 2003 on the Java platform). Previously, Odersky had worked on javac, a widely used Java compiler that is now packaged with Sun Microsystem's JDK. It is perhaps a consequence of all the work Odersky did on javac, that Scala is such a widely accepted solution for new projects and legacy Java architectures alike. New projects will enjoy an accelerated design process thanks to concise syntax, a static type system, and full functional support. Legacy systems built in Java will thank Scala for the same things, but also reap the benefits of cleaning up what is often considered poor design decisions like checked exceptions and a non-unified type system. --Do not worry, initiated, we are almost done with introductions-- One more thing to note about Typesafe and Scala is the comprehensive documentation and training offered not only by the Typesafe website, but by the man himself, Martin Odersky, in the form of a free 7 week series of lectures and assignments on Coursera. 
Now that everyone is up to speed with the company, lets take a look at the language. Scala's major release last year was Scala 2.10. These were some of the most prominent or experimental features new to 2.10:
* Akka Actors included in distribution
* A new Pattern Matcher
* Futures and Promises
* Implicit Classes
* Reflection
* Macros

Most of these will not be covered by this article, but if you're interested, there is a lot of valuable information at http://scala-lang.org about each topic. What does relate to our discussion, however, are in inclusion of Scala Reflection and Macros. Though still experimental, Scala 2.11 is likely to deliver on these two features before year's end.

Both Reflection and Macros were introduced in 2.10 as experimental features. Reflection is defined as being the ability of a program to inspect, and possibly even modify itself at runtime. While reflection has a long history spanning many programming paradigms, each language seems to implement its own unique flavor of reflection. Since we know Scala runs on the JVM, lets focus on how Java takes advantage of reflection. Java, like most OOP languages focus primarily on runtime reflection, or more specifically, the language's ability to inspect and invoke runtime types and their members. For instance, lets say we have a type or instance of some object at runtime, runtime reflection is the ability to inspect object types, instantiate new objects, or access/invoke members of an object. The following are examples of inspecting a runtime type using context bounds and instantiating a type at runtime from Scala docs. All code is executed from the REPL:


Listing 1: Inspecting a Runtime Type using context bounds

    scala> import scala.reflect.runtime.{universe => ru}
    import scala.reflect.runtime.{universe=>ru}
    scala> val l = List(1,2,3)
    l: List[Int] = List(1, 2, 3)
    scala> def getTypeTag[T: ru.TypeTag](obj: T) = ru.typeTag[T]
    getTypeTag: [T](obj: T)(implicit evidence$1: ru.TypeTag[T])ru.TypeTag[T]
    scala> val theType = getTypeTag(l).tpe
    theType: ru.Type = List[Int]

The code above will create a list of type Int called l. It then defines a method getTypeTag with parameter T with a context bound. The code then invokes getTypeTag with l as its parameter and calls tpe which returns the type contained in the TypeTag. Now, with the desired Type instance, we can inspect it:

    scala> val decls = theType.declarations.take(10)
    decls: Iterable[ru.Symbol] = List(constructor List, method companion, method isEmpty, method head, method tail, method ::, method :::, method reverse_:::, method mapConserve, method ++)


Instantiation of types obtained through reflection can be accomplished by invoking their constructor using a mirror. The following is another example using the REPL:

Listing 2: Instantiating a Type at Runtime

    scala> case class Person(name: String)
    defined class Person
    scala> val m = ru.runtimeMirror(getClass.getClassLoader)
    m: reflect.runtime.universe.Mirror = JavaMirror with …
    // The first step is to obtain a mirror, making all classes and types loaded by the classloader available
    scala> val classPerson = ru.typeOf[Person].typeSymbol.asClass
    classPerson: reflect.runtime.universe.ClassSymbol = class Person
    scala> val cm = m.reflectClass(classPerson)
    cm: reflect.runtime.universe.ClassMirror = class mirror for Person (bound to null)
    // Step two obtains a ClassMirror for class Person using reflectClass. 
    scala> val ctor = ru.typeOf[Person].declaration(ru.nme.CONSTRUCTOR).asMethod
    ctor: reflect.runtime.universe.MethodSymbol = constructor Person
    // The symbol for Person s constructor can be obtained using only the runtime universe ru
    scala> val ctorm = cm.reflectConstructor(ctor)
    ctorm: reflect.runtime.universe.MethodMirror = constructor mirror for Person.<init>(name: String): Person (bound to null)
    scala> val p = ctorm(“Alex”)
    p: Any = Person(Alex)

More examples of runtime reflection can be found at http://docs.scala-lang.org. 

Since Java was established years before Scala, it is only natural that there are some shortcomings of its runtime reflection on Scala specific types. Reflection in 2.10 addresses those shortcomings and adds powerful tools for general reflective capabilities. Scala now also ships with a solution in the form of macros for compile-time reflection. In short, macros in Scala allows for a form of metaprogramming making it possible for programs to change themselves at compile-time. One optimization in Scala that may not be found in other languages is that macros are based on the same API used for Scala's runtime reflection. This allows the sharing of generic code between macros and implementations that use runtime reflection. Macros achieve reflection by manipulating abstract syntax trees at compile time. 

Though Reflection and Macros are experimental, and may stay that way for some time, 2.11 aims to improve their API's and stabilize their implementation.
Hopefully I don't hurt anyone's feelings by saying this, but scalac does more than javac. This is just a fact of life that we all live with, and I'm sure Java evangelists will forgive me given the appropriate amount of time. An obvious advantage javac has over scalac is speed, and not to put too fine a point on it, Scala has next to no hope to be as fast. What Scala can do, however, is improve batch compilation and give users a better incremental compilation experience in tools that use that part of the compiler. 
It is important to note that scalac is not always to blame for compile times, however. The web framework in Typesafe's stack, Play!, has been widely criticized in the past for compilation performance. An initial compile time of 20 seconds isn't terrible, but later down the road, when you experience a 60 second compile time to see a minor change can admittedly be a little frustrating. Scala developers are a little more used to this kind of performance than Java developers because as previously stated, Scala will never be as fast as Java when it comes to compiling. Bottlenecks like these have been duly noted by the Typesafe team and a large portion of the effort being put into 2.11 will be focused on improving the experience in SBT, Maven, Eclipse, IntelliJ, and pretty much any other tool that uses the incremental compiler. Improvements to the optimizer and a faster standard library will also be focused on this year to improve compile times.
Which brings us to the standard library. In 2013, there will be a push to try to modularize the standard library. Scala packages are already mostly modular, which in practice, can minimize Scala's footprint depending on how they are used. Something like scala.Predef includes most of the packages, and would benefit from being split up into modules. Another reason to modularize the library is to stay current with Java. Project Jigsaw is a module system that was originally slated to be included in Java SE 8, but was delayed until Java 9. Java 9 is still two years away, but some curveballs it could throw at Scala are:

* New Syntax for Defining Modules
* Module Visibility
* Byte Code Changes
* Compilation Changes

One thing Typesafe must do if they modularize the standard library is include an extension mechanism for modules. Plugins and services are essential to keeping Scala flexible and easy.

For a while now there has been an effort to turn the Scala compiler into a platform. Some examples are SBT's compiler interface, compiler plugins, and the aforementioned addition of reflection in 2.10. The compiler interface is a layer that communicates with the Scala compiler. By using techniques such as these, and moving tools that are currently integrated out of the compiler, it leaves an opportunity for other developers to implement similar tools, leading to a more open platform. 
Lastly, Scala is going to be doing a little spring cleaning by constantly and purposefully removing all features that are either unmaintained, unused or both. No doubt a smaller Scala will be a faster and more stable Scala.
Scala continues to be a very promising endeavor for both Typesafe and the programming community. With companies such as Twitter, LinkedIn, FourSquare and Sony on board, and a very successful Series B round of funding last year ($14m worth of success to be exact) the velocity with which Scala is growing will remain a testament to Typesafe's aggressive approach to active development. Hopefully there are many years ahead for Scala that will be as exciting as 2013.
