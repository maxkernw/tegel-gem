export type AdTheme =
    | 'tabloid'
    | 'texttv'
    | 'tvshop'
    | 'myndighet'
    | 'cyberneon'
    | 'win95'
    | 'localbiz'
    | 'occult'
    | 'luxury'
    | 'terminal'
    | 'warning'
    | 'vaporwave'
    | 'classified'
    | 'retro90';

export type AdLayout =
    | 'split'
    | 'tabloid'
    | 'win95'
    | 'texttv'
    | 'tvshop'
    | 'myndighet';

export interface AdBanner {
    brand: string;
    headline: string;
    subtext: string;
    cta: string;
    badge?: string;
    price?: string;
    icon: string;
    imageQuery: string;
    theme: AdTheme;
    layout: AdLayout;
    clickMessage: string;
}

export const adBanners: AdBanner[] = [
    {
        brand: "STATENS VARDAGSVERK",
        headline: "HAR DU GLÖMT VARFÖR DU GICK IN I KÖKET?",
        subtext: "Anmäl ofrivilligt kylskåpsstirrande senast tisdag. Blankett 44-B krävs.",
        cta: "ERKÄNN DIREKT",
        badge: "MYNDIGHETSINFO",
        icon: "📋",
        imageQuery: "refrigerator kitchen",
        theme: "myndighet",
        layout: "myndighet",
        clickMessage: "📋 Tack! En handläggare kommer hem till dig och stänger kylskåpet om 6–8 arbetsveckor."
    },
    {
        brand: "377 TEGEL-TEXT",
        headline: "SYNTETISK FALUKORV SLUT I HELA VÄSTERÅS",
        subtext: "Experten: 'Folk panikköper och använder dem som nackkuddar på tåget'",
        cta: "SIDA 378 >>",
        badge: "TEXT-TV 377",
        icon: "📺",
        imageQuery: "sausage food",
        theme: "texttv",
        layout: "texttv",
        clickMessage: "📺 Laddar sida 378... FEL: Text-TV har tagit lunchrast till 1999."
    },
    {
        brand: "TV-SHOP NATT",
        headline: "TRÖTT PÅ ATT SKALA DINA EGNA BANANER?!",
        subtext: "Med BananSprängaren 3000™ öppnar du frukten med mindre än 4 gram dynamit!",
        cta: "BESTÄLL NU",
        price: "149:-",
        badge: "SE TV-SUCCÉN!",
        icon: "💥",
        imageQuery: "banana fruit",
        theme: "tvshop",
        layout: "tvshop",
        clickMessage: "💥 Kaboom! Din beställning av BananSprängaren 3000™ skickas i ett vadderat kuvert."
    },
    {
        brand: "AFTONCHOCKEN EXTRA",
        headline: "CHOCKEN: KENNETH, 54, ÅT EN HELT VANLIG FRUKOST",
        subtext: "\"Jag tog en ostmacka och sen hände absolut ingenting\" • Grannarna rasar",
        cta: "LÄS PLUS+",
        badge: "JUST NU",
        icon: "🗞️",
        imageQuery: "cheese sandwich",
        theme: "tabloid",
        layout: "tabloid",
        clickMessage: "🗞️ Du har låst upp artikeln: Det var Hushållsost 28%. Kenneth mår efter omständigheterna helt okej."
    },
    {
        brand: "WIN98 SYSTEMTJÄNST",
        headline: "DITT TÅLAMOD HAR SLUTAT SVARA (FELKOD: MÅNDAG)",
        subtext: "Vill du starta om helgen i felsäkert läge med kanelbulle?",
        cta: "JA, TACK",
        badge: "SYSTEMFEL",
        icon: "💾",
        imageQuery: "retro computer floppy",
        theme: "win95",
        layout: "win95",
        clickMessage: "💾 Startar om helgen... Vänligen mata in Diskett 2 av 47 (Fredagsmys.exe)."
    },
    {
        brand: "CYBER-CONNY AB",
        headline: "TRIMMA DIN DAMMSUGARE TILL 450 HÄSTKRAFTER",
        subtext: "Suger upp damm, mattor, parkettgolv och mindre husdjur från grannlägenheten.",
        cta: "CHIPTRIMMA NU",
        price: "990:-",
        badge: "TURBO V8",
        icon: "🌪️",
        imageQuery: "vacuum cleaner jet engine",
        theme: "cyberneon",
        layout: "split",
        clickMessage: "🌪️ VROOOM! Din Electrolux har nu passerat ljudvallen över vardagsrumsmattan."
    },
    {
        brand: "SVENSKA SUCK-AKADEMIN",
        headline: "LÄR DIG SUCKA SÅ HÖGT ATT KOLLEGAN BYTER KONTOR",
        subtext: "Intensivkurs i passiv-aggressiv utandning vid kaffemaskinen. Diplom ingår.",
        cta: "BOKA KURS",
        badge: "2 PLATSER KVAR",
        icon: "😮‍💨",
        imageQuery: "office coffee bored",
        theme: "localbiz",
        layout: "split",
        clickMessage: "😮‍💨 *Hääääääääh...* Snyggt! Du är redan antagen till fortsättningskursen."
    },
    {
        brand: "MADAME YVONNES HOTLINE",
        headline: "JAG SPÅR DIN FRAMTID I GAMLA KVITTON FRÅN BILTEMA",
        subtext: "Har du köpt spännband och varmkorv? Då väntar mystisk romantik i höst.",
        cta: "SPÅ MIG (29 KR)",
        badge: "SYNSK SEDAN -92",
        icon: "🔮",
        imageQuery: "crystal ball fortune teller",
        theme: "occult",
        layout: "split",
        clickMessage: "🔮 Andarna talar: Du kommer köpa 3-pack torkarblad som inte passar din bil."
    },
    {
        brand: "MAISON DE GRÅSTEN",
        headline: "EAU DE KOMMUNALHUS – DEN NYA DOFTEN AV PÄRMAR & KALLT KAFFE",
        subtext: "En förförisk symfoni av lysrör, häftapparat och linoleumgolv.",
        cta: "UPPLEV DOFTEN",
        price: "2 499:-",
        badge: "PARIS • BORÅS",
        icon: "✨",
        imageQuery: "perfume bottle luxury",
        theme: "luxury",
        layout: "split",
        clickMessage: "✨ *Pssht!* Du luktar nu som ett sammanträdesrum i Eslöv kl 15:45."
    },
    {
        brand: "BRF TÅLAMODET",
        headline: "VEM TOG LUDDET UR TORKTUMLAREN MEN LÄMNADE EN STRUMPA?",
        subtext: "Styrelsen har kallat in forensisk expertis och arga lappar i laminat.",
        cta: "ANGE SKYLDIG",
        badge: "TVÄTTSTUGAN",
        icon: "🧦",
        imageQuery: "washing machine laundry",
        theme: "warning",
        layout: "split",
        clickMessage: "🧦 Anmälan mottagen! En laminerad arg lapp med Comic Sans har satts upp i trapphuset."
    },
    {
        brand: "ROOT@FALUKORV:~#",
        headline: "LADDA NER 64 GB EXTRA SÖMN TILL INATT [CRACKED]",
        subtext: "Ingen reklam • Inga konstiga drömmar om gymnasiet • 100% djupsömn.",
        cta: "RUN SLEEP.SH",
        badge: "TERMINAL v4.2",
        icon: "💻",
        imageQuery: "hacker matrix server",
        theme: "terminal",
        layout: "split",
        clickMessage: "💻 Executing sleep.sh... ERROR: Din hjärna tänker fortfarande på något pinsamt du sa 2014."
    },
    {
        brand: "GÖRAN & SÖNER UTHYRNING",
        headline: "HYR EN GUBBE SOM STÅR OCH PEKAR PÅ DITT BYGGPROJEKT",
        subtext: "Armarna i kors, skeptisk blick och mumlar 'Jaha, du tänkte göra sådär ja...'",
        cta: "BOKA GÖRAN",
        price: "350:-/tim",
        badge: "PROFFS-SKEPTIKER",
        icon: "👷",
        imageQuery: "construction worker carpenter",
        theme: "localbiz",
        layout: "split",
        clickMessage: "👷 Göran är på väg! Han har redan ringt och frågat om du verkligen mätt med vattenpass."
    },
    {
        brand: "VAPOR-KLIPP AB",
        headline: "FRISYRER SOM SER UT SOM OM DU GÅTT IGENOM EN HÄCK",
        subtext: "Vi klipper endast i motvind med slö kökssax. Kaffe på fat ingår ej.",
        cta: "BOKA SNEDKLIPP",
        price: "85:-",
        badge: "ESTETIK 1987",
        icon: "✂️",
        imageQuery: "barber haircut retro",
        theme: "vaporwave",
        layout: "split",
        clickMessage: "✂️ Din lugg är nu 4 centimeter kortare på vänster sida. Välkommen åter!"
    },
    {
        brand: "GULA SIDORNA PRIVAT",
        headline: "BORTSKÄNKES: 400 LITER HEMKOKT KRUSBÄRSKRÄM (FRÅGA EJ)",
        subtext: "Finns i källarförråd i Mjölby. Ta med egen spade och skyddsglasögon.",
        cta: "HÄMTA IDAG",
        badge: "RADANNONS",
        icon: "🫙",
        imageQuery: "glass jars jam cellar",
        theme: "classified",
        layout: "split",
        clickMessage: "🫙 Säljaren 'Kräm-Kent' svarar: 'Kom efter mörkrets inbrott, krämen har börjat bubbla.'"
    },
    {
        brand: "KOMMUNALA VÄDERVERKET",
        headline: "VI INFÖR HORISONTELLT SNÖBLASK MELLAN KL 07 OCH 18",
        subtext: "Motvind åt alla väderstreck samtidigt garanteras på samtliga cykelbanor.",
        cta: "KLAGA FORMELLT",
        badge: "VÄDERVARNING",
        icon: "🌨️",
        imageQuery: "snowstorm blizzard winter",
        theme: "myndighet",
        layout: "myndighet",
        clickMessage: "🌨️ Ditt klagomål har registrats. Som kompensation ökar vi motvinden med 4 m/s."
    },
    {
        brand: "RETRO-WEBBEN 1997",
        headline: "GRATTIS! DU ÄR BESÖKARE NR 000014! KLICKA FÖR ATT VINNA EN FAX!",
        subtext: "Ingen lottning! Bara 400 meter termopapper och ett modem som skriker!",
        cta: "HÄMTA VINST!!",
        badge: "VINNARE!!",
        icon: "📠",
        imageQuery: "fax machine telephone",
        theme: "retro90",
        layout: "win95",
        clickMessage: "📠 *BEEEEP-KRRR-SHHHH!* Din faxmaskin skickas med postdiligens från 1997."
    },
    {
        brand: "EXPRESS-BLADET",
        headline: "SÅ VET DU OM DIN KATT DRIVER ETT SKUGGBOLAG PÅ CYPERN",
        subtext: "Misstänkta kvitton på tonfisk • Sover 18 timmar för att dölja skatteplanering",
        cta: "SE HELA LISTAN",
        badge: "AVSLÖJANDE",
        icon: "🐱",
        imageQuery: "cat funny",
        theme: "tabloid",
        layout: "tabloid",
        clickMessage: "🐱 Misse (4 år) nekar till anklagelserna och har vält en blomkruka som protest."
    },
    {
        brand: "TV-SHOP KÖK",
        headline: "OSTHYVELN SOM SPELAR 'FINAL COUNTDOWN' VID VARJE DRAG!",
        subtext: "Slut på tysta frukostar! Nu med inbyggd rökmaskin och 140 dB siren!",
        cta: "KÖP 2 FÅ 1",
        price: "299:-",
        badge: "SOM PÅ TV!",
        icon: "🧀",
        imageQuery: "cheese yellow",
        theme: "tvshop",
        layout: "tvshop",
        clickMessage: "🧀 DA-DA-DA-DAA! Din frukostmacka har nu godkänts av Joey Tempest."
    },
    {
        brand: "377 TEGEL-TEXT",
        headline: "MAN I BORLÄNGE HITTADE DEN PERFEKTA PINNEN I SKOGEN",
        subtext: "'Den ser exakt ut som ett svärd' säger Stefan, 38. Visas på hembygdsgården.",
        cta: "SIDA 379 >>",
        badge: "INRIKES 377",
        icon: "🪵",
        imageQuery: "forest branch wood",
        theme: "texttv",
        layout: "texttv",
        clickMessage: "🪵 Sida 379: Pinnen har nu försäkrats för 1,2 miljoner kronor."
    },
    {
        brand: "NEON-BAGERIET 2088",
        headline: "LASERGRÄDDADE KANELBULLAR MED SMAK AV BLÅBÄR & ÅNGEST",
        subtext: "Pärlsocker av äkta kvantkristaller. Lyser i mörkret i upp till 14 timmar.",
        cta: "TELEPORTERA BULLE",
        price: "45:-",
        badge: "CYBER-FIKA",
        icon: "🥐",
        imageQuery: "cinnamon bun pastry",
        theme: "cyberneon",
        layout: "split",
        clickMessage: "🥐 *ZAP!* En självlysande kanelbulle har materialiserats i din ficka."
    },
    {
        brand: "SVENSKA SMÅPRATSJOUREN",
        headline: "FAST I HISSEN MED EN BEKANT? VI SMS:AR DIG VÄDERFAKTA!",
        subtext: "Få akuta repliker som 'Ja, det märks att det går mot ljusare/mörkare tider nu'.",
        cta: "TECKNA JOUR",
        price: "19:-/mån",
        badge: "AKUT HJÄLP",
        icon: "🛗",
        imageQuery: "elevator corridor",
        theme: "myndighet",
        layout: "myndighet",
        clickMessage: "🛗 SMS skickat: Säg 'Det är inte kylan, det är fukten som gör det' och titta i golvet!"
    },
    {
        brand: "BENGTSSONS MYSTERIER",
        headline: "VI HITTAR DET DÄR LOCKET TILL MATDOSAN SOM FÖRSVANN 2019",
        subtext: "Våra certifierade skåpdykare genomsöker den fjärde dimensionen under diskbänken.",
        cta: "STARTA SÖKNING",
        badge: "GARANTI*",
        icon: "🕵️",
        imageQuery: "detective magnifying glass",
        theme: "occult",
        layout: "split",
        clickMessage: "🕵️ Vi hittade 14 lock, men inget av dem passar någon burk som existerar på jorden."
    },
    {
        brand: "WIN95 DIALOG",
        headline: "VARNING: DU HAR INTE SAGT 'OJ DÅ' PÅ ÖVER 3 TIMMAR",
        subtext: "Enligt svensk lag måste du snart resa dig, slå dig på knäna och säga 'Nej, om man skulle...'",
        cta: "SLÅ PÅ KNÄNA",
        badge: "SVENSK STANDARD",
        icon: "🦵",
        imageQuery: "sofa living room",
        theme: "win95",
        layout: "win95",
        clickMessage: "🦵 *KLAPP PÅ KNÄNA!* 'Nämen... om man skulle ta och tänka på refrängen då!'"
    },
    {
        brand: "LÄNSMANNENS LOPPIS",
        headline: "SÄLJES: EN PALL MED BLANDADE SLADDAR FRÅN 2004",
        subtext: "SCART, Nokia-laddare, oklara adaptrar och en sladd som ingen vet vad den gör.",
        cta: "GE BUD",
        price: "50:-",
        badge: "BRA ATT HA!",
        icon: "🔌",
        imageQuery: "cables wires electronics",
        theme: "classified",
        layout: "split",
        clickMessage: "🔌 Du la vantarna på sladdlådan! Den får absolut inte slängas förrän 2045."
    },
    {
        brand: "AFTONCHOCKEN EXTRA",
        headline: "SUPER-GUIDEN: SÅ VÄLJER DU RÄTT KASSAKÖ PÅ ICA (DU KOMMER ÄNDÅ VÄLJA FEL)",
        subtext: "Forskare bekräftar: Tant med papperskuponger och pantkvitto uppstår ur tomma intet",
        cta: "SE FORSKNINGEN",
        badge: "VARDAGSCHOCK",
        icon: "🛒",
        imageQuery: "supermarket shopping cart",
        theme: "tabloid",
        layout: "tabloid",
        clickMessage: "🛒 Kassan bredvid rullar nu i 90 km/h medan din kassa väntar på prisfråga på kålrot."
    },
    {
        brand: "CHÂTEAU DE VÄRMLAND",
        headline: "ÅRGÅNGSLÄSK: CHAMPIS LAGRAT PÅ GAMMAL EPA-TRAKTOR",
        subtext: "Toner av granbarr, Wunderbaum Vanilj och nyslaget dike utanför Sunne.",
        cta: "RESERVERA FLASKA",
        price: "1 890:-",
        badge: "LIMITED EDITION",
        icon: "🍾",
        imageQuery: "champagne bottle vintage car",
        theme: "luxury",
        layout: "split",
        clickMessage: "🍾 Sommelieren rekommenderar att den serveras ljummen direkt ur handskfacket."
    },
    {
        brand: "VARNINGSCENTRALEN",
        headline: "OBS! NÅGON PÅ JOBBET HAR VÄRMT FISK I MIKRON IGEN!",
        subtext: "Utrym lunchrummet omedelbart! Nivå 4 av kokt torsk-aerosol har uppmätts.",
        cta: "AKTIVERA FLÄKT",
        badge: "KATASTROFLARM",
        icon: "🐟",
        imageQuery: "fish microwave kitchen",
        theme: "warning",
        layout: "split",
        clickMessage: "🐟 För sent! Doften har nu satt sig permanent i gardinerna fram till pensionen."
    },
    {
        brand: "TV-SHOP TRÄNING",
        headline: "FÅ MAGRUTOR MEDAN DU LIGGER I SOFFAN OCH ÄTER OSTBÅGAR!",
        subtext: "Vår patenterade Rut-Stämpel™ trycker in ett sexpack i huden på 3 sekunder!",
        cta: "KÖP STÄMPELN",
        price: "199:-",
        badge: "INGEN SVETT!",
        icon: "💪",
        imageQuery: "fitness dumbbell gym",
        theme: "tvshop",
        layout: "tvshop",
        clickMessage: "💪 *STÄMPEL!* Du ser nu ut som en nygräddad våffla på magen. Snyggt!"
    },
    {
        brand: "SYSADMIN KEBAB & DATA",
        headline: "VI LAGAR DIN SKRIVARE ELLER GER DIG EN FAMILJEPIZZA",
        subtext: "Ingen har någonsin lyckats laga en skrivare, så välj sås redan nu.",
        cta: "VÄLJ VITLÖKSSÅS",
        badge: "IT-GARANTI",
        icon: "🍕",
        imageQuery: "pizza food",
        theme: "terminal",
        layout: "split",
        clickMessage: "🍕 PC LOAD LETTER! Vi slängde skrivaren i containern, pizzan är klar om 10 minuter!"
    },
    {
        brand: "377 TEGEL-TEXT",
        headline: "NY LAG: FÖRBJUDET ATT SÄGA 'DET GÅR BRA' NÄR DET INTE GÅR BRA",
        subtext: "Miljontals svenskar riskerar böter om de inte erkänner att det är lite bökigt.",
        cta: "SIDA 380 >>",
        badge: "POLITIK 377",
        icon: "⚖️",
        imageQuery: "parliament courthouse",
        theme: "texttv",
        layout: "texttv",
        clickMessage: "⚖️ Sida 380: Polisen tillåter fortfarande 'Jodå, man ska väl inte klaga' i undantagsfall."
    },
    {
        brand: "ASTRAL-TRAFIKEN",
        headline: "ERSÄTTNINGSBUSS FÖR LINJE 404 AVGÅR FRÅN DEN ASTRALA DIMENSIONEN",
        subtext: "Stannar vid hållplatsen bakom ditt lokala pizzeria-plank kl 25:70.",
        cta: "SE TIDTABELL",
        badge: "FÖRSENAD",
        icon: "🚌",
        imageQuery: "bus night neon",
        theme: "vaporwave",
        layout: "split",
        clickMessage: "🚌 Bussen körde precis förbi dig i 4:e dimensionen utan att stanna."
    },
    {
        brand: "KURTS ALIBI-BYRÅ",
        headline: "VI RINGER DIG MITT UNDER TRÅKIGA MÖTEN OCH SKRIKER 'DET BRINNER I KANOTEN!'",
        subtext: "100% trovärdig ursäkt för att lämna vilket utvecklingssamtal som helst.",
        cta: "BESTÄLL NÖDSAMTAL",
        price: "79:-",
        badge: "DISKRET SERVICE",
        icon: "🛶",
        imageQuery: "canoe lake paddle",
        theme: "localbiz",
        layout: "split",
        clickMessage: "🛶 *RING RING!* 'HALLÅ?! DIN KANOT DRAR IVÄG MOT DANMARK, DU MÅSTE KOMMA NU!!'"
    },
    {
        brand: "RETRO-WEBBEN 1999",
        headline: "LADDA NER FLER MEGABYTE RAM-MINNE DIREKT FRÅN INTERNET!",
        subtext: "100% äkta .exe-fil! Gör din Pentium II snabbare än grannens Volvo 740!",
        cta: "DOWNLOAD.EXE",
        badge: "FREEWARE!!",
        icon: "💿",
        imageQuery: "microchip circuit board",
        theme: "retro90",
        layout: "win95",
        clickMessage: "💿 Grattis! Du har nu 14 nya verktygsfält i Internet Explorer och en dansande älg på skrivbordet."
    },
    {
        brand: "CYBER-SYNTH FRISÖR",
        headline: "HOCKEYFRILLA MED INBYGGD SUBWOOFER OCH BLINKERS",
        subtext: "Kort där fram, fest där bak, och 800 Watt baslåda i nacken. Besiktigad.",
        cta: "INSTALLERA FRILLA",
        price: "1 200:-",
        badge: "EPA-CERTIFIERAD",
        icon: "🎸",
        imageQuery: "loudspeaker concert neon",
        theme: "cyberneon",
        layout: "split",
        clickMessage: "🎸 *DUNK-DUNK-DUNK!* Dina polisonger spelar nu eurodance så plomberna skakar!"
    },
    {
        brand: "STATENS FIKA-INSPEKTION",
        headline: "SISTA BITEN AV TÅRTAN HAR LEGAT KVAR PÅ FATET I 4 DYGN",
        subtext: "Den är nu halverad 16 gånger och mäter 0,3 millimeter. Ingen vågar ta den.",
        cta: "TILLKALLA INSATS",
        badge: "KRISLÄGE",
        icon: "🍰",
        imageQuery: "cake dessert plate",
        theme: "myndighet",
        layout: "myndighet",
        clickMessage: "🍰 Nationella insatsstyrkan har delat tårtbiten på mitten igen. Nu är den på atomnivå."
    },
    {
        brand: "AFTONCHOCKEN EXTRA",
        headline: "SKRÄCKEN I ULLARED: MAN GICK IN FÖR ATT KÖPA EN (1) SAK – GICK UT MED EN!",
        subtext: "Säkerhetsvakterna i chock: 'Vi trodde det var fysiskt omöjligt utan stekpanna och 40 par strumpor'",
        cta: "SE ÖVERVAKNINGSBILD",
        badge: "HISTORISKT",
        icon: "🛍️",
        imageQuery: "department store shopping",
        theme: "tabloid",
        layout: "tabloid",
        clickMessage: "🛍️ Rättelse: Det visade sig att han råkat få med sig 3 paket fryspåsar och en trädgårdstomte ändå."
    },
    {
        brand: "OCKULTA HEMFIXARNA",
        headline: "KNARRAR GOLVET? DET ÄR INTE FUKT – DET ÄR FARFAR SOM VILL HA SNUS",
        subtext: "Vi driver ut gnälliga husspöken med hjälp av skruvdragare och kaffe.",
        cta: "BOKA EXORCISM",
        price: "666:-",
        badge: "RUT-AVDRAG*",
        icon: "👻",
        imageQuery: "haunted house spooky stairs",
        theme: "occult",
        layout: "split",
        clickMessage: "👻 Spöket har fått en dosa Ettan Lös och har lovat att sluta tända lampan i hallen."
    },
    {
        brand: "TV-SHOP VINTER",
        headline: "TRÖTT PÅ ATT SKRAPA VINDRUTAN? BYT UT BILEN MOT EN HELIKOPTER!",
        subtext: "Eller köp vår El-Eldkastare i fickformat! Smälter isen (och motorhuven) på 1 sekund!",
        cta: "BESTÄLL IDAG",
        price: "399:-",
        badge: "VINTER-KLIPP!",
        icon: "🔥",
        imageQuery: "car snow winter ice",
        theme: "tvshop",
        layout: "tvshop",
        clickMessage: "🔥 Ingen mer is på rutan! (Ingen mer ruta heller, så ta på dig skidglasögon!)."
    },
    {
        brand: "377 TEGEL-TEXT",
        headline: "KOMMUNEN BYGGER RONDELL INUTI EN ANNAN RONDELL",
        subtext: "'Vi hade 400 ton kantsten över', förklarar trafiknämnden i Skövde.",
        cta: "SIDA 381 >>",
        badge: "TRAFIK 377",
        icon: "🔄",
        imageQuery: "roundabout road traffic",
        theme: "texttv",
        layout: "texttv",
        clickMessage: "🔄 Sida 381: En lokal bilist har nu snurrat i den inre rondellen sedan i torsdags."
    },
    {
        brand: "L’ORÉAL DE SÖDERTÄLJE",
        headline: "SCHAMPO MED EXTRA GRUS – FÖR DIG SOM SAKNAR KÄNSLAN AV VÅRENS CYKELBANOR",
        subtext: "Ger håret den där autentiska 'sandpapper och vägsalt'-volymen.",
        cta: "KÖP FLASKA",
        price: "890:-",
        badge: "HAUTE COUTURE",
        icon: "🪨",
        imageQuery: "gravel stones road",
        theme: "luxury",
        layout: "split",
        clickMessage: "🪨 För att du är värd lite rullgrus i hårbotten!"
    },
    {
        brand: "SVENSKA KÖLAPP-MUSEET",
        headline: "VI KÖPER DIN GAMLA KÖLAPP FRÅN SYSTEMBOLAGET 1998",
        subtext: "Särskilt intresse för nummer 094 med tummade hörn och kaffefläck.",
        cta: "VÄRDERA LAPP",
        badge: "ANTIKRUNDAN",
        icon: "🎟️",
        imageQuery: "ticket paper vintage",
        theme: "classified",
        layout: "split",
        clickMessage: "🎟️ Vår expert bjuder 14 kronor och en halväten Piggelin för din kölapp!"
    },
    {
        brand: "FÖRSÄKRINGSKASSAN NIGHTSHIFT",
        headline: "HAR DU DRÖMT ATT DU JOBBADE INATT? GLÖM INTE ATT FÖRMODA SKATT!",
        subtext: "Obeskattad REM-sömn räknas som grovt skattebrott enligt §12 Sömnlagen.",
        cta: "DEKLARERA DRÖM",
        badge: "SKATTEVERKET",
        icon: "💤",
        imageQuery: "sleeping bed pillow",
        theme: "myndighet",
        layout: "myndighet",
        clickMessage: "💤 Du är nu skyldig staten 3 timmars mardröm om ett matteprov du inte pluggat till."
    },
    {
        brand: "WIN95 SYSTEMVARNING",
        headline: "DIN KAFFEKOPP ÄR SNART TOM (KRITISKT SYSTEMFEL 0x00F1KA)",
        subtext: "Om du inte fyller på bryggkaffe inom 4 minuter kommer du svara 'Mjo' på allt.",
        cta: "BRYGG NYTT",
        badge: "VARNING",
        icon: "☕",
        imageQuery: "coffee cup espresso",
        theme: "win95",
        layout: "win95",
        clickMessage: "☕ Kaffebryggaren gurglar nu med 110 decibel i personalrummet."
    },
    {
        brand: "TV-SHOP HUSHÅLL",
        headline: "TRÖTT PÅ ATT VIKA TVÄTT? SKJUT IN DEN I GARDEROBEN MED TVÄTT-KANONEN™!",
        subtext: "Komprimerar 12 kilo strumpor och påslakan till en kompakt kub i överljudsfart!",
        cta: "BESTÄLL KANON",
        price: "499:-",
        badge: "TV-EXKLUSIV!",
        icon: "🧦",
        imageQuery: "cannon artillery",
        theme: "tvshop",
        layout: "tvshop",
        clickMessage: "🧦 *BOOOOM!* Garderobsdörren flög in till grannen, men tvätten är inne!"
    },
    {
        brand: "AFTONCHOCKEN EXTRA",
        headline: "DRAMAT PÅ BUSSEN: NÅGON SATTE SIG BREDVID TROTS LEDIGA SÄTEN",
        subtext: "Krisgrupp inkallad till linje 4 • 'Jag var tvungen att titta ut genom fönstret i 20 minuter'",
        cta: "LÄS VITTNESMÅLET",
        badge: "BUSS-CHOCK",
        icon: "💺",
        imageQuery: "bus seats public transport",
        theme: "tabloid",
        layout: "tabloid",
        clickMessage: "💺 Passageraren höll dessutom sin ryggsäck i knät utan att säga ett ord. Rysare!"
    },
    {
        brand: "377 TEGEL-TEXT",
        headline: "REKORDMÅNGA SVENSKAR SA 'HOPPSAN' NÄR DE GICK IN I STOLPE",
        subtext: "84% bad även stolpen om ursäkt innan de skyndade vidare, visar ny statistik.",
        cta: "SIDA 382 >>",
        badge: "SAMHÄLLE 377",
        icon: "🚧",
        imageQuery: "street lamp post city",
        theme: "texttv",
        layout: "texttv",
        clickMessage: "🚧 Sida 382: Stolpen har accepterat ursäkten och hälsar hem."
    },
    {
        brand: "CYBER-KORV 2099",
        headline: "HOLOGRAM-KORV MED BRÖD – 0 KALORIER, 100% NEON-SENAP",
        subtext: "Smakar exakt som en Statoil-korv kl 03:15 fast helt gjord av fotoner.",
        cta: "LADDA NER KORV",
        price: "25:-",
        badge: "3D-PRINTAD",
        icon: "🌭",
        imageQuery: "hotdog street food",
        theme: "cyberneon",
        layout: "split",
        clickMessage: "🌭 Du klickade på stark senap! En laserdusch av senap har träffat din jacka."
    },
    {
        brand: "SPÖK-RÖRMOKAREN",
        headline: "KLUCKAR DET I AVLOPPET? DET ÄR EN GAMMAL VIKING SOM BOR I GOLVBRUNNEN",
        subtext: "Vi mutar Ragnar Lodbrok med mjöd och rensband så vattnet rinner undan igen.",
        cta: "RING JOUREN",
        price: "550:-",
        badge: "24/7 AKUT",
        icon: "🪠",
        imageQuery: "viking helmet ship",
        theme: "occult",
        layout: "split",
        clickMessage: "🪠 Ragnar har flyttat till grannens dusch istället. Fritt blås i rören!"
    },
    {
        brand: "BENGTS PLASTPÅSE-BANK",
        headline: "INVESTERAR DU I PLASTPÅSAR UNDER DISKBÄNKEN? VI GER 8% RÄNTA!",
        subtext: "Sätt in en stor papperskasse full med knölade konsumpåsar från 2011.",
        cta: "ÖPPNA PÅSKONTO",
        badge: "TRYGG SPARFORM",
        icon: "🛍️",
        imageQuery: "plastic bags shopping",
        theme: "localbiz",
        layout: "split",
        clickMessage: "🛍️ Din portfölj av skrynkliga Coop-kassar har just stigit med 400% på börsen!"
    },
    {
        brand: "TERMINAL HOROSKOP",
        headline: "SUDO APT-GET INSTALL FRAMGÅNG --FORCE-YES",
        subtext: "Ditt stjärntecken (Kompileringsfel) visar att du kommer glömma ett semikolon idag.",
        cta: "GIT PUSH --FORCE",
        badge: "DEVOPS-SPÅDOM",
        icon: "🖥️",
        imageQuery: "code terminal screen",
        theme: "terminal",
        layout: "split",
        clickMessage: "🖥️ Fatal error: Fredags-deploy påbörjad kl 16:59. Lycka till i helgen!"
    },
    {
        brand: "VARNING: GRANNLARM",
        headline: "DIN GRANNE STÅR I TRAPPHUSET OCH VILL PRATA OM SOPRUMMET!",
        subtext: "Kikhåls-sensorn har detekterat tofflor och en dömande blick utanför din dörr.",
        cta: "SLÄCK ALLA LAMPOR",
        badge: "FARA NIVÅ RÖD",
        icon: "👀",
        imageQuery: "staircase hallway door",
        theme: "warning",
        layout: "split",
        clickMessage: "👀 *Schhh!* Du ligger nu helt blickstilla på hallmattan tills fotstegen försvinner."
    },
    {
        brand: "VAPOR-TANDLÄKAREN",
        headline: "BYT UT DINA VISDOMSTÄNDER MOT DISCOKULOR I KROM",
        subtext: "Varje gång du gäspar spelas ett saxofonsolo från 1986 i hela rummet.",
        cta: "BOKA BORRNING",
        price: "3 400:-",
        badge: "AESTHETIC SMILE",
        icon: "🦷",
        imageQuery: "disco ball mirror",
        theme: "vaporwave",
        layout: "split",
        clickMessage: "🦷 *Careless Whisper på saxofon ekar nu ur din mun varje gång du ler!*"
    },
    {
        brand: "RETRO-WEBBEN 1996",
        headline: "BESÖK MIN HEMSIDA OM MINA 14 MARSVIN! [UNDER CONSTRUCTION]",
        subtext: "Gästboken är öppen!! Lämna en hälsning eller bli bannad från mitt Webring!",
        cta: "SKRIV I GÄSTBOK",
        badge: "NETSCAPE 3.0",
        icon: "🐹",
        imageQuery: "guinea pig rodent",
        theme: "retro90",
        layout: "win95",
        clickMessage: "🐹 Tack för ditt inlägg i gästboken! Marsvinet Pelle hälsar med en animerad GIF."
    },
    {
        brand: "PARFUM DE SLUSSEN",
        headline: "NATTBUSS N°5 – EXKLUSIV HERRDOFT MED TONER AV KEBAB & BLÖT ULLKAPPA",
        subtext: "Fångar den magiska känslan av att missa sista bytet i regnet kl 02:47.",
        cta: "BESTÄLL PROV",
        price: "1 650:-",
        badge: "EAU DE TOILETTE",
        icon: "🌧️",
        imageQuery: "rain night city street",
        theme: "luxury",
        layout: "split",
        clickMessage: "🌧️ En sofistikerad pust av vitlökssås och våt asfalt sveper genom rummet."
    },
    {
        brand: "RADANNONS TORGET",
        headline: "BYTES: EN HALV BURK INLAGD SILL MOT EN FUNGERANDE HELIKOPTER",
        subtext: "Sillen är av årgång 2021 (Löksill). Helikoptern bör vara nybesiktigad.",
        cta: "KONTAKTA RUNAR",
        badge: "BYTESMARKNAD",
        icon: "🚁",
        imageQuery: "helicopter aircraft",
        theme: "classified",
        layout: "split",
        clickMessage: "🚁 Runar svarar: 'Är det du som har helikoptern? Sillen står redo i kylskåpet!'"
    },
    {
        brand: "STATENS PÅSLAKAN-NÄMND",
        headline: "HAR DITT TÄCKE KORVAT IHOP SIG SOM EN BOLL LÄNGST NER I PÅSLAKANET?",
        subtext: "Kryp inte in i påslakanet ensam! Vi skickar en certifierad hörnskakare.",
        cta: "BEGÄR UTRYCKNING",
        badge: "SAMHÄLLSSKYDD",
        icon: "🛏️",
        imageQuery: "bed sheets bedroom",
        theme: "myndighet",
        layout: "myndighet",
        clickMessage: "🛏️ Varning: Handläggaren fastnade också inne i påslakanet. Skicka fler handläggare!"
    },
    {
        brand: "TV-SHOP FRITID",
        headline: "SVAMP-RADARN 5000™ – HITTAR KANTARELLER PÅ 8 MILS AVSTÅND!",
        subtext: "Piper även vid gulmålat grus, postbilar och borttappade golfbollar!",
        cta: "KÖP RADARN",
        price: "599:-",
        badge: "SKOGENS KUNG!",
        icon: "🍄",
        imageQuery: "mushroom chanterelle forest",
        theme: "tvshop",
        layout: "tvshop",
        clickMessage: "🍄 *BEEP BEEP!* Radarn har lokaliserat en kantarell (eller en gul legobit) i Enköping!"
    },
    {
        brand: "AFTONCHOCKEN EXTRA",
        headline: "CHOCK-TESTET: ÄR DU EN 'VI HÖRS'-PERSON SOM ALDRIG HÖR AV SIG?",
        subtext: "9 av 10 svenskar säger 'Vi måste ta en lunch snart!' och går sedan under jorden i 6 år",
        cta: "GÖR TESTET HÄR",
        badge: "RELATIONER",
        icon: "📱",
        imageQuery: "smartphone texting",
        theme: "tabloid",
        layout: "tabloid",
        clickMessage: "📱 Resultat: Du har 17 utlovade luncher från 2018 som väntar på dig!"
    },
    {
        brand: "377 TEGEL-TEXT",
        headline: "KVINNA LYCKADES ÖPPNA PLASTFÖRPACKNING UTAN SAX ELLER VÅLD",
        subtext: "Förpackningsindustrin i krismöte: 'Det här skulle inte vara tekniskt möjligt'",
        cta: "SIDA 383 >>",
        badge: "VETENSKAP 377",
        icon: "✂️",
        imageQuery: "scissors plastic package",
        theme: "texttv",
        layout: "texttv",
        clickMessage: "✂️ Sida 383: Vi har nu förstärkt alla skinkpaket med kevlar och superlim."
    },
    {
        brand: "LOKALA FIKA-KARTELLET",
        headline: "SMUGGEL-SEMLOR SÄLJES I GRÄNDEN BAKOM JÄRNHANDELN",
        subtext: "Äkta mandelmassa, 4 deciliter grädde, helt utan säsongstillstånd. Säg kodord 'Hetvägg'.",
        cta: "VISKA KODORD",
        price: "60:-",
        badge: "SVARTABÖRSEN",
        icon: "🧁",
        imageQuery: "cream bun bakery",
        theme: "localbiz",
        layout: "split",
        clickMessage: "🧁 *Pssst!* En man i trenchcoat räckte dig precis en kartong med florsocker på."
    }
];

