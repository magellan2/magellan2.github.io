# Console Merger

| | |
| ---: | --- |
| Name: | Console Merger Tool |
| Version: | 1.0.1 |
| Kurzbeschreibung: | Dieses Tool ist ein Javaprogramm, welches über die Kommandozeile aufgerufen wird und zwei Eressea-Reporte zusammenfügt. Es benötigt mindestens Java 6 (Java 1.6). |
| Autor: | Thoralf |
| Website: | - |
| Download: | [hier](/de/download/#tools) |

Syntax:

`java magellan.ext.console.merge.ConsoleMerger Parameter`

Parameter: magellan_dir base_report merge_report result_report

* magellan_dir - das Verzeichnis, welches benötigte Magellan2-Dateien enthält. (Regeln und Ressourcen).
* base_report - der Original-Report.
* merge_report - der zum base_report hinzuzufügende Report
* result_report - Zieldatei. Falls diese existiert, wird sie überschrieben.

Möglicher anderer Aufruf:

`java -jar consolemerger.jar Parameter`

Das Programm berücksichtigt Dateiendungen und lädt und speichert im
entsprechenden Format.
