<h1>
  Die Liste der Befehle
</h1>
<p>
  Vorab ein paar Hinweise zur Notation:
</p>
<ul>
  <li>
    feste Eingaben sind <tt>GROSS</tt> geschrieben. Sie müssen aber im Zug
    nicht zwangsweise auch groß geschrieben werden.
  </li>
  <li>
    Bezeichnungen sind <tt>klein</tt> geschrieben. Für sie ist es
    sinnvoller, kontextbezogene Werte einzugeben.<br />
     Beispiel: <tt>GIB einheit-nr anzahl SILBER</tt> gibt einer Einheit
    Silber. <tt>GIB bp2 2000 Silber</tt> gibt der Einheit <tt>bp2</tt> 2000
    Silber.<br />
     In den Reports wird oftmals auch die Schreibweise
    <tt>&lt;einheit-nr&gt;</tt> benutzt; die spitzen Klammern sind in
    diesem Fall wegzulassen.
  </li>
  <li>
    Dinge, die in eckigen Klammern stehen (<tt>[NICHT]</tt>) sind optional,
    das heißt sie können, müssen aber nicht eingegeben werden. Dabei sind
    die eckigen Klammern wegzulassen.<br />
     Beispiel: <tt>MACHE [stufen] SCHIFF</tt>: hier kann eine Stufenanzahl
    benutzt werden: <tt>MACHE 10 SCHIFF</tt>, oder ohne Angabe <tt>MACHE
    SCHIFF</tt>.
  </li>
</ul>
<h2>
  Kurzbeschreibung der Befehle
</h2>
<p>
  Unter "K/L" ist vermerkt, ob der Befehl ein kurzer oder langer Befehl
  ist, d.h., ob er sofort ausgeführt wird (und danach weitere Befehle
  möglich sind) oder eine ganze Runde zur Ausführung braucht.
</p>
<br />
 
