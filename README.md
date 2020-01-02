# nfmb-site


## jekyll-multiple-languages-plugin
Install manually github branch of jekyll-multiple-languages-plugin compliant with Jekyll v4
In your site source root, make a `_plugins` directory. Place your plugins here. Any file ending in `*.rb` inside this directory will be loaded before Jekyll generates your site.

```bash
$ git clone https://github.com/kurtsson/jekyll-multiple-languages-plugin
$ cd jekyll-multiple-languages-plugin
$ git branch -a
$ git checkout update-depencency-requirements
$ cd ../nfmb-site.jekyll-v4/
$ cp -R ../jekyll-multiple-languages-plugin/lib _plugins/
```
