# Hinzufügen

**STRG-D**

Hier kann man CRs zu dem im Speicher befindlichen hinzuladen. Der CR im Speicher wird um die neuen Informationen erweitert, bzw. aktualisiert. Dabei kommt dem Runde-Tag im CR eine besondere Bedeutung zu. Es werden folgende Fälle unterschieden:

* Der hinzuzuladende CR ist neuer als der im Speicher (neue Runde):<br />Alle Daten über Einheiten und Schiffe werden gelöscht und die neueren Daten werden übernommen. Regionsdaten, Burgen, Straßen, etc. bleiben erhalten.
* Der hinzuzuladende CR ist aus der gleichen Runde wie der im Speicher befindliche:<br />Die vorhandenen Einheiten- und Regionsdaten bleiben erhalten und werden evtl. ergänzt.
* Der hinzuzuladende CR ist älter als der CR im Speicher:<br />Nur die Regionsdaten werden übernommen - natürlich nur wenn nicht bereits aktuellere vorliegen. Hier muss ich leider sagen, dass diese Funktion nicht immer 100% perfekt arbeitet. Speziell das Zusammenführen von Karten, die sich nur sehr bedingt überlappen, führt meist zu einem völlig falsch zusammengeführten Karte. Es gibt aber einen Tipp: Wenn der hinzuführende Report älter ist, als der aktuell geladene, dann dreht man den Spieß einfach um und lädt den neuen in den alten Report. Ersatzweise kann man auch den Runde-Tag im CR Report selbst ändern.

Magellan versucht automatisch, passende Kartenteile aneinanderzumontieren. Dabei vergleicht Magellan die Folge der verschiedenen Regionstypen nach identischen Mustern. Wenn zwei Karten sich überlappen, ist die Chance groß, daß Magellan die Karten richtig zusammenfügt. Probleme kann es vor allem dann geben, wenn Regionen im hinzugefügten Report nicht eindeutig identifizierbar sind. Viele Astralraumregionen oder Ozeanregionen gleichen sich zum Beispiel wie ein Ei dem anderen und können deshalb nur schwer identifiziert werden.

Weitere Hinweise zu dieser Funktion findet man im Abschnitt "Referenz" unter [Computerreporte](/de/help/reference/cr/).
