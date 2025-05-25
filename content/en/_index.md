# What is Magellan?

Magellan is a full-featured client tool for the play-by-e-mail game [Eressea](http://www.eressea.de/) and other PBeM games. It displays a map of your part of the Eressea world, supports you in writing orders, performs many complex calculations for you and is available completely in English.

![Magellan Desktop](/images/magellan2-preview.png)

Magellan requires Java 11 (or higher) und thus can be run on many desktop operations systems like Windows, Linux, or MacOS. Among its many features are:

* Displaying of your map, units, region details and all other report objects. You can freely configure windows as you prefer.
* Order editor with auto completion and syntax check.
* Wide range of projection features for item transfer, routes and other things.
* Comprehensive order checking and display of "open problems" making additional tools like ECheck obsolete.
* Send your orders by email directly from Magellan.
* Im- and export if reports and maps, facilitating information exchange with other players.
* Easy navigation by keyboard shortcuts, quick search, bookmarks, ...
* Faction statistics with display of items, skills, income etc.
* Alchemy planner to get an overview of your herbs and potions.
* Extensive configurability to adapt Magellan to your needs.
* You can color or label your maps with self defined criteria to display, for example, trade goods, raw materials, peasant growth, or other factions.
* Programming interface ExtendedCommands for automating your orders.
* Plugins, to extend Magellan's capabilities even further.

# What is Magellan not?

Magellan is only one among many other [client programs](https://wiki.eressea.de/index.php/Befehle_einschicken#Hilfsmittel) for Eressea and is in no way related to the developers of Eressea. To relieve them of unnecessary work please contact the [Magellan Community](/en/feedback/) in case you have any questions or problems.

# Can I Run Magellan on My Computer?

Magellan is built using the platform independent Java technology and therefore runs on MS Windows, Linux, MacOS X and some other operating systems. However, it requires a moderately powerful machine, especially when your faction grows bigger. The minimum system requirements are a 450 MHz processor and 128 MB RAM, but 800 MHz and 512 MB RAM are recommended. For Magellan, Java 11 or newer is required.

# Java? What's That?

Java is a platform independent programming system. Actually, you do not really have to worry about that. After installing Java on your computer once, all you need is to [download](/en/download/) Magellan. Consisting only of a single file, you can run it like any other program from then on. One of the easiest ways to install Java right now is to download an installer from [AdoptOpenJDK](https://adoptopenjdk.net/releases.html). There are several Java distributions. We recommend, for example, [Open JDK](https://openjdk.java.net) oder [Oracle Java SE](https://www.oracle.com/java/).


## What Java version, exactly, should I download?
At this moment (summer 2021) we recommend the following version, that should work for most users:

* AdoptOpenJDK
* You operating, naturally (Windows for most)
* OpenJDK 11 (LTS), or, by autumn 2021, OpenJDK 17 (LTS)
* HotSpot JVM
* usually x64


## JRE or JDK?

JDK is usually targeted at Java developers, JRE at end users. If you intend to use the ExtendedCommands of Magellan, you will need a JDK! The only disadvantage of getting a JDK is its size. So if you are not running short on disc space, a JDK is recommended.

## What version of Java do I have?

* Open a terminal (command line):
 
  * **On Windows: **Press the windows key to open the start menu. Type cmd to open the command line.
  * **On MacOsX: **Open Spotlight (Command + Space or click on the magnifying glass in the upper right), then enter 'terminal'.
  * **On Linux: **Open a terminal (depending on your Linux distribution open the program menu, for example by pressing the windows key and enter "terminal").

* In the terminal type `java -version` und press `Enter`. An output like `'openjdk version "11.0.10" 2021-04-20'` means that you are running version 11. An output like "java is not recognized" or "command not found" means that you apparently don't have java.




## I get this error message: 'Error: A JNI Error has occured, please check your installation and try again.'

You probably have Java 8 instead of Java 11! Install Java 11 (see above).

## But the latest version on java.com is Java 8!

Since Oracle acquired Java from Sun Microsystems, there is a new license system that complicated the release of Java implementations for end users. Therefore [java.com](https://java.com) is no longer the site of choice. Please get Java from one of the sources mentioned above.

## I need Java 8 for a different software.

You can use several versions of java simultaneously, but this requires some work.

### On Windows:
  
* Install Java 11, then Java 8. Your other software should now work normally.
* Locate the path of your Java 11 installation (for example C:\Program Files\jdk-11.0.1).
* Locate the file magellan.bat (usually in C:\Program Files\Magellan\magellan.bat).
* Edit this file as administrator. This should work roughly as follows: Locate the entry for "notepad" in the start menu. Right click it and choose "More ... Run as administrator".
* Open the file magellan.bat in the notepad.
* Add this line at the start of the file (adapt it to your path from step 2): `SET JAVA_HOME=C:\Program Files\jdk-11.0.1`
* Save the file magellan.bat.
* Magellan should now be started with Java 11. 7

### On Linux:

* Install sowohl 11 as well as Java 8.
* Execute this command in a terminal: `update-alternatives --config java`. Choose the java version you need for your other program.
* Remember the path to Java 11 displayed by the previous command (for instance, `/usr/lib/jvm/java-11-openjkd-amd64`).
* Locate the file magellan.sh (usually at $HOME/Magellan/magellan.sh).
* Edit this file as follows: Add this line at the start of the file (adapted to the path recorded in step 3 above): `export  JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64`
* Change the last line from `java -Xmx1200m -jar "magellan-client.jar" "$@"` to<br /> `$JAVA_HOME/bin/java -Xmx1200m -jar "magellan-client.jar" "$@"`.
* Save the file magellan.sh.
  * Magellan should now be executed with Java 11.



# Is Magellan a Quality Product?

Well, for one thing, Magellan was able to achieve Enno's **Seal of Excellence**. According to the Eressea poll in December 2001 Magellan seems to be by far the most popular tool among the Eressea players.

# Is Magellan Up-To-Date?

Magellan is an open source project with a bunch of developers ensuring that adaptations to the latest Eressea features are always available quickly. Also, the users form an integral part of the Magellan development process by bringing in enhancement requests and new ideas: ([Feedback](/en/feedback/)).
