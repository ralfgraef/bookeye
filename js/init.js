// Create the map
let map = []

map[0] = "Kantine"
map[1] = "Bibliothek"
map[2] = "Großraumbüro"
map[3] = "Archivtheke"
map[4] = {Ort:"FES-Eingang", Beschreibung:"Es ist ruhig hier in der FES, ..."}
map[5] = "Scanner des Grauens"
map[6] = {Ort:"Ehemalige Botschaft", Beschreibung:"Du stehst vor einem seltsamen Turm. Das gesamte Gelände sieht verwildert und verlassen aus. Es ist vollends mit einer meterdicken Rosenhecke umschlossen, die auf den angrenzenden Mauern weitergewandert ist und fast den gesamten Komplex überwuchert hat. An der Tür hängt ein arg ramponierter Briefkasten ..."}
map[7] = {ORT:"Haltestelle Max-Löbner-Strasse", Beschreibung:"Ein neuer Arbeitstag steht Dir bevor. Genervt steigst Du an der Haltestelle Max-Löbner-Strasse aus der Bahn aus: Heute ausnahmsweise nur 20 Minuten Verspätung. Im Norden siehst Du die Friedrich-Ebert-Stiftung, im Westen steht eine seltsamer Turm, im Osten hörst Du Geschrei und Tumult."}
map[8] = {Ort: "Haltestelle Olof-Palme-Allee", Beschreibung:"Du bist an der Haltestelle Olof-Palme-Allee. Eine Tür einer abfahrtbereiten Bahn schliesst nicht, da ein Fahrgast die Lichtschranke blockiert. Du nimmst an der lebhaften Diskussion zwischen Fahrpersonal und Fahrgästen teil. Du gehst heute bestimmt nicht mehr arbeiten ..."}

// Create the images
let images = []

images[0] = "fes-kantine.jpg"
images[1] = "fes-bibumbau.jpg"
images[2] = "fes-grossraumbuero.jpg"
images[3] = "fes-archivtheke.jpg"
images[4] = "fes-eingang.jpg"
images[5] = "fes-scanner.jpg"
images[6] = "bonn-botschaft.jpg"
images[7] = "bonn-haltestelle.jpg"
images[8] = "bonn-olof.jpg"

// Set blockedPathmessages
let blockedPathMessages = []
blockedPathMessages[0] = "Nein, es geht nicht weiter nach Norden..."
blockedPathMessages[1] = "Nein, es geht nicht weiter nach Osten..."
blockedPathMessages[2] = "Nein, es geht nicht weiter nach Süden..."
blockedPathMessages[3] = "Nein, es geht nicht weiter nach Westen..."
blockedPathMessages[4] = "Hier gibt es nichts zu untersuchen..."
blockedPathMessages[5] = "Du warst doch schonmal hier, oder..."


// Spielzüge
let zug = 0

// Handreichung Inventar
let handreichung = false

// Set players start location
let mapLocation = 7

// Initialize players input
let playersInput = ""

// Initialize game message
let gameMessage = ""

// create array of commands the game understands
// and a variable tto store the action
let commands = ["geh nach norden", "geh nach osten", "geh nach süden", "geh nach westen", "untersuch briefkasten", "nimm handreichung"]
let action = ""

// output and input fields
let output = document.querySelector("#output")
let input = document.querySelector("#input")

// Images
let image = document.querySelector("#spielbild")



