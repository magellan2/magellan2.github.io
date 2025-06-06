# Erstellen von Grafiksets

  <em>Warum schon wieder ein neues Grafiksetformat?</em> Genau diese Frage
  stellte sich beim Entwurf des neuen Kartenmoduls; das Ergebnis ist
  eigentlich kein weiteres Grafiksetformat, denn mit dem hier vorgestellten
  Konzept ist die Anpassung an beliebige Formate m�glich, solange die
  notwendigen Information �ber die Zellengeometrie zur Verf�gung stehen.
  Dadurch k�nnen beispielsweise auch existierende Grafiksets anderer
  Clients unver�ndert �bernommen werden, wenn die Grafiken im GIF oder PNG
  Format vorliegen. Man muss lediglich eine passende Datei cellgeometry.txt
  erzeugen, die die Geometrieinformation �ber das vorliegende Grafikset
  enth�lt.

##  Ressourcenpfade

  Die <a href="ressources">Resourcenseite</a> enth�lt grundlegenede
  Informationen zu Resourcen und Resourcenpfaden.

  Magellan l�dt Dateien (z.B. Grafiken) immer aus bestimmten
  Verzeichnissen, die auf den Verwendugszweck der Datei hinweisen. Bei den
  Grafikdateien f�r die Karte ist das 'images/map/', ein Grafikset besteht
  deshalb immer aus einem Verzeichnis oder einem Archiv (ZIP oder JAR
  Datei), das die Kartengrafiken in diesen Unterverzeichnissen enth�lt.

  Ein Ressourcenpfad ist ein Verweis auf so eine Ressourcenquelle, beim
  Laden der Datei Ebene.png wird z.B. einfach der Ressourcenpfad, das
  Verzeichnis 'images/map' und der Dateiname 'Ebene.png' aneinander
  geh�ngt, um auf die Datei zuzugreifen, also z.B.
  'C:\Grafiksets\images\map\Ebene.gif" wenn man "C:\Grafiksets" als
  Ressourcenpfad eingestellt ist. Beim Zugriff werden zun�chst alle
  Ressourcenpfade durchsucht und dann, falls sie in keinem Ressourcenpfad
  gefunden werden konnte, auf die Standardgrafiken in der Magellan
  Jar-Datei zugegriffen.

  Man kann ein Grafikset auch als Archiv (ZIP oder JAR Datei) an andere
  weitergeben, um die Handhabung zu vereinfachen. Dazu muss man nur das
  Set, also die Grafikdateien und cellgeometry.txt, in eine ZIP Datei oder
  JAR Datei packen. Die Dateien m��en aber auf jeden Fall innerhalb dieses
  Archivs in einem 'images/map/' Unterverzeichnis liegen. Dann kann jeder
  Magellan Benutzer das Grafikset nutzen, indem er dieses Archiv als
  Ressourcenpfad im Optionsdialog von Magellan eintr�gt.

## Dateinamen

  Hier sind die Namen der Dateien aufgef�hrt, die die bisher existierenden
  Renderer verwenden, um bestimmte Objekte darzustellen. F�r den
  vollst�ndigen Namen, den die Datei tats�chlich tragen muss, ist jeweils
  die Endung ".png", ".gif" und/oder "-alpha.gif" anzuh�ngen.

  Die Dateinamen m�ssen alle kleingeschrieben werden, sonst kann Magellan
  nicht auf sie zugreifen!

* Regionen: Alle Regionsnamen ohne Umlaute (z.B. "wueste"), zus�tzlich "nebel" f�r den Fog-of-War
* Regionen: Alle Regionsnamen ohne Umlaute (z.B. "wueste"), zus�tzlich Grenzen: "strasse0" (NW) bis "strasse5" (SW, im Uhrzeigersinn) sowie "strasse_incomplete0" (NW) bis "strasse_incomplete5" (SW, im Uhrzeigersinn). Gibt es keine Grafiken f�r unfertige Strassen, werden die Grafiken f�r fertige Strassen genommen.
* Regionen: Alle Regionsnamen ohne Umlaute (z.B. "wueste"), zus�tzlich Geb�ude: Alle Geb�udenamen ohne Umlaute (z.B. "saegewerk")
* Regionen: Alle Regionsnamen ohne Umlaute (z.B. "wueste"), zus�tzlich Schiffe: "schiff0" (Keine K�ste), "schiff1" (NW) bis "schiff6" (SW, im Uhrzeigersinn)
* Regionen: Alle Regionsnamen ohne Umlaute (z.B. "wueste"), zus�tzlich Richtungsanzeigen: "pfeil0" (NW) bis "pfeil5" (SW, im Uhrzeigersinn)
* Regionen: Alle Regionsnamen ohne Umlaute (z.B. "wueste"), zus�tzlich Selektionsmarkierungen: "active", "selected"

