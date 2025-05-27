
# MapIcons Plugin

| | |
| ---: | --- |
| Name: | MapIcons Plugin |
| Version: | 1.41 |
| Kurzbeschreibung: | Bestimmte Meldungen mit größeren Icons in der Karte anzeigen |
| Autor: | Fiete |
| Website: | - |
| Download: | [hier](/de/download/#mapicons) |

Dieses Plugin visualisiert wichtige Meldungen aus den Regionen mit auffallend 
großen Icons in der Übersichtskarte.

Die erfassten Meldungen sind unten in einer Tabelle zusammengefasst.

Mit Hilfe des PlugIn-Menus und/oder der Tastenkombination CTRL + M lassen 
sich die Icons jederzeit aus- und einblenden.

Ab Version 0.5: Per Auswahl im Menü ist die Bewachung der Regionen visualisierbar.<br>
Ab Version 0.6: Per Auswahl im Menü kann das Vorhandensein einer unbesetzten Burg angezeigt werden.<br>
Ab Version 0.7: Auch Vulkanausbrüche werden angezeigt, Juju-Zombies werden als Monster erkannt.<br>
Ab Version 0.8: Eine Liste feindlicher Parteien wird per Icon angezeigt.<br> 
Ab Version 0.9: Die Liste feindlicher Einheiten kann per Datei und per Einheiten befehl gefüllt werden.<br>
Ab Version 0.92: Botschaften werden in der Region angezeigt, aus der sie gesendet wurden.<br>
Ab Version 0.96: Anzeige der maximalen Talente, Kennzeichnung der Regionen mit Fehlern.<br>
Ab Version 0.97: Alle Icons optional zuschaltbar, CTRL+M funktioniert wieder.<br>
Ab Version 0.98: Anpassungen an Magellan-nightly, funktioniert nicht mehr mit Magellan 2.0.5!<br>
Ab Version 0.99: Anzeige der Silberbestände nach selbst festgelegten Kategorien<br>
Ab Version 1.3: Einstellungen der verschiedenen Anzeigen werden gespeichert<br>
Ab Version 1.41: Ergänzung der Anzeige der Anzahl von Gegenständen bei befreundeten Einheiten in 10 farbcodierten Stufen<br></br>
  
---
<table border=0>
	<tr>
		<td>
			<img src="/images/MIplugin_battle.gif" alt="MapIcon Battle" border="0" />
		</td>
		<td>
			Hier fand eine Schlacht statt.
		</td>
	</tr>
	<tr>
		<td>
			<img src="/images/MIplugin_monster.gif" alt="MapIcon Monster" border="0" />
		</td>
		<td>
			In dieser Region treiben Monster und/oder Untote ihr Unwesen.
		</td>
	</tr>
	<tr>
		<td>
			<img src="/images/MIplugin_badmonster.gif" alt="MapIcon Bad Monster" border="0" />
		</td>
		<td>
			In dieser Region treiben bespnders böse Monster und/oder ganz fiese Untote ihr Unwesen.
		</td>
	</tr>
	<tr>
		<td>
			<img src="/images/MIplugin_hunger.gif" alt="MapIcon Hunger" border="0" />
		</td>
		<td>
			Hungernde Einheiten benötigen Hilfe.
		</td>
	</tr>
	<tr>
		<td>
			<img src="/images/MIplugin_specialevents.gif" alt="MapIcon Special Events" border="0" />
		</td>
		<td>
			Man achte auf Regionsmeldungen! 
			<br>
			(Wurmlöcher, Einheiten erscheinen und verschwinden)
			<br>
			(Pestausbrüche u.v.m)
		</td>
	</tr>
	<tr>
		<td>
			<img src="/images/MIplugin_dieb.gif" alt="MapIcon Dieb" border="0" />
		</td>
		<td>
			Man will uns Böses: wir wurden beklaut oder es wurde zumindest versucht, uns zu beklauen!
		</td>
	</tr>
	<tr>
		<td>
			<img src="/images/MIplugin_guard_friend.gif" alt="MapIcon Bewachung Freund" border="0" />
		</td>
		<td>
			Diese Region wird von freundlichen Kräften bewacht. Gut so.
		</td>
	</tr>
	<tr>
		<td>
			<img src="/images/MIplugin_guard_enemy.gif" alt="MapIcon Bewachung Feind" border="0" />
		</td>
		<td>
			Uns nicht freundlich gesinnte Kräfte (keine der priviligierten Parteien hat HELFE BEWACHE zu diesen) bewachen die Region.
		</td>
	</tr>
	<tr>
		<td>
			<img src="/images/MIplugin_empty_tower.gif" alt="MapIcon Leere Burg" border="0" />
		</td>
		<td>
			Hier steht eine Burg leer. Rein da!?
		</td>
	</tr>
	<tr>
		<td>
			<img src="/images/MIplugin_enemy_present.gif" alt="MapIcon Feind" border="0" />
		</td>
		<td>
			In dieser Region sind Einheiten von Völkern, die auf der Liste feindlicher Parteien stehen<br>
			Die anzuzeigenden Parteien können entweder in einer Datei im Magellanverzeichnis aufgeführt werden (Dateiname MIPlugin_Enemies.ini, jede Zeile eine Parteinummer), oder 
			aber in den Befehlen beliebiger Einheiten (// EnemyFaction=abcd).
		</td>
	</tr>
	<tr>
		<td>
			<img src="/images/MIplugin_message.gif" alt="MapIcon Botschaft" border="0" />
		</td>
		<td>
			Es wurde mindestens eine Botschaft von einer Einheit in dieser Region aus abgesetzt.
		</td>
	</tr>
	<tr>
		<td>
			<img src="/images/MIplugin_errors.gif" alt="MapIcon Fehler" border="0" />
		</td>
		<td>
			In dieser Region wurde mindestens eine Fehlermeldung / Warnung vom Eressea Server kommend entdeckt.
		</td>
	</tr>
	
</table>

<hr>
Beispiele:
<table border=0>
	<tr>
		<td>
			<img src="/images/plugins_mapicons_example1.gif" alt="MapIcon Example 1" border="0" />
		</td>
		<td>
			Ooh, schlechte Neuigkeiten. Ein Kampf im Berg und diese Runde Monster bei meinen Schiffen!<br>
			(Ja, tatsächlich attackierten die Monster den Berg und bewegten sich dann in die Ebene)
		</td>
	</tr>
	<tr>
		<td>
			<img src="/images/plugins_mapicons_example2.gif" alt="MapIcon Example 2" border="0" />
		</td>
		<td>
			Das passiert leider so häufig: Mein armer (untalentierter) Spion wird gefasst und ist zum Sterben durch Verhungern verurteilt.
		</td>
	</tr>
	<tr>
		<td>
			<img src="/images/plugins_mapicons_example3.gif" alt="MapIcon Example 3" border="0" />
		</td>
		<td>
			Nicht vergessen, hier genauer reinzuschauen. (War diesmal "nur" die Pest)
		</td>
	</tr>
	<tr>
		<td>
			<img src="/images/plugins_mapicons_example4.gif" alt="MapIcon Example 4" border="0" />
		</td>
		<td>
			Ansicht aller maximalen bekannten Talentwerte auf einer kleiner Insel. Welche Insel, und welches Talent, ist natürlich geheim.
		</td>
	</tr>
</table>