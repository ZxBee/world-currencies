/* =========================================================
   WORLD CURRENCIES
   MAIN JAVASCRIPT
   ========================================================= */


/* =========================================================
   195 COUNTRIES
   193 UN MEMBERS + PALESTINE + VATICAN CITY
   ========================================================= */

const countryData = [

    ["Afghanistan","🇦🇫","Afghani","AFN","؋","Asia"],
    ["Albania","🇦🇱","Lek","ALL","L","Europe"],
    ["Algeria","🇩🇿","Algerian Dinar","DZD","دج","Africa"],
    ["Andorra","🇦🇩","Euro","EUR","€","Europe"],
    ["Angola","🇦🇴","Kwanza","AOA","Kz","Africa"],
    ["Antigua and Barbuda","🇦🇬","East Caribbean Dollar","XCD","$","Americas"],
    ["Argentina","🇦🇷","Argentine Peso","ARS","$","Americas"],
    ["Armenia","🇦🇲","Armenian Dram","AMD","֏","Asia"],
    ["Australia","🇦🇺","Australian Dollar","AUD","$","Oceania"],
    ["Austria","🇦🇹","Euro","EUR","€","Europe"],
    ["Azerbaijan","🇦🇿","Azerbaijani Manat","AZN","₼","Asia"],

    ["Bahamas","🇧🇸","Bahamian Dollar","BSD","$","Americas"],
    ["Bahrain","🇧🇭","Bahraini Dinar","BHD",".د.ب","Asia"],
    ["Bangladesh","🇧🇩","Taka","BDT","৳","Asia"],
    ["Barbados","🇧🇧","Barbadian Dollar","BBD","$","Americas"],
    ["Belarus","🇧🇾","Belarusian Ruble","BYN","Br","Europe"],
    ["Belgium","🇧🇪","Euro","EUR","€","Europe"],
    ["Belize","🇧🇿","Belize Dollar","BZD","BZ$","Americas"],
    ["Benin","🇧🇯","West African CFA Franc","XOF","CFA","Africa"],
    ["Bhutan","🇧🇹","Ngultrum","BTN","Nu.","Asia"],
    ["Bolivia","🇧🇴","Boliviano","BOB","Bs.","Americas"],
    ["Bosnia and Herzegovina","🇧🇦","Convertible Mark","BAM","KM","Europe"],
    ["Botswana","🇧🇼","Pula","BWP","P","Africa"],
    ["Brazil","🇧🇷","Brazilian Real","BRL","R$","Americas"],
    ["Brunei","🇧🇳","Brunei Dollar","BND","$","Asia"],
    ["Bulgaria","🇧🇬","Euro","EUR","€","Europe"],
    ["Burkina Faso","🇧🇫","West African CFA Franc","XOF","CFA","Africa"],
    ["Burundi","🇧🇮","Burundian Franc","BIF","FBu","Africa"],

    ["Cabo Verde","🇨🇻","Cape Verdean Escudo","CVE","$","Africa"],
    ["Cambodia","🇰🇭","Riel","KHR","៛","Asia"],
    ["Cameroon","🇨🇲","Central African CFA Franc","XAF","CFA","Africa"],
    ["Canada","🇨🇦","Canadian Dollar","CAD","$","Americas"],
    ["Central African Republic","🇨🇫","Central African CFA Franc","XAF","CFA","Africa"],
    ["Chad","🇹🇩","Central African CFA Franc","XAF","CFA","Africa"],
    ["Chile","🇨🇱","Chilean Peso","CLP","$","Americas"],
    ["China","🇨🇳","Yuan Renminbi","CNY","¥","Asia"],
    ["Colombia","🇨🇴","Colombian Peso","COP","$","Americas"],
    ["Comoros","🇰🇲","Comorian Franc","KMF","CF","Africa"],
    ["Congo","🇨🇬","Central African CFA Franc","XAF","CFA","Africa"],
    ["Costa Rica","🇨🇷","Costa Rican Colón","CRC","₡","Americas"],
    ["Côte d'Ivoire","🇨🇮","West African CFA Franc","XOF","CFA","Africa"],
    ["Croatia","🇭🇷","Euro","EUR","€","Europe"],
    ["Cuba","🇨🇺","Cuban Peso","CUP","$","Americas"],
    ["Cyprus","🇨🇾","Euro","EUR","€","Europe"],
    ["Czechia","🇨🇿","Czech Koruna","CZK","Kč","Europe"],

    ["Democratic Republic of the Congo","🇨🇩","Congolese Franc","CDF","FC","Africa"],
    ["Denmark","🇩🇰","Danish Krone","DKK","kr","Europe"],
    ["Djibouti","🇩🇯","Djiboutian Franc","DJF","Fdj","Africa"],
    ["Dominica","🇩🇲","East Caribbean Dollar","XCD","$","Americas"],
    ["Dominican Republic","🇩🇴","Dominican Peso","DOP","RD$","Americas"],

    ["Ecuador","🇪🇨","United States Dollar","USD","$","Americas"],
    ["Egypt","🇪🇬","Egyptian Pound","EGP","E£","Africa"],
    ["El Salvador","🇸🇻","United States Dollar","USD","$","Americas"],
    ["Equatorial Guinea","🇬🇶","Central African CFA Franc","XAF","CFA","Africa"],
    ["Eritrea","🇪🇷","Nakfa","ERN","Nfk","Africa"],
    ["Estonia","🇪🇪","Euro","EUR","€","Europe"],
    ["Eswatini","🇸🇿","Lilangeni","SZL","E","Africa"],
    ["Ethiopia","🇪🇹","Birr","ETB","Br","Africa"],

    ["Fiji","🇫🇯","Fijian Dollar","FJD","$","Oceania"],
    ["Finland","🇫🇮","Euro","EUR","€","Europe"],
    ["France","🇫🇷","Euro","EUR","€","Europe"],

    ["Gabon","🇬🇦","Central African CFA Franc","XAF","CFA","Africa"],
    ["Gambia","🇬🇲","Dalasi","GMD","D","Africa"],
    ["Georgia","🇬🇪","Lari","GEL","₾","Asia"],
    ["Germany","🇩🇪","Euro","EUR","€","Europe"],
    ["Ghana","🇬🇭","Ghanaian Cedi","GHS","₵","Africa"],
    ["Greece","🇬🇷","Euro","EUR","€","Europe"],
    ["Grenada","🇬🇩","East Caribbean Dollar","XCD","$","Americas"],
    ["Guatemala","🇬🇹","Quetzal","GTQ","Q","Americas"],
    ["Guinea","🇬🇳","Guinean Franc","GNF","FG","Africa"],
    ["Guinea-Bissau","🇬🇼","West African CFA Franc","XOF","CFA","Africa"],
    ["Guyana","🇬🇾","Guyanese Dollar","GYD","$","Americas"],

    ["Haiti","🇭🇹","Gourde","HTG","G","Americas"],
    ["Honduras","🇭🇳","Lempira","HNL","L","Americas"],
    ["Hungary","🇭🇺","Forint","HUF","Ft","Europe"],

    ["Iceland","🇮🇸","Icelandic Króna","ISK","kr","Europe"],
    ["India","🇮🇳","Indian Rupee","INR","₹","Asia"],
    ["Indonesia","🇮🇩","Indonesian Rupiah","IDR","Rp","Asia"],
    ["Iran","🇮🇷","Iranian Rial","IRR","﷼","Asia"],
    ["Iraq","🇮🇶","Iraqi Dinar","IQD","ع.د","Asia"],
    ["Ireland","🇮🇪","Euro","EUR","€","Europe"],
    ["Israel","🇮🇱","Israeli New Shekel","ILS","₪","Asia"],
    ["Italy","🇮🇹","Euro","EUR","€","Europe"],

    ["Jamaica","🇯🇲","Jamaican Dollar","JMD","$","Americas"],
    ["Japan","🇯🇵","Japanese Yen","JPY","¥","Asia"],
    ["Jordan","🇯🇴","Jordanian Dinar","JOD","د.ا","Asia"],

    ["Kazakhstan","🇰🇿","Tenge","KZT","₸","Asia"],
    ["Kenya","🇰🇪","Kenyan Shilling","KES","KSh","Africa"],
    ["Kiribati","🇰🇮","Australian Dollar","AUD","$","Oceania"],
    ["Kuwait","🇰🇼","Kuwaiti Dinar","KWD","د.ك","Asia"],
    ["Kyrgyzstan","🇰🇬","Som","KGS","с","Asia"],

    ["Laos","🇱🇦","Lao Kip","LAK","₭","Asia"],
    ["Latvia","🇱🇻","Euro","EUR","€","Europe"],
    ["Lebanon","🇱🇧","Lebanese Pound","LBP","ل.ل","Asia"],
    ["Lesotho","🇱🇸","Loti","LSL","L","Africa"],
    ["Liberia","🇱🇷","Liberian Dollar","LRD","$","Africa"],
    ["Libya","🇱🇾","Libyan Dinar","LYD","ل.د","Africa"],
    ["Liechtenstein","🇱🇮","Swiss Franc","CHF","Fr","Europe"],
    ["Lithuania","🇱🇹","Euro","EUR","€","Europe"],
    ["Luxembourg","🇱🇺","Euro","EUR","€","Europe"],

    ["Madagascar","🇲🇬","Ariary","MGA","Ar","Africa"],
    ["Malawi","🇲🇼","Malawian Kwacha","MWK","MK","Africa"],
    ["Malaysia","🇲🇾","Malaysian Ringgit","MYR","RM","Asia"],
    ["Maldives","🇲🇻","Rufiyaa","MVR","Rf","Asia"],
    ["Mali","🇲🇱","West African CFA Franc","XOF","CFA","Africa"],
    ["Malta","🇲🇹","Euro","EUR","€","Europe"],
    ["Marshall Islands","🇲🇭","United States Dollar","USD","$","Oceania"],
    ["Mauritania","🇲🇷","Ouguiya","MRU","UM","Africa"],
    ["Mauritius","🇲🇺","Mauritian Rupee","MUR","₨","Africa"],
    ["Mexico","🇲🇽","Mexican Peso","MXN","$","Americas"],
    ["Micronesia","🇫🇲","United States Dollar","USD","$","Oceania"],
    ["Moldova","🇲🇩","Moldovan Leu","MDL","L","Europe"],
    ["Monaco","🇲🇨","Euro","EUR","€","Europe"],
    ["Mongolia","🇲🇳","Tögrög","MNT","₮","Asia"],
    ["Montenegro","🇲🇪","Euro","EUR","€","Europe"],
    ["Morocco","🇲🇦","Moroccan Dirham","MAD","د.م.","Africa"],
    ["Mozambique","🇲🇿","Metical","MZN","MT","Africa"],
    ["Myanmar","🇲🇲","Kyat","MMK","K","Asia"],

    ["Namibia","🇳🇦","Namibian Dollar","NAD","$","Africa"],
    ["Nauru","🇳🇷","Australian Dollar","AUD","$","Oceania"],
    ["Nepal","🇳🇵","Nepalese Rupee","NPR","₨","Asia"],
    ["Netherlands","🇳🇱","Euro","EUR","€","Europe"],
    ["New Zealand","🇳🇿","New Zealand Dollar","NZD","$","Oceania"],
    ["Nicaragua","🇳🇮","Córdoba","NIO","C$","Americas"],
    ["Niger","🇳🇪","West African CFA Franc","XOF","CFA","Africa"],
    ["Nigeria","🇳🇬","Nigerian Naira","NGN","₦","Africa"],
    ["North Korea","🇰🇵","North Korean Won","KPW","₩","Asia"],
    ["North Macedonia","🇲🇰","Denar","MKD","ден","Europe"],
    ["Norway","🇳🇴","Norwegian Krone","NOK","kr","Europe"],

    ["Oman","🇴🇲","Omani Rial","OMR","ر.ع.","Asia"],

    ["Pakistan","🇵🇰","Pakistani Rupee","PKR","₨","Asia"],
    ["Palau","🇵🇼","United States Dollar","USD","$","Oceania"],
    ["Palestine","🇵🇸","Israeli New Shekel","ILS","₪","Asia"],
    ["Panama","🇵🇦","Balboa","PAB","B/.","Americas"],
    ["Papua New Guinea","🇵🇬","Kina","PGK","K","Oceania"],
    ["Paraguay","🇵🇾","Guaraní","PYG","₲","Americas"],
    ["Peru","🇵🇪","Sol","PEN","S/","Americas"],
    ["Philippines","🇵🇭","Philippine Peso","PHP","₱","Asia"],
    ["Poland","🇵🇱","Polish Złoty","PLN","zł","Europe"],
    ["Portugal","🇵🇹","Euro","EUR","€","Europe"],

    ["Qatar","🇶🇦","Qatari Riyal","QAR","ر.ق","Asia"],

    ["Romania","🇷🇴","Romanian Leu","RON","lei","Europe"],
    ["Russia","🇷🇺","Russian Ruble","RUB","₽","Europe"],
    ["Rwanda","🇷🇼","Rwandan Franc","RWF","FRw","Africa"],

    ["Saint Kitts and Nevis","🇰🇳","East Caribbean Dollar","XCD","$","Americas"],
    ["Saint Lucia","🇱🇨","East Caribbean Dollar","XCD","$","Americas"],
    ["Saint Vincent and the Grenadines","🇻🇨","East Caribbean Dollar","XCD","$","Americas"],
    ["Samoa","🇼🇸","Samoan Tālā","WST","T","Oceania"],
    ["San Marino","🇸🇲","Euro","EUR","€","Europe"],
    ["São Tomé and Príncipe","🇸🇹","Dobra","STN","Db","Africa"],
    ["Saudi Arabia","🇸🇦","Saudi Riyal","SAR","﷼","Asia"],
    ["Senegal","🇸🇳","West African CFA Franc","XOF","CFA","Africa"],
    ["Serbia","🇷🇸","Serbian Dinar","RSD","дин.","Europe"],
    ["Seychelles","🇸🇨","Seychellois Rupee","SCR","₨","Africa"],
    ["Sierra Leone","🇸🇱","Leone","SLE","Le","Africa"],
    ["Singapore","🇸🇬","Singapore Dollar","SGD","$","Asia"],
    ["Slovakia","🇸🇰","Euro","EUR","€","Europe"],
    ["Slovenia","🇸🇮","Euro","EUR","€","Europe"],
    ["Solomon Islands","🇸🇧","Solomon Islands Dollar","SBD","$","Oceania"],
    ["Somalia","🇸🇴","Somali Shilling","SOS","Sh","Africa"],
    ["South Africa","🇿🇦","South African Rand","ZAR","R","Africa"],
    ["South Korea","🇰🇷","South Korean Won","KRW","₩","Asia"],
    ["South Sudan","🇸🇸","South Sudanese Pound","SSP","£","Africa"],
    ["Spain","🇪🇸","Euro","EUR","€","Europe"],
    ["Sri Lanka","🇱🇰","Sri Lankan Rupee","LKR","Rs","Asia"],
    ["Sudan","🇸🇩","Sudanese Pound","SDG","ج.س.","Africa"],
    ["Suriname","🇸🇷","Surinamese Dollar","SRD","$","Americas"],
    ["Sweden","🇸🇪","Swedish Krona","SEK","kr","Europe"],
    ["Switzerland","🇨🇭","Swiss Franc","CHF","Fr","Europe"],
    ["Syria","🇸🇾","Syrian Pound","SYP","£","Asia"],

    ["Tajikistan","🇹🇯","Somoni","TJS","SM","Asia"],
    ["Tanzania","🇹🇿","Tanzanian Shilling","TZS","TSh","Africa"],
    ["Thailand","🇹🇭","Baht","THB","฿","Asia"],
    ["Timor-Leste","🇹🇱","United States Dollar","USD","$","Asia"],
    ["Togo","🇹🇬","West African CFA Franc","XOF","CFA","Africa"],
    ["Tonga","🇹🇴","Paʻanga","TOP","T$","Oceania"],
    ["Trinidad and Tobago","🇹🇹","Trinidad and Tobago Dollar","TTD","$","Americas"],
    ["Tunisia","🇹🇳","Tunisian Dinar","TND","د.ت","Africa"],
    ["Turkey","🇹🇷","Turkish Lira","TRY","₺","Europe"],
    ["Turkmenistan","🇹🇲","Manat","TMT","m","Asia"],
    ["Tuvalu","🇹🇻","Australian Dollar","AUD","$","Oceania"],

    ["Uganda","🇺🇬","Ugandan Shilling","UGX","USh","Africa"],
    ["Ukraine","🇺🇦","Hryvnia","UAH","₴","Europe"],
    ["United Arab Emirates","🇦🇪","UAE Dirham","AED","د.إ","Asia"],
    ["United Kingdom","🇬🇧","Pound Sterling","GBP","£","Europe"],
    ["United States","🇺🇸","United States Dollar","USD","$","Americas"],
    ["Uruguay","🇺🇾","Uruguayan Peso","UYU","$U","Americas"],
    ["Uzbekistan","🇺🇿","Uzbekistan Som","UZS","лв","Asia"],

    ["Vanuatu","🇻🇺","Vatu","VUV","VT","Oceania"],
    ["Vatican City","🇻🇦","Euro","EUR","€","Europe"],
    ["Venezuela","🇻🇪","Bolívar Soberano","VES","Bs.S","Americas"],
    ["Vietnam","🇻🇳","Vietnamese Đồng","VND","₫","Asia"],

    ["Yemen","🇾🇪","Yemeni Rial","YER","﷼","Asia"],

    ["Zambia","🇿🇲","Zambian Kwacha","ZMW","ZK","Africa"],
    ["Zimbabwe","🇿🇼","Zimbabwe Gold","ZWG","ZiG","Africa"]

];


