
<h1>
  Vom Kriege
</h1>
<p>
  Konflikte werden in Eressea nicht zu vermeiden sein. Es wird Streit um
  Silber, um Regionen, um Steuerrechte, um Handelsrouten und so weiter
  geben. Deswegen muß man sich immer nach Freunden und Alliierten
  umschauen, denn: "Freunde kommen und gehen, Feinde mehren sich."
</p>
<a id="INDEX-Kampf_Belagern" name="INDEX-Kampf_Belagern"></a><a
name="siege" id="siege"></a> <a name="Belagern" id="Belagern"></a> 
<h2>
  Vor der Schlacht - die Belagerung
</h2>
<p>
  Hat man genug bewaffnete Personen, kann man eine Burg belagern. Wie viele
  Personen man benötigt, hängt von der Größe der Burg ab: pro Größenpunkt
  einer Burg braucht man zwei Personen. Für eine Burg der Größe&nbsp;64
  braucht also 128&nbsp;Personen, um sie komplett zu belagern. Diese
  Personen müssen bewaffnet sein oder Katapulte haben und natürlich mit
  ihrer Waffe oder dem Katapult umgehen können.
</p>
<p>
  Um die Burg dann zu belagern, muß eine Einheit die Region mit der Burg
  erst eine Woche lang bewachen. In der nächsten Runde kann man mit der
  Belagerung beginnen. Bewachende Einheiten fremder Parteien sind also
  immer mit Vorsicht zu genießen! Wird eine Burg belagert, werden ihre
  Bewohner von der Außenwelt und allen Einnahmequellen abgeschnitten.
  Sofern die Belagerer Katapulte haben, werden sie diese automatisch
  abfeuern und so langsam aber sicher die Burg zerstören.
</p>
<p>
  Ist die Tarnung einer Einheit um mindestens 3 Punkte höher als die
  Wahrnehmung der belagernden Einheiten, kann eine Einheit die belagerte
  Burg betreten und verlassen, und somit dringend benötigtes Silber in die
  Burg schmuggeln.
</p>
<p>
  Die Belagerung kann beliebig lange aufrecht erhalten werden. Wenn
  belagerte Einheiten durch Verhandlungen die Belagerung nicht beenden
  können, bleibt ihnen nur noch ein Ausfall, also ein Angriff der
  Belagerer.
</p>
<a id="INDEX-Kampf_Attacke" name="INDEX-Kampf_Attacke"></a><a name="seiten"
id="seiten"></a> 
<h2>
  Die Seiten in einer Schlacht
</h2>
<p>
  Mit dem Befehl <a
  href="orders_list#ATTACKIERE"><tt>ATTACKIERE</tt></a> startet man
  den Angriff gegen den Gegner. Die <tt>ATTACKIERE</tt>-Befehle werden in
  einer zufälligen Reihenfolge ausgeführt. Bei einer Attacke sammeln sich
  die Einheiten aller Seiten in der Region und kämpfen als Einzelpersonen
  gegeneinander. Eine Schlacht dauert maximal sechs Runden, fünf reguläre
  Kampfrunden und eventuell noch die Runde 0 (Null), die <a
  href="#Taktikerrunde">Taktiker-Runde</a>.
</p>
<p>
  Die <i>angreifende</i> Seite besteht aus allen Einheiten, welche
  <tt>ATTACKIERE</tt>-Befehle gegen eine oder mehrere Einheiten der
  verteidigenden Partei gegeben haben.
</p>
<p>
  Die <i>verteidigende</i> Seite besteht aus den Einheiten der
  verteidigenden Partei, die angegriffen wurden, wo der Gegner also
  <tt>ATTACKIERE einheit</tt> gemacht hat, und allen Einheiten, die
  kampfbereit sind (also <tt>KÄMPFE</tt>, <tt>KÄMPFE AGGRESSIV</tt>,
  <tt>KÄMPFE HINTEN</tt> oder <tt>KÄMPFE DEFENSIV</tt> gesetzt haben).
  Außerdem helfen alle kampfbereiten Einheiten alliierter Parteien, also
  jener, die <a href="orders_list#HELFE"><tt>HELFE KÄMPFE</tt></a> für
  die angegriffene Partei gesetzt haben.
</p>
<p>
  Es gibt also unterschiedliche Gründe, warum eine Einheit am Kampf
  teilnimmt. Diese sind in der Reihenfolge ihrer Priorität:
</p>
<ol>
  <li>
    Die kampfbereite Einheit greift eine andere Einheit an. Dann nimmt sie
    in jedem Fall am Kampf teil.
  </li>
  <li>
    Die Einheit wird von einer anderen Einheit angegriffen. Dann gliedert
    sie sich entsprechend ihres Kampfstatus in die <a
    href="#rows">Kampfreihen</a> ein. (s.a. <a
    href="orders_list#KAEMPFE"><tt>KÄMPFE</tt></a>).
  </li>
  <li>
    Eine Einheit aus der eigenen Partei wird von jemandem attackiert. Dann
    nimmt die Einheit am Kampf teil, wenn sie weder <tt>KÄMPFE NICHT</tt>
    noch <tt>KÄMPFE FLIEHE</tt> gesetzt hat. In letzterem Fall kommt sie
    nicht auf die Idee, zu flüchten, da sie ja nicht selbst bedroht ist.
  </li>
  <li>
    Eine Einheit aus einer verbündeten Partei (also einer Partei, der man
    <tt>HELFE KÄMPFE</tt> gesetzt hat) wird von jemandem attackiert. Dann
    nimmt die Einheit am Kapmf teil, wenn sie nicht <tt>KÄMPFE NICHT</tt>
    oder <tt>KÄMPFE FLIEHE</tt> gesetzt hat. Wiederum wird eine Einheit mit
    <tt>KÄMPFE FLIEHE</tt> nicht flüchten, da sie keiner direkten Bedrohung
    ausgesetzt ist.
  </li>
</ol>
<p>
  Alliierte helfen also automatisch nur Verteidigern und nur dann, <i>wenn
  der Verteidiger nicht selber attackiert</i> hat. Angegriffene verteidigen
  sich mit dem Rest der Partei, wenn dieser sich nicht explizit aus dem
  Kampf heraushält. Für einen Angriff spielt der Kampfstatus primär keine
  Rolle: Außer Verteidigern werden nur solche Einheiten in den Kampf
  verwickelt, die einen <tt>ATTACKIERE</tt> Befehl gegeben haben.
  Einheiten, die jedoch <tt>KÄMPFE NICHT</tt> oder <tt>FLIEHE</tt> gesetzt
  haben, können auch nicht angreifen.
</p>
<p>
  <b>Achtung!</b> Einheiten innerhalb einer belagerten Burg können
  Einheiten außerhalb der Burg nicht zur Hilfe eilen!
</p>
<p>
  Um also einen Feind gemeinsam anzugreifen, muß jede angreifende Partei
  mindestens eine Einheit des Feindes attackieren. Um sich gemeinsam gegen
  Angreifer zu wehren, müssen sich die verteidigenden Parteien nur
  gegenseitig helfen.
</p>
<p>
  Prinzipiell gilt jeder als alliiert, dem <tt>HELFE KÄMPFE</tt> gesetzt
  wurde, und der niemanden attackiert hat, dem <tt>HELFE KÄMPFE</tt>
  gesetzt wurde.
