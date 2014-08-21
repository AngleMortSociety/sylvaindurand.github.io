---
title:  Journal
trans: /
permalink: /journal/
---

## Articles
<ul class="liste">{% for post in site.posts %}{% if post.lang == page.lang %}
  <li>
    <a href="{{ post.url }}">
      <span>{% include date.html date=post.date %}</span>
      {{ post.title }}
    </a>
  </li>{% endif %}{% endfor %}
</ul>
