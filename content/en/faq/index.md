
# FAQ

Frequently Asked Questions:

## 1. Questions about installation

* [What is Java and why is it important?](#Java)

* [What does "Installer JAR" mean?](#Installer)

* [magellan-client.jar? Shouldn't the file be called magellan.exe?](#Dateiname)

* [Why does another program (e.g. WinZip or PowerArchiver) start, when I try to start Magellan by double-clicking?](#Verknuepfung)

* [Why doesn't Magellan start when I click the file magellan-client.jar?](#keinStart)

* [How do I make Magellan the default program for CR-files under Windows2000/XP?](#CRVerknuepfung)

* [How do I start Magellan from the command prompt?](#Kommandozeilenstart)

* [How do I get Magellan to run on a Mac?](#MacMagellan)

* [How do I handle resource paths?](#Resourcenpfade)

* [Even though I have enough RAM, Magellan reports a lack of memory. Why?](#Speichermangel)

## 2. Questions about Magellan

* [Why does Magellan all of a sudden not use Base-36 numbers for the units anymore?](#base36nummern)

* [How can I use Vorlage to automatically confirm the orders of units?](#VorlageBefehlsbestaetigung)

* [I just don't get the ARR, ATR or the Tooltips!](#ARR)

<a name="Java" id="Java"></a>

### Q: What is Java and why is it important?

Java is the programming language used to write Magellan. The special thing about it is that it runs on many platforms (Windows, Linux, Mac, ...). To run Magellan you need to install Java. One of the easiest ways to install Java right now is to download an installer from [AdoptOpenJDK](https://adoptopenjdk.net/releases.html). There are several Java distributions. We recommend, for example, [Open JDK](https://openjdk.java.net) or [Oracle Java SE](https://www.oracle.com/java).


<a name="Installer" id="Installer"></a>

### Q: What does "Installer JAR" mean?

Starting from Version 2, Magellan does not consist of just one file any more. We have divided it into several files. In order to keep the installation of Magellan simple, we have packaged the program into one file called "Installer JAR". It's a Java program, just like Magellan itself. It unpacks its content to a location you can specify during installation.

Starting from version 2 it is also possible to copy a new version over an old version without first de-installing the old version. The configuration files are conserved and adjusted when you start magellan the next time.

<a name="Dateiname" id="Dateiname"></a>

### Q: magellan-client.jar? Shouldn't the file be called magellan.exe?

No. To be honest, it is (almost) nothing more than a renamed ZIP-file, but one that Java can handle and that you therefore don't need to unpack with WinZip or a similar program. Magellan really consists of a lot of files that are simply gathered within magellan-client.jar, but Magellan should start when the JAR-file is double-clicked.

<a name="Verknuepfung" id="Verknuepfung"></a>

### Q: Why does another program (e.g. WinZip or PowerArchiver) start, when I try to start Magellan by double-clicking?

Because it is set to be the default program for the .jar extension instead of Java. In PowerArchiver and WinZip you can undo that in these programs' options, otherwise some manual action is needed:

* In the Start menu click 'Run'

* Type 'regedit' and click OK

* In the tree on the left click the 'HKEY_CLASSES_ROOT' entry and click on the entry '.jar'

* In the window on the right, doubleclick on '(Default)'

* Type `jarfile` and click OK

* Close the regedit program - done.

<a name="keinStart" id="keinStart"></a>

### Q: Why doesn't Magellan start when I click the file magellan-client.jar?

A possible cause for this is that the file `magellan-client.jar` is in a folder with a name that has spaces in it. This isn't a problem that is caused by an error in Magellan, but by an inconvenience in the default link between `.jar`-files with java.

The simple solution is of course to move Magellan to a different folder. The complex solution is as follows:

* In the Start menu click 'Run'

* Type 'regedit' and click OK

* In the tree on the left click the 'HKEY_CLASSES_ROOT' entry and click on the entry 'jarfile'

* Open the subentries 'shell', 'open' and finally 'command'

* In the window on the right, doubleclick '(Default)', and something like `(path to Java)\javaw.exe -jar %1` should appear.

* Replace `%1` with `"%1"`

* Close the regedit program - done.

Background: If Magellan is in `C:\My Documents\magellan-client.jar`, then the regedit entry would try to initiate java to call
`(Path to Java)\javaw.exe -jar C:\My Documents\magellan-client.jar` , which means that java would try to run the file `C:\My` with parameters `Documents\magellan-client.jar`, which doesn't quite work out right. With the quotes this looks like this: `(Path to java)\javaw.exe -jar "C:\My Documents\magellan-client.jar"` , and here the actual `magellan-client.jar` file is started.

If this didn't help you can try to [start Magellan from the command prompt](#4) to be able to read possible error messages.

<a name="CRVerknuepfung" id="CRVerknuepfung"></a>

### Q: How do I make Magellan the default program for CR-files under Windows2000/XP?

To do this you need to set up a link between Magellan and the "CR" filetype. You
can do this in Explorer under Extras, Folderoptions, Filetypes:

* Choose filetype "CR"

* Click the "Advanced" button

* In the "Edit filetype" window click the "New" button

* In the "Action" field, enter `Magellan`

* In the "Program for this action" field enter `"(Path to java)\javaw.exe" -jar "(Path to magellan)\magellan-client.jar" "%1"`. javaw.exe and magellan-client.jar have to be entered with the complete path (e.g. "c:\games\eressea\magellan-client.jar"). If the path contains spaces, the surrounding  quotes are mandatory.

* Click "OK"

* In the "Edit filetype" window choose the "Magellan" entry from the list "Actions".

* Click the "As standard" button. The Magellan entry is now shown in bold font.

* Done :-)


<a name="Kommandozeilenstart" id="Kommandozeilenstart"></a>

### Q: How do I start Magellan from the command prompt?

Magellan (or Java) often only gives error messages at the command prompt, therefore it can be useful to start Magellan from here.

To do this you first start the command prompt (in Windows ME under Start menu open 'Run', type `command` and click OK, under Windows 2000/XP the command is `cmd` ). Then enter the following command: `javaw -jar "(Path to Magellan)\magellan-client.jar"`, so e.g. `javaw -jar "C:\My Documents\magellan-client.jar"`.

The command prompt parameters for Magellan are listed in the [Reference](reference/commandline.html).

<a name="MacMagellan" id="MacMagellan"></a>

### Q: How do I get Magellan to run on a Mac?

Unfortunately Apple has only with the Mac OS X just released a current Java-version that will support Magellan. To run Magellan use the console the same as under Windows at the [command prompt](#4).

<a name="Resourcenpfade" id="Resourcenpfade"></a>

### Q: How do I handle resource paths?

Resource paths are described on [their own site](reference/ressources.html).

<a name="Speichermangel" id="Speichermangel"></a>

### Q: Even though I have enough RAM, Magellan reports a lack of memory. Why?

Simply allocate a bit more memory for the Java Virtual Machine (VM). Magellan requests memory from the VM, and when VM does not have any to give, Magellan simply fails.

You can allocate memory as follows:


Under Windows:

Create an icon for Magellan on your desktop, right-click on it and go to "Properties". Under "Target" enter the following (the path should of course match your particular setup):

    C:\Program Files\Java\jre6\bin\javaw.exe -Xms128M -Xmx512M -jar "c:\Program Files\Eressea\Magellan\magellan-client.jar"

or simply

    javaw -Xms128M -Xmx512M -jar "c:\Program Files\Eressea\Magellan\magellan-client.jar"

Under Linux simply type (in the shell, in the magellan directory):

    java -Xms128M -Xmx512M -jar magellan-client.jar

This tells the Java-VM to allocate a minimum of 128MB and a maximum of 512MB. You can change these values according to your own setup.

<a name="base36nummern" id="base36nummern"></a>

### Q: Why does Magellan all of a sudden not use Base-36 numbers for the units anymore?

Most like the `36;Basis` tag is missing in the CR. This basic tag defines the number base that Magellan uses. For Eressea-CRs this usually is 36, other PBeMs using older CR-versions (e.g. Verdanon) use decimal (base 10) and don't know this tag. That's why Magellan assumes base 10 when there is no mention of another number base in the CR.


<a name="VorlageBefehlsbestaetigung" id="VorlageBefehlsbestaetigung"></a>

### Q: How can I use Vorlage to automatically confirm the orders of units?

With
    // #tag EINHEIT ejcOrdersConfirmed 1


<a name="ARR" id="ARR"></a>

### Q: I just don't get the ARR, ATR or the Tooltips!

A good help to ARR, ATR and the Tooltips can be found [here.](http://www.duckstein.net/atranleitung.html)