</p>
Beispiel 1: 
<blockquote>
  <b>A</b> hilft <b>B</b> und <b>C</b>. <b>C</b> attackiert <b>B</b>,
  deshalb greift <b>A</b> in den Kampf mit ein: <b>B</b> ist alliiert.
  Partei <b>C</b> gilt nicht als alliiert, weil sie einen Alliierten
  angreift.
</blockquote>
<p>
  Wer kämpft nun gegen wen?<br />
   Ich kämpfe gegen meine Feinde. Meine Feinde sind Parteien, die mich
  angreifen, die ich angreife, oder die einen Alliierten (nach der
  Definition von eben) angreifen.
</p>
Beispiel 2: 
<blockquote>
  <b>A</b> hilft <b>B</b> und <b>C</b>. <b>B</b> und <b>C</b> attackieren
  sich gegenseitig. Dann hilft <b>A</b> weder <b>B</b> noch <b>C</b>, denn
  keiner von ihnen gilt als alliiert, und keiner ist ein Feind von
  <b>A</b>.
</blockquote>
Beispiel 3: 
<blockquote>
  <b>A</b> attackiert <b>B</b> und <b>C</b>. Sind <b>B</b> und <b>C</b>
  nicht alliiert, helfen sie einander trotzdem gegen <b>A</b>, denn
  <b>A</b> ist ein gemeinsamer Feind. Wenn also <b>B</b> noch Fronttruppen
  hat, <b>C</b> aber nur noch Bogenschützen, dann stellen sich die Truppen
  von <b>B</b> schützend vor <b>C</b>.<br />
   Ausnahme: Wenn <b>B</b> und <b>C</b> verfeindet sind, weil z.B. <b>B</b>
  gegen einen zusätzlichen Alliierten <b>D</b> von <b>C</b> kämpft, dann
  helfen Sie sich nicht untereinander, auch nicht gegen <b>A</b>.
</blockquote>
Beispiel 4: 
<blockquote>
  <b>A</b> und <b>B</b> attackieren <b>C</b>. Dann helfen sie sich gegen
  <b>C</b> (auch, wenn sie nicht alliiert sind), da sie ja einen
  gemeinsamen Feind haben.
</blockquote>
<a name="aktiv" id="aktiv"></a> <a name="schlacht" id="schlacht"></a> 
<h2>
  Die Schlacht
</h2>
<p>
  Eine Schlacht dauert fünf Kampfrunden zuzüglich einer eventuellen <a
  href="#Taktikerrunde">Taktikerrunde</a>. In jeder Kampfrunde schlagen die
  Kämpfenden in einer zufälligen Reihenfolge zu.
</p>
<a name="langerKampf" id="langerKampf"></a> 
<p>
  Man beachte, daß an einem Kampf teilnehmende Personen (das sind Personen,
  die im Kampfbericht aufgelistet werden) grundsätzlich keine weiteren
  langen Befehle ausführen können. Ausnahmen sind <a
  href="#schiffkampf">Kämpfe auf See</a> und Kämpfe in Regionen, die zu
  Kampfbeginn von mindestens einer Einheit, die dem Kämpfer <a
  href="orders_list#BEWACHE">HELFE BEWACHE</a> gesetzt hat, oder aus
  der eigenen Partei ist, bewacht wird. In diesem Fall sind weitere lange
  Befehle möglich.
</p>
<a name="rows" id="rows"></a> 
<h3>
  Kampfreihen
</h3>
<p>
  Im Kampf gibt es vier Kampfreihen, diese bestehen nur aus den Einheiten,
  die auch wirklich am kampf teilnehmen (<a href="#seiten">s.o.</a>). Für
  weitere Informationen über die Kampfstati siehe <a
  href="orders_list#KAEMPFE"><tt>KÄMPFE</tt></a>.
</p>
<p>
  1. Reihe: Hier stehen alle Einheiten, die <tt>KÄMPFE</tt> oder <tt>KÄMPFE
  AGGRESSIV</tt> gesetzt haben.
</p>
<p>
  2. Reihe: Hier stehen alle Einheiten, die <tt>KÄMPFE HINTEN</tt> oder
  <tt>KÄMPFE DEFENSIV</tt> gesetzt haben.
</p>
<p>
  3. Reihe: Hier stehen alle Einheiten, die <tt>KÄMPFE NICHT</tt> gesetzt
  haben.
</p>
<p>
  4. Reihe: Hier stehen alle Einheiten, die gerade versuchen, zu fliehen.
  Also die, die <tt>KÄMPFE FLIEHE</tt> gesetzt haben und solche, die
  entsprechend viele Trefferpunkte abbekommen haben (siehe auch <a
  href="#Flucht">Flucht</a>).
</p>
<p>
  Nur die ersten beiden Kampfreihen können am Kampf teilnehmen, also
  angreifen. Nicht kampfbereite Einheiten, die direkt angegriffen werden,
  müssen sich erst verteidigen, wenn die ersten beiden Reihen aufgerieben
  sind. Fliehende Einheiten versuchen natürlich zu fliehen (siehe <a
  href="#Flucht">hier</a>).
</p>
<p>
  Einheiten, die in der 2. Reihe kämpfen, können erst direkt im Nahkampf
  angegriffen werden, wenn sie an die Front kommen (das kann z.B.
  passieren, wenn die 1. Reihe überrannt wird, s.u.). Gegen Angriffe
  gegnerischer Fernkämpfer verteidigen sie sich mit dem besten Kampftalent.
</p>
<p>
  Kampfzauber von Magier können hinter und an der Front gezaubert werden;
  wenn der Magier jedoch keinen Kampfzauber gesetzt hat, wird er sich - wie
  alle anderen auch - bewaffnen und kämpfen.
</p>
<p>
  <b><a name="ueberrennen" id="ueberrennen"></a>Überrennen</b><br />
   Hat eine Partei und ihre Verbündeten mehr als dreimal so viele Personen
  in der Frontreihe, wie ihre Gegner gegenüber, dann müssen alle
  gegnerischen Einheiten aus der 2. Reihe aufrücken. Die 1. Reihe wurde
  überrannt. Dieses Verhältnis wird vor jeder Kampfrunde überprüft.
</p>
<a name="musterung" id="musterung"></a><a id="INDEX-Kampf_Musterung"
name="INDEX-Kampf_Musterung"></a> 
<h3>
  Die Musterung der Einheiten
</h3>
<p>
  Nun bewaffnen sich die Einheiten: jede Person in einer Einheit rüstet
  sich mit einer Nah- und Fernkampfwaffe und einer Rüstung, die sie
  gebrauchen kann, aus. Dabei bevorzugt sie diejenigen Waffen, bei denen
  sie in der Summe aus Attacke und Parade das höchste Talent hat. Magier,
  die einen Kampfzauber gesetzt haben, benutzen diesen zum Angriff. Für die
  Verteidigung benötigen sie aber eine Waffe (und ein passendes
  Kampftalent), sonst gelten sie als <a
  href="#INDEX-Kampf_Unbewaffnete">unbewaffnet</a>.
</p>
<p>
  <b>Vorsicht:</b> ungebrauchte Waffen oder Rüstungen werden nicht
  automatisch an unbewaffnete oder ungerüstete Einheiten weiter verteilt.