/* =========================================================
   ISO NUMERIC CODES
   ========================================================= */

const numericCodes = {

    AFN: "971",
    ALL: "008",
    DZD: "012",
    AOA: "973",
    XCD: "951",
    ARS: "032",
    AMD: "051",
    AUD: "036",
    EUR: "978",
    AZN: "944",
    BSD: "044",
    BHD: "048",
    BDT: "050",
    BBD: "052",
    BYN: "933",
    BZD: "084",
    XOF: "952",
    BTN: "064",
    BOB: "068",
    BAM: "977",
    BWP: "072",
    BRL: "986",
    BND: "096",
    BIF: "108",
    CVE: "132",
    KHR: "116",
    XAF: "950",
    CAD: "124",
    CLP: "152",
    CNY: "156",
    COP: "170",
    KMF: "174",
    CRC: "188",
    CUP: "192",
    CZK: "203",
    CDF: "976",
    DKK: "208",
    DJF: "262",
    DOP: "214",
    USD: "840",
    EGP: "818",
    ERN: "232",
    ETB: "230",
    SZL: "748",
    FJD: "242",
    GMD: "270",
    GEL: "981",
    GHS: "936",
    GTQ: "320",
    GNF: "324",
    GYD: "328",
    HTG: "332",
    HNL: "340",
    HUF: "348",
    ISK: "352",
    INR: "356",
    IDR: "360",
    IRR: "364",
    IQD: "368",
    ILS: "376",
    JMD: "388",
    JPY: "392",
    JOD: "400",
    KZT: "398",
    KES: "404",
    KGS: "417",
    KWD: "414",
    LAK: "418",
    LBP: "422",
    LSL: "426",
    LRD: "430",
    LYD: "434",
    CHF: "756",
    MGA: "969",
    MWK: "454",
    MYR: "458",
    MVR: "462",
    MRO: "478",
    MRU: "929",
    MUR: "480",
    MXN: "484",
    MDL: "498",
    MNT: "496",
    MAD: "504",
    MZN: "943",
    MMK: "104",
    NAD: "516",
    NPR: "524",
    NZD: "554",
    NIO: "558",
    NGN: "566",
    KPW: "408",
    MKD: "807",
    NOK: "578",
    OMR: "512",
    PKR: "586",
    PAB: "590",
    PGK: "598",
    PYG: "600",
    PEN: "604",
    PHP: "608",
    PLN: "985",
    QAR: "634",
    RON: "946",
    RUB: "643",
    RWF: "646",
    WST: "882",
    STN: "930",
    SAR: "682",
    RSD: "941",
    SCR: "690",
    SLE: "925",
    SGD: "702",
    SBD: "090",
    SOS: "706",
    ZAR: "710",
    KRW: "410",
    SSP: "728",
    LKR: "144",
    SDG: "938",
    SRD: "968",
    SEK: "752",
    SYP: "760",
    TJS: "972",
    TZS: "834",
    THB: "764",
    TMT: "934",
    TOP: "776",
    TTD: "780",
    TND: "788",
    TRY: "949",
    UAH: "980",
    AED: "784",
    GBP: "826",
    UYU: "858",
    UZS: "860",
    VUV: "548",
    VES: "928",
    VND: "704",
    YER: "886",
    ZMW: "967",
    ZWG: "924"

};


