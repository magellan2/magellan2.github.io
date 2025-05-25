<span id="top"></span>

# Gebäude

<span id="ProdGebaeude"></span>

## Gebäude

Es gibt verschiedene Gebäude in Eressea, die verschiedene Vorteile
bieten. Außer einer Burg brauchen alle Gebäude einen laufenden
Unterhalt, der zum einen ihre Funktion und zum anderen den Erhalt des
Gebäudes sicherstellt.

Diese Unterhaltskosten sind unabhängig von der Größe des Gebäudes und
müssen am Anfang der Runde bezahlt werden, zwischen dem
[`GIB`](orders_list#GIB)-Befehl und den langen Befehlen (siehe
Befehlsreihenfolge im Anhang). Eine Einheit kann also nicht Steuern
eintreiben und dann mit dem eingetriebenen Geld den Unterhalt bezahlen.
Ist zu diesem Zeitpunkt kein Geld da, funktioniert das Gebäude nicht.
Ist am Ende des Zuges genügend Geld vorhanden, bleibt das Gebäude
erhalten, sonst besteht die Chance, daß es vollständig einstürzt und
dabei Leute sterben. Das Geld wird vom Eigentümer des Gebäudes
abgezogen, also der ersten Einheit im Gebäude. Reicht am Ende der Runde
das Geld noch immer nicht, so helfen Parteien mit
[`HELFE SILBER`](orders_list#HELFE) aus.

Der Unterhalt ist fällig, sobald an dem Gebäude gebaut wird; allerdings
noch nicht in der Runde, in der es mit
[`MACHE gebäude`](orders_list#MACHE) angefangen wird. Auch im Bau
befindliche Gebäude müssen also voll unterhalten werden.

Unter einem Gebäude sind die Einheiten eingerückt, die sich in dem
betreffenden Gebäude befinden. Die erste Einheit hat das Kommando über
das Gebäude. Sie bestimmt, welche anderen Einheiten das Gebäude betreten
dürfen, und sie darf das Gebäude umbenennen und beschreiben. Der
Burgherr der größten Burg einer Region darf sogar die Region, über die
sie herrscht, umbenennen und beschreiben.

Da die Burgen viele Funktionen erfüllen, ist ihnen ein ganzes
Unterkapitel gewidmet. Die anderen Gebäude sind ab [hier](#ProdAndGeb)
eher stichwortartig aufgeführt und erklärt.

<span id="ProdBurgen"></span>

### Burgen

Burgen bieten mehrere Vorteile: als wichtigstes ist zu nennen, daß ohne
Burgen kein Handel mit Luxusgütern in der Region möglich ist. Weiterhin
erhöht eine Burg den Verdienst der Bauern, und schließlich bietet sie
ihren Insassen Schutz bei Angriffen. Burgen werden mit dem Befehl
[`MACHE BURG`](orders_list#MACHE) aus Steinen gebaut und können In
[dieser Tabelle](#TabBurg) ist aufgeführt, ab welcher Größe eine Burg in
eine neue Kategorie aufsteigt. Je größer die Burg, um so schwieriger ist
sie zu erweitern. Um an einer Burg weiterzubauen, braucht man mindestens
das angegebene Talent Burgenbau. Eine Einheit kann pro Runde
*Talentstufe x Personen / Mindesttalent* Steine verbauen; man kann also
mit einer hinreichend guten Einheit und genug Steinen problemlos in
einer Woche einen Turm bauen.

Burgen haben auch Nummern, die man für die Befehle gebraucht. Hier ein
Beispiel für eine Burg:

       Großer Tempel der goldäugigen Katze (58), Größe 58, Turm; Weiß glänzt
       der Tempel in der Sonne, eingerahmt vom zarten Grün der Bäume des Parks.
       Weithin sichtbar ist der schlanke Turm, der sich hoch über die Stadt
       erhebt. Nördlich des Tempels erstreckt sich die Stadt Xontormia entlang
       des Whyren, der in der Nähe des Hafens von einer gigantisch hohen und
       langen Brücke überspannt wird.

Einheiten in Burgen werden von dieser geschützt, und zwar wird pro
Größeneinheit der Burg eine Person geschützt. Nur die geschützten
Personen profitieren bei einem Überfall vom Bonus, den eine Burg den
Insassen verleiht (weiteres hierzu siehe Kapitel [Kampf](Kampf),
insbesodere die Liste der [Boni und Mali](Kampf#Boni)). Jeder
Größenpunkt der Burg benötigt einen Stein.

Eine größere Burg verbessert die Versorgung der Bevölkerung: Alle
Arbeiter und Bauern profitieren beim Arbeiten von einem Bonus, der davon
abhängt, wie groß die größte Burg in einer Region ist (siehe auch [diese
Tabelle](#TabBurg)), außerdem bekommt der Eigentümer der größten Burg
einen Anteil von den Erlösen der Verkäufe anderer Spieler.

> Die Einheit "Thors Baumeister", die aus 20 Leuten besteht, welche mit
> dem Burgenbautalent 1 arbeiten und 100 Steine haben, verfügt aufgrund
> ihrer Talentstufe und der Personenzahl über 20 Produktionspunkte, mit
> denen, abhängig vom nötigen Mindesttalent, unterschiedlich viele
> Steine verbaut werden können.  
> Wenn diese Einheit beginnt, eine neue Burg zu errichten, kann sie in
> der ersten Runde 10 Steine verbauen: für Grundmauern und Handelsposten
> liegt das Mindesttalent bei 1; um einen Stein zu verbauen, wird ein
> Produktionspunkt benötigt, die Einheit baut also erstmal den
> Handelsposten bis zur Größe 10 aus, womit das Gebäude zur Befestigung
> wird. Nun sind noch 10 Produktionspunkte übrig, aufgrund des nun
> nötigen Mindestbautalents von 2 für Befestigungen verfallen diese
> jedoch.  
> Hat die Einheit ein Burgenbautalent der Stufe 2, beginnt sie mit 40
> Produktionspunkten, von denen wieder 10 für den Ausbau des
> Handelspostens zur Befestigung benötigt werden. Jetzt kann sie die
> aber die verbleibenden 30 Produktionspunkte für den Ausbau der
> Befestigung noch in der gleichen Runde nutzen. Allerdings bedeutet ein
> Mindesttalent von 2 auch, dass pro Stein 2 Produktionspunkte
> aufzuwenden sind. Somit wächst die Befestigung um 15 Steine und
> insgesamt entsteht in einer Runde eine Befestigung der Größe 25.  
> Mit dem Talentwert 2 werden die Baumeister innerhalb von weiteren 2
> Runden die Befestigung bis zur Größe 50 ausbauen, wodurch ein Turm
> entsteht, den sie wegen des damit notwendigen Mindesttalentwerts von 3
> nicht erweitern können.

<span id="TabBurg"></span><span id="INDEX-Burg_Bonus"></span>
<span id="INDEX-Burg_Produktion"></span><span id="INDEX-Burg_Erlösanteil"></span>
<span id="INDEX-Produktion_Burg"></span>

| Typ           | ab Größe | Burgenbau |  Bonus   | Erlösanteil |
|---------------|:--------:|:---------:|:--------:|:-----------:|
| Grundmauern   |    1     |     1     | 0 Silber |   nichts    |
| Handelsposten |    2     |     1     | 0 Silber |     6%      |
| Befestigung   |    10    |     2     | 1 Silber |     12%     |
| Turm          |    50    |     3     | 2 Silber |     18%     |
| Burg          |   250    |     4     | 3 Silber |     24%     |
| Festung       |   1250   |     5     | 4 Silber |     30%     |
| Zitadelle     |   6250   |     6     | 5 Silber |     36%     |

Burgenbau - Baumaterial, Mindesttalent, Bonus und Erlösanteil

  

<span id="ProdAndGeb"></span><span id="INDEX-Gebäude_ProdAndGeb"></span>

### Andere Gebäude

Gebäude werden mit dem Befehl [`MACHE`](orders_list#MACHE)
`gebäudetyp` gebaut und mit `MACHE gebäudetyp gebäude-nr` wird an einem
Gebäude weitergebaut. Beispiele: `MACHE LEUCHTTURM` oder
`MACHE HAFEN 321`. Für diese Gebäude ist ein Mindesttalentwert in
Burgenbau erforderlich, der in der Tabelle angegeben ist. Außerdem
können einige Gebäude nur bis zu einer bestimmten Größe ausgebaut
werden.

Die Wirkung von Gebäuden (auch den Burgen) wird einheitenweise
angerechnet. Einheiten, die also nicht mehr in die noch freie Kapazität
reinpassen, bekommen keinen Bonus durch das Gebäude - auch dann, wenn
sie die einzige Einheit sind!

Sind mehrere Einheiten in einem Gebäude, werden diese der Reihe nach von
oben nach unten abgefragt. Die erste zu große Einheit "sperrt" das
Gebäude dann für weitere, auch dann, wenn kommende Einheiten paßten,
wenn die zu große nicht dort wäre.

Hier zunächst eine zusammenfassende Tabelle, nähere Erklärungen folgen
darunter.

<span id="INDEX-Gebäude"></span> <span id="TabGebaeude"></span>

<table data-cellpadding="3" data-border="0">
<caption>Gebäude; siehe auch <a href="Produktion#TabBurg">Tabelle
Burgenbau</a><br />
Die Kapazität bezieht sich nur auf die Personen, die von dem Gebäude
profitieren können.<br />
<sup>*</sup>) außerdem 2 Mallorn und 2 Laen pro Größenpunkt</caption>
<thead>
<tr data-bgcolor="#CCCCCC">
<th>Gebäude</th>
<th colspan="4">Baukosten</th>
<th>Talent</th>
<th colspan="2">Unterhalt</th>
<th>Max.</th>
<th>Kapazität</th>
</tr>
</thead>
<tbody>
<tr data-bgcolor="#CCCCCC">
<th></th>
<th>Stein</th>
<th>Holz</th>
<th>Eisen</th>
<th>Silber</th>
<th></th>
<th>Silber</th>
<th>Ressourcen</th>
<th></th>
<th></th>
</tr>
&#10;<tr data-bgcolor="#EEEEEE">
<td style="text-align: center;">Leuchtturm</td>
<td style="text-align: center;">2</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">100</td>
<td style="text-align: center;">3</td>
<td style="text-align: center;">100</td>
<td style="text-align: center;">-/-</td>
<td style="text-align: center;">keins</td>
<td style="text-align: center;">4 Personen</td>
</tr>
<tr data-bgcolor="#DDDDDD">
<td style="text-align: center;">Bergwerk</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">10</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">250</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">500</td>
<td style="text-align: center;">-/-</td>
<td style="text-align: center;">keins</td>
<td style="text-align: center;">Größe</td>
</tr>
<tr data-bgcolor="#EEEEEE">
<td style="text-align: center;">Steinbruch</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">250</td>
<td style="text-align: center;">2</td>
<td style="text-align: center;">250</td>
<td style="text-align: center;">-/-</td>
<td style="text-align: center;">keins</td>
<td style="text-align: center;">Größe</td>
</tr>
<tr data-bgcolor="#DDDDDD">
<td style="text-align: center;">Sägewerk</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">3</td>
<td style="text-align: center;">200</td>
<td style="text-align: center;">3</td>
<td style="text-align: center;">250</td>
<td style="text-align: center;">-/-</td>
<td style="text-align: center;">keins</td>
<td style="text-align: center;">Größe</td>
</tr>
<tr data-bgcolor="#EEEEEE">
<td style="text-align: center;">Schmiede</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">2</td>
<td style="text-align: center;">200</td>
<td style="text-align: center;">3</td>
<td style="text-align: center;">300</td>
<td style="text-align: center;">1 Holz</td>
<td style="text-align: center;">keins</td>
<td style="text-align: center;">Größe</td>
</tr>
<tr data-bgcolor="#DDDDDD">
<td style="text-align: center;">Pferdezucht</td>
<td style="text-align: center;">2</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">100</td>
<td style="text-align: center;">2</td>
<td style="text-align: center;">150</td>
<td style="text-align: center;">-/-</td>
<td style="text-align: center;">keins</td>
<td style="text-align: center;">Größe</td>
</tr>
<tr data-bgcolor="#EEEEEE">
<td style="text-align: center;">Hafen</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">-/-</td>
<td style="text-align: center;">250</td>
<td style="text-align: center;">3</td>
<td style="text-align: center;">250</td>
<td style="text-align: center;">-/-</td>
<td style="text-align: center;">25</td>
<td style="text-align: center;">Größe</td>
</tr>
<tr data-bgcolor="#DDDDDD">
<td style="text-align: center;">Karawanserei</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">500</td>
<td style="text-align: center;">2</td>
<td style="text-align: center;">3000</td>
<td style="text-align: center;">2 Pferde</td>
<td style="text-align: center;">10</td>
<td style="text-align: center;">Größe</td>
</tr>
<tr data-bgcolor="#EEEEEE">
<td style="text-align: center;">Akademie</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">500</td>
<td style="text-align: center;">3</td>
<td style="text-align: center;">1000</td>
<td style="text-align: center;">-/-</td>
<td style="text-align: center;">25</td>
<td style="text-align: center;">Größe</td>
</tr>
<tr data-bgcolor="#DDDDDD">
<td style="text-align: center;">Magierturm<sup>*</sup></td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">3</td>
<td style="text-align: center;">3</td>
<td style="text-align: center;">500</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">1000</td>
<td style="text-align: center;">-/-</td>
<td style="text-align: center;">50</td>
<td style="text-align: center;">2 Personen</td>
</tr>
<tr data-bgcolor="#EEEEEE">
<td style="text-align: center;">Damm</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">10</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">500</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">1000</td>
<td style="text-align: center;">3 Holz</td>
<td style="text-align: center;">50</td>
<td style="text-align: center;">Größe</td>
</tr>
<tr data-bgcolor="#DDDDDD">
<td style="text-align: center;">Tunnel</td>
<td style="text-align: center;">10</td>
<td style="text-align: center;">5</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">300</td>
<td style="text-align: center;">6</td>
<td style="text-align: center;">100</td>
<td style="text-align: center;">2 Stein</td>
<td style="text-align: center;">100</td>
<td style="text-align: center;">Größe</td>
</tr>
<tr data-bgcolor="#EEEEEE">
<td style="text-align: center;">Taverne</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">3</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">200</td>
<td style="text-align: center;">2</td>
<td style="text-align: center;">5*Größe</td>
<td style="text-align: center;">-/-</td>
<td style="text-align: center;">keins</td>
<td style="text-align: center;">Größe</td>
</tr>
<tr data-bgcolor="#DDDDDD">
<td style="text-align: center;">Monument</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">400</td>
<td style="text-align: center;">4</td>
<td style="text-align: center;">keins</td>
<td style="text-align: center;">-/-</td>
<td style="text-align: center;">keins</td>
<td style="text-align: center;">Größe</td>
</tr>
</tbody>
</table>

  
<span id="GebLeucht"></span><span id="INDEX-Gebäude_Leuchtturm"></span>

### Leuchtturm

|                            |                                       |
|----------------------------|---------------------------------------|
| Baukosten pro Größenpunkt: | 2 Steine, 1 Holz, 1 Eisen, 100 Silber |
| Mindestbautalent:          | 3                                     |
| Unterhalt pro Runde:       | 100 Silber                            |
| Größenbegrenzung:          | Keine                                 |
| Kapazität:                 | 4 Personen                            |

  

- Ab einer Größe von 10 verringert ein Leuchtturm im Umkreis von
  log<sub>10</sub>(Leuchtturmgröße)+1 Feldern die Wahrscheinlichkeit des
  Abtreibens von Schiffen.
- Ab einer Größe von 10 gibt ein Leuchtturm den Insassen (nur bis zu 4
  Personen!) Reports aller Ozeanfelder im Umkreis von
  log<sub>10</sub>(Leuchtturmgröße)+1 Feldern. Die Einheit muß dafür
  mindestens eine Wahrnehmung von Entfernung×3 haben. Einen Report einer
  drei Felder entfernten Ozeanregion bekommt man also nur, wenn der
  Leuchtturm mindestens Größe 100 und die Einheit mindestens Wahrnehmung
  9 hat.

<span id="GebBergwerk"></span><span id="INDEX-Gebäude_Bergwerk"></span>

### Bergwerk

|                            |                                        |
|----------------------------|----------------------------------------|
| Baukosten pro Größenpunkt: | 5 Steine, 10 Holz, 1 Eisen, 250 Silber |
| Mindestbautalent:          | 4                                      |
| Unterhalt pro Runde:       | 500 Silber                             |
| Größenbegrenzung:          | keine                                  |
| Kapazität:                 | entsprechend Größe                     |

  

- Von Einheiten innerhalb des Bergwerks abgebautes Eisen wird nur zur
  Hälfte vom Regionsvorrat abgezogen. Dieser Effekt wirkt kumulativ
  zusammen mit eventuell vorhandenen entsprechenden Rassenvorteilen.
- Einheiten innerhalb eines Bergwerks fördern Eisen mit einem
  Bergbautalentbonus von +1.
- Nur mit einem Bergwerk ist der Laen-Abbau möglich.

> 10 Zwerge bauen in einer Region 40 Eisen ab. Es werden durch den
> Zwergenbonus nur 30 Eisen vom Regionsvorrat abgezogen.  
> Befinden sich diese Zwerge auch noch in einem Bergwerk, so werden nur
> 15 Eisen abgezogen.  
> Sind nur noch 7 Eisen überhaupt in der Region vorhanden, können die
> Zwerge natürlich nur 9 bzw. 18 Eisen abbauen.

<span id="GebSteinbruch"></span><span id="INDEX-Gebäude_Steinbruch"></span>

### Steinbruch

|                            |                                      |
|----------------------------|--------------------------------------|
| Baukosten pro Größenpunkt: | 1 Stein, 5 Holz, 1 Eisen, 250 Silber |
| Mindestbautalent:          | 2                                    |
| Unterhalt pro Runde:       | 250 Silber                           |
| Größenbegrenzung:          | keine                                |
| Kapazität:                 | entsprechend Größe                   |

  

- Von Einheiten innerhalb des Steinbruchs abgebaute Steine werden nur
  zur Hälfte vom Regionslimit abgezogen. Dieser Effekt wirkt kumulativ
  zusammen mit eventuell vorhandenen entsprechenden Rassenvorteilen.
- Einheiten innerhalb eines Steinbruchs fördern mit einem
  Steinbautalentbonus von +1.

> 10 Trolle bauen in einer Region 40 Steine ab. Es werden durch den
> Trollbonus nur 30 Steine vom Regionsvorrat abgezogen.  
> Befinden sich diese Trolle auch noch in einem Steinbruch, so werden
> nur 15 Steine abgezogen.  
> Sind nur noch 7 Steine überhaupt in der Region vorhanden, können die
> Trolle natürlich nur 9 bzw. 18 Steine abbauen.

<span id="GebSaegewerk"></span>
<span id="INDEX-Gebäude_Sägewerk"></span>

### Sägewerk

|                            |                                       |
|----------------------------|---------------------------------------|
| Baukosten pro Größenpunkt: | 5 Steine, 5 Holz, 3 Eisen, 200 Silber |
| Mindestbautalent:          | 3                                     |
| Unterhalt pro Runde:       | 250 Silber                            |
| Größenbegrenzung:          | keine                                 |
| Kapazität:                 | entsprechend Größe                    |

  

- Von Einheiten innerhalb des Sägewerks abgeholzte Bäume werden nur zur
  Hälfte vom Regionsvorrat abgezogen.
- Einheiten innerhalb eines Sägewerks fällen mit einem Talentbonus von
  +1.

<span id="GebSchmiede"></span><span id="INDEX-Gebäude_Schmiede"></span>

### Schmiede

|                            |                                       |
|----------------------------|---------------------------------------|
| Baukosten pro Größenpunkt: | 5 Steine, 5 Holz, 2 Eisen, 200 Silber |
| Mindestbautalent:          | 3                                     |
| Unterhalt pro Runde:       | 300 Silber, 1 Holz                    |
| Größenbegrenzung:          | keine                                 |
| Kapazität:                 | entsprechend Größe                    |

  

- Bei Eisenwaffen und -rüstungen wird nur halb so viel Eisen benötigt.
  Laen wird in einer Schmiede nicht eingespart.
- In Schmieden produzierende Einheiten haben einen Bonus von +1 auf
  Waffenbau und Rüstungsbau.

<span id="GebPferdezucht"></span><span id="INDEX-Gebäude_Pferdezucht"></span>

### Pferdezucht

|                            |                                       |
|----------------------------|---------------------------------------|
| Baukosten pro Größenpunkt: | 2 Steine, 4 Holz, 1 Eisen, 100 Silber |
| Mindestbautalent:          | 2                                     |
| Unterhalt pro Runde:       | 150 Silber                            |
| Größenbegrenzung:          | keine                                 |
| Kapazität:                 | entsprechend Größe                    |

  

- In einer Pferdezucht können mit dem Befehl
  [`ZÜCHTE`](orders_list#ZUECHTE) Pferde gezüchtet werden. Hierzu
  braucht der Pferdezüchter das Talent Pferdezucht und mindestens zwei
  Pferde.
- Die Chance ein Pferd zu züchten entspricht dem Talent des
  Pferdezüchters. Zusätzlich hat er entsprechend seinem Talent mehrere
  Versuche. Hat ein Pferdezüchter T5, so hat er 5 Versuche zu je 5% ein
  Pferd zu züchten.
- Für jeden Zuchtversuch benötigt der Züchter ein Pferd. Sind nicht
  genug Pferde vorhanden, verfallen die Versuche.

<span id="GebHafen"></span><span id="INDEX-Gebäude_Hafen"></span>

### Hafen

|                            |                                           |
|----------------------------|-------------------------------------------|
| Baukosten pro Größenpunkt: | 5 Steine, 5 Holz, 250 Silber              |
| Baukosten gesamt:          | 125 Steine, 125 Holz, 6250 Silber         |
| Mindestbautalent:          | 3                                         |
| Unterhalt pro Runde:       | 250 Silber                                |
| Größenbegrenzung:          | 25                                        |
| Kapazität:                 | Personen entsprechend Größe, Schiffe egal |

  

- Schiffe größer als ein Boot können auch in Nichtebenen anlegen, wenn
  ein Hafen vorhanden ist.
- Der Eigentümer erhält 10% aller Handelseinnahmen, zusätzlich zu
  eventuellen Einnahmen durch Burgen.
- Der Eigentümer erhält (2×Handeln)% aller Luxusgüter, die sich auf
  einlaufenden Schiffen befinden, es sei denn, die die Gegenstände
  tragende Einheit ist besser getarnt als die Wahrnehmung des
  Hafenmeisters (Schmuggel) oder der Schiffskapitän ist mit dem
  Hafenmeister alliiert.
- In Regionen mit Hafen steigen die Preise für Luxusgüter mit einer
  Wahrscheinlichkeit von 20% (normalerweise 10%).
- Eine Region mit Hafen kann als "Kanalregion" genutzt werden, d.h. ein
  Schiff in dem Hafen kann in jede beliebige andere Richtung mit Ozean
  davonsegeln. Voraussetzung ist allerdings, daß der Hafeneigner dem
  Kapitän [`HELFE BEWACHE`](orders_list#HELFE) gesetzt hat oder der
  selben Partei angehört.
- Ein Hafen funktioniert nur, wenn er voll ausgebaut ist! Es kann nur
  einen Hafen pro Region geben. Wer zuerst fertig ist, hat gewonnen ...
  Der halbfertige Hafen kann mit dem Befehl
  [`ZERSTÖRE`](orders_list#ZERSTOERE) zerstört werden.

<span id="GebAkademie"></span><span id="INDEX-Gebäude_Akademie"></span>

### Akademie

|                            |                                              |
|----------------------------|----------------------------------------------|
| Baukosten pro Größenpunkt: | 5 Steine, 5 Holz, 1 Eisen, 500 Silber        |
| Baukosten gesamt:          | 125 Steine, 125 Holz, 25 Eisen, 12500 Silber |
| Mindestbautalent:          | 3                                            |
| Unterhalt pro Runde:       | 1000 Silber                                  |
| Größenbegrenzung:          | 25                                           |
| Kapazität:                 | entsprechend Größe                           |

  

- Einheiten, die in einer Akademie lernen, können mit einer Chance von
  1/3 in dieser Woche einmal zusätzlich lernen, wenn sie einen Lehrer
  haben sogar mit einer Chance von 2/3.
- Lehrer, die in einer Akademie lehren, bekommen ebenfalls eine Chance,
  zu lernen, die je nach Anzahl ihrer Schüler bis zu 1/3 beträgt. Sowohl
  Schüler als auch Lehrer müssen dazu in der selben Akademie sein.
- Lernen in einer Akademie kostet bei nicht kostenpflichtigen Talenten
  50 Silber pro Person, bei kostenpflichtigen Talenten das Doppelte der
  normalen Lernkosten.
- Eine Akademie funktioniert nur, wenn sie voll ausgebaut ist!

<span id="GebMagierturm"></span><span id="INDEX-Gebäude_Magierturm"></span>

### Magierturm

<table data-border="0" data-cellpadding="3">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td data-bgcolor="#DDDDDD">Baukosten pro Größenpunkt:</td>
<td data-bgcolor="#DDDDDD">5 Steine, 3 Holz, 2 Mallorn, 3 Eisen, 2 Laen,
500 Silber</td>
</tr>
<tr>
<td data-valign="top" data-bgcolor="#DDDDDD">Baukosten gesamt:</td>
<td data-bgcolor="#DDDDDD">250 Steine, 150 Holz, 100 Mallorn, 150 Eisen,
100 Laen,<br />
25000 Silber</td>
</tr>
<tr>
<td data-bgcolor="#DDDDDD">Mindestbautalent:</td>
<td data-bgcolor="#DDDDDD">5</td>
</tr>
<tr>
<td data-bgcolor="#DDDDDD">Unterhalt pro Runde:</td>
<td data-bgcolor="#DDDDDD">1000 Silber</td>
</tr>
<tr>
<td data-bgcolor="#DDDDDD">Größenbegrenzung:</td>
<td data-bgcolor="#DDDDDD">50</td>
</tr>
<tr>
<td data-bgcolor="#DDDDDD">Kapazität:</td>
<td data-bgcolor="#DDDDDD">2 Personen</td>
</tr>
</tbody>
</table>

  

- In einem Magierturm regeneriert ein Magier 50% mehr Aura.
- Die Stärke jedes Zaubers, der von einem Magierturm aus gesprochen
  wird, ist um soviel vergrößert, als wäre der Zauber mit einer Stufe
  mehr gezaubert worden. Das kann je nach Spruch ganz unterschiedliche
  Auswirkungen haben.
- Patzer passieren deutlich seltener.
- Ein Magierturm funktioniert nur, wenn er voll ausgebaut ist!

<span id="GebKarawanserei"></span>
<span id="INDEX-Gebäude_Karawanserei"></span>

### Karawanserei

|                            |                                           |
|----------------------------|-------------------------------------------|
| Baukosten pro Größenpunkt: | 1 Stein, 5 Holz, 1 Eisen, 500 Silber      |
| Baukosten gesamt:          | 10 Steine, 50 Holz, 10 Eisen, 5000 Silber |
| Mindestbautalent:          | 2                                         |
| Unterhalt pro Runde:       | 3000 Silber, 2 Pferde                     |
| Größenbegrenzung:          | 10                                        |
| Kapazität:                 | entsprechend Größe                        |

  

- Ermöglicht Straßenbau in Wüsten. Stürzt die Karawanserei ein, wird die
  Hälfte der Straße vernichtet.
- Verdoppelt in Wüsten das dort mögliche Handelsvolumen. Der Besitzer
  erhält einen Erlösanteil vom Handel entsprechend den Burgen (siehe
  [diese](#TabBurg) Tabelle).
- Die Karawanserei funktioniert nur, wenn sie voll ausgebaut ist!

<span id="GebDamm"></span><span id="INDEX-Gebäude_Damm"></span>

### Damm

|                            |                                              |
|----------------------------|----------------------------------------------|
| Baukosten pro Größenpunkt: | 5 Steine, 10 Holz, 1 Eisen, 500 Silber       |
| Baukosten gesamt:          | 250 Steine, 500 Holz, 50 Eisen, 25000 Silber |
| Mindestbautalent:          | 4                                            |
| Unterhalt pro Runde:       | 1000 Silber, 3 Holz                          |
| Größenbegrenzung:          | 50                                           |
| Kapazität:                 | entsprechend Größe                           |

  

- Ein Damm ermöglicht den Straßenbau in Sümpfen. Stürzt der Damm ein, so
  wird die Hälfte der Straße vernichtet.
- Der Damm funktioniert nur, wenn er voll ausgebaut ist!

<span id="GebTunnel"></span><span id="INDEX-Gebäude_Tunnel"></span>

### Tunnel

|                            |                                                |
|----------------------------|------------------------------------------------|
| Baukosten pro Größenpunkt: | 10 Steine, 5 Holz, 1 Eisen, 300 Silber         |
| Baukosten gesamt:          | 1000 Steine, 500 Holz, 100 Eisen, 30000 Silber |
| Mindestbautalent:          | 6                                              |
| Unterhalt pro Runde:       | 100 Silber, 2 Steine                           |
| Größenbegrenzung:          | 100                                            |
| Kapazität:                 | entsprechend Größe                             |

  

- Ein Tunnel ermöglicht den Straßenbau in Gletschern. Stürzt der Tunnel
  ein, wird die Hälfte der Straße vernichtet.
- Der Tunnel funktioniert nur, wenn er voll ausgebaut ist!

<span id="INDEX-Gebäude_Taverne"></span>

### Taverne

|                            |                                      |
|----------------------------|--------------------------------------|
| Baukosten pro Größenpunkt: | 4 Stein, 3 Holz, 1 Eisen, 200 Silber |
| Mindestbautalent:          | 2                                    |
| Unterhalt pro Runde:       | 5 Silber pro Größenpunkt             |
| Größenbegrenzung:          | keine                                |
| Kapazität:                 | entsprechend Größe                   |

  

- Einheiten in einer Taverne regenerieren 50% schneller.
- Einheiten in einer Taverne verbrauchen 14 Silber als Unterhalt!

<span id="GebMonument"></span><span id="INDEX-Gebäude_Monument"></span>

### Monument

|                            |                                      |
|----------------------------|--------------------------------------|
| Baukosten pro Größenpunkt: | 1 Stein, 1 Holz, 1 Eisen, 400 Silber |
| Mindestbautalent:          | 4                                    |
| Unterhalt pro Runde:       | Kein Unterhalt                       |
| Größenbegrenzung:          | keine                                |
| Kapazität:                 | entsprechend Größe                   |

  

- Sind Name und Beschreibung eines Monumentes gesetzt, können sie nicht
  mehr geändert werden, auch vom Eigentümer nicht.
- Das Monument hat keine Funktion.
- Ein Monument ohne Personen darin zerfällt um 10% (mindestens 1
  Größenpunkt) pro Runde.

## Straßen

Um die Reisegeschwindigkeit über Land zu erhöhen, müssen von der Start-
bis zur Zielregion inklusive Straßen existieren. Diese Straßen erlauben
ein leichtes Fortkommen, da sie bei Regen nicht versumpfen, nicht vom
Wald überwachsen werden und Flüsse und Schluchten von Brücken überspannt
werden. Um Straßen in einer Region zu bauen, braucht eine Einheit das
Talent Straßenbau und Steine (siehe [Tabelle](#TabStrasse)).

In jeder Region kann man in die sechs Himmelsrichtungen eine Straße
errichten. Damit eine Straße komplett ist, muß in der Region der
entsprechenden Richtung in der Gegenrichtung auch eine Straße sein. Baut
man z.B. in der Region bei (6,-3) eine Straße Richtung Nordosten, so muß
in der Region (6,-2) eine Straße Richtung Südwesten gebaut werden.

Um Strassen zu bauen, benötigt man ein Mindest-Bautalent von 1, pro
Talentstufe Strassenbau kann man einen Stein verbauen.

Einige Regionen sind so ungastlich, daß zuvor ein Gebäude erreichtet
werden muß: in Gletschern ein [Tunnel](#GebTunnel), in Sümpfen ein
[Damm](#GebDamm) und in Wüsten eine [Karawanserei](#GebKarawanserei).

<span id="TabStrasse"></span>

<table data-border="0" data-cellpadding="3">
<caption>Straßenbau</caption>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr data-bgcolor="#CCCCCC">
<th>Gelände</th>
<th style="text-align: center;">Steine für<br />
Straßenstück</th>
<th>Gelände</th>
<th style="text-align: center;">Steine für<br />
Straßenstück</th>
</tr>
</thead>
<tbody>
<tr data-bgcolor="#EEEEEE">
<td>Gebirge</td>
<td style="text-align: center;">250</td>
<td>Ebene</td>
<td style="text-align: center;">  50</td>
</tr>
<tr data-bgcolor="#DDDDDD">
<td>Gletscher</td>
<td style="text-align: center;">250</td>
<td>Hochland</td>
<td style="text-align: center;">100</td>
</tr>
<tr data-bgcolor="#EEEEEE">
<td>Sumpf</td>
<td style="text-align: center;">  75</td>
<td>Wüste</td>
<td style="text-align: center;">100</td>
</tr>
<tr data-bgcolor="#DDDDDD">
<td>Wald</td>
<td style="text-align: center;">  50</td>
<td>Vulkan</td>
<td style="text-align: center;">250</td>
</tr>
</tbody>
</table>

  