</p>
<p>
  Während des Kampfes wird die Waffe nicht mehr gewechselt, es sei denn, es
  kann eine bessere Waffe von einer Person aus der gleichen Einheit
  übernommen werden, die bereits gestorben ist (die überlebenden Kämpfer
  benutzen jeweils die besten verfügbaren Waffensets).
</p>
<p>
  Ein Fernkämpfer, der plötzlich in der ersten Reihe angegriffen wird, muss
  zu einer Nahkampfwaffe greifen (sofern er eine besitzt und das
  entsprechende Talent zumindest auf Stufe 1 hat), sonst verteidigt er sich
  <a href="#INDEX-Kampf_Unbewaffnete">ohne Waffe</a>.
</p>
<p>
  Beispiel: Eine Einheit mit 20 Personen hat 15 Schwerter, 10 Schilde und 5
  Kettenhemden. Dann werden 5 Personen mit Schwert, Schild und Kettenhemd
  kämpfen, 5 weitere mit Schwert und Schild, 5 nur mit einem Schwert und
  die letzten 5 Kämpfer bleiben unbewaffnet.
</p>
<a name="Taktikerrunde" id="Taktikerrunde"></a> 
<h3>
  Die Taktikerrunde
</h3>
<p>
  Vor der Schlacht wird der beste Taktiker aller teilnehmenden Einheiten
  bestimmt. Ein Taktiker, der in der ersten Reihe kämpft, bekommt einen
  Bonus von +1 auf sein Taktik-Talent. Steht er in der 3. oder 4. Reihe,
  reduziert sich sein Talent um 1. Die Seite mit den besten Takiker hat die
  erste Attacke frei (die sogenannte "Taktikerrunde"): in einem geschickten
  Manöver lockt er die Feinde in einen Hinterhalt und kann in der ersten
  Kampfrunde überraschend zuschlagen, ohne daß der Feind in dieser Runde
  auch angreifen kann. Sind zwei oder mehr Taktiker aller Seiten gleich
  gut, so können beide Seiten in der Taktikerrunde zuschlagen.
</p>
<p>
  Um ein wenig "Tagesform" und Glück einfließen zu lassen, erhält jeder
  Taktiker einen zufälligen Bonus, der bei 0 startet und rein theoretisch
  sehr groß werden kann, wobei die Wahrscheinlichkeit dafür immer geringer
  wird, je größer der Bonus ist.
</p>
<a name="Helden" id="Helden"></a> 
<h3>
  Helden
</h3>
<p>
  Helden sind besonders starke Kämpfer. Sie müssen zuvor mit dem Befehl <a
  href="orders_list#BEFOERDERUNG"><tt>BEFÖRDERUNG</tt></a> ernannt
  worden sein.
</p>
<p>
  Helden können in jeder Kampfrunde 10 mal angreifen.
</p>
<p>
  <b>Achtung!</b> Dies gilt nicht für magische Angriffe und auch nicht für
  Armbrüste und Katapulte.
</p>
<p>
  Für nähere Informationen siehe <a
  href="orders_list#BEFOERDERUNG"><tt>BEFÖRDERUNG</tt></a>.
</p>
<a name="melee" id="melee"></a> 
<h3>
  Der Kampf zwischen zwei Personen
</h3>
<p>
  In jeder Schlacht kämpfen die Armeen personenweise gegeneinander, egal
  wie groß sie sind. Dabei wird folgendermaßen vorgegangen:
</p>
<ul>
  <li>
    Die Basis-Trefferchance (BT) eines Angreifers liegt grundsätzlich bei
    30%. Die Attacke des Angreifers und die Parade des Verteidigers sind
    (zunächst) so hoch, wie ihr Waffentalent.
  </li>
  <li>
    Boni/Mali addieren: Zur Attacke des Angreifers und zur Parade des
    Verteidigers werden eventuelle <a href="#Boni">Boni und Mali</a>
    addiert.
  </li>
  <li>
    Handelt es sich bei dem Angreifer um einen Fernkämpfer, wird der so
    modifizierte Paradewert seines Gegners halbiert.
  </li>
  <li>
    Werte voneinander abziehen: Für jeden Punkt Differenz zwischen der
    Attacke des Angreifers und der Parade des Verteidigers wird jetzt die
    BT um 5% erhöht bzw erniedrigt. Die tatsächliche Trefferchance ergibt
    sich also aus folgender Formel:<br />
     (Attacke(Angreifer)-Parade(Verteidiger))*5%+30%.
  </li>
  <li>
    Kritische Treffer: Schlägt der Angriff fehl, hat der Angreifer
    zusätzlich eine 10%ige Chance, seinen Angriff doch noch zu verwandeln:
    Er kann ein zweites Mal zuschlagen und zwar mit einer um 90 bis 99%
    (Zufall) erhöhten Trefferchance. Dadurch haben stark benachteiligte
    Kämpfer die Möglichkeit, zumindest einige Zufallstreffer zu landen.
  </li>
</ul>
<p>
  Jede Person attackiert einmal pro Kampfrunde (außer Helden).
</p>
<p>
  Gelingt einem Kämpfer ein Treffer, so fügt er dem Gegner Schaden zu.
  Dabei verursachen verschiedene Waffen auch verschieden starken Schaden
  (Schadenspunkte). Außerdem lohnt es sich, hohe Waffentalente zu haben:
  hat man mehr Talentstufen als der Gegner, so erhöht sich der Schaden bei
  einem Schlag um einen Punkt pro zwei Talentstufen Unterschied. Dabei
  werden reine Talentwerte gerechnet, Boni durch Pferde, Burgen usw. zählen
  nicht. Dies gilt für Fern- und Nahkampf gleichermaßen.
</p>
<p>
  Hat eine Person mehr Schadenspunkte hinnehmen müssen, als sie "einstecken
  kann" (siehe <a href="#TPMRNR">diese Tabelle</a>) (dabei addieren sich
  die verschiedenen Treffer im Kampf), so stirbt sie.
</p>
<p>
  Trägt ein Kämpfer eine Rüstung, so kann diese einen Teil (oder gar alle)
  der Schadenspunkte auffangen. Allerdings wird man durch Rüstung
  unbeweglicher, und im Gegenzug erhöht sich die Chance, überhaupt
  getroffen zu werden (siehe <a href="#TabRuestungen">diese Tabelle</a>).
  Gegen Armbrüste wirkt eine Rüstung nur zur Hälfte (abgerundet).
</p>
<p>
  Außerdem gibt es noch das Talent Ausdauer, mit dem man seinen Körper
  stählt und so mehr Trefferpunkte erleiden kann, ohne daran zu sterben
  (siehe <a href="#TabAusTP">diese Tabelle</a>).
</p>
<a name="missile" id="missile"></a> 
<h3>
  Fernkampf
</h3>
<p>
  Schußwaffen und Katapulte können am besten aus der zweiten Reihe heraus
  benutzt werden. Hier sind sie vor den Nahkämpfern des Gegners durch die
  erste Reihe geschützt.
</p>
<p>
  Die Fernkämpfer suchen sich mit 67% Wahrscheinlichkeit einen Gegner aus
  der ersten Reihe und mit 33% einen Gegner aus der ersten oder zweiten
  Reihe.
</p>
<p>
  Armbrüste haben zudem die Eigenschaft, Rüstungen zu durchbohren: Gegen
  einen Armbrust-Treffer wirkt die Rüstung nur zur Hälfte (abgerundet).