/* =========================================================
   CURRENCY HISTORY
   ========================================================= */

const currencyHistory = {

    AFN: {
        originalName: "Afghani",
        firstUse: "1925",
        introducedYear: "1925",
        introducedBy: "Kingdom of Afghanistan",
        family: "Afghani",
        minorUnit: "1 Afghani = 100 pul"
    },

    ALL: {
        originalName: "Lek",
        firstUse: "1926",
        introducedYear: "1926",
        introducedBy: "Bank of Albania",
        family: "Lek",
        minorUnit: "1 Lek = 100 qindarka"
    },

    EUR: {
        originalName: "Euro",
        firstUse: "1999",
        introducedYear: "1999 / 2002",
        introducedBy: "European Monetary Union",
        family: "Euro",
        minorUnit: "1 Euro = 100 cents"
    },

    GBP: {
        originalName: "Pound Sterling",
        firstUse: "8th century",
        introducedYear: "1707",
        introducedBy: "Kingdom of Great Britain / later United Kingdom",
        family: "Pound",
        minorUnit: "1 Pound = 100 pence"
    },

    USD: {
        originalName: "United States Dollar",
        firstUse: "1792",
        introducedYear: "1792",
        introducedBy: "United States government",
        family: "Dollar",
        minorUnit: "1 Dollar = 100 cents"
    },

    JPY: {
        originalName: "Yen",
        firstUse: "1871",
        introducedYear: "1871",
        introducedBy: "Government of Japan",
        family: "Yen",
        minorUnit: "No current minor unit in ordinary use"
    },

    INR: {
        originalName: "Indian Rupee",
        firstUse: "16th century",
        introducedYear: "2010 symbol / modern system",
        introducedBy: "Reserve Bank of India / Government of India",
        family: "Rupee",
        minorUnit: "1 Rupee = 100 paise"
    },

    LKR: {
        originalName: "Sri Lankan Rupee",
        firstUse: "1872",
        introducedYear: "1949 monetary authority",
        introducedBy: "Central Bank of Ceylon",
        family: "Rupee",
        minorUnit: "1 Rupee = 100 cents"
    },

    CNY: {
        originalName: "Renminbi / Yuan",
        firstUse: "1948",
        introducedYear: "1948",
        introducedBy: "People's Bank of China",
        family: "Yuan",
        minorUnit: "1 Yuan = 10 jiao = 100 fen"
    },

    KRW: {
        originalName: "South Korean Won",
        firstUse: "1902 / modern won 1962",
        introducedYear: "1962",
        introducedBy: "Bank of Korea",
        family: "Won",
        minorUnit: "No current minor unit in ordinary use"
    },

    AUD: {
        originalName: "Australian Dollar",
        firstUse: "1966",
        introducedYear: "1966",
        introducedBy: "Australian Government",
        family: "Dollar",
        minorUnit: "1 Dollar = 100 cents"
    },

    CAD: {
        originalName: "Canadian Dollar",
        firstUse: "1858",
        introducedYear: "1858",
        introducedBy: "Province of Canada",
        family: "Dollar",
        minorUnit: "1 Dollar = 100 cents"
    },

    CHF: {
        originalName: "Swiss Franc",
        firstUse: "1850",
        introducedYear: "1850",
        introducedBy: "Swiss Confederation",
        family: "Franc",
        minorUnit: "1 Franc = 100 centimes"
    },

    BRL: {
        originalName: "Brazilian Real",
        firstUse: "1994",
        introducedYear: "1994",
        introducedBy: "Government of Brazil",
        family: "Real",
        minorUnit: "1 Real = 100 centavos"
    },

    ZAR: {
        originalName: "South African Rand",
        firstUse: "1961",
        introducedYear: "1961",
        introducedBy: "South African Reserve Bank",
        family: "Rand",
        minorUnit: "1 Rand = 100 cents"
    },

    SGD: {
        originalName: "Singapore Dollar",
        firstUse: "1967",
        introducedYear: "1967",
        introducedBy: "Board of Commissioners of Currency Singapore",
        family: "Dollar",
        minorUnit: "1 Dollar = 100 cents"
    },

    MYR: {
        originalName: "Malaysian Ringgit",
        firstUse: "1967",
        introducedYear: "1967",
        introducedBy: "Bank Negara Malaysia",
        family: "Ringgit",
        minorUnit: "1 Ringgit = 100 sen"
    },

    THB: {
        originalName: "Thai Baht",
        firstUse: "19th century",
        introducedYear: "1897",
        introducedBy: "Kingdom of Siam",
        family: "Baht",
        minorUnit: "1 Baht = 100 satang"
    },

    IDR: {
        originalName: "Indonesian Rupiah",
        firstUse: "1946",
        introducedYear: "1946",
        introducedBy: "Government of Indonesia",
        family: "Rupiah",
        minorUnit: "1 Rupiah = 100 sen historically"
    },

    PKR: {
        originalName: "Pakistani Rupee",
        firstUse: "1947",
        introducedYear: "1947",
        introducedBy: "Government of Pakistan",
        family: "Rupee",
        minorUnit: "1 Rupee = 100 paisa"
    },

    BDT: {
        originalName: "Bangladeshi Taka",
        firstUse: "1972",
        introducedYear: "1972",
        introducedBy: "Government of Bangladesh",
        family: "Taka",
        minorUnit: "1 Taka = 100 poisha"
    },

    NPR: {
        originalName: "Nepalese Rupee",
        firstUse: "1932",
        introducedYear: "1932",
        introducedBy: "Kingdom of Nepal",
        family: "Rupee",
        minorUnit: "1 Rupee = 100 paisa"
    },

    PHP: {
        originalName: "Philippine Peso",
        firstUse: "1898",
        introducedYear: "1946",
        introducedBy: "Republic of the Philippines",
        family: "Peso",
        minorUnit: "1 Peso = 100 centavos"
    },

    MXN: {
        originalName: "Mexican Peso",
        firstUse: "1823",
        introducedYear: "1993",
        introducedBy: "Bank of Mexico / Government of Mexico",
        family: "Peso",
        minorUnit: "1 Peso = 100 centavos"
    },

    ARS: {
        originalName: "Argentine Peso",
        firstUse: "1826",
        introducedYear: "1992",
        introducedBy: "Government of Argentina",
        family: "Peso",
        minorUnit: "1 Peso = 100 centavos"
    },

    CLP: {
        originalName: "Chilean Peso",
        firstUse: "1817",
        introducedYear: "1975",
        introducedBy: "Government of Chile",
        family: "Peso",
        minorUnit: "No current subdivision in ordinary use"
    },

    COP: {
        originalName: "Colombian Peso",
        firstUse: "1810",
        introducedYear: "1810",
        introducedBy: "Republic of Colombia",
        family: "Peso",
        minorUnit: "1 Peso = 100 centavos"
    },

    PEN: {
        originalName: "Sol",
        firstUse: "1991",
        introducedYear: "1991",
        introducedBy: "Central Reserve Bank of Peru",
        family: "Sol",
        minorUnit: "1 Sol = 100 céntimos"
    },

    TRY: {
        originalName: "Turkish Lira",
        firstUse: "1844",
        introducedYear: "2005",
        introducedBy: "Republic of Turkey",
        family: "Lira",
        minorUnit: "1 Lira = 100 kuruş"
    },

    RUB: {
        originalName: "Russian Ruble",
        firstUse: "13th century",
        introducedYear: "1704",
        introducedBy: "Russian monetary reform",
        family: "Ruble",
        minorUnit: "1 Ruble = 100 kopeks"
    },

    PLN: {
        originalName: "Polish Złoty",
        firstUse: "15th century",
        introducedYear: "1995",
        introducedBy: "National Bank of Poland",
        family: "Złoty",
        minorUnit: "1 Złoty = 100 groszy"
    },

    CZK: {
        originalName: "Czech Koruna",
        firstUse: "1993",
        introducedYear: "1993",
        introducedBy: "Czech National Bank",
        family: "Koruna",
        minorUnit: "1 Koruna = 100 haléřů"
    },

    HUF: {
        originalName: "Hungarian Forint",
        firstUse: "1946",
        introducedYear: "1946",
        introducedBy: "National Bank of Hungary",
        family: "Forint",
        minorUnit: "No current minor unit in ordinary use"
    },

    NOK: {
        originalName: "Norwegian Krone",
        firstUse: "1875",
        introducedYear: "1875",
        introducedBy: "Kingdom of Norway",
        family: "Krone",
        minorUnit: "1 Krone = 100 øre"
    },

    SEK: {
        originalName: "Swedish Krona",
        firstUse: "1873",
        introducedYear: "1873",
        introducedBy: "Swedish Riksbank",
        family: "Krona",
        minorUnit: "1 Krona = 100 öre"
    },

    DKK: {
        originalName: "Danish Krone",
        firstUse: "1875",
        introducedYear: "1875",
        introducedBy: "Kingdom of Denmark",
        family: "Krone",
        minorUnit: "1 Krone = 100 øre"
    },

    NZD: {
        originalName: "New Zealand Dollar",
        firstUse: "1967",
        introducedYear: "1967",
        introducedBy: "Reserve Bank of New Zealand",
        family: "Dollar",
        minorUnit: "1 Dollar = 100 cents"
    },

    NGN: {
        originalName: "Nigerian Naira",
        firstUse: "1973",
        introducedYear: "1973",
        introducedBy: "Central Bank of Nigeria",
        family: "Naira",
        minorUnit: "1 Naira = 100 kobo"
    },

    GHS: {
        originalName: "Ghanaian Cedi",
        firstUse: "1965",
        introducedYear: "2007",
        introducedBy: "Bank of Ghana",
        family: "Cedi",
        minorUnit: "1 Cedi = 100 pesewas"
    },

    KES: {
        originalName: "Kenyan Shilling",
        firstUse: "1966",
        introducedYear: "1966",
        introducedBy: "Central Bank of Kenya",
        family: "Shilling",
        minorUnit: "1 Shilling = 100 cents"
    },

    EGP: {
        originalName: "Egyptian Pound",
        firstUse: "1834",
        introducedYear: "1834",
        introducedBy: "Egyptian monetary authorities",
        family: "Pound",
        minorUnit: "1 Pound = 100 piastres"
    },

    MAD: {
        originalName: "Moroccan Dirham",
        firstUse: "1960",
        introducedYear: "1960",
        introducedBy: "Bank Al-Maghrib",
        family: "Dirham",
        minorUnit: "1 Dirham = 100 centimes"
    },

    AED: {
        originalName: "United Arab Emirates Dirham",
        firstUse: "1973",
        introducedYear: "1973",
        introducedBy: "United Arab Emirates Currency Board",
        family: "Dirham",
        minorUnit: "1 Dirham = 100 fils"
    },

    SAR: {
        originalName: "Saudi Riyal",
        firstUse: "1932",
        introducedYear: "1932",
        introducedBy: "Saudi Arabian Monetary Authority",
        family: "Riyal",
        minorUnit: "1 Riyal = 100 halalas"
    },

    KWD: {
        originalName: "Kuwaiti Dinar",
        firstUse: "1961",
        introducedYear: "1961",
        introducedBy: "Central Bank of Kuwait",
        family: "Dinar",
        minorUnit: "1 Dinar = 1000 fils"
    },

    BHD: {
        originalName: "Bahraini Dinar",
        firstUse: "1965",
        introducedYear: "1965",
        introducedBy: "Bahrain Monetary Agency",
        family: "Dinar",
        minorUnit: "1 Dinar = 1000 fils"
    },

    QAR: {
        originalName: "Qatari Riyal",
        firstUse: "1966",
        introducedYear: "1966",
        introducedBy: "Qatar Monetary Agency",
        family: "Riyal",
        minorUnit: "1 Riyal = 100 dirhams"
    },

    OMR: {
        originalName: "Omani Rial",
        firstUse: "1970",
        introducedYear: "1970",
        introducedBy: "Sultanate of Oman",
        family: "Rial",
        minorUnit: "1 Rial = 1000 baisa"
    },

    JOD: {
        originalName: "Jordanian Dinar",
        firstUse: "1950",
        introducedYear: "1950",
        introducedBy: "Central Bank of Jordan",
        family: "Dinar",
        minorUnit: "1 Dinar = 100 piastres"
    },

    VND: {
        originalName: "Vietnamese Đồng",
        firstUse: "1946",
        introducedYear: "1946",
        introducedBy: "State Bank of Vietnam",
        family: "Đồng",
        minorUnit: "No current minor unit in ordinary use"
    },

    ZMW: {
        originalName: "Zambian Kwacha",
        firstUse: "1968",
        introducedYear: "1968",
        introducedBy: "Bank of Zambia",
        family: "Kwacha",
        minorUnit: "1 Kwacha = 100 ngwee"
    },

    ZWG: {
        originalName: "Zimbabwe Gold",
        firstUse: "2024",
        introducedYear: "2024",
        introducedBy: "Reserve Bank of Zimbabwe",
        family: "Zimbabwe Gold",
        minorUnit: "1 ZiG = 100 cents"
    },

    XOF: {
        originalName: "West African CFA Franc",
        firstUse: "1945",
        introducedYear: "1945",
        introducedBy: "French monetary system / West African monetary institutions",
        family: "CFA Franc",
        minorUnit: "No current minor unit in ordinary use"
    },

    XAF: {
        originalName: "Central African CFA Franc",
        firstUse: "1945",
        introducedYear: "1945",
        introducedBy: "French monetary system / Central African monetary institutions",
        family: "CFA Franc",
        minorUnit: "No current minor unit in ordinary use"
    }

};


