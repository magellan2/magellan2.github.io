# Beispiele
            
Ich hab hier eine Reihe von Beispielen untergebracht. Sie stammen nicht alle von mir.

Wer einen besonders coolen Script hat und ihn der Welt kundtun will, soll sich bei
mir melden. Schreib mir ne Mail an thoralf at m84 de.
            

Hier also einige Scriptbeispiele:

* [Einheit automatisch bestätigen](#script1)
* [Pferdedressur](#script2)
* [Kräuter übergeben](#script3)
* [Transporter automatisieren](#script4)
* [Schmiede automatisieren](#script5)
* [Einheiten ausbilden](#script6)
* [Ganze Regionen bestätigen](#script7)
* [Händler automatisieren](#script8)
* [Silber horten](#script9)
* [Schilder mit Luxusgütern aufstellen](#script10)
* [Schilder mit Anzahl der Pferde aufstellen](#script11)
                
---

<a name="script1"></a>

# Einheit automatisch bestätigen
            
Hier ein Beispiel, wie man ganz einfach eine Einheit bestätigt. Wird der Script
ausgeführt, wird die Einheit bestätigt. Das macht zum Beispiel bei Einheiten Sinn,
die bis ans Lebensende immer das Selbe tun und keine Interaktion benötigen - z.B.
Wahrnehmung lernen.

<pre class="example">

if (!unit.isOrdersConfirmed()) {
  unit.setOrdersConfirmed(true);
}
</pre>
            

Die Bedingung <tt>unit.isOrdersConfirmed()</tt> ist immer dann hilfreich, wenn man Befehle nicht doppelt geben will. Zum Beispiel, wenn aus Versehen der Script doppelt ausgeführt wird. <tt>unit</tt> ist dabei das Objekt der Einheit und enthält alle Informationen über diese Einheit und indirekt über die gesamte aktuell geladene Welt. Dazu aber später mehr.

Mit <tt>unit.setOrdersConfirmed()</tt> wird dann die Einheit bestätigt, so wie man es von Magellan mit der Tastenkombination STRG+B kennt.

---
<a name="script2"></a>

# Pferdedressur
            
Mit Hilfe des folgenden Scripts kann man einer Einheit, die das Talent Pferdedressur besitzt sagen, dass sie nur dann Pferde aus der Region dressieren soll, wenn es mehr als 50 Pferde in der aktuellen Region gibt. Ansonsten wird einfach Pferdedressur gelernt.

<pre class="example">

if (!unit.isOrdersConfirmed()) {
  if (unit.getRegion().getHorses()>=50) {
    helper.setOrder(unit,"MACHEN Pferd");
  } else {
    helper.setOrder(unit,"LERNEN Pferdedressur");
  }

  if (helper.getItemCount(unit,"Pferd")==0) {
    unit.setOrdersConfirmed(true);
  }
}
</pre>
            

Hier sind zwei Sachen neu. Zum einen liefert
<tt>unit.getRegion()</tt>
ein Objekt vom Typ Region. Es enthält alle Informationen zur Region, in der sich die
Einheit befindet. Der andere Punkt ist
<tt>helper.setOrder(unit,"")</tt>
. Damit werden die Befehle der Einheit gesetzt - besser gesagt überschrieben. Alle
anderen Befehle dieser Einheit werden gelöscht - also Vorsicht!

---
<a name="script3"></a>

# Kräuter übergeben
            
Der folgende Script überprüft, ob die aktuelle Einheit die Einheit mit der Nummer "i2de" sieht - sprich, ob sie sich in der Region befindet. Wenn dem so ist, übergibt sie alle Kräuter, die sie besitzt, dieser Einheit. Im Falle von i2de handelt es sich um einen Transporter, der alle Kräuter aufsammelt und von A nach B transportiert (siehe unten).

<pre class="example">

if (!unit.isOrdersConfirmed()) {
  if (helper.unitSeesOtherUnit("i2de")) {
    helper.addOrder(unit,"; Kräuterübergabe an Transporter:");
    helper.addOrder(unit,"GIB i2de KRÄUTER ; nach Rolkos");
    unit.setOrdersConfirmed(true);
  }
}
</pre>


Hier ist <tt>helper.addOrder()</tt> neu. Damit wird an den aktuellen Befehl der Einheit eine neue Zeile hinzugefügt.

---
<a name="script4"></a>

# Transporter automatisieren
            
Dieser Script ist ganz hilfreich für die Entwicklung eigener Scripte für Transporter, die zwischen bestimmten Regionen pendeln und pro Region bestimmte Dinge entladen.

<pre class="example">

if (!unit.isOrdersConfirmed()) {

  // ------- Nordende --------
  if (helper.unitIsInRegion("Nordende")) {
    helper.addOrder("; Übergaben in Nordende:");
    if (helper.getItemCount(unit,"Öl") > 0 
        || helper.getItemCount(unit,"Oil") > 0) {
      helper.addOrder("GIB djm1 ALLES Öl ; Madam Kuranha");
    }
    if (helper.getItemCount(unit,"Weihrauch") > 0) {
      helper.addOrder("GIB djm1 ALLES Weihrauch ; Madam Kuranha");
    }
    if (helper.getItemCount(unit,"Gewürz") > 0) {
      helper.addOrder("GIB djm1 ALLES Gewürz ; Madam Kuranha");
    }
    if (helper.getItemCount(unit,"Holz") > 0) {
      helper.addOrder("GIB 5u5k ALLES Holz ; Burgenbauer Archito");
    }
    if (helper.getItemCount(unit,"Silver") > 0 
        || helper.getItemCount(unit,"Silber") > 0) {
      helper.addOrder("GIB d7b4 ALLES Silber; Magistrat");
    }
    unit.setOrdersConfirmed(true);

  // ------- Rolkos --------
  } else if (helper.unitIsInRegion("Rolkos")) {
    helper.addOrder("; Übergabe in Rolkos:");
    if (helper.getItemCount(unit,"Balsam") > 0) {
      if (helper.unitSeesOtherUnit("e4Lx")) {
        helper.addOrder("GIB e4Lx ALLES Balsam ; Kutscher");
      } else {
        helper.addOrder("GIB ym52 ALLES Balsam ; Madam Rhian");
      }
    }
    if (helper.getItemCount(unit,"Eisen") > 0) {
      helper.addOrder("GIB 8sxu ALLES Eisen ; Schmied Hebel");
    }
    if (helper.unitSeesOtherUnit("e4Lx")) {
      helper.addOrder("GIB e4Lx KRÄUTER ; Kutscher");
    } else {
      helper.addOrder("GIB j8sn KRÄUTER ; Lehrling Pfurx");
    }
    unit.setOrdersConfirmed(true);
  }
}
</pre>
---
<a name="script5"></a>

# Schmiede automatisieren
            
Dieser Script ist ganz nützlich, wenn man einen Produzenten hat, der Sachen herstellt
und diese dann dynamisch an einen Transporter übergeben soll. Im vorliegenden Falle
handelt es sich um einen Waffenbauer, der mal die eine und mal die andere Waffe
baut. Man könnte das jetzt noch verfeinern und diesen Code in eine Methode gießen
und die Liste der möglichen Transporter übergeben. Hier wird das Gewicht nicht
beachtet.

<pre class="example">

if (!unit.isOrdersConfirmed()) {

  boolean bihaender = (helper.getItemCount(unit,"Bihänder") > 0);
  boolean schwert = (helper.getItemCount(unit,"Schwert") > 0);
  boolean bogen = (helper.getItemCount(unit,"Bogen") > 0);
  boolean armbrust = (helper.getItemCount(unit,"Armbrust") > 0);
  boolean speer = (helper.getItemCount(unit,"Speer") > 0);
  boolean kettenhemd = (helper.getItemCount(unit,"Kettenhemd") > 0);

  ArrayList transporters = new ArrayList();
  transporters.add("x6ct");
  
  helper.addOrder("; Transfer nach Dovin ");

  for (String transporter : transporters) {
    if (helper.unitSeesOtherUnit(transporter)) {
      if (bihaender) {
        helper.addOrder("GIB "+transporter+" ALLES Bihänder");
      }
      if (schwert) {
        helper.addOrder("GIB "+transporter+" ALLES Schwert");
      }
      if (bogen) {
        helper.addOrder("GIB "+transporter+" ALLES Bogen");
      }
      if (armbrust) {
        helper.addOrder("GIB "+transporter+" ALLES Armbrust");
      }
      if (speer) {
        helper.addOrder("GIB "+transporter+" ALLES Speer");
      }
      if (kettenhemd) {
        helper.addOrder("GIB "+transporter+" ALLES Kettenhemd");
      }

      break;
    }
  }

  unit.setOrdersConfirmed(true);
}
</pre>

---
<a name="script6"></a>

# Einheiten ausbilden
            
Dies ist ein Script, der es einfach macht, Einheiten auszubilden und sich so wenig
wie möglich drum kümmern zu müssen. Dies ist eine Funktion. Ich rufe sie bei all
meinen Soldateneinheiten auf. Die angegebene Einheit lernt entsprechend ihrer
bestehenden Talente auf ein bestimmtes Niveau. Ein Beispielaufruf ist weiter unten
beschrieben.
<pre class="example">

soldier(Unit unit, int level, String talent, String waffe, 
        boolean taktiker, boolean held, boolean lerne, 
        boolean bewache) {
  if (helper.getLevel(unit,"Taktik") < level && taktiker && lerne) {
    helper.setOrder("LERNE Taktik");
    unit.setOrdersConfirmed(true);
  } else if (helper.getLevel(unit,talent) < level && lerne) {
    helper.setOrder("LERNE "+talent);
    unit.setOrdersConfirmed(true);
  } else if (helper.getLevel(unit,"Ausdauer") < level) {
    helper.setOrder("LERNE Ausdauer");
    unit.setOrdersConfirmed(true);
  } else if (helper.getLevel(unit,"Reiten") < 1) {
    helper.setOrder("LERNE Reiten");
    unit.setOrdersConfirmed(true);
  } else if (helper.getLevel(unit,"Steuereintreiben") < level 
       && lerne) {
    helper.setOrder("LERNE Steuereintreiben");
    unit.setOrdersConfirmed(true);
  }

  helper.addOrder("; Soldat lernt in angegebener Reihenfolge");
  helper.addOrder("; folgende Talente:");
  if (taktiker && lerne) helper.addOrder("; lernt T"+level+" Taktik");
  if (lerne) helper.addOrder("; lernt T"+level+" "+talent);
  helper.addOrder("; lernt T"+level+" Ausdauer");
  helper.addOrder("; lernt T1 Reiten");
  if (lerne) helper.addOrder("; lernt T"+level+" Steuereintreiben");

  if (helper.getItemCount(unit,waffe)>0 && bewache) {
    helper.addOrder("BEWACHEN");
  }
}
</pre>
            
Hier ein Beispiel für den Aufruf der Funktion. Die angegebene Einheit soll
Stangenwaffen auf T5 lernen. Wenn sie einen Speer dabei hat, soll sie automatisch
die Region bewachen, in der sie sich befindet. Wenn die Einheit bereits T5
Stangenwaffen hat, lernt sie T5 Ausdauer, anschließend T1 Reiten und falls ihr dann
langweilig ist, auch noch T5 Steuereintreiben.

<pre class="example">

if (!unit.isOrdersConfirmed()) {
  String talent = "Stangenwaffen";
  String waffe  = "Speer";
  boolean taktiker = false;
  boolean held = false;
  boolean lerne = true;
  boolean bewache = true;

  soldier(unit, 5, talent, waffe, taktiker , held , lerne , bewache);
}
</pre>
---
<a name="script7"></a>

# Ganze Regionen bestätigen
    
Wenn man in einer Allianz arbeitet und die Reports untereinander teilt, dann ist es
nervig, wenn man die Reports der anderen importiert und diese Einheiten nicht
bestätigt sind. Man macht damit ja nix. Wendet man auf jede Region die folgenden
Funktion an, so werden alle Einheiten, außer der eigenen bestätigt. Manch einer mag
sag, dass kann man mit einem Menüpunkt in Magellan auch regeln....aber wozu zweimal
klicken, wenn einmal reicht.

<pre class="example">

import magellan.library.*;

clearRegion(Region region, String partei) {
  for (Unit unit : region.units()) {
    if (unit.getFaction().getID().toString().equals(partei)) continue;
    unit.setOrdersConfirmed(true);
  }
}
</pre>
        
Pro Region ruft man diese Funktion dann wie folgt auf.

<pre class="example">
clearRegion((Region)container,"ntc");
</pre>
            
Prinzipiell könnte man auch eine Funktion pro Partei-Container schreiben. Das geht natürlich auch.

---
<a name="script8"></a>

# Händler automatisieren
            
Dieser Script ist etwas komplexer. Es handelt sich auch wieder um eine Funktion, die
von einer Händler-Einheit aufgerufen werden kann. Diese Funktion untersucht, welches
Luxusgut in der Region gekauft werden kann und kauft das X-fache davon automatisch
ein. Wenn sie noch andere Luxusgüter in der Hand hat, dann verkauft sie diese. Zum
Schlus sucht sie in der Region noch nach Transport-Einheiten und übergibt ihnen die
eingekauften Luxusgüter der letzten Woche in Abhängigkeit der in der HashMap
übergebenen Anzahl, bis sie keine Waren mehr hat. Mit dieser Funktion und der für
den Transporter habe ich meinen Handelstransport komplett automatisiert und muss
mich um nichts mehr kümmern - außer das gewonnen Silber ausgeben.

<pre class="example">

import magellan.library.*;
import magellan.library.rules.*;

haendler(Unit haendler, int kaufenFaktor, Map transporters) {
  if (!haendler.isOrdersConfirmed()) {

    Region region = haendler.getRegion();
    ItemType luxuryItem = helper.getRegionLuxuryItem(region);

    // gibt es Luxusgüter zu kaufen?
    if (region.maxLuxuries() > 0) {
      helper.setOrder(haendler, "; ...");
      Map luxuryPrices = region.getPrices();
      helper.addOrder(haendler, "; --- Warenverkauf ---");
      for (LuxuryPrice price : luxuryPrices.values()) {
        if (price.getPrice()<0) continue; // Wareneinkauf
        List transfer = 
           haendler.getItemTransferRelations(price.getItemType());

        if (haendler.getItem(price.getItemType()) == null 
            && (transfer == null || transfer.size() == 0)) {
          // haben wir nicht
          helper.addOrder(haendler, 
             "; VERKAUFEN ALLES "+price.getItemType().getName());
        } else {
          // haben wir, können wir vertickern
          helper.addOrder(haendler, 
             "VERKAUFEN ALLES "+price.getItemType().getName());
        }
      }
      helper.addOrder(haendler, "; --- Wareneinkauf ---");
      helper.addOrder(haendler, 
         "KAUFEN "+(region.maxLuxuries()*kaufenFaktor)+
         " "+luxuryItem.getName());
    }

    boolean transfer = false;
    Item item = haendler.getItem(luxuryItem);
    int itemAmount = item.getAmount();

    if (item != null) {
      Iterator iterator = transporters.keySet().iterator();
      helper.addOrder("; --- Warenübergabe an Transporter ---");
      while (iterator.hasNext()) {
        String transporterId = iterator.next();
        int amount = transporters.get(transporterId);
      
        if (helper.unitSeesOtherUnit(transporterId)) {
          if (amount > itemAmount) amount = itemAmount;
          helper.addOrder(haendler,
             "GIB "+transporterId+" "+amount+
             " "+luxuryItem.getName()+" ; Transfer");
          itemAmount -= amount;
          transfer = true;
        }

        if (itemAmount <=0) break;
      }
    }

    unit.setOrdersConfirmed(true);
  }
}
</pre>
            
Um diesen Script aufzurufen, muss man ihm drei Dinge übergeben. Das Objekt der
Händler-Einheit. Den Faktor, der beim Einkauf verwendet werden soll und eine Liste
von Transportern mit deren maximaler Kapazität. Im folgenden Beispiel kann die
Einheit 8h4i 50 Luxusgüter aufnehmen und der Transporter x6ct 1000. Im allgemeinen
übersteigt das die tatsächlich vorhandenen Luxusgüter in der Region und es wird nur
der Wert angenommen. Es handelt sich bei den 1.000 also um eine Art Alias für "GIB
ALLES".

<pre class="example">

if (!unit.isOrdersConfirmed()) {

  HashMap transporters = new HashMap();
  transporters.put("8h4i",50);
  transporters.put("x6ct",1000);

  int kaufenFaktor = 3;

  haendler(unit, kaufenFaktor, transporters);
}
</pre>

---
<a name="script9"></a>

# Silber horten
            
Der folgende Befehl ist wieder einfach. Er zeigt aber, dass es möglich ist, die
englische Schreibweise zu verwenden, wenn man mit anderen Sprachen außer Deutsch
arbeitet.

<pre class="example">

if (!unit.isOrdersConfirmed()) {
  int silver = helper.getItemCount(unit,"Silver");
  if (silver == 0) silver = helper.getItemCount(unit,"Silber");

  if (silver > 0) {
    helper.addOrder("GIB 8uv9 ALLES Silber");
  }
  unit.setOrdersConfirmed(true);
}
</pre>

---
<a name="script10"></a>

# Schilder mit Luxusgütern aufstellen
            
Mit dem nachfolgenden Script kann man zu einer Liste von Regionen (nodeList ist eine
Liste von RegionIDs) ein Schild setzen, auf dem der aktuelle Luxuswarenpreis steht.
            
<pre class="example">

import magellan.library.*;

for (i = 0; i < nodeList.size(); i++) {
 Region region = world.getRegion(nodeList.get(i));
 if (region.maxLuxuries() > 0) {
   Iterator keyValuePairs = region.getPrices().entrySet().iterator();
   for (j = 0; j < region.getPrices().size(); j++) {
     Map.Entry entry = (Map.Entry) keyValuePairs.next();
     Object key = entry.getKey();
     Object value = entry.getValue();
     String itemName = "key:"+key.toString();
     String itemValue = "value:"+value.getPrice().toString();
     Sign sign = new Sign(itemName+" "+itemValue);
     region.addSign(sign);
   }
 }
}
</pre>

---
<a name="script11"></a>

# Schilder mit Anzahl der Pferde aufstellen
            
Hiermit werden Schilder aufgestellt, die zeigen, wie viele Pferde in einer Region stehen.

<pre class="example">

import magellan.library.*;
        
for (Region region : world.regions().values()) {
  if (region.getRegionType().isOcean()) continue;

  int horses = region.getHorses();
  if (horses == -1) continue;

  region.clearSigns();
  Sign sign = new Sign( ""+horses );
  region.addSign(sign);
} 
</pre>