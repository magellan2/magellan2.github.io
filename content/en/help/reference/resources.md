<span id="top"></span>

# Ressourcen

Hier wird erläutert, wie man Magellan um zusätzliche Features erweitert
und die mitgelieferten Standarddateien austauscht, um beispielsweise
alternative Grafiken zu verwenden oder zur Anpassung an ein anderes
PBeM.

## Wie setze ich eine Ressourcenpfad?

Um Plug-Ins, Grafiksets etc. in Magellan einzubinden, muessen sie in
einen Ressourcenpfad aufgenommen werden. Dazu ruft man die Optionen über
das Menü Extras auf, wählt den Reiter 'Ressourcen' und klickt auf 'Neuer
Pfad...'. Nun erscheint ein Dateiauswahldialog, in dem nur noch die
betreffende JAR oder ZIP Datei (oder das entsprechende Verzeichnis)
angegeben werden muss.

Um die Änderungen wirksam werden zu lassen, muss Magellan neu gestartet
werden.

## Plug-Ins

Einige Funktionen von Magellan sind nicht in der Standardversion
enthalten, dennoch kann sie nachgerüstet werden. Als Beispiel seien hier
die Skinnable Look&Feels angeführt.

Um die Skins nutzen können, benötigt Magellan zusätzliche Java-Klassen,
die diese Funktionalität bieten. Sie sind in der Datei skinlf.jar
enthalten, von der Magellan aber zunächst nichts weiss. Erst indem man
in Magellan in den Optionen die Datei skinlf.jar als einen neuen
Ressourcenpfad anlegt, kann Magellan die neuen Klassen finden und nutzen
(siehe auch [Optionen/System](../menus/extras/options_system/)).

## Veränderbare Objekte

Folgende Elemente, sogenannte Ressourcen, lassen sich in Magellan
anpassen:

- Alle Icons, die in den baumartigen Anzeigen auftauchen (z.B. Talente)
- Die Grafiken, die für die Darstellung der Regionen und anderer Objekte
  auf der Karte verwendet werden
- Die Regeldatei, die grundlegende Informationen über ein Spiel enthält
  (z.B. die Rekrutierungskosten jeder Rasse)

  
  

## Verzeichnisstruktur

Alle Ressourcen liegen je nach Verwendungszweck in einem bestimmten
Verzeichnis:

- about: betrifft den Info Dialog von Magellan
- images: enthält Icons und Kartengrafiken
- lang: enthält die sprachabhängigen Übersetzungstabellen
- rules: enthält die Regeldateien

  
  

Wenn man eigene Ressourcen für Magellan erstellt, ist es notwendig, dass
sie im jeweils richtigen Verzeichnis untergebracht sind, damit Magellan
sie finden kann.

## Ressourcenpfade

Im Normalfall findet Magellan alle notwendigen Ressourcen in der Datei
magellen.jar selbst. Es wäre jedoch sehr unpraktisch, wenn man diese
Datei verändern müsste, um eigene Ressourcen zu verwenden. Deshalb ist
es möglich, Ressourcenpfade anzugeben, die der Reihe nach und zwar vor
den Inhalten der jar Datei nach den Ressourcen durchsucht werden.

Die Ressourcenpfade kann man in Magellan in den Optionen hinzufügen,
löschen oder editieren (Menü Extras, Optionen, Reiter 'Ressourcen').
Ressourcenpfade müssen nicht unbedingt Verzeichnisse sein, sie können
auch auf eine URL im Internet verweisen oder in eine JAR Datei zeigen.

Soll beispielsweise das Icon für das Reiten-Talent ausgetauscht werden,
legt man die Datei reiten.gif im Verzeichnis C:\Ressourcen\images\icons
ab und gibt Magellan den neuen Ressourcenpfad C:\Ressourcen. Da Magellan
nun nach der Datei 'images\icons\reiten.gif' sucht, beginnt es bei den
Ressourcenpfaden, in diesem Fall C:\Ressourcen, und findet die Datei,
indem der Ressourcenpfad und der Dateiname mit den Unterverzeichnissen
aneinandergehängt werden.

Die genaue Ladereihenfolge von Ressourcen ist wie folgt:

1.  Ressourcenpfade der Reihe nach
2.  Im aktuellen Verzeichnis (in der Regel das Verzeichnis, in dem sich
    auch die Datei magellan.ini befindet) das Unterverzeichnis 'res'
3.  Laden per SystemClassLoader, was im wesentlichen bedeutet, dass die
    in der CLASSPATH Umgebungsvariable angegebenen Verzeichnisse und JAR
    Dateien durchsucht werden
4.  Laden per SystemClassLoader mit vorangestelltem res Verzeichnis, was
    die Resource, falls vorhanden, in der JAR Datei finden sollte, aus
    der heraus Magellan ausgeführt wird

  
  

Anhand dieser Ladereihenfolge ist ersichtlich, dass man neue Ressourcen
auch ohne die Angabe eines Ressourcenpfades einbinden kann, indem man
sie einfach im gleichen Verzeichnis wie Magellan selbst speichert (die
Verzeichnisstruktur für die jeweilge Resource, z.B. images/icons muss
natürlich eingehalten werden). Diese Verzeichnisstruktur kann man
herausfinden, indem man das Magellan.jar in Magellan.zip umbenennt und
entpackt.

## Grafiksets

Auf der Seite zum [Erstellen von eigenen
Grafiksets](graphicsets_making/) finden sich ebenfalls Informationen
zu den Ressourcenpfaden.