</p>
<p>
  <a href="#TabSchuss">Diese Tabelle</a> zeigt, wie sich die Schußwaffen
  unterscheiden. Einen Bogen zu benutzen ist sehr schwer, dafür kann man
  jede Kampfrunde schießen. Armbrüste sind viel einfacher zu bedienen, aber
  können nur jede dritte Kampfrunde schießen. Katapulte schießen zufällig
  in den ersten 5 Kampfrunden und verursachen dabei schwere Schäden.
</p>
<p>
  Gegen Fernkampfwaffen parieren angegriffene Personen nur mit ihrem halben
  Talent. Einheiten in der ersten Reihe verteidigen sich mit ihrem vollem
  Talentwert, wenn der Fernkämpfer auch in der ersten Reihe steht.
</p>
<p>
  <b>Achtung!</b> Wenn ein Fernkämpfer in die erste Reihe gerät (z.B. weil
  diese <a href="#ueberrennen">überrannt</a> wurde), muss er sich mit einer
  Nahkampfwaffe verteidigen. Wenn er diese nicht hat oder nicht damit
  umgehen kann (also sein entsprechendes Talent kleiner als 1 ist),
  verteidigt er sich <a href="#INDEX-Kampf_Unbewaffnete">unbewaffnet</a>!
</p>
<p>
  Katapulte benötigen Munition. Diese kann mittels <a
  href="orders_list#MACHE"><tt>MACHE</tt></a>
  <tt>katapultmunition</tt> durch einen Steinbauer mit Talent 3 aus Steinen
  produziert werden und wiegt 10 Gewichtseinheiten. Eine Munitionseinheit
  entspricht dabei einer Salve.
</p>
<p>
  Der unter Probe angegebene Wert ist der Malus, den der Fernkämpfer beim
  Angriff hat.
</p>
<a name="TabSchuss" id="TabSchuss"></a> 
<table cellpadding="3" border="0">
  <caption align="bottom">
    Schußwaffen - Proben, Zeitaufwand und Treffer
  </caption>
  <tr bgcolor="#DDDDDD">
    <th>
      Waffe
    </th>
    <th>
      Talent
    </th>
    <th>
      Probe
    </th>
    <th>
      Nachladen
    </th>
  </tr>
  <tr bgcolor="#EEEEEE">
    <td>
      Armbrust
    </td>
    <td>
      Armbrustschießen
    </td>
    <td align="center">
      0
    </td>
    <td align="center">
      2
    </td>
  </tr>
  <tr bgcolor="#DDDDDD">
    <td>
      Katapult
    </td>
    <td>
      Katapultbedienung
    </td>
    <td align="center">
      4
    </td>
    <td align="center">
      5
    </td>
  </tr>
  <tr bgcolor="#EEEEEE">
    <td>
      Bogen/Elfenbogen
    </td>
    <td>
      Bogenschießen
    </td>
    <td align="center">
      2
    </td>
    <td align="center">
      0
    </td>
  </tr>
</table>
<br />
<p>
  Dabei ist unter Nachladen angegeben, wie lange es dauert, die Waffe
  wieder schußbereit zu machen. Ein Katapult kann also in jedem Kampf nur
  einmal eingesetzt werden. Eine Armbrust kann demnach jede dritte Runde
  schießen, Bögen sogar jede Runde.
</p>
<a name="Boni" id="Boni"></a> 
<h3>
  Boni und Mali
</h3>
<p>
  Verschiedene Faktoren können die Chance, jemanden zu treffen (Attacke)
  oder einen Treffer abzuwehren (Parade), modifizieren. Alle Boni und Mali
  wirken sich direkt auf das Talent aus und werden vor einer eventuellen
  Talent-Halbierung durch Fernkämpfer angerechnet. Die Schadenspunkte, die
  eine Person austeilt, werden durch die Boni und Mali nicht verändert,
  hier zählen die unmodifizierten Talentwerte.
</p>
<dl>
  <dt>
    <a id="INDEX-Kampf_Unbewaffnete"
    name="INDEX-Kampf_Unbewaffnete"></a><b>Unbewaffnete</b>
  </dt>
  <dd>
    Als unbewaffnet gelten auch Personen, die kein passendes Waffentalent
    zu ihrer Waffe haben.<br />
     Unbewaffnete Personen kämpfen mit einem Talent von -2.<br />
     Fernkämpfer, die in einen Nahkampf geraten und nicht auf eine
    Nahkampfwaffe (und ein entsprechendes Talent) zurückgreifen können,
    verteidigen sich mit einem Talent von -2. Sie können aber noch mit
    ihrer Fernkampfwaffe angreifen.<br />
     Das Talent, mit dem Orks in den unbewaffneten Kampf gehen, bestimmt
    sich aus der Stufe ihres besten Nahkampftalents -3.
  </dd>
  <dt>
    <a id="INDEX-Kampf_Burgenbonus"
    name="INDEX-Kampf_Burgenbonus"></a><b>Burgenbonus</b>
  </dt>
  <dd>
    Personen in Burgen sind zusätzlich geschützt. Burginsassen erhalten je
    nach Größe der Burg einen Bonus bei der Parade, wenn sie zur
    verteidigenden Seite gehören und die Burg groß genug ist, um sie zu
    beherbergen. Dabei gibt eine Befestigung +1, ein Turm +2 usw. bis zur
    Zitadelle, die +5 gibt. Greifen die Burginsassen selber an, erhalten
    sie den Burgenbonus zur Parade nicht mehr. Der Burgenbonus gilt auch
    gegen Fernkämpfer!
  </dd>
  <dt>
    <a id="INDEX-Kampf_Pferdebonus" name="INDEX-Kampf_Pferdebonus"></a><a
    name="Pferdebonus" id="Pferdebonus"></a><b>Pferdebonus</b>
  </dt>
  <dd>
    In Ebenen, Wüsten und Hochländern können Nahkämpfer in der ersten Reihe
    auf freiem Feld ein Pferd benutzen. Um ein Pferd in den Kampf zu
    reiten, braucht man ein Reiten Talent von mindestens 2. Reiter bekommen
    einen Bonus von +2 auf Attacke und Parade, weil sie schneller und
    wendiger sind. Keinen Pferdebonus erhalten Personen, die innerhalb
    einer Burg stehen, vom Burgenbonus profitieren und attackiert werden.
    Trolle können Pferde nicht im Kampf nutzen!
  </dd>
  <dt>
    <a id="INDEX-Kampf_Lanzenbonus"
    name="INDEX-Kampf_Lanzenbonus"></a><b>Lanzenbonus</b>
  </dt>
  <dd>
    Berittene Speer- und Lanzenträger erhalten einen weiteren Bonus von +1
    zur Attacke.
  </dd>
  <dt>
    <a id="INDEX-Kampf_Pikenbonus"
    name="INDEX-Kampf_Pikenbonus"></a><b>Pikenbonus</b>
  </dt>
  <dd>
    Speer- und Hellebardenträger, die kein Pferd benutzen, erhalten gegen
    berittene Truppen einen Bonus von +1 zur Parade.
  </dd>
  <dt style="font-weight: bold">
    Waffenmodifikatoren
  </dt>
  <dd>
    Auch Waffenmodifikatoren (siehe <a href="#TabWaffenschaeden">hier</a>),
    gelten in diesem Sinne als Boni und Mali.<br />
     Eine Hellebarden-Einheit hat also (zusätzlich zu eventuellen anderen
    Boni oder Mali) +2 auf ihre Parade. Wenn sie selbst nicht reitet und
    gegen einen Reiter kämpft wird ihr Paradewert für diesen Moment noch
    einmal um +1 erhöht.
  </dd>
