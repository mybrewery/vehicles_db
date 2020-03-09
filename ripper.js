
const request = global.request = require("request")
const jsdom = global.jsdom = require("jsdom");
const jsonfile = require("jsonfile")
const fs = global.fs =require("fs")
const path = require("path")
const rimraf = require("rimraf")
const randomstring = require("randomstring")
const { JSDOM } = jsdom;
const iconv = global.iconv =require("iconv-lite")
const windows1251 = require('windows-1251');

rimraf.sync("res")
fs.mkdirSync("res")
fs.mkdirSync("res/pics")

let data = {
        total_count: 0,
        vehicles: []
}


function generate_link ( page ) {
        return `http://rst.ua/ukr/oldcars/?task=newresults&make%5B%5D=0&year%5B%5D=0&year%5B%5D=0&price%5B%5D=0&price%5B%5D=0&engine%5B%5D=0&engine%5B%5D=0&gear=0&fuel=0&drive=0&condition=0&from=sform&start=${page}`
}

var download = function(uri, filename, callback){
        request.head(uri, function(err, res, body){
                request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
};

function parse_page ( page ) {
        request({
                uri: generate_link( page ),
                encoding: 'binary',
                headers: {
                        'Content-Type': 'text/plain; charset=cp1251'
                }
        }, (err, response, body)=>{
                body = windows1251.decode(body);
                const dom = new JSDOM(body);
                dom.window.document.body.querySelectorAll(".rst-page-wrap div.rst-ocb-i").forEach((el)=>{
                        try {
                                let name = el.querySelector(".rst-ocb-i-h span")
                                if (!name) {
                                        return
                                }
        
                                data.total_count++

                                let id = randomstring.generate({
                                        length: 32,
                                        charset: 'alphabetic'
                                })
        
                                
                                let preview_image = el.querySelector("img.rst-ocb-i-i")
                                name = name.innerHTML.replace(/продам/gm, "")
                                name = name.replace(` ${name.split( " " )[1]}`, "").trim()
        
                                let price = el.querySelector("li.rst-ocb-i-d-l-i span.rst-ocb-i-d-l-i-s-p")
                                price = price.innerHTML.replace(/\D+/g, '')
        
                                let year = el.querySelector("li.rst-ocb-i-d-l-i:nth-child(3) span.rst-ocb-i-d-l-i-s")
                                year = year.innerHTML.replace(/\D+/g, '')
        
                                let mileage = el.querySelector("li.rst-ocb-i-d-l-i:nth-child(3)")
                                mileage = mileage.childNodes[2].textContent.replace(/\D+/g, '')
        
                                let engine_capacity = el.querySelector("li.rst-ocb-i-d-l-i:nth-child(5)")
                                engine_capacity = parseFloat(engine_capacity.childNodes[1].textContent)
        
                                let engine_type = el.querySelector("li.rst-ocb-i-d-l-i:nth-child(5)")
                                engine_type = (engine_type.childNodes[2].textContent.replace(/[a-z]/gi,'')).split(" (")[0]
        
                                let gearbox_type = el.querySelector("li.rst-ocb-i-d-l-i:nth-child(5)")
                                gearbox_type = gearbox_type.childNodes[3].textContent.replace(/[a-z]/gi,'')
        
                                let condition = el.querySelector("li.rst-ocb-i-d-l-j:nth-child(4) span")
                                condition = condition.innerHTML.replace(/[a-z]/gi,'')
        
                                let location = el.querySelector("li.rst-ocb-i-d-l-j:nth-child(2) span")
                                location = location.innerHTML
        
                                preview_image = preview_image.getAttribute("src")
                                download( preview_image, `res/pics/${ id }.jpg`, ()=>{} )
        
                                /** */
        
                                data.vehicles.push({
                                        id,
                                        name,
                                        preview_image: `res/pics/${ id }.jpg`,
                                        price,
                                        year,
                                        mileage,
                                        engine_capacity,
                                        gearbox_type,
                                        engine_type,
                                        location,
                                        condition
                                })
        
                                jsonfile.writeFileSync("res/data.json", data, { spaces: 4 } )
                        } catch ( err ) {
                                console.log(err)
                        }
                        
                })
        })
}

let current_page = 0
let last_page = 1000

let interval_id = setInterval(()=>{
        if (current_page >= last_page) {
                console.log("DONE!");
        } else {
                console.log(`ITERATION: ${ current_page }`)
                parse_page( current_page )
                current_page++
        }
}, 500)


setTimeout(()=> null, 1 * 24 * 60 * 60 * 1000)