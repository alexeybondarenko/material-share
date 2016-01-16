# material-share

Share button in material design style

## How to use

```
<script type="text/javascript" src="./src/material-share.js"></script>
<link rel="stylesheet" href="./src/material-share.css" media="screen" title="no title" charset="utf-8">
```

Assign script to element 

```
<script type="text/javascript">
    var share = new MaterialShare(document.querySelector('.share-button'), {
      facebookId: 'facebookId',
      twitterId: 'twitterId',
      linkedinId: 'linkedinId'
    });
</script>

```

## TODO

- [x] add basic functional
- [ ] add gulpfile fot build sass
- [ ] add pretty example
- [ ] add more social networks. (Google Plus, Whats App, Vkontake, etc)