</dl>
<a id="INDEX-Kampf_Bonus-Beispiele" name="INDEX-Kampf_Bonus-Beispiele"></a>
<b>Beispiele:</b> 
<ul>
  <li>
    Basiswert des Angreifers: BT=30%<br />
     Angreifer mit Talent 3, Verteidiger Talent 4 <b>-&gt;</b>
    Trefferchance=25%<br />
     Verteidiger steht in Zitadelle <b>-&gt;</b> Parade +5 -&gt;
    Trefferchance=0%<br />
     Der Angreifer hat also nur eine Chance von 10% (kritischer Treffer),
    überhaupt noch einen zweiten Versuch zu bekommen, und dann nochmal eine
    90 bis 99%ige den kritischen Treffer zu landen. Insgesamt hat er also
    lediglich 9 bis 9,9% Chance, den Verteidiger zu treffen. Er ist ja auch
    (durch die Zitadelle) wirklich stark im Nachteil.
  </li>
  <li>
    Diesmal steht der Verteidiger nicht in der Zitadelle:<br />
     Basiswert des Angreifers <b>-&gt;</b> BT=30%<br />
     Angreifer mit Talent 3, Verteidiger Talent 4 <b>-&gt;</b>
    Trefferchance=25%<br />
     Angreifer mit Pferdebonus <b>-&gt;</b> Attacke +2 -&gt;
    Trefferchance=35%
  </li>
  <li>
    Ein Schwertkämpfer mit Hiebwaffen 3 gegen einen Reiter mit Reiten 1 und
    Stangenwaffen 2: Er kämpft mit Attacke 3 (Talent 3) gegen Parade 2
    (Talent 2, ohne Pferdebonus - der Reiter kann nicht gut genug
    reiten).<br />
     <b>-&gt;</b> Der Angreifer hat eine Trefferchance von 35%.
  </li>
  <li>
    Ein Bogenschütze mit Talent 9 greift aus der 2. Reihe einen
    Lanzenreiter mit Reiten 3 und Stangenwaffen 9 an. Er attackiert mit 7
    (Malus von 2 durch den Bogen) gegen eine Parade von 5 (der Paradewert
    wird halbiert und abgerundet: Talent 9, +2 Pferdebonus -&gt;
    (9+2)/2=5)<br />
     <b>-&gt;</b> Der Angreifer hat eine Trefferchance von (7-5)*5%+30%=40%
  </li>
  <li>
    Ein Lanzenreiter mit Reiten 3 und Stangenwaffen 9 greift einen
    Bogenschützen mit Talent 9 in der 1. Reihe an.
  </li>
  <li style="list-style: none">
    <ul>
      <li>
        Er attackiert mit 12 (Talent 9, +2 Pferdebonus und +1 Lanzenbonus)
        gegen eine Parade von -2 (Schütze ohne Waffe für den
        Nahkampf).<br />
         <b>-&gt;</b> Der Angreifer hat eine Trefferchance von 100%; er
        wird also in jedem Fall treffen...
      </li>
      <li>
        Er pariert mit seinem vollen Paradewert (also
        Waffentalent+Pferdebonus=11) gegen die Fernkampfwaffe, da der
        Schütze in der 1. Reihe steht, und der Schütze muss auf seinen
        Talentwert den Malus 2 (durch den Bogen) hinnehmen.<br />
         <b>-&gt;</b> Der Schütze greift also effektiv mit einer Attacke
        von 7 gegen den Reiter mit einer Parade von 11 an. Er hat also eine
        Trefferchance von (7-11)*5%+30%=10%.
      </li>
    </ul>
  </li>
  <li>
    Ein Speerträger mit Stangenwaffen 3 in einer Burg greift einen Reiter
    mit Reiten 2 und Stangenwaffen 3 an.
  </li>
  <li style="list-style: none">
    <ul>
      <li>
        Er attackiert mit 3 (Talent 3, kein Pikenbonus bei der Attacke;
        kein Burgenbonus, da er den Angriff begonnen hat) gegen 5 (Talent
        3, +2 Pferdebonus, kein Lanzenbonus bei der Parade).<br />
         <b>-&gt;</b> Der Angreifer hat eine Trefferchance von
        (3-5)*5%+30%=20%.
      </li>
      <li>
        Er pariert mit 4 (Talent 3, kein Burgenbonus, da er selbst
        angegriffen hat; +1 Pikenbonus) gegen 6 (+2 Pferdebonus und +1
        Lanzenbonus).<br />
         <b>-&gt;</b> Der Angegriffene hat eine Trefferchance von
        (6-4)*5%+30%=40%.
      </li>
    </ul>
  </li>
  <li>
    Ein Reiter mit Reiten 2 und Hiebwaffen 2 gegen einen Speerträger mit
    Stangenwaffen 3:
  </li>
  <li style="list-style: none">
    <ul>
      <li>
        Er attackiert mit 4 (Talent 2, +2 Pferdebonus) gegen 4 (Talent 3
        und +1 Pikenbonus).<br />
         <b>-&gt;</b> Der Angreifer hat eine Trefferchance von 30%.
      </li>
      <li>
        Der Speerträger schlägt zurück mit 3 gegen 4 (der Pikenbonus gilt
        nur bei der Parade, nicht bei der Attacke).<br />
         <b>-&gt;</b> Der Speerträger hat eine Trefferchance von 25%.
      </li>
    </ul>
  </li>
  <li>
    Ein Lanzenreiter mit Reiten 2 und Stangenwaffen 3 greift einen gleich
    guten Kollegen an. Er kämpft mit 6 (Talent 3, +2 Pferdebonus, +1
    Lanzenbonus) gegen 5 (Talent 3, +2 Pferdebonus)<br />
     <b>-&gt;</b> Der Angreifer hat eine Trefferchance von 35%.
  </li>
</ul>
<p>
  Hieraus folgt, daß man eine Burg relativ gut halten kann, daß man aber
  aus einer Burg heraus keine Angriffe starten sollte, denn damit verliert
  man seinen Bonus bei der Verteidigung. Hieraus folgt auch, daß
  Speerträger ein wenig wirksamer gegen berittene Truppen sind als
  Schwertträger.
</p>
<a name="Flucht" id="Flucht"></a> 
<h3>
  Die Flucht
</h3>
<p>
  Personen, die <a href="orders_list#KAEMPFE"><tt>KÄMPFE</tt></a>
  <tt>FLIEHE</tt> gesetzt haben und <a
  href="orders_list#ATTACKIERE"><tt>ATTACKIER</tt></a>t werden,
  versuchen zu fliehen. Dies tun sie vor jeder Kampfrunde, es kann also
  sein, daß sie erst (weitere) Treffer hinnehmen müssen.
