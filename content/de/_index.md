# Was ist Magellan?

Magellan ist ein vollständiger Client für [Eressea](http://www.eressea.de/) und andere [PbeM](https://de.wikipedia.org/wiki/Pbem). Man
kann damit seine Karte anzeigen, suchen, Befehle geben ... und überhaupt braucht man das Programm fast nur noch zu verlassen, um Mails an die Verbündeten zu schreiben. Fast.

![Magellan Desktop](/images/magellan2-preview.png)

Magellan2 benutzt Java 11 (oder höher) und ist damit auf gängigen Desktop-Betriebssystemen wie Windows, Linux und auch MacOS gleichermaßen lauffähig. Zu den viele Features gehören:

* Anzeige von Karte, Einheiten, Regionsdetails, und allen anderen Reporteigenschaften. Dabei kann die Anordnung der verschiedenen Fenster frei angepasst werden.
* Umfangreicher Befehlseditor mit Autovervollständigung und Syntaxcheck.
* Umfangreiche Vorhersagefunktionen etwa für Übergabe von Gegenständen und Routen.
* Weitgehende Überprüfung der Befehle und Anzeige "Offener Probleme". Macht zusätzliche Werkzege wie ECheck überflüssig.
* Versand der Befehle per Email direkt aus dem Programm heraus.
* Im- und Export von Reports und Karten zum Austausch mit anderen Spielern.
* Schnelle Navigation durch Tastenkürzel, Suche nach Einheiten, Lesezeichen, ...
* Parteistatistiken mit Anzeige aller Gegenstände, Talente, Einkommen etc.
* Alchemieplaner zur Übersicht über Kräuter und Tränke.
* Weitgehende Einstellungsmöglichkeiten, um Magellan an die eigenen Vorlieben anzupassen.
* Möglichkeit, Karten nach frei zu definierenden Kriterien einzufärben und zu beschriften, um zum Beispiel Übersicht über Handelsgüterverteilung, Bauernwachstum, Rohstoffverteilung oder andere Parteien zu erhalten.
* Programmierschnittstelle ExtendedCommands, um die Befehle beliebig zu automatisieren.
* Plugins, mit denen die Möglichkeiten noch mehr erweitert werden können.

# Was ist Magellan nicht?

Magellan ist nur eines von vielen [Client-Programmen](https://wiki.eressea.de/index.php/Befehle_einschicken#Hilfsmittel) für Eressea und steht in keinem Zusammenhang mit dem Eresseateam. Bitte wende dich daher bei Fragen und Problemen an die [Magellan Community](/de/feedback/).

# Läuft Magellan auf meinem Rechner?

Dank Java läuft Magellan auf MS Windows, Linux, MacOS X und diversen anderen Betriebssystemen. Benötigt wird allerdings ein etwas leistungsfähigerer Rechner, gerade wenn die Partei wächst. Die Mindestausstattung liegt bei einem Prozessor mit 450 MHz und 128 MB Hauptspeicher, empfehlenswert sind jedoch 800 MHz und 512 MB Hauptspeicher. Magellan läuft ab Java 11.

# Java? Das kann ich nicht!

Kein Problem, das ist auch nicht nötig. Nach der einmaligen Installation von Java braucht man nur noch Magellan herunter zu laden - eine Datei, die man im Windows-Explorer per Doppelklick starten kann. Mit Programmieren in Java hat das alles nichts zu tun, damit müssen sich nur die Entwickler herumschlagen. Es gibt verschiedene Herausgeber von Java. Eine der einfachsten Möglichkeit, Java zu installieren ist der Download von [AdoptOpenJDK](https://adoptopenjdk.net/releases.html). Wir empfehlen zum Beispiel [Open JDK](https://openjdk.java.net/) oder [Oracle Java SE](https://www.oracle.com/java/).


## Welche Version sollte ich genau herunterladen?

Im Moment (Sommer 2021) haben wir die folgende Empfehlung, die für die meisten passen sollte:

* AdoptOpenJDK
* Natürlich die für dein Betriebssystem (Windows für die meisten)
* OpenJDK 11 (LTS), ab Herbst OpenJDK 17 (LTS)
* HotSpot JVM
* in der Regel x64

## JRE oder JDK?

JDK ist normalerweise nur für Entwickler, JRE eher für Endbenutzer. Falls du die ExtendedCommands von Magellan benutzen willst, brauchst du ein JDK! Der einzige Nachteil des JDK ist die Größe. Wenn du also nicht besonders knapp an Festplattenplatz bist, nimm lieber ein JDK.

## Welche Java-Version habe ich?

* Öffne die Kommandozeile
  * **Unter Windows:** Drücke die Windowstaste um das Startmenü aufzumachen. Tippe dann 'cmd' um die 'Kommandozeile zu öffnen
  * **Unter MacOsX: **Öffne Spotlight (Command + Leertaste oder klick auf die Lupe rechts oben), dann gibt 'terminal' ein.
  * **Unter Linux: **Öffne ein Terminal (je nach Linuxdistribution drücke zum Beispiel die Windowstaste und gib Terminal ein).
* Tippe `java -version` und drücke `Enter`. Eine Ausgabe wie `'openjdk version "11.0.10" 2021-04-20'` heißt zum Beispiel, dass du Version 11 hast. Eine Ausgabe wie "Befehl java nicht erkannt" heißt, dass du vermutlich keine Java hast.

## Ich bekomme folgende Fehlermeldung: 'Error: A JNI Error has occured, please check your installation and try again.'

Du hast wahrscheinlich nicht Java 11 sondern Java 8! Installiere Java 11 (siehe oben).

## Die neueste Version auf java.com ist aber Version 8!

Seit dem Übergang von Java von Sun Microsystems an Oracle haben diese ein neues Lizenzmodell etabliert. Das hat die Herausgabe und Benutzung neuer Java-Implementationen verkompliziert. Deshalb ist für aktuelle Versionen [java.com](https://java.com) nicht mehr der Ort der Wahl. Stattdessen gibt es die oben genannten Alternativen.

## Ich brauche aber Java 8 für ein anderes Program.

Du kannst Magellan trotzdem benutzen, aber du musst ein bisschen tricksen.

### Unter Windows:

* Installiere erst Java 11, dann wieder Java 8. Dein anderes Programm sollte jetzt weiterhin funktionieren.
* Finde den Installationspfad von Java 11 (zum Beispiel: `C:\Programme\jdk-11.0.1`).
* Finde die Datei `magellan.bat` (in der Regel in `C:\Programme\Magellan\magellan.bat`).
* Ändere diese Datei als Administrator. Gehe dazu etwa wie folgt vor: Finde im Startmenü den Eintrag für "notepad". Mache einen Rechstklick darauf und wähle "Mehr ... Als Administrator ausführen".
* Öffne die Datei magellan.bat im Notepad.
* Füge folgende Zeile am Anfang ein (angepasst an deinen Pfad in Schritt 2):
  `SET JAVA_HOME=C:\Programme\jdk-11.0.1`
* Speichere die Datei magellan.bat.
* Jetzt solltest du Magellan mit Java 11 ausführen können.

### Unter Linux:

* Installiere sowohl Java 8 als auch Java 11.
* Führe in der Kommandozeile folgendes Kommando aus: `update-alternatives --config java`. Wähle die Version aus, die du für das andere Programm benötigst.
* Notiere dir den Pfad zu Java 11 (zum Beispiel `/usr/lib/jvm/java-11-openjkd-amd64`).
* Finde die Datei magellan.sh (in der Regel $HOME/Magellan/magellan.sh).
* Ändere die Datei wie folgt: Füge die Zeile `export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64` am Anfang ein (angepasst an deine Installation).
  * Ändere die letzte Zeile von `java -Xmx1200m -jar "magellan-client.jar" "$@"` auf `$JAVA_HOME/bin/java -Xmx1200m -jar  "magellan-client.jar" "$@"` ab.
  * Speichere die Datei magellan.sh.
* Jetzt sollte Magellan mit Java 11 ausgeführt werden.

# Ist Magellan gut?

Nun - immerhin konnte Magellan Ennos **Seal of Excellence** einheimsen. Laut der **Spielerumfrage Ende 2001** scheint Magellan außerdem das bei den Eresseaspielern beliebteste Tool zu sein.

# Wie sieht's mit der Weiterentwicklung aus?

Magellan ist ein Open-Source-Projekt, an dem sich mehrere Entwickler beteiligen. Dadurch ist sichergestellt, dass Anpassungen z.B. an Änderungen im CR immer sehr schnell umgesetzt werden. Durch Vorschläge und Hinweise können die Benutzer neue Ideen einbringen und Einfluss auf existierende Features nehmen. ([Feedback](/de/feedback/))
