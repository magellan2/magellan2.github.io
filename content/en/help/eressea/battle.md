<span id="top"></span>

# Vom Kriege

Konflikte werden in Eressea nicht zu vermeiden sein. Es wird Streit um
Silber, um Regionen, um Steuerrechte, um Handelsrouten und so weiter
geben. Deswegen muß man sich immer nach Freunden und Alliierten
umschauen, denn: "Freunde kommen und gehen, Feinde mehren sich."

<span id="INDEX-Kampf_Belagern"></span><span id="siege"></span>
<span id="Belagern"></span>

## Vor der Schlacht - die Belagerung

Hat man genug bewaffnete Personen, kann man eine Burg belagern. Wie
viele Personen man benötigt, hängt von der Größe der Burg ab: pro
Größenpunkt einer Burg braucht man zwei Personen. Für eine Burg der
Größe 64 braucht also 128 Personen, um sie komplett zu belagern. Diese
Personen müssen bewaffnet sein oder Katapulte haben und natürlich mit
ihrer Waffe oder dem Katapult umgehen können.

Um die Burg dann zu belagern, muß eine Einheit die Region mit der Burg
erst eine Woche lang bewachen. In der nächsten Runde kann man mit der
Belagerung beginnen. Bewachende Einheiten fremder Parteien sind also
immer mit Vorsicht zu genießen! Wird eine Burg belagert, werden ihre
Bewohner von der Außenwelt und allen Einnahmequellen abgeschnitten.
Sofern die Belagerer Katapulte haben, werden sie diese automatisch
abfeuern und so langsam aber sicher die Burg zerstören.

Ist die Tarnung einer Einheit um mindestens 3 Punkte höher als die
Wahrnehmung der belagernden Einheiten, kann eine Einheit die belagerte
Burg betreten und verlassen, und somit dringend benötigtes Silber in die
Burg schmuggeln.

Die Belagerung kann beliebig lange aufrecht erhalten werden. Wenn
belagerte Einheiten durch Verhandlungen die Belagerung nicht beenden
können, bleibt ihnen nur noch ein Ausfall, also ein Angriff der
Belagerer.

<span id="INDEX-Kampf_Attacke"></span><span id="seiten"></span>

## Die Seiten in einer Schlacht

