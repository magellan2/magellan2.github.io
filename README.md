# Magellan Homepage

This is the source of the Magellan Homepage. We use HugoCMS to create a static page together with some little JavaScript magic to receive latest informations from Github repository. To create a new version, a hook must be running on our internal Gitlab instance to create a new Hugo CMS page with

    git clone https://github.com/magellan2/magellan-homepage.git
    cd magellan-homepage
    hugo server

Please feel free to add content.

# Known issues

During the convertion from old php/html to markdown I found two major issues

- the charset is not always correct. We prefer UTF-8. But some files are broken and cannot be converted automatically with german umlauts
- some links are wrong or broken, especially within the help sections. They need to be repaired

In addition to that, there are some minor issues

- A lot of files still contain HTML code, which should be replaced with Markdown as much as possible
- the navigation could now be more dynamic (based on the HugoCMS template engine)
- some Fonts are loaded from Google together with all that Cookie crap. We don't analyse anything, I'm happy, when the side is up and nothing more.