</p>
<p>
  Personen mit <tt>KÄMPFE</tt> oder <tt>KÄMPFE HINTEN</tt>, die nur noch
  20% ihrer Trefferpunkte haben und Personen mit <tt>KÄMPFE DEFENSIV</tt>
  oder <tt>KÄMPFE NICHT</tt>, die nur nur noch 90% ihrer Trefferpunkte
  haben, versuchen ebenfalls zu fliehen, aber erst, wenn sie im Kampf einen
  Treffer abbekommen haben. Dabei zählen auch Treffer, deren Schadenspunkte
  vollständig von der Rüstung aufgehalten wurden und fehlgeschlagene
  Trefferversuche. Das soll verhindern, dass Einheiten, die schon vor dem
  Kampf angeschlagen waren, fliehen, obwohl sie nicht tatsächlich in Gefahr
  waren.
</p>
<p>
  Die Grundchance für die Flucht beträgt 25% (50% für Halblinge), dazu
  kommen 10%, wenn man ein Pferd hat und je 5% pro Stufe im Talent Tarnung;
  der Maximalwert ist aber 75% (bzw. 90% für Halblinge).
</p>
<p>
  Fliehende Einheiten entziehen sich dem Kampf, verbleiben aber in sicherer
  Entfernung zum Kampfgeschehen in der Region. Befand sich die Einheit in
  einem Gebäude, verläßt sie dieses, sobald eine Person aus der Einheit
  während des Kampfes geflohen ist.
</p>
<p>
  Besonderheiten gelten für Einheiten mit dem Status <tt>FLIEHE</tt>. Diese
  Einheiten können sich nach dem Kampf noch bewegen, auch wenn sie sonst
  keinen langen Befehl ausführen dürften. Weiterhin können diese Einheiten
  keine Regionen bewachen. Eine durchgeführte Bewachung wird automatisch
  aufgelöst, wenn die Einheit den Status <tt>FLIEHE</tt> einnimmt.
</p>
<a id="INDEX-Kampf_Seeschlachten" name="INDEX-Kampf_Seeschlachten"></a><a
name="schiffkampf" id="schiffkampf"></a> 
<h2>
  Kampf auf und von Schiffen
</h2>
<p>
  Seeschlachten werden wie Schlachten zu Land ausgefochten: die Schiffe
  entern sich gegenseitig und die Einheiten fallen übereinander her. Nach
  der Schlacht ist es den Einheiten möglich, weitere lange Befehle
  auszuführen.
</p>
<p>
  Ist ein Schiff in einer Schlacht beteiligt, so bekommen sie pro
  Kampfrunde 5% Schaden, wenn mindestens eine Person auf dem Schiff einen
  Schaden erlitten hat. Die Taktikrunde wird nicht mitgezählt, so daß es
  immer nur maximal 20% Schaden geben kann. Ist das Schiff nach der
  Schlacht unterbemannt oder unbemannt, treibt es ohne Kontrolle im Ozean.
</p>
<p>
  Will man mit einem Schiff Truppen in einer bewachten (siehe <a
  href="orders_list#BEWACHE"><tt>BEWACHE</tt></a>) Region anlanden, so
  müssen diese erst das Schiff <a
  href="orders_list#VERLASSE"><tt>VERLASSEN</tt></a> und können erst
  in der folgenden Runde den Angriff starten. Dadurch hat der Gegner die
  Möglichkeit, entsprechend zu reagieren.
</p>
<p>
  Von Land aus kann man Schiffe an der Küste sofort angreifen. Schiffe an
  der Küste können aber andere Schiffe nicht angreifen, sofern die Region
  bewacht wird.
</p>
<a name="piraterie" id="piraterie"></a> 
<h2>
  Piraterie
</h2>
<p>
  Mit Piraterie hat ein Schiffskapitän die Möglichkeit, Schiffe anderer
  Parteien in Nachbarregionen aufzubringen.
</p>
<p>
  Der Kapitän legt sich auf die Lauer nach Schiffen, die nach ihrer
  Bewegung in einer Nachbarregion liegen. Er wird sich dann automatisch
  dorthin begeben, wenn sich die Partei nach dem Befehl <a
  href="orders_list#PIRATERIE"><tt>PIRATERIE "parteinummer"</tt></a>
  in seiner "Suchliste" befindet. Dort angekommen, kann die Mannschaft in
  der kommenden Runde ganz normal agieren. Mit Hilfe von <a
  href="orders_list#FOLGE"><tt>FOLGE SCHIFF</tt></a> kann man seine
  Opfer auch erstmal verfolgen.
</p>
Bei der ganzen Geschichte sind einige Sachen zu beachten: 
<ul>
  <li>
    Der Mechanismus funktioniert auch, wenn das Piratenschiff an Land ist.
    Er bietet also eine effektive Möglichkeit zum Küstenschutz.
  </li>
  <li>
    Piratenkapitäne sind dumm wie Brot. Sie können nicht einschätzen, ob
    ein Ziel ihnen möglicherweise überlegen ist und werden fröhlich auch
    mit einem einzigen Schiff in einer feindliche Flotte von
    100&nbsp;Schiffen hineinfahren. Das Piratendasein hat eben seine
    Risiken.
  </li>
  <li>
    Stehen mehrere potentielle Ziele zur Auswahl wird der Kapitän eines
    nach dem Zufallsprinzip aussuchen.
  </li>
  <li>
    Hat bereits ein alliiertes Schiff (also eines, dessen Partei <a
    href="orders_list#HELFE"><tt>HELFE KÄMPFE</tt></a> zur eigenen
    Partei gesetzt hat) mit Piraterie-Befehl, welches sich in derselben
    Region befindet, ein Opfer erkannt, so wird sich ein Schiff mit
    Piraterie-Befehl ebenfalls in die betreffende Region, vorausgesetzt,
    das vom ersten Schiff erkannte Opfer ist ebenfalls ein potentielles
    Opfer.
  </li>
</ul>
<a name="ende" id="ende"></a><a id="INDEX-Kampf_Ende"
name="INDEX-Kampf_Ende"></a> <a id="INDEX-Kampf_Beute"
name="INDEX-Kampf_Beute"></a> 
<h2>
  Das Ende der Schlacht
</h2>
<p>
  Nach der Schlacht werden die Toten gezählt, und alles brauchbare Material
  von ausgelöschten Einheiten wird zusammengetragen und unter den
  Überlebenden verteilt.
</p>
<p>
  Einheiten, die im Kampf verletzt wurden, bleiben verletzt. Dies wird im
  Report mit angezeigt.
</p>
<p>
  Im Laufe der Zeit erholen sich die verletzten Einheiten wieder. Dabei
  regenerieren Einheiten normalerweise 5% ihrer maximalen Trefferpunkte pro
  Runde hinzu, mindestens aber je einen Punkt pro Person in der Einheit.
  Untote Einheiten regenerieren nicht.
</p>
<a name="KampfTab" id="KampfTab"></a> <a name="TabWaffenschaeden"
id="TabWaffenschaeden"></a> 
<h2>
  Tabellen zum Kampf
