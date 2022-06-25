let mode;
let w=1000;
let h=1000;

function setup() {
mode = 0;
createCanvas(1000,1000);
}

function draw() {
clear();

if(mode==0) {   //(0)   INTRO

fill(128);
textSize(50);
text("KOMM GUT NACH HAUSE",180,45);

textSize(25);
text("Leicht benommen von der gestrigen Nacht taumelst du durch die Tür des Clubs.",50,100);
text("Du bist bist zum Schluss geblieben, denn der letzte DJ hat echt nochmal brutal ",50,130);
text("abgerissen. “Jetzt ist es aber wirklich Zeit nach Hause zu gehen”, sagst du zu ",50,160);
text("dem überhaupt nicht mehr gesund aussehenden Typen, den du vorne links auf ",50,190);
text("der Tanzfläche kennengelernt hast. “Das war geisteskrank” lallt er dir entgegen ",50,220);
text("während er fast über die kleine Stufe am Ausgang stolpert.",50,250);


fill(255,150,0);
rect(250,350,500,80);

fill(128);
textSize(30);
text("CLICK HERE TO START",330,400);

if(mouseIsPressed && mouseX>250 && mouseX<750 && mouseY>350 && mouseY<430) {
    mode=1;}

}

if(mode==1) {   //(1)   STORY
    
    fill(128);
    textSize(25);
text("Larry, den du ein wenig stützen musst, damit er nicht umkippt, streckt dir seine ",50,70);
text("halbleere Wasserflasche entgegen. Als du ihn fragend anschaust sagt er: “Hier,",50,100);
text("du musst Trinken- stay Hydrated weisste?”",50,130);

    
    
    fill(255,150,0);
    rect(50,250,250,80);
    
    fill(128);
    textSize(30);
    text("ANNEHMEN",90,300);
    
    if(mouseIsPressed && mouseX>50 && mouseX<300 && mouseY>250 && mouseY<330) {
        mode=2;}

    fill(255,150,0);
    rect(700,250,250,80);

    fill(128);
    textSize(30);
    text("ABLEHNEN",740,300);
    
    if(mouseIsPressed && mouseX>700 && mouseX<950 && mouseY>250 && mouseY<430) {
        mode=3;}

}

 if(mode==2) {  //(2)   ANNEHMEN
    
        fill(128);
        textSize(25);
    text("Du trinkst einen großen Schluck aus der Flasche. “Das tut wirklich gut, echt lange ",50,70);
    text("nichts mehr getrunken” entgegnest du Larry. Aber als du dich umschaust ist Larry",50,100);
    text("auf einmal verschwunden, obwohl du dir sicher bist dass er gerade mit “Ja man,",50,130);
    text("Wasser ballert am meisten” geantwortet hat. Du beschließt ihn zu suchen. ",50,160);
    text("“Vielleicht hat er ja seine Jacke im Club vergessen”, denkst du, als du dich auf ",50,190);
    text("den Weg die Treppe herunter zur Garderobe machst.",50,220);
    text("Du betrittst den großen, spärlich beleuchteten Kellerraum. Es ist alles so sehr ",50,250);
    text("vernebelt, dass du deine Füße kaum sehen kannst. Im nächsten Moment ",50,280);
    text("bemerkst du ein leichtes ziehen im Magen und dir wird schwindelig. Du überlegst",50,310);
    text("ob du dich übergeben musst.",50,340);
    
        
        
        fill(255,150,0);
        rect(50,450,300,80);
        
        fill(128);
        textSize(30);
        text("ZUR TOILETTE",100,500);
        
        if(mouseIsPressed && mouseX>50 && mouseX<350 && mouseY>450 && mouseY<530) {
            mode=5;}
    
        fill(255,150,0);
        rect(650,450,300,80);
    
        fill(128);
        textSize(30);
        text("LARRY SUCHEN",680,500);
        
        if(mouseIsPressed && mouseX>650 && mouseX<950 && mouseY>450 && mouseY<530) {
            mode=4;}
    
}

if(mode==3) {   //(3)   ABLEHNEN

    fill(128);
    textSize(25);

text("Du lehnst ab. “Was weiß ich was der da rein gemischt hat”, denkst du, obwohl du",50,70);
text("einen immens großen Durst verspürst. Es dauert nicht lange bis dein Mund sich ",50,100);
text("so trocken anfühlt, dass du dich schließlich dazu entscheidest das Wasser",50,130);
text("anzunehmen. Du trinkst einen großen Schluck. Wie sehr du etwas zu trinken",50,160);
text("gebraucht hast, scheint dir jetzt bewusst zu werden. Deine Sicht klärt sich und du",50,190);
text("fühlst dich gar nicht mehr so vernebelt und benommen. Du schließt kurz die",50,220);
text("Augen- um zu genießen, dass sich in diesem Moment nicht alles dreht und",50,250);
text("entspannst dich. Das nächste was du bewusst wahrnimmst ist das Gefühl einer",50,280);
text("warmen Bettdecke die dich umschließt. Als du die Augen öffnest, findest du dich",50,310);
text("in einem Bett wieder.",50,340);

fill(255,150,0);
        rect(50,370,300,80);
        
        fill(128);
        textSize(30);
        text("AUFSPRINGEN",90,420);
        
        if(mouseIsPressed && mouseX>50 && mouseX<350 && mouseY>370 && mouseY<450) {
            mode=6;}
    
        fill(255,150,0);
        rect(650,370,300,80);
    
        fill(128);
        textSize(30);
        text("WEITERSCHLAFEN",660,420);
        
        if(mouseIsPressed && mouseX>650 && mouseX<950 && mouseY>370 && mouseY<450) {
            mode=7;}

//(6) oder (7)

}

if(mode==4) {   //(4)   LARRY SUCHEN
    
    fill(128);
    textSize(25);

text("Du beschließt weiter zu suchen. Das flaue Gefühl wird schon wieder weggehen.",50,70);
text("Du bahnst dir den Weg durch den Club und er kommt dir auf einmal endlos groß",50,100);
text("vor. Irgendwie hast du es schwer dich zu Orientieren. Immer wieder meinst du,",50,130);
text("durch den Nebel die Silhouette von Larry zu sehen aber wenn du dich näherst ist",50,160);
text("er auf einmal verschwunden. Aus der Ferne hörst du seine Stimme die immer",50,190);
text("wieder “Trink!” sagt. Seine Betonung wird von mal zu mal immer eindringlicher.",50,220);
text("Larrys Stimme wird lauter und du hast fast das Gefühl er würde dich anschreien.",50,250);
text("Aber du kannst ihn einfach nicht finden.",50,280);
text("Auf einmal spürst du einen schweren Griff der dich nach hinten zieht.",50,310);

    
    fill(255,150,0);
    rect(50,350,350,80);
    
    fill(128);
    textSize(30);
    text("UM DICH SCHLAGEN",70,400);
    
    if(mouseIsPressed && mouseX>50 && mouseX<400 && mouseY>350 && mouseY<430) {
        mode=9;}

    fill(255,150,0);
    rect(600,350,350,80);

    fill(128);
    textSize(30);
    text("COOL BLEIBEN",670,400);
    
    if(mouseIsPressed && mouseX>600 && mouseX<950 && mouseY>350 && mouseY<430) {
        mode=8;}

}

if(mode==5) {   //(5)   ZUR TOILETTE
    
    fill(128);
    textSize(25);

text("Du gehst straight zur Klokabine weil das Gefühl stärker wird, dass du dich",50,70);
text("übergeben musst. Der Gestank nach Pisse und abgestandenem Bier macht es",50,100);
text("auch nicht besser. Im Vorbeigehen wirfst du einen Blick in den Spiegel und fragst",50,130);
text("dich unterbewusst, seit wann dein Gesicht so eigenartige Proportionen hat. Aber",50,160);
text("du hast keine Zeit dir darüber Gedanken zu machen und beugst dich über die",50,190);
text("Kloschüssel. ",50,220);
text("Du blickst in die Kloschüssel und da wo eigentlich das Wasser sein sollte, tut sich",50,250);
text("eine bodenlose Tiefe auf. Du verspürst einen starken Sog an deinem Hinterkopf",50,280);
text("und alles wird schwarz.",50,310);

fill(255,150,0);
rect(250,450,500,80);

fill(128);
textSize(30);
text("CLICK HERE TO RESTART",300,500);

if(mouseIsPressed && mouseX>250 && mouseX<750 && mouseY>450 && mouseY<530) {
    mode=0;}

}

if(mode==6) {   //(6)   AUFSPRINGEN
   
    fill(128);
    textSize(25);

text("",50,70);
text("",50,100);
text("",50,130);
text("",50,160);
text("",50,190);
text("",50,220);
text("",50,250);
text("",50,280);
text("",50,310);
text("",50,330);



fill(255,150,0);
rect(250,450,500,80);
 
fill(128);
textSize(30);
text("CLICK HERE TO RESTART",300,500);
 
if(mouseIsPressed && mouseX>250 && mouseX<750 && mouseY>450 && mouseY<530) {
    mode=0;}



//NEUSTART

}                                                                                                         

if(mode==7) {   //(7)   WEITERSCHLAFEN

    fill(128);
    textSize(25);

text("",50,70);
text("",50,100);
text("",50,130);
text("",50,160);
text("",50,190);
text("",50,220);
text("",50,250);
text("",50,280);
text("",50,310);
text("",50,330);

fill(255,150,0);
        rect(50,450,300,80);
        
        fill(128);
        textSize(30);
        text("10",100,500);
        
        if(mouseIsPressed && mouseX>50 && mouseX<350 && mouseY>450 && mouseY<530) {
            mode=10;}
    
        fill(255,150,0);
        rect(650,450,300,80);
    
        fill(128);
        textSize(30);
        text("11",680,500);
        
        if(mouseIsPressed && mouseX>650 && mouseX<950 && mouseY>450 && mouseY<530) {
            mode=11;}


//(10) oder (11)
}

if(mode==8) {   //(8)   COOL BLEIBEN
    fill(128);
    textSize(25);

text("Du beschließt cool zu bleiben und drehst dich langsam zu der Hand um, die dich",50,70);
text("an der Schulter hält. Vor dir steht jetzt der Security und bittet dich zu gehen, weil",50,100);
text("die Party vorbei ist. Du willst ihm erklären, dass du auf der Suche nach deinem",50,130);
text("Freund Larry bist, der vermutlich gerade an der Garderobe ist. Aber egal wie sehr ",50,160);
text("du es versuchst, keine Worte verlassen deinen Mund. Du versuchst dich mit",50,190);
text("Händen und Füßen zu verständigen. Der Security schaut dich fragend und ein",50,220);
text("wenig mitleidig an. Dann zückt er sein Funkgerät aber du verstehst nicht was er",50,250);
text("sagt. Anstatt Worte scheinen die Laute von Trompeten den Raum zu",50,280);
text("durchdringen. Dein Blick wird schwammig und alles fängt an zu rauschen. Du",50,310);
text("schließt die Augen. Als du sie wieder öffnest, blicken dich fremde Gesichter in",50,340);  
text("einem grell erleuchteten Raum an. Du bist im Krankenwagen.",50,370);  

fill(255,150,0);
rect(250,550,500,80);

fill(128);
textSize(30);
text("CLICK HERE TO RESTART",300,600);

if(mouseIsPressed && mouseX>250 && mouseX<750 && mouseY>550 && mouseY<730) {
    mode=0;}

//NEUSTART
}

if(mode==9) {   //(9)   WILD UM DICH SCHLAGEN
    fill(128);
    textSize(25);

text("Du erschreckst dich so sehr vor dem Griff auf deine Schulter, dass sich dein",50,70);
text("kompletter Körper auf Kämpfen einstellt. Du schlägst wild um dich und versuchst",50,100);
text("dich aus dem Griff der dir unbekannten Person zu befreien. Mit jedem Schlag, mit",50,130);
text("jedem Tritt und mit jeder schnellen Bewegung hält die Person dich ein wenig",50,160);
text("stärker fest. Als du komplett Bewegungsunfähig bist, spürst du, wie dir der Boden",50,190);
text("unter den Füßen weggerissen wird. Jetzt erkennst du, dass du von einem",50,220);
text("Security festgehalten wirst. Er trägt dich die Treppe hoch und lässt dich unsanft",50,250);
text("vor die Tür des Clubs fallen. “Jetzt ist Schicht im Schacht! Feierabend! Geh nach",50,280);
text("Hause!” wirft dir der Security entgegen und knallt mit einem Schwung die",50,310);
text("schwere Clubtür zu.",50,340);   
text("Du liegst auf dem kalten Asphaltboden und weißt ehrlich gesagt gar nicht mehr",50,370);
text("so richtig wo du bist und wie du eigentlich dahin gekommen bist. Dich übermannt",50,400);
text("ein starkes Gefühl der Müdigkeit.",50,430);

fill(255,150,0);
    rect(50,550,350,80);
    
    fill(128);
    textSize(30);
    text("NACH HAUSE GEHEN",70,600);
    
    if(mouseIsPressed && mouseX>50 && mouseX<400 && mouseY>550 && mouseY<630) {
        mode=12;}

    fill(255,150,0);
    rect(600,550,350,80);

    fill(128);
    textSize(30);
    text("EINSCHLAFEN",670,600);
    
    if(mouseIsPressed && mouseX>600 && mouseX<950 && mouseY>550 && mouseY<630) {
        mode=13;}

//einschlafen oder nach Hause gehen
}

if(mode==10) {  //(10)  WEITERSCHLAFEN
    fill(128);
    textSize(25);

text("",50,70);
text("",50,100);
text("",50,130);
text("",50,160);
text("",50,190);
text("",50,220);
text("",50,250);
text("",50,280);
text("",50,310);
text("",50,330);   

fill(255,150,0);
    rect(50,550,350,80);
   
    fill(128);
    textSize(30);
    text("14",70,600);
   
    if(mouseIsPressed && mouseX>50 && mouseX<400 && mouseY>550 && mouseY<630) {
        mode=14;}
 
    fill(255,150,0);
    rect(600,550,350,80);
 
    fill(128);
    textSize(30);
    text("15",670,600);
   
    if(mouseIsPressed && mouseX>600 && mouseX<950 && mouseY>550 && mouseY<630) {
        mode=15;}


//(14) oder (15)
}

if(mode==11) {  //(11)  AUFSPRINGEN
    fill(128);
    textSize(25);

text("",50,70);
text("",50,100);
text("",50,130);
text("",50,160);
text("",50,190);
text("",50,220);
text("",50,250);
text("",50,280);
text("",50,310);
text("",50,330);

fill(255,150,0);
rect(250,550,500,80);
 
fill(128);
textSize(30);
text("CLICK HERE TO RESTART",300,600);
 
if(mouseIsPressed && mouseX>250 && mouseX<750 && mouseY>550 && mouseY<730) {
    mode=0;}


//NEUSTART
}

if(mode==12) {  //(12)  NACH HAUSE GEHEN
    fill(128);
    textSize(25);

text("Du raffst dich auf, entfernst dich leicht taumelnd vom Club und blickst dabei auf ",50,70);
text("eine endlos wirkende Straße. Am Horizont geht die Sonne auf. Du siehst wie alle",50,100);
text("Farben miteinander verschmelzen und doch für sich allein, ganz besonders",50,130);
text("strahlen. Es ist das schönste was du seit langem gesehen hast. Aus Gründen,",50,160);
text("die dir komplett unbekannt sind, rollt dir eine kleine Freudenträne über die",50,190);
text("Wange. “Schöner könnte ein Morgen nicht sein” denkst du als dir keine einzige",50,220);
text("Sache einfällt, die diesen Moment toppen könnte. Du läufst diese Straße",50,250);
text("bestimmt schon 25 Minuten entlang und genießt das morgendliche",50,280);
text("Vogelgezwitscher als du von einer alten Dame angesprochen, die auf einmal von",50,310);
text("der Seite in deinem Blickfeld auftaucht. Sie lächelt dich an und sagt “Schönen",50,340);   
text("Guten Morgen”",50,370); 

fill(255,150,0);
rect(50,450,350,80);

fill(128);
textSize(30);
text("FREUNDLICH GRüßEN",65,500);

if(mouseIsPressed && mouseX>50 && mouseX<400 && mouseY>450 && mouseY<530) {
    mode=28;}

fill(255,150,0);
rect(600,450,350,80);

fill(128);
textSize(30);
text("OMI UMBOXEN",670,500);

if(mouseIsPressed && mouseX>600 && mouseX<950 && mouseY>450 && mouseY<530) {
    mode=29;}

//freundlich grüßen oder Omi umboxen
}

if(mode==13) {  //(13)  EINSCHLAFEN
    fill(128);
    textSize(25);

text("Du schließt die Augen und schon bist du weg. Wie lange? Keine Ahnung. Der",50,70);
text("überraschend erholsame Schlaf wird von einer dezenten Vibration unterbrochen.",50,100);
text("Du lässt deine Augen geschlossen und versucht das Geräusch zu deuten. Die",50,130);
text("Vibration wird von einem tiefen bassigen geräusch untermalt, klingt aber sehr",50,160);
text("sinnlich. Zuerst dachtest du, dass in der Ferne ein schweres Fahrzeug",50,190);
text("vorbeifährt, aber mit fortschreitender Zeit bemerkst du, dass das Geräusch ganz",50,220);
text("nah ist. Als du das feststellst spürst du an deinem Unterarm etwas kitzeliges und",50,250);
text("weiches. Du erschreckst dich ein wenig und öffnest schlagartig deine Augen. Vor",50,280);
text("dir siehst du aber gar nichts gruseliges, wie du zuerst erwartest, als du die zwei ",50,310);
text("riesigen schwarzen Augen siehst, die dich anstarren. Als sich dein",50,340);   
text("schlaftrunkener Blick langsam aufklärt, siehst du eine unglaublich süße, weiße",50,370);   
text("Katze, die sich schnurrend an deinem Arm reibt. Du beobachtest sie und",50,400);   
text("entdeckst, dass ihre Nase von einem total putzigen schwarzen Fleck in Form von",50,430);   
text("einem Herz geziert wird. Du rappelst dich ein wenig auf. Du und die Katze halten",50,460);   
text("Blickkontakt.",50,490);  

fill(255,150,0);
rect(50,650,400,80);

fill(128);
textSize(30);
text("AUFSTEHEN UND GEHEN",65,700);

if(mouseIsPressed && mouseX>50 && mouseX<400 && mouseY>650 && mouseY<730) {
    mode=16;}

fill(255,150,0);
rect(600,650,350,80);

fill(128);
textSize(30);
text("KATZE STREICHELN",630,700);

if(mouseIsPressed && mouseX>600 && mouseX<950 && mouseY>650 && mouseY<730) {
    mode=17;}

//katze streicheln oder aufstehen und gehen
}

if(mode==14) {  //(14)
    fill(128);
    textSize(25);

text("",50,70);
text("",50,100);
text("",50,130);
text("",50,160);
text("",50,190);
text("",50,220);
text("",50,250);
text("",50,280);
text("",50,310);
text("",50,330);    

fill(255,150,0);
    rect(50,350,350,80);
   
    fill(128);
    textSize(30);
    text("18",70,400);
   
    if(mouseIsPressed && mouseX>50 && mouseX<400 && mouseY>350 && mouseY<430) {
        mode=18;}
 
    fill(255,150,0);
    rect(600,350,350,80);
 
    fill(128);
    textSize(30);
    text("19",670,400);
   
    if(mouseIsPressed && mouseX>600 && mouseX<950 && mouseY>350 && mouseY<430) {
        mode=19;}


//(18) oder (19)
}

if(mode==15) {  //(15)
    fill(128);
    textSize(25);

text("",50,70);
text("",50,100);
text("",50,130);
text("",50,160);
text("",50,190);
text("",50,220);
text("",50,250);
text("",50,280);
text("",50,310);
text("",50,330);   

fill(255,150,0);
rect(250,650,500,80);
 
fill(128);
textSize(30);
text("CLICK HERE TO RESTART",400,700);
 
if(mouseIsPressed && mouseX>250 && mouseX<750 && mouseY>650 && mouseY<730) {
    mode=0;}



//NEUSTART
}

if(mode==16) {  //(16)  AUFSTEHEN UND GEHEN
    fill(128);
    textSize(25);

text("“Mama hat gesagt, man soll keine fremden Katzen streicheln”, denkst du als du",50,70);
text("den Blick von der Katze abwendest. Jetzt willst du aber wirklich nach Hause.",50,100);
text("“Aber…. Wo bin ich hier überhaupt?” fragst du dich, während du ohne Ziel deinen",50,130);
text("schlecht gewählten Schlafplatz verlässt. Du würdest dir gern ein Taxi rufen aber",50,160);
text("als du dein Handy aus der Tasche ziehst, blinkt nur die rote Batterieanzeige. Dein",50,190);
text("Akku ist leer. “TELEFONZELLEN” denkst du laut, absolut begeitert davon, dass",50,220);
text("die Dinger ja sicherlich noch existieren. Du beschließt dich auf die Suche nach",50,250);
text("einer Telefonzelle zu begeben um dir ein Taxi zu rufen und gehst los. nach",50,280);
text("einigen Metern gabelt sich der Weg. Links verläuft eine Hauptstraße und rechts",50,310);
text("scheint sich ein Wohngebiet zu eröffnen.",50,340); 

fill(255,150,0);
rect(50,400,350,80);

fill(128);
textSize(30);
text("HAUPTSTRAßE",110,450);

if(mouseIsPressed && mouseX>50 && mouseX<400 && mouseY>400 && mouseY<470) {
    mode=22;}

fill(255,150,0);
rect(600,400,350,80);

fill(128);
textSize(30);
text("WOHNGEBIET",670,450);

if(mouseIsPressed && mouseX>600 && mouseX<950 && mouseY>400 && mouseY<470) {
    mode=23;}


//durch Wohngebiet oder Hauptstraße folgen
}

if(mode==17) {  //(17)  KATZE STREICHELN
    fill(128);
    textSize(25);

text("Du streckst die Hand in Richtung Katze. Sie reibt sich daran und schmust.",50,70);
text("Schnell entwickelt ihr eine Symbiose. Du streichelst ihren flauschigen Nacken",50,100);
text("und merkst durch das immer intensiver werdende schnurren, dass es ihr gefällt.",50,130);
text("Du streichelst die Katze ewig, aber es kommt dir vor als würde keine Zeit",50,160);
text("vergehen. Sie dreht sich auf den Bauch und du interpretierst das als",50,190);
text("Aufforderung diesen zu kraulen. Doch sofort als du den Bauch berührst, rollt sich",50,220);
text("die Katze, mit deiner Hand in ihrer Mitte ein und gräbt ihre Krallen tief in deine",50,250);
text("Hand. Bevor du reagieren kannst, denn eigentlich möchtest du deine Hand jetzt",50,280);
text("schnell wegziehen, spürst du einen kräftigen Biss. “AUA” schreist du",50,310);
text("erschrocken. Viel schlimmer als die physischen Schmerzen an der Bisswunde ist",50,340);
text("aber das brennende ziehen, welches sich deinen Arm herauf, durch deine Adern",50,370);   
text("pulsierend, richtung Körpermitte brennt. Langsam steigt das Gefühl auf, bis es",50,400);   
text("dein Herz erreicht. Jetzt geht alles sehr schnell. Weißer Schaum beginnt aus",50,430);   
text("deinem Mund zu quellen. Das letzte was du spürst ist ein quälender Stich in",50,460);   
text("deinem Herzen. ",50,490); 


fill(255,150,0);
rect(250,550,500,80);

fill(128);
textSize(30);
text("CLICK HERE TO RESTART",300,600);

if(mouseIsPressed && mouseX>250 && mouseX<750 && mouseY>550 && mouseY<630) {
    mode=0;}


//NEUSTART
}

if(mode==18) {  //(18)
    fill(128);
    textSize(25);

text("",50,70);
text("",50,100);
text("",50,130);
text("",50,160);
text("",50,190);
text("",50,220);
text("",50,250);
text("",50,280);
text("",50,310);
text("",50,330);    

fill(255,150,0);
rect(250,550,500,80);
 
fill(128);
textSize(30);
text("WEITERLESEN",300,600);
 
if(mouseIsPressed && mouseX>250 && mouseX<750 && mouseY>550 && mouseY<730) {
    mode=7;}


//BACK TO (7) oder (3)
}

if(mode==19) {  //(19)
    fill(128);
    textSize(25);

text("",50,70);
text("",50,100);
text("",50,130);
text("",50,160);
text("",50,190);
text("",50,220);
text("",50,250);
text("",50,280);
text("",50,310);
text("",50,330);   

fill(255,150,0);
        rect(50,450,300,80);
        
        fill(128);
        textSize(30);
        text("20",100,500);
        
        if(mouseIsPressed && mouseX>50 && mouseX<350 && mouseY>450 && mouseY<530) {
            mode=20;}
    
        fill(255,150,0);
        rect(650,450,300,80);
    
        fill(128);
        textSize(30);
        text("21",680,500);
        
        if(mouseIsPressed && mouseX>650 && mouseX<950 && mouseY>450 && mouseY<530) {
            mode=21;}


//(20) oder (21)
}

if(mode==20) {  //(20)
    fill(128);
    textSize(25);

text("",50,70);
text("",50,100);
text("",50,130);
text("",50,160);
text("",50,190);
text("",50,220);
text("",50,250);
text("",50,280);
text("",50,310);
text("",50,330); 

fill(255,150,0);
rect(250,350,500,80);
 
fill(128);
textSize(30);
text("WEITERLESEN",300,400);
 
if(mouseIsPressed && mouseX>250 && mouseX<750 && mouseY>350 && mouseY<430) {
    mode=18;}


//NEUSTART
}

if(mode==21) {  //(21)
    fill(128);
    textSize(25);

text("",50,70);
text("",50,100);
text("",50,130);
text("",50,160);
text("",50,190);
text("",50,220);
text("",50,250);
text("",50,280);
text("",50,310);
text("",50,330);   

fill(255,150,0);
rect(250,550,500,80);
 
fill(128);
textSize(30);
text("CLICK HERE TO RESTART",300,600);
 
if(mouseIsPressed && mouseX>250 && mouseX<750 && mouseY>550 && mouseY<730) {
    mode=0;}

//NEUSTART
}

if(mode==22) {  //(22)  HAUPTSTRA?E
    fill(128);
    textSize(25);

text("Du beschließt der Hauptstraße zu folgen. Logisch, da wird bestimmt eine",50,70);
text("Telefonzelle zu finden sein. Der Straßenzug wirkt ausgestorben. “Vermutlich ist",50,100);
text("es auch erst 6Uhr morgens. An einem Sonntag. Wer ist da schon unterwegs.”,",50,130);
text("erschließt du dir. So durchgefeiert wie du bist ist es anstrengend zu laufen, ohne",50,160);
text("ständig fast das Gleichgewicht zu verlieren.  Du läufst über eine Ampel, ohne",50,190);
text("darauf zu achten ob rot oder grün ist. Du willst bloß endlich nach Hause.",50,220);
text("Offensichtlich war es rot. Denn in dem Moment als du die Straße betrittst spürst",50,250);
text("du nur einen dumpfen Schlag auf deine Seite. Bevor deine Wahrnehmung dich",50,280);
text("verlässt siehst du was geschehen ist. Du wurdest von einem Taxi überfahren.",50,310);

fill(255,150,0);
rect(250,350,500,80);

fill(128);
textSize(30);
text("CLICK HERE TO RESTART",300,400);

if(mouseIsPressed && mouseX>250 && mouseX<750 && mouseY>350 && mouseY<430) {
    mode=1;}

//NEUSTART
}

if(mode==23) {  //(23)  WOHNGEBIET
    fill(128);
    textSize(25);

text("Du betrittst das Wohngebiet. Du bist so fertig von der Nacht und noch immer",50,70);
text("fühlst du dich etwas benommen und jeder Schritt ist unglaublich anstrengend.",50,100);
text("Deine Kräfte verlassen dich langsam. Du wägst deine Möglichkeiten ab. “Wie",50,130);
text("wahrscheinlich ist es, dass hier irgendwo eine Telefonzelle ist?”. Langsam bist du",50,160);
text("verzweifelt. Jeder Schritt lässt dich weiter an deiner Entscheidung zweifeln, hier",50,190);
text("noch eine Telefonzelle zu finden. Du überlegst, ob du einfach an einem der",50,220);
text("Einfamilienhäuser hältst und klingelst. Vielleicht kann dir jemand ein Taxi rufen",50,250);
text("oder dir zumindest sagen wo du gerade bist. Selbst wenn nicht, du hast auch so",50,280);
text("unglaublich großen Durst. Vielleicht bekommst du ja auch einfach ein Glas",50,310);
text("Wasser. “Stay hydrated” bildest du dir ein von Larrys Stimme zu hören. Du",50,340);
text("schaust dich um, um die Vertrauenswürdigkeit der Hauseingänge zu analysieren.",50,370);   
text("zwei Häuser fallen dir ins Auge. Das eine blau- mit einem Schild mit der",50,400);   
text("Aufschrift “Achtung! bissiger Hund”. Das andere Haus ist strahlend gelb und hat",50,430);   
text("eine süße Fußmatte auf der dich das Foto eines Hundewelpen herzlich",50,460);   
text("willkommen heißt.",50,490);     

fill(255,150,0);
rect(50,550,350,80);

fill(128);
textSize(30);
text("BLAUES HAUS",110,600);

if(mouseIsPressed && mouseX>50 && mouseX<400 && mouseY>550 && mouseY<630) {
    mode=25;}

fill(255,150,0);
rect(600,550,350,80);

fill(128);
textSize(30);
text("GELBES HAUS",680,600);

if(mouseIsPressed && mouseX>600 && mouseX<950 && mouseY>550 && mouseY<630) {
    mode=24;}


//bei gelben Haus oder bei blauem Haus klingeln
}

if(mode==24) {  //(24)  GELBES HAUS
    fill(128);
    textSize(25);

text("Du läufst zum gelben Haus und klingelst. Es passiert nichts. Als du gerade",50,70);
text("wieder gehen willst, öffnet sich die Tür. Eine junge brünette Frau öffnet die Tür.",50,100);
text("Bevor du etwas sagen kannst beginnt sie dich anzuschreien. “Was wollen sie",50,130);
text("hier? Es ist früh am Morgen. Was fällt ihnen ein zu dieser unchristlichen Uhrzeit",50,160);
text("hier zu klingen? Verpissen sie sich, oder ich rufe die Polizei.” Nachdem ihre",50,190);
text("Hasstirade ein Ende hat, blickt sie dich weiter an. Du beschließt, dennoch um",50,220);
text("Hilfe zu bitten, denn du weißt wirklich nicht, was du sonst machen sollst.",50,250);

fill(255,150,0);
        rect(50,350,350,80);
        
        fill(128);
        textSize(30);
        text("NACH TAXI FRAGEN",80,400);
        
        if(mouseIsPressed && mouseX>50 && mouseX<400 && mouseY>350 && mouseY<430) {
            mode=26;}
    
        fill(255,150,0);
        rect(600,350,350,80);
    
        fill(128);
        textSize(30);
        text("UM WASSER BITTEN",620,400);
        
        if(mouseIsPressed && mouseX>600 && mouseX<950 && mouseY>350 && mouseY<430) {
            mode=27;}
    
//Nach taxi oder wasser fragen
}

if(mode==25) {  //(25)  BLAUES HAUS
    fill(128);
    textSize(25);

text("“Leute mit Hunden sind doch eigentlich immer ganz nett”, denkst du, als du die",50,70);
text("Klingel des blauen Hauses betätigst. Noch bevor du den Knopf ganz",50,100);
text("durchgedrückt hast, hörst du aggressives bellen hinter der Tür. Es dauert eine",50,130);
text("gefühlte Ewigkeit bis sich die Tür öffnet. In der Zeit hinterfragst du die",50,160);
text("Entscheidung bei einer fremden Person geklingelt zu haben. Dann öffnet sich die",50,190);
text("Tür. Ein volltätowierter großer Typ steht vor dir und schaut dich verschlafen an.",50,220);
text("Du erklärst ihm deine Situation aber er scheint dich nicht zu verstehen. Mit einem",50,250);
text("überraschend Mitfühlenden Blick bittet er dich herein und zeigt auf die Couch. Du",50,280);
text("setzt dich wortlos hin. Er blickt dich sorgenvoll an. Du willst den Blick erwidern ",50,310);
text("aber bemerkst, dass deine Wahrnehmung irgendwie Spielchen mit dir zu spielen",50,340);
text("scheint. Das Gesicht des Typen in dessen Haus du sitzt nimmt eigenartige",50,370);   
text("Formen an. Auch der Hintergrund wird schwummrig. Du gibst alles um dich zu ",50,400);   
text("konzentrieren aber deine Augen lassen das nicht zu. Aufeinmal steht der Typ auf",50,430);   
text("und geht. Du bekommst Angst und überlegst ob du schnell rausrennen sollst.",50,460);   
text("Doch bevor du den Gedanken zu Ende denken kannst, kommt er wieder und hält",50,490);   
text("dir ein Glas Wasser hin.",50,520);    

fill(255,150,0);
rect(250,650,500,80);

fill(128);
textSize(30);
text("WEITERLESEN",400,700);

if(mouseIsPressed && mouseX>250 && mouseX<750 && mouseY>650 && mouseY<730) {
    mode=3;}

//CONTINUE TO (3)
}

if(mode==26) {  //(26)  TAXI
    fill(128);
    textSize(25);

text("Du stotterst “TAXI” und der Blick der Frau entspannt sich. Sie zückt ihr Telefon",50,70);
text("und gibt eine Nummer ein. Mit einer Geste zeigt sie dir, dass du warten sollst und",50,100);
text("schließt die Tür. Du setzt dich auf die Eingangsstufe und durch die geschlossene",50,130);
text("Tür hörst du, dass sie Telefoniert. Dann öffnet sich die Tür einen kleinen Spalt ",50,160);
text("und die Frau sagt “Kommt gleich wer”, bevor sie die Tür wieder schließt. Es",50,190);
text("dauert eine ganze Weile bis ein Wagen vorfährt. Dir fällt ein Stein vom Herzen,",50,220);
text("denn langsam hattest du schon fast nicht mehr daran geglaubt, dass dich noch",50,250);
text("jemand abholt. Der Wagen stoppt vor der Tür. Es ist kein gewöhnliches Taxi,",50,280);
text("sondern ein weißer Transporter. Du hinterfragst das nicht und steigst hinten ein.",50,310);
text("Es ist angenehm dunkel im Taxi. Nachdem du dem Fahrer deine Adresse gesagt",50,340);   
text("hast und er losfährt schläfst du sofort ein. Du schläfst eine ganze Weile bis du",50,370); 
text("durch eine heftige Bodenwelle aus dem Schlaf gerissen wirst. Verschlafen blickst",50,400); 
text("du aus dem Fenster und traust deinen Augen kaum. Alles was du siehst ist dir ",50,430); 
text("gänzlich unbekannt. Auf den Schildern sind buchstaben die du nicht kennst und ",50,460); 
text("auch die Landschaft ist dir nicht vertraut.",50,490); 
text("Du willst den Taxifahrer fragen wo du bist und drehst deinen Kopf zum",50,520); 
text("Autoinneren. Jetzt erkennst du neben dir einen vermummten Mann, der eine",50,550); 
text("Waffe auf dich richtet.",50,580); 

fill(255,150,0);
rect(250,650,500,80);

fill(128);
textSize(30);
text("CLICK HERE TO RESTART",300,700);

if(mouseIsPressed && mouseX>250 && mouseX<750 && mouseY>650 && mouseY<730) {
    mode=0;}

//NEUSTART
}

if(mode==27) {  //(27)  WASSER
    fill(128);
    textSize(25);

text("Du stotterst “Wasser”. Noch bevor du das Wort zu Ende gesprochen hast, knallt",50,70);
text("auch schon die Tür zu. Komplett verzweifelt entfernst du dich von dem Haus um",50,100);
text("weiter nach einer Telefonzelle zu suchen. “Was bin ich nur für ein Versager”,",50,130);
text("fragst du dich während die langsam aufgehende Sonne in dein Gesicht blendet.",50,160);
text("Du quälst dich Schritt für Schritt weiter. Jeder deiner Schritte sticht in deinem",50,190);
text("Magen und dein Gleichgewicht lässt auch langsam nach. Es zieht sich eine halbe",50,220);
text("Ewigkeit und du hast das Gefühl, nie wieder aus diesem Wohngebiet heraus zu",50,250);
text("finden. Du läufst und läufst, wankst und taumelst bis auch dein letzter Funken",50,280);
text("Kraft dich verlässt. Dann kippst du einfach um.",50,310);

fill(255,150,0);
rect(250,450,500,80);

fill(128);
textSize(30);
text("CLICK HERE TO RESTART",300,500);

if(mouseIsPressed && mouseX>250 && mouseX<750 && mouseY>450 && mouseY<530) {
    mode=0;}

//NEUSTART
}

if(mode==28) {  //(28)  FREUNDLICH GRÜ?EN
    fill(128);
    textSize(25);

text("Du entgegnest der Omi ein nettes “Ich wünsche Ihnen auch einen schönes",50,70);
text("Guten Morgen”. Als nächstes fragt sie dich, ob du ihr ein Feuerzeug leihen",50,100);
text("kannst, sie habe ihres gestern beim Abendbrot mit ihren Enkeln wohl in der",50,130);
text("Gartenlaube von der Großtante des Neffen liegen gelassen. Du suchst in deinen",50,160);
text("viel zu vielen Hosentaschen deiner Cargojeans. Plötzlich hörst du ein kleines",50,190);
text("“Click”. Der Verschluss deiner Bauchtasche hat sich geöffnet. Du traust deinen",50,220);
text("Augen kaum, als du siehst, dass die Omi, mit deiner Bauchtasche in der Hand",50,250);
text("einen preiswürdigen Sprint hinlegt. Du rennst los. “Kann ja nicht so schwer sein",50,280);
text("ne Omi einzuholen denkst du”. Doch du schaffst keine 50 Meter bis du stolperst",50,310);
text("und so ungünstig fällst, dass du dir den Kopf aufschlägst. Dir wird schwarz vor",50,340);    
text("Augen.",50,370);

fill(255,150,0);
rect(250,400,500,80);

fill(128);
textSize(30);
text("CLICK HERE TO RESTART",300,450);

if(mouseIsPressed && mouseX>250 && mouseX<750 && mouseY>400 && mouseY<470) {
    mode=0;}

 // NEUSTART
}

if(mode==29) {  //(29)  OMI UMBOXEN
    fill(128);
    textSize(25);

text("Du gibst der Omi einen Highkick mitten ins Gesicht und sie fällt wie ein Stein",50,70);
text("nach hinten um. Bevor sie auf dem Boden angekommen ist, springt sie mit einem",50,100);
text("Backflip auf ihre jetzt gar nicht mehr klapprig wirkenden Beine und kontert deinen",50,130);
text("Angriff mit einem Roundhousekick mit deinem Gesicht als Ziel. Du wirst",50,160);
text("ohnmächtig- instant Knock-Out.",50,190);
 
fill(255,150,0);
rect(250,350,500,80);   

fill(128);
textSize(30);
text("CLICK HERE TO RESTART",300,400);

if(mouseIsPressed && mouseX>250 && mouseX<750 && mouseY>350 && mouseY<430) {
    mode=1;}

//NEUSTART
}

}
