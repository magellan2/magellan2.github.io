<span id="top"></span>

## Reihenfolge bei der Ausführung

Die Befehle von Eressea werden in einer festen Reihenfolge ausgewertet.
Befehle, die unter der selben Nummer stehen, werden zur gleichen Zeit
ausgeführt.

Einige Befehle werden zuerst in einer Liste gemerkt, bis alle Einheiten
der Region den Befehl gegeben haben. Erst dann werden sie gesammelt
ausgeführt. Dies berifft `ARBEITE`, `UNTERHALTE`, `TREIBE`,
`REKRUTIERE`, `KAUFE`, `VERKAUFE` und `MACHE` von *Rohstoffen*.
Rohstoffe sind Steine, Eisen, Laen, Holz, Mallorn, Kräuter und Pferde.
`MACHE BURG` oder `MACHE SCHIFF` wird also sofort ausgeführt.

Der Sinn davon ist, daß alle Parteien gleichmäßig "bedient" werden und
nicht die Einheit, die als erstes drankommt, alle Rohstoffe bekommt.

1.  neue Default-Befehle werden gesetzt
2.  `GRUPPE`, `MACHE TEMP`
3.  `BENENNE`, `BESCHREIBE`, `BEWACHE NICHT`, `HELFE`, `KÄMPFE`,
    `KAMPFZAUBER`, `TARNE`, `URSPRUNG`, `ZEIGE`
4.  `BANNER`, `EMAIL`, `OPTION`, `PASSWORT`, `REPORT`
5.  `BOTSCHAFT`
6.  `BEANSPRUCHE`
7.  `BENUTZE`
8.  `BETRETE`, `KONTAKTIERE`; 1. Versuch
9.  `VERLASSE`
10. Kontakte werden gelöscht, dann `ATTACKIERE`
11. `RESERVIERE`
12. `BELAGER`E
13. `BETRETE`, `KONTAKTIERE`; 2. Versuch
14. `FOLGE` wird gesetzt
15. `GIB`, `VERGESSE`, `ZERSTÖRE`
16. `REKRUTIERE` wird erst gemerkt, dann personenweise ausgeführt
17. Unterhaltskosten für unterhaltspflichtige Gebäude fallen an; sonst
    haben sie keine Funktion!
18. `NEUSTART`, `STIRB`, `ZAUBERE`
19. `LEHRE`
20. `LERNE`
21. `ARBEITE`, `BEKLAUE`, `KAUFE`, `VERKAUFE`, `MACHE`, `PFLANZE`,
    `SABOTIERE`, `SPIONIERE`, `TREIBE`, `UNTERHALTE`, `ZÜCHTE`
22. jetzt erst werden einige Befehle ausgeführt, und zwar
    "schrittweise", d.h. Rohstoffe werden einzeln gefördert usw.
    1.  Produktion von Rohstoffen (einzeln)
    2.  Unterhaltung (Silberstückweise)
    3.  Arbeiten (Silberstückweise)
    4.  Steuern eintreiben (in Teilen von je 10 Silber)
    5.  Kaufen (einzeln)
    6.  Verkaufen (einzeln)
    7.  Beklauen (Silberstückweise)
23. Schiffe mit mangelnder Besatzung nehmen Schäden
24. `BETRETE`, `KONTAKTIERE`; 3. Versuch
25. `NACH` und `ROUTE`, dabei wird auch `FAHRE` und `TRANSPORTIERE`
    ausgeführt und Verfolger folgen
26. `BEWACHE` an; das geht nur, wenn die Einheit sich nicht bewegt hat
27. Schiffe treiben auf hoher See
28. `DEFAULT`
29. leere Einheiten werden beseitigt
30. die Bauern, Pferde und Wälder vermehren sich, falls möglich; die
    übriggebliebenen Bauern wandern umher
31. Silber für die Versorgung der Einheiten wird abgezogen
32. bislang unbezahlte Unterhaltskosten für unterhaltspflichtige Gebäude
    fallen an; sonst verfällt evtl. das Gebäude
33. `SORTIERE`
34. `BEFÖRDERUNG`
35. `NUMMER`