</h2>
<table cellpadding="3" border="0" cellspacing="1">
  <caption align="bottom">
    Waffenschäden
  </caption>
  <tr bgcolor="#DDDDDD">
    <th>
      Waffe
    </th>
    <th>
      Schaden/Fuß
    </th>
    <th>
      Schaden/Pferd
    </th>
    <th>
      OB
    </th>
    <th>
      DB
    </th>
    <th>
      H/S
    </th>
  </tr>
  <tr bgcolor="#EEEEEE">
    <td>
      Katapult
    </td>
    <td align="center">
      3d10+5, 6 mal
    </td>
    <td align="center">
      3d10+5, 6 mal
    </td>
    <td align="center">
      -4
    </td>
    <td align="center">
      0
    </td>
    <td>
      &nbsp;
    </td>
  </tr>
  <tr bgcolor="#DDDDDD">
    <td>
      Armbrust
    </td>
    <td align="center">
      3d3+5
    </td>
    <td align="center">
      3d3+5
    </td>
    <td align="center">
      0
    </td>
    <td align="center">
      0
    </td>
    <td>
      &nbsp;
    </td>
  </tr>
  <tr bgcolor="#EEEEEE">
    <td>
      Mallornarmbrust
    </td>
    <td align="center">
      3d3+6
    </td>
    <td align="center">
      3d3+6
    </td>
    <td align="center">
      0
    </td>
    <td align="center">
      0
    </td>
    <td>
      &nbsp;
    </td>
  </tr>
  <tr bgcolor="#DDDDDD">
    <td>
      Bogen
    </td>
    <td align="center">
      1d11+1
    </td>
    <td align="center">
      1d11+1
    </td>
    <td align="center">
      -2
    </td>
    <td align="center">
      0
    </td>
    <td>
      &nbsp;
    </td>
  </tr>
  <tr bgcolor="#EEEEEE">
    <td>
      Mallornbogen
    </td>
    <td align="center">
      1d11+2
    </td>
    <td align="center">
      1d11+2
    </td>
    <td align="center">
      -2
    </td>
    <td align="center">
      0
    </td>
    <td>
      &nbsp;
    </td>
  </tr>
  <tr bgcolor="#DDDDDD">
    <td>
      Elfenbogen
    </td>
    <td align="center">
      2d6+4
    </td>
    <td align="center">
      2d6+4
    </td>
    <td align="center">
      -2
    </td>
    <td align="center">
      0
    </td>
    <td>
      &nbsp;
    </td>
  </tr>
  <tr bgcolor="#EEEEEE">
    <td>
      Speer
    </td>
    <td align="center">
      1d10
    </td>
    <td align="center">
      1d12+2
    </td>
    <td align="center">
      0
    </td>
    <td align="center">
      0
    </td>
    <td align="center">
      S
    </td>
  </tr>
  <tr bgcolor="#DDDDDD">
    <td>
      Mallornspeer
    </td>
    <td align="center">
      1d10+1
    </td>
    <td align="center">
      1d12+3
    </td>
    <td align="center">
      0
    </td>
    <td align="center">
      0
    </td>
    <td align="center">
      S
    </td>
  </tr>
  <tr bgcolor="#EEEEEE">
    <td>
      Hellebarde
    </td>
    <td align="center">
      2d6+3
    </td>
    <td align="center">
      2d6+3
    </td>
    <td align="center">
      -1
    </td>
    <td>
      +2
    </td>
    <td align="center">
      S
    </td>
  </tr>
  <tr bgcolor="#DDDDDD">
    <td>
      Lanze
    </td>
    <td align="center">
      1d5
    </td>
    <td align="center">
      2d6+5
    </td>
    <td align="center">
      0
    </td>
    <td align="center">
      -2
    </td>
    <td align="center">
      S
    </td>
  </tr>
  <tr bgcolor="#EEEEEE">
    <td>
      Mallornlanze
    </td>
    <td align="center">
      1d5+1
    </td>
    <td align="center">
      2d6+6
    </td>
    <td align="center">
      0
    </td>
    <td align="center">
      -2
    </td>
    <td align="center">
      S
    </td>
  </tr>
  <tr bgcolor="#DDDDDD">
    <td>
      Schwert
    </td>
    <td align="center">
      1d9+2
    </td>
    <td align="center">
      1d9+2
    </td>
    <td align="center">
      0
    </td>
    <td align="center">
      0
    </td>
    <td align="center">
      H
    </td>
  </tr>
  <tr bgcolor="#EEEEEE">
    <td>
      Bihänder
    </td>
    <td align="center">
      2d8+3
    </td>
    <td align="center">
      2d8+3
    </td>
    <td align="center">
      -1
    </td>
    <td align="center">
      -2
    </td>
    <td align="center">
      H
    </td>
  </tr>
  <tr bgcolor="#DDDDDD">
    <td>
      Kriegsaxt
    </td>
    <td align="center">
      2d6+4
    </td>
    <td align="center">
      2d6+4
    </td>
    <td>
      +1
    </td>
    <td align="center">
      -2
    </td>
    <td align="center">
      H
    </td>
  </tr>
  <tr bgcolor="#EEEEEE">
    <td>
      Laenschwert
    </td>
    <td align="center">
      3d6+10
    </td>
    <td align="center">
      3d6+10
    </td>
    <td>
      +1
    </td>
    <td>
      +1
    </td>
    <td align="center">
      H
    </td>
  </tr>
  <tr bgcolor="#DDDDDD">
    <td>
      Unbewaffnete
    </td>
    <td align="center">
      1d5
    </td>
    <td align="center">
      1d6
    </td>
    <td align="center">
      0
    </td>
    <td align="center">
      0
    </td>
    <td>
      &nbsp;
    </td>
  </tr>
</table>
<br />
<blockquote>
  d steht für dice, Würfel. ein d5 ist also ein 5-seitiger Würfel.<br />
   Die Zahl vor dem d gibt an, wieviele dieser Würfel geworfen
  werden.<br />
   Und schließlich wird noch ein Festwert addiert.<br />
   Ein Bogen (1d11+1) erreicht also 2 bis 12 Schadenspunkte. Eine
  Hellebarde (2d6+3) 5 bis 15.<br />
  <br />
   Der Schaden zu Pferd gilt nur in Verbindung mit dem <a
  href="#Boni">Pferdebonus</a>.<br />
  <br />
   OB und DB sind der Offensiv- und Defensiv-Bonus; so ist eine Kriegsaxt
  eher als Angriffswaffe ausgelegt, derweil eine Hellebarde eher der
  Verteidigung dienlich ist.<br />
  <br />
   Alle Mallornwaffen erhöhen die Magieresistenz um 15%, alle Laenwaffen
  und -rüstungen um 30%.<br />
  <br />
   Bei einem Armbrusttreffer wird der Rüstungsschutz des Gegners halbiert
  und abgerundet.<br />
  <br />
   Unter H/S ist angegeben, ob die Waffe eine Hieb- oder Stangenwaffe ist.
</blockquote>
<a name="TabAusTP" id="TabAusTP"></a> 
<table cellpadding="3" border="0" cellspacing="1">
  <caption align="bottom">
    Erhöhte Trefferpunkte durch Ausdauer<br />
     Die Formel dazu ist (Talent/2)^(1,5)*20%
  </caption>
  <tr bgcolor="#DDDDDD">
    <th>
      Talent
    </th>
    <td align="center">
      1
    </td>
    <td align="center">
      2
    </td>
    <td align="center">
      3
    </td>
    <td align="center">
      4
    </td>
    <td align="center">
      ...
    </td>
    <td align="center">
      10
    </td>
    <td align="center">
      ...
    </td>
    <td align="center">
      15
    </td>
  </tr>
  <tr bgcolor="#EEEEEE">
    <th>
      Trefferpunkte
    </th>
    <td align="center">
      +7%
    </td>
    <td align="center">
      +20%
    </td>
    <td align="center">
      +37%
    </td>
    <td align="center">
      +56%
    </td>
    <td align="center">
      ...
    </td>
    <td align="center">
      +223%
    </td>
    <td align="center">
      ...
    </td>
    <td align="center">
      +410
    </td>
  </tr>
