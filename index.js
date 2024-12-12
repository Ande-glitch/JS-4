// Oppgave 1 While løkke som skriver ut 0-10

let a = 0;
while (a < 11) {
    document.writeln(`<p style="color: red">${a}</p>`)
    a++;
}

// Oppgave 2 Partall

let b = 0;
while (b<22) {
    if (b%2==0) {
        document.writeln(`<p style="color: white; background-color: blue;">${b}</p>`)
    }
    b++;
}

// Oppgave 3 Summer tallene i konsollen til 10

let sum = 0;
let c = 0;
while (c<10) {
    c++;
    sum = sum+c
    console.log(sum);
}

// Oppgave 4 Skriv ut hashtags

let d = 0;
td = ""
while (d<4) {
    d++;
    td = td+"#";    
    console.log(td);
}

// Oppgave 5 Skriv 20 i synkende rekkefølge

let e = 21
while (e>=1) {
    e--;
    document.writeln(e, "<br><br/>")
}

// Oppgave 6 Gjette spill

var text = "26"
let show = prompt("gess numer from 0 to 100")

while (show !== text) {
    show = prompt("tryagain")
}

// Oppgave 8 Rektangel

let g = 0;
td = ""
while (g<4) {
    g++;
    td ="*****";    
    document.write(td, "<br><br/>");
}