/* =========================================================
   CENTRAL BANKS / MONETARY AUTHORITIES
   ========================================================= */

function getCentralBank(country, code) {

    const banks = {

        USD: "Federal Reserve System",
        EUR: "European Central Bank",
        GBP: "Bank of England",
        JPY: "Bank of Japan",
        LKR: "Central Bank of Sri Lanka",
        INR: "Reserve Bank of India",
        CNY: "People's Bank of China",
        AUD: "Reserve Bank of Australia",
        CAD: "Bank of Canada",
        CHF: "Swiss National Bank",
        BRL: "Central Bank of Brazil",
        ZAR: "South African Reserve Bank",
        SGD: "Monetary Authority of Singapore",
        MYR: "Bank Negara Malaysia",
        THB: "Bank of Thailand",
        IDR: "Bank Indonesia",
        PKR: "State Bank of Pakistan",
        BDT: "Bangladesh Bank",
        NPR: "Nepal Rastra Bank",
        PHP: "Bangko Sentral ng Pilipinas",
        NGN: "Central Bank of Nigeria",
        GHS: "Bank of Ghana",
        KES: "Central Bank of Kenya",
        EGP: "Central Bank of Egypt",
        MAD: "Bank Al-Maghrib",
        TRY: "Central Bank of the Republic of Türkiye",
        RUB: "Bank of Russia",
        PLN: "Narodowy Bank Polski",
        CZK: "Czech National Bank",
        HUF: "Magyar Nemzeti Bank",
        NOK: "Norges Bank",
        SEK: "Sveriges Riksbank",
        DKK: "Danmarks Nationalbank",
        NZD: "Reserve Bank of New Zealand",
        AED: "Central Bank of the UAE",
        SAR: "Saudi Central Bank",
        KWD: "Central Bank of Kuwait",
        BHD: "Central Bank of Bahrain",
        QAR: "Qatar Central Bank",
        OMR: "Central Bank of Oman",
        JOD: "Central Bank of Jordan",
        ZMW: "Bank of Zambia",
        VND: "State Bank of Vietnam",
        ZWG: "Reserve Bank of Zimbabwe"

    };

    return banks[code] || "National monetary authority";

}


