const fs = require('fs');

// Données de joueurs inscrits
const joueursInscritsData = [
    { id: 1, name: "Amyr", flag: "/images/profiles/amir__hajji.png", validated: true, tiktokUsername: "amir__hajji" },
    { id: 2, name: "Anis Ben Salem", flag: "/images/profiles/ben.salem.anis.png", validated: true, tiktokUsername: "ben.salem.anis" },
    { id: 3, name: "Ashref", flag: "/images/profiles/ashref_officiel.png", validated: true, tiktokUsername: "ashref_officiel" },
    { id: 4, name: "Basbous", flag: "/images/profiles/basbous.png", validated: true, tiktokUsername: ".basbous" },
    { id: 5, name: "Brabus", flag: "/images/profiles/brabus372.png", validated: true, tiktokUsername: "brabus372" },
    { id: 6, name: "Colombi Oussama", flag: "/images/profiles/colombi_oussama.png", validated: true, tiktokUsername: "colombi_oussama" },
    { id: 7, name: "El Khal", flag: "/images/profiles/5al.png", validated: true, tiktokUsername: "user4021713872133" },
    { id: 8, name: "Houda", flag: "/images/profiles/houda.png", validated: true, tiktokUsername: "houda.jabri" },
    { id: 9, name: "Ibn Tunis", flag: "/images/profiles/marouane_suisse88.png", validated: true, tiktokUsername: "marouane_suisse88" },
    { id: 10, name: "Khayri", flag: "/images/profiles/khayri_89.png", validated: true, tiktokUsername: "Khayri_89" },
    { id: 11, name: "Marwen1.0", flag: "/images/profiles/marwen.07.png", validated: true, tiktokUsername: "marwen.07" },
    { id: 12, name: "Sag3", flag: "/images/profiles/dr.sag3.01.png", validated: true, tiktokUsername: "dr.sag3.01" },
    { id: 13, name: "Sameh", flag: "/images/profiles/sameh.ba.png", validated: true, tiktokUsername: "sameh.ba" },
    { id: 14, name: "Sandro", flag: "/images/profiles/sandro.png", validated: true, tiktokUsername: "sandrinotn" },
    { id: 15, name: "Skander Rezgui", flag: "/images/profiles/skander_rezgui.png", validated: true, tiktokUsername: "skanderrezguiii" },
    { id: 16, name: "Souhaiel", flag: "/images/profiles/souhaiel_junkremoval03.png", validated: true, tiktokUsername: "souhaiel_junkremoval03" },
    { id: 17, name: "Syrinne", flag: "/images/profiles/sy_rinnee.png", validated: true, tiktokUsername: "syy_rinne" },
    { id: 18, name: "Thala", flag: "/images/profiles/thalaftw.png", validated: true, tiktokUsername: "thalaftw" },
    { id: 19, name: "Tiger", flag: "/images/profiles/big.heart129.png", validated: true, tiktokUsername: "big.heart129" },
    { id: 20, name: "Amira", flag: "/images/profiles/amiraomriii.png", validated: true, tiktokUsername: "amiraomriii" },
    { id: 21, name: "Charchabil", flag: "/images/profiles/garga044.png", validated: true, tiktokUsername: "garga044" },
    { id: 22, name: "Chbaya7", flag: "/images/profiles/bilel.chbayah.png", validated: true, tiktokUsername: "bilel.chbayah" },
    { id: 23, name: "Couloumbi", flag: "/images/profiles/www.couloumbi.png", validated: true, tiktokUsername: "www.couloumbi" },
    { id: 24, name: "Dali El Ghoul", flag: "/images/profiles/dali_elghoul.png", validated: true, tiktokUsername: "dali_elghoul_" },
    { id: 25, name: "El Youneni", flag: "/images/profiles/nazz_elyouneni.png", validated: true, tiktokUsername: "nazz_elyouneni" },
    { id: 26, name: "Eva", flag: "/images/profiles/eva.png", validated: true, tiktokUsername: "_eva_bjaoui" },
    { id: 27, name: "Faj3a Limar", flag: "/images/profiles/limar8969.png", validated: true, tiktokUsername: "limar8969" },
    { id: 28, name: "Fares", flag: "/images/profiles/faresbabay.png", validated: true, tiktokUsername: "faresbabay" },
    { id: 29, name: "Fathi 3j3j", flag: "/images/profiles/fathi_3jej.png", validated: true, tiktokUsername: "fathi.kamoussa" },
    { id: 30, name: "Hend Ben", flag: "/images/profiles/hendab7.png", validated: true, tiktokUsername: "hendab7" },
    { id: 31, name: "Ibn El Jarid", flag: "/images/profiles/ebn.aljarid.png", validated: true, tiktokUsername: "ebn.aljarid" },
    { id: 32, name: "Kinen", flag: "/images/profiles/kinen007.png", validated: true, tiktokUsername: "kinen007" },
    { id: 33, name: "King Maher", flag: "/images/profiles/maherncycm7.png", validated: true, tiktokUsername: "maherboutarfa835" },
    { id: 34, name: "Mosamem", flag: "/images/profiles/mosamem.png", validated: true, tiktokUsername: "mosamem_tunsi" },
    { id: 35, name: "Pap Malik", flag: "/images/profiles/malek.louati.2.png", validated: true, tiktokUsername: "malek.louati.2" },
    { id: 36, name: "Seif", flag: "/images/profiles/seifbenmustapha.png", validated: true, tiktokUsername: "seifbenmustapha" },
    { id: 37, name: "Trabelsi", flag: "/images/profiles/mtrabelsi.png", validated: true, tiktokUsername: "mtrabelsi" },
    { id: 38, name: "Zaman", flag: "/images/profiles/zamanino.png", validated: true, tiktokUsername: "zamanino" },
];

