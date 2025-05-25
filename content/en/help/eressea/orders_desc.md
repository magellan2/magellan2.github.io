<span id="top"></span>

# Die Liste der Befehle

Vorab ein paar Hinweise zur Notation:

- feste Eingaben sind `GROSS` geschrieben. Sie müssen aber im Zug nicht
  zwangsweise auch groß geschrieben werden.
- Bezeichnungen sind `klein` geschrieben. Für sie ist es sinnvoller,
  kontextbezogene Werte einzugeben.  
  Beispiel: `GIB einheit-nr anzahl SILBER` gibt einer Einheit Silber.
  `GIB bp2 2000 Silber` gibt der Einheit `bp2` 2000 Silber.  
  In den Reports wird oftmals auch die Schreibweise `<einheit-nr>`
  benutzt; die spitzen Klammern sind in diesem Fall wegzulassen.
- Dinge, die in eckigen Klammern stehen (`[NICHT]`) sind optional, das
  heißt sie können, müssen aber nicht eingegeben werden. Dabei sind die
  eckigen Klammern wegzulassen.  
  Beispiel: `MACHE [stufen] SCHIFF`: hier kann eine Stufenanzahl benutzt
  werden: `MACHE 10 SCHIFF`, oder ohne Angabe `MACHE SCHIFF`.

## Kurzbeschreibung der Befehle

Unter "K/L" ist vermerkt, ob der Befehl ein kurzer oder langer Befehl
ist, d.h., ob er sofort ausgeführt wird (und danach weitere Befehle
möglich sind) oder eine ganze Runde zur Ausführung braucht.

  

