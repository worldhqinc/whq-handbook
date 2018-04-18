# Wordpress

## Setup

Set up local database with Sequel Pro
Download Wordpress install
Create a new theme directory in /themes and name it after site
Drag all front-end files into newly created theme
Delete extra Wordpress themes
Add the .gitignore below to the project root
Copy wp-config-sample.php to wp-config.php
Add your local DB settings to the wp-config.php file
Create unique password salts in wp-config.php file
All of the wp-config.php operations above need to be conducted on both Forge as well as the production server for the site (you can copy over the wp-config.php file via FTP or create it using Vim via SSH)
Make sure style.css is in theme folder with theme name
Hit site in browser and run wordpress install
Select theme in admin panel

### .gitignore

```
wp-config.php
wp-content/uploads
```

## Integration

Create /pages and /partials directories
Link styles and scripts
Create pages in admin
Settings/reading/front page displays/a static page
Create pages in directory
Link pages to templates
Add plugins to directory
Activate in admin
Add custom fields and post types to markup and connect with admin
Admin - create field group per page
Add tags to customizable elements
Add /functions directory

### Getting page-specific classes

Add to body tag:

```php
<?php body_class(); ?>
```

## Plugins

* **Advanced Custom Fields**: [https://www.advancedcustomfields.com/](https://www.advancedcustomfields.com/)
