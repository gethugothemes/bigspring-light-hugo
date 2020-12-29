# Easy Setup (Hugo + Netlify + Forestry)
Build your website with bigspring theme by following this easy steps (No Coding Required)

_Checkout this video tutorial_
<a href="https://youtu.be/ResipmZmpDU" target="_blank" title="meghna hugo installation" rel="nofollow"><img width="100%" src="https://user-images.githubusercontent.com/37659754/103056582-88270880-45c7-11eb-9124-ab17bae951ec.png"></a>

In this tutorial we will show you to make your website live without buying any hosting and touching a single line of code. We made this tutorial based on [meghna hugo](https://github.com/themefisher/meghna-hugo) but you can setup everithing like this.

### What you need !!

1. Git acccount (Ex: Github, Gitlab etc ) . In our case we use github.
2. [Netlify](https://bit.ly/netlify-account) account to host files and add custom domain .
3. [Forestry](https://bit.ly/forestry-account) account to maintain whole project without code.


### Step 1 : Fork or Clone repository

First we will fork this [bigspring](https://github.com/themefisher/bigspring-hugo-startup-theme) template.

### Step 2 : Add your repository in Forestry

Go to your [forestry](https://bit.ly/forestry-account)  account and click on `import your site now`. declare your config.toml file [`exampleSite`] and fill up basic settings .

**Or just click this button for one click installation** [![import to forestry](https://assets.forestry.io/import-to-forestryK.svg)](https://app.forestry.io/quick-start?repo=themefisher/bigspring-hugo-startup-theme&engine=hugo&version=0.60.1&config=exampleSite)

Now mark everything as done, then go to configuration to change the base url . You can put any url but this have to similar as netlify . So for now put a name which you are going to put in netlify as netlify subdomain.

### Step 3 : Setup and host website with Netlify

Here comes the last step . Go to your [netlify](https://bit.ly/netlify-account) account and click add new site . Choose your git repository to import your website in netlify .  And now you can see the forked `bigspring` theme. select it and follow the steps. Then go to `site settings` for change the site name and put your subdoamin name here what you puted on forestry as base url. save it and go to `deploy` from top menu, Wait a while and click on `site preview` or just simply go to the subdomain you puted as base url. **BOOM! Your site is live.** Now you can go to forestry and add, remove or customize every setting and content.

> If you face any issue regarding the installation feel free to onen [open a new issue](https://github.com/themefisher/bigspring-hugo-startup-theme/issues)


## Table of Contents

- [Demo](#demo)
- [Quick Start](#quick-start)
- [Installation](#installation)
- [Reporting Issues](#reporting-issues)
- [Technical Support or Questions](#technical-support-or-questions-(paid))
- [License](#license)
- [More Hugo Themes](https://themefisher.com/hugo-themes/)

## Demo

[Live Preview](http://demo.themefisher.com/bigspring-hugo/).

## Quick Start
Quick start options:

- Clone the repo: `git clone https://github.com/themefisher/bigspring-hugo-startup-theme.git`.
- [Download from Github](https://github.com/themefisher/bigspring-hugo-startup-theme/archive/master.zip).
- [Download from gethugothemes website](https://gethugothemes.com/products/bigspring/).

## Installation
At the top we have shown an easy hugo installation. but still if you think you want to go with the traditional way then use the following commands:

```
$ git clone git@github.com:themefisher/bigspring-hugo-startup-theme.git
$ cd bigspring/exampleSite/
$ hugo server --themesDir ../..
```
Or Check out [Full Documentation](https://docs.gethugothemes.com/bigspring/?ref=github).

## Reporting Issues

We use GitHub Issues as the official bug tracker for the **bigspringe**. Please Search [existing issues](https://github.com/themefisher/bigspring-hugo-startup-theme/issues). It’s possible someone has already reported the same problem.
If your problem or idea is not addressed yet, [open a new issue](https://github.com/themefisher/bigspring-hugo-startup-theme/issues/new)

## Technical Support or Questions (Paid)

If you have questions or need help integrating the product please [contact us](mailto:mehedi@themefisher.com) instead of opening an issue.

## License
Copyright &copy; 2020 Designed by [Themefisher](https://themefisher.com) & Developed by [Gethugothemes](https://gethugothemes.com)

**Code License:** Released under the [MIT](https://github.com/themefisher/bigspring-hugo-startup-theme/blob/master/LICENSE) license.

**Image license:** The images are only for demonstration purposes. They have their own licence, we don't have permission to share those image.
## Premium Themes

| [![Mega-Bundle-HUGO](https://gethugothemes.com/wp-content/uploads/edd/2019/09/Mega-Bundle-HUGO.png)](https://themefisher.com/products/hugo-mega-bundle/) | [![](https://gethugothemes.com/wp-content/uploads/edd/2020/09/Copper-hugo-sass-landingpage.jpg)](https://gethugothemes.com/products/copper/) | [![redlab](https://gethugothemes.com/wp-content/uploads/edd/2019/09/redlab-hugo-thumbnail.jpg)](https://gethugothemes.com/products/redlab-hugo/) |
|:---:|:---:|:---:|
| **Hugo Mega Bundle**  | **Copper**  | **Red Lab**  |