/* =========================================================
   CURRENCY TYPE
   ========================================================= */

function getCurrencyType(code) {

    if (code === "EUR") {
        return "Fiat currency / monetary union";
    }

    if (
        [
            "USD",
            "AUD",
            "CAD",
            "NZD",
            "SGD",
            "BND",
            "FJD",
            "BBD",
            "BSD",
            "BZD",
            "GYD",
            "JMD",
            "LRD",
            "NAD",
            "SBD",
            "SRD",
            "TTD",
            "XCD"
        ].includes(code)
    ) {
        return "Fiat currency";
    }

    return "Fiat currency";

}


/* =========================================================
   DESCRIPTION
   ========================================================= */

function getDescription(currency, country, code) {

    const specialDescriptions = {

        USD:
            "The United States dollar is the official currency of the United States and is also used as a legal tender or reference currency in several other economies.",

        EUR:
            "The euro is the common currency of the euro area and is issued within the Eurosystem under the monetary policy framework of the European Central Bank.",

        LKR:
            "The Sri Lankan rupee is the official currency of Sri Lanka and is issued under the authority of the Central Bank of Sri Lanka.",

        INR:
            "The Indian rupee is the official currency of India and is issued and managed within the monetary framework of the Reserve Bank of India.",

        GBP:
            "Pound sterling is the official currency of the United Kingdom and is issued under the authority of the Bank of England and other UK issuing arrangements.",

        JPY:
            "The Japanese yen is the official currency of Japan and is issued under the monetary authority of the Bank of Japan.",

        CNY:
            "The renminbi is the official currency of China. The yuan is the principal unit of the renminbi system.",

        CHF:
            "The Swiss franc is the official currency of Switzerland and Liechtenstein and is issued within the Swiss monetary system.",

        ZWG:
            "Zimbabwe Gold, commonly abbreviated as ZiG, is Zimbabwe's currency introduced by the Reserve Bank of Zimbabwe in 2024."

    };

    return (
        specialDescriptions[code] ||
        `The ${currency} is the official or principal currency used in ${country}. Its internationally recognized ISO 4217 alphabetic code is ${code}. Currency systems can change over time through monetary reforms, economic policy and institutional changes.`
    );

}


