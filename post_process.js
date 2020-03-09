const jsonfile = require("jsonfile")

let data = jsonfile.readFileSync("res/data_p.json")
let count = 0
let p_count = 0
let unp = {}

data.vehicles.forEach( ( data )=>{
        let splitted_name = data.name.split(" ")
        let name = data.name

        if ( data.vendor !== undefined ) {
                p_count++
        }

        if ( data.vendor === undefined && splitted_name.length < 2 ) {
                count++
                // console.log(data.name, count)

                unp[data.name] = unp[data.name] || 0
                unp[data.name]++
 
                process_name(data, /focus|Focus|Фокус|фокус/, "Ford", "Focus")
                process_name(data, /kadett|Kadett|Кадет|кадет/, "Opel", "Kadett")
                process_name(data, /2141/, "ВАЗ", "2141")
                process_name(data, /2101/, "ВАЗ", "2101")
                process_name(data, /2105/, "ВАЗ", "2105")
                process_name(data, /2115/, "ВАЗ", "2115")
                process_name(data, /2107/, "ВАЗ", "2107")
                process_name(data, /2103/, "ВАЗ", "2103")
                process_name(data, /2104/, "ВАЗ", "2104")
                process_name(data, /2111/, "ВАЗ", "2111")
                process_name(data, /2112/, "ВАЗ", "2112")
                process_name(data, /2114/, "ВАЗ", "2114")
                process_name(data, /2102/, "ВАЗ", "2102")
                process_name(data, /2113/, "ВАЗ", "2113")
                process_name(data, /нива|niva/, "ВАЗ", "нива")
                process_name(data, /приора/, "ВАЗ", "приора")
                process_name(data, /калина/, "ВАЗ", "калина")
                process_name(data, /vectra/, "Opel", "Vectra")
                process_name(data, /logan/, "Renault", "Logan")
                process_name(data, /laguna/, "Renault", "Laguna")
                process_name(data, /a-class/, "Mercedes", "A-Class")
                process_name(data, /transporter/, "Volkswagen", "Transporter")
                process_name(data, /vivaro/, "Mercedes", "Vivaro")
                process_name(data, /mustang/, "Ford", "Mustang")
                process_name(data, /galant/, "Mitsubishi", "Galant")
                process_name(data, /3-series/, "BMW", "3-Series")
                process_name(data, /5-series/, "BMW", "5-Series")
                process_name(data, /fabia/, "Skoda", "Fabia")
                process_name(data, /x5/, "BMW", "X5")
                process_name(data, /605/, "Peugeot", "605")
                process_name(data, /rapid/, "Skoda", "Rapid")
                process_name(data, /polo/, "Volkswagen", "Polo")
                process_name(data, /ibiza/, "Seat", "Ibiza")
                process_name(data, /cordoba/, "Seat", "Cordoba")
                process_name(data, /sonata/, "Hyundai", "Sonata")
                process_name(data, /emgrand-8/, "Geely", "Emgrand-8")
                process_name(data, /octavia/, "Skoda", "Octavia")
                process_name(data, /caddy/, "Volkswagen", "Caddy")
                process_name(data, /a4/, "Audi", "A4")
                process_name(data, /a6/, "Audi", "A6")
                process_name(data, /sorento/, "Kia", "Sorento")
                process_name(data, /passat/, "Volkswagen", "Passat")
                process_name(data, /lancer/, "Mitsubishi", "Lancer")
                process_name(data, /ducato/, "Fiat", "Ducato")
                process_name(data, /doblo/, "Fiat", "Doblo")
                process_name(data, /prado/, "Toyota", "Prado")
                process_name(data, /caliber/, "Dodge", "Caliber")
                process_name(data, /scenic/, "Renault", "Scenic")
                process_name(data, /fusion/, "Ford", "Fusion")
                process_name(data, /captur/, "Renault", "Captur")
                process_name(data, /camry/, "Toyota", "Camry")
                process_name(data, /tucson/, "Hyundai", "Tucson")
                process_name(data, /mondeo/, "ford", "modeo")
                process_name(data, /superb/, "skoda", "superb")
                process_name(data, /accord/, "honda", "accord")
                process_name(data, /fiesta/, "ford", "fiesta")
                process_name(data, /sportage/, "kia", "sportage")
                process_name(data, /outlander/, "mitsubishi", "outlander")
                process_name(data, /avensis/, "toyota", "avensis")
                process_name(data, /nexia/, "daewoo", "nexia")
                process_name(data, /astra/, "opel", "astra")
                process_name(data, /cerato/, "kia", "cerato")
                process_name(data, /touareg/, "volkswagen", "touareg")
                process_name(data, /matiz/, "daewoo", "matiz")
                process_name(data, /berlingo/, "citroen", "berlingo")
                process_name(data, /amulet/, "chery", "amulet")
                process_name(data, /tiggo/, "volkswagen", "tiggo")
                process_name(data, /civic/, "honda", "civic")
                process_name(data, /elantra/, "hyundai", "elantra")
                process_name(data, /primera/, "nissan", "primera")
                process_name(data, /zafira/, "opel", "zafira")
                process_name(data, /tiguan/, "volkswagen", "tiguan")
                process_name(data, /transit/, "ford", "transit")
                process_name(data, /rav4/, "toyota", "rav4")
                process_name(data, /rio/, "kia", "rio")
                process_name(data, /sprinter/, "mercedes", "sprinter")
                process_name(data, /connect/, "ford", "connect")
                process_name(data, /getz/, "hyundai", "getz")
                process_name(data, /вида|vida/, "заз", "vida")
                process_name(data, /partner/, "peugeot", "partner")
                process_name(data, /scorpio/, "auto", "scorpio")
                process_name(data, /combo/, "opel", "combo")
                process_name(data, /cr-v/, "honda", "cr-v")
                process_name(data, /626/, "mazda", "626")
                process_name(data, /omega/, "opel", "omega")
                process_name(data, /газель/, "газ", "газель")
                process_name(data, /i30/, "рyundai", "i30")
                process_name(data, /qashqai/, "nissan", "qashqai")
                process_name(data, /pajero/, "mitsubishi", "pajero")
                process_name(data, /x-trail/, "nissan", "x-trail")
                process_name(data, /optima/, "kia", "optima")
                process_name(data, /micra/, "nissan", "micra")
                process_name(data, /ascona/, "opel", "ascona")
                process_name(data, /touran/, "volkswagen", "touran")
                process_name(data, /epica/, "chevrolet", "epica")
                process_name(data, /carina/, "toyota", "carina")
                process_name(data, /nubira/, "daewoo", "nubira")
                process_name(data, /korando/, "ssang-yong", "korando")
                process_name(data, /escort/, "ford", "escort")
                process_name(data, /ix35/, "hyundai", "ix35")
                process_name(data, /insignia/, "opel", "insignia")
                process_name(data, /sandero/, "renault", "sandero")
                process_name(data, /cruze/, "chevrolet", "cruze")
                process_name(data, /cx-5/, "mazda", "cx-5")
                process_name(data, /cx-7/, "mazda", "cx-7")
                process_name(data, /maxima/, "nissan", "maxima")
                process_name(data, /almera/, "nissan", "almera")
                process_name(data, /bora/, "volkswagen", "bora")
                process_name(data, /jumpy/, "citroen", "jumpy")
                process_name(data, /legacy/, "subaru", "legacy")
                process_name(data, /note/, "nissan", "note")
                process_name(data, /teana/, "nissan", "teana")
                process_name(data, /c5/, "citroen", "c5")
                process_name(data, /bluebird/, "nissan", "bluebird")
                process_name(data, /s-class/, "mercedes", "s-class")
                process_name(data, /escape/, "ford", "escape")
                process_name(data, /clio/, "renault", "clio")
                process_name(data, /cc/, "volkswagen", "cc")
                process_name(data, /meriva/, "opel", "meriva")
                process_name(data, /emgrand-7/, "geely", "emgrand-7")
                process_name(data, /forza/, "заз", "forza")
                process_name(data, /symbol/, "renault", "symbol")
                process_name(data, /412/, "москвич", "412")
                process_name(data, /rogue/, "nissan", "rogue")
                process_name(data, /mk/, "geely", "mk")
                process_name(data, /ck/, "geely", "ck")
                process_name(data, /sunny/, "nissan", "sunny")
                process_name(data, /rx/, "mazda", "rx")
                process_name(data, /tiida/, "nissan", "tiida")
                process_name(data, /evanda/, "chevrolet", "evanda")
                process_name(data, /picanto/, "kia", "picanto")
                process_name(data, /fiorino/, "fiat", "fiorino")
                process_name(data, /matrix/, "hyundai", "matrix")
                process_name(data, /felicia/, "skoda", "felicia")
                process_name(data, /bipper/, "peugeot", "bipper")
                process_name(data, /compass/, "jeep", "compass")
                process_name(data, /ml-class/, "Mercedes", "ml-class")
                process_name(data, /carisma/, "Mitsubishi", "carisma")
                process_name(data, /impreza/, "subaru", "impreza")
                process_name(data, /prius/, "toyota", "prius")
                process_name(data, /toledo/, "seat", "toledo")
                process_name(data, /boxer/, "peugeot", "boxer")
                process_name(data, /vanette/, "nissan", "vanette")
                process_name(data, /tempra/, "fiat", "tempra")
                process_name(data, /jumper/, "citroen", "jumper")
                process_name(data, /magentis/, "kia", "magentis")
                process_name(data, /s80/, "volvo", "s80")
                process_name(data, /taunus/, "ford", "taunus")
                process_name(data, /sx4/, "suzuki", "sx4")
                process_name(data, /duster/, "renault", "duster")
                process_name(data, /auris/, "toyota", "auris")
                process_name(data, /roomster/, "skoda", "roomster")
                process_name(data, /tipo/, "fiat", "tipo")
                process_name(data, /7-series/, "bmw", "7-series")
                process_name(data, /cayenne/, "porsche", "cayenne")
                process_name(data, /crafter/, "volkswagen", "crafter")
                process_name(data, /kuga/, "ford", "kuga")
                process_name(data, /x6/, "bmw", "x6")
                process_name(data, /x3/, "bmw", "x3")
                process_name(data, /c-class/, "mercedes", "c-class")
                process_name(data, /q7/, "audi", "q7")
                process_name(data, /kimo/, "chery", "kimo")
                process_name(data, /colt/, "mitsubishi", "colt")
                process_name(data, /eastar/, "chery", "eastar")
                process_name(data, /carens/, "kia", "carens")
                process_name(data, /rexton/, "ssang-yong", "rexton")
                process_name(data, /fluence/, "renault", "rexton")
                process_name(data, /qq/, "chery", "qq")
                process_name(data, /yaris/, "toyota", "yaris")
                process_name(data, /a3/, "audi", "a3")
                process_name(data, /captiva/, "chevrolet", "captiva")
                process_name(data, /clk-class/, "mercedes", "clk-class")
                process_name(data, /q5/, "audi", "q5")
                process_name(data, /c3/, "audi", "c3")
                process_name(data, /c4/, "audi", "c4")
                process_name(data, /c5/, "audi", "c5")
                process_name(data, /h200/, "hyundai", "h200")
                process_name(data, /hiace/, "toyota", "hiace")
                process_name(data, /c-max/, "ford", "c-max")
                process_name(data, /c-elysse/, "citroen", "c-elysse")
                //Hyundai 

        }

} )

