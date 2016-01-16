# Material Share Button


- No JS dependencies (Vanila JS)
- Support (Facebook, Twitter, Linkedin)
- All icons inside stylesheet

Share button in material design style

## How to use

Example of usage is on *index.html* file

Add script and stylesheet files to your page.

```
<script type="text/javascript" src="./src/material-share.js"></script>
<link rel="stylesheet" href="./src/material-share.css" media="screen" title="no title" charset="utf-8">
```

Assign script to element 

```
<script type="text/javascript">
    var share = new MaterialShare(document.querySelector('.share-button'), {});
</script>

```

## Using with jQuery

```
var $el = $('.social').materialShare({});
```

## TODO

- [x] add basic functional
- [ ] add gulpfile fot build sass
- [ ] add pretty example on gh-pages
- [ ] add more social networks. (Google Plus, Whats App, Vkontake, etc)
- [ ] configure bower.json. and publish to global bower registry
