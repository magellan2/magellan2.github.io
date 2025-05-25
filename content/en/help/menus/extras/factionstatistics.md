<span id="top"></span>

# Parteistatistik

In der Parteistatistik kann man sich eine Übersicht über die im Report
vorhandenen Parteien verschaffen. Wählt man zuvor eine oder mehrere
Regionen aus, wird die Statistik nur für diese Regionen dargestellt.

Mit dem Knopf ***Passwort und andere Eigenschaften*** kann man ein
Passwort für die gewählte Partei eingeben. Erst wenn ein Passwort
gesetzt ist, kann man Befehle für diese Partei schreiben und
exportieren. Außerdem kann man hierüber **Reportbesitzer** und
**Koordinatentranslationen einstellen**.

Mit dem Knopf ***Vertrauen einstellen*** kann man den Trustlevel für die
gewählte(n) Partei(en) einstellen. Dieser wird z.B. für die Darstellung
von politischen Karten (siehe [Karteneinstellungen](options_map/))
genutzt. Wird hier nichts eingetragen, berechnet Magellan die Trustlevel
aus den HELFE-Stati, die für diese Partei gesetzt sind, selbst.

Mit dem Knopf ***Partei aus dem Report löschen*** kann man eine Partei
komplett aus dem Report entfernen, vorausgesetzt in der aktuellen Runde
tauchen keine Einheiten dieser Partei im Report auf und es existieren
auch sonst keine Beziehungen (z.B. Allianzen) zu dieser Partei mehr.
Diese Funktion dient zum Entfernen von "Parteileichen", die man früher
einmal getroffen hat, die aber im aktuellen Report nicht mehr
auftauchen.

  

## Statistik

<img src="../../images/menu_extras_factiontatistics.gif"
data-border="0" />

Wird im linken Fenster eine oder mehrere Partei(en) gewählt, erscheint
im rechten Fenster eine statistische Aufstellung über alle Güter und
Einheiten, die man aktuell von diese(r) Partei(en) sehen kann. Bei der
eigenen Partei ist dies natürlich das komplette Inventar.

Bei allen Gegenständen wird angegeben, welche Einheit diese besitzt.
Klickt man auf eine Einheit, wird diese im Hauptfenster angezeigt und
man kann direkt Befehle für diese Einheit geben.

  

## Talentstatistik

<img src="../../images/menu_extras_factiontatistics_skills.gif"
data-border="0" />

Man kann hier sehen, wieviele Personen ein bestimmtes Talent in welcher
Stufe haben. Dazu wählt man einfach aus dem Drop-Down-Menü unten links
das gewünschte Talent aus. Die anderen Drop-Down-Menüs dienen nur der
Information, man kann hier nichts einstellen. Sie zeigen die Anzahl der
Personen mit dem Talent, die Gesamtlerntage und die Summe der
Talentpunkte.

<span id="eresseaoptions"></span>  

## Eressea-Optionen

<img src="../../images/menu_extras_factiontatistics_options.gif"
data-border="0" />

Hier kann man die Eressea-Reportoptionen setzen. Die Eressea-Optionen
werden bei Klick auf den Knopf ***Optionen setzen*** als
Einheitenbefehle ([OPTION](../../../eressea/orders_desc/)) generiert
und mit den Befehlen an den Eressea-Server geschickt. Daher werden
veränderte Optionen hier erst in der nächsten Runde sichtbar.

Die genaue Bedeutung der Optionen kann man
[hier](../../../eressea/befehle/option/) nachlesen.

  

### Reportoptionen

- **Report in maschinenlesbarer Form (CR) beziehen**  
  Diese Option ist unbedingt nötig, wenn man seinen Zug mit Magellan
  machen will, da Magellan nur den Computer-Report (CR) verarbeiten
  kann.
- **Report in menschenlesbarer Form (NR) beziehen**  
  Ist diese Option gesetzt, so erhält man die Auswertung in
  menschenlesbarer Form als eine Text-Datei (Normalreport,NR).  
  Hier stehen noch weitere Möglichkeiten zur Auswahl:
  - **E-Mail Adressen anderer Parteien zum Report hinzufügen**  
    Ist diese Option gesetzt, so wird am Ende des NRs ein Anhang mit den
    E-Mail Adressen aller in dieser Auswertung gesichteten Parteien
    eingefügt.
  - **Regionsstatisktik zum Report hinzufügen**  
    Ist diese Option gesetzt, so wird unter den Regionsdaten im NR ein
    Block mit der Regionsstatistik eingefügt. Hierzu gehören u.a. die
    Gesamtanzahl an Gegenständen und Personen der eigenen Partei.  
    Diese Option sollte man nur setzen, wenn man viel mit dem NR
    arbeitet. Erstellt man seinen Zug im wesentlichen mit Magellan,
    sollte man diese Option deaktivieren um die vom Eressea-Server zu
    verschickende Datenmenge zu reduzieren.
  - **Befehls-Zugvorlage zum Report hinzufügen**  
    Ist diese Option gesetzt, wird an des Ende des NRs eine Vorlage mit
    den Standard-Befehlen der einzelnen Einheiten angehängt. Diese
    Option sollte man nur setzen, wenn man den Zug nicht mehr mit
    Magellan erstellen willsollte man diese Option deaktivieren um die
    vom Eressea-Server zu verschickende Datenmenge zu reduzieren.
- **Reporte komprimieren**  
  Um die Größe der Auswertungsmail zu verringern und sich so einen
  schnelleren Download zu ermöglichen, kann man die Auswertung gepackt
  bestellen. Hierzu gibt es zwei Möglichkeiten:
  - **ZIP Komprimierung**  
    liefert den Report als .zip-Datei
  - **BZIP2 Komprimierung**  
    liefert den Report als .bz2-Datei

### Spieloptionen

- **Silberpool**  
  Silber wird Einheiten innerhalb von Regionen automatisch zugeteilt.
- **Materialpool**  
  Rohstoffe werden Einheiten innerhalb von Regionen automatisch
  zugeteilt.
