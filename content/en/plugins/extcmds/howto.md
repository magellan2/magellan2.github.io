# Wie benutzt man das Extended Commands Plugin für Magellan 2.x?

Im Moment ist das Plugin Bestandteil der Standard-Distribution von Magellan. Es benötigt also keine Installation.

Es gibt grob drei Punkte, die man ansteuern kann und sollte, um das Plugin zu nutzen. Wer einfach anfangen will, wählt sich eine Einheit seiner Wahl in der Regionsansicht aus und klickt mit der rechten Maustaste drauf. Dort gibt es den Menüpunkte "Erweiterte Befehle" mit dem Untermenüpunkt "Bearbeite &lt;Einheitenname&gt;". Klickt man diesen Punkt an, so öffnet sich ein Dialog, der etwa wie folgt aussieht. 

![Extended Commands](/images/plugin_extcmds.png)

Im linken Teil findest du einen Editor-Bereich, in dem du später deine Scripte für diese Einheit angibst. Im rechten Teil findest du eine kurze Hilfe. Falls die Einheit noch nie Befehle bekommen hat, ist der linke Teil natürlich leer. Ich hoffe, die einzelnen Elemente des Dialogs sind selbsterklärend. Dem Thema Scripting ist ein gesondertes Kapitel gewidmet.

Mit dem oben beschriebenen Weg bist du schon mal in der Lage einzelnen Einheiten Befehle zu geben. Dies funktioniert auch bei Burgen, Schiffen, Regionen und ganzen Parteien. Wobei dies alles sogenannte Container sind. Ihr Besonderheit ist, dass sie Einheiten enthalten können. Insofern gibt es eine grobe Trennung zwischen Einheit und Container. Das wirkt sich in zweierlei Art aus. Zum einen werden immer alle Scripte für Container vor den Scripten für Einheiten ausgeführt. Zum anderen sind die vordefinierten Variablen andere. Welche das sind, steht in der kurzen Hilfe im rechten Teil des Fensters.

Wenn man Befehle hat, die sich immer wieder wiederholen, kommt natürlich schnell der Gedanke auf, dafür eine Funktion zu schreiben und diese dann nur noch aufzurufen. Dies reduziert deutlich den Aufwand für die Codepflege, weil man nur noch an einer Stelle etwas ändern muss. In den Extended Commands nennt sich dieses Konstrukt "Bibliothek" und kann über das Hauptmenü von Magellan unter "Plugins &gt; Erweiterte Befehle &gt; Bibliothek bearbeiten" editiert werden. Hier kann man alles beliebige hinschreiben. Der Script wird bei der Ausführung vor jeden anderen Script gepackt. Es ist der ideale Ort, um bestimmte Pakete zu importieren und Funktionen zu definieren, die dann überall genutzt werden können.

Als letzter Punkt ist natürlich die Ausführung der Scripte an der Reihe. Das geht schrittweise. Man kann die Scripte für einzelne Einheiten oder Container ausführen oder den gesamten Baum auf einmal ausführen. Dabei werden zunüchst die Scripte für die Container und dann die Scripte für die Einheiten entsprechend ihrer Priorität ausgeführt. Zunächst die hoch priorisierten, dann die normalen und am Ende die niedrig priorisierten. So lassen sich einfach zu Beginn jeder Runde die Scripte ausführen und so für gut 70%-80% der Einheiten Befehle vordefinieren. Das spart doch Zeit, oder?

# Java Syntax

Die Scriptsprache, in der man schreibt, ist mehr oder weniger Java. Alles, was man in Java machen kann, kann man auch hier benutzen.

Ein paar Besonderheiten: Wenn man ernsthaft groß angelegt Scripte schreiben will, sollte man in der Bibliothek zumindest die folgenden beiden Packages importieren. Damit hat man die gröbste Klassendefinitionen von Magellan importiert.

<pre class="example">

import magellan.library.*;
import magellan.library.rules.*;
        
Map luxuryPrices = region.getPrices();
for (LuxuryPrice price : luxuryPrices.values()) {
  ...
}
</pre>

Das vereinfacht das Scriptschreiben doch enorm. Die gesamte API-Dokumentation der ExtCmds sowie vom Rest von Magellan sind ebenfalls abrufbar: Öffne dazu das Dock "Desktop &gt; Erweiterte Befehle Hilfe".

Übrigens: In früheren Versionen wurde an dieser Stelle die <a class="externalLink" href="http://www.beanshell.org/manual/">BeanShell</a> benutzt, die eine vereinfachte und etwas eingeschränkte Version von Java umfasst. Inzwischen wird die benötigte Funktionalität jedoch von Java selbst (bzw. der sogenannten JShell) besser implementiert.
