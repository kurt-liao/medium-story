</br>

<div align="center">
  <h1><img src="./assets/image/MediumStory.png" alt="Medium Story" height="50"/></h1>
  <p>Get recent medium stories on your README profile</p>
  
  <img src="https://hits.dwyl.com/kurt-liao/medium-story.svg?style=flat" />
  <img src="https://img.shields.io/github/deployments/kurt-liao/medium-story/production?label=vercel&logo=vercel" />
  <img src="https://img.shields.io/badge/license-MIT-blue" />
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

You can see an example **[here](https://github.com/kurt-liao/kurt-liao)** as well.

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
- Click `New Project`
- Click `Import Git Respository`(Of course you need to authorize the repo first,
  then you can see the repo in the list)
  
  ![2022-06-30_10-28](https://user-images.githubusercontent.com/32745146/176579816-2a28f1d5-2fd2-4218-8367-01a53dfcc09a.png)

- Click `delpoy`, and done. Find out your domain and start to use it!
- Add following command to prevent deploying on irrelevant changes.
![2022-06-30_10-17](https://user-images.githubusercontent.com/32745146/176579415-23ac711e-c695-4bad-aa85-1faf4ef67c67.png)
</details>

<a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fkurt-liao%2Fmedium-story"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a>

---

<h3>Contributions welcome! Also ⭐ </h3>