</table>
<br />
<br />
 <a name="TabRuestungen" id="TabRuestungen"></a> 
<table cellpadding="3" border="0" cellspacing="1">
  <caption align="bottom">
    Rüstungen
  </caption>
  <tr bgcolor="#DDDDDD">
    <th>
      Rüstung
    </th>
    <th>
      Panzerung
    </th>
    <th>
      +Trefferchance/Nahkampf
    </th>
  </tr>
  <tr bgcolor="#EEEEEE">
    <td>
      Plattenpanzer
    </td>
    <td align="center">
      5
    </td>
    <td align="center">
      * 30%
    </td>
  </tr>
  <tr bgcolor="#DDDDDD">
    <td>
      Kettenhemd
    </td>
    <td align="center">
      3
    </td>
    <td align="center">
      * 15%
    </td>
  </tr>
  <tr bgcolor="#EEEEEE">
    <td>
      Schild
    </td>
    <td align="center">
      1
    </td>
    <td align="center">
      * -15%
    </td>
  </tr>
  <tr bgcolor="#DDDDDD">
    <td>
      Laenschild
    </td>
    <td align="center">
      2
    </td>
    <td align="center">
      * -25%
    </td>
  </tr>
  <tr bgcolor="#EEEEEE">
    <td>
      Laenkettenhemd
    </td>
    <td align="center">
      6
    </td>
    <td align="center">
      -
    </td>
  </tr>
</table>
<br />
<p>
  Es kann jeweils nur eine Rüstung benutzt werden, mehrere Rüstungen
  schützen nicht mehrfach.
</p>
<p>
  Schilde können, obwohl sie als Rüstung zählen, zusammen mit einer Rüstung
  benutzt werden und wirken dann additiv zur Rüstung, aber auch nur jeweils
  ein Schild pro Person.<br />
  <br />
   Ein Plattenpanzer fängt also von jedem Treffer 5 Punkte ab, erhöht die
  Chance, selber getroffen zu werden, aber um 30%; ein Schild fängt einen
  Trefferpunkt ab und erniedrigt die Chance, getroffen zu werden, um
  15%.<br />
  Diese Werte werden <b>nicht</b> einfach zur Trefferchance des Gegners
  addiert! Sondern die Trefferchance wird um diesen Anteil ihrerselbst
  erhöht (siehe Beispiele unten).
</p>
<p>
  Natürliche Rüstungen einzelner Rassen wirken halbkumulativ, d.h. die
  Hälfte des natürlichen Rüstungswertes (abgerundet) wird aufgeschlagen.
  Damit kann eine Rasse mit natürlicher Rüstung von 2 einen maximalen
  Rüstungswert von 9 (Laenausrüstung) bzw. 7 (konventionelle Ausrüstung)
  erreichen.
</p>
<blockquote>
  Ein Kämpfer schlägt auf einen Ungerüsteten und hat dabei eine Chance von
  60%, ihn zu treffen. Trägt dieser Verteidiger jedoch ein Kettenhemd,
  erhöht sich diese Chance auf 60%+(60%*15%)=69%. Trägt er stattdessen ein
  Schild, vermindert sie sich auf 60%-(60%*15%)=51%. Hat er ein Laenschild,
  sinkt sie auf 45%.<br />
   Rüstungen und Schilde zusammen multiplizieren sich. Trägt er ein
  Kettenhemd und benutzt einen Schild, so ist die Chance am Ende
  60%+(60%*15%)=69%(Kettenhemd) 69%-(69%*15%)=58,65%.(Kettenhemd und
  Schild).<br />
   Das Endergebnis wird immer zu ungunsten des Verteidigers gerundet,
  sprich der Verteidigungswert abgerundet.
</blockquote>
<a name="TPMRNR" id="TPMRNR"></a> 
<table cellpadding="3" border="0" cellspacing="1">
  <caption align="bottom">
    Trefferpunkte, Magieresistenz und natürliche Rüstung
  </caption>
  <tr bgcolor="#DDDDDD">
    <th>
      Rasse
    </th>
    <th>
      Trefferpunkte
    </th>
    <th>
      Magieres.
    </th>
    <th>
      nat. Rüstung
    </th>
  </tr>
  <tr bgcolor="#EEEEEE">
    <td>
      Menschen
    </td>
    <td align="center">
      20
    </td>
    <td align="center">
      0
    </td>
    <td align="center">
      0
    </td>
  </tr>
  <tr bgcolor="#DDDDDD">
    <td>
      Meermenschen
    </td>
    <td align="center">
      20
    </td>
    <td align="center">
      0
    </td>
    <td align="center">
      0
    </td>
  </tr>
  <tr bgcolor="#EEEEEE">
    <td>
      Zwerge
    </td>
    <td align="center">
      24
    </td>
    <td align="center">
      5
    </td>
    <td align="center">
      0
    </td>
  </tr>
  <tr bgcolor="#DDDDDD">
    <td>
      Orks
    </td>
    <td align="center">
      24
    </td>
    <td align="center">
      -5
    </td>
    <td align="center">
      0
    </td>
  </tr>
  <tr bgcolor="#EEEEEE">
    <td>
      Elfen
    </td>
    <td align="center">
      18
    </td>
    <td align="center">
      10
    </td>
    <td align="center">
      0
    </td>
  </tr>
  <tr bgcolor="#DDDDDD">
    <td>
      Halblinge
    </td>
    <td align="center">
      18
    </td>
    <td align="center">
      5
    </td>
    <td align="center">
      0
    </td>
  </tr>
  <tr bgcolor="#EEEEEE">
    <td>
      Goblins
    </td>
    <td align="center">
      16
    </td>
    <td align="center">
      -5
    </td>
    <td align="center">
      0
    </td>
  </tr>
  <tr bgcolor="#DDDDDD">
    <td>
      Trolle
    </td>
    <td align="center">
      30
    </td>
    <td align="center">
      10
    </td>
    <td align="center">
      1
    </td>
  </tr>
  <tr bgcolor="#EEEEEE">
    <td>
      Dämonen
    </td>
    <td align="center">
      50
    </td>
    <td align="center">
      15
    </td>
    <td align="center">
      2
    </td>
  </tr>
  <tr bgcolor="#DDDDDD">
    <td>
      Insekten
    </td>
    <td align="center">
      24
    </td>
    <td align="center">
      5
    </td>
    <td align="center">
      2
    </td>
  </tr>
  <tr bgcolor="#EEEEEE">
    <td>
      Katzen
    </td>
    <td align="center">
      20
    </td>
    <td align="center">
      0
    </td>
    <td align="center">
      0
    </td>
  </tr>
</table>
<br />
Die Magieresistenz gibt an, wieviel Prozent von einem magischen Schaden
abgezogen werden<br />
 <br />
 Die natürliche Rüstung reduziert den Schaden von Treffern. Sie wirkt zur
Hälfte additiv zu normaler Rüstung. 
<ul>
  <li>
    <a href="battle_weapons">Waffen</a>
  </li>
  <li>
    <a href="battle_hitpoints">Trefferpunkte</a>
  </li>
  <li>
    <a href="battle_armors">Rüstungen</a>
  </li>
</ul>