Mit dem Befehl [`ATTACKIERE`](orders_list/#ATTACKIERE) startet man
den Angriff gegen den Gegner. Die `ATTACKIERE`-Befehle werden in einer
zufälligen Reihenfolge ausgeführt. Bei einer Attacke sammeln sich die
Einheiten aller Seiten in der Region und kämpfen als Einzelpersonen
gegeneinander. Eine Schlacht dauert maximal sechs Runden, fünf reguläre
Kampfrunden und eventuell noch die Runde 0 (Null), die
[Taktiker-Runde](#Taktikerrunde).

Die *angreifende* Seite besteht aus allen Einheiten, welche
`ATTACKIERE`-Befehle gegen eine oder mehrere Einheiten der
verteidigenden Partei gegeben haben.

Die *verteidigende* Seite besteht aus den Einheiten der verteidigenden
Partei, die angegriffen wurden, wo der Gegner also `ATTACKIERE einheit`
gemacht hat, und allen Einheiten, die kampfbereit sind (also `KÄMPFE`,
`KÄMPFE AGGRESSIV`, `KÄMPFE HINTEN` oder `KÄMPFE DEFENSIV` gesetzt
haben). Außerdem helfen alle kampfbereiten Einheiten alliierter
Parteien, also jener, die [`HELFE KÄMPFE`](orders_list/#HELFE) für
die angegriffene Partei gesetzt haben.

Es gibt also unterschiedliche Gründe, warum eine Einheit am Kampf
teilnimmt. Diese sind in der Reihenfolge ihrer Priorität:

1.  Die kampfbereite Einheit greift eine andere Einheit an. Dann nimmt
    sie in jedem Fall am Kampf teil.
2.  Die Einheit wird von einer anderen Einheit angegriffen. Dann
    gliedert sie sich entsprechend ihres Kampfstatus in die
    [Kampfreihen](#rows) ein. (s.a.
    [`KÄMPFE`](orders_list/#KAEMPFE)).
3.  Eine Einheit aus der eigenen Partei wird von jemandem attackiert.
    Dann nimmt die Einheit am Kampf teil, wenn sie weder `KÄMPFE NICHT`
    noch `KÄMPFE FLIEHE` gesetzt hat. In letzterem Fall kommt sie nicht
    auf die Idee, zu flüchten, da sie ja nicht selbst bedroht ist.
4.  Eine Einheit aus einer verbündeten Partei (also einer Partei, der
    man `HELFE KÄMPFE` gesetzt hat) wird von jemandem attackiert. Dann
    nimmt die Einheit am Kapmf teil, wenn sie nicht `KÄMPFE NICHT` oder
    `KÄMPFE FLIEHE` gesetzt hat. Wiederum wird eine Einheit mit
    `KÄMPFE FLIEHE` nicht flüchten, da sie keiner direkten Bedrohung
    ausgesetzt ist.

Alliierte helfen also automatisch nur Verteidigern und nur dann, *wenn
der Verteidiger nicht selber attackiert* hat. Angegriffene verteidigen
sich mit dem Rest der Partei, wenn dieser sich nicht explizit aus dem
Kampf heraushält. Für einen Angriff spielt der Kampfstatus primär keine
Rolle: Außer Verteidigern werden nur solche Einheiten in den Kampf
verwickelt, die einen `ATTACKIERE` Befehl gegeben haben. Einheiten, die
jedoch `KÄMPFE NICHT` oder `FLIEHE` gesetzt haben, können auch nicht
angreifen.

**Achtung!** Einheiten innerhalb einer belagerten Burg können Einheiten
außerhalb der Burg nicht zur Hilfe eilen!

Um also einen Feind gemeinsam anzugreifen, muß jede angreifende Partei
mindestens eine Einheit des Feindes attackieren. Um sich gemeinsam gegen
Angreifer zu wehren, müssen sich die verteidigenden Parteien nur
gegenseitig helfen.

Prinzipiell gilt jeder als alliiert, dem `HELFE KÄMPFE` gesetzt wurde,
und der niemanden attackiert hat, dem `HELFE KÄMPFE` gesetzt wurde.

Beispiel 1:

> **A** hilft **B** und **C**. **C** attackiert **B**, deshalb greift
> **A** in den Kampf mit ein: **B** ist alliiert. Partei **C** gilt
> nicht als alliiert, weil sie einen Alliierten angreift.

Wer kämpft nun gegen wen?  
Ich kämpfe gegen meine Feinde. Meine Feinde sind Parteien, die mich
angreifen, die ich angreife, oder die einen Alliierten (nach der
Definition von eben) angreifen.

Beispiel 2:

> **A** hilft **B** und **C**. **B** und **C** attackieren sich
> gegenseitig. Dann hilft **A** weder **B** noch **C**, denn keiner von
> ihnen gilt als alliiert, und keiner ist ein Feind von **A**.

Beispiel 3:

> **A** attackiert **B** und **C**. Sind **B** und **C** nicht alliiert,
> helfen sie einander trotzdem gegen **A**, denn **A** ist ein
> gemeinsamer Feind. Wenn also **B** noch Fronttruppen hat, **C** aber
> nur noch Bogenschützen, dann stellen sich die Truppen von **B**
> schützend vor **C**.  
> Ausnahme: Wenn **B** und **C** verfeindet sind, weil z.B. **B** gegen
> einen zusätzlichen Alliierten **D** von **C** kämpft, dann helfen Sie
> sich nicht untereinander, auch nicht gegen **A**.

Beispiel 4:

> **A** und **B** attackieren **C**. Dann helfen sie sich gegen **C**
> (auch, wenn sie nicht alliiert sind), da sie ja einen gemeinsamen
> Feind haben.

<span id="aktiv"></span> <span id="schlacht"></span>

## Die Schlacht

Eine Schlacht dauert fünf Kampfrunden zuzüglich einer eventuellen
[Taktikerrunde](#Taktikerrunde). In jeder Kampfrunde schlagen die
Kämpfenden in einer zufälligen Reihenfolge zu.

<span id="langerKampf"></span>

Man beachte, daß an einem Kampf teilnehmende Personen (das sind
Personen, die im Kampfbericht aufgelistet werden) grundsätzlich keine
weiteren langen Befehle ausführen können. Ausnahmen sind [Kämpfe auf
See](#schiffkampf) und Kämpfe in Regionen, die zu Kampfbeginn von
mindestens einer Einheit, die dem Kämpfer [HELFE
BEWACHE](orders_list/#BEWACHE) gesetzt hat, oder aus der eigenen
Partei ist, bewacht wird. In diesem Fall sind weitere lange Befehle
möglich.

<span id="rows"></span>

### Kampfreihen

Im Kampf gibt es vier Kampfreihen, diese bestehen nur aus den Einheiten,
die auch wirklich am kampf teilnehmen ([s.o.](#seiten)). Für weitere
Informationen über die Kampfstati siehe
[`KÄMPFE`](orders_list/#KAEMPFE).

1\. Reihe: Hier stehen alle Einheiten, die `KÄMPFE` oder
`KÄMPFE AGGRESSIV` gesetzt haben.

2\. Reihe: Hier stehen alle Einheiten, die `KÄMPFE HINTEN` oder
`KÄMPFE DEFENSIV` gesetzt haben.

3\. Reihe: Hier stehen alle Einheiten, die `KÄMPFE NICHT` gesetzt haben.

4\. Reihe: Hier stehen alle Einheiten, die gerade versuchen, zu fliehen.
Also die, die `KÄMPFE FLIEHE` gesetzt haben und solche, die entsprechend
viele Trefferpunkte abbekommen haben (siehe auch [Flucht](#Flucht)).

Nur die ersten beiden Kampfreihen können am Kampf teilnehmen, also
angreifen. Nicht kampfbereite Einheiten, die direkt angegriffen werden,
müssen sich erst verteidigen, wenn die ersten beiden Reihen aufgerieben
sind. Fliehende Einheiten versuchen natürlich zu fliehen (siehe
[hier](#Flucht)).

Einheiten, die in der 2. Reihe kämpfen, können erst direkt im Nahkampf
angegriffen werden, wenn sie an die Front kommen (das kann z.B.
passieren, wenn die 1. Reihe überrannt wird, s.u.). Gegen Angriffe
gegnerischer Fernkämpfer verteidigen sie sich mit dem besten
Kampftalent.

Kampfzauber von Magier können hinter und an der Front gezaubert werden;
wenn der Magier jedoch keinen Kampfzauber gesetzt hat, wird er sich -
wie alle anderen auch - bewaffnen und kämpfen.

**<span id="ueberrennen"></span>Überrennen**  
Hat eine Partei und ihre Verbündeten mehr als dreimal so viele Personen
in der Frontreihe, wie ihre Gegner gegenüber, dann müssen alle
gegnerischen Einheiten aus der 2. Reihe aufrücken. Die 1. Reihe wurde
überrannt. Dieses Verhältnis wird vor jeder Kampfrunde überprüft.

<span id="musterung"></span><span id="INDEX-Kampf_Musterung"></span>

### Die Musterung der Einheiten

Nun bewaffnen sich die Einheiten: jede Person in einer Einheit rüstet
sich mit einer Nah- und Fernkampfwaffe und einer Rüstung, die sie
gebrauchen kann, aus. Dabei bevorzugt sie diejenigen Waffen, bei denen
sie in der Summe aus Attacke und Parade das höchste Talent hat. Magier,
die einen Kampfzauber gesetzt haben, benutzen diesen zum Angriff. Für
die Verteidigung benötigen sie aber eine Waffe (und ein passendes
Kampftalent), sonst gelten sie als
[unbewaffnet](#INDEX-Kampf_Unbewaffnete).

**Vorsicht:** ungebrauchte Waffen oder Rüstungen werden nicht
automatisch an unbewaffnete oder ungerüstete Einheiten weiter verteilt.

Während des Kampfes wird die Waffe nicht mehr gewechselt, es sei denn,
es kann eine bessere Waffe von einer Person aus der gleichen Einheit
übernommen werden, die bereits gestorben ist (die überlebenden Kämpfer
benutzen jeweils die besten verfügbaren Waffensets).

Ein Fernkämpfer, der plötzlich in der ersten Reihe angegriffen wird,
muss zu einer Nahkampfwaffe greifen (sofern er eine besitzt und das
entsprechende Talent zumindest auf Stufe 1 hat), sonst verteidigt er
sich [ohne Waffe](#INDEX-Kampf_Unbewaffnete).

Beispiel: Eine Einheit mit 20 Personen hat 15 Schwerter, 10 Schilde und
5 Kettenhemden. Dann werden 5 Personen mit Schwert, Schild und
Kettenhemd kämpfen, 5 weitere mit Schwert und Schild, 5 nur mit einem
Schwert und die letzten 5 Kämpfer bleiben unbewaffnet.

<span id="Taktikerrunde"></span>

### Die Taktikerrunde

Vor der Schlacht wird der beste Taktiker aller teilnehmenden Einheiten
bestimmt. Ein Taktiker, der in der ersten Reihe kämpft, bekommt einen
Bonus von +1 auf sein Taktik-Talent. Steht er in der 3. oder 4. Reihe,
reduziert sich sein Talent um 1. Die Seite mit den besten Takiker hat
die erste Attacke frei (die sogenannte "Taktikerrunde"): in einem
geschickten Manöver lockt er die Feinde in einen Hinterhalt und kann in
der ersten Kampfrunde überraschend zuschlagen, ohne daß der Feind in
dieser Runde auch angreifen kann. Sind zwei oder mehr Taktiker aller
Seiten gleich gut, so können beide Seiten in der Taktikerrunde
zuschlagen.

Um ein wenig "Tagesform" und Glück einfließen zu lassen, erhält jeder
Taktiker einen zufälligen Bonus, der bei 0 startet und rein theoretisch
sehr groß werden kann, wobei die Wahrscheinlichkeit dafür immer geringer
wird, je größer der Bonus ist.

<span id="Helden"></span>

### Helden

Helden sind besonders starke Kämpfer. Sie müssen zuvor mit dem Befehl
[`BEFÖRDERUNG`](orders_list/#BEFOERDERUNG) ernannt worden sein.

Helden können in jeder Kampfrunde 10 mal angreifen.

**Achtung!** Dies gilt nicht für magische Angriffe und auch nicht für
Armbrüste und Katapulte.

Für nähere Informationen siehe
[`BEFÖRDERUNG`](orders_list/#BEFOERDERUNG).

<span id="melee"></span>

### Der Kampf zwischen zwei Personen

In jeder Schlacht kämpfen die Armeen personenweise gegeneinander, egal
wie groß sie sind. Dabei wird folgendermaßen vorgegangen:

- Die Basis-Trefferchance (BT) eines Angreifers liegt grundsätzlich bei
  30%. Die Attacke des Angreifers und die Parade des Verteidigers sind
  (zunächst) so hoch, wie ihr Waffentalent.
- Boni/Mali addieren: Zur Attacke des Angreifers und zur Parade des
  Verteidigers werden eventuelle [Boni und Mali](#Boni) addiert.
- Handelt es sich bei dem Angreifer um einen Fernkämpfer, wird der so
  modifizierte Paradewert seines Gegners halbiert.
- Werte voneinander abziehen: Für jeden Punkt Differenz zwischen der
  Attacke des Angreifers und der Parade des Verteidigers wird jetzt die
  BT um 5% erhöht bzw erniedrigt. Die tatsächliche Trefferchance ergibt
  sich also aus folgender Formel:  
  (Attacke(Angreifer)-Parade(Verteidiger))\*5%+30%.
- Kritische Treffer: Schlägt der Angriff fehl, hat der Angreifer
  zusätzlich eine 10%ige Chance, seinen Angriff doch noch zu verwandeln:
  Er kann ein zweites Mal zuschlagen und zwar mit einer um 90 bis 99%
  (Zufall) erhöhten Trefferchance. Dadurch haben stark benachteiligte
  Kämpfer die Möglichkeit, zumindest einige Zufallstreffer zu landen.

Jede Person attackiert einmal pro Kampfrunde (außer Helden).

Gelingt einem Kämpfer ein Treffer, so fügt er dem Gegner Schaden zu.
Dabei verursachen verschiedene Waffen auch verschieden starken Schaden
(Schadenspunkte). Außerdem lohnt es sich, hohe Waffentalente zu haben:
hat man mehr Talentstufen als der Gegner, so erhöht sich der Schaden bei
einem Schlag um einen Punkt pro zwei Talentstufen Unterschied. Dabei
werden reine Talentwerte gerechnet, Boni durch Pferde, Burgen usw.
zählen nicht. Dies gilt für Fern- und Nahkampf gleichermaßen.

Hat eine Person mehr Schadenspunkte hinnehmen müssen, als sie
"einstecken kann" (siehe [diese Tabelle](#TPMRNR)) (dabei addieren sich
die verschiedenen Treffer im Kampf), so stirbt sie.

Trägt ein Kämpfer eine Rüstung, so kann diese einen Teil (oder gar alle)
der Schadenspunkte auffangen. Allerdings wird man durch Rüstung
unbeweglicher, und im Gegenzug erhöht sich die Chance, überhaupt
getroffen zu werden (siehe [diese Tabelle](#TabRuestungen)). Gegen
Armbrüste wirkt eine Rüstung nur zur Hälfte (abgerundet).

Außerdem gibt es noch das Talent Ausdauer, mit dem man seinen Körper
stählt und so mehr Trefferpunkte erleiden kann, ohne daran zu sterben
(siehe [diese Tabelle](#TabAusTP)).

<span id="missile"></span>

### Fernkampf

Schußwaffen und Katapulte können am besten aus der zweiten Reihe heraus
benutzt werden. Hier sind sie vor den Nahkämpfern des Gegners durch die
erste Reihe geschützt.

Die Fernkämpfer suchen sich mit 67% Wahrscheinlichkeit einen Gegner aus
der ersten Reihe und mit 33% einen Gegner aus der ersten oder zweiten
Reihe.

Armbrüste haben zudem die Eigenschaft, Rüstungen zu durchbohren: Gegen
einen Armbrust-Treffer wirkt die Rüstung nur zur Hälfte (abgerundet).

[Diese Tabelle](#TabSchuss) zeigt, wie sich die Schußwaffen
unterscheiden. Einen Bogen zu benutzen ist sehr schwer, dafür kann man
jede Kampfrunde schießen. Armbrüste sind viel einfacher zu bedienen,
aber können nur jede dritte Kampfrunde schießen. Katapulte schießen
zufällig in den ersten 5 Kampfrunden und verursachen dabei schwere
Schäden.

Gegen Fernkampfwaffen parieren angegriffene Personen nur mit ihrem
halben Talent. Einheiten in der ersten Reihe verteidigen sich mit ihrem
vollem Talentwert, wenn der Fernkämpfer auch in der ersten Reihe steht.

**Achtung!** Wenn ein Fernkämpfer in die erste Reihe gerät (z.B. weil
diese [überrannt](#ueberrennen) wurde), muss er sich mit einer
Nahkampfwaffe verteidigen. Wenn er diese nicht hat oder nicht damit
umgehen kann (also sein entsprechendes Talent kleiner als 1 ist),
verteidigt er sich [unbewaffnet](#INDEX-Kampf_Unbewaffnete)!

Katapulte benötigen Munition. Diese kann mittels
[`MACHE`](orders_list/#MACHE) `katapultmunition` durch einen
Steinbauer mit Talent 3 aus Steinen produziert werden und wiegt 10
Gewichtseinheiten. Eine Munitionseinheit entspricht dabei einer Salve.

Der unter Probe angegebene Wert ist der Malus, den der Fernkämpfer beim
Angriff hat.

<span id="TabSchuss"></span>

| Waffe            | Talent            | Probe | Nachladen |
|------------------|-------------------|:-----:|:---------:|
| Armbrust         | Armbrustschießen  |   0   |     2     |
| Katapult         | Katapultbedienung |   4   |     5     |
| Bogen/Elfenbogen | Bogenschießen     |   2   |     0     |

Schußwaffen - Proben, Zeitaufwand und Treffer

  

Dabei ist unter Nachladen angegeben, wie lange es dauert, die Waffe
wieder schußbereit zu machen. Ein Katapult kann also in jedem Kampf nur
einmal eingesetzt werden. Eine Armbrust kann demnach jede dritte Runde
schießen, Bögen sogar jede Runde.

<span id="Boni"></span>

### Boni und Mali

Verschiedene Faktoren können die Chance, jemanden zu treffen (Attacke)
oder einen Treffer abzuwehren (Parade), modifizieren. Alle Boni und Mali
wirken sich direkt auf das Talent aus und werden vor einer eventuellen
Talent-Halbierung durch Fernkämpfer angerechnet. Die Schadenspunkte, die
eine Person austeilt, werden durch die Boni und Mali nicht verändert,
hier zählen die unmodifizierten Talentwerte.

<span id="INDEX-Kampf_Unbewaffnete"></span>**Unbewaffnete**  
Als unbewaffnet gelten auch Personen, die kein passendes Waffentalent zu
ihrer Waffe haben.  
Unbewaffnete Personen kämpfen mit einem Talent von -2.  
Fernkämpfer, die in einen Nahkampf geraten und nicht auf eine
Nahkampfwaffe (und ein entsprechendes Talent) zurückgreifen können,
verteidigen sich mit einem Talent von -2. Sie können aber noch mit ihrer
Fernkampfwaffe angreifen.  
Das Talent, mit dem Orks in den unbewaffneten Kampf gehen, bestimmt sich
aus der Stufe ihres besten Nahkampftalents -3.

<span id="INDEX-Kampf_Burgenbonus"></span>**Burgenbonus**  
Personen in Burgen sind zusätzlich geschützt. Burginsassen erhalten je
nach Größe der Burg einen Bonus bei der Parade, wenn sie zur
verteidigenden Seite gehören und die Burg groß genug ist, um sie zu
beherbergen. Dabei gibt eine Befestigung +1, ein Turm +2 usw. bis zur
Zitadelle, die +5 gibt. Greifen die Burginsassen selber an, erhalten sie
den Burgenbonus zur Parade nicht mehr. Der Burgenbonus gilt auch gegen
Fernkämpfer!

<span id="INDEX-Kampf_Pferdebonus"></span><span id="Pferdebonus"></span>**Pferdebonus**  
In Ebenen, Wüsten und Hochländern können Nahkämpfer in der ersten Reihe
auf freiem Feld ein Pferd benutzen. Um ein Pferd in den Kampf zu reiten,
braucht man ein Reiten Talent von mindestens 2. Reiter bekommen einen
Bonus von +2 auf Attacke und Parade, weil sie schneller und wendiger
sind. Keinen Pferdebonus erhalten Personen, die innerhalb einer Burg
stehen, vom Burgenbonus profitieren und attackiert werden. Trolle können
Pferde nicht im Kampf nutzen!

<span id="INDEX-Kampf_Lanzenbonus"></span>**Lanzenbonus**  
Berittene Speer- und Lanzenträger erhalten einen weiteren Bonus von +1
zur Attacke.

<span id="INDEX-Kampf_Pikenbonus"></span>**Pikenbonus**  
Speer- und Hellebardenträger, die kein Pferd benutzen, erhalten gegen
berittene Truppen einen Bonus von +1 zur Parade.

Waffenmodifikatoren  
Auch Waffenmodifikatoren (siehe [hier](#TabWaffenschaeden)), gelten in
diesem Sinne als Boni und Mali.  
Eine Hellebarden-Einheit hat also (zusätzlich zu eventuellen anderen
Boni oder Mali) +2 auf ihre Parade. Wenn sie selbst nicht reitet und
gegen einen Reiter kämpft wird ihr Paradewert für diesen Moment noch
einmal um +1 erhöht.

<span id="INDEX-Kampf_Bonus-Beispiele"></span> **Beispiele:**

- Basiswert des Angreifers: BT=30%  
  Angreifer mit Talent 3, Verteidiger Talent 4 **-\>**
  Trefferchance=25%  
  Verteidiger steht in Zitadelle **-\>** Parade +5 -\>
  Trefferchance=0%  
  Der Angreifer hat also nur eine Chance von 10% (kritischer Treffer),
  überhaupt noch einen zweiten Versuch zu bekommen, und dann nochmal
  eine 90 bis 99%ige den kritischen Treffer zu landen. Insgesamt hat er
  also lediglich 9 bis 9,9% Chance, den Verteidiger zu treffen. Er ist
  ja auch (durch die Zitadelle) wirklich stark im Nachteil.
- Diesmal steht der Verteidiger nicht in der Zitadelle:  
  Basiswert des Angreifers **-\>** BT=30%  
  Angreifer mit Talent 3, Verteidiger Talent 4 **-\>**
  Trefferchance=25%  
  Angreifer mit Pferdebonus **-\>** Attacke +2 -\> Trefferchance=35%
- Ein Schwertkämpfer mit Hiebwaffen 3 gegen einen Reiter mit Reiten 1
  und Stangenwaffen 2: Er kämpft mit Attacke 3 (Talent 3) gegen Parade 2
  (Talent 2, ohne Pferdebonus - der Reiter kann nicht gut genug
  reiten).  
  **-\>** Der Angreifer hat eine Trefferchance von 35%.
- Ein Bogenschütze mit Talent 9 greift aus der 2. Reihe einen
  Lanzenreiter mit Reiten 3 und Stangenwaffen 9 an. Er attackiert mit 7
  (Malus von 2 durch den Bogen) gegen eine Parade von 5 (der Paradewert
  wird halbiert und abgerundet: Talent 9, +2 Pferdebonus -\>
  (9+2)/2=5)  
  **-\>** Der Angreifer hat eine Trefferchance von (7-5)\*5%+30%=40%
- Ein Lanzenreiter mit Reiten 3 und Stangenwaffen 9 greift einen
  Bogenschützen mit Talent 9 in der 1. Reihe an.
- - Er attackiert mit 12 (Talent 9, +2 Pferdebonus und +1 Lanzenbonus)
    gegen eine Parade von -2 (Schütze ohne Waffe für den Nahkampf).  
    **-\>** Der Angreifer hat eine Trefferchance von 100%; er wird also
    in jedem Fall treffen...
  - Er pariert mit seinem vollen Paradewert (also
    Waffentalent+Pferdebonus=11) gegen die Fernkampfwaffe, da der
    Schütze in der 1. Reihe steht, und der Schütze muss auf seinen
    Talentwert den Malus 2 (durch den Bogen) hinnehmen.  
    **-\>** Der Schütze greift also effektiv mit einer Attacke von 7
    gegen den Reiter mit einer Parade von 11 an. Er hat also eine
    Trefferchance von (7-11)\*5%+30%=10%.
- Ein Speerträger mit Stangenwaffen 3 in einer Burg greift einen Reiter
  mit Reiten 2 und Stangenwaffen 3 an.
- - Er attackiert mit 3 (Talent 3, kein Pikenbonus bei der Attacke; kein
    Burgenbonus, da er den Angriff begonnen hat) gegen 5 (Talent 3, +2
    Pferdebonus, kein Lanzenbonus bei der Parade).  
    **-\>** Der Angreifer hat eine Trefferchance von (3-5)\*5%+30%=20%.
  - Er pariert mit 4 (Talent 3, kein Burgenbonus, da er selbst
    angegriffen hat; +1 Pikenbonus) gegen 6 (+2 Pferdebonus und +1
    Lanzenbonus).  
    **-\>** Der Angegriffene hat eine Trefferchance von
    (6-4)\*5%+30%=40%.
- Ein Reiter mit Reiten 2 und Hiebwaffen 2 gegen einen Speerträger mit
  Stangenwaffen 3:
- - Er attackiert mit 4 (Talent 2, +2 Pferdebonus) gegen 4 (Talent 3 und
    +1 Pikenbonus).  
    **-\>** Der Angreifer hat eine Trefferchance von 30%.
  - Der Speerträger schlägt zurück mit 3 gegen 4 (der Pikenbonus gilt
    nur bei der Parade, nicht bei der Attacke).  
    **-\>** Der Speerträger hat eine Trefferchance von 25%.
- Ein Lanzenreiter mit Reiten 2 und Stangenwaffen 3 greift einen gleich
  guten Kollegen an. Er kämpft mit 6 (Talent 3, +2 Pferdebonus, +1
  Lanzenbonus) gegen 5 (Talent 3, +2 Pferdebonus)  
  **-\>** Der Angreifer hat eine Trefferchance von 35%.

Hieraus folgt, daß man eine Burg relativ gut halten kann, daß man aber
aus einer Burg heraus keine Angriffe starten sollte, denn damit verliert
man seinen Bonus bei der Verteidigung. Hieraus folgt auch, daß
Speerträger ein wenig wirksamer gegen berittene Truppen sind als
Schwertträger.

<span id="Flucht"></span>

### Die Flucht

Personen, die [`KÄMPFE`](orders_list/#KAEMPFE) `FLIEHE` gesetzt
haben und [`ATTACKIER`](orders_list/#ATTACKIERE)t werden, versuchen
zu fliehen. Dies tun sie vor jeder Kampfrunde, es kann also sein, daß
sie erst (weitere) Treffer hinnehmen müssen.

Personen mit `KÄMPFE` oder `KÄMPFE HINTEN`, die nur noch 20% ihrer
Trefferpunkte haben und Personen mit `KÄMPFE DEFENSIV` oder
`KÄMPFE NICHT`, die nur nur noch 90% ihrer Trefferpunkte haben,
versuchen ebenfalls zu fliehen, aber erst, wenn sie im Kampf einen
Treffer abbekommen haben. Dabei zählen auch Treffer, deren
Schadenspunkte vollständig von der Rüstung aufgehalten wurden und
fehlgeschlagene Trefferversuche. Das soll verhindern, dass Einheiten,
die schon vor dem Kampf angeschlagen waren, fliehen, obwohl sie nicht
tatsächlich in Gefahr waren.

Die Grundchance für die Flucht beträgt 25% (50% für Halblinge), dazu
kommen 10%, wenn man ein Pferd hat und je 5% pro Stufe im Talent
Tarnung; der Maximalwert ist aber 75% (bzw. 90% für Halblinge).

Fliehende Einheiten entziehen sich dem Kampf, verbleiben aber in
sicherer Entfernung zum Kampfgeschehen in der Region. Befand sich die
Einheit in einem Gebäude, verläßt sie dieses, sobald eine Person aus der
Einheit während des Kampfes geflohen ist.

Besonderheiten gelten für Einheiten mit dem Status `FLIEHE`. Diese
Einheiten können sich nach dem Kampf noch bewegen, auch wenn sie sonst
keinen langen Befehl ausführen dürften. Weiterhin können diese Einheiten
keine Regionen bewachen. Eine durchgeführte Bewachung wird automatisch
aufgelöst, wenn die Einheit den Status `FLIEHE` einnimmt.

<span id="INDEX-Kampf_Seeschlachten"></span><span id="schiffkampf"></span>

## Kampf auf und von Schiffen

Seeschlachten werden wie Schlachten zu Land ausgefochten: die Schiffe
entern sich gegenseitig und die Einheiten fallen übereinander her. Nach
der Schlacht ist es den Einheiten möglich, weitere lange Befehle
auszuführen.

Ist ein Schiff in einer Schlacht beteiligt, so bekommen sie pro
Kampfrunde 5% Schaden, wenn mindestens eine Person auf dem Schiff einen
Schaden erlitten hat. Die Taktikrunde wird nicht mitgezählt, so daß es
immer nur maximal 20% Schaden geben kann. Ist das Schiff nach der
Schlacht unterbemannt oder unbemannt, treibt es ohne Kontrolle im Ozean.

Will man mit einem Schiff Truppen in einer bewachten (siehe
[`BEWACHE`](orders_list/#BEWACHE)) Region anlanden, so müssen diese
erst das Schiff [`VERLASSEN`](orders_list/#VERLASSE) und können erst
in der folgenden Runde den Angriff starten. Dadurch hat der Gegner die
Möglichkeit, entsprechend zu reagieren.

Von Land aus kann man Schiffe an der Küste sofort angreifen. Schiffe an
der Küste können aber andere Schiffe nicht angreifen, sofern die Region
bewacht wird.

<span id="piraterie"></span>

## Piraterie

Mit Piraterie hat ein Schiffskapitän die Möglichkeit, Schiffe anderer
Parteien in Nachbarregionen aufzubringen.

Der Kapitän legt sich auf die Lauer nach Schiffen, die nach ihrer
Bewegung in einer Nachbarregion liegen. Er wird sich dann automatisch
dorthin begeben, wenn sich die Partei nach dem Befehl
[`PIRATERIE "parteinummer"`](orders_list/#PIRATERIE) in seiner
"Suchliste" befindet. Dort angekommen, kann die Mannschaft in der
kommenden Runde ganz normal agieren. Mit Hilfe von
[`FOLGE SCHIFF`](orders_list/#FOLGE) kann man seine Opfer auch
erstmal verfolgen.

Bei der ganzen Geschichte sind einige Sachen zu beachten:

- Der Mechanismus funktioniert auch, wenn das Piratenschiff an Land ist.
  Er bietet also eine effektive Möglichkeit zum Küstenschutz.
- Piratenkapitäne sind dumm wie Brot. Sie können nicht einschätzen, ob
  ein Ziel ihnen möglicherweise überlegen ist und werden fröhlich auch
  mit einem einzigen Schiff in einer feindliche Flotte von 100 Schiffen
  hineinfahren. Das Piratendasein hat eben seine Risiken.
- Stehen mehrere potentielle Ziele zur Auswahl wird der Kapitän eines
  nach dem Zufallsprinzip aussuchen.
- Hat bereits ein alliiertes Schiff (also eines, dessen Partei
  [`HELFE KÄMPFE`](orders_list/#HELFE) zur eigenen Partei gesetzt
  hat) mit Piraterie-Befehl, welches sich in derselben Region befindet,
  ein Opfer erkannt, so wird sich ein Schiff mit Piraterie-Befehl
  ebenfalls in die betreffende Region, vorausgesetzt, das vom ersten
  Schiff erkannte Opfer ist ebenfalls ein potentielles Opfer.

<span id="ende"></span><span id="INDEX-Kampf_Ende"></span>
<span id="INDEX-Kampf_Beute"></span>

## Das Ende der Schlacht

Nach der Schlacht werden die Toten gezählt, und alles brauchbare
Material von ausgelöschten Einheiten wird zusammengetragen und unter den
Überlebenden verteilt.

Einheiten, die im Kampf verletzt wurden, bleiben verletzt. Dies wird im
Report mit angezeigt.

Im Laufe der Zeit erholen sich die verletzten Einheiten wieder. Dabei
regenerieren Einheiten normalerweise 5% ihrer maximalen Trefferpunkte
pro Runde hinzu, mindestens aber je einen Punkt pro Person in der
Einheit. Untote Einheiten regenerieren nicht.

<span id="KampfTab"></span> <span id="TabWaffenschaeden"></span>

## Tabellen zum Kampf

| Waffe           |  Schaden/Fuß  | Schaden/Pferd | OB  | DB  | H/S |
|-----------------|:-------------:|:-------------:|:---:|:---:|-----|
| Katapult        | 3d10+5, 6 mal | 3d10+5, 6 mal | -4  |  0  |     |
| Armbrust        |     3d3+5     |     3d3+5     |  0  |  0  |     |
| Mallornarmbrust |     3d3+6     |     3d3+6     |  0  |  0  |     |
| Bogen           |    1d11+1     |    1d11+1     | -2  |  0  |     |
| Mallornbogen    |    1d11+2     |    1d11+2     | -2  |  0  |     |
| Elfenbogen      |     2d6+4     |     2d6+4     | -2  |  0  |     |
| Speer           |     1d10      |    1d12+2     |  0  |  0  | S   |
| Mallornspeer    |    1d10+1     |    1d12+3     |  0  |  0  | S   |
| Hellebarde      |     2d6+3     |     2d6+3     | -1  | +2  | S   |
| Lanze           |      1d5      |     2d6+5     |  0  | -2  | S   |
| Mallornlanze    |     1d5+1     |     2d6+6     |  0  | -2  | S   |
| Schwert         |     1d9+2     |     1d9+2     |  0  |  0  | H   |
| Bihänder        |     2d8+3     |     2d8+3     | -1  | -2  | H   |
| Kriegsaxt       |     2d6+4     |     2d6+4     | +1  | -2  | H   |
| Laenschwert     |    3d6+10     |    3d6+10     | +1  | +1  | H   |
| Unbewaffnete    |      1d5      |      1d6      |  0  |  0  |     |

Waffenschäden

  

> d steht für dice, Würfel. ein d5 ist also ein 5-seitiger Würfel.  
> Die Zahl vor dem d gibt an, wieviele dieser Würfel geworfen werden.  
> Und schließlich wird noch ein Festwert addiert.  
> Ein Bogen (1d11+1) erreicht also 2 bis 12 Schadenspunkte. Eine
> Hellebarde (2d6+3) 5 bis 15.  
>   
> Der Schaden zu Pferd gilt nur in Verbindung mit dem
> [Pferdebonus](#Boni).  
>   
> OB und DB sind der Offensiv- und Defensiv-Bonus; so ist eine Kriegsaxt
> eher als Angriffswaffe ausgelegt, derweil eine Hellebarde eher der
> Verteidigung dienlich ist.  
>   
> Alle Mallornwaffen erhöhen die Magieresistenz um 15%, alle Laenwaffen
> und -rüstungen um 30%.  
>   
> Bei einem Armbrusttreffer wird der Rüstungsschutz des Gegners halbiert
> und abgerundet.  
>   
> Unter H/S ist angegeben, ob die Waffe eine Hieb- oder Stangenwaffe
> ist.

<span id="TabAusTP"></span>

|               |     |      |      |      |     |       |     |      |
|---------------|:---:|:----:|:----:|:----:|:---:|:-----:|:---:|:----:|
| Talent        |  1  |  2   |  3   |  4   | ... |  10   | ... |  15  |
| Trefferpunkte | +7% | +20% | +37% | +56% | ... | +223% | ... | +410 |

Erhöhte Trefferpunkte durch Ausdauer  
Die Formel dazu ist (Talent/2)^(1,5)\*20%

  
  
<span id="TabRuestungen"></span>

| Rüstung        | Panzerung | +Trefferchance/Nahkampf |
|----------------|:---------:|:-----------------------:|
| Plattenpanzer  |     5     |         \* 30%          |
| Kettenhemd     |     3     |         \* 15%          |
| Schild         |     1     |         \* -15%         |
| Laenschild     |     2     |         \* -25%         |
| Laenkettenhemd |     6     |           \-            |

Rüstungen

  

Es kann jeweils nur eine Rüstung benutzt werden, mehrere Rüstungen
schützen nicht mehrfach.

Schilde können, obwohl sie als Rüstung zählen, zusammen mit einer
Rüstung benutzt werden und wirken dann additiv zur Rüstung, aber auch
nur jeweils ein Schild pro Person.  
  
Ein Plattenpanzer fängt also von jedem Treffer 5 Punkte ab, erhöht die
Chance, selber getroffen zu werden, aber um 30%; ein Schild fängt einen
Trefferpunkt ab und erniedrigt die Chance, getroffen zu werden, um
15%.  
Diese Werte werden **nicht** einfach zur Trefferchance des Gegners
addiert! Sondern die Trefferchance wird um diesen Anteil ihrerselbst
erhöht (siehe Beispiele unten).

Natürliche Rüstungen einzelner Rassen wirken halbkumulativ, d.h. die
Hälfte des natürlichen Rüstungswertes (abgerundet) wird aufgeschlagen.
Damit kann eine Rasse mit natürlicher Rüstung von 2 einen maximalen
Rüstungswert von 9 (Laenausrüstung) bzw. 7 (konventionelle Ausrüstung)
erreichen.

> Ein Kämpfer schlägt auf einen Ungerüsteten und hat dabei eine Chance
> von 60%, ihn zu treffen. Trägt dieser Verteidiger jedoch ein
> Kettenhemd, erhöht sich diese Chance auf 60%+(60%\*15%)=69%. Trägt er
> stattdessen ein Schild, vermindert sie sich auf 60%-(60%\*15%)=51%.
> Hat er ein Laenschild, sinkt sie auf 45%.  
> Rüstungen und Schilde zusammen multiplizieren sich. Trägt er ein
> Kettenhemd und benutzt einen Schild, so ist die Chance am Ende
> 60%+(60%\*15%)=69%(Kettenhemd) 69%-(69%\*15%)=58,65%.(Kettenhemd und
> Schild).  
> Das Endergebnis wird immer zu ungunsten des Verteidigers gerundet,
> sprich der Verteidigungswert abgerundet.

<span id="TPMRNR"></span>

| Rasse        | Trefferpunkte | Magieres. | nat. Rüstung |
|--------------|:-------------:|:---------:|:------------:|
| Menschen     |      20       |     0     |      0       |
| Meermenschen |      20       |     0     |      0       |
| Zwerge       |      24       |     5     |      0       |
| Orks         |      24       |    -5     |      0       |
| Elfen        |      18       |    10     |      0       |
| Halblinge    |      18       |     5     |      0       |
| Goblins      |      16       |    -5     |      0       |
| Trolle       |      30       |    10     |      1       |
| Dämonen      |      50       |    15     |      2       |
| Insekten     |      24       |     5     |      2       |
| Katzen       |      20       |     0     |      0       |

Trefferpunkte, Magieresistenz und natürliche Rüstung

  
Die Magieresistenz gibt an, wieviel Prozent von einem magischen Schaden
abgezogen werden  
  
Die natürliche Rüstung reduziert den Schaden von Treffern. Sie wirkt zur
Hälfte additiv zu normaler Rüstung.

- [Waffen](battle_weapons/)
- [Trefferpunkte](battle_hitpoints/)
- [Rüstungen](battle_armors/)