// Données de Mosammin
const mosamminData = [
    { id: 2, name: "Mosamim ibn mojahid", flag: "/images/profiles/mosamin/designer.ben.mojahed.png", validated: true, tiktokUsername: "designer.ben.mojahed" },
    { id: 3, name: "Asiwta", flag: "/images/profiles/mosamin/asiwta.png", validated: true, tiktokUsername: "asiwta" },
    { id: 4, name: "Okaski", flag: "/images/profiles/mosamin/okaski.worlda.png", validated: true, tiktokUsername: "okasaki.world" },
    { id: 5, name: "Tunisian-editor", flag: "/images/profiles/mosamin/_abdou_06.png", validated: true, tiktokUsername: "_abdou_06" },
    { id: 6, name: "WOLF", flag: "/images/profiles/mosamin/wolftun5.png", validated: true, tiktokUsername: "wolftun5" },
    { id: 7, name: "DS Replay", flag: "/images/profiles/mosamin/ds_replay.png", validated: true, tiktokUsername: "ds_replay" },
    { id: 8, name: "3ami9", flag: "/images/profiles/mosamin/schba31wa.png", validated: true, tiktokUsername: "schba31w" },
    { id: 9, name: "Majdi", flag: "/images/profiles/mosamin/majdiyt.png", validated: true, tiktokUsername: "majdiyt" },
    { id: 10, name: "Baba Colombi", flag: "/images/profiles/mosamin/user644368856.png", validated: true, tiktokUsername: "user644368856" },
    { id: 11, name: "Midzo", flag: "/images/profiles/mosamin/waled_tounis_.png", validated: true, tiktokUsername: "waled_tounis_" },
    { id: 12, name: "Alpacino", flag: "/images/profiles/mosamin/alpacino_365d.png", validated: true, tiktokUsername: "alpacino_365d" },
    { id: 13, name: "Luffy", flag: "/images/profiles/mosamin/luffy.officiel7.png", validated: true, tiktokUsername: "luffy.officiel7" },
    { id: 14, name: "Colo Locked", flag: "/images/profiles/mosamin/med_loked.png", validated: true, tiktokUsername: "med_loked" },
];

// Générer les knockoutMatches
const generateKnockoutMatches = () => {
    return {
        "1/8e de finale": [
            { player1: joueursInscritsData[0], player2: joueursInscritsData[1] },
            { player1: joueursInscritsData[2], player2: joueursInscritsData[3] },
            { player1: joueursInscritsData[4], player2: joueursInscritsData[5] },
            { player1: joueursInscritsData[6], player2: joueursInscritsData[7] }
        ],
        "1/4e de finale": [
            { player1: joueursInscritsData[8], player2: joueursInscritsData[9] },
            { player1: joueursInscritsData[10], player2: joueursInscritsData[11] }
        ],
        "1/2e de finale": [
            { player1: joueursInscritsData[12], player2: joueursInscritsData[13] }
        ],
        "Finale": [
            { player1: joueursInscritsData[14], player2: joueursInscritsData[15] }
        ]
    };
};

// Générer les groups
const generateGroups = () => {
    return [
        {
            groupName: "Groupe A1",
            teams: joueursInscritsData.slice(0, 5)
        },
        {
            groupName: "Groupe A2",
            teams: joueursInscritsData.slice(5, 10)
        },
        {
            groupName: "Groupe B1",
            teams: joueursInscritsData.slice(10, 15)
        },
        {
            groupName: "Groupe B2",
            teams: joueursInscritsData.slice(15, 20)
        }
    ];
};

// Générer calendarMatches
const generateCalendarMatches = () => {
    return [
        {
            date: "2024-11-01",
            matches: [
                { player1: joueursInscritsData[0], player2: joueursInscritsData[1], time: "18:00" },
                { player1: joueursInscritsData[2], player2: joueursInscritsData[3], time: "20:00" }
            ]
        },
        {
            date: "2024-11-02",
            matches: [
                { player1: joueursInscritsData[4], player2: joueursInscritsData[5], time: "16:00" }
            ]
        }
    ];
};

// Générer les sanctions statiques
const sanctionsData = [
    { id: 1, name: "Joueur 1", flag: "/images/profiles/userTiktok.png", warnings: 0, reason: "", date: "", status: "Active" },
    { id: 2, name: "Joueur 2", flag: "/images/profiles/userTiktok.png", warnings: 2, reason: "Comportement antisportif", date: "2024-10-15", status: "Sanctionné" }
];

// Données finales
const finalData = {
    sanctions: sanctionsData,
    knockoutMatches: generateKnockoutMatches(),
    calendarMatches: generateCalendarMatches(),
    joueursInscritsData,
    groups: generateGroups(),
    Mosammin: mosamminData
};

// Convertir les données en chaîne JSON et les sauvegarder dans un fichier `data.json`
fs.writeFileSync('data.json', JSON.stringify(finalData, null, 2), 'utf-8');
