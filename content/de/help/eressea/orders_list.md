# Die Liste der Befehle

Vorab ein paar Hinweise zur Notation:

- feste Eingaben sind `GROSS` geschrieben. Sie müssen aber im Zug nicht
  zwangsweise auch groß geschrieben werden.
- Bezeichnungen sind `klein` geschrieben. Für sie ist ein sinnvoller,
  kontextbezogener Wert einzugeben.  
  Beispiel: `GIB einheit-nr anzahl Silber` gibt einer Einheit Silber.
  `GIB bp2 2000 Silber` gibt der Einheit `bp2` 2000 Silber.  
  In den Reports wird oftmals auch die Schreibweise `<einheit-nr>`
  benutzt; die spitzen Klammern sind in diesem Fall wegzulassen.
- Dinge, die in eckigen Klammern stehen (`[NICHT]`) sind optional, das
  heißt sie können, müssen aber nicht eingegeben werden. Dabei sind die
  eckigen Klammern wegzulassen.  
  Beispiel: `MACHE [stufen] SCHIFF`: hier kann eine Stufenanzahl benutzt
  werden: `MACHE 10 SCHIFF`, oder ohne Angabe `MACHE SCHIFF`.

Lange Befehle sind mit einem **\<L\>** markiert.

Pseudolange Befehle sind mit einem \<**(L)**\> markiert. Das sind
Befehle, die andere lange Befehle ausschließen, selbst aber mehrfach
gegeben werden können, wie z.B. `ATTACKIERE`.

