# Launch & Deployment

## Server Setup Checklist

* Build server (preferred: Digital Ocean)
* Confirm plan for swapping DNS settings, including email settings
* Swap DNS (can do just DEV to get started)
* Setup both DEV and PROD environments on the new server
* Setup SSL for all environments
* Password protect DEV environment
* Enable gzip on PROD environment
* Enable service worker for all environments
* Install code repository in all environments
* Setup deploy script for all environments
* Enable quick deploy on DEV environment
* Setup environment variables as needed
* Document important project usages with a readme.md file within the project root

## Pre-Launch Checklist

### Testing

* Client QA testing (provide dev link)
* WHQ technical testing
* Browser testing
    * Google
    * Safari
    * Firefox
    * IE11 or later
* Mobile testing
    * iOS (iPhone, iPad)
    * Android

### Optimization

* Google page insights and optimization

### SEO

* 301 redirects
* Meta tags (title, description, etc.)
* Favicon
* If Wordpress, make sure “Discourage search engines from indexing this site” is checked off
* Make sure 404 and any other error pages are implemented
* Add Google Analytics if client has it

## Forge

### Setup

1. Add the site
2. Create .htpasswd file if it does not exist htpasswd -c .htpasswd admin
3. Click Edit Nginx Configuration and add the following lines to the top of the location / {} block:

```
# Restrict Access
auth_basic "Restricted Access";
auth_basic_user_file /home/forge/{domain}/.htpasswd;

# Block Search Engine Indexing
add_header  X-Robots-Tag "noindex, nofollow, nosnippet, noarchive";
```

## Initial Deploy

Create public ssh key on server: `ssh-keygen` (`enter`, `enter`, `enter`)
Install that server key on our BitBucket account, run the following command paste the outputted key into BitBucket under Profile / SSH Keys: `cat ~/.ssh/id_rsa.pub`
Make sure BitBucket is a known_host, this can be accomplished by running `git clone` with the repo name and then Ctrl + C before finished

## Continuous Integration

// TODO

## Cloudflare

// TODO