<table cellspacing="0" cellpadding="3" border="1">
  <caption align="bottom">
    Kurzliste der Befehle
  </caption>
  <tbody>
    <tr bgcolor="#CCCCCC">
      <th>
        Befehl
      </th>
      <th>
        Beschreibung
      </th>
      <th>
        K/L
      </th>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#ARBEITE">ARBEITE</a></tt>
      </td>
      <td>
        verdient 10 Silber oder mehr
      </td>
      <td align="center">
        L
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#ATTACKIERE">ATTACKIERE
        einheit-nr</a></tt>
      </td>
      <td>
        greift die Einheit an
      </td>
      <td align="center">
        (L)
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#BANNER">BANNER "text</a></tt>
      </td>
      <td>
        Setzt Text für Adress-Liste
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#BEANSPRUCHE">BEANSPRUCHE anzahl
        gegenstand</a></tt>
      </td>
      <td>
        holt Gegenstände aus Parteipool
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#BEFOERDERUNG">BEFÖRDERUNG</a></tt>
      </td>
      <td>
        macht Einheit zu Helden
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#BEKLAUE">BEKLAUE einheit-nr</a></tt>
      </td>
      <td>
        klaut 50 Silber oder mehr
      </td>
      <td align="center">
        L
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#BELAGERE">BELAGERE burg-nr</a></tt>
      </td>
      <td>
        belagert die Burg
      </td>
      <td align="center">
        L
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#BENENNE">BENENNE EINHEIT
        "name"</a></tt>
      </td>
      <td>
        benennt Objekte
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#BENENNE">BENENNE PARTEI
        "name"</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#BENENNE">BENENNE GEBÄUDE
        "name"</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#BENENNE">BENENNE SCHIFF
        "name"</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#BENENNE">BENENNE REGION
        "name"</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#BENENNE">BENENNE FREMDE EINHEIT
        einheit "name"</a></tt>
      </td>
      <td>
        benennt <em>fremde und unbenannte</em> Objekte
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#BENENNE">BENENNE FREMDES SCHIFF
        schiff "name"</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#BENENNE">BENENNE FREMDES GEBÄUDE
        gebäude "name"</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#BENENNE">BENENNE FREMDE PARTEI partei
        "name"</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#BENUTZE">BENUTZE [anzahl]
        trank</a></tt>
      </td>
      <td>
        benutzt alchemistischen Trank
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#BESCHREIBE">BESCHREIBE EINHEIT
        "text"</a></tt>
      </td>
      <td>
        beschreibt Objekte
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#BESCHREIBE">BESCHREIBE PRIVAT
        "text"</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#BESCHREIBE">BESCHREIBE GEBÄUDE
        "text"</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#BESCHREIBE">BESCHREIBE SCHIFF
        "text"</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#BESCHREIBE">BESCHREIBE REGION
        "text"</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#BETRETE">BETRETE GEBÄUDE
        gebäude</a></tt>
      </td>
      <td>
        betritt Gebäude
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#BETRETE">BETRETE SCHIFF
        schiff-nr</a></tt>
      </td>
      <td>
        betritt Schiffe
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#BEWACHE">BEWACHE [NICHT]</a></tt>
      </td>
      <td>
        bewacht die Region
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#BOTSCHAFT">BOTSCHAFT REGION
        "text"</a></tt>
      </td>
      <td>
        versendet Botschaften
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#BOTSCHAFT">BOTSCHAFT SCHIFF schiff-nr
        "text"</a></tt>
      </td>
      <td>
        versendet Botschaften
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#BOTSCHAFT">BOTSCHAFT GEBÄUDE
        gebäude-nr "text"</a></tt>
      </td>
      <td>
        versendet Botschaften
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#BOTSCHAFT">BOTSCHAFT EINHEIT einh-nr
        "text"</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#BOTSCHAFT">BOTSCHAFT PARTEI partei-nr
        "text"</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#DEFAULT">DEFAULT befehl</a></tt>
      </td>
      <td>
        Setzt Default-Befehl für die nächste Runde.
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#EINHEIT">EINHEIT einheit-nr</a></tt>
      </td>
      <td>
        beginnt Befehle für eine Einheit
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#EMAIL">EMAIL email@adresse</a></tt>
      </td>
      <td>
        setzt die eMail-Adresse
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#ENDE">ENDE</a></tt>
      </td>
      <td>
        beendet <tt>MACHE TEMP</tt>
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#ERESSEA">ERESSEA partei-nr
        "passwort"</a></tt>
      </td>
      <td>
        beginnt Befehle für Partei
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#FAHRE">FAHRE einheit-nr</a></tt>
      </td>
      <td>
        sich transportieren lassen
      </td>
      <td align="center">
        L
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#FOLGE">FOLGE EINHEIT
        einheit-nr</a></tt>
      </td>
      <td>
        folgt einer Einheit
      </td>
      <td align="center">
        (L)
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#FOLGE">FOLGE SCHIFF
        schiff-nr</a></tt>
      </td>
      <td>
        folgt einem Schiff
      </td>
      <td align="center">
        L
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#FORSCHE">FORSCHE KRÄUTER</a></tt>
      </td>
      <td>
        sucht Kräuter
      </td>
      <td align="center">
        L
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#GIB">GIB einheit-nr KRÄUTER</a></tt>
      </td>
      <td>
        gibt einer Einheit alle Kräuter
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#GIB">GIB einheit-nr KOMMANDO</a></tt>
      </td>
      <td>
        übergibt Kommando über Schiff/Gebäude
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#GIB">GIB einheit-nr anzahl
        SILBER</a></tt>
      </td>
      <td>
        übergibt Silber
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#GIB">GIB einheit-nr anzahl
        PERSONEN</a></tt>
      </td>
      <td>
        übergibt Personen
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#GIB">GIB einheit-nr EINHEIT</a></tt>
      </td>
      <td>
        übergibt Einheit an fremde Partei
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#GIB">GIB einheit-nr anzahl
        gegenstand</a></tt>
      </td>
      <td>
        übergibt Gegenstände
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#GIB">GIB 0 anzahl SILBER</a></tt>
      </td>
      <td>
        wegwerfen von Gegenständen
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#GIB">GIB 0 anzahl PERSONEN</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#GIB">GIB 0 anzahl gegenstand</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#GRUPPE">GRUPPE ["name"]</a></tt>
      </td>
      <td>
        Gruppieren von Einheiten
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#HELFE">HELFE partei-nr ALLES
        [NICHT]</a></tt>
      </td>
      <td>
        setze/lösche <b>einseitige</b> Allianz
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#HELFE">HELFE partei-nr GIB
        [NICHT]</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#HELFE">HELFE partei-nr KÄMPFE
        [NICHT]</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#HELFE">HELFE partei-nr BEWACHE
        [NICHT]</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#HELFE">HELFE partei-nr SILBER
        [NICHT]</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#HELFE">HELFE partei-nr PARTEITARNUNG
        [NICHT]</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#KAEMPFE">KÄMPFE</a></tt>
      </td>
      <td>
        setzt Verhalten im Kampf
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#KAEMPFE">KÄMPFE AGGRESSIV</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#KAEMPFE">KÄMPFE DEFENSIV</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#KAEMPFE">KÄMPFE FLIEHE</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#KAEMPFE">KÄMPFE HELFE
        [nicht]</a></tt>
      </td>
      <td>
        der Einheit wird im Kampf [nicht] geholfen
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#KAEMPFE">KÄMPFE HINTEN</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#KAEMPFE">KÄMPFE NICHT</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#KAMPFZAUBER">KAMPFZAUBER
        "zauberspruch"</a></tt>
      </td>
      <td>
        setzt Zauber für Kämpfe
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#KAUFE">KAUFE anzahl luxusgut</a></tt>
      </td>
      <td>
        kaufe Luxusgüter
      </td>
      <td align="center">
        L
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#KONTAKTIERE">KONTAKTIERE
        einheit-nr</a></tt>
      </td>
      <td>
        kontaktiere fremde Einheiten
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#LEHRE">LEHRE einheit-nr [einheit-nr
        etc.]</a></tt>
      </td>
      <td>
        lehre Einheiten
      </td>
      <td align="center">
        L
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#LERNE">LERNE talent</a></tt>
      </td>
      <td>
        Talent lernen
      </td>
      <td align="center">
        L
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#MACHE">MACHE TEMP unit-alias-nr
        ["name"]</a></tt>
      </td>
      <td>
        erschaffe neue Einheit
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#MACHE">MACHE [stufe] gebäude-typ
        [gebäude-nr]</a></tt>
      </td>
      <td>
        erweitere oder baue neues Gebäude
      </td>
      <td align="center">
        L
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#MACHE">MACHE [stufe] SCHIFF
        [schiff-nr]</a></tt>
      </td>
      <td>
        baue weiter am Schiff
      </td>
      <td align="center">
        L
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#MACHE">MACHE</a></tt>
      </td>
      <td>
        baue weiter an Gebäude/Schiff
      </td>
      <td align="center">
        L
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#MACHE">MACHE [stufe] BOOT</a></tt>
      </td>
      <td>
        baue neue Schiffe
      </td>
      <td align="center">
        L
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#MACHE">MACHE [stufe]
        LANGBOOT</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        L
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#MACHE">MACHE [stufe]
        DRACHENSCHIFF</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        L
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#MACHE">MACHE [stufe]
        KARAVELLE</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        L
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#MACHE">MACHE [stufe] TRIREME</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        L
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#MACHE">MACHE [stufe] STRASSE
        richtung</a></tt>
      </td>
      <td>
        baue Straßen
      </td>
      <td align="center">
        L
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#MACHE">MACHE [anzahl]
        KRÄUTER</a></tt>
      </td>
      <td>
        suche Kräuter der Region
      </td>
      <td align="center">
        L
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#MACHE">MACHE [anzahl] trank</a></tt>
      </td>
      <td>
        mache einen alchemistischen Trank
      </td>
      <td align="center">
        L
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#MACHE">MACHE [anzahl]
        gegenstand</a></tt>
      </td>
      <td>
        mache einen Gegenstand
      </td>
      <td align="center">
        L
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#NACH">NACH richtung [richtung
        etc.]</a></tt>
      </td>
      <td>
        Reisen
      </td>
      <td align="center">
        L
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#NAECHSTER">NÄCHSTER</a></tt>
      </td>
      <td>
        Beendet Befehle
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#NEUSTART">NEUSTART rasse
        "passwort"</a></tt>
      </td>
      <td>
        Läßt alte Partei mit neuer Rasse starten
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#NUMMER">NUMMER EINHEIT
        [neue_nr]</a></tt>
      </td>
      <td>
        vergibt neue Nummer
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#NUMMER">NUMMER GEBÄUDE
        [neue_nr]</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#NUMMER">NUMMER PARTEI
        [neue_nr]</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#NUMMER">NUMMER SCHIFF
        [neue_nr]</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#OPTION">OPTION AUSWERTUNG
        [NICHT]</a></tt>
      </td>
      <td>
        verschiedene Optionen
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#OPTION">OPTION COMPUTER
        [NICHT]</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#OPTION">OPTION ZIPPED
        [NICHT]</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#OPTION">OPTION BZIP2 [NICHT]</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#OPTION">OPTION SILBERPOOL
        [NICHT]</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#OPTION">OPTION MATERIALPOOL
        [NICHT]</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#OPTION">OPTION ADRESSEN
        [NICHT]</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#OPTION">OPTION ZUGVORLAGE
        [NICHT]</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#OPTION">OPTION STATISTIK
        [NICHT]</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#OPTION">OPTION TALENTVERSCHIEBUNG
        [NICHT]</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#OPTION">OPTION PUNKTE
        [NICHT]</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#PASSWORT">PASSWORT
        "neues-passwort"</a></tt>
      </td>
      <td>
        setze neues Passwort
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#PFLANZE">PFLANZE [anzahl]
        KRÄUTER</a></tt>
      </td>
      <td>
        pflanzt Kräuter
      </td>
      <td align="center">
        L
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#PFLANZE">PFLANZE [anzahl]
        BÄUME</a></tt>
      </td>
      <td>
        pflanzt Samen
      </td>
      <td align="center">
        L
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#PFLANZE">PFLANZE [anzahl]
        MALLORNSAMEN</a></tt>
      </td>
      <td>
        pflanzt Samen
      </td>
      <td align="center">
        L
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#PFLANZE">PFLANZE [anzahl]
        SAMEN</a></tt>
      </td>
      <td>
        pflanzt Samen
      </td>
      <td align="center">
        L
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#PIRATERIE">PIRATERIE [partei_1
        [partei_2 [...]]]</a></tt>
      </td>
      <td>
        Piraterie setzen
      </td>
      <td align="center">
        L
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#PRAEFIX">PRÄFIX [präfix]</a></tt>
      </td>
      <td>
        gibt der Rassenbezeichnung ein Präfix
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#REGION">REGION x,y</a></tt>
      </td>
      <td>
        keine Funktion (nur für Tools)
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#REKRUTIERE">REKRUTIERE
        anzahl</a></tt>
      </td>
      <td>
        rekrutiere weitere Personen
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#RESERVIERE">RESERVIERE anzahl
        "gegenstand"</a></tt>
      </td>
      <td>
        Gegenstände reservieren
      </td>
      <td align="center">
        L
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#RESERVIERE">RESERVIERE anzahl
        SILBER</a></tt>
      </td>
      <td>
        Silber reservieren
      </td>
      <td align="center">
        L
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#ROUTE">ROUTE richtung [richtung
        etc.]</a></tt>
      </td>
      <td>
        Reisen
      </td>
      <td align="center">
        L
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#SABOTIERE">SABOTIERE SCHIFF</a></tt>
      </td>
      <td>
        Schiff versenken
      </td>
      <td align="center">
        L
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#SPIONIERE">SPIONIERE
        einheit-nr</a></tt>
      </td>
      <td>
        Einheit ausspionieren
      </td>
      <td align="center">
        L
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#SORTIERE">SORTIERE VOR
        einheit-nr</a></tt>
      </td>
      <td>
        Einheit in Report sortieren
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#SORTIERE">SORTIERE HINTER
        einheit-nr</a></tt>
      </td>
      <td>
        &nbsp;
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#STIRB">STIRB "passwort"</a></tt>
      </td>
      <td>
        aus dem Spiel ausscheiden
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#TARNE">TARNE [stufe]</a></tt>
      </td>
      <td>
        Tarnstufe setzen
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#TARNE">TARNE rasse</a></tt>
      </td>
      <td>
        Dämonen: als andere Rasse tarnen
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#TARNE">TARNE PARTEI [NICHT]</a></tt>
      </td>
      <td>
        Parteizugehörigkeit verbergen
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#TARNE">TARNE PARTEI NUMMER
        nummer</a></tt>
      </td>
      <td>
        Parteizugehörigkeit tarnen
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#TRANSPORTIERE">TRANSPORTIERE
        einheit-nr</a></tt>
      </td>
      <td>
        andere Einheiten mitnehmen
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#TREIBE">TREIBE [betrag]</a></tt>
      </td>
      <td>
        Steuern eintreiben (max. 20 S/Talentstufe)
      </td>
      <td align="center">
        L
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#UNTERHALTE">UNTERHALTE
        [betrag]</a></tt>
      </td>
      <td>
        verdiene 20 oder mehr Silber
      </td>
      <td align="center">
        L
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#URSPRUNG">URSPRUNG [x y]</a></tt>
      </td>
      <td>
        setzt den Koordinaten-Ursprung
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#VERGESSE">VERGESSE talent</a></tt>
      </td>
      <td>
        vergißt das Talent
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#VERKAUFE">VERKAUFE anzahl
        luxusgut</a></tt>
      </td>
      <td>
        verkaufe Luxusgüter
      </td>
      <td align="center">
        L
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#VERLASSE">VERLASSE</a></tt>
      </td>
      <td>
        Schiff oder Gebäude verlassen
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#ZAUBERE">ZAUBERE
        "zauberspruch"</a></tt>
      </td>
      <td>
        Zaubern
      </td>
      <td align="center">
        L
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#ZEIGE">ZEIGE "zauberspruch"</a></tt>
      </td>
      <td>
        Zeige Beschreibung des Zaubers
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#ZERSTOERE">ZERSTÖRE</a></tt>
      </td>
      <td>
        Gebäude, Schiff oder Straße
      </td>
      <td align="center">
        K
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#ZUECHTE">ZÜCHTE PFERDE</a></tt>
      </td>
      <td>
        Pferde züchten - nur in Pferdezucht
      </td>
      <td align="center">
        L
      </td>
    </tr>
    <tr bgcolor="#EEEEEE">
      <td>
        <tt><a href="orders_list#ZUECHTE">ZÜCHTE KRÄUTER</a></tt>
      </td>
      <td>
        Kräuter züchten
      </td>
      <td align="center">
        L
      </td>
    </tr>
    <tr bgcolor="#DDDDDD">
      <td>
        <tt><a href="orders_list#ZUECHTE">ZÜCHTE BÄUME</a></tt>
      </td>
      <td>
        Samen pflanzen
      </td>
      <td align="center">
        L
      </td>
    </tr>
  </tbody>
</table>


