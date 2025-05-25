<span id="top"></span>

# Kommandozeilen-Parameter

Magellan akzeptiert folgende beim
[Starten](../faq/#Kommandozeilenstart) angegebenen Parameter:

- `-d <Verzeichnis>`: Gibt das Verzeichnis an, in dem Magellan nach
  seinen Einstellungen sucht (magellan.ini, magellan_desktop.ini) und in
  dem die Datei errors.txt mit den Fehlermeldungen abgelegt wird.
- `<CR-Datei>`: Der angegebene CR wird direkt nach dem Start geladen.

Der gesamte Aufruf von Magellan sieht folgendermaßen aus:
`javaw -jar magellan.jar [-d Verzeichnis] [CR-Datei]`
