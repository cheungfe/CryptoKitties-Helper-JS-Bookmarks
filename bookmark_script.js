javascript: var db=Array();db.oldlace={type:"oldlace",probability:5/39559,price:-1},db.wolfgrey={type:"wolfgrey",probability:5/39559,price:-1},db.gerbil={type:"gerbil",probability:10/39559,price:-1},db.cottoncandy={type:"cottoncandy",probability:10/39559,price:-1},db.violet={type:"violet",probability:43/39559,price:.505},db.wingtips={type:"wingtips",probability:231/39559,price:.505},db.mainecoon={type:"mainecoon",probability:298/39559,price:.647},db.googly={type:"googly",probability:322/39559,price:7.853},db.jaguar={type:"jaguar",probability:420/39559,price:26.832},db.whixtensions={type:"whixtensions",probability:594/39559,price:.946},db.cerulian={type:"cerulian",probability:709/39559,price:.246},db.chartreux={type:"chartreux",probability:860/39559,price:.241},db.fabulous={type:"fabulous",probability:1313/39559,price:.077},db.peach={type:"peach",probability:1854/39559,price:.16},db.gold={type:"gold",probability:2241/39559,price:1.114},db.bubblegum={type:"bubblegum",probability:2941/39559,price:.055},db.dali={type:"dali",probability:3239/39559,price:.091},db.otaku={type:"otaku",probability:3383/39559,price:.086},db.scarlet={type:"scarlet",probability:3600/39559,price:.139},db.bloodred={type:"bloodred",probability:3694/39559,price:.111},db.skyblue={type:"skyblue",probability:4121/39559,price:.066},db.emeraldgreen={type:"emeraldgreen",probability:5008/39559,price:.113},db.limegreen={type:"limegreen",probability:5071/39559,price:.076},db.tigerpunk={type:"tigerpunk",probability:5077/39559,price:.069},db.spock={type:"spock",probability:5146/39559,price:.148},db.beard={type:"beard",probability:5926/39559,price:.882},db.cloudwhite={type:"cloudwhite",probability:6468/39559,price:.093},db.laperm={type:"laperm",probability:6620/39559,price:.081},db.calicool={type:"calicool",probability:6671/39559,price:.096},db.barkbrown={type:"barkbrown",probability:6687/39559,price:.105},db.mauveover={type:"mauveover",probability:6739/39559,price:.348},db.chestnut={type:"chestnut",probability:7626/39559,price:.907},db.cymric={type:"cymric",probability:8205/39559,price:.375},db.tongue={type:"tongue",probability:8647/39559,price:.09},db.saycheese={type:"saycheese",probability:10118/39559,price:.493},db.shadowgrey={type:"shadowgrey",probability:11880/39559,price:.291},db.coffee={type:"coffee",probability:11920/39559,price:.855},db.salmon={type:"salmon",probability:12517/39559,price:.216},db.royalpurple={type:"royalpurple",probability:12989/39559,price:.776},db.chocolate={type:"chocolate",probability:14102/39559,price:.335},db.mintgreen={type:"mintgreen",probability:14209/39559,price:.679},db.swampgreen={type:"swampgreen",probability:14419/39559,price:.77},db.lemonade={type:"lemonade",probability:14681/39559,price:.624},db.topaz={type:"topaz",probability:14713/39559,price:.617},db.simple={type:"simple",probability:14727/39559,price:.526},db.orangesoda={type:"orangesoda",probability:14879/39559,price:1.857},db.aquamarine={type:"aquamarine",probability:15040/39559,price:.27},db.sphynx={type:"sphynx",probability:15080/39559,price:.781},db.munchkin={type:"munchkin",probability:15250/39559,price:.561},db.raisedbrow={type:"raisedbrow",probability:15462/39559,price:.118},db.greymatter={type:"greymatter",probability:15739/39559,price:.242},db.happygokitty={type:"happygokitty",probability:17668/39559,price:.672},db.strawberry={type:"strawberry",probability:17799/39559,price:.658},db.soserious={type:"soserious",probability:18062/39559,price:.687},db.ragamuffin={type:"ragamuffin",probability:18080/39559,price:.482},db.sizzurp={type:"sizzurp",probability:18672/39559,price:.304},db.himalayan={type:"himalayan",probability:18888/39559,price:.677},db.pouty={type:"pouty",probability:19007/39559,price:.407},db.crazy={type:"crazy",probability:23729/39559,price:.892},db.thicccbrowz={type:"thicccbrowz",probability:24108/39559,price:.411},db.luckystripe={type:"luckystripe",probability:26394/39559,price:.29},db.granitegrey={type:"granitegrey",probability:36001/39559,price:.456},db.kittencream={type:"kittencream",probability:36700/39559,price:.505},db.totesbasic={type:"totesbasic",probability:1,price:.281};var percentColors=[{pct:0,color:{r:255,g:0,b:0}},{pct:.5,color:{r:255,g:255,b:0}},{pct:1,color:{r:0,g:255,b:0}}],getColorForPercentage=function(i){for(var e=1;e<percentColors.length-1&&!(i<percentColors[e].pct);e++);var r=percentColors[e-1],b=percentColors[e],t=b.pct-r.pct,p=(i-r.pct)/t,o=1-p,a=p,y={r:Math.floor(r.color.r*o+b.color.r*a),g:Math.floor(r.color.g*o+b.color.g*a),b:Math.floor(r.color.b*o+b.color.b*a)};return"rgb("+[y.r,y.g,y.b].join(",")+")"},triats_obj=document.getElementsByClassName("ListAttributes-item");for(var i in triats_obj)void 0!==triats_obj[i].innerText&&(triats_obj[i].style.backgroundColor=getColorForPercentage(db[triats_obj[i].innerText].probability),triats_obj[i].innerText=triats_obj[i].innerText+" ("+(100*db[triats_obj[i].innerText].probability).toFixed(2)+"%)");