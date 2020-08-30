# Omega - Gatsby Blog Starter

[![Netlify Status](https://api.netlify.com/api/v1/badges/825a7f64-d33e-4185-b7ad-e1f02561d746/deploy-status)](https://app.netlify.com/sites/omega-starter/deploys)

---

###### __*Omega is a gatsby blog starter.*__ 
###### Demo - [Omega](https://omega-starter.netlify.app)

Built Using - 
* Gatsby
* TailwindCSS
* PostCSS
* Sharp for Image Optimization 
* Helmet for SEO
* Disqus for comments

Omega supports __MDX__ as blog posts. 

---

## Creating a Blog Post

To create a post - 

* `git clone https://github.com/mojojojo20/Gatsby-Blog-Starter.git`
* `cd Gatsby Blog Starter`
* `npm i`
* `gatsby develop` to run the dev server
* To create a blog post - 
    * Create a folder inside `posts` folder with name of your post
    * Inside the folder, create a file called `postName.mdx` where postName is the name of your post.
    * Put all images related to that post in `postName/images` folder. 
    * Each Blog Post supports MDX and allows you to add an image inline using MDX syntax. 
    * Each Blog Post requires a frontmatter consisting of title, author, date and image (image is the main blog image used)
* The standard URL for your blogpost would be `sitename/title-of-blog`

---

## Setting up Disqus

* To allow users to comment and react on your post - 
    * Sign up on [Disqus](https://disqus.com/) and create a new site
    * Copy that site's shortname and add it to `gatsby-config.js` under `disqus`

---    

## SEO for your Blog

* Update title, description on `gatsby-config.js`
* Update keywords for blogposts and landing page.

---

### Up Soon 

* Dark Mode
* CMS using contentful or wordpress API
* Pagination for home page and filter
* Subsribe and Newsletter integration