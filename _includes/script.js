{% capture js %}

{% if page.content contains "[^" %}

var $ = function(el){return document.querySelectorAll(el);};

function marginalia(){
  if(window.innerWidth > 1000){
    $('body')[0].className="marginalia";
    var nodes = $('.marginalia ol li'); var end = 0;
    for(var i=0;i<nodes.length;i++){
      position=$('[href="#'+nodes[i].getAttribute('id')+'"]')[0].getBoundingClientRect().top + window.pageYOffset;
      if(position<end){position=end}
      nodes[i].style.top = position+'px';
      var end = position+nodes[i].clientHeight+30;}}
  else{ $('body')[0].className=""}}

document.addEventListener('DOMContentLoaded', function(){marginalia();});
window.onresize = function(event){marginalia();};
window.onload = function(event){marginalia();};

{% endif %}
{% if page.content contains "$$" %}

(function () {
  var script = document.createElement("script");
  script.src = "https://c328740.ssl.cf1.rackcdn.com/mathjax/latest/MathJax.js?config=TeX-AMS_HTML";
  var config = 'MathJax.Hub.Config({showMathMenu:false,messageStyle:"none",tex2jax:{inlineMath:[["$","$"]],processEscapes: true,jax:["input/TeX"]}});'+'MathJax.Hub.Startup.onload();';
  if(window.opera){
    script.innerHTML = config}
  else{
    script.text = config}

  document.getElementsByTagName("head")[0].appendChild(script); })();

{% endif %}

{% endcapture %}{% if page.content contains "[^" or page.content contains "$$" %}
  <script>{{ js | strip_newlines | remove: '  ' }}</script>{% endif %}