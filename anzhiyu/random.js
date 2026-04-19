var posts=["2026/04/19/hello-world/","2026/04/19/我的第一篇文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };