# FAQ<

Frequently asked questions:

## 1. Fragen zur Installation

* <a href="#Java">Was ist Java und wozu ist es gut?</a>

* <a href="#Installer">Was bedeutet Installer JAR</a>

* <a href="#Dateiname">magellan-client.jar? Müsste die Datei nicht magellan.exe heißen?</a>
        
* <a href="#Verknuepfung">Warum startet ein anderes Programm (z.B. WinZip oder PowerArchiver), wenn ich Magellan per Doppelklick starte?</a>
        
* <a href="#keinStart">Warum startet Magellan nicht, wenn ich auf die Datei magellan-client.jar klicke?</a>
        
* <a href="#CRVerknuepfung">Wie verknüpfe ich unter Windows2000/XP CR-Dateien mit Magellan?</a>
        
* <a href="#Kommandozeilenstart">Wie starte ich Magellan von der Kommandozeile?</a>

* <a href="#MacMagellan">Wie bekomme ich Magellan auf einem Mac zum laufen?</a>

* <a href="#Resourcenpfade">Wie gehe ich mit Resourcenpfaden um?</a>

* <a href="#Speichermangel">Obwohl ich genug RAM habe, meldet Magellan Speichermangel. Wieso?</a>

## 2. Fragen zu Magellan

* <a href="#base36nummern">Warum verwendet Magellan plötzlich keine Base-36 Nummern mehr für die Einheiten?</a>
        
* <a href="#VorlageBefehlsbestaetigung">Wie kann ich mit Vorlage die Befehle von Einheiten automatisch bestätigen?</a>
        
* <a href="#ARR">Ich komme mit dem ARR, dem ATR oder den Tooltips nicht zurecht!</a>


## Antworten
 
<a id="Java" name="Java"></a>

### Was ist Java und wozu ist es gut?

Java ist die Programmiersprache mit der Magellan geschrieben ist. Das Besondere an Java ist, dass es auf verschiedenen Plattformen läuft (Windows, Linux, Mac, ...). Um Magellan auszuführen, muss Java vorher installiert sein. Eine der einfachsten Möglichkeiten, Java zu installieren ist der Download von <a href="https://adoptopenjdk.net/releases.html" class="externalLink">AdoptOpenJDK</a>. Wir empfehlen zum Beispiel <a href="https://openjdk.java.net/" class="externalLink">Open JDK</a> oder <a href="https://www.oracle.com/java/" class="externalLink">Oracle Java SE</a>.


<a id="Installer" name="Installer"></a>

### F: Was bedeutet Installer JAR?

Ab Version 2 von Magellan ist das Programm nicht mehr nur eine Datei. Wir haben Magellan in viele Dateien aufgeteilt. So sieht man jetzt im Dateisystem alle Bilder und Icons, die Magellan verwendet oder auch alle Sprachdateien für die Internationalisierung (sogenannte Resources). Damit die Installation von Magellan nicht so aufwendig wird, liefern wir das Programm jetzt in einem Paket aus, dass man als Installer JAR bezeichnet. Es ist ein Java Programm, genauso wie Magellan. Es entpackt sich selbst an einen beliebigen Ort, den du während der Installation festlegen kannst.<br /> Ab Version 2.0 ist es übrigens einfach möglich, eine neue Version über eine alte Version zu installieren ohne vorher die alte Version zu deinstallieren. Die Konfiguration bleibt erhalten und wird während des ersten Starts angepasst.


<a id="Dateiname" name="Dateiname"></a>

### F: magellan-client.jar? Müßte die Datei nicht magellan.exe heißen?

Nein. Um ehrlich zu sein, ist das (fast) nur eine umbenannte ZIP-Datei, aber eine,
mit der Java etwas anfangen kann und die du deshalb auch nicht mit WinZip oder ähnlichen
Programmen dekomprimieren musst. Magellan besteht eigentlich aus sehr vielen
Programmdateien, die einfach nur in magellan-client.jar zusammengefasst sind, trotzdem
sollte Magellan nach einem Doppelklick auf die JAR-Datei starten.


<a id="Verknuepfung" name="Verknuepfung"></a>

### F: Warum startet ein anderes Programm (z.B. WinZip oder PowerArchiver), wenn ich Magellan per Doppelklick starte?