function process_name( data, regexp, vendor, name ) {
        if ( data.name.toLowerCase().match(regexp) ) {
                data.vendor = `${vendor}`.toLowerCase()
                data.model_name = `${name}`.toLowerCase()
                data.name = `${vendor} ~ ${name}`.toLowerCase()
        }
}

for (var k in unp){
        if ( unp[k] < 5 ) {
                delete unp[k]
        }
}

let vendors = {}
let models = {}
let result = {
        total_count: 0,
        vehicles: []
}
data.vehicles.forEach( ( data )=>{
        
        if ( data.vendor ) {
                data.vendor = data.vendor.replace(/mercedess|Mercedess|Mercedes/, "mercedes")
                data.name = data.name.replace(/mercedess|Mercedess|Mercedes/, "mercedes")

                data.vendor = data.vendor.replace(/рyundai/, "hyundai")
                data.name = data.name.replace(/рyundai/, "hyundai")

                data.vendor = data.vendor.replace(/Toyotta|Toyota/, "toyota")
                data.name = data.name.replace(/Toyotta|Toyota/, "mercedes")

                if (data.vendor === "auto") {
                        data.vendor = "ford"
                }

                result.total_count++
                vendors[data.vendor.toLowerCase()] = vendors[data.vendor.toLowerCase()] || 0
                vendors[data.vendor.toLowerCase()]++

                models[data.vendor.toLowerCase()] = models[data.vendor.toLowerCase()] || {}
                models[data.vendor.toLowerCase()][data.model_name.toLowerCase()] = models[data.vendor.toLowerCase()][data.model_name.toLowerCase()] || 0
                models[data.vendor.toLowerCase()][data.model_name.toLowerCase()]++

                result.vehicles.push( data )
        }

        result.vendors = vendors
        result.models = models
} )

jsonfile.writeFileSync("res/data_p2.json", result, { spaces: 4 })