/* =========================================================
   CREATE CURRENCY OBJECTS
   ========================================================= */

const currencies = countryData
    .map(function(item) {

        const [
            country,
            flag,
            currency,
            code,
            symbol,
            continent
        ] = item;

        const history =
            currencyHistory[code] || {};

        return {

            country,
            flag,
            currency,
            code,
            symbol,
            continent,

            centralBank:
                getCentralBank(country, code),

            currencyType:
                getCurrencyType(code),

            description:
                getDescription(
                    currency,
                    country,
                    code
                ),

            originalName:
                history.originalName ||
                currency,

            firstUse:
                history.firstUse ||
                "Historical information varies",

            introducedYear:
                history.introducedYear ||
                "See currency history",

            introducedBy:
                history.introducedBy ||
                getCentralBank(country, code),

            family:
                history.family ||
                currency,

            minorUnit:
                history.minorUnit ||
                "Varies by currency",

            numericCode:
                numericCodes[code] ||
                "Not available"

        };

    })
    .sort(function(a, b) {

        return a.country.localeCompare(
            b.country
        );

    });


/* =========================================================
   UNIQUE CURRENCIES
   ========================================================= */

const uniqueCurrencies = [];

const seenCodes = new Set();

currencies.forEach(function(currency) {

    if (!seenCodes.has(currency.code)) {

        seenCodes.add(currency.code);

        uniqueCurrencies.push(currency);

    }

});


/* =========================================================
   GLOBAL STATE
   ========================================================= */

let selectedContinent = "All";

let selectedLetter = "All";


/* =========================================================
   DOM READY
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        setupTheme();

        setupHomePage();

        setupCurrencyPage();

        setupConverterPage();

        setupRipples();

    }
);


/* =========================================================
   THEME
   ========================================================= */

function setupTheme() {

    const themeToggle =
        document.getElementById(
            "themeToggle"
        );

    if (!themeToggle) {
        return;
    }

    const savedTheme =
        localStorage.getItem(
            "worldCurrenciesTheme"
        );

    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark-mode"
        );

        themeToggle.textContent = "☀️";

    } else {

        themeToggle.textContent = "🌙";

    }


    themeToggle.addEventListener(
        "click",
        function() {

            document.body.classList.toggle(
                "dark-mode"
            );

            const isDark =
                document.body.classList.contains(
                    "dark-mode"
                );

            localStorage.setItem(
                "worldCurrenciesTheme",
                isDark ? "dark" : "light"
            );

            themeToggle.textContent =
                isDark ? "☀️" : "🌙";

        }
    );

}


/* =========================================================
   HOME PAGE
   ========================================================= */

function setupHomePage() {

    const heroSection =
        document.getElementById(
            "heroSection"
        );

    const currenciesSection =
        document.getElementById(
            "currencies"
        );

    const exploreButton =
        document.getElementById(
            "exploreButton"
        );

    const currenciesLink =
        document.getElementById(
            "currenciesLink"
        );

    const homeLink =
        document.getElementById(
            "homeLink"
        );

    const backToHero =
        document.getElementById(
            "backToHero"
        );

    if (
        !heroSection ||
        !currenciesSection
    ) {
        return;
    }


    function showCurrencies(
        shouldScroll = true
    ) {

        selectedContinent = "All";
        selectedLetter = "All";

        document
            .querySelectorAll(".filter-btn")
            .forEach(function(button) {

                button.classList.toggle(
                    "active",
                    button.dataset.continent === "All"
                );

            });

        heroSection.classList.add(
            "hero-hidden"
        );

        currenciesSection.classList.remove(
            "hidden-section"
        );

        currenciesSection.classList.add(
            "section-open"
        );

        renderAlphabet();

        renderCurrencies();

        if (shouldScroll) {

            setTimeout(
                function() {

                    currenciesSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                },
                80
            );

        }

    }


    function showHome() {

        heroSection.classList.remove(
            "hero-hidden"
        );

        currenciesSection.classList.add(
            "hidden-section"
        );

        currenciesSection.classList.remove(
            "section-open"
        );

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    if (exploreButton) {

        exploreButton.addEventListener(
            "click",
            function() {

                showCurrencies(true);

                history.replaceState(
                    null,
                    "",
                    "#currencies"
                );

            }
        );

    }


    if (currenciesLink) {

        currenciesLink.addEventListener(
            "click",
            function(event) {

                event.preventDefault();

                showCurrencies(true);

                history.replaceState(
                    null,
                    "",
                    "#currencies"
                );

            }
        );

    }


    if (homeLink) {

        homeLink.addEventListener(
            "click",
            function(event) {

                event.preventDefault();

                history.replaceState(
                    null,
                    "",
                    "index.html"
                );

                showHome();

            }
        );

    }


    if (backToHero) {

        backToHero.addEventListener(
            "click",
            function() {

                history.replaceState(
                    null,
                    "",
                    "index.html"
                );

                showHome();

            }
        );

    }


    const searchInput =
        document.getElementById(
            "searchInput"
        );

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            function() {

                renderCurrencies();

            }
        );

    }


    document
        .querySelectorAll(".filter-btn")
        .forEach(function(button) {

            button.addEventListener(
                "click",
                function() {

                    selectedContinent =
                        button.dataset.continent;

                    document
                        .querySelectorAll(".filter-btn")
                        .forEach(function(btn) {

                            btn.classList.remove(
                                "active"
                            );

                        });

                    button.classList.add(
                        "active"
                    );

                    renderCurrencies();

                }
            );

        });


    if (
        window.location.hash ===
        "#currencies"
    ) {

        showCurrencies(false);

        setTimeout(
            function() {

                currenciesSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            },
            100
        );

    } else {

        showHome();

    }

}


/* =========================================================
   ALPHABET
   ========================================================= */

