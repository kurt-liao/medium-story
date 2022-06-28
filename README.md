# Medium Post

## Demo

<img height="200" src="https://medium-post-seven.vercel.app/api?user_id=@s09001" />

Also you can see an example in my
[Readme](https://github.com/kurt-liao/kurt-liao)

## How to use

- Find your Medium user id
- Change your user id into url

  `https://medium-post-seven.vercel.app/api?user_id=[your-medium-user-id]`

- Pass a post's index that you want to show in querys. Your url
  will look like ↓ (default is 0)

  `https://medium-post-seven.vercel.app/api?user_id=[your-user-id]&index=[index-of-your-post]`

## Get recent post by rss

- It's rss feed that I use to receive recent posts, you can paste it on browser
  and get yours.

  `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/[your-medium-user-id]`

- Result will look like ↓

  ![](/img/rss-result.png)

- Items array is your posts, index 0 means the first post. etc.

## Optional Settings

- Get Post Url - Put *is_link* in url querys

  ```
  https://medium-post-seven.vercel.app/api?user_id=[your-user-id]&index=[index-of-your-post]&is_link=true

  # default is false
  ```
- Hide Information - Put *hide* in url querys

  ```
  https://medium-post-seven.vercel.app/api?user_id=[your-user-id]&index=[index-of-your-post]&hide=date,img

  # There are four hidden options - [date, img, desc, category], use comma as delimeter 
  ```

  Sample  ↓

  <img height="200" src="https://medium-post-seven.vercel.app/api?user_id=@s09001&hide=date,category" />
---

## Give some Feedback via [Issue](https://github.com/kurt-liao/medium-post/issues) or [PR](https://github.com/kurt-liao/medium-post/pulls)

## Don't forget the ⭐
