</br>

<div align="center">
  <h1><img src="./assets/image/MediumStory.png" alt="Medium Story" height="50"/></h1>
  <p>Get recent medium stories on your README profile</p>
</div>

<p align="center">
  <a href="https://github.com/kurt-liao/medium-story/issues">Report Bug</a>
  .
  <a href="https://github.com/kurt-liao/medium-story/pulls">New Feature</a>
</p>

# Medium Story Card

Easy to use. 🅲🆃🆁🅻+🅲 & 🅲🆃🆁🅻+🆅 into your readme markdown.

Change the `?username=` value to your Medium's username.

```md
[![My Medium Stories](https://medium-story.vercel.app/api?username=@s09001&index=0)](https://medium-story.vercel.app/api?username=@s09001&index=0&is_link=true)
```

[![My Medium Stories](https://medium-story.vercel.app/api?username=@s09001&index=0)](https://medium-story.vercel.app/api?username=@s09001&index=0&is_link=true)

or

```html
<a
  href="https://medium-story.vercel.app/api?username=@s09001&index=0&is_link=true"
>
  <img
    height="200"
    src="https://medium-story.vercel.app/api?username=@s09001&index=0"
  />
</a>
```

<a href="https://medium-story.vercel.app/api?username=@s09001&index=0&is_link=true">
  <img height="200" src="https://medium-story.vercel.app/api?username=@s09001&index=0" />
</a>

_Note: This project use rss to get your newest 10 stories. The `index` param let
you to choose which story you want to get, 0 means the latest story, etc._

Also you can see an example [here](https://github.com/kurt-liao/kurt-liao)

### Hide specific info

You can pass a `&hide=` parameter with comma-separated values.

> `&hide=date,img,desc,category`

```md
![My Medium Stories](https://medium-story.vercel.app/api?username=@s09001&index=0&hide=date,img)
```

![My Medium Stories](https://medium-story.vercel.app/api?username=@s09001&index=0&hide=date,img)

### Get story url

You can pass a `&is_link=true`. Instead of return a svg image, the request will
return the link of story

```
https://medium-story.vercel.app/api?username=@s09001&index=0&is_link=true
```

---

<h3>Contributions welcome! Also ⭐ </h3>
