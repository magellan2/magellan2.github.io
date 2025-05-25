# Ressourcen

Hier wird erl�utert, wie man Magellan um zus�tzliche Features erweitert
  und die mitgelieferten Standarddateien austauscht, um beispielsweise
  alternative Grafiken zu verwenden oder zur Anpassung an ein anderes PBeM.

## Wie setze ich eine Ressourcenpfad?

  Um Plug-Ins, Grafiksets etc. in Magellan einzubinden, muessen sie in
  einen Ressourcenpfad aufgenommen werden. Dazu ruft man die Optionen �ber
  das Men� Extras auf, w�hlt den Reiter 'Ressourcen' und klickt auf 'Neuer
  Pfad...'. Nun erscheint ein Dateiauswahldialog, in dem nur noch die
  betreffende JAR oder ZIP Datei (oder das entsprechende Verzeichnis)
  angegeben werden muss.

  Um die �nderungen wirksam werden zu lassen, muss Magellan neu gestartet
  werden.

## Plug-Ins

  Einige Funktionen von Magellan sind nicht in der Standardversion
  enthalten, dennoch kann sie nachger�stet werden. Als Beispiel seien hier
  die Skinnable Look&amp;Feels angef�hrt.

  Um die Skins nutzen k�nnen, ben�tigt Magellan zus�tzliche Java-Klassen,
  die diese Funktionalit�t bieten. Sie sind in der Datei skinlf.jar
  enthalten, von der Magellan aber zun�chst nichts weiss. Erst indem man in
  Magellan in den Optionen die Datei skinlf.jar als einen neuen
  Ressourcenpfad anlegt, kann Magellan die neuen Klassen finden und nutzen
  (siehe auch [Optionen/System](../../menus/extras/options_system)).

## Ver�nderbare Objekte

  Folgende Elemente, sogenannte Ressourcen, lassen sich in Magellan
  anpassen:

<ul>
  <li>
    Alle Icons, die in den baumartigen Anzeigen auftauchen (z.B. Talente)
  </li>
  <li>
    Die Grafiken, die f�r die Darstellung der Regionen und anderer Objekte
    auf der Karte verwendet werden
  </li>
  <li>
    Die Regeldatei, die grundlegende Informationen �ber ein Spiel enth�lt
    (z.B. die Rekrutierungskosten jeder Rasse)
  </li>
</ul>

## Verzeichnisstruktur

Alle Ressourcen liegen je nach Verwendungszweck in einem bestimmten
  Verzeichnis:

<ul>
  <li>
    about: betrifft den Info Dialog von Magellan
  </li>
  <li>
    images: enth�lt Icons und Kartengrafiken
  </li>
  <li>
    lang: enth�lt die sprachabh�ngigen �bersetzungstabellen
  </li>
  <li>
    rules: enth�lt die Regeldateien
  </li>
</ul>

  Wenn man eigene Ressourcen f�r Magellan erstellt, ist es notwendig, dass
  sie im jeweils richtigen Verzeichnis untergebracht sind, damit Magellan
  sie finden kann.

## Ressourcenpfade

  Im Normalfall findet Magellan alle notwendigen Ressourcen in der Datei
  magellen.jar selbst. Es w�re jedoch sehr unpraktisch, wenn man diese
  Datei ver�ndern m�sste, um eigene Ressourcen zu verwenden. Deshalb ist es
  m�glich, Ressourcenpfade anzugeben, die der Reihe nach und zwar vor den
  Inhalten der jar Datei nach den Ressourcen durchsucht werden.

  Die Ressourcenpfade kann man in Magellan in den Optionen hinzuf�gen,
  l�schen oder editieren (Men� Extras, Optionen, Reiter 'Ressourcen').
  Ressourcenpfade m�ssen nicht unbedingt Verzeichnisse sein, sie k�nnen
  auch auf eine URL im Internet verweisen oder in eine JAR Datei zeigen.

  Soll beispielsweise das Icon f�r das Reiten-Talent ausgetauscht werden,
  legt man die Datei reiten.gif im Verzeichnis C:\Ressourcen\images\icons
  ab und gibt Magellan den neuen Ressourcenpfad C:\Ressourcen. Da Magellan
  nun nach der Datei 'images\icons\reiten.gif' sucht, beginnt es bei den
  Ressourcenpfaden, in diesem Fall C:\Ressourcen, und findet die Datei,
  indem der Ressourcenpfad und der Dateiname mit den Unterverzeichnissen
  aneinandergeh�ngt werden.

  Die genaue Ladereihenfolge von Ressourcen ist wie folgt:

<ol>
  <li>
    Ressourcenpfade der Reihe nach
  </li>
  <li>
    Im aktuellen Verzeichnis (in der Regel das Verzeichnis, in dem sich
    auch die Datei magellan.ini befindet) das Unterverzeichnis 'res'
  </li>
  <li>
    Laden per SystemClassLoader, was im wesentlichen bedeutet, dass die in
    der CLASSPATH Umgebungsvariable angegebenen Verzeichnisse und JAR
    Dateien durchsucht werden
  </li>
  <li>
    Laden per SystemClassLoader mit vorangestelltem res Verzeichnis, was
    die Resource, falls vorhanden, in der JAR Datei finden sollte, aus der
    heraus Magellan ausgef�hrt wird
  </li>
</ol>

  Anhand dieser Ladereihenfolge ist ersichtlich, dass man neue Ressourcen
  auch ohne die Angabe eines Ressourcenpfades einbinden kann, indem man sie
  einfach im gleichen Verzeichnis wie Magellan selbst speichert (die
  Verzeichnisstruktur f�r die jeweilge Resource, z.B. images/icons muss
  nat�rlich eingehalten werden). Diese Verzeichnisstruktur kann man
  herausfinden, indem man das Magellan.jar in Magellan.zip umbenennt und
  entpackt.

## Grafiksets

  Auf der Seite zum [Erstellen von eigenen Grafiksets](../graphicsets_making) finden sich ebenfalls Informationen zu den
  Ressourcenpfaden.