function renderAlphabet() {

    const alphabetContainer =
        document.getElementById(
            "alphabetButtons"
        );

    if (!alphabetContainer) {
        return;
    }

    alphabetContainer.innerHTML = "";


    const allButton =
        document.createElement(
            "button"
        );

    allButton.type = "button";

    allButton.className =
        "letter-btn active";

    allButton.dataset.letter = "All";

    allButton.textContent = "All";

    alphabetContainer.appendChild(
        allButton
    );


    const alphabet =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            .split("");


    alphabet.forEach(function(letter) {

        const button =
            document.createElement(
                "button"
            );

        button.type = "button";

        button.className =
            "letter-btn";

        button.dataset.letter =
            letter;

        button.textContent =
            letter;

        alphabetContainer.appendChild(
            button
        );

    });


    alphabetContainer
        .querySelectorAll(".letter-btn")
        .forEach(function(button) {

            button.addEventListener(
                "click",
                function() {

                    selectedLetter =
                        button.dataset.letter;


                    alphabetContainer
                        .querySelectorAll(
                            ".letter-btn"
                        )
                        .forEach(function(btn) {

                            btn.classList.remove(
                                "active"
                            );

                        });


                    button.classList.add(
                        "active"
                    );


                    renderCurrencies();

                }
            );

        });

}


/* =========================================================
   FILTER
   ========================================================= */

function getFilteredCurrencies() {

    const searchInput =
        document.getElementById(
            "searchInput"
        );

    const searchTerm =
        searchInput
            ? searchInput.value
                .trim()
                .toLowerCase()
            : "";


    return currencies.filter(
        function(currency) {

            const matchesContinent =
                selectedContinent === "All" ||
                currency.continent ===
                selectedContinent;


            const matchesLetter =
                selectedLetter === "All" ||
                currency.country
                    .charAt(0)
                    .toUpperCase() ===
                selectedLetter;


            const matchesSearch =
                !searchTerm ||

                currency.country
                    .toLowerCase()
                    .includes(searchTerm) ||

                currency.currency
                    .toLowerCase()
                    .includes(searchTerm) ||

                currency.code
                    .toLowerCase()
                    .includes(searchTerm);


            return (
                matchesContinent &&
                matchesLetter &&
                matchesSearch
            );

        }
    );

}


/* =========================================================
   RENDER CURRENCIES
   ========================================================= */