|  |  |  |
|----|----|----|
| Befehl | Beschreibung | K/L |
| [`ARBEITE`](orders_list/#ARBEITE) | verdient 10 Silber oder mehr | L |
| [`ATTACKIERE einheit-nr`](orders_list/#ATTACKIERE) | greift die Einheit an | \(L\) |
| [`BANNER "text`](orders_list/#BANNER) | Setzt Text für Adress-Liste | K |
| [`BEANSPRUCHE anzahl gegenstand`](orders_list/#BEANSPRUCHE) | holt Gegenstände aus Parteipool | K |
| [`BEFÖRDERUNG`](orders_list/#BEFOERDERUNG) | macht Einheit zu Helden | K |
| [`BEKLAUE einheit-nr`](orders_list/#BEKLAUE) | klaut 50 Silber oder mehr | L |
| [`BELAGERE burg-nr`](orders_list/#BELAGERE) | belagert die Burg | L |
| [`BENENNE EINHEIT "name"`](orders_list/#BENENNE) | benennt Objekte | K |
| [`BENENNE PARTEI "name"`](orders_list/#BENENNE) |   | K |
| [`BENENNE GEBÄUDE "name"`](orders_list/#BENENNE) |   | K |
| [`BENENNE SCHIFF "name"`](orders_list/#BENENNE) |   | K |
| [`BENENNE REGION "name"`](orders_list/#BENENNE) |   | K |
| [`BENENNE FREMDE EINHEIT einheit "name"`](orders_list/#BENENNE) | benennt *fremde und unbenannte* Objekte | K |
| [`BENENNE FREMDES SCHIFF schiff "name"`](orders_list/#BENENNE) |   | K |
| [`BENENNE FREMDES GEBÄUDE gebäude "name"`](orders_list/#BENENNE) |   | K |
| [`BENENNE FREMDE PARTEI partei "name"`](orders_list/#BENENNE) |   | K |
| [`BENUTZE [anzahl] trank`](orders_list/#BENUTZE) | benutzt alchemistischen Trank | K |
| [`BESCHREIBE EINHEIT "text"`](orders_list/#BESCHREIBE) | beschreibt Objekte | K |
| [`BESCHREIBE PRIVAT "text"`](orders_list/#BESCHREIBE) |   | K |
| [`BESCHREIBE GEBÄUDE "text"`](orders_list/#BESCHREIBE) |   | K |
| [`BESCHREIBE SCHIFF "text"`](orders_list/#BESCHREIBE) |   | K |
| [`BESCHREIBE REGION "text"`](orders_list/#BESCHREIBE) |   | K |
| [`BETRETE GEBÄUDE gebäude`](orders_list/#BETRETE) | betritt Gebäude | K |
| [`BETRETE SCHIFF schiff-nr`](orders_list/#BETRETE) | betritt Schiffe | K |
| [`BEWACHE [NICHT]`](orders_list/#BEWACHE) | bewacht die Region | K |
| [`BOTSCHAFT REGION "text"`](orders_list/#BOTSCHAFT) | versendet Botschaften | K |
| [`BOTSCHAFT SCHIFF schiff-nr "text"`](orders_list/#BOTSCHAFT) | versendet Botschaften | K |
| [`BOTSCHAFT GEBÄUDE gebäude-nr "text"`](orders_list/#BOTSCHAFT) | versendet Botschaften | K |
| [`BOTSCHAFT EINHEIT einh-nr "text"`](orders_list/#BOTSCHAFT) |   | K |
| [`BOTSCHAFT PARTEI partei-nr "text"`](orders_list/#BOTSCHAFT) |   | K |
| [`DEFAULT befehl`](orders_list/#DEFAULT) | Setzt Default-Befehl für die nächste Runde. | K |
| [`EINHEIT einheit-nr`](orders_list/#EINHEIT) | beginnt Befehle für eine Einheit | K |
| [`EMAIL email@adresse`](orders_list/#EMAIL) | setzt die eMail-Adresse | K |
| [`ENDE`](orders_list/#ENDE) | beendet `MACHE TEMP` | K |
| [`ERESSEA partei-nr "passwort"`](orders_list/#ERESSEA) | beginnt Befehle für Partei | K |
| [`FAHRE einheit-nr`](orders_list/#FAHRE) | sich transportieren lassen | L |
| [`FOLGE EINHEIT einheit-nr`](orders_list/#FOLGE) | folgt einer Einheit | \(L\) |
| [`FOLGE SCHIFF schiff-nr`](orders_list/#FOLGE) | folgt einem Schiff | L |
| [`FORSCHE KRÄUTER`](orders_list/#FORSCHE) | sucht Kräuter | L |
| [`GIB einheit-nr KRÄUTER`](orders_list/#GIB) | gibt einer Einheit alle Kräuter | K |
| [`GIB einheit-nr KOMMANDO`](orders_list/#GIB) | übergibt Kommando über Schiff/Gebäude | K |
| [`GIB einheit-nr anzahl SILBER`](orders_list/#GIB) | übergibt Silber | K |
| [`GIB einheit-nr anzahl PERSONEN`](orders_list/#GIB) | übergibt Personen | K |
| [`GIB einheit-nr EINHEIT`](orders_list/#GIB) | übergibt Einheit an fremde Partei | K |
| [`GIB einheit-nr anzahl gegenstand`](orders_list/#GIB) | übergibt Gegenstände | K |
| [`GIB 0 anzahl SILBER`](orders_list/#GIB) | wegwerfen von Gegenständen | K |
| [`GIB 0 anzahl PERSONEN`](orders_list/#GIB) |   | K |
| [`GIB 0 anzahl gegenstand`](orders_list/#GIB) |   | K |
| [`GRUPPE ["name"]`](orders_list/#GRUPPE) | Gruppieren von Einheiten | K |
| [`HELFE partei-nr ALLES [NICHT]`](orders_list/#HELFE) | setze/lösche **einseitige** Allianz | K |
| [`HELFE partei-nr GIB [NICHT]`](orders_list/#HELFE) |   | K |
| [`HELFE partei-nr KÄMPFE [NICHT]`](orders_list/#HELFE) |   | K |
| [`HELFE partei-nr BEWACHE [NICHT]`](orders_list/#HELFE) |   | K |
| [`HELFE partei-nr SILBER [NICHT]`](orders_list/#HELFE) |   | K |
| [`HELFE partei-nr PARTEITARNUNG [NICHT]`](orders_list/#HELFE) |   | K |
| [`KÄMPFE`](orders_list/#KAEMPFE) | setzt Verhalten im Kampf | K |
| [`KÄMPFE AGGRESSIV`](orders_list/#KAEMPFE) |   | K |
| [`KÄMPFE DEFENSIV`](orders_list/#KAEMPFE) |   | K |
| [`KÄMPFE FLIEHE`](orders_list/#KAEMPFE) |   | K |
| [`KÄMPFE HELFE [nicht]`](orders_list/#KAEMPFE) | der Einheit wird im Kampf \[nicht\] geholfen | K |
| [`KÄMPFE HINTEN`](orders_list/#KAEMPFE) |   | K |
| [`KÄMPFE NICHT`](orders_list/#KAEMPFE) |   | K |
| [`KAMPFZAUBER "zauberspruch"`](orders_list/#KAMPFZAUBER) | setzt Zauber für Kämpfe | K |
| [`KAUFE anzahl luxusgut`](orders_list/#KAUFE) | kaufe Luxusgüter | L |
| [`KONTAKTIERE einheit-nr`](orders_list/#KONTAKTIERE) | kontaktiere fremde Einheiten | K |
| [`LEHRE einheit-nr [einheit-nr etc.]`](orders_list/#LEHRE) | lehre Einheiten | L |
| [`LERNE talent`](orders_list/#LERNE) | Talent lernen | L |
| [`MACHE TEMP unit-alias-nr ["name"]`](orders_list/#MACHE) | erschaffe neue Einheit | K |
| [`MACHE [stufe] gebäude-typ [gebäude-nr]`](orders_list/#MACHE) | erweitere oder baue neues Gebäude | L |
| [`MACHE [stufe] SCHIFF [schiff-nr]`](orders_list/#MACHE) | baue weiter am Schiff | L |
| [`MACHE`](orders_list/#MACHE) | baue weiter an Gebäude/Schiff | L |
| [`MACHE [stufe] BOOT`](orders_list/#MACHE) | baue neue Schiffe | L |
| [`MACHE [stufe] LANGBOOT`](orders_list/#MACHE) |   | L |
| [`MACHE [stufe] DRACHENSCHIFF`](orders_list/#MACHE) |   | L |
| [`MACHE [stufe] KARAVELLE`](orders_list/#MACHE) |   | L |
| [`MACHE [stufe] TRIREME`](orders_list/#MACHE) |   | L |
| [`MACHE [stufe] STRASSE richtung`](orders_list/#MACHE) | baue Straßen | L |
| [`MACHE [anzahl] KRÄUTER`](orders_list/#MACHE) | suche Kräuter der Region | L |
| [`MACHE [anzahl] trank`](orders_list/#MACHE) | mache einen alchemistischen Trank | L |
| [`MACHE [anzahl] gegenstand`](orders_list/#MACHE) | mache einen Gegenstand | L |
| [`NACH richtung [richtung etc.]`](orders_list/#NACH) | Reisen | L |
| [`NÄCHSTER`](orders_list/#NAECHSTER) | Beendet Befehle | K |
| [`NEUSTART rasse "passwort"`](orders_list/#NEUSTART) | Läßt alte Partei mit neuer Rasse starten | K |
| [`NUMMER EINHEIT [neue_nr]`](orders_list/#NUMMER) | vergibt neue Nummer | K |
| [`NUMMER GEBÄUDE [neue_nr]`](orders_list/#NUMMER) |   | K |
| [`NUMMER PARTEI [neue_nr]`](orders_list/#NUMMER) |   | K |
| [`NUMMER SCHIFF [neue_nr]`](orders_list/#NUMMER) |   | K |
| [`OPTION AUSWERTUNG [NICHT]`](orders_list/#OPTION) | verschiedene Optionen | K |
| [`OPTION COMPUTER [NICHT]`](orders_list/#OPTION) |   | K |
| [`OPTION ZIPPED [NICHT]`](orders_list/#OPTION) |   | K |
| [`OPTION BZIP2 [NICHT]`](orders_list/#OPTION) |   | K |
| [`OPTION SILBERPOOL [NICHT]`](orders_list/#OPTION) |   | K |
| [`OPTION MATERIALPOOL [NICHT]`](orders_list/#OPTION) |   | K |
| [`OPTION ADRESSEN [NICHT]`](orders_list/#OPTION) |   | K |
| [`OPTION ZUGVORLAGE [NICHT]`](orders_list/#OPTION) |   | K |
| [`OPTION STATISTIK [NICHT]`](orders_list/#OPTION) |   | K |
| [`OPTION TALENTVERSCHIEBUNG [NICHT]`](orders_list/#OPTION) |   | K |
| [`OPTION PUNKTE [NICHT]`](orders_list/#OPTION) |   | K |
| [`PASSWORT "neues-passwort"`](orders_list/#PASSWORT) | setze neues Passwort | K |
| [`PFLANZE [anzahl] KRÄUTER`](orders_list/#PFLANZE) | pflanzt Kräuter | L |
| [`PFLANZE [anzahl] BÄUME`](orders_list/#PFLANZE) | pflanzt Samen | L |
| [`PFLANZE [anzahl] MALLORNSAMEN`](orders_list/#PFLANZE) | pflanzt Samen | L |
| [`PFLANZE [anzahl] SAMEN`](orders_list/#PFLANZE) | pflanzt Samen | L |
| [`PIRATERIE [partei_1 [partei_2 [...]]]`](orders_list/#PIRATERIE) | Piraterie setzen | L |
| [`PRÄFIX [präfix]`](orders_list/#PRAEFIX) | gibt der Rassenbezeichnung ein Präfix | K |
| [`REGION x,y`](orders_list/#REGION) | keine Funktion (nur für Tools) | K |
| [`REKRUTIERE anzahl`](orders_list/#REKRUTIERE) | rekrutiere weitere Personen | K |
| [`RESERVIERE anzahl "gegenstand"`](orders_list/#RESERVIERE) | Gegenstände reservieren | L |
| [`RESERVIERE anzahl SILBER`](orders_list/#RESERVIERE) | Silber reservieren | L |
| [`ROUTE richtung [richtung etc.]`](orders_list/#ROUTE) | Reisen | L |
| [`SABOTIERE SCHIFF`](orders_list/#SABOTIERE) | Schiff versenken | L |
| [`SPIONIERE einheit-nr`](orders_list/#SPIONIERE) | Einheit ausspionieren | L |
| [`SORTIERE VOR einheit-nr`](orders_list/#SORTIERE) | Einheit in Report sortieren | K |
| [`SORTIERE HINTER einheit-nr`](orders_list/#SORTIERE) |   | K |
| [`STIRB "passwort"`](orders_list/#STIRB) | aus dem Spiel ausscheiden | K |
| [`TARNE [stufe]`](orders_list/#TARNE) | Tarnstufe setzen | K |
| [`TARNE rasse`](orders_list/#TARNE) | Dämonen: als andere Rasse tarnen | K |
| [`TARNE PARTEI [NICHT]`](orders_list/#TARNE) | Parteizugehörigkeit verbergen | K |
| [`TARNE PARTEI NUMMER nummer`](orders_list/#TARNE) | Parteizugehörigkeit tarnen | K |
| [`TRANSPORTIERE einheit-nr`](orders_list/#TRANSPORTIERE) | andere Einheiten mitnehmen | K |
| [`TREIBE [betrag]`](orders_list/#TREIBE) | Steuern eintreiben (max. 20 S/Talentstufe) | L |
| [`UNTERHALTE [betrag]`](orders_list/#UNTERHALTE) | verdiene 20 oder mehr Silber | L |
| [`URSPRUNG [x y]`](orders_list/#URSPRUNG) | setzt den Koordinaten-Ursprung | K |
| [`VERGESSE talent`](orders_list/#VERGESSE) | vergißt das Talent | K |
| [`VERKAUFE anzahl luxusgut`](orders_list/#VERKAUFE) | verkaufe Luxusgüter | L |
| [`VERLASSE`](orders_list/#VERLASSE) | Schiff oder Gebäude verlassen | K |
| [`ZAUBERE "zauberspruch"`](orders_list/#ZAUBERE) | Zaubern | L |
| [`ZEIGE "zauberspruch"`](orders_list/#ZEIGE) | Zeige Beschreibung des Zaubers | K |
| [`ZERSTÖRE`](orders_list/#ZERSTOERE) | Gebäude, Schiff oder Straße | K |
| [`ZÜCHTE PFERDE`](orders_list/#ZUECHTE) | Pferde züchten - nur in Pferdezucht | L |
| [`ZÜCHTE KRÄUTER`](orders_list/#ZUECHTE) | Kräuter züchten | L |
| [`ZÜCHTE BÄUME`](orders_list/#ZUECHTE) | Samen pflanzen | L |

Kurzliste der Befehle
