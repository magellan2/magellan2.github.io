<span id="top"></span> <span id="Rassen"></span>

# Rassen in Eressea

Neben den Menschen gibt es in Eressea noch viele andere Rassen
(=Parteitypen), unter denen der Spieler wählen kann. Jede Rasse hat
gewisse Vor- und Nachteile, die sich durch Boni bzw. Mali in einigen
Talenten äußern und manchmal gewisse andere spezielle Fähigkeiten;
außerdem hat jede Rasse verschiedene Rekrutierungskosten. Eine Person
wiegt in der Regel 10 Gewichtseinheit (GE) und kann 5,4 GE tragen.
Ausnahmen sind Trolle, Goblins und verschiedene Monster.

Jeder neu beginnende Spieler muß sich eine Rasse aussuchen, die er
fortan spielen will. Diese Rasse wird bei der Anmeldung angegeben und
kann danach NICHT mehr geändert werden. Die Auswahl sollte also gut
überdacht werden.

<span id="kurz"></span><span id="speziell"></span>

## Kurzbeschreibungen und spezielle Fähigkeiten

Folgende Rassen gibt es:

Menschen  
können alles ein bißchen, nichts so richtig schlecht aber auch nichts so
richtig gut. Sie kommen mit allen Völkern gut aus und sind überall zu
finden.

- Eine Mensch-Partei kann einige Personen anderer Rassen haben, wobei
  ein Mischen von verschiedenen Rassen in einer Einheit nicht möglich
  ist. Diese Personen kann die Partei aber nicht selber rekrutieren,
  sondern muß sie sich von anderen Parteien der entsprechenden Rassen
  geben lassen.  
  Die Anzahl dieser "Migranten" errechnet sich wie folgt:  
  log<sub>10</sub>(Parteigröße÷50)×20 Hat man durch eine Katastrophe
  oder Kampf plötzlich zu viele Migranten, werden diese nicht entfernt,
  man kann nur keine neuen mehr aufnehmen.  
  Es gibt keine Migranten mit sog. "teuren Talenten", also z.B. Magier
  oder Taktiker.

Zwerge  
leben in den Bergen. Ihre Schmiedekünste sind vielgerühmt, ihre Bauten
weltbekannt. Magie ist ihnen ein Greuel, Pferde nicht ganz geheuer und
auch das Wasser ist nicht gerade ihr Element.

