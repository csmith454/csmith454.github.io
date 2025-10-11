---
layout: default
title: About
permalink: /about/
---
# Who?
Cole is pursuing a M.A. in Russian, East European, and Eurasian Studies at the University of Texas at Austin.  He is interested in how Russia's Arctic economy and industry has changed in the 21st century.  Follow along on his journey!

# Why?
To return home to writing and sharing ideas.

# Blog
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span>{{ post.date | date: "%B %d, %Y" }}</span>
    </li>
  {% endfor %}
</ul>