function renderCurrencies() {

    const container =
        document.getElementById(
            "currencyContainer"
        );

    const countElement =
        document.getElementById(
            "currencyCount"
        );

    if (!container) {
        return;
    }


    const filtered =
        getFilteredCurrencies();


    container.innerHTML = "";


    if (countElement) {

        countElement.textContent =
            `Showing ${filtered.length} of ${currencies.length} countries`;

    }


    if (filtered.length === 0) {

        container.innerHTML = `

            <div class="no-results">

                <div class="no-results-icon">
                    ⌕
                </div>

                <h3>
                    No results found
                </h3>

                <p>
                    Try another country,
                    currency, ISO code or filter.
                </p>

            </div>

        `;

        return;

    }


    filtered.forEach(
        function(currency, index) {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "currency-card";


            card.style.animationDelay =
                `${Math.min(index * 0.025, 0.3)}s`;


            card.innerHTML = `

                <div class="currency-card-top">

                    <span class="country-flag">
                        ${currency.flag}
                    </span>

                    <span class="continent-tag">
                        ${currency.continent}
                    </span>

                </div>


                <h3>
                    ${escapeHTML(currency.country)}
                </h3>


                <p class="currency-name">
                    ${escapeHTML(currency.currency)}
                </p>


                <div class="currency-code">

                    <strong>
                        ${escapeHTML(currency.code)}
                    </strong>

                    <span>
                        ${escapeHTML(currency.symbol)}
                    </span>

                </div>


                <div class="card-arrow">
                    →
                </div>

            `;


            card.addEventListener(
                "click",
                function() {

                    const params =
                        new URLSearchParams();

                    params.set(
                        "country",
                        currency.country
                    );

                    params.set(
                        "code",
                        currency.code
                    );

                    window.location.href =
                        `pages/currency.html?${params.toString()}`;

                }
            );


            container.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   DETAILS PAGE
   ========================================================= */

function setupCurrencyPage() {

    const currencyTitle =
        document.getElementById(
            "currencyTitle"
        );

    if (!currencyTitle) {
        return;
    }


    const params =
        new URLSearchParams(
            window.location.search
        );


    const countryParam =
        params.get("country");

    const codeParam =
        params.get("code");


    let currency = null;


    if (countryParam) {

        currency =
            currencies.find(
                function(item) {

                    return (
                        item.country.toLowerCase() ===
                        countryParam.toLowerCase() &&
                        (
                            !codeParam ||
                            item.code === codeParam
                        )
                    );

                }
            );

    }


    if (!currency && codeParam) {

        currency =
            currencies.find(
                function(item) {

                    return item.code === codeParam;

                }
            );

    }


    if (!currency) {

        currencyTitle.textContent =
            "Currency Not Found";

        const subtitle =
            document.getElementById(
                "currencySubtitle"
            );

        if (subtitle) {

            subtitle.textContent =
                "The requested currency could not be found.";

        }

        return;

    }


    document.title =
        `${currency.country} - ${currency.currency} | World Currencies`;


    setText(
        "currencyFlag",
        currency.flag
    );

    setText(
        "currencyTitle",
        `${currency.country} — ${currency.currency}`
    );

    setText(
        "currencySubtitle",
        `${currency.code} • ${currency.continent}`
    );

    setText(
        "country",
        currency.country
    );

    setText(
        "currencyName",
        currency.currency
    );

    setText(
        "currencyCode",
        currency.code
    );

    setText(
        "currencySymbol",
        currency.symbol
    );

    setText(
        "continent",
        currency.continent
    );

    setText(
        "centralBank",
        currency.centralBank
    );

    setText(
        "currencyType",
        currency.currencyType
    );

    setText(
        "description",
        currency.description
    );

    setText(
        "originalName",
        currency.originalName
    );

    setText(
        "firstUse",
        currency.firstUse
    );

    setText(
        "introducedYear",
        currency.introducedYear
    );

    setText(
        "introducedBy",
        currency.introducedBy
    );

    setText(
        "technicalCode",
        currency.code
    );

    setText(
        "numericCode",
        currency.numericCode
    );

    setText(
        "minorUnit",
        currency.minorUnit
    );

    setText(
        "currencyFamily",
        currency.family
    );


    const users =
        currencies
            .filter(
                function(item) {

                    return item.code ===
                        currency.code;

                }
            )
            .map(
                function(item) {

                    return item.country;

                }
            );


    setText(
        "usedBy",
        users.join(", ")
    );


    loadCurrencyValue(
        currency.code
    );

}


/* =========================================================
   LIVE CURRENCY VALUE
   ========================================================= */

async function loadCurrencyValue(code) {

    const valueElement =
        document.getElementById(
            "currentValue"
        );

    if (!valueElement) {
        return;
    }


    valueElement.textContent =
        "Loading live value...";


    try {

        const response =
            await fetch(
                `https://open.er-api.com/v6/latest/${encodeURIComponent(code)}`
            );


        if (!response.ok) {
            throw new Error(
                "Network response failed"
            );
        }


        const data =
            await response.json();


        if (
            data &&
            data.result === "success" &&
            data.rates &&
            typeof data.rates.USD === "number"
        ) {

            const usdRate =
                data.rates.USD;


            valueElement.textContent =
                `1 ${code} ≈ ${formatRate(usdRate)} USD`;

        } else {

            valueElement.textContent =
                "Live value unavailable";

        }

    } catch (error) {

        valueElement.textContent =
            "Live value unavailable";

    }

}


/* =========================================================
   CONVERTER
   ========================================================= */

function setupConverterPage() {

    const fromSelect =
        document.getElementById(
            "fromCurrency"
        );

    const toSelect =
        document.getElementById(
            "toCurrency"
        );

    if (
        !fromSelect ||
        !toSelect
    ) {
        return;
    }


    uniqueCurrencies
        .slice()
        .sort(
            function(a, b) {

                return a.code.localeCompare(
                    b.code
                );

            }
        )
        .forEach(
            function(currency) {

                const fromOption =
                    document.createElement(
                        "option"
                    );

                fromOption.value =
                    currency.code;

                fromOption.textContent =
                    `${currency.code} — ${currency.currency}`;

                fromSelect.appendChild(
                    fromOption
                );


                const toOption =
                    document.createElement(
                        "option"
                    );

                toOption.value =
                    currency.code;

                toOption.textContent =
                    `${currency.code} — ${currency.currency}`;

                toSelect.appendChild(
                    toOption
                );

            }
        );


    if (
        [...fromSelect.options]
            .some(
                function(option) {
                    return option.value === "USD";
                }
            )
    ) {

        fromSelect.value = "USD";

    }


    if (
        [...toSelect.options]
            .some(
                function(option) {
                    return option.value === "EUR";
                }
            )
    ) {

        toSelect.value = "EUR";

    }


    const convertButton =
        document.getElementById(
            "convertButton"
        );

    const swapButton =
        document.getElementById(
            "swapButton"
        );

    const amountInput =
        document.getElementById(
            "amount"
        );


    if (convertButton) {

        convertButton.addEventListener(
            "click",
            convertCurrency
        );

    }


    if (swapButton) {

        swapButton.addEventListener(
            "click",
            function() {

                const currentFrom =
                    fromSelect.value;

                fromSelect.value =
                    toSelect.value;

                toSelect.value =
                    currentFrom;


                convertCurrency();

                swapButton.classList.add(
                    "swap-animate"
                );

                setTimeout(
                    function() {

                        swapButton.classList.remove(
                            "swap-animate"
                        );

                    },
                    350
                );

            }
        );

    }


    if (amountInput) {

        amountInput.addEventListener(
            "keydown",
            function(event) {

                if (
                    event.key === "Enter"
                ) {

                    convertCurrency();

                }

            }
        );

    }


    convertCurrency();

}


/* =========================================================
   CONVERT
   ========================================================= */

async function convertCurrency() {

    const amountInput =
        document.getElementById(
            "amount"
        );

    const fromSelect =
        document.getElementById(
            "fromCurrency"
        );

    const toSelect =
        document.getElementById(
            "toCurrency"
        );

    const resultElement =
        document.getElementById(
            "conversionResult"
        );

    const rateElement =
        document.getElementById(
            "exchangeRate"
        );

    const updatedElement =
        document.getElementById(
            "lastUpdated"
        );

    const statusElement =
        document.getElementById(
            "converterStatus"
        );


    if (
        !amountInput ||
        !fromSelect ||
        !toSelect
    ) {
        return;
    }


    const amount =
        Number(
            amountInput.value
        );


    const from =
        fromSelect.value;

    const to =
        toSelect.value;


    if (
        !Number.isFinite(amount) ||
        amount < 0
    ) {

        if (statusElement) {

            statusElement.textContent =
                "Please enter a valid amount.";

        }

        return;

    }


    if (statusElement) {

        statusElement.textContent =
            "Fetching live exchange rate...";

    }


    if (resultElement) {

        resultElement.textContent =
            `${formatAmount(amount)} ${from} = Loading...`;

    }


    try {

        const response =
            await fetch(
                `https://open.er-api.com/v6/latest/${encodeURIComponent(from)}`
            );


        if (!response.ok) {

            throw new Error(
                "Exchange-rate request failed"
            );

        }


        const data =
            await response.json();


        if (
            !data ||
            data.result !== "success" ||
            !data.rates ||
            typeof data.rates[to] !== "number"
        ) {

            throw new Error(
                "Rate unavailable"
            );

        }


        const rate =
            data.rates[to];


        const converted =
            amount * rate;


        if (resultElement) {

            resultElement.textContent =
                `${formatAmount(amount)} ${from} = ${formatAmount(converted)} ${to}`;

        }


        if (rateElement) {

            rateElement.textContent =
                `Exchange Rate: 1 ${from} = ${formatRate(rate)} ${to}`;

        }


        if (updatedElement) {

            const time =
                data.time_last_update_utc ||
                new Date().toUTCString();

            updatedElement.textContent =
                `Last updated: ${time}`;

        }


        if (statusElement) {

            statusElement.textContent =
                "Live conversion complete.";

        }

    } catch (error) {

        if (resultElement) {

            resultElement.textContent =
                `${formatAmount(amount)} ${from} = — ${to}`;

        }


        if (rateElement) {

            rateElement.textContent =
                "Exchange Rate: unavailable";

        }


        if (updatedElement) {

            updatedElement.textContent =
                "Last updated: unavailable";

        }


        if (statusElement) {

            statusElement.textContent =
                "Live exchange-rate data is currently unavailable.";

        }

    }

}


/* =========================================================
   HELPERS
   ========================================================= */

function setText(
    id,
    value
) {

    const element =
        document.getElementById(id);

    if (element) {

        element.textContent =
            value;

    }

}


function formatAmount(value) {

    return new Intl.NumberFormat(
        "en-US",
        {
            maximumFractionDigits: 6
        }
    ).format(value);

}


function formatRate(value) {

    if (!Number.isFinite(value)) {
        return "—";
    }

    if (value === 0) {
        return "0";
    }

    if (Math.abs(value) >= 1000) {

        return value.toLocaleString(
            "en-US",
            {
                maximumFractionDigits: 2
            }
        );

    }

    if (Math.abs(value) >= 1) {

        return value.toFixed(4);

    }

    return value.toFixed(6);

}


function escapeHTML(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


/* =========================================================
   RIPPLE / MICRO INTERACTIONS
   ========================================================= */

function setupRipples() {

    const selectors = [
        ".hero-button",
        ".convert-button",
        ".swap-button",
        ".filter-btn",
        ".letter-btn",
        ".back-button",
        ".secondary-button",
        ".back-top-button"
    ];


    document
        .querySelectorAll(
            selectors.join(",")
        )
        .forEach(
            function(button) {

                button.addEventListener(
                    "click",
                    function(event) {

                        const rect =
                            button.getBoundingClientRect();


                        const ripple =
                            document.createElement(
                                "span"
                            );


                        ripple.className =
                            "ripple";


                        const size =
                            Math.max(
                                rect.width,
                                rect.height
                            );


                        ripple.style.width =
                            `${size}px`;

                        ripple.style.height =
                            `${size}px`;


                        ripple.style.left =
                            `${event.clientX - rect.left - size / 2}px`;

                        ripple.style.top =
                            `${event.clientY - rect.top - size / 2}px`;


                        button.appendChild(
                            ripple
                        );


                        setTimeout(
                            function() {

                                ripple.remove();

                            },
                            600
                        );

                    }
                );

            }
        );

}


/* =========================================================
   SAFETY CHECK
   ========================================================= */

console.log(
    `World Currencies loaded: ${currencies.length} countries / ${uniqueCurrencies.length} unique currencies`
);