# Teacher Plugin

| | |
| ---: | --- |
| Name: | Teacher Plugin |
| Version: | 0.17.0 |
| Kurzbeschreibung: | Vereinfachte Lehrer-Schüler Operation |
| Autor: | stm |
| Website: | - |
| Download: | [hier](/de/download/#teacher) |

Das Teacher-Plugin berechnet automatisch eine Zuweisung von Schülern
zu Lehrern. Um an diesem Prozess teilzunehmen, muss die Einheit
bestimmte Befehle erhalten, die für jedes Talent, das die Einheit lernen
soll einen Wert definieren. Teacher versucht Schülern so Lehrern zuzuweisen,
dass die Summe der Werte aller gelernten Talente maximiert wird. Schüler, die 
einen Lehrer haben, werden dabei (ungefähr) doppelt bewertet, da sie Talente
doppelt so schnell lernen.


Damit eine Einheit in diesem Prozess abgearbeitet werden kann, müssen ihre
Befehle einen oder mehrere der folgenden Metabefehle enthalten:

    // $$L wert Talent1 ziel1 max1 [Talent2 ziel2 max2]...

steht für einen Schüler, der zwei unterschiedliche Talente mit 
unterschiedlichen Werten lernen soll. 

* wert  -  beeinflusst, wie wichtig diese Einheit ist. Einheiten mit hohem Wert werden bei der 
          Vergabe von Lehrern bevorzugt.  Sie können für den Anfang einfach alle Werte gleich setzen.
* ziel   - ist der angestrebte Talentwert. 
*  max   -  ist der maximale Talentwert.

Eine Einheit mit "// $$L 100 Hiebwaffen 10 99 Ausdauer 5 99 Reiten 5 2" wird versuchen das 
Verhältnis zwischen ihrem Hiebwaffentalent und dem Ausdauertalent bei etwa 2:1 zu halten. Reiten 
wird sie bis Maximal Stufe 2 lernen.
        
    // $$T Talent1 maxDiff1 [Talent2 maxDiff2]...

steht für einen Lehrer, der zwei Talente lehrt. Schüler, deren Talentwert
um mehr als maxDiff vom Talentwert des Lehrers abweicht, werden gering
bewertet. maxDiff==0 bedeutet, dass der Talentunterschied egal ist. 
maxDiff==1 bedeutet, dass der Lehrer dieses Talent nicht lehren wird.

    // $$T ALLES maxDiff

steht für einen Lehrer, der alle ihm bekannten Talente lehrt

    // $$T ALLES 0 Hiebwaffen 2

ist auch zulässig.
        
    // $namespace1$T ...
    // $namespace1$L ...

definiert einen Metabefehl, der zu einem sog. Namensraum gehört. Man kann
den Einflussbereich der automatischen Lehre auf Einheiten in einem bestimmten
Namensraum eingrenzen.  

Eine Einheit, die Lehrer ist muss auch mindestens ein Talent lernen.

