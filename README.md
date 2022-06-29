</br>

<div align="center">
  <h1><img src="./assets/image/MediumStory.png" alt="Medium Story" height="50"/></h1>
  <p>Get recent medium stories on your README profile</p>
  
  <img src="https://img.shields.io/github/deployments/kurt-liao/medium-story/production?label=vercel&logo=vercel" />
  <img src="https://img.shields.io/badge/license-MIT-brightgreen" />
  <img src="https://img.shields.io/badge/license-BEERWARE%20%F0%9F%8D%BA-yellowgreen" />
  
</div>

<p align="center">
  <a href="https://github.com/kurt-liao/medium-story/issues"> Issue </a>
  .
  <a href="https://github.com/kurt-liao/medium-story/pulls"> Feature </a>
</p>

# Medium Story Card

Easy to use! 🅲🆃🆁🅻+🅲 & 🅲🆃🆁🅻+🆅 into your readme markdown.

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

## Deploy your own 🚀

<details>
  <summary> <strong>Guide</strong> </summary>

- Fork this repo
- Sign up and log in into [Vercel](https://vercel.com/)
- Go to Vercel [dashboard](https://vercel.com/dashboard)
- Click `Import Project`
- Click `Import Git Respository`
- Click `delpoy`, and done. Find out your domain and start to use it!
</details>

<a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fkurt-liao%2Fmedium-story"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a>

---

<h3>Contributions welcome! Also ⭐ </h3>
