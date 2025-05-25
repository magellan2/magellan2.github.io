# Plugins

Plugins are external modules or extensions, that can be added to the Magellan clientto add features to Magellan that are currently not available.
These are the plugins known to us:

* [Alliance Plugin](/en/plugins/alliance)
* [Extended Commands Plugin](/en/plugins/extcmds)
* [LightHouseIcons Plugin](/en/plugins/lighthouseicons)
* [MapCleaner Plugin](/en/plugins/mapcleaner)
* [MapEdit Plugin](/en/plugins/mapedit)
* [MemoryWatch Plugin](/en/plugins/memorywatch)
* [MapIcons Plugin](/en/plugins/mapicons)
* [ShipLoader Plugin](/en/plugins/shiploader)
* [Statistics Plugin](/en/plugins/statistics)
* [Teacher Plugin](/en/plugins/teacher)

The installation of most plugins is very easy. Every plugin comes as an installable
JAR file. When you start this file, the installer asks for the place where you
installed Magellan and checks if you choose the right path. If everything seems
okay, the installer puts all necessary files into the Magellan directory. After the
next restart of Magellan, the plugin is initialized and integrated into the client.

# Development of Plugins

Developing plugins is not very hard if you can program in Java. You have to provide at least one class extending the interface`magellan.client.extern.MagellanPlugIn`. You can find the API documentation in your local Magellan installation (under`doc/api`) or in the source code available on GitHub.

Here's a short HOWTO for creating the installer:

If you are using Eclipse, we assume that your plugin is its own project and you have Magellan as a second project. Your directory structure could look like this:

    - src
       - ...Source files...
    - doc
       - LICENSE.txt
       - CHANGELOG.txt
       - ....
    - etc
       - ...message properties or whatever
    - lib
       - ...optional libraries...
    - build.installer.xml
    - izpack-install.template.xml
    - README.md

You should start with `build.installer.xml` from another plugin and change a few things:


* `plugin.displayname` - name of the plugin
* `plugin.basename` - base name of directories and the installer
* `plugin.author` - author's name
* `plugin.author.email` - and email
* `plugin.version` - current version (a build number is generated additionally)
* `plugin.description` - short description of what the plugin does
* `$magellan2` - magellan source directory, typically `${basedir}/../Magellan2`


You usually do not need to touch the `izpack-install.template.xml`.


That's about it. You should execute the target "create-installer". After this is done, you will find the plugin with installer in the directory `release`.

ATTENTION: The jar file created in the main directory is just the compiled source, not the installer, which is always in the `release` directory.
