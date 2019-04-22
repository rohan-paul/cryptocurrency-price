A super small app fetching prices of cryptocurrencies using coinmarketcap API. Live version running [here at Surge](https://cryptocurrency-react-app.surge.sh/)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)

#### Deploy Create React App with Surge

create a build folder

```js
npm run build
```

```
cd build
```

Run Surge,

```js
surge;
```

At the step where it will give me a default site name, I can just put my own, by deleting the default one.

But only thing is that I have to add “.surge.sh” to my site name. So in this case, I will put `cryptocurrency-react-app.surge.sh`

#### After a site has been deployed, how push the diffs to the earlier deployed site - to the same URL

**Just like most deployment, it will just be a fresh deployment.** So at the step ( during the fresh deploy of a new project), when I have to choose / edit the exact URL name (keeping .surge.sh at the end intact) - just type the same old URL again, which will be

`cryptocurrency-react-app.surge.sh`

NOTE - They clearly mention in their site that at this moment, there’s no functionality to push only the diffs, they will have to push the entire project again replacing the previous files.

[https://surge.sh/help/using-incremental-publishing](https://surge.sh/help/using-incremental-publishing)

and follow the prompts. All it needs is an email and a password, and you can optionally specify a different domain name.
