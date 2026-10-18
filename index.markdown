---
layout: default
title: Home
permalink: /
---
<section class="hero">
  <div class="hero-inner">
    <img class="hero-photo" src="{{ site.profile.photo | relative_url }}" alt="Photo of {{ site.profile.name }}">
    <div>
      <p class="eyebrow">{{ site.profile.school }}</p>
      <h1>{{ site.profile.name }}</h1>
      <p class="tagline">{{ site.profile.tagline }}</p>
      <div class="bio">
        <p>I'm pursuing an M.A. in Russian, East European, and Eurasian Studies at the University of Texas at Austin on my way to a PhD in Political Science.  I completed my B.A. in International Relations and Global Studies at UT before my M.A. and developed a keen interest in the interactions between Arctic economies and authoritarian states.  My research now focuses on the proliferation of economic statecraft in the 21st century, with my current project investigating the growth of Russia's shadow fleet and its effect on the Kremlin's crude oil supply chain.</p>
        <p>This blog is where I return to writing and sharing ideas: research notes, current events, and the occasional piece of fiction. Follow along on the journey.</p>
      </div>
    </div>
  </div>
</section>

{% if site.posts.size > 0 %}
<section class="recent">
  <h2 class="section-title">Latest writing</h2>
  <ul class="post-list">
    {% for post in site.posts limit:3 %}
    <li>
      <a class="post-card" href="{{ post.url | relative_url }}">
        <span class="date">{{ post.date | date: "%B %-d, %Y" }}</span>
        <h3>{{ post.title | default: "Untitled" | markdownify | remove: '<p>' | remove: '</p>' }}</h3>
        <p>{{ post.content | strip_html | strip_newlines | truncatewords: 28 }}</p>
      </a>
    </li>
    {% endfor %}
  </ul>
</section>
{% endif %}