let adQueue: AdBanner[] = [];
let currentAd: AdBanner | null = null;
let adIntervalId: number | null = null;
let isPaused = false;
let initialized = false;

// Cache of searched image URLs per query so we can randomize swiftly
const imageSearchCache = new Map<string, string[]>();

/**
 * Builds an immediate randomized fallback image URL from LoremFlickr / Picsum
 * while also querying Wikimedia Commons API for real web photos matching the query.
 */
function getFallbackImageUrl(query: string): string {
    const keyword = query.split(' ')[0] || 'random';
    const lock = Math.floor(Math.random() * 99999);
    return `https://loremflickr.com/640/260/${encodeURIComponent(keyword)}?lock=${lock}`;
}

async function resolveRandomWebImage(query: string): Promise<string> {
    const cached = imageSearchCache.get(query);
    if (cached && cached.length > 0) {
        return cached[Math.floor(Math.random() * cached.length)];
    }

    try {
        const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=filetype:bitmap+${encodeURIComponent(
            query
        )}&gsrlimit=15&prop=imageinfo&iiprop=url&iiurlwidth=640&format=json&origin=*`;

        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            const pages = data?.query?.pages;
            if (pages) {
                const urls: string[] = [];
                for (const key of Object.keys(pages)) {
                    const info = pages[key]?.imageinfo?.[0];
                    const url = info?.thumburl || info?.url;
                    if (url && typeof url === 'string' && !url.endsWith('.svg') && !url.endsWith('.tif')) {
                        urls.push(url);
                    }
                }
                if (urls.length > 0) {
                    imageSearchCache.set(query, urls);
                    return urls[Math.floor(Math.random() * urls.length)];
                }
            }
        }
    } catch {
        // Ignore network errors and fall back to LoremFlickr / Picsum
    }

    return getFallbackImageUrl(query);
}

function getNextAd(): AdBanner {
    if (adQueue.length === 0) {
        adQueue = [...adBanners];
        for (let i = adQueue.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [adQueue[i], adQueue[j]] = [adQueue[j], adQueue[i]];
        }
        if (currentAd && adQueue[0] === currentAd && adQueue.length > 1) {
            [adQueue[0], adQueue[1]] = [adQueue[1], adQueue[0]];
        }
    }
    currentAd = adQueue.shift()!;
    return currentAd;
}

function renderAdMarkup(ad: AdBanner, initialImgUrl: string): string {
    const badgeHtml = ad.badge ? `<span class="ad-badge">${ad.badge}</span>` : '';
    const priceHtml = ad.price ? `<span class="ad-price-tag">${ad.price}</span>` : '';
    const thumbHtml = `
        <div class="ad-photo-thumb" style="background-image: url('${initialImgUrl}')">
            <span class="ad-thumb-emoji">${ad.icon}</span>
            ${priceHtml}
        </div>
    `;

    if (ad.layout === 'win95') {
        return `
            <div class="ad-win95-frame">
                <div class="ad-win95-titlebar">
                    <span class="ad-win95-title">${ad.icon} ${ad.brand}.EXE</span>
                    <div class="ad-win95-controls">
                        <button type="button" class="ad-next-btn" title="Nästa annons">↻</button>
                        <button type="button" class="ad-close-btn" title="Stäng">✕</button>
                    </div>
                </div>
                <div class="ad-win95-body">
                    ${thumbHtml}
                    <div class="ad-win95-text">
                        <div class="ad-headline">${ad.headline}</div>
                        <div class="ad-subtext">${ad.subtext}</div>
                    </div>
                    <button type="button" class="ad-cta-btn">${ad.cta}</button>
                </div>
            </div>
        `;
    }

    if (ad.layout === 'texttv') {
        return `
            <div class="ad-controls-floating">
                <button type="button" class="ad-next-btn" title="Byt reklam">↻</button>
                <button type="button" class="ad-close-btn" title="Stäng reklam">✕</button>
            </div>
            <div class="ad-texttv-frame">
                <div class="ad-texttv-header">
                    <span class="ttv-page">P377</span>
                    <span class="ttv-brand">${ad.brand}</span>
                    <span class="ttv-clock">${new Date().toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
                <div class="ad-texttv-body">
                    ${thumbHtml}
                    <div class="ad-texttv-main">
                        <div class="ad-headline">${ad.headline}</div>
                        <div class="ad-subtext">${ad.subtext}</div>
                    </div>
                    <button type="button" class="ad-cta-btn">${ad.cta}</button>
                </div>
            </div>
        `;
    }

    if (ad.layout === 'tabloid') {
        return `
            <div class="ad-controls-floating">
                <button type="button" class="ad-next-btn" title="Byt reklam">↻</button>
                <button type="button" class="ad-close-btn" title="Stäng reklam">✕</button>
            </div>
            <div class="ad-tabloid-frame">
                <div class="ad-tabloid-sidebar">
                    <span class="ad-tabloid-brand">${ad.brand}</span>
                    ${badgeHtml}
                </div>
                ${thumbHtml}
                <div class="ad-tabloid-main">
                    <div class="ad-headline">${ad.headline}</div>
                    <div class="ad-subtext">${ad.subtext}</div>
                </div>
                <div class="ad-tabloid-action">
                    <button type="button" class="ad-cta-btn">${ad.cta}</button>
                </div>
            </div>
        `;
    }

    if (ad.layout === 'tvshop') {
        return `
            <div class="ad-controls-floating">
                <button type="button" class="ad-next-btn" title="Byt reklam">↻</button>
                <button type="button" class="ad-close-btn" title="Stäng reklam">✕</button>
            </div>
            <div class="ad-tvshop-frame">
                ${thumbHtml}
                <div class="ad-tvshop-burst">
                    <span class="burst-icon">${ad.icon}</span>
                    ${priceHtml || '<span class="ad-price-tag">REA!</span>'}
                </div>
                <div class="ad-tvshop-main">
                    <div class="ad-brand-row">
                        <span class="ad-brand">${ad.brand}</span>
                        ${badgeHtml}
                    </div>
                    <div class="ad-headline">${ad.headline}</div>
                    <div class="ad-subtext">${ad.subtext}</div>
                </div>
                <button type="button" class="ad-cta-btn">${ad.cta}</button>
            </div>
        `;
    }

    if (ad.layout === 'myndighet') {
        return `
            <div class="ad-controls-floating">
                <button type="button" class="ad-next-btn" title="Byt reklam">↻</button>
                <button type="button" class="ad-close-btn" title="Stäng reklam">✕</button>
            </div>
            <div class="ad-myndighet-frame">
                ${thumbHtml}
                <div class="ad-myndighet-main">
                    <div class="ad-brand-row">
                        <span class="ad-brand">${ad.brand}</span>
                        ${badgeHtml}
                    </div>
                    <div class="ad-headline">${ad.headline}</div>
                    <div class="ad-subtext">${ad.subtext}</div>
                </div>
                <button type="button" class="ad-cta-btn">${ad.cta}</button>
            </div>
        `;
    }

    // Default 'split' layout
    return `
        <div class="ad-controls-floating">
            <button type="button" class="ad-next-btn" title="Byt reklam">↻</button>
            <button type="button" class="ad-close-btn" title="Stäng reklam">✕</button>
        </div>
        <div class="ad-split-frame">
            ${thumbHtml}
            <div class="ad-split-main">
                <div class="ad-brand-row">
                    <span class="ad-brand">${ad.brand}</span>
                    ${badgeHtml}
                </div>
                <div class="ad-headline">${ad.headline}</div>
                <div class="ad-subtext">${ad.subtext}</div>
            </div>
            <div class="ad-split-cta">
                <button type="button" class="ad-cta-btn">${ad.cta}</button>
            </div>
        </div>
    `;
}

const closeSnarkMessages = [
    "🚫 Du kan inte stänga reklamen! Vi bytte ut den mot en ännu konstigare istället.",
    "🛡️ AdBlocker avvisad av Kommunala Mysterieverket. Här får du en ny annons!",
    "💸 För att stänga reklamen krävs Tegel Premium Gold Plus (4 999 kr/halvtimme).",
    "🔄 Reklam stängd! Laddar omedelbart in ersättningsreklam..."
];

export function showNextAd(animate = true) {
    const adSpaces = document.querySelectorAll<HTMLElement>('.ad-space');
    if (adSpaces.length === 0) return;

    const ad = getNextAd();

    adSpaces.forEach(space => {
        if (animate && space.innerHTML.trim() !== '') {
            space.classList.add('ad-switching');
            setTimeout(() => {
                applyAdToSpace(space, ad);
                space.classList.remove('ad-switching');
            }, 180);
        } else {
            applyAdToSpace(space, ad);
        }
    });
}

function applyAdToSpace(space: HTMLElement, ad: AdBanner) {
    const fallbackUrl = `https://picsum.photos/seed/${encodeURIComponent(ad.brand + Math.floor(Math.random() * 1000))}/800/300`;
    space.className = `ad-space theme-${ad.theme} layout-${ad.layout}`;
    space.innerHTML = `
        <div class="ad-bg-image" style="background-image: url('${fallbackUrl}')"></div>
        <div class="ad-bg-overlay"></div>
        <div class="ad-bg-pattern"></div>
        <div class="ad-inner-wrapper">
            ${renderAdMarkup(ad, fallbackUrl)}
        </div>
        <div class="ad-progress-bar"></div>
    `;

    // Fetch a real topic-matched random image from the web and swap it in once preloaded
    resolveRandomWebImage(ad.imageQuery).then(webImageUrl => {
        const img = new Image();
        img.onload = () => {
            if (currentAd !== ad) return;
            const bgEl = space.querySelector<HTMLElement>('.ad-bg-image');
            const thumbEl = space.querySelector<HTMLElement>('.ad-photo-thumb');
            if (bgEl) bgEl.style.backgroundImage = `url('${webImageUrl}')`;
            if (thumbEl) thumbEl.style.backgroundImage = `url('${webImageUrl}')`;
        };
        img.src = webImageUrl;
    });
}

export function initAdSystem(onToast: (msg: string, type?: 'info' | 'error') => void) {
    if (initialized) {
        return;
    }
    initialized = true;

    showNextAd(false);

    const adSpaces = document.querySelectorAll<HTMLElement>('.ad-space');
    adSpaces.forEach(space => {
        space.addEventListener('mouseenter', () => {
            isPaused = true;
            space.classList.add('ad-paused');
        });

        space.addEventListener('mouseleave', () => {
            isPaused = false;
            space.classList.remove('ad-paused');
        });

        space.addEventListener('click', (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            if (target.closest('.ad-next-btn')) {
                e.stopPropagation();
                showNextAd(true);
                resetAdTimer();
                return;
            }

            if (target.closest('.ad-close-btn')) {
                e.stopPropagation();
                const snark = closeSnarkMessages[Math.floor(Math.random() * closeSnarkMessages.length)];
                onToast(snark, 'info');
                showNextAd(true);
                resetAdTimer();
                return;
            }

            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            space.appendChild(ripple);
            const rect = space.getBoundingClientRect();
            ripple.style.left = `${e.clientX - rect.left}px`;
            ripple.style.top = `${e.clientY - rect.top}px`;
            setTimeout(() => ripple.remove(), 600);

            if (currentAd) {
                onToast(currentAd.clickMessage, 'info');
            }
        });
    });

    resetAdTimer();
}

function resetAdTimer() {
    if (adIntervalId !== null) {
        window.clearInterval(adIntervalId);
    }
    adIntervalId = window.setInterval(() => {
        if (!isPaused) {
            showNextAd(true);
        }
    }, 9000);
}