Alle Dateien sollten zusammen mit der Datei cellgeometry.txt (siehe
'Zellengeometrie') in einem gemeinsamen Verzeichnis 'images/map/' liegen.
## Dateiformat

  Die Grafikdateien d�rfen vom Format PNG oder GIF sein, von Alphakan�len
  bzw. Transparenz wird dabei in unterschiedlicher Art und Weise Gebrauch
  gemacht:

  PNG: Wird eine Datei mit der Endung .png gefunden, wird sie verwendet und
  die enthaltene Alphakanalinformation direkt genutzt. PNG Dateien haben
  den Vorteil, dass sie 24 Bit Farbtiefe und einen integrierten 8-bit
  Alphakanal erlauben, leider unterst�tzt Java 1.2 noch keine PNG Grafiken,
  deshalb k�nnen nur Anwender mit einem JRE &gt;= 1.3 solche Grafiksets
  benutzen.

  GIF + Alphakanal: Wird keine Datei mit der Endung ".png" gefunden, sucht
  der Renderer nach einer Datei mit der Endung ".gif", die die RGB
  Informationen des Bildes enth�lt und einer Datei mit der Endung
  "-alpha.gif", die als Graustufenbild interpretiert und als Alphakanal f�r
  das andere GIF verwendet wird.

  GIF: Gibt es keine Datei mit der Endung "-alpha.gif", aber eine
  Standard-GIF Datei, wird die darin enthaltenen RGB und
  Transparenzinformation genutzt.

## Gr��e der Grafiken / Zellengeometrie

  Prinzipiell ist die Gr��e der Grafiken beliebig, muss aber innerhalb
  eines Grafiksets f�r alle Bilder gleich sein. Au�erdem ben�tigt der
  Client Informationen �ber die Geometrie des Regionssechsecks, also dessen
  Eckkoordinaten, sowie dessen Position in der Grafik und die Gesamtgr��e
  der Grafik. Das sieht dann ungef�hr folgenderma�en aus:

<img src="/images/help/magellan/reference_graphicsets_cellgeometry.gif" alt="" border="0" /> 

<pre>
x0=32  &lt;- x-Koordinate des Eckpunktes auf 12 Uhr
x1=63  &lt;- x-Koordinate des Eckpunktes auf 2 Uhr
x2=63
x3=32
x4=0  &lt;- x-Koordinate des Eckpunktes auf 8 Uhr (Sechseckkoordinaten, also immer 0!)
x5=0  &lt;- x-Koordinate des Eckpunktes auf 10 Uhr (Sechseckkoordinaten, also immer 0!)
y0=0  &lt;- y-Koordinate des Eckpunktes auf 12 Uhr (Sechseckkoordinaten, also immer 0!)
y1=16 &lt;- y-Koordinate des Eckpunktes auf 2 Uhr
y2=47
y3=63
y4=47
y5=16
imgOffsetx=8  &lt;- Abstand zwischen linkem Sechsecksrand und Grafikrand
imgOffsety=8  &lt;- Abstand zwischen oberem Sechsecksrand und Grafikrand
imgSizex=80  &lt;- Breite der Grafikdatei
imgSizey=80  &lt;- H�he der Grafikdatei
</pre>

Alle Angaben sind hier in Pixel. Entspricht die Breite und H�he des
  Regionssechsecks der der Grafikdatei, gibt es keine �berlappungen beim
  Zeichnen der einzelnen Grafiken. W�hlt man die Grafikgr��e jedoch gr��er
  als die des Regionssechsecks, so ergeben sich �berlappungen beim Zeichnen
  der Grafiken, abh�ngig vom Wert imgOffsetx/y �ber, unter, links oder
  rechts des Regionssechsecks. Zusammen mit der Ausnutzung von
  Transparenzinformation in den Grafiken lassen sich dadurch allerlei
  Effekte erzeugen, z.B. kaum merkliche Ueberg�nge zwischen Regionen. Dabei
  ist zu beachten, dass auf allen Renderingschichten die Regionen von links
  oben zeilenweise nach rechts unten gezeichnet werden.

  Die Datei mit diesen Informationen muss "cellgeometry.txt" hei�en und im
  selben Verzeichnis (images/map/) wie die Grafiken liegen. Der Inhalt
  dieser Datei mag etwas obskur erscheinen, die Bedeutung sollte aber
  schnell klar werden, wenn man sich ihren Inhalt bei existierende
  Grafiksets ansieht.

## Renderer

  Magellan unterst�tzt fuer jede Teilschicht der Karte verschiedene
  'Renderer', also Submodule, die die Grafikdateien auf den Bildschirm
  bringen. Sie sind in mehreren Schichten angeordnet, um eine festgelegte
  Reihenfolge beim Rendern zu haben, die sich in der Tiefenanordnung der
  gezeichneten Grafiken wiederspiegelt. Die Reihenfolge ist derzeit:

<ol>
  <li>
    Regionen
  </li>
  <li>
    Grenzen (Stra�en)
  </li>
  <li>
    Geb�ude
  </li>
  <li>
    Schiffe
  </li>
  <li>
    Regionsnamen
  </li>
  <li>
    Richtungspfeile
  </li>
  <li>
    Selektionsmarkierungen
  </li>
</ol>

  D.h. dass fr�here Schichten durch sp�tere Schichten �berdeckt werden. Im
  Augenblick gibt es nur einen Standardrenderer f�r jede der Schichten,
  diese sollten aber f�r die meisten Zwecke ausreichend flexibel sein.

  Beim Entwurf der Grafiken und beim Festlegen eventueller Ueberlappungen
  der Grafiken ist zu beachten, dass auf allen Renderingschichten die
  Regionen von links oben zeilenweise nach rechts unten gezeichnet werden.

  Es ist �brigens sehr simpel, neue Renderer zu programmieren, um z.B.
  weitere Objekte auf der Karte oder bestimmte Regionseigenschaften
  darzustellen.

