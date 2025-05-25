
# Plugins

Plugins sind externe Module oder Erweiterungen, die sich in den Magellan-Client einklinken und erweiterte Funktionen anbieten, die es so in Magellan nicht gibt.

Uns sind folgende Plugins bis dato bekannt:

* [Alliance Plugin](/de/plugins/alliance)
* [Extended Commands Plugin](/de/plugins/extcmds)
* [LightHouseIcons Plugin](/de/plugins/lighthouseicons)
* [MapCleaner Plugin](/de/plugins/mapcleaner)
* [MapEdit Plugin](/de/plugins/mapedit)
* [MemoryWatch Plugin](/de/plugins/memorywatch)
* [MapIcons Plugin](/de/plugins/mapicons)
* [ShipLoader Plugin](/de/plugins/shiploader)
* [Statistics Plugin](/de/plugins/statistics)
* [Teacher Plugin](/de/plugins/teacher)

Die Installation der meisten Plugins ist denkbar einfach. Jedes Plugin wird genauso
wie Magellan als Installer JAR ausgeliefert. Wenn der Installer nach einem
Installationspfad verlangt, nennt man ihm einfach den Pfad, in dem Magellan
installiert ist. Der Installer prüft dann die vorhandene Magellan Version und
installiert dann das Plugin an geeigneter Stelle. Nach dem nächsten Neustart von
Magellan wird automatisch das Plugin erkannt und in den Client integriert.

## Entwicklung von Plugins

Die Entwicklung von Plugins ist ebenfalls relativ einfach, vorausgesetzt man kennt
sich in der Programmiersprache Java. Die Entwickler haben die bestehende
Schnittstelle von Magellan 1.x erweitert. Man muss in seinem Projekt dann mindestens
eine Klasse besitzen, die sich vom Interface
`magellan.client.extern.MagellanPlugIn`
ableitet und alle darin benötigten Methoden implementiert. Eine genaue Beschreibung
für all die vielen Möglichkeiten des Clients findest Du in der API in deiner lokalen
Magellaninstallation unter
`doc/api`
oder im Quellcode auf GitHub.

Hier nun eine kurze Beschreibung (HowTo) für den Installer.

Für die Entwicklung mit Eclipse muss das Plugin ein eigenes Projekt in Eclipse sein.
Das Magellan2-Projekt muss ebenfalls vorhanden sein. Die Verzeichnisstruktur des

Plugin-Projekts sollte etwa so aussehen:

<pre>
- src
   - ...Source files...
- doc
   - LICENSE.txt
   - CHANGELOG.txt
   - ....
- etc
   - ...message properties...what ever
- lib
   - ...optionale Bibliotheken...
- build.installer.xml
- izpack-install.template.xml
- README.md
</pre>

In
`build.installer.xml`
(das von einem anderen Plugin übernommen werden kann) sollten ein paar Variablen
geändert werden:


* `plugin.displayname` - Name des Plugins
* `plugin.basename` - Namensbestandteil von Verzeichnissen und des
    installers
* `plugin.author` - Name des Autors
* `plugin.author.email` - Mailadresse
* `plugin.version` - Aktuelle Versionsnummer (Buildnummer wird
    außerdem automatisch erzeugt)
* `plugin.description` - Kurzbeschreibung, was das Plugin macht
* `magellan2` - Verzeichnis von Magellan2-src (normalerweise `${basedir}/../Magellan2`



Die Datei `izpack-install.template.xml` muss in der Regeln nicht angefasst werden.

Ja, das war's auch schon. Wenn man die beiden Dateien aus einem anderen Projekt
kopiert, die Verzeichnisstruktur beibehält und die obigen Daten ändert, ist das eine
Sache von 'ner knappen Minute. Gestartet wird das Target create-installer (das
default target). Wenn man das macht, wird ein Verzeichnis release angelegt und darin
ist das Plugin mit Installer.<br /> ACHTUNG: Direkt im Hauptverzeichnis wird bei der
Ausführung des Scripts auch ein JAR erzeugt, das ist aber nur der kompilierte Source
des Plugins (kein Installer). Der befindet sich immer im Verzeichnis 'release'.
