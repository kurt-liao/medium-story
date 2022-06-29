</br>

<div align="center">
  <h1><img src="./assets/image/MediumPost.png" alt="Medium Post" height="50"/></h1>
  <p>Get recent medium posts on your README profile</p>
</div>

<p align="center">
  <a href="https://github.com/kurt-liao/medium-post/issues">Report Bug</a>
  .
  <a href="https://github.com/kurt-liao/medium-post/pulls">New Feature</a>
</p>

# Medium Post Card

Easy to use. 🅲🆃🆁🅻-🅲 + 🅲🆃🆁🅻-🆅 into your readme markdown.

Change the `?username=` value to your Medium's username.

```md
[![My Medium Posts](https://medium-post-seven.vercel.app/api?username=@s09001&index=0)](https://medium-post-seven.vercel.app/api?username=@s09001&index=0&is_link=true)
```

[![My Medium Posts](https://medium-post-seven.vercel.app/api?username=@s09001&index=0)](https://medium-post-seven.vercel.app/api?username=@s09001&index=0&is_link=true)

or

```html
<a
  href="https://medium-post-seven.vercel.app/api?username=@s09001&index=0&is_link=true"
>
  <img
    height="200"
    src="https://medium-post-seven.vercel.app/api?username=@s09001&index=0"
  />
</a>
```

<a href="https://medium-post-seven.vercel.app/api?username=@s09001&index=0&is_link=true">
  <img height="200" src="https://medium-post-seven.vercel.app/api?username=@s09001&index=0" />
</a>

Note: This project use rss to get medium user's recent post

The `index` param let you to choose which post you want to get, 0 means the
latest post, etc.

Also you can see an example [here](https://github.com/kurt-liao/kurt-liao)
