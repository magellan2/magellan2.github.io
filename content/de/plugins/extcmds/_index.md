# Was sind Extended Commands?

| | |
| ---: | --- |
| Name: | Extended Commands |
| Version: | 1.0 |
| Kurzbeschreibung: | Scriptbasierte Bearbeitung von Einheiten |
| Autor: | Thoralf |
| Website: | - |
| Download: | [hier](/de/download/#plugins) |

Bei den Extended Commands (oder kurz ExtCmds) handelt es sich um ein Plugin, mit
dessen Hilfe man Einheiten scriptbasiert Befehle geben kann. Es erinnert im
entferntesten Sinne an [Vorlage](http://www.gulrak.net/wiki/view/Gulrak/EresseaTools#vorlage" class="externalLink), hat aber zwei entscheidende Unterschiede. Zum
einen sind die Scripte eher auf Einheitenebene fokussiert. Sprich, man wählt eine
Einheit aus und erstellt für sie einen Script. Zum zweiten baut ExtCmds auf
BeanShell auf und ist damit sehr Java-ähnlich. Bei einer Ausführung innerhalb von
Magellan kann das Script dann auf das reichhaltige Angebot von Magellan Funktionen
zurückgreifen, um den Report zu analysieren.

![Extended Commands](/images/plugin_extcmds.png)

Obwohl der Entwickler die Scripte primär für einzelne Einheiten definiert sieht, so
kann man trotzdem an jedem sogenannten Container einen Script ausführen. Ein
Container enthält Einheiten und das sind demzufolge Regionen, Parteien und Schiffe.
So lässt sich schnell ein globaler Script für eine Region zusammenstellen, der zum
Beispiel den Unterhalt organisiert. Damit Scripte nicht an jeder Einheit oder Region
neu definiert werden müssen, obwohl sie gleich sind, kann man Funktionen schreiben
und diese in einer globalen Bibliothek ablegen.

Diese Webseite teilt sich grob in zwei Bereiche. Zum Einen geht es um die Nutzung des
Plugins an sich. Also wie mache ich wo was, damit das Plugin sinnvoll funktioniert
und zum anderen gibt es hier einige (vielleicht) nützliche Scriptbeispiele.

* [Howto](/de/plugins/extcmds/howto)
* [Beispiele](/de/plugins/extcmds/examples)