Weil es sich statt Java mit der Dateiendung .jar verknüpft hat. Bei PowerArchiver und WinZip kann man das in den Optionen wieder rückgängig machen, ansonsten ist Handarbeit angesagt:

* Wähle im Startmenü den Punkt 'Ausführen'
* Gib `regedit` ein und klicke auf OK
* öffne links im Baum den Eintrag 'HKEY_CLASSES_ROOT' und dann klicke auf den Eintrag '.jar'
* Mache nun im Fenster rechts einen Doppelklick auf '(Default)'
* Gib `jarfile` ein und klicke OK
* Schließe das regedit Programm - fertig


<a id="keinStart" name="keinStart"></a>

### F: Warum startet Magellan nicht, wenn ich auf die Datei magellan-client.jar klicke?

Eine mögliche Ursache dafür ist, dass sich die Datei `magellan-client.jar` in einem Ordner befindet, dessen Name Leerzeichen enthält. Dieses Problem wird nicht durch einen Fehler in Magellan verursacht sondern durch eine ungeschickte Verknüpfung von `.jar`-Dateien mit java.

Die einfache Lösung ist natürlich, Magellan in einen anderen Ordner zu verschieben. Die komplizierte Lösung sieht folgendermaßen aus:

* Wähle im Startmenü den Punkt 'Ausführen'
* Gib 'regedit' ein und klicke auf OK
* öffne links im Baum den Eintrag 'HKEY_CLASSES_ROOT' und dann klicke auf den Eintrag 'jarfile'
* öffne die Untereinträge 'shell', 'open' und schließlich 'command'
* Mache nun im Fenster rechts einen Doppelklick auf '(Default)', dort sollte nun etwas in der Form `(Pfad zu Java)\javaw.exe -jar %1` stehen.
* Ersetze nun `%1` durch `"%1"`
* Schließe das regedit Programm - fertig


Hintergrund: Liegt Magellan im Ordner `C:\Eigene Dateien\magellan-client.jar` bewirkt der regedit-Eintrag einen Aufruf von java in der Form `(Pfad zu Java)\javaw.exe -jar C:\Eigene Dateien\magellan-client.jar`, das heißt, java würde versuchen, die Datei `C:\Eigene`mit dem Parameter `Dateien\magellan-client.jar` zu starten, was nicht so richtig gut klappen kann. Mit den Anführungszeichen sieht es dann so aus:

    (Pfad zu java)\javaw.exe -jar "C:\Eigene Dateien\magellan-client.jar"

, es wird hier also wirklich die Datei `magellan-client.jar` gestartet.

Sollte das nicht geholfen haben, kann man versuchen, <a href="#4">Magellan von der Kommandozeile aus zu starten</a>, um eventuelle Fehlermeldungen sehen zu können.


<a id="CRVerknuepfung" name="CRVerknuepfung"></a>

### F: Wie verknüpfe ich unter Windows2000/XP CR-Dateien mit Magellan?

Dafür muss man für den Dateityp "CR" einen entsprechenden Vorgang definieren. Das geht im Dateimanager (Explorer) unter Extras, Ordneroptionen, Dateitypen:

* Wähle den Dateityp "CR".
* Wähle den Button "Erweitert".
* Wähle im Fenster "Dateityp bearbeiten" den Button "Neu".
* Trage im Feld "Vorgang" den Wert `Magellan` ein.
* Trage im Feld "Anwendung für diesen Vorgang" den Wert `"(Pfad zu Java)\javaw.exe" -jar "(Pfad zu Magellan)\magellan-client.jar" "%1"` ein. javaw.exe und magellan-client.jar müssen dabei mit vollständigem Pfad eingegeben werden (z.B. "c:\spiele\eressea\magellan-client.jar"). Enthält dieser Pfad Leerzeichen sind die umschließenden Anführungszeichen unbedingt notwendig.
* Wähle den Button "OK"
* Wähle im Fenster "Dateityp bearbeiten" den Eintrag "Magellan" aus der Liste "Vorgänge" aus.
* Wähle den Button "Als Standard". Der Eintrag Magellan ist nun fett dargestellt.
* Fertig :-)