- Von Zwergen abgebautes Eisen wird nur zu 75% vom "Regionsvorrat"
  abgezogen. Dieser Effekt ist kumulativ zu einem Bergwerk (siehe
  [hier](production_buildings#GebBergwerk) und
  [hier](production_items#Eisen)).
- Im Gebirge und Gletschern +1 auf Taktik.

Orks  
sind ein recht kämpferisches Volk; schon in der Kindergrube wissen sie
mit einer Waffe umzugehen. Kontakte zu anderen Völkern haben sie am
liebsten bei Überfällen mit dreifacher Übermacht.

- Neu rekrutierte Orks starten mit je Talentstufe 1 in Hiebwaffen und
  Stangenwaffen.
- Orks verdienen mit [`ARBEITEN`](orders_list#ARBEITE) weniger als
  andere Rassen (siehe dort).
- Rekrutierte Orks werden - ähnlich dem zwergischen Eisenbonus - nur zu
  50% von den Regionsbauern abgezogen. Ein rekrutierter Ork wird deshalb
  nur zur Hälfte vom Rekrutierungslimit der Region abgezogen. Es wird
  aufgerundet.
- Analog gilt: Gibt man Orks mit [`GIB 0`](orders_list#GIB) an die
  Bauern, so werden sie nur zur Hälfte zu den Bauern addiert. Hierbei
  wird allerdings abgerundet.
- Unbewaffnete Orks kämpfen im Nahkampf nicht wie andere Rassen mit -2,
  sondern mit (bestes Nahkampftalent -3). Zum Steuereintreiben benötigen
  sie trotzdem Waffen.
- Orks sind langsame Denker und lernen generell alle Nichtkampftalente
  etwas langsamer als andere Rassen.

Elfen  
sind ein geradezu magisches Volk. Schwere Arbeiten sind nicht unbedingt
ihre Stärke, dafür umso mehr die feine Muse und die Magie der Natur.

- Jeder Elf in der Region (bis zu maximal 1/8 der Regionsbevölkerung)
  erhöht die Chance eines Baums, in einer Sommer- oder Herbstwoche einen
  Samen abzuwerfen. Das kann je nach Anzahl der Elfen einen ganz
  deutlichen Unterschied ausmachen.
- Elfen haben in Wäldern zusätzlich Tarnung und Wahrnehmung +1 und
  Taktik +2.
- Elfen dürfen vier Magier besitzen.
- Elfen machen mit Bögen einen Schadenspunkt mehr.
- Nur Elfen können Elfenboegen bauen.

Katzen  
Auch die Katzen zählen kaum zu den Handwerkern. Ihre feinen Sinne und
ihre Geschmeidigkeit helfen jedoch bei einigen Dingen, die andere erst
mühsam erlernen müssen.

- "Sieben Leben": Katzen überleben einen ansonsten tödlichen Treffer mit
  1/7 Wahrscheinlichkeit; sie haben dann wieder volle Trefferpunkte.
- Katzen benutzen keine Plattenpanzer.
- Ihre Gewandheit verleiht Katzen einen Bonus von +1 auf Verteidigung

Dämonen  
sind grausam und unberechenbar. Sie fressen die Bauern der Umgebung und
überraschen immer wieder mit neuen Fähigkeiten.  
***Achtung!** Dämonen sind denkbar ungeeignet für unerfahrene
Eressea-Spieler!*

- Alle Talente, in denen sie mindestens Talentstufe 1 haben, verschieben
  sich mit einer Wahrscheinlichkeit von 25% um bis zu 3 Talentstufen
  nach oben (mit 60% Chance) oder unten (mit 40% Chance; das Talent
  steigt oder sinkt also, nicht beides). Die Verschiebung erfolgt nach
  den langen Befehlen und der Bewegung. Negative Talentwerte entstehen
  dabei nicht; ein Talent kann nicht unter 0 fallen.
- <span id="Daemonenhunger"></span>Dämonen fressen jede Runde Bauern.
  Ein Bauer ernährt zehn Dämonen, und ein Dämon, der keine Nahrung
  bekommt, verliert Trefferpunkte nach der normalen Hungerregel Sie
  können im Gegensatz zu anderen Rassen jedoch auch während sie hungern
  lange Befehle ausführen. Talente lernen sie nur mit halber
  Geschwindigkeit, und sie regenerieren während des Hungerns keine
  Lebenspunkte.
- Pro Dämon in einer Region flieht ca. 1 Bauer.
- Rekrutierte Dämonen werden nicht vom Bauernpool abgezogen. Aus
  spieltechnischen Gründen gilt aber trotzdem das Rekrutierungslimit.
- Dämonen, die abgegeben werden, kehren in ihre Heimatsphäre zurück, sie
  werden nicht zu Bauern.
- Dämonen können sich als eine andere Rasse tarnen.
- Im Nahkampf bewirkt jeder Treffer eines Dämons bei einem Gegner eine
  "1-Personen-Panik": die betroffene Person hat -1 auf ihr Kampftalent.
- Verwundete Dämonen regenerieren sich mit 7,5% ihrer Trefferpunkte.

Halblinge  
sind kleine Gesellen mit haarigen Füßen. Sie sind gute Händler und
verstehen es, die Bauern zu unterhalten. Sie sind gute Baumeister,
Pferde und Schiffe überlassen sie aber lieber anderen. Der Umgang mit
Waffen zählt nicht gerade zu ihren Stärken.

- Halblinge, die in einem Kampf verusuchen zu fliehen, haben dabei eine
  Grundchance von 50% (alle anderen Rassen 25%). Die maximale Chance ist
  bei ihnen 90% (sonst 75%, siehe
  [`KÄMPFE FLIEHE`](orders_list#KAEMPFE)).
- Halblinge haben einen Angriffs-Bonus und einen Schadens-Bonus von je
  +5 im Kampf gegen Drachen.

Goblins  
sind feige und hinterhältig, lieber verstecken sie sich, als daß sie zur
Tat schreiten. Bei ihnen gilt: "Masse statt Klasse."

- Wenn sie mit mindestens zehnfacher Übermacht angreifen, erhalten sie
  Angriffsbonus.
- Goblins sind mit 6 GE leichter als andere Rassen, dafür ist aber auch
  ihre Tragekapazität von 4,4 GE geringer.
- Wenn Goblins mit einem Tarnungstalent von mindestens 4 klauen,
  bekommen sie mindestens 50 Silber, selbst dann, wenn sie erwischt
  werden.
- Unbewaffnete Goblins haben einen Bonus von +2 auf ihre Verteidigung.
- Verwundete Goblins regenerieren sich mit 10% ihrer Trefferpunkte.

Insekten  
leben in einem streng organisiertem Staat. Sie hassen die Kälte und
fühlen sich in feucht-warmen Gegenden am wohlsten. Ihr harter Panzer
schützt sie vor so manchen Übergriffen.  
*Insekten sind nicht so geeignet für unerfahrene Eressea-Spieler.*

- Insekten mögen Wärme und Feuchtigkeit und hassen die Kälte: In Wüsten
  und Sümpfen haben sie +1 auf alle Talente, in denen sie wenigstens
  Talent 1 haben, in Gebirgen -1.
- Insekten können Gletscher nicht betreten, es ist ihnen zu kalt. Sie
  können auch nicht von anderen Rassen in oder durch einen Gletscher
  gebracht werden.
- Insekten können in den Wintermonaten Herdfeuer, Eiswind und Schneebann
  nur in Wüsten rekrutieren. Es kann allerdings durch Alchemie ein Trank
  (Nestwärme) hergestellt werden, der die Rekrutierung in anderem
  Terrain möglich macht.
- Insekten sind automatisch durch ihren Chitinpanzer geschützt. Diese
  Rüstung wirkt zur Hälfte additiv zu einer Rüstung, die Insekten
  tragen.
- Insekten bekommen einen Taktik-Bonus, wenn sie in Massen auftreten.
  Ein Insektentaktiker bekommt einen Bonus von log<sub>10</sub>(Anzahl
  der Kämpfer in seinem Heer)-1 auf Taktik. Das kann bei sehr wenigen
  Kämpfern auch einen Malus ergeben!
- Insekten können in Wüsten und Sümpfen auch ohne Burgen handeln.

Trolle  
stapfen wandelnden Felsbrocken gleich unübersehbar durch die Lande. Mit
Steinen können sie mit ihren riesigen Kräften perfekt umgehen, dafür
aber umso weniger mit Pferden, und auch das Schwimmen ist nicht ihre
Meisterdisziplin.

- Trolle sind stark und können doppelt soviel tragen wie andere
  (10,8 GE), wiegen aber auch doppelt soviel (20 GE).
- Es gibt keine Troll-Kavallerie, d.h. Trolle erhalten keinen
  Pferdebonus. Auf den Warentransport und die Bewegungsgeschwindigkeit
  berittener Trolle hat das keine Auswirkungen.
- Von Trollen abgebaute Steine werden nur zu 75% vom "Regionsvorrat"
  abgezogen. Dieser Effekt ist kumulativ zu einem Steinbruch (siehe
  [hier](production_buildings#GebSteinbruch) und
  [hier](production_items#Eisen)).
- Gegen Trolle hat Kavallerie nur einen Bonus von +1.
- Je vier Trolle können einen Wagen ziehen, sich allerdings auch nur ein
  Feld weit bewegen. Trolle sind jedoch faul: wenn sie Pferde dabei
  haben, werden diese vor die Wagen gespannt - sofern sie reiten können.
- Unbewaffnete Trolle machen 2-6 Trefferpunkte Schaden.
- Verwundete Trolle regenerieren sich mit 7,5% ihrer Trefferpunkte.

Meermenschen  
sind im Wasser zu hause, im Gebirge fühlen sie sich dagegen unwohl.
Schiffe bauen und bedienen sie so leicht, als seien es Bauklötzchen,
während ihnen andere Arbeiten nicht ganz so leicht fallen.

- Alle Schiffe mit Meermenschen-Kapitän einer Meermenschen-Partei können
  sich ein Feld weiter bewegen.
- Meermenschen können auch auf Schiffen lange Befehle ausführen.  
  Achtung, dies hat einige implizite Folgen: Meermenschen können sich
  z.B. von einer an eine Landregion angrenzende Ozeanregion auf die
  Landregion begeben!
- Bis zu 100 Meermenschen pro Ozeanfeld können auf hoher See mit dem
  Befehl [`ARBEITE`](orders_list#ARBEITE) je 10 Silber verdienen.

<span id="mod"></span><span id="TabRassen"></span>

## Talentmodifikatoren

| Talent              | Zwerge | Orks | Elfen | Katzen | Dämonen | Halblinge |
|---------------------|:------:|:----:|:-----:|:------:|:-------:|:---------:|
| Rekrutierungskosten |  110   |  70  |  130  |   90   |   150   |    80     |
| Trefferpunkte       |   24   |  24  |  18   |   20   |   50    |    18     |
| nat. Rüstung        |   0    |  0   |   0   |   0    |    2    |     0     |
| Magieresistenz      |   5    |  -5  |  10   |   0    |   15    |     5     |
| Alchemie            |   0    |  +1  |  -1   |   -1   |   +2    |     0     |
| Armbrustschießen    |   0    |  0   |   0   |   0    |    0    |    +1     |
| Ausdauer            |   0    |  0   |   0   |   0    |    0    |     0     |
| Bergbau             |   +2   |  +1  |  -2   |   -2   |    0    |    +1     |
| Bogenschießen       |   -1   |  0   |  +2   |   0    |    0    |    -1     |
| Burgenbau           |   +2   |  +1  |  -1   |   -1   |    0    |    +1     |
| Handeln             |   +1   |  -3  |   0   |   0    |   -3    |    +2     |
| Hiebwaffen          |   +1   |  0   |   0   |   0    |   +1    |    -1     |
| Holzfällen          |   -1   |  +1  |   0   |   0    |   +1    |     0     |
| Katapultbedienung   |   +2   |  0   |  -2   |   -1   |    0    |    -1     |
| Kräuterkunde        |   -2   |  -2  |  +2   |   +1   |   -3    |    +2     |
| Magie               |   -2   |  -1  |  +1   |   0    |   +1    |     0     |
| Pferdedressur       |   -2   |  -1  |  +1   |   0    |   -3    |    -1     |
| Reiten              |   -2   |  0   |   0   |   0    |   -1    |    -1     |
| Rüstungsbau         |   +2   |  +1  |  -1   |   -1   |    0    |     0     |
| Schiffbau           |   -1   |  -1  |  -1   |   -1   |   -1    |    -1     |
| Segeln              |   -2   |  -1  |  -1   |   -2   |   -1    |    -2     |
| Spionage            |   0    |  -1  |   0   |   +2   |    0    |    +1     |
| Stangenwaffen       |   0    |  0   |   0   |   0    |   +1    |    -1     |
| Steinbau            |   +2   |  +1  |  -1   |   -1   |    0    |     0     |
| Steuereintreiben    |   +1   |  +1  |   0   |   +1   |   +1    |    -1     |
| Straßenbau          |   +2   |  0   |  -1   |   -1   |    0    |    +1     |
| Taktik              |   0    |  +1  |   0   |   0    |   -1    |     0     |
| Tarnung             |   -1   |  0   |  +1   |   +1   |   +1    |    +1     |
| Unterhaltung        |   -1   |  -2  |   0   |   0    |   -3    |    +1     |
| Waffenbau           |   +2   |  +2  |   0   |   0    |   +1    |     0     |
| Wagenbau            |   0    |  -1  |   0   |   0    |   -2    |    +2     |
| Wahrnehmung         |   0    |  0   |  +1   |   +2   |   +1    |    +1     |

Rassenmodifikationen der Talente

| Halblinge           | Menschen | Goblins | Insekten | Trolle | Meermenschen |
|---------------------|:--------:|:-------:|:--------:|:------:|:------------:|
| Rekrutierungskosten |    75    |   40    |    80    |   90   |      80      |
| Trefferpunkte       |    20    |   16    |    24    |   30   |      20      |
| nat. Rüstung        |    0     |    0    |    2     |   1    |      0       |
| Magieresistenz      |    0     |   -5    |    5     |   10   |      0       |
| Alchemie            |    0     |   +1    |    0     |   0    |      0       |
| Armbrustschießen    |    0     |    0    |    +1    |   0    |      0       |
| Ausdauer            |    0     |    0    |    0     |   0    |      0       |
| Bergbau             |    0     |   +1    |    +1    |   +2   |      -2      |
| Bogenschießen       |    0     |    0    |    -2    |   -2   |      0       |
| Burgenbau           |    0     |   +1    |    +2    |   +2   |      -1      |
| Handeln             |    +1    |   -1    |    -1    |   0    |      +2      |
| Hiebwaffen          |    0     |    0    |    -1    |   +1   |      0       |
| Holzfällen          |    0     |    0    |    +1    |   0    |      0       |
| Katapultbedienung   |    0     |   +1    |    0     |   +2   |      0       |
| Kräuterkunde        |    -1    |    0    |    +1    |   -1   |      0       |
| Magie               |    0     |   -1    |    0     |   0    |      0       |
| Pferdedressur       |    0     |    0    |    -3    |   -1   |      0       |
| Reiten              |    0     |    0    |    -3    |   -2   |      0       |
| Rüstungsbau         |    0     |    0    |    +2    |   +2   |      -1      |
| Schiffbau           |    +1    |   -2    |    0     |   -1   |      +3      |
| Segeln              |    +1    |   -2    |    0     |   -1   |      +3      |
| Spionage            |    0     |    0    |    0     |   -3   |      0       |
| Stangenwaffen       |    0     |    0    |    +1    |   0    |      0       |
| Steinbau            |    0     |    0    |    0     |   +2   |      0       |
| Steuereintreiben    |    0     |    0    |    0     |   +1   |      0       |
| Straßenbau          |    0     |   -2    |    -1    |   +2   |      -1      |
| Taktik              |    0     |   -2    |    -1    |   -1   |      0       |
| Tarnung             |    0     |   +1    |    -1    |   -3   |      0       |
| Unterhaltung        |    0     |   -1    |    -2    |   -1   |      0       |
| Waffenbau           |    0     |    0    |    0     |   0    |      0       |
| Wagenbau            |    0     |   -1    |    0     |   0    |      0       |
| Wahrnehmung         |    0     |    0    |    +1    |   -1   |      0       |

Rassenmodifikationen der Talente

Die Modifikationen kommen nur zur Geltung, wenn das Talent mindestens
einmal gelernt wurde. Außerdem gibt es einige spezielle Modifikationen,
die in der Tabelle nicht aufgeführt sind. Diese sind kumulativ zu den
Talentboni, d.h, daß z.B. Elfen (Tarnung +1) in Wäldern Tarnung +2
haben.