<span id="ARBEITE"></span><span id="INDEX-Befehle_ARBEITE"></span> **ARBEITE   \<L\>**  
Die Einheit arbeitet in der Landwirtschaft und verdient zwischen 10 und
15 Silber pro Mann und Runde (s.a.
[diese](http://www.eressea.de/rules/de/Geld#TabArbeit) Tabelle).

<span id="TabVerdienst"></span>

|          |       |             |      |      |         |           |
|----------|-------|-------------|------|------|---------|-----------|
| Burg     | keine | Befestigung | Turm | Burg | Festung | Zitadelle |
| Lohn     | 10    | 11          | 12   | 13   | 14      | 15        |
| Ork-Lohn | 10    | 11          | 11   | 12   | 12      | 13        |

Verdienst

  

Dabei stehen in verschiedenen Regionen unterschiedlich viele
Arbeitsplätze zur Verfügung. Jeder Bauer nimmt einen, jeder Schössling
vier und jeder Baum acht Arbeitsplätze weg. Sollte die Zahl der
verfügbaren Plätze überschritten sein, können auch keine
Spieler-Einheiten in dieser Region mehr arbeiten. Unter "max. Bäume" ist
angegeben, wieviele Bäume den gesamten Platz für "Feldarbeiter"
einnehmen. Es können durchaus mehr Bäume in einer Region stehen.

<span id="TabRegionen"></span>

|           |                  |            |
|-----------|------------------|------------|
| Gelände   | max. arb. Bauern | max. Bäume |
| Gebirge   | 1000             | 120        |
| Ebene     | 10000            | 1250       |
| Gletscher | 100              | 13         |
| Hochland  | 4000             | 500        |
| Sumpf     | 2000             | 250        |
| Wüste     | 500              | 63         |
| Wald      | 10000            | 1250       |
| Vulkan    | 500              | 63         |

Bauern und Bäume in Regionen

  

Einheiten an Bord von Schiffen in bewachten Regionen können weder
arbeiten noch unterhalten (siehe [`BEWACHE`](#BEWACHE),
[`HELFE`](#HELFE) und [`UNTERHALTE`](#UNTERHALTE) ).

<span id="ATTACKIERE"></span><span id="INDEX-Befehle_ATTACKIERE"></span> **ATTACKIERE einheit-nr   \<(L)\>**  
Attackiere die betreffende Einheit in der aktuellen Region. Pro Einheit,
die angegriffen werden soll, muß ein `ATTACKIERE` gegeben werden.

Der `ATTACKIERE`-Befehl ist ein pseudolanger Befehl. Er ist kurz in der
Hinsicht, dass man mehrere `ATTACKIERE`-Befehle geben kann. Er ist lang,
da er weitere lange Befehle ausschließt, falls es tatsächlich zum
"langen" Kampf kommen sollte. Wann ein "langer" Kampf gegeben ist, wird
im Kapital [Kampf](battle) erläutert.

Einheiten, die nicht vorne oder hinten kämpfen, können auch nicht
attackieren (siehe [`KÄMPFE`](#KAEMPFE)).

Mehr dazu gibt es im Kapitel [Kampf](battle).

<span id="BANNER"></span><span id="INDEX-Befehle_BANNER"></span> **BANNER "text"**  
Hiermit kann man eine Beschreibung setzen, die in der Adressliste von
[`OPTION ADRESSE`](#OPTION) erscheint. Darin kann der Name des Spielers
stehen, oder eine alternative eMail-Adresse für die Mitspieler. Ebenso
wird hier vermerkt, wenn eine Urlaubsvertretung spielt.

Beispiel: `BANNER "Henning Peters, Bremen. eMail auch faroul@gmx.de"`

<span id="BEANSPRUCHE"></span><span id="INDEX-Befehle_BEANSPRUCHE"></span> **BEANSPRUCHE anzahl gegenstand**  
Beansprucht Gegenstände aus dem Parteipool.

Die Gegenstände im Parteipool können von jeder beliebigen Einheit der
Partei beansprucht werden, egal, wo diese sich befindet. Es können
allerdings keine Gegenstände zurück in den Parteipool gelegt werden.

Der Parteipool wird nur vom Spielleiter benutzt, um dem Spieler
spezielle Gegenstände zu geben, ohne dieser einer bestimmten Einheit zu
geben. Der Parteipool oder der `BEANSPRUCHE`-Befehl wird aber nicht oft
benötigt werden.

Die Gegenstände gehen an die Einheit, die den `BEANSPRUCHE`-Befehl
gegeben hat und können noch in der selben Woche benutzt oder
weitergegeben werden.

**Achtung!** Nicht verwechseln mit dem
[Materialpool](http://www.eressea.de/rules/de/Geld#Pool), auf den
man mit [`RESERVIERE`](#RESERVIERE) zugreifen muss!

<span id="BEFOERDERUNG"></span><span id="INDEX-Befehle_BEFOERDERUNG"></span> **BEFÖRDERUNG**  
Befördert eine Einheit zum Helden. Helden sind besonders stark im
[Kampf](battle). Sie schlagen in jeder Kampfrunde 10 mal zu.

**Achtung!** Dies gilt nicht für magische Angriffe, auch nicht für
Armbrüste und Katapulte.

Wenn eine Einheit befördert werden soll, benötigt sie pro Person
(Gesamt-Personen-Zahl der Partei) Silber.

Die maximale Anzahl der Helden ist begrenzt, steigt aber mit der
Parteigröße. Die Formel dafür ist log<sub>10</sub>(Parteigröße÷50)×20.

Die `BEFÖRDERUNG` findet ganz am Ende der Runde statt, also nach
eventuellen Kämpfen und nach allen Einnahmen und Ausgaben; die Einheit
kann sich sogar vorher noch bewegen. Fehlendes Silber wird aber aus dem
[Silberpool](http://www.eressea.de/rules/de/Geld#Pool) genommen,
wenn genug da ist.

<span id="BEKLAUE"></span><span id="INDEX-Befehle_BEKLAUE"></span> **BEKLAUE einheit-nr   \<L\>**  
Mit diesem Befehl wird versucht, die angegebene Einheit zu beklauen. Ist
das Tarnungstalent der Täter höher als die Wahrnehmung der Opfer
(hierbei zählt das Wahrnehmungstalent der besten Einheit in der Region),
merken die Opfer nur, daß sie beklaut worden sind. Die Täter klauen pro
Mann und Talentstufe Unterschied 50 Silber.

Sind Wahrnehmung der Opfer und Tarnung der Täter gleich hoch, gelingt
der Diebstahl nicht und die Opfer schöpfen Verdacht. Ist die Wahrnehmung
der Opfer sogar höher als die Tarnung der Täter, werden die Täter auf
frischer Tat ertappt und identifiziert.

**Achtung!** Der Dieb klaut immer mit aktiviertem
[Silberpool](http://www.eressea.de/rules/de/Geld#Pool), auch dann,
wenn man den Pool sonst nicht nutzt. Dadurch kann auch Silber von
anderen Einheiten geklaut werden, die nicht direkt Ziel des Diebs waren.

<span id="BELAGERE"></span><span id="INDEX-Befehle_BELAGERE"></span> **BELAGERE burg-nr   \<L\>**  
Hiermit wird die Burg belagert. Jeglicher Kontakt zwischen Burg und der
Außenwelt wird hiermit unterbunden, wobei ein guter Tarner die
Belagerung evtl. unterlaufen kann. Die Einheiten innerhalb der Burg
erhalten also auch kein Geld mehr und werden verhungern, falls sie die
Belagerung nicht rechtzeitig abschütteln können. Die Belagerer werden
ihre Katapulte abfeuern und die Burg langsam zerstören.

Nur bewachende Einheiten können eine Burg belagern. Für eine Belagerung
braucht man nämlich eine mindestens so gute Kontrolle über die Einwohner
wie beim Bewachen. Dies gibt zudem allen fremden Einheiten eine Runde
Zeit, angemessen zu reagieren.

<span id="BENENNE"></span><span id="INDEX-Befehle_BENENNE"></span> **BENENNE \[FREMDE\] EINHEIT \[einheit-nr\] "name"  
BENENNE \[FREMDE\] PARTEI \[partei-nr\] "name"  
BENENNE \[FREMDES\] GEBÄUDE \[gebäude-nr\] "name"  
BENENNE \[FREMDES\] SCHIFF \[schiff-nr\] "name"  
BENENNE REGION "name"**  
Benenne das aufgeführte Objekt neu. Schiffe und Gebäude können nur
umbenannt werden, wenn die Einheit auch das Kommando über das Gebäude
oder das Schiff hat (sie muß also die erste Einheit unter dem Gebäude
oder dem Schiff in der Auswertung sein). Eine Region kann nur vom
Burgherr der mächtigsten Burg einer Region umbenannt werden.

Der neue Name kann bis zu 80 Zeichen lang sein und darf keine Klammern
enthalten. Längere Beschreibungen fügt man mit dem Befehl `BESCHREIBE`
an (s.u.).

Durch den Zusatz `FREMDE` (bzw. `FREMDES`) und der Angabe der Nummer
kann man Einheiten, Schiffe und sogar Gebäude (nicht nur Burgen) anderer
Parteien benennen, sofern diese noch keinen Namen haben (Einheiten also
als "Nummer abc" benannt sind). Man kann sogar eine fremde Partei
benennen, sofern diese älter als zehn Runden ist.

Auch das Benennen der Partei muß von einer Einheit ausgeführt werden.

       ERESSEA 7 "sieben"
         BENENNE PARTEI "Falsch" ; kein Effekt
         EINHEIT 89
           BENENNE PARTEI "Richtig"

<span id="BENUTZE"></span><span id="INDEX-Befehle_BENUTZE"></span> **BENUTZE \[anzahl\] "trank" \[einheit-nr\]  **  
Benutzt den angegebenen alchemistischen Trank. Die Einheitennummer darf
nur bei Dumpfbackenbrot angegeben werden. Pro Runde und Einheit kann nur
ein Tranktyp benutzt werden, also keine verschiedenen Tränke zur Zeit.
Man kann einen Trank aber mehrfach benutzen, um die Wirkung auf mehr als
10 Personen auszudehnen.

<span id="BESCHREIBE"></span><span id="INDEX-Befehle_BESCHREIBE"></span> **BESCHREIBE EINHEIT "text"  
BESCHREIBE GEBÄUDE "text"  
BESCHREIBE SCHIFF "text"  
BESCHREIBE REGION "text"  
BESCHREIBE PRIVAT "text"**  
Die Beschreibung für das aufgeführte Objekt wird geändert. Diese
Beschreibung wird jeweils nach dem Objekt aufgelistet und kann bis zu
400 Zeichen lang sein. Der Computer vergibt bei der Erschaffung von
Objekten keine Beschreibungen.

Für Schiffe, Gebäude und Regionen gelten dieselben Einschränkungen wie
beim Benennen von Objekten: Gebäude und Schiffe können nur beschrieben
werden, wenn die Einheit auch das Kommando über das Gebäude oder das
Schiff hat (sie muß also die erste Einheit unter dem Gebäude oder dem
Schiff auf der Auswertung sein). Eine Region kann nur vom Burgherr der
mächtigsten Burg einer Region beschrieben werden.

Mit `BESCHREIBE PRIVAT` kann man der befehlsgebenden Einheit eine
"private" Beschreibung geben, die nur der Besitzer der Einheit sieht.

Lange Beschreibungen müssen mit dem "Befehlsverlängerer" \\ (Backslash)
umgebrochen werden.

          BESCHREIBE EINHEIT "Blattschneideameisen benötigen keinen Schlaf\
          und ihre Arbeiter sind immer auf maximale Effizienz fixiert. All\
          es was sie tun und unter ihrer schwarzen Hülle denken beziehen s\
          ie auf das Kollektiv des Staates."

<span id="BETRETE"></span><span id="INDEX-Befehle_BETRETE"></span> **BETRETE GEBÄUDE gebäude-nr  
BETRETE SCHIFF schiff-nr**  
Betrete das angegebene Gebäude oder das angegebene Schiff. Falls die
Einheit, die das Kommando über das Gebäude oder das Schiff hat, nicht
zur eigenen Partei oder einem Alliierten gehört, muß sie in dieser Runde
den [`KONTAKTIERE`](#KONTAKTIERE) Befehl gegeben haben.

Ein `BETRETE` impliziert [`VERLASSE`](#VERLASSE), wenn die Einheit sich
auf einem Schiff oder in einem Gebäude befindet.

<span id="BEWACHE"></span><span id="INDEX-Befehle_BEWACHE"></span> **BEWACHE \[NICHT\]**  
Einheiten können ihre Region bewachen. Dazu muß die Einheit bewaffnet
sein (es reicht eine Waffe) und das passende Waffentalent haben. Dies
bewirkt, daß ab nächster Runde Einheiten nicht-alliierter Parteien in
dieser Region keine Steuern mehr eintreiben, Rohstoffe abbauen oder
Bauern rekrutieren können, und außerdem werden nicht-alliierte Einheiten
auf der Durchreise mit einer gewissen Wahrscheinlichkeit gestoppt. Wenn
die Einheit nicht gesehen wird, weil sie ein höheres Tarnungstalent hat
als das beste Wahrnehmungstalent der bewachenden Partei in der Region
ist, so gelten die obigen Beschränkungen nicht.

Befinden sich Einheiten auf einem Schiff, so können diese in einer
bewachten Region nicht arbeiten, unterhalten, attackieren oder sofort
über Land weiterziehen, sofern nicht von der bewachenden Partei ein
[`HELFE BEWACHE`](#HELFE) gesetzt wurde. Um die Aktionen in der
Folgewoche ausführen zu können, müssen sie das Schiff erst
[`VERLASSEN`](#VERLASSE) haben.

In der Runde, in der der `BEWACHE`-Befehl gegeben wurde, ist dies
allerdings noch möglich, denn die bewachende Einheit muß erst einmal
herausfinden, wo fremde Einheiten überall Silber eintreiben könnten.
Bewegt sich die Einheit fort, wird der Bewache-Status aufgelöst.

Die bewachende Einheit wird sofort für alle anderen Einheiten in der
Region sichtbar, egal wie hoch ihr Tarnungstalent ist. Dies gibt allen
fremden Einheiten eine Runde Zeit, sich auf die neue Situation
einzustellen. Sobald eine Einheit eine Region bewacht, kann sie auch
Burgen in der Region belagern.

Geben mehrere Parteien gleichzeitig oder nacheinander den
`BEWACHE`-Befehl, so bewachen sie alle die Region. Nur Parteien, die mit
allen bewachenden Parteien alliiert sind (siehe
[`HELFE BEWACHE`](#HELFE)), können dann noch Steuern eintreiben,
rekrutieren oder Rohstoffe abbauen.

Hinweis: Monster (Partei 0) gelten prinzipiell als bewaffnet, auch wenn
sie keine sichtbare Waffe tragen.

<span id="BOTSCHAFT"></span><span id="INDEX-Befehle_BOTSCHAFT"></span> **BOTSCHAFT EINHEIT einh-nr "text"  
BOTSCHAFT PARTEI partei-nr "text"  
BOTSCHAFT SCHIFF schiff-nr "text"  
BOTSCHAFT GEBÄUDE gebäude-nr "text"  
BOTSCHAFT REGION "text"**  
Hiermit können Botschaften an andere Einheiten, an andere Parteien, oder
an alle Parteien in einer Region geschickt werden. Absender und
Empfänger müssen in der selben Region sein. Schickt man eine Botschaft
an eine Einheit, dann wird die Botschaft anonymisiert, wenn der
Empfänger die absendende Einheit nicht sehen kann.

Mit `BOTSCHAFT GEBÄUDE` und `BOTSCHAFT SCHIFF` geht die Botschaft an
alle Einheiten, die in dem Gebäude bzw. auf dem Schiff sind, allerdings
nur eine Einheit pro Partei.

Wie alle anderen Texte auch, kann die Botschaft mit dem `\` (Backslash)
umgebrochen werden.

            BOTSCHAFT EINHEIT z14 "Zahlt sofort je 100 Silber an Jonan \
            den Zöllner (9i6), sonst werden unsere Wachen sich \
            um euch kümmern!"

<span id="DEFAULT"></span><span id="INDEX-Befehle_DEFAULT"></span> **DEFAULT "befehl"**  
Dieser Befehl ermöglicht es, für eine Einheit *einen* Befehl für die
nächste Runde festzulegen. Dieser Befehl wird in die Zugvorlage der
nächsten Runde als Default-Befehl eingesetzt. Wenn dieser Befehl mehr
als ein Wort umfasst, muss er in Anführungszeichen gesetzt werden.

          DEFAULT "Lerne Wahrnehmung"

**Achtung!** Der normale Default-Befehl wird damit überschrieben! Somit
kann man sogar den Befehl [`NACH`](#NACH) als Default setzen.

<span id="EINHEIT"></span><span id="INDEX-Befehle_EINHEIT"></span> **EINHEIT einheit-nr**  
Mit diesem Befehl beginnt man die Befehlseingabe für eine der eigenen
Einheiten.

       EINHEIT 45
         NACH WESTEN
       EINHEIT 46
         BETRETE GEBÄUDE 7

<span id="EMAIL"></span><span id="INDEX-Befehle_EMAIL"></span> **EMAIL email-adresse**  
Hiermit setzt der Spieler seine eMail-Adresse, an die die Auswertung
geschickt wird.

`EMAIL` darf nur und einzig die eMail-Adresse folgen, ohne weitere
"Zusätze".  
  
Richtig: `EMAIL eressea@beyond.kn-bremen.de`  
Falsch: `EMAIL "email: eressea@beyond.kn-bremen.de"`  
Falsch: `EMAIL "Henning Peters <eressea@beyond.kn-bremen.de>"`

<span id="ENDE"></span><span id="INDEX-Befehle_ENDE"></span> **ENDE**  
Dies beendet die Eingabe der Befehle für eine temporäre Einheit, die mit
[`MACHE TEMP`](#MACHETEMP) erschaffen wurde.

       MACHE TEMP 1
         BENENNE EINHEIT "Joggonarag Thorggh"
         REKRUTIERE 1
         LERNE Magie
       ENDE

<span id="ERESSEA"></span><span id="INDEX-Befehle_ERESSEA"></span> **ERESSEA partei-nr "passwort"**  
Mit diesem Befehl beginnt man die Befehlsdatei. Dieser Befehl muß
unbedingt verwendet werden.

<span id="FAHRE"></span><span id="INDEX-Befehle_FAHRE"></span> **FAHRE einheit-nr   \<L\>**  
Hiermit schließt sich eine Einheit einer transportierenden Einheit an
und kann von dieser, sofern sie den Befehl
[`TRANSPORTIERE`](#TRANSPORTIERE) für die fahrende Einheit gegeben hat,
mitgenommen werden. Durch diesen Befehl ist es möglich, auch ohne das
Reiten-Talent auf Pferden oder Wagen zu reisen. Vorraussetzung dafür ist
natürlich, dass die transportierende Einheit über genügend freie
Kapazitäten verfügt, um die fahrenden Einheiten samt Gegenständen
aufzuladen.

Partei 125:

       EINHEIT 311
         FAHRE 456 ; ich will mitfahren
         KONTAKTIERE 456
       [...]

Partei 300:

       EINHEIT 456
         TRANSPORTIERE 311 ; Lasse 311 mitfahren
         KONTAKTIERE 311

Insekten können auch mittels `FAHRE` nicht in oder durch einen Gletscher
gebracht werden. (siehe [hier](skill_races))

<span id="FOLGE"></span><span id="INDEX-Befehle_FOLGE"></span> **FOLGE EINHEIT einheit-nr   \<(L)\>  
FOLGE SCHIFF schiff-nr   \<L\>**  
Hiermit kann man Einheiten bzw. Schiffen folgen.

Mit `FOLGE EINHEIT einheit-nr` wird die eigene Einheit die angegebene
Einheit "beobachten" und dieser folgen, wenn sie sich bewegt. Wenn die
verfolgte Einheit allerdings schneller als die folgende Einheit ist,
entkommt sie der Verfolgung. Die Verfolger folgen der verfolgten Einheit
so weit wie möglich. Bewegt sich die verfolgte Einheit nicht, kann die
eigene Einheit ihren langen Befehl ausführen.

Mit `FOLGE SCHIFF schiff-nr` können Schiffe verfolgt werden, welche in
der aktuellen oder der vorigen Runde die Region durchquert haben. Hat
der Kapitän den Befehl `FOLGE SCHIFF schiffnummer` gegeben, wird das
Schiff dann dem Kurs des angegebenen Schiffes folgen, bis es - wenn das
eigene Schiff schnell genug ist - eingeholt wurde.

**Achtung**, nicht gefolgt werden kann Schiffen, die selber
`FOLGE SCHIFF` als Befehl haben und Piraten.

`FOLGE SCHIFF` ist immer ein langer Befehl; `FOLGE EINHEIT` nur, wenn
sich das Ziel bewegt und hat dann Vorrang vor allen anderen langen
Befehlen.

`FOLGE` hält nur in der Runde an, in der der Befehle gegeben wird. Soll
der Befehl länger andauern, muß ihm ein `@` vorgestellt werden.

      EINHEIT 87b6
        FOLGE EINHEIT hz7
        UNTERHALTE

Einheit `87b6` wird nun Einheit `hz7` beobachten und ihr folgen, wenn
sie sich bewegt. Ansonsten wird sie mit Unterhaltung Geld verdienen.

<span id="FORSCHE"></span><span id="INDEX-Befehle_FORSCHE"></span> **FORSCHE KRÄUTER   \<L\>**  
Hiermit versucht die Einheit herauszufinden, welches Kraut in einer
Region wächst und wieviele davon vorhanden sind. Dazu muß sie mindestens
Kräuterkunde 7 haben.

<span id="GIB"></span><span id="INDEX-Befehle_GIB"></span> **GIB einheit-nr KRÄUTER  
GIB einheit-nr KOMMANDO  
GIB einheit-nr EINHEIT  
GIB einheit-nr anzahl PERSONEN  
GIB einheit-nr anzahl gegenstand  
GIB einheit-nr ALLE PERSONEN  
GIB einheit-nr ALLES \[gegenstand\]  
GIB 0 anzahl PERSONEN  
GIB 0 anzahl gegenstand**  
Mit `GIB` können Einheiten alle Waren, die sie haben, an andere
Einheiten geben. Bedingung ist, daß die angegebene Einheit Sachen
annimmt. Dies tut sie nur, wenn sie zur eigenen oder einer alliierten
Partei gehört ([`HELFE GIB`](#HELFE)), oder wenn sie diese Runde den
Befehl [`KONTAKTIERE`](#KONTAKTIERE) für die Gebereinheit gegeben hat.
Die meisten Sachen können zudem auch weggeworfen werden (`GIB 0 ...`).

Geber- wie Empfängereinheit müssen sich natürlich in der selben Region
aufhalten. Die Übergabe klappt auch auf hoher See, zwischen Schiffen und
von Schiffen an Land und umgekehrt.

Gegenstände und Silber, die mit `GIB` übergeben wurden, sind automatisch
reserviert und können vom Materialpool (siehe
[hier](http://www.eressea.de/rules/de/Geld#Pool)) und mit
[`RESERVIERE`](#RESERVIERE) nicht von der Einheit genommen werden.

Statt einer Anzahl kann man auch den Parameter `ALLES` (oder `ALLE`)
benutzen. `GIB einheit-nr ALLE Schwerter` übergibt zum Beispiel alle
Schwerter, die die Einheit zu dem Zeitpunkt hat. `GIB einheit-nr ALLES`
übergibt sämtliche Gegenstände, Kräuter, Tränke und Silber, nicht aber
die Personen der Einheit. Gibt man explizit
`GIB einheit-nr ALLE PERSONEN`, so werden alle Personen übergeben und
die Einheit aufgelöst.

Will man Personen verschiedener Einheiten zusammenführen, so geschieht
dies mit `GIB einheit-nr anzahl PERSONEN`. Dabei werden dann auch die
Talente vermischt, und man sollte die Gegenstände nicht vergessen, da
sie sonst evtl. den Bauern zufallen.

Mit `GIB einheit-nr EINHEIT` wird die komplette Einheit mit allen
Gegenständen einer anderen Partei gegeben, d.h. sie wechselt zur Partei
der Empfänger-Einheit, und wird nicht zur Empfängereinheit zugefügt!
Dabei können maximal 5 Personen pro Runde von einer Partei aufgenommen
werden. Die Einheit führt in der Runde keine weiteren Befehle aus!

Hat die Einheit zudem ein Schiff oder ein Gebäude unter ihrem Kommando -
ist sie also die erste aufgeführte Einheit im Schiff oder in dem
Gebäude - kann sie das Kommando auch an eine andere Einheit übergeben.
Die Einheit mit dem Kommando bestimmt, welche anderen Einheiten das
Schiff oder das Gebäude betreten dürfen.

<span id="GIB_KOMMANDO"></span>

`GIB einheit KOMMANDO` sollte man immer anwenden, auch wenn die Einheit
mit dem Kommando das Schiff oder die Gebäude verläßt und die folgende
Einheit das Kommando erhalten soll. Die Reihenfolge der Einheiten ist
während der Auswertung nicht immer die dem Report entsprechende. Neue
Besitzer eines Gebäudes werden am Ende der Runde an die erste Position
im Gebäude gestellt und profitieren somit erst in der Folgerunde von dem
Gebäude (z.B. Bergbaubonus).

> `GIB k3f 300 Silber`  
> Gibt der Einheit `k3f` 300 Silber.  
>   
> `GIB 0 5 Steine`  
> Wirft 5 Steine weg.  
>   
> `GIB TEMP 3 7 PERSONEN`  
> Gibt der neu geschaffenen Einheit `TEMP 3` 7 Personen.

Vorsicht: Zwischen `MACHE TEMP` und `ENDE` stehen Befehle für die neue
Einheit - und diese hat kein Geld. Folgendes funktioniert also
**nicht**:

      MACHE TEMP 1
        GIB TEMP 1 200 Silber  ;  sinnlos!
        REKRUTIERE 2
        NACH WESTEN
      ENDE

Sondern muß so geschrieben werden:

      GIB TEMP 1 200 Silber
      MACHE TEMP 1
        REKRUTIERE 2
        NACH WESTEN
      ENDE
      ; GIB TEMP 1 200 Silber  ;  oder hier!

<span id="GRUPPE"></span><span id="INDEX-Befehle_GRUPPE"></span> **GRUPPE \["name"\]**  
Mit dem Befehl `GRUPPE` kann man die Partei in Untergruppen zerteilen,
die einen andere [`HELFE`](#HELFE)-Status haben als der Rest der Partei.
Dadurch kann man z.B. ein Söldnerheer aufstellen, das auf der Insel des
Auftragsgebers ihm hilft, während der Rest der Partei es nicht tut.

Ebenso kann man für Teilnehmer eines Turnieres alle `HELFE KÄMPFE`
Zuordnungen auflösen, damit man nicht in einen Zweikampf eingreift. Auch
Angriffe auf Verbündete, mit einem parteigetarnten Trupp von Einheiten
sind möglich, ohne das man sich durch das Lösen von `HELFE KÄMPFE` auf
Parteiebene verrät. Und wer z.B. seine Wälder auch vor Verbündeten
schützen will, der stellt eine Truppe von Waldwächtern auf, die
niemandem `HELFE BEWACHE` geben.

Eine Einheit gibt zum Beispiel den Befehl
`GRUPPE "Freibeuter der Meere"`, um in eine Gruppe einzutreten. Wenn es
eine Gruppe dieses Namens noch nicht gibt, wird eine angelegt, die
anfangs den gleichen HELFE-Status wie die Partei hat. Mit `GRUPPE` ohne
Namen verläßt man eine Gruppe. Jede Einheit kann nur einer Gruppe
angehören. Eine Einheit, die einen `HELFE` Befehl gibt, ändert den
Status ihrer Gruppe, wenn sie einer Gruppe zugeteilt ist, oder den
Status der Partei, wenn sie keiner Gruppe angehört.

In einem Kampf wird aus jeder Gruppe ein getrenntes Heer, so wie es auch
schon passiert, wenn Einheiten parteigetarnt sind.

<span id="HELFE"></span><span id="INDEX-Befehle_HELFE"></span> <span id="INDEX-Allianz"></span> **HELFE partei-nr GIB \[NICHT\]  
HELFE partei-nr KÄMPFE \[NICHT\]  
HELFE partei-nr SILBER \[NICHT\]  
HELFE partei-nr BEWACHE \[NICHT\]  
HELFE partei-nr PARTEITARNUNG \[NICHT\]  
HELFE partei-nr ALLES \[NICHT\]**  
Mit diesem Befehl kann eine Partei verschiedene Stufen der Unterstützung
für eine andere Partei setzen. Die Gegenpartei erfährt von einer
Änderung des Status nichts und muß auch nicht den selben Status haben.

Die einzelnen Modi sind
[hier](http://www.eressea.de/rules/de/Allianz) erklärt.  
Beispiel: `HELFE 7 GIB NICHT`

<span id="KAEMPFE"></span><span id="INDEX-Befehle_KAEMPFE"></span> **KÄMPFE  
KÄMPFE AGGRESSIV  
KÄMPFE HINTEN  
KÄMPFE DEFENSIV  
KÄMPFE NICHT  
KÄMPFE FLIEHE  
KÄMPFE HELFE \[NICHT\]**  
Mit diesem Befehl wird die Reaktion einer Einheit im Falle eines
[Kampfes](battle) bestimmt (siehe im gleichnamigen Kapitel auch den
Abschnitt [Kampfreihen](battle#rows)).

`KÄMPFE AGGRESSIV`: Im Kampf steht die Einheit an der Front und wird nie
fliehen, sondern bis zum Tode kämpfen. Dies verwendet man mit Vorteil
für Kanonenfutter.

`KÄMPFE`: Im Kampf steht die Einheit an der Front. Sie wird versuchen zu
fliehen, wenn sie weniger oder gleich 20% ihrer Trefferpunkte hat. Dies
verwendet man mit Vorteil für gute Schwertkämpfer.

`KÄMPFE HINTEN`: Die Einheit kämpft in der zweiten Reihe. Ist die Front
[aufgerieben](battle#ueberrennen), werden diese Einheiten trotzdem
in den Nahkampf hineingezogen! Dies verwendet man mit Vorteil für
Schützen. Die Einheit versucht zu fliehen, wenn weniger oder gleich 20%
ihrer Trefferpunkte hat.

`KÄMPFE DEFENSIV`: wie `KÄMPFE HINTEN`, aber die Einheit wird schon
fliehen, wenn sie noch 90% ihrer Trefferpunkte hat. Dies verwendet man
mit Vorteil für Magier.

`KÄMPFE NICHT`: Die Einheit kämpft nur noch dann mit, wenn sie selber
das Ziel eines feindlichen `ATTACKIERE` Befehles ist. Dies setzt man mit
Vorteil für Handwerker und Kundschafter mit hohem Tarnungstalent ein.
Die Einheit versucht zu fliehen, wenn sie noch 90% ihrer Trefferpunkte
hat.

**Achtung!** Personen, die nicht `KÄMPFE FLIEHE` gesetzt haben, fliehen
erst dann, wenn sie im Kampf auch einen Treffer abbekommen haben. Dabei
zählen auch Treffer, deren Schadenspunkte vollständig von der Rüstung
aufgehalten wurden und fehlgeschlagene Trefferversuche. Personen mit
`KÄMPFE FLIEHE` fliehen natürlich schon vorher.

`KÄMPFE FLIEHE`: Wird eine fluchtbereite Einheit in einen Kampf
verwickelt, versucht sie vor jeder Kampfrunde zu fliehen. Für weitere
Informationen über das "Fluchtverhalten", siehe den Abschnitt
[Flucht](battle#Flucht) im Kapitel [Kampf](battle).

`KÄMPFE HELFE`: Einer Einheit mit `KÄMPFE HELFE NICHT` wird im Kampf
*nicht* geholfen, weder von Einheiten der eigenen Partei noch von
Verbündeten. Wird eine solche Einheit attackiert, werden keine anderen
Einheiten in den Kampf gezogen. Dies gilt natürlich nur, wenn nicht
zusätzlich andere Einheiten ohne einen solchen Status attackiert werden.

Die eigene Partei ist immer dann involviert, wenn sie angreift, oder
wenn sie oder eine Partei, der sie hilft, angegriffen wird. Weitere
Details unter [`HELFE`](#HELFE) und in den Kapiteln [Kampf](battle)
und [Allianz](http://www.eressea.de/rules/de/Allianz).

<span id="KAMPFZAUBER"></span> <span id="INDEX-Befehle_KAMPFZAUBER"></span> **KAMPFZAUBER \[STUFE n\] "zauberspruch" \[NICHT\]**  
Der genannte Zauberspruch wird - je nach Zauber - als Prä, Post- oder
normaler Kampfzauber gewählt. Optional kann dabei eine Stufe angegeben
werden, was nützlich sein kann, um beispielsweise Aura für einen
Postkampfzauber aufzusparen. Die gewählten Zauber werden von der Einheit
automatisch eingesetzt, sollte sie in Kämpfe verwickelt werden.

Nicht alle Zaubersprüche sind Kampfzauber, dieses kann der Beschreibung
der Zauber, welche man im Spiel erhält, entnommen werden. Die
Beschreibung eines Zaubers kann man sich mit dem Befehl
[`ZEIGE`](#ZEIGE) erneut zeigen lassen.

<span id="KAUFE"></span><span id="INDEX-Befehle_KAUFE"></span> **KAUFE anzahl luxusgut   \<(L)\>**  
Wenn die Einheit das Talent "Handeln" hat, wird sie versuchen, die
genannte Anzahl Luxusgüter zu kaufen. Dies geht nur, wenn sich in der
Region erstens ein Handelsposten oder ein größerer Burgtyp befindet, in
dessen Nähe der Markt abgehalten werden kann, und zweitens das Produkt
überhaupt in der Region produziert wird. Um etwas zu kaufen, ist kein
Kontakt zum Burgherren notwendig; trotzdem ist es natürlich
diplomatischer, vorher zu fragen... Weitere Informationen im [Kapitel
Handel](http://www.eressea.de/rules/de/Geld#Handel).

`KAUFE` ist wie [`VERKAUFE`](#VERKAUFE) ein "pseudolanger" Befehl. Man
kann insgesamt Talentstufe(Handeln)\*10 Luxusgüter umsetzen, allerdings
keine anderen langen Befehle geben.

Beispiel:

      EINHEIT hndl;     Marktschreier [1, $1000]
        ; Handel 3 [180]
        VERKAUFE 15 Juwelen
        VERKAUFE 15 Öl
        KAUFE 10 Weihrauch

Dieser Händler wird 10 Weihrauch kaufen, 15 Juwelen und 5 Öl verkaufen.
`KAUF`-Order haben Priorität vor Verkäufen, und für Verkäufe gilt die
Reihenfolge der Befehlsabgabe, so daß nach 5 Öl sein Limit erreicht ist.

`KAUFE` wie `VERKAUFE` tauchen nicht im Normalreport auf, so daß es
scheint, als hätte die Einheit keinen Defaultbefehl. Dies ist aber nur,
damit nicht eine große Liste von Befehlen dort steht. Im Computerreport
und der Zugvorlage sind alle Befehle nur aufgeführt, wenn ihnen ein `@`
vorangestellt ist.

<span id="KONTAKTIERE"></span> <span id="INDEX-Befehle_KONTAKTIERE"></span> **KONTAKTIERE einheit-nr**  
Man darf Einheiten fremder Parteien normalerweise nichts geben ohne daß
man mit dieser Partei alliiert ist. Um dies im begrenzten Maße doch zu
erlauben, verwendet man den `KONTAKTIERE` Befehl. In dieser Runde - und
nur in dieser Runde - verhält man sich der genannten Einheit gegenüber,
als wenn man mit ihr alliiert wäre (s.a. unter [`HELFE GIB`](#HELFE)),
d.h. man nimmt Gegenstände, Silber und Personen von ihr an. Auch das
Betreten von Burgen und Schiffen, das Rekrutieren von Personen und der
Abbau von Ressourcen ist nicht-alliierten Parteien auf diesem Wege
möglich.

          PARTEI 125 "FooBar"
             EINHEIT 311
                GIB 456 1000 Silber ; Tribut!
             [...]

          PARTEI 300 "BarFoo"
             EINHEIT 456
                KONTAKTIERE 311 ; erlaube Zahlung.

<span id="LEHRE"></span><span id="INDEX-Befehle_LEHRE"></span> **LEHRE einheit-nr \[einheit-nr etc.\]   \<L\>**  
Um die Zeit herabzusetzen, die eine andere Einheit braucht, um ein
Talent zu erlernen, kann man sie das Talent lehren. Dazu muß die
lehrende Einheit in dem betreffenden Talent mindestens 2 Stufen besser
als die lernende Einheit sein, Damit lernt die lernende Einheit doppelt
so schnell, als wenn sie versucht, ihr Talent auf eigene Faust zu
verbessern.

Mit diesem Befehl lehrt man allen aufgelisteten Einheiten das Talent,
das diese gerade lernen. Die Schüler müssen also lernen während der
Lehrer lehrt. Es kann mehr als eine Einheit aufgelistet werden. Eine
Lehrer-Einheit kann allerdings pro Person und Runde nur 10 Schüler von
seinem Wissen profitieren lassen. Es können auch mehrere Lehrer eine
große Schüler-Einheit lehren.

Das zu lehrende Talent muß **nicht** angegeben werden - es wird
automatisch das Talent gelehrt, welches die lernende Einheit lernt. Dies
können auch verschiedene Talente sein, sofern der Lehrer diese Talente
ausreichend besser als die Schüler beherrscht.

Will man Einheiten fremder Parteien lehren, muß man entweder von dieser
Partei den Befehl [`HELFE GIB`](#HELFE) erhalten haben, oder die zu
lehrende Einheit muß mit [`KONTAKTIERE`](#KONTAKTIERE) den Lehrer
kontaktieren.

Beispiel: `LEHRE 54 67 TEMP 2 68`

<span id="LERNE"></span><span id="INDEX-Befehle_LERNE"></span> **LERNE talent   \<L\>**  
Mit diesem Befehl verbringt die Einheit eine Runde damit, das angegebene
Talent zu lernen. Im Mittel dauert der Aufstieg in eine neue Talentstufe
durch reines Lernen in etwa eine Anzahl von Wochen entsprechend der
angepeilten Talentstufe ohne Berücksichtigung von Modifikationen durch
Rasse oder Terrain. Normalerweise ist ein Talentwert von 2 doppelt so
effektiv wie ein Talentwert von 1, ein Talentwert von 3 dreimal so
effektiv und so weiter.

Folgende Talente kann man lernen:

> Alchemie, Armbrustschießen, Ausdauer, Bergbau, Bogenschießen,
> Burgenbau, Handeln, Hiebwaffen, Holzfällen, Katapultbedienung,
> Kräuterkunde, Magie, Pferdedressur, Reiten, Rüstungsbau, Schiffbau,
> Segeln, Stangenwaffen, Spionage, Steinbau, Steuereintreiben,
> Straßenbau, Taktik, Tarnung, Unterhaltung, Waffenbau, Wagenbau,
> Wahrnehmung.

Durch den Einsatz von [`LEHRE`](#LEHRE)rn kann man die benötigten
Lernzeiten halbieren.

Eine Erklärung aller Talente ist in [hier](skill_list) angegeben.

<span id="MACHE"></span><span id="INDEX-Befehle_MACHE"></span> **MACHE   \<L\>  
MACHE TEMP einheit-alias-nr \["name"\]  
MACHE \[stufen\] gebäude-typ \[gebäude-nr\]   \<L\>  
MACHE \[stufen\] BOOT   \<L\>  
MACHE \[stufen\] LANGBOOT   \<L\>  
MACHE \[stufen\] DRACHENSCHIFF   \<L\>  
MACHE \[stufen\] KARAVELLE   \<L\>  
MACHE \[stufen\] TRIREME   \<L\>  
MACHE \[stufen\] SCHIFF \[schiff-nr\]   \<L\>  
MACHE \[stufen\] STRASSE richtung   \<L\>  
MACHE \[anzahl\] KRÄUTER   \<L\>  
MACHE \[anzahl\] trank   \<L\>  
MACHE \[anzahl\] gegenstand   \<L\>**  
`MACHE` ist der allgemeine Produktionsbefehl.

Gegenstände werden mit `MACHE [anzahl] gegenstand` hergestellt. Je nach
Gegenstand wird ein bestimmtes Talent und vielleicht auch noch bestimmte
Rohstoffe benötigt. Ohne Angabe von `anzahl` wird die Einheit so viele
Gegenstände produzieren, wie Personen, Talent und evtl. Rohstoffe es ihr
ermöglichen.

Informationen zu den herstellbaren Gegenständen sind
[hier](production_items) angegeben.

<span id="MACHETEMP"></span>

Wenn man neue Einheiten erschafft (`MACHE TEMP`), gibt man der Einheit
eine Alias-Nummer, denn man weiß ja zu diesem Zeitpunkt noch nicht,
welche Nummer die Einheit schlußendlich noch bekommen wird. Für alle
anderen Befehle kann man nun diesen Alias verwenden (mit dem Wort `TEMP`
davor). Die neue Einheit muß allerdings noch Mitglieder bekommen, sonst
wird sie stillschweigend am Ende der Runde wieder gelöscht!

Die Alias-Nummer wird als Nummer der Einheit benutzt, wenn diese noch
nicht belegt ist. Ebenso kann man schon hier einen Namen der Einheit
angeben. So lassen sich die Befehle

             MACHE TEMP 1
                BENENNE EINHEIT "Clowns"
                NUMMER EINHEIT lach

verkürzen auf

             MACHE TEMP lach "Clowns"

Pro Partei sind maximal 1000 Einheiten erlaubt. Hat die Partei 1000 oder
mehr Einheiten, so können mit `MACHE TEMP` keine neuen Einheiten
geschaffen werden, es müssen erst andere Einheiten z.B. durch
Zusammenfassen gelöscht werden.

Nach diesem Befehl werden die Befehle für die neue Einheit angegeben,
bis man das Wort [`ENDE`](#ENDE) eingibt. Andere Parteien können
temporäre Einheiten dann ansprechen, wenn sie nicht selber eine
`TEMP`-Einheit mit der selben Nummer haben. Mit ein wenig Absprache
können also auch `TEMP`-Einheiten fremder Parteien angesprochen werden.

Wenn die neue Einheit Mitglieder neu rekrutieren soll, muß sie auch
genug Geld dafür erhalten. Erhält sie das nicht, wird die Einheit
niemanden rekrutieren können und am Ende der Woche stillschweigend
entfernt werden. Bekommt die Einheit Geld, rekrutiert aber keine
Mitglieder, löst sie sich ebenfalls auf und das Geld fällt den Bauern
zu.

       EINHEIT 17;       Kämpfer [15,700$]
         MACHE TEMP 1
           BENENNE EINHEIT "Drachenreiter"
           LERNE Hiebwaffen
         ENDE
         GIB TEMP 1 5 PERSONEN

         GIB TEMP 2 100 Silber
         MACHE TEMP 2
           REKRUTIERE 1
           BENENNE EINHEIT "Späher"
           DEFAULT "LERNE Wahrnehmung"
           NACH Westen
         ENDE

etc...

Um ein neues Gebäude zu errichten, verwendet man `MACHE gebäude-typ`
(siehe [hier](production_buildings)). Ist man innerhalb eines
Gebäudes, kann man mit `MACHE` oder `MACHE gebäude-typ` an diesem
weiterbauen. Will man allerdings an einem Gebäude weiterbauen, in dem
man sich nicht befindet, muß man dessen Nummer angeben. Burgen und die
meisten anderen Gebäude können beliebig ausgebaut werden. Um Burgen zu
bauen, muß man das Talent Burgenbau und Steine haben, andere Gebäude
erfordern i.d.R. weiterhin Holz, Eisen und Silber in verschiedenen
Mengen.

Mit `MACHE schifftyp` beginnt man, ein neues Schiff zu bauen (s.a.
[hier](production_ships)). Schiffe können nicht wie Burgen
erweitert werden, sondern man muß bei Baubeginn den Typ festlegen.
Einmal im Schiff, kann man mit `MACHE` oder `MACHE SCHIFF` daran
weiterbauen. Will man allerdings an einem anderen Schiff weiterbauen,
muß man dessen Nummer angeben. An Schiffen kann nur bis zu der am Anfang
angegebenen Größe weiter gebaut werden. Um Schiffe zu bauen, muß man das
Talent Schiffbau und Holz haben.

Sowohl bei Gebäuden als auch bei Schiffen kann man mit `stufen` angeben,
wieviele Stufen man das Gebäude bzw. Schiff bauen/erweitern will. Dies
ist vor allem im Zusammenhang mit dem
[Materialpool](http://www.eressea.de/rules/de/Geld#Pool) nützlich.

> erste Woche - `MACHE LANGBOOT`  
> Ein neues Schiff wird gebaut und bekommt vom Computer die Nummer 76.  
> zweite Woche -- `MACHE SCHIFF 76`  
> An Schiff Nr. 76 wird nun weiter gebaut.

Will man in einer Region das Durchreisen durch Straßen und Brücken
erleichtern, verwendet man `MACHE STRASSE richtung`. Um Straßen zu
bauen, braucht man das Talent Straßenbau und Steine (siehe
[hier](production)). In Gletschern benötigt man dazu vorher einen
[Tunnel](production_buildings#GebTunnel), in Wüsten eine
[Karawanserei](production_buildings#GebKarawanserei) und in Sümpfen
einen [Damm](production_buildings#GebDamm).

Das Herstellen eines Trankes ist sehr aufwendig und kann nur von
besonders talentierten Alchemisten durchgeführt werden. Details dazu
findet man im [Alchemie-Kapitel](production_alchemy).

<span id="NACH"></span><span id="INDEX-Befehle_NACH"></span> **NACH himmelsrichtung \[himmelsrichtung \[etc.\]   \<L\>**  
Mit dem Befehl `NACH` bewegt sich die Einheit durch die Welt von
Eressea. Die Himmelsrichtungen sind in Eressea Nordosten, Nordwesten,
Osten, Westen, Südosten und Südwesten. Die Koordinaten werden nicht
verwendet.

|            |               |          |           |           |               |
|------------|---------------|----------|-----------|-----------|---------------|
| Richtung   | Abkürzungen   | Richtung | Abkürzung | Richtung  | Abkürzungen   |
| Nordosten  | `NO`, `Nordo` | Osten    | `O`       | Südosten  | `SO`, `Suedo` |
| Nordwesten | `NW`, `Nordw` | Westen   | `W`       | Südwesten | `SW`, `Suedw` |

  

<span id="NAECHSTER"></span> <span id="INDEX-Befehle_NAECHSTER"></span> **NÄCHSTER**  
Dies beendet die Befehle für eine Partei. Mit `NÄCHSTER` muß man seine
Befehlsdatei abschließen.

<span id="NEUSTART"></span><span id="INDEX-Befehle_NEUSTART"></span> **NEUSTART rasse "passwort"**  
Mit diesem Befehl kann man seine Partei auflösen und gleichzeitig mit
einer anderen Rassen neu starten. Voraussetzung dafür ist, dass die
Partei mindestens 81 Wochen alt ist.

Die neue Partei entsteht in der Region, wo der Befehl gegeben wurde,
wobei dies weder Ozean noch einige andere "exotische" Regionen sein
dürfen. Das Magiegebiet der Partei bleibt gleich; ansonsten gelten die
selben Startbedingungen wie bei einem regulären Neustart.

<span id="NUMMER"></span><span id="INDEX-Befehle_NUMMER"></span> **NUMMER EINHEIT \[neue-nr\]  
NUMMER PARTEI \[neue-nr\]  
NUMMER SCHIFF \[neue-nr\]  
NUMMER GEBÄUDE \[neue-nr\]**  
Hiermit kann man einer Einheit, einem Schiff, einem Gebäude oder gar der
eigenen Partei eine neue Nummer zuweisen. Ist die Nummer bereits belegt,
so ändert sich die Nummer nicht.

Einheiten, Schiffe, Gebäude und Parteien können Nummern im üblichen
'Zahlen'bereich (bis zu vier Stellen 0-9, a-z) bekommen. Ohne Angabe
einer Nummer wird eine zufällige Nummer gewählt.

Die Nummer eines Schiffes kann man nur einmal nach dessen Bau ändern.

<span id="OPTION"></span><span id="INDEX-Befehle_OPTION"></span> **OPTION AUSWERTUNG \[NICHT\]  
OPTION COMPUTER \[NICHT\]  
OPTION ZIPPED \[NICHT\]  
OPTION BZIP2 \[NICHT\]  
OPTION STATISTIK \[NICHT\]  
OPTION PUNKTE \[NICHT\]  
OPTION SILBERPOOL \[NICHT\]  
OPTION MATERIALPOOL \[NICHT\]  
OPTION ZUGVORLAGE \[NICHT\]  
OPTION TALENTVERSCHIEBUNG \[NICHT\]  
OPTION ADRESSEN \[NICHT\]**  
Diese Optionen lassen sich ein- und ausstellen. Sie kontrollieren, wie
die Auswertung genau aussieht.

`AUSWERTUNG`: Dies ist die normale Auswertung im Klartext. Falls man nur
die Computer Auswertung verwendet, kann auf die normale Auswertung
verzichtet werden.

`COMPUTER`: Diese Auswertung ist für Programme leichter zu lesen. Mit
ihr kann jede Art von selber geschriebenen Programmen gespeist werden,
z.B. Hilfstools oder Kartenzeichner.

`ZIPPED`: Die Auswertung wird vor dem Versand mit `zip` gepackt.

`BZIP2`: Die Auswertung wird vor dem Versand mit `bzip2` gepackt.

`STATISTIK`: Mit dieser Option wird nach jeder Region in der normalen
Auswertung eine kleine Statistik angezeigt.

`PUNKTE`: Mit dieser Option wird eine Punktzahl ausgegeben, die einen
kleinen Vergleich mit anderen Parteien zulässt.

`ZUGVORLAGE`: Eine separate Datei enthält eine Vorlage für die Befehle
der nächsten Runde. Diese kann man hiermit aus- und wieder anstellen.
Wer diese nicht benötigt, weil er z.B. zur Zugerstellung ein Tool
benutzt, sollte die Zugvorlage abstellen.

`TALENTVERSCHIEBUNG`: Hiermit kann man eine kleine Anzeige im NR
einschalten. Hinter dem Talent ist dann aufgeführt, wenn sich das Talent
in der betreffenden Runde verändert hat.

`ADRESSEN`: Hiermit wird die Adressliste der Parteien, die man in der
Runde gesehen hat, an den Report angehängt.

`SILBERPOOL`: Normalerweise zahlen Einheiten anfallende Ausgaben "aus
eigener Tasche". Mit dieser Option kann eingeschaltet werden, daß
notwendiges Silber von allen Einheiten der Region gesammelt wird.

`MATERIALPOOL`: ist der Materialpool eingeschaltet, werden allen
benötigten Gegenstände einer Einheit ähnlich wie Silber mit dem
Silberpool bei Bedarf zusammengesammelt. Einheiten können sich mit dem
Befehl [`RESERVIERE`](#RESERVIERE) Gegenstände sichern und so vermeiden,
daß andere Einheiten sie von ihnen nehmen und verbrauchen. Diese Option
sollte wohlüberlegt benutzt werden, da man schnell unbedacht z.B. alles
Holz einer Region verbaut, welches man für andere Zwecke verplant hatte,
nur weil man ein `RESERVIERE` vergaß.

Zum Silber- und Materialpool siehe auch
[hier](http://www.eressea.de/rules/de/Geld#Pool).

<span id="PASSWORT"></span><span id="INDEX-Befehle_PASSWORT"></span> **PASSWORT "neues-passwort"**  
Dies setzt das Passwort neu. Man muß es von der nächsten Befehlsdatei an
immer mit dem Befehl [`ERESSEA`](#ERESSEA) zusammen verwenden. Erlaubt
sind im Passwort nur Buchstaben und Ziffern. Enthält es unzulässige
Zeichen, so wird es abgewiesen, das Passwort jedoch trotzdem auf ein
zufällig erzeugtes geändert. `PASSWORT` ohne Parameter setzt ein
zufällig erzeugtes Passwort.

Am Anfang wird jeder Partei ein zufälliges Passwort zugeordnet.

Beispiel:  
in der zweiten Woche des Monats Herdfeuer

    ERESSEA 11 "AltesPasswort"
       PASSWORT "Falsch" ; kein Effekt
       EINHEIT 75
          PASSWORT "MoftZga" ; das gilt ab nächster Runde!
       [...]

in der letzten Woche des Monats Herdfeuer

    ERESSEA 11 "MoftZga"
          [...]

Vorsicht:

1.  Das Passwort ist die einzige Stelle in der Befehlsdatei, bei der
    Groß- und Kleinschreibung berücksichtigt wird.
2.  Das Passwort muß von einer Einheit gesetzt werden.
3.  Für die jeweilige Befehlsdatei gilt immer das Passwort, welches auch
    im letzten Zug galt, oder dasjenige, welches im letzten Zug neu
    gesetzt wurde. Das Passwort vom letzten Zug gilt auch dann noch,
    wenn für den jetzigen Zug mehrere Befehlsdateien eingeschickt
    wurden, in denen unterschiedliche Passwörter gesetzt wurden.
4.  Das Passwort wurde nur dann erfolgreich neu gesetzt, wenn auch die
    entsprechende Meldung in der Auswertung stand:
    `Das Passwort wurde auf 'blabla' geändert.`

<span id="PFLANZE"></span><span id="INDEX-Befehle_PFLANZE"></span> **PFLANZE \[anzahl\] KRÄUTER   \<L\>  
PFLANZE \[anzahl\] BÄUME   \<L\>  
PFLANZE \[anzahl\] MALLORNSAMEN   \<L\>  
PFLANZE \[anzahl\] SAMEN   \<L\>**  
Für `PFLANZE KRÄUTER` braucht man mindestens Kräuterkunde 6. Die Einheit
versucht die angegebene Anzahl an Kräutern zu pflanzen, maximal jedoch
pro Talentstufe ein Kraut; sie benötigt dazu die passende Anzahl Kräuter
des entsprechenden Typs sowie eine Phiole "Wasser des Lebens". Es können
dadurch keine Kräutertypen gewechselt werden, es wird immer versucht,
den in der Region festgelegten Typ zu pflanzen.

Mit `PFLANZE BÄUME` oder `PFLANZE SAMEN` versucht die Einheit die
angegebene Anzahl an Samen zu pflanzen, maximal jedoch pro Talentstufe
einen Samen. In Mallornregionen können nur Mallornsamen gepflanzt
werden. Dazu benötigt man mindestens Kräuterkunde 7. Um normale Samen zu
pflanzen braucht man mindestens Kräuterkunde 6.

<span id="PIRATERIE"></span><span id="INDEX-Befehle_PIRATERIE"></span> **PIRATERIE \[partei-nr \[partei-nr \[...\]\]\]   \<L\>**  
Mit diesem Befehl legt sich der Kapitän eines Schiffes automatisch auf
die Lauer nach Schiffen, die nach ihrer Bewegung in einer Nachbarregion
liegen. Er wird sich dann automatisch dorthin begeben. Werden
Parteinummern angegeben, wird er nur auf Schiffe der angegebenen
Parteien reagieren. Wird keine Parteinummer angegeben, reagiert er auf
alle Schiffe von Parteien, zu denen die Partei des Kapitäns kein
[`HELFE KÄMPFE`](#HELFE) gesetzt hat.

Genaueres kann man im Kapitel [Piraterie](battle#piraterie)
nachlesen.

<span id="PRAEFIX"></span><span id="INDEX-Befehle_PRÄFIX"></span> **PRÄFIX \[präfix\]**  
Mit dem `PRÄFIX`-Befehl kann den Rassenbezeichnungen der Einheiten
seiner Partei im Report ein Präfix geben. Das Präfix hat keine weiteren
Auswirkungen. Ohne Parameter löscht der Befehl ein bestehendes Präfix.

Zur Zeit mögliche Präfixe sind *Dunkel*, *Licht*, *Klein*, *Hoch*,
*Hügel*, *Berg*, *Wald*, *Sumpf*, *Schnee*, *Sonnen*, *Mond*, *See*,
*Tal*, *Schatten*, *Höhlen*, *Blut*, *Wild*, *Chaos*, *Nacht*, *Nebel*,
*Grau*, *Frost*, *Finster*, *Düster*.

Der Befehl kann sowohl im Kontext der gesamten Partei als auch im
Gruppenkontext benutzt werden. Es ist also möglich, jeder Gruppe in
einer Partei ein eigenes Präfix zu geben.

<span id="REGION"></span><span id="INDEX-Befehle_REGION"></span> **REGION x,y; Name der Region**  
Der `REGION`-Befehl erfüllt keine Funktion für Eressea. Er wird
lediglich in die Befehlsvorlage der Auswertung eingesetzt, um anderen
Programmen (z.B. [ECheck](http://faroul.de/Eressea/ECheck)) das Erkennen
einzelner Regionen zu erleichtern.

<span id="REKRUTIERE"></span><span id="INDEX-Befehle_REKRUTIERE"></span> **REKRUTIERE anzahl**  
Hiermit werden neue Personen aus den Bauern der Region angeheuert. Pro
angeheuerter Person muß man zwischen 40 und 150 Silber an
Rekrutierungskosten ausgeben (siehe [diese](skill_list) Tabelle).
Die Einheit, welche neue Mitglieder rekrutiert, muß dieses Silber bei
sich tragen. Wird eine neue Einheit erschaffen, muß man der neuen
Einheit das nötige Geld geben, damit sie rekrutieren kann.

Man kann nur Personen der eigenen Parteirasse anwerben.
Migranten-Einheiten werben also keine weiteren Migranten an.

Heuert man weitere Mitglieder in einer bestehenden Einheit an, so
verwässern sich die Talente in der Einheit, da die Neuen nichts können
außer [`ARBEITEN`](#ARBEITEN) (das kann jeder). Die angesammelten
Talentstufen der alten Einheit werden einfach auf die neue Anzahl
Mitglieder verteilt.

Nachdem man Leute rekrutiert hat, kann man durchaus noch andere Befehle
ausführen.

<span id="RESERVIERE"></span><span id="INDEX-Befehle_RESERVIERE"></span> **RESERVIERE anzahl gegenstand**  
Hiermit kann sich eine Einheit Gegenstände oder Silber von anderen
Einheiten der Region nehmen und "sichern". Dabei ist zu beachten, daß
die Einheit sich ihre Waren von **irgendeiner** Einheit nimmt (in der
Regel von oben nach unten entsprechend der Reihenfolge in der
*Zugvorlage*, nicht im Report), sofern diese Einheiten nicht ihrerseits
diesen Gegenstand reservieren.

`RESERVIERE` funktioniert nur, wenn der
[Materialpool](http://www.eressea.de/rules/de/Geld#Pool) aktiviert
ist!

**Achtung!** `TEMP`-Einheiten können *nicht* reservieren! Silber wie
Gegenstände müssen ihnen mit [`GIB`](#GIB) übergeben werden.

Nicht reserviert (also anderen Einheiten weggenommen) werden
Gegenstände, die die andere Einheit zuvor per [`GIB`](#GIB) erhalten
hat. Näheres zu den Pools kann man im
[hier](http://www.eressea.de/rules/de/Geld#Pool) nachlesen.

<span id="ROUTE"></span><span id="INDEX-Befehle_ROUTE"></span> **ROUTE himmelsrichtung \[himmelsrichtung \[etc.\]\]   \<L\>**  
Mit dem Befehl `ROUTE` bewegt sich die Einheit genauso wie mit dem
Befehl [`NACH`](#NACH) durch die Welt von Eressea.

Mit dem `ROUTE`-Befehl kann jedoch eine "Kreisbewegung" erstellen, so
daß eine Einheit immer zwischen zwei oder mehr Punkten pendelt. Alle
Bewegungen, die abgearbeitet wurden, werden wieder hinten an den
`ROUTE`-Befehl angehängt.

Um eine Bewegung vorzeitig abzubrechen (z.B. bei Schiffen, die nicht so
weit segeln sollen, wie sie können), kann man ein `PAUSE` (kann `P`
abgekürzt werden) einfügen. Hat eine Einheit ihre Bewegung vollendet und
als nächstes kommt ein `PAUSE`, so wird dies mit hinten angehängt,
obwohl die Einheit bereits stoppt.

Ein Reiter kommt mit Straßen drei Regionen weit. Er bekommt folgenden
`ROUTE`-Befehl:

      ROUTE NO Osten Pause Osten Osten SO Westen Westen Pause SW Westen NW

Nächste Runde sieht der Befehl so aus:

      ROUTE Osten Osten SO Westen Westen Pause SW Westen NW NO Osten Pause

Und in der Runde darauf:

      ROUTE Westen Westen Pause SW Westen NW NO Osten Pause Osten Osten SO

Und in der Runde darauf:

      ROUTE SW Westen NW NO Osten Pause Osten Osten SO Westen Westen Pause

Und schließlich wieder wie am Anfang.

<span id="SABOTIERE"></span><span id="INDEX-Befehle_SABOTIERE"></span> **SABOTIERE SCHIFF   \<L\>**  
Mit diesem Befehl versucht ein Spion, das Schiff, auf dem er sich
befindet, zu versenken (man sollte es also nur an der Küste machen...).

<span id="SORTIERE"></span> <span id="INDEX-Befehle_SORTIERE"></span> **SORTIERE VOR einheit-nr  
SORTIERE HINTER einheit-nr**  
Mit diesem Befehl ändert man die Reihenfolge, in der eigene Einheiten im
Report und der Zugvorlage auftauchen. Dies ist nützlich, um z.B. Schüler
und Lehrer direkt untereinander stehen zu haben.  
Folgende Einschränkungen gibt es:

- `einheit-nr` muß eine *eigene* Einheit sein.
- Man kann sich nicht in ein Gebäude oder ein Schiff rein- oder
  raussortieren. Beide Einheiten müssen entweder in demselben Gebäude
  bzw. demselben Schiff sein, oder beide außerhalb.
- Man kann sich nicht `VOR` einen Gebäudebesitzer oder Schiffskapitän
  einsortieren.
- Ein Gebäudebesitzer oder Schiffskapitän kann den Befehl gar nicht
  benutzen.

Die Sortierung erfolgt ganz am Ende der Runde, nach der Bewegung. Man
kann also Einheiten, die mittels [`NACH`](#NACH) oder [`FAHRE`](#FAHRE)
in die Region gelangt sind, gleich passend einsortieren.

<span id="SPIONIERE"></span><span id="INDEX-Befehle_SPIONIERE"></span> **SPIONIERE einheit-nr   \<L\>**  
Mit Spionage kann man Einheiten einer anderen Partei ausspionieren.
Dabei wird das Spionagetalent des Spions mit dem Tarnungstalent der
Zieleinheit verglichen.

Die Grundchance für einen erfolgreichen Spionage-Versuch ist 10%. Für
jede Talentstufe, den das Spionagetalent das Tarnungstalent des Opfers
übersteigt, erhöht sich dieses um 5%.

Ist der Spionageversuch erfolgreich, erfährt der Spion den Kampfstatus,
die Gegenstände im Besitz der Einheit, die Talente und auch die wahre
Parteizugehörigkeit.

Die Parteizugehörigkeit kann nur ermittelt werden, wenn das
Spionagetalent mindestens 6 Talentstufen über dem Tarnungstalent der
Einheit liegt. Alle anderen Informationen können schon bei einem
einfachen Erfolg ermittelt werden. Anschließend wird - unabhängig vom
Erfolg - gewürfelt, ob der Spionageversuch bemerkt wurde. Die
Wahrscheinlichkeit dafür ist (100 - SpionageSpion\*5 +
WahrnehmungOpfer\*2)%.

<span id="STIRB"></span><span id="INDEX-Befehle_STIRB"></span> **STIRB "Passwort"**  
Dies bewirkt, daß die Partei sich auflöst und nicht mehr mitspielt. Das
Passwort der Partei muß zur Sicherheit auch angeben werden.

Auch hier muß eine Einheit diesen Befehl geben!

Wenn eine Partei aus dem Spiel ausscheidet, werden all ihre Gegenstände
und Silber an befreundete Einheiten übergeben, die in der selben Region
stehen wie Einheiten der toten Partei. Sind mehrere in der Region, wird
gerecht aufgeteilt (nach der Anzahl Personen in der Region). Als
befreundet gilt hier nur, wem ein [`HELFE ALLES`](#HELFE) gesetzt wurde,
wo also seitens der ausscheidenden Partei wirkliches Vertrauen
herrschte. Die Gegenstände gehen an die jeweils erste Einheit der Partei
in der Region.

<span id="TARNE"></span><span id="INDEX-Befehle_TARNE"></span> **TARNE \[stufe\]  
TARNE PARTEI \[NICHT\]  
TARNE PARTEI NUMMER nummer  
TARNE rasse**  
Mit der ersten Variante kann man einstellen, wie "intensiv" eine Einheit
sich zu tarnen versucht. `stufe` kann natürlich nicht höher als das
Talent der Einheit sein. Ohne Parameterangabe wird das Maximum gesetzt.

Mit `TARNE PARTEI` kann man seine Parteizugehörigkeit zu verbergen
versuchen. Im Gegensatz zum normalen Tarnung/Wahrnehmungs-Mechanismus
kann man die Parteizugehörigkeit einer solchen Einheit nur noch mit
Spionage erkennen.

`TARNE PARTEI NUMMER nummer` tarnt die Einheit mit einer anderen
Parteinummer, gibt sich also als einer beliebigen anderen Partei
zugehörig aus. Es gibt keinen einfachen Weg, diese Form der Tarnung zu
durchschauen. Um wieder der eigenen Partei zugehörig zu erscheinen, muß
für `nummer` die eigene Parteinummer verwendet werden. Die angegebene
Partei muß der Partei, welche den Befehl gibt, bekannt sein, d.h. in
deren Report auftauchen, ansonsten schlägt der Befehl fehl.

Mit `TARNE rasse` können Dämonen sich als andere Rasse tarnen.

Soweit, so einfach. Diese Tarnung bringt jedoch ein paar Besonderheiten
mit sich, die hier in loser Reihenfolge aufgezählt werden:

- Die (scheinbare) Rasse der Einheit ändert sich dadurch nicht, ein
  Goblin bleibt ein Goblin, auch wenn er sich als der Partei der
  Lichtelfen zugehörig ausgibt.
- Die Einheiten ändern ihr Verhalten durch die Tarnung nicht. Sie
  spenden z.B. kein Silber an die Verbündeten der Partei, als die sie
  sich tarnen. Wer also die Tarnung perfektionieren will, sollte mit den
  Einheiten eine Gruppe bilden und für diese Gruppe entsprechende
  Helfe-Stati setzen.  
  So getarnte Einheiten können auch nicht plötzlich Gebäude oder Schiffe
  betreten, die sie ansonsten nicht betreten dürfen, oder Steuern
  eintreiben, wo ihnen das normalerweise untersagt ist.
- Im Kampf bilden derartige Einheiten ein eigenes Heer. Beispiel: Es
  gibt drei Parteien, die Waldelfen, die Flusselfen und die Eisenzwerge.
  Alle Parteien habe jeweils eine Einheit: Waldelf, Flusself und
  Eisenzwerg. Während Waldelf sich als Flusself tarnt, behalten alle
  anderen Einheiten ihre wahre Identität bei.  
  Nun greift der Eisenzwerg den Flusself an. Dadurch erscheinen im
  Kampfreport drei Heere: Die Eisenzwerge, und zwei Flusselfen-Heere.  
  Auf diese Weise kann man also sehen, dass Einheiten sich als eine
  fremde Partei ausgeben (es werden ja zwei Flusselfen-Heere erzeugt),
  nicht aber, welcher Partei diese Einheiten wirklich gehören.

<span id="TRANSPORTIERE"></span> <span id="INDEX-Befehle_TRANSPORTIERE"></span> **TRANSPORTIERE einheit-nr**  
Mit diesem Befehl nimmt man andere Einheiten auf der Reise mit. Die zu
transportierenden Einheiten müssen bei dem Befehl [`FAHRE`](#FAHRE) die
transportierende Einheit angeben. Der `TRANSPORTIERE`-Befehl muß für
jede Einheit, die transportiert werden soll, einzeln gegeben werden.

       PARTEI 125 "FooBar"
         EINHEIT 311
            FAHRE 456 ; ich will mitfahren
         [...]

       PARTEI 300 "BarFoo"
         EINHEIT 456
            TRANSPORTIERE 311 ; Lasse 311 mitfahren

Meermenschen können beim Anschwimmen (siehe [`VERLASSE`](#VERLASSE))
keine anderen Rassen `TRANSPORTIERE`n und auch keine Pferde oder Wagen
mitnehmen.

Insekten können auch mittels `TRANSPORTIERE` nicht in oder durch einen
Gletscher gebracht werden. (siehe [hier](skill_races))

<span id="TREIBE"></span><span id="INDEX-Befehle_TREIBE"></span> **TREIBE \[betrag\]   \<L\>**  
Mit diesem Befehl treiben bewaffnete und trainierte Einheiten Steuern
bei den Bauern ein. Dazu benötigen sie eine Waffe und das dazugehörige
Talent und das Talent Steuereintreiben. Pro bewaffneter (und an dieser
Waffe ausgebildeter) Person und Talentstufe Steuereintreiben werden bis
zu 20 Silber von den Bauern eingetrieben; Katapulte eignen sich nicht
zum Steuereintreiben. Gibt man einen `betrag` an, so wird höchstens
dieser Betrag an Steuern eingetrieben. Dabei geben die Bauern sogar
Silber weg, das sie eigentlich zum Überleben bräuchten.

Das Steuereintreibenlimit einer Region gibt jeweils an, wieviel Silber
den Bauern insgesamt (ausgenommen Handel) abgenommen werden kann, ohne
dass diese abwandern. Es ist so hoch, wie die überschüssigen Einnahmen
der Bauern.

Wollen mehrere Parteien Steuern eintreiben, so wird das Geld zwischen
den Parteien aufgeteilt. Will man verhindern, daß nicht-alliierte
Parteien Steuern eintreiben, kann man dies mit dem Befehl
[`BEWACHE`](#BEWACHE) tun.

Das Steuereintreiben-Talent steigt nicht während der Anwendung.

Näheres zum Silberverdienen gibt es
[hier](http://www.eressea.de/rules/de/Geld).

<span id="UNTERHALTE"></span><span id="INDEX-Befehle_UNTERHALTE"></span> **UNTERHALTE \[betrag\]   \<L\>**  
Die Einheit wird die Runde damit verbringen, die Bauern zu unterhalten.
Pro Person und Talentstufe im Unterhalten kann man so bis zu 20 Silber
verdienen. Die Bauern geben aber nur 5% ihres Geldes für Unterhaltung
aus. Versuchen mehr Einheiten, die Bauern zu unterhalten, als diese
bezahlen werden, so wird das Geld auf alle unterhaltenden Einheiten
aufgeteilt. Gibt man einen `betrag` an, so wird die Einheit maximal so
viel einnehmen.

<span id="INDEX-Geld_Unterhaltung"></span>

> Die Bauern einer Region haben 1200 Silber. Die Unterhalter können
> demzufolge maximal 1200÷20=60 Silber verdienen. Betrachten wir nun
> zwei Einheiten: *A* hat 1 Person mit Unterhaltung 1, und *B*
> 2 Personen mit Unterhaltung 2. *A* könnte 1×1×20=20 Silber verdienen,
> *B* könnte 2×2×20=80 Silber verdienen; zusammen also 100 Silber.
>
> Da aber nur 60 Silber zur Verfügung stehen, werden diese 60 Silber
> ungefähr im Verhältnis 20:80 aufgeteilt. Einheit *A* bekommt also ca.
> 1/5 und Einheit *B* ca. 4/5 des vorhandenen Geldes. Das macht für *A*
> ca. 12 Silber und für *B* ca. 48 Silber.

Einheiten an Bord von Schiffen in bewachten Regionen können weder
arbeiten noch unterhalten (siehe [`ARBEITE`](#ARBEITE),
[`BEWACHE`](#BEWACHE) und [`HELFE`](#HELFE)).

Das Steuereintreibenlimit einer Region gibt jeweils an, wieviel Silber
den Bauern insgesamt (ausgenommen Handel) abgenommen werden kann, ohne
dass diese abwandern. Es ist so hoch, wie die überschüssigen Einnahmen
der Bauern.

Nähreres zum Silberverdienen gibt es
[hier](http://www.eressea.de/rules/de/Geld).

<span id="URSPRUNG"></span><span id="INDEX-Befehle_URSPRUNG"></span> **URSPRUNG x y**  
Mit diesem Befehl kann eine Einheit das Koordinaten-System der Partei
versetzen. Der Ursprung (0,0) wird an die angegebene Position des
jetzigen Koordinatensystems gesetzt.

<span id="VERGESSE"></span><span id="INDEX-Befehle_VERGESSE"></span> **VERGESSE talent**  
Mit diesem Befehl kann man eine Einheit anweisen, ein Talent zu
vergessen. Die Talentstufen werden damit auf 0 gesetzt - auch solche,
die die Einheit sonst "von Geburt an" kann. Dies ist z.B. dann nützlich,
wenn man zu einer Einheit viele neue Personen rekrutiert und damit ein
Talent, welches die Einheit früher mal gebrauchte, nicht mehr sinnvoll
anwenden kann und auch nicht mehr lernen soll.

<span id="VERKAUFE"></span><span id="INDEX-Befehle_VERKAUFE"></span> **VERKAUFE anzahl luxusgut   \<(L)\>  
VERKAUFE ALLES luxusgut   \<(L)\>**  
Die im Handeln kundige Einheit kann mit diesem Befehl Luxusgüter, in
deren Besitz sie ist, an die Bauern verkaufen. Dies geht nur, wenn sich
in der Region erstens ein Handelsposten oder ein größerer Burgtyp
befindet, in dessen Nähe der Markt abgehalten werden kann, und wenn
zweitens überhaupt eine Nachfrage nach dem Produkt besteht. Um etwas zu
verkaufen, ist kein Kontakt zum Burgherren notwendig; trotzdem ist es
natürlich diplomatischer, vorher zu fragen... Weitere Informationen dazu
[hier](http://www.eressea.de/rules/de/Geld#Handel).

Mit `VERKAUFE ALLES` wird soviel verkauft, wie die Nachfrage der Region
ist. Das klappt auch mit mehreren Parteien und auch, wenn in der
gleichen Woche das Handelsvolumen (z.B. durch Rekrutierungen) sinkt.

`VERKAUFE` ist wie [`KAUFE`](#KAUFE) ist ein "pseudolanger" Befehl. Man
kann insgesamt Talentstufe(Handeln)\*10 Luxusgüter verkaufen und kaufen,
allerdings keine anderen langen Befehle geben (siehe auch Befehl
[`KAUFE`](#KAUFE)).

`KAUFE` wie `VERKAUFE` tauchen nicht im Normalreport auf, so daß es
scheint, als hätte die Einheit keinen Defaultbefehl. Dies ist aber nur,
damit nicht eine große Liste von Befehlen dort steht. Im Computerreport
und der Zugvorlage sind alle Befehle nur aufgeführt, wenn ihnen ein `@`
vorangestellt ist.

<span id="VERLASSE"></span><span id="INDEX-Befehle_VERLASSE"></span> **VERLASSE**  
Die Einheit wird das Schiff oder das Gebäude, in dem sie sich befindet,
verlassen. Wenn man die Befehle [`BETRETE`](#BETRETE) oder
[`NACH`](#NACH) verwendet, verlassen die Einheiten z.T. automatisch ihre
Schiffe und Gebäude. Dies funktioniert allerdings nicht immer: ist die
Einheit Kapitän eines Schiffs und verwendet [`NACH`](#NACH), wird sie
versuchen in diese Richtung zu segeln, auch wenn dort Festland ist.
Kapitäne müssen ihr Schiff zuerst `VERLASSEN`, alle anderen Segler
können sich aber mit [`NACH`](orders_list#NACH) über Land bewegen
und verlassen das Schiff dabei automatisch.

Befindet sich die Einheit auf einem Schiff und wird die Region von einer
nicht-alliierten Partei bewacht, muss sie das Schiff erst verlassen,
wenn sie bestimmte Aktionen durchführen will. Siehe hierzu näheres unter
[`BEWACHE`](#BEWACHE).

Verläßt eine Einheit ein Gebäude oder ein Schiff, über das sie das
Kommando hat, fällt dieses nicht zwangsweise an die folgende Einheit des
Reports. Hier sollte man mit [`GIB einheit KOMMANDO`](#GIB_KOMMANDO) die
Kommando-Übergabe kontrolliert vonstatten gehen lassen. Die Reihenfolge
der Einheiten ist während der Auswertung nicht immer die dem Report
entsprechende. Sind eigene Einheiten in dem Gebäude oder auf dem Schiff,
fällt das Kommando aber diesen zu.

Meermenschen können ihr Schiff schon in Ozean-Regionen direkt neben
Land-Regionen verlassen und dann mit `NACH` an Land gehen. Dies geht
allerdings nur, wenn sie das, was sie bei sich haben, tragen können und
ebenso keine Pferde oder gar Wagen bei sich haben.

<span id="ZAUBERE"></span><span id="INDEX-Befehle_ZAUBERE"></span> **ZAUBERE \[parameter\] "zauberspruch" \[parameter\]   \<(L)\>**  
Mit diesem Befehl wird eine Magiereinheit versuchen, den genannten
Zauberspruch zu zaubern. `ZAUBERE` ist zwar kein langer Befehl, er
schließt aber weitere lange Befehle aus. Man kann aber weitere Zauber
sprechen.

Die Anwendung der Zauber ist zum einen im Kapitel
[Zauber](http://www.eressea.de/rules/de/Magie#Zauber) genauer
erklärt, zum anderen ist sie bei der Zauberbeschreibung selbst zu
finden. Diese erhält man, wenn man den Zauber neu erhält und kann ihn
sich mit `ZEIGE` (s.u.) nochmal anzeigen lassen.

Kampfzauber können nicht einfach so gezaubert werden. Will man diese
gegen eine Einheit verwenden, muß man den [`KAMPFZAUBER`](#KAMPFZAUBER)
setzen und dann die Einheit [`ATTACKIERE`n](#ATTACKIERE). Dies kann
allerdings zu größeren Schlachten führen!

Neue Zaubersprüche erhält man in der Regel, sobald der Magier eine neue
Stufe erreicht.

<span id="ZEIGE"></span><span id="INDEX-Befehle_ZEIGE"></span> **ZEIGE "zauberspruch"  
ZEIGE "gegenstand"  
ZEIGE "trank"  
ZEIGE ALLE ZAUBER  
ZEIGE ALLE TRÄNKE**  
Dies zeigt die Beschreibung zu einem Zauberspruch, das Rezept eines
alchemistischen Trankes an oder die Beschreibung eines Gegenstands an.
Die Einheit, die den Befehl gibt, muß den Gegenstand besitzen, bzw.
Kenntnis des Zaubers oder des Tranks haben.

<span id="ZERSTOERE"></span><span id="INDEX-Befehle_ZERSTOERE"></span> **ZERSTÖRE \[stufen\]  
ZERSTÖRE \[stufen\] STRASSE richtung**  
Eine Einheit, die das Kommando über ein Schiff oder ein Gebäude hat,
kann dieses jederzeit mit diesem Befehl verkleinern oder ganz zerstören.
Dazu braucht sie kein Talent. Der Parameter `stufen` bezeichnet dabei
bei Gebäuden die Größenpunkte, um die das Gebäude verkleinert werden
soll, bei Schiffen die Prozentpunkte. Schiffe können allerdings nur in
Küstengebieten verkleinert oder versenkt werden, die Besatzung weigert
sich, das Schiff auf hoher See zu beschädigen!

Mit `ZERSTÖRE [stufen] STRASSE richtung` kann man eine Straße abreißen
oder beschädigen. Dabei darf keine Partei die Region bewachen, die nicht
[`HELFE BEWACHE`](#HELFE) zur eigenen Partei gesetzt hat. Um eine Straße
zu beschädigen oder zu zerstören, benötigt eine Einheit das Talent
Straßenbau. Man kann einen Grössenpunkt pro Talentpunkt zerstören.

Eine Einheit kann jeweils nur eine Struktur (Gebäude, Straße, Schiff)
pro Woche zerstören.

<span id="ZUECHTE"></span><span id="INDEX-Befehle_ZUECHTE"></span> **ZÜCHTE PFERDE   \<L\>  
ZÜCHTE \[anzahl\] KRÄUTER   \<L\>  
ZÜCHTE \[anzahl\] BÄUME   \<L\>**  
Hiermit können Einheiten in einer
[Pferdezucht](production_buildings#GebPferdezucht) Pferde züchten
oder versuchen, in einer Region neue Kräuter oder Bäume zu pflanzen.

Mit `ZÜCHTE PFERDE` kann pro Person und Talentstufe Pferdedressur ein
Pferd mit einer Wahrscheinlichkeit von \[Pferdedressur\]% entstehen.

> 3 Personen mit Pferdedressur 5 haben 3×5 Chancen zu je 5%, ein Pferd
> dazuzubekommen.

Man braucht mindestens zwei Pferde in der Pferdezucht, um Pferde züchten
zu können. Außerdem muß pro "Zuchtchance" jeweils ein Pferd vorhanden
sein (in obigem Beispiel also 15 Pferde).

Für `ZÜCHTE KRÄUTER` braucht man mindestens Kräuterkunde 6. Die Einheit
versucht die angegebene Anzahl an Kräutern zu pflanzen, maximal jedoch
pro Talentstufe ein Kraut; sie benötigt dazu die passende Anzahl Kräuter
des entsprechenden Typs sowie eine Phiole "Wasser des Lebens". Es können
dadurch keine Kräutertypen gewechselt werden, es wird immer versucht,
den in der Region festgelegten Typ zu pflanzen.

`ZÜCHTE BÄUME` ist das selbe wie
[`PFLANZE BÄUME`](orders_list#PFLANZE)

<span id="KOMMENTAR"></span><span id="INDEX-Befehle_KOMMENTAR"></span> **// Kommentar**  
Im Gegensatz zu einem Kommentar hinter einem `;` (Semikolon) wird dieser
Kommentar mit in die Vorlage für den Zug der nächsten Runde mit
aufgenommen.

    EINHEIT 123;     Hundertdreiundzwanzig [20,450$]
         // Unterhalt Magierturm
       @GIB 234 1000 SILBER
         // Ab und an Stangenwaffen lernen
       TREIBE Steuern ein

Das `//` muß wie ein Befehl behandelt werden, man darf also nicht

       @GIB 345 100 SILBER // wegen Sägewerk

machen. Außerdem muß ein Leerzeichen hinter den `//` sein.