<a id="Kommandozeilenstart" name="Kommandozeilenstart"></a>

### F: Wie starte ich Magellan von der Kommandozeile?

Magellan (bzw. Java) gibt Fehlermeldungen oft nur in der Eingabeaufforderung aus, deshalb kann es nützlich sein, Magellan von der Kommandozeile aus zu starten, um solche Fehlermeldungen zu sehen.

Dazu startet man zunächst die MS-DOS-Eingabeaufforderung (unter Windows ME im Startmenü den Punkt 'Ausführen' öffnen, `command` eingeben und auf OK klicken, bei Windows 2000/XP lautet das Kommando `cmd`). Danach gibt man folgenden Befehl ein: `javaw -jar "(Pfad zu Magellan)\magellan-client.jar"` also z.B. `javaw -jar "C:\Eigene Dateien\magellan-client.jar"`.

Die Kommandozeilen-Parameter von Magellan sind in der <a href="/de/help/reference/commandline">Referenz</a> beschrieben.


<a id="MacMagellan" name="MacMagellan"></a>

### F: Wie bekomme ich Magellan auf einem Mac zum laufen?

Leider hat Apple erst mit dem Mac OS X eine aktuelle Java-Version veröffentlicht, unter der auch Magellan funktioniert. Zum Laden von Magellan geht man an der Konsole so vor, wie unter Windows an der <a href="#4">Kommandozeile</a>.


<a id="Resourcenpfade" name="Resourcenpfade"></a>

### F: Wie gehe ich mit Resourcenpfaden um?

Die Resourcenpfade sind auf einer <a href="/de/help/reference/ressources">eigenen Seite</a> beschrieben.


<a id="Speichermangel" name="Speichermangel"></a>

### F: Obwohl ich genug RAM habe, meldet Magellan Speichermangel.  Wieso?

Du mußt der Java-VM einfach etwas mehr Speicher zubilligen. Magellan fordert den Speicher von der VM an, wenn die ihm den Speicher nicht geben will, guckt Magellan in die Röhre.

Die Speicherzuteilung kannst Du folgendermaßen machen:

Unter Windows:<br /> Erstelle eine Verknüpfung von Magellan, klicke mit der rechten Maustaste drauf und geh auf "Eigenschaften". Dort trägst Du unter "Ziel" folgende Zeile ein (die Pfade müssen natürlich an Deine Installation angepasst werden):

    "C:\Programme\Java\jre6/bin/javaw.exe" -Xms128M -Xmx512M -jar "c:\Programme\Eressea\Magellan\magellan-client.jar"

oder einfach

    javaw.exe -Xms128M -Xmx512M -jar "c:\Programme\Eressea\Magellan\magellan-client.jar"

Unter Linux einfach (in der Shell, im Magellan-Verzeichnis):

    java -Xms128M -Xmx512M -jar magellan-client.jar

Dies weist die Java-VM an, sich mindestens 128MB und maximal 512MB RAM zu sichern. Je nach Speicherausbau kannst Du die Werte auch verändern.


<a id="base36nummern" name="base36nummern"></a>

### F: Warum verwendet Magellan plötzlich keine Base-36 Nummern mehr für die Einheiten?

Im CR fehlt vermutlich das Tag `36;Basis` . Das Basis-Tag definiert die Zahlenbasis mit der Magellan arbeitet. Bei Eressea-CRs ist das normalerweise 36, andere PBeMs die ältere CR-Versionen benutzen (z.B. Verdanon) arbeiten mit Dezimalzahlen (Basis 10) und kennen dieses Tag nicht. Daher nimmt Magellan Basis 10 an, wenn im CR nichts anderes definiert ist.


<a id="VorlageBefehlsbestaetigung" name="VorlageBefehlsbestaetigung"></a>

### F: Wie kann ich mit Vorlage die Befehle von Einheiten automatisch bestätigen?

Mit `// #tag EINHEIT ejcOrdersConfirmed 1`


<a id="ARR" name="ARR"></a>

### F: Ich komme mit dem ATR, dem ARR oder den Tooltips nicht zurecht!

Eine gute Hilfe zum ATR, ARR und den Tooltips findet sich <a href="http://www.duckstein.net/atranleitung.html">hier.</a>



