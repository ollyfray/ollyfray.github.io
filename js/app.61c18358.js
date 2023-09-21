(function(){"use strict";var E={3920:function(E,A,R){var O=R(9242),I=R(3396),L=R.p+"img/logo.0b418612.webp";const T=(0,I._)("img",{class:"logo",src:L,alt:"Enigma Trainer Logo",width:"500"},null,-1);function S(E,A,R,O,L,S){const N=(0,I.up)("HelloWorld");return(0,I.wg)(),(0,I.iD)(I.HY,null,[T,(0,I.Wm)(N)],64)}var N=R(7139),C=R.p+"img/hands.c9d8bf29.png";const P=E=>((0,I.dD)("data-v-573a38b2"),E=E(),(0,I.Cn)(),E),e={key:0,class:"settings-popup"},U=P((()=>(0,I._)("svg",{width:"15",height:"15",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd"},[(0,I._)("path",{d:"M15 13.459l-5.01-4.926 4.92-4.969-2.218-2.218-4.935 4.998-4.986-4.921L0 3.564l4.988 4.937-4.921 4.986L2.218 15l4.956-4.986 4.969 4.92z"})],-1))),t=[U],D=P((()=>(0,I._)("h2",null,"Settings",-1))),B={class:"section"},H=P((()=>(0,I._)("h3",null,"General",-1))),M={class:"section"},G=P((()=>(0,I._)("h3",null,"Categories to include",-1))),r=["value"],o={class:"hand-container"},s=P((()=>(0,I._)("img",{src:C,alt:"Hands Image"},null,-1))),i={key:0,class:"reveal"},n={key:1,class:"reveal"},a={class:"controls"},K={key:2,class:"message"},l={key:3,class:"message"},F={key:4,class:"message"},W={key:5,class:"game-controls"},Y={class:"letters"},c=P((()=>(0,I._)("h2",null,"Figure out the letters",-1))),d={class:"lexicon"},h=P((()=>(0,I._)("h2",null,"Name a word beginning with the",-1))),g=P((()=>(0,I._)("br",null,null,-1))),V=P((()=>(0,I._)("br",null,null,-1)));function u(E,A,R,L,T,S){return(0,I.wg)(),(0,I.iD)("div",null,[T.showSettings?((0,I.wg)(),(0,I.iD)("div",e,[(0,I._)("div",{class:"close",onClick:A[0]||(A[0]=E=>T.showSettings=!1)},t),D,(0,I._)("div",B,[H,(0,I._)("label",null,[(0,I.wy)((0,I._)("input",{type:"checkbox","onUpdate:modelValue":A[1]||(A[1]=E=>T.considerYAsVowel=E)},null,512),[[O.e8,T.considerYAsVowel]]),(0,I.Uk)(' Consider "Y" as a vowel ')])]),(0,I._)("div",M,[G,((0,I.wg)(!0),(0,I.iD)(I.HY,null,(0,I.Ko)(Object.keys(T.categories),(E=>((0,I.wg)(),(0,I.iD)("div",{key:E},[(0,I._)("label",null,[(0,I.wy)((0,I._)("input",{type:"checkbox","onUpdate:modelValue":A[2]||(A[2]=E=>T.selectedCategories=E),value:E},null,8,r),[[O.e8,T.selectedCategories]]),(0,I.Uk)(" "+(0,N.zw)(E),1)])])))),128))])])):(0,I.kq)("",!0),(0,I._)("div",o,[s,((0,I.wg)(),(0,I.iD)(I.HY,null,(0,I.Ko)(10,(E=>(0,I._)("div",{key:E,style:(0,N.j5)({top:T.lightPositions[E-1].y,left:T.lightPositions[E-1].x}),class:(0,N.C_)(["light-effect",{"active-light":T.activeLight===E}])},null,6))),64)),T.reveal?((0,I.wg)(),(0,I.iD)("div",i," I was thinking of... "+(0,N.zw)(T.selectedWord)+"! ",1)):(0,I.kq)("",!0),!T.reveal&&T.gameStarted?((0,I.wg)(),(0,I.iD)("div",n," What word am I thinking of? ")):(0,I.kq)("",!0)]),(0,I._)("div",a,[T.gameStarted?(0,I.kq)("",!0):((0,I.wg)(),(0,I.iD)("button",{key:0,class:"primary btn",onClick:A[3]||(A[3]=(...E)=>S.startGame&&S.startGame(...E))},"Start")),T.gameStarted?(0,I.kq)("",!0):((0,I.wg)(),(0,I.iD)("button",{key:1,class:"secondary btn light",onClick:A[4]||(A[4]=E=>T.showSettings=!0)},"Settings")),T.revealedCategory?((0,I.wg)(),(0,I.iD)("div",K,"Category: "+(0,N.zw)(T.selectedCategory),1)):(0,I.kq)("",!0),T.revealedLetterShape?((0,I.wg)(),(0,I.iD)("div",l,"Shape of First Letter: "+(0,N.zw)(T.letterShape),1)):(0,I.kq)("",!0),T.generatedWordFromLetter?((0,I.wg)(),(0,I.iD)("div",F,(0,N.zw)(T.generatedWordFromLetter),1)):(0,I.kq)("",!0),T.gameStarted?((0,I.wg)(),(0,I.iD)("div",W,[(0,I._)("button",{class:"primary",onClick:A[5]||(A[5]=(...E)=>S.revealCategory&&S.revealCategory(...E))},"What's the Category?"),(0,I._)("div",Y,[c,(0,I._)("button",{class:"primary",onClick:A[6]||(A[6]=(...E)=>S.showWordLength&&S.showWordLength(...E))},"How many letters?"),(0,I._)("button",{class:"primary",onClick:A[7]||(A[7]=(...E)=>S.showFirstVowel&&S.showFirstVowel(...E))},"Where's the first vowel?"),(0,I._)("button",{class:"primary",onClick:A[8]||(A[8]=(...E)=>S.showSecondVowel&&S.showSecondVowel(...E))},"Where's the second vowel?"),(0,I._)("button",{class:"primary",onClick:A[9]||(A[9]=(...E)=>S.revealLetterShape&&S.revealLetterShape(...E))},"What's the shape of the first letter?")]),(0,I._)("div",d,[h,(0,I._)("button",{class:"primary",onClick:A[10]||(A[10]=E=>S.getWordFromLetterIndex(2))},"Second letter"),(0,I._)("button",{class:"primary",onClick:A[11]||(A[11]=E=>S.getWordFromLetterIndex(3))},"Third letter"),(0,I._)("button",{class:"primary",onClick:A[12]||(A[12]=E=>S.getWordFromLetterIndex(4))},"Fourth letter"),(0,I._)("button",{class:"primary",onClick:A[13]||(A[13]=E=>S.getWordFromLetterIndex("last"))},"Last letter")]),g,V,(0,I._)("button",{class:"success",onClick:A[14]||(A[14]=(...E)=>S.revealWord&&S.revealWord(...E))},"Tell me the word!"),(0,I._)("button",{class:"error",onClick:A[15]||(A[15]=(...E)=>S.resetWord&&S.resetWord(...E))},"Reset")])):(0,I.kq)("",!0)])])}R(7658);var w={data(){return{categories:{ManmadeInHand:["ABACUS","ACTIONMAN","ADAPTOR","AERIAL","AERO","AFTERSHAVE","AFTERSUN","AIRBRUSH","AIRCON","AIRCONDITIONER","AIRFRESHENER","AIRFRESHNER","AIRFRIER","AIRFRYER","AIRPLANE","AIRPOD","AIRPODS","AIRTAG","ALARM","ALARMCLOCK","ALEXA","ALUMINUMFOIL","AMERICAN","AMP","AMPLIFIER","ANALBEAD","ANALBEADS","ANCHOR","ANTENNA","ANVIL","APP","APPLE","APPLEPIE","APRON","AQUARIUM","ARMBAND","ARMCHAIR","ARMOUR","ARMREST","ARROW","ARROWHEAD","ASHTRAY","ATLAS","AUTOMOBILE","AXE","BACKPACK","BADGE","BAG","BAGPIPE","BAGPIPES","BALL","BALLOON","BALLPOINTPEN","BANDAID","BANJO","BANKNOTE","BANNER","BARBECUE","BARBIE","BAROMETER","BARREL","BASEBALL","BASIN","BASKET","BASKETBALL","BASS","BATHMAT","BATTERY","BEACHBALL","BEAD","BEADS","BEAKER","BEANBAG","BEANIE","BEER","BELL","BELT","BENCH","BERET","BIBLE","BICYCLE","BIKE","BILLET","BIN","BINOCULARS","BISCUIT","BISCUITS","BLACKBOARD","BLADE","BLANKET","BLEACH","BLENDER","BLIND","BLINDS","BLOUSE","BLUEMOON","BLUNT","BLUSHER","BOARD","BOARDGAME","BOAT","BODYARMOUR","BOILER","BOLLARD","BOLT","BOMB","BONG","BONGO","BOOK","BOOKMARK","BOOMERANG","BOOST","BOOT","BOPIT","BOTTLE","BOTTLECAP","BOTTLEOPENER","BOUNTY","BOUQUET","BOW","BOWL","BOWTIE","BOX","BOXERS","BRA","BRACELET","BRACES","BRACKET","BREAD","BREATHALYSER","BRICK","BRIEFCASE","BROACH","BROOM","BRUSH","BUBBLEGUM","BUCKET","BUENO","BUGGY","BUISNESSCARD","BULB","BULLET","BULLETPROOFVEST","BUMBAG","BUN","BUNGEE","BUNGEECORD","BUNTING","BURGER","BUSINESSCARD","BUTTER","BUTTON","BUTTPLUG","CABINET","CABLE","CAGE","CAKE","CALCULATOR","CALENDAR","CALIPER","CALLIPER","CAMCORDER","CAMERA","CAN","CANDELABRA","CANDLE","CANDLESTICK","CANDY","CANE","CANOE","CANOPENER","CANVAS","CAP","CAPGUN","CAPO","CAPSULE","CAPTAIN","CARAFE","CARAMEL","CARD","CARDBOARD","CARDBOARDBOX","CARDIGAN","CARDS","CARKEY","CARKEYS","CARLING","CARLSBERG","CARMEX","CARPET","CART","CARTON","CARTRIDGE","CASE","CASKET","CASSETTE","CASSETTETAPE","CAST","CATALOGUE","CATFLAP","CAULDRON","CAULK","CD","CELLO","CELLOTAPE","CELLPHONE","CELLULARPHONE","CEREAL","CERTIFICATE","CHAIN","CHAINS","CHAINSAW","CHAIR","CHALK","CHAMPAGNE","CHANDELIER","CHAPSTICK","CHARGER","CHARM","CHECK","CHEESE","CHEESEBURGER","CHEESECAKE","CHEQUE","CHEQUEBOOK","CHESS","CHESSBOARD","CHESSSET","CHEST","CHEWINGGUM","CHIP","CHIPS","CHISEL","CHOCOLATE","CHOPPINGBOARD","CHOPSTICK","CHOPSTICKS","CIGAR","CIGARETTE","CLAMP","CLARINET","CLAYMORE","CLEANSER","CLEATS","CLIP","CLIPBOARD","CLIPPERS","CLOCK","CLOTH","CLUTCH","COASTER","COAT","COATHANGER","COCACOLA","COCK","COCKRING","COCKTAIL","COFFEE","COFFEEPOT","COFFIN","COIN","COKE","COLA","COLLAR","COLOGNE","COLOR","COLORINGBOOK","COLORS","COLOURINGBOOK","COLOURS","COMB","COMFORTER","COMIC","COMICBOOK","COMPASS","COMPENDIUM","COMPUTER","CONCEALER","CONCRETE","CONDITIONER","CONDOM","CONDOMS","CONE","CONSOLE","CONTACTLENS","CONTACTLENSE","CONTACTLENSES","CONTAINER","CONTROLLER","CONVERTER","COOKIE","COOKIES","COOLER","COPIER","CORD","CORK","CORKSCREW","CORNICE","COSTUME","COT","COTTONBUD","COTTONWOOL","COUPON","CRACKER","CRADLE","CRATE","CRAVAT","CRAYON","CREAM","CREAMER","CREDITCARD","CRICKETBALL","CRICKETBAT","CRISP","CRISPS","CROISSANT","CROSS","CROSSBOW","CROSSWORD","CROWBAR","CRUCIFIX","CRUTCH","CRYSTAL","CUBE","CUE","CUFFLINK","CUFFLINKS","CUM","CUP","CUPBOARD","CURLERS","CURLINGIRON","CURTAIN","CURTAINS","CUSHION","CYCLE","DAGGER","DART","DARTBOARD","DEBITCARD","DECANTER","DECK","DECKCHAIR","DENTALFLOSS","DENTURE","DEODORANT","DESK","DESSERT","DIABOLO","DIAMOND","DIAPER","DIAPERS","DIARY","DICE","DICK","DICTIONARY","DIDGERIDOO","DIFFUSER","DILDO","DISC","DISH","DISINFECTANT","DOLL","DOLLARBILL","DOMINO","DOODLE","DOOR","DOORKNOB","DOORMAT","DOUGHNUT","DRAIN","DRAPES","DRAWING","DRAWINGPIN","DREAMCATCHER","DRESS","DRILL","DRONE","DRPEPPER","DRUM","DUCKTAPE","DUMBBELL","DUMMY","DUREX","DUSTER","DUSTPAN","DUVET","DVD","DYNAMITE","DYSON","EARMUFF","EARMUFFS","EARPLUG","EARPLUGS","EARRING","EARRINGS","EASEL","EASTEREGG","EGGTIMER","ELASTIC","ELEPHANT","ENCYCLOPAEDIA","ENVELOPE","ERASER","EXACTOBLADE","EXACTOKNIFE","EXTINGUISHER","EYELASHES","EYEPATCH","FACEBOOK","FACECREAM","FACEMASK","FAG","FAN","FANNYPACK","FAXMACHINE","FEATHER","FENCE","FIGURINE","FILOFAX","FILTER","FIREEXTINGUISHER","FIREHYDRANT","FIREWORK","FISH","FISHBOWL","FISHINGNET","FISHINGPOLE","FISHINGROD","FITBIT","FLAG","FLANNEL","FLASHLIGHT","FLASK","FLATCAP","FLIPCHART","FLIPFLOP","FLIPFLOPS","FLIPPER","FLIPPERS","FLOAT","FLOPPYDISC","FLOSS","FLOWER","FLUTE","FLYER","FOIL","FOOTBALL","FOOTSTALL","FORCEPS","FORK","FOUNDATION","FRAME","FRIES","FRISBEE","FRUITCAKE","FRYER","FRYINGPAN","FUNNEL","GALAXY","GAMEBOY","GATE","GAVEL","GEAR","GEARSTICK","GEL","GENERATOR","GHOST","GIFTBAG","GLASS","GLASSES","GLOBE","GLOVE","GLOVES","GLOWSTICK","GLUE","GNOME","GOGGLES","GOLD","GOLFCLUB","GOOGLE","GOWN","GRAMOPHONE","GRATER","GRENADE","GRIDDLE","GRILL","GRINDER","GUITAR","GUM","GUN","GYROSCOPE","HAIRBAND","HAIRBRUSH","HAIRCLAY","HAIRCLIP","HAIRDRYER","HAIRGEL","HAIRSPRAY","HAIRTIE","HAIRWAX","HAMBURGER","HAMMER","HAMMOCK","HANDBAG","HANDBREAK","HANDCREAM","HANDCUFF","HANDCUFFS","HANDGUN","HANDKERCHIEF","HANDLE","HANDWARMER","HANGER","HARDDRIVE","HARMONICA","HARNESS","HAT","HATCHET","HEADPHONES","HEADSET","HEATER","HEIRLOOM","HELICOPTER","HELMET","HIGHHEEL","HIGHHEELS","HINGE","HOE","HOLEPUNCH","HOODIE","HOOK","HOOVER","HORSESHOE","HOSE","HUBCAP","HULAHOOP","HYDRANT","ICEBOX","ICECHEST","ICECREAM","ICECUBE","ICEPACK","ICETRAY","INCENSE","INDICATOR","INEARS","INHALER","INKCARTRIDGE","INSTAGRAM","INUKSHUK","IPAD","IPHONE","IPOD","IRNBRU","IRON","IRONINGBOARD","JACKDANIELS","JACKET","JAR","JAVELIN","JEANS","JELLY","JENGA","JERSEY","JEWELRY","JOURNAL","JOYSTICK","JUG","JUICE","JUICER","JUMPER","JUMPINGJACK","JUUL","KAYAK","KEBAB","KEG","KETTLE","KETTLEBELL","KEY","KEYBOARD","KEYCHAIN","KEYPAD","KEYRING","KEYS","KINDLE","KITCHENROLL","KITKAT","KLEENEX","KNICKERS","KNIFE","KNOB","KNUCKLEDUSTER","KOMBUCHA","LABEL","LACE","LADDER","LADLE","LAGER","LAMP","LAMPPOST","LAMPSHADE","LANTERN","LANYARD","LAPTOP","LASAGNE","LAWNMOWER","LEAD","LEAFBLOWER","LEAFLET","LEMONADE","LENS","LETTER","LETTERBOX","LICENSEPLATE","LIGHT","LIGHTBULB","LIGHTER","LILO","LION","LIPGLOSS","LIPSALVE","LIPSTICK","LOAF","LOAFERS","LOCK","LOCKER","LOCKET","LOLLIPOP","LOLLY","LOOFAH","LOTION","LUBE","LUGGAGE","LUNCH","LUNCHBOX","LUNCHSACK","MACHETE","MACRAME","MAGAZINE","MAGICMARKER","MAGICWAND","MAGNET","MAGNIFYING","MAGNIFYINGGLASS","MAIL","MANDOLIN","MANUAL","MAP","MARACAS","MARBLE","MARKER","MARKERPEN","MARRACAS","MARS","MARSBAR","MASCARA","MASHER","MASK","MASTERCARD","MAT","MATCH","MATCHBOX","MATCHES","MATTRESS","MAYONNAISE","MEDAL","MEDALLION","MEDICATION","MEDICINE","MEGAPHONE","MEMORYBANK","MEMORYCARD","MEMORYSTICK","MENORAH","MENU","METAL","MICROCHIP","MICROPHONE","MICROWAVE","MILK","MILKSHAKE","MILKYBAR","MILKYWAY","MILLIVOLTMETER","MINIDISC","MINT","MIRROR","MIXER","MOBILE","MOCCASIN","MODELAIRPLANE","MODELCAR","MODEM","MOISTURISER","MONEY","MONEYCLIP","MONITOR","MONOCLE","MONOPOLY","MOP","MORTAR","MOUSE","MOUSEMAT","MOUSEPAD","MOUSETRAP","MOUSSE","MOUTHWASH","MUG","NAIL","NAILFILE","NAILPOLISH","NAILWRITER","NAPKIN","NAPPY","NECKLACE","NECKTIE","NEEDLE","NEWLIST","NEWSPAPER","NIGHTY","NINTENDO","NOODLE","NOODLES","NOSERING","NOTE","NOTEBOOK","NOTEPAD","NUT","OCULUS","OINTMENT","OPENER","ORANGINA","ORGAN","ORNAMENT","OVENGLOVE","OVENGLOVES","PACIFIER","PACKAGE","PACKET","PAD","PADDLE","PADLOCK","PAGE","PAGER","PAIL","PAINT","PAINTBRUSH","PANEL","PANTIES","PANTS","PAPER","PAPERBAG","PAPERCLIP","PAPERSACK","PAPERWEIGHT","PARACHUTE","PARCHMENT","PASTA","PAVLOVA","PEARL","PECANPIE","PEELER","PEG","PEN","PENCIL","PENCILCASE","PENCILSHARPENER","PENDANT","PENKNIFE","PEPSI","PERCOLATOR","PERFUME","PERONI","PESTLE","PETROLEUM","PHONE","PHONEBOOK","PHONECASE","PHOTO","PHOTOFRAME","PHOTOGRAPH","PIANO","PICTIONARY","PICTURE","PIE","PIGGYBANK","PIJAMAS","PILL","PILLBOX","PILLOW","PILLOWCASE","PILLS","PIN","PINATA","PINCUSHION","PINGPONGBALL","PINT","PINTGLASS","PIPE","PIPETTE","PISTOL","PIZZA","PIÑATA","PLANTPOT","PLASTER","PLASTIC","PLASTICBAG","PLATE","PLAYSTATION","PLECTRUM","PLIERS","PLUG","PLUNGER","POCKETKNIFE","POGO","POGOSTICK","POISON","POKERCHIP","POLE","POLISH","POOLBALL","POOLCUE","POPCORN","POPPER","POPSICLE","PORCELAIN","PORTFOLIO","POSTCARD","POSTER","POSTIT","POSTITNOTES","POT","POTATOPEELER","POUCH","POUND","POWERBANK","POWERPACK","PRAM","PRINTER","PROJECTOR","PROSECCO","PROTRACTOR","PUMP","PUMPKIN","PUPPET","PURIFIER","PURSE","PUZZLEPIECE","PYJAMAS","QTIP","QUILL","QURAN","RACK","RACKET","RADIATOR","RADIO","RAG","RAILING","RAKE","RAZOR","RAZORBLADE","RECEIPT","RECORD","RECORDER","REMOTE","RESERVED","RETAINER","RIBBON","RIFLE","RIM","RING","RIZLA","ROD","ROLEX","ROLLER","ROLLERBLADE","ROLLINGPIN","ROOMFRESHNER","ROPE","ROUTER","ROVER","RUBBER","RUBBERBAND","RUBIKSCUBE","RUG","RULER","SACK","SADDLE","SAFETYBELT","SAFETYPIN","SALTSHAKER","SAND","SANDALS","SANDER","SANDPAPER","SANDWICH","SANITISER","SATELLITE","SAUCEPAN","SAUCER","SAUSAGE","SAUSAGEROLL","SAXOPHONE","SCALE","SCALES","SCANNER","SCARF","SCEPTRE","SCISSORS","SCONCE","SCOOTER","SCRABBLE","SCRATCHCARD","SCREEN","SCREW","SCREWDRIVER","SCRIPT","SCRUNCHIE","SCRUNCHIES","SCRUNCHY","SCULPTURE","SEAT","SEATBELT","SEGWAY","SELLOTAPE","SERVIETTE","SEXDOLL","SHAKER","SHAMPOO","SHARPENER","SHARPIE","SHAVER","SHEET","SHEETS","SHELVES","SHIRT","SHIV","SHOE","SHOEBOX","SHOELACE","SHOES","SHOPPINGCART","SHORTBREAD","SHORTS","SHOTGUN","SHOVEL","SHOWERCAP","SHOWERCURTAIN","SHOWERGEL","SHOWERHEAD","SHUTTERS","SHUTTLECOCK","SIEVE","SIGN","SILK","SILVERWARE","SINK","SKATEBOARD","SKETCHBOOK","SKEWER","SKIPPINGROPE","SKIRT","SKIS","SKITTLE","SLAB","SLEDGE","SLEDGEHAMMER","SLING","SLINGSHOT","SLINKY","SLIPPER","SLIPPERS","SMARTPHONE","SNARE","SNEAKER","SNEAKERS","SNICKERS","SNOOKERBALL","SNORKEL","SNOWBALL","SNOWBOARD","SNOWGLOBE","SOAP","SOCCERBALL","SOCK","SOFA","SORBET","SOUP","SPACER","SPAGHETTI","SPANNER","SPARKLERSPATULA","SPATULAR","SPEAKER","SPEAR","SPECTACLES","SPINNINGTOP","SPLIFF","SPOKE","SPONGE","SPOON","SPRAY","SPRAYCAN","SPRAYPAINT","SPRING","SPRINKLER","SPRITE","SPRITZER","SPYGLASS","STAMP","STAND","STAPLE","STAPLER","STATUE","STETHOSCOPE","STICKER","STICKERS","STILETTO","STIRRER","STOOL","STRAINER","STRAW","STREAMER","STRIMMER","STRING","STROLLER","STYROFOAM","SUB","SUGAR","SUITCASE","SUNCREAM","SUNGLASSES","SUPERGLUE","SURFBOARD","SUSHI","SUSHIROLL","SUSPENDER","SUSPENDERS","SWEATBAND","SWEATER","SWIMMERS","SWITCH","SWORD","SYRINGE","TABLE","TABLESPOON","TABLET","TACO","TAG","TAKEOUT","TAMAGOTCHI","TAMPAX","TAMPON","TANKARD","TAP","TAPE","TAPEMEASURE","TAPERECORDER","TATTOO","TAXIDERMY","TEABAG","TEALIGHT","TEAPOT","TEASPOON","TEATOWEL","TEDDY","TEDDYBEAR","TELEPHONE","TELESCOPE","TELEVISION","TENNIS BALL","TENNISBALL","TENT","TEQUILA","TESTTUBE","THERMOMETER","THERMOSTAT","THESAURUS","THIMBLE","THONG","THREAD","THUMBTACK","TICKET","TIE","TILE","TIMER","TINOPENER","TIRE","TISSUE","TOASTER","TOBACCO","TOBOGGAN","TOILET","TOILETPAPER","TOKEN","TONGS","TOOTH","TOOTHBRUSH","TOOTHPASTE","TOOTHPICK","TOP","TOPHAT","TORCH","TORTILLA","TOWEL","TOYAIRPLANE","TOYCAR","TOYMOUSE","ΤΟΥΡΟΤ","TOYRAT","TOYSOLDIER","TOYTRUCK","TRAINER","TRAINERS","TRAMPOLINE","TRANSFORMER","TRANSISTOR","TRAP","TRAPDOOR","TRASHBIN","TRASHCAN","TRAY","TREADMILL","TREASURE","TRENCHCOAT","TRIANGLE","TRICYCLE","TRIMMER","TRIMMERS","TROMBONE","TROPHY","TROUSERS","TROWEL","TRUMPET","TRUNK","TRUNKS","TSHIRT","TUBA","TUBE","TUMBLER","TUPPERWARE","TURPENTINE","TURTLENECK","TWEEZER","TWEEZERS","TWIX","TYPEWRITER","TYRE","UMBRELLA","UNDERWEAR","UNICYCLE","UNIFORM","URN","USB","USBSTICK","VACUUM","VAPE","VARNISH","VASE","VASELINE","VEIL","VENT","VENTILATOR","VEST","VIAL","VIBRATOR","VICE","VIDEO","VIDEOGAME","VIDEOTAPE","VIMTO","VINYL","VIOLIN","VISACARD","VITAMIN","VITAMINS","VODKA","WAISTCOAT","WALKIETALKIE","WALLET","WAND","WASHER","WATCH","WATERCAN","WATERINGCAN","WATERPISTOL","WAX","WHEEL","WHEELBARROW","WHIP","WHISK","WHISKY","WHISTLE","WHITEBOARD","WIG","WINDOW","WINDOWFRAME","WINE","WINEGLASS","WIPE","WIRE","WOK","WRAP","WRENCH","XBOX","XYLOPHONE","YO YO","YOGAMAT","YOYO","ZIP","ZIPPER","ZIPPO"],ManmadeBig:["AIRCRAFT","AIRPLANE","ALLEY","ALTAR","AMBULANCE","AMPLIFIER","ANCHOR","APARTMENT","AQUARIUM","ARCHWAY","ARMCHAIR","ATM","AUDI","AUTO","AUTOMOBILE","AWNING","BALCONY","BANISTER","BANNER","BAR","BARBECUE","BARBERS","BARGE","BARGEPOLE","BARREL","BARRIER","BASEMENT","BASIN","BATH","BATHROOM","BATHTUB","BATTLESHIP","BED","BEDROOM","BELL","BENCH","BICYCLE","BIKE","BILLBOARD","BLACKBOARD","BLIND","BLINDS","BUS","CABIN","CABINET","CAFE","CAGE","CANOE","CAR","CARAVAN","CARPARK","CARPET","CARRIAGE","CASHMACHINE","CASTLE","CATHEDRAL","CAULDRON","CAVE","CEILING","CELLO","CEMETERY","CHAIR","CHANDELIER","CHECKOUT","CHEST","CHIMNEY","CHURCH","COACH","COFFIN","COLISEUM","COLOSSEUM","COLUMN","COMPOST","CONCORD","CONCRETE","CONDO","CONE","CONSERVATORY","CONVERTIBLE","COOKER","CORRIDOR","COSTUME","COUCH","COUNTER","COURTHOUSE","CRADLE","CRANE","CRASHDUMMY","CREMATORIUM","CREMATORY","CROSSING","CRUISE","CUBICLE","CUPBOARD","CURTAIN","CURTAINS","CYCLE","DECKCHAIR","DECKING","DEN","DESK","DIGGER","DISH","DISHWASHER","DOOR","DRAINPIPE","DRESSER","DRIVEWAY","EARTHQUAKE","ELEVATOR","ENGINE","ESCALATOR","FAN","FEATURE","FERRARI","FIRE","FIREENGINE","FIREPLACE","FIRETRUCK","FLAT","FLIPCHART","FLOOR","FLOORBOARD","FOOTBRIDGE","FOOTPATH","FORKLIFT","FORT","FOUNTAIN","FRAME","FREEWAY","FREEZER","FRIDGE","FRIDGEFREEZER","FURNACE","GAMESHOW","GARAGE","GARDEN","GASSTOVE","GLASS","GONG","GRAMOPHONE","GRATE","GRAVEYARD","GUN","GYM","GYMNASIUM","HAIRDRESSER","HALLWAY","HAMMOCK","HARP","HEATER","HEIRLOOM","HELICOPTER","HELIPAD","HIGHCHAIR","HIGHSTREET","HIGHWAY","HOOVER","HOSPITAL","HOSTEL","HOTEL","HOTTUB","HOUSE","HYDROFOIL","HYDROPLANE","IGLOO","INCUBATOR","INFIRMARY","INUKSHUK","IRONINGBOARD","JACUZZI","JAGUAR","JET","JETSKI","JUMBOJET","KAYAK","KEYBOARD","KITCHEN","LAB","LABORATORY","LADDER","LAMP","LAMPPOST","LAVATORY","LAWNMOWER","LETTERBOX","LIDO","LIFT","LIMO","LIMOUSINE","LIVINGROOM","LOCKER","LOGCABIN","LORRY","LUGGAGE","MAISONETTE","MALL","MANNEQUIN","MARKET","MARQUEE","MARQUIS","MASSAGECHAIR","MATTRESS","MERCEDES","MIRROR","MISSILE","MOTORBIKE","MOTORWAY","MOUNTAIN","MOWER","NEWSAGENT","NIGHTCLUB","ORCHESTRA","ORGAN","OVEN","OVERPASS","PACKAGE","PAINT","PAINTING","PANEL","PANTRY","PARACHUTE","PARK","PATH","PAVEMENT","PEUGEOT","PEW","PHOTOCOPIER","PIANO","PILLAR","PLANE","PLASTIC","PLATFORM","PLAYGROUND","POLE","POND","POOL","POSTBOX","POSTER","PRAM","PRISON","PUB","PUMP","PYLON","PYRAMID","PYRAMIDS","RADIATOR","RAIL","RAILINGS","RAILWAY","RECLINER","REFRIGERATOR","RESTAURANT","RESTROOM","ROAD","ROCKET","ROCKINGCHAIR","ROLLERCOASTER","ROOF","ROOFRACK","ROUNDABOUT","SAFE","SAILBOAT","SAILINGBOAT","SATELLITE","SAUNA","SCAFFOLDING","SCALE","SCALES","SCARECROW","SCULPTURE","SEESAW","SEGWAY","SEWERS","SHED","SHELTER","SHIP","SHOP","SHOPPINGMALL","SHOWER","SHUTTLE","SIDEWALK","SIGNPOST","SINK","SKYLIGHT","SKYSCRAPER","SLIDE","SLIDINGDOOR","SOFA","SOFABED","SPA","SPACESHIP","SPACESHUTTLE","SPACESTATION","SPEAKER","SPEAKERS","SPEAR","SPEEDBOAT","STADIUM","STAGE","STAIRCASE","STAIRS","STATION","STATUE","STEEPLE","STEPLADDER","STEPS","STOREROOM","STOVE","STREET","STREETLAMP","STREETLIGHT","STYROFOAM","SUBMARINE","SUITCASE","SUNBED","SUPERMARKET","SWIMMINGPOOL","SWING","TABLE","TANK","TANKER","TAXI","TAXIDERMY","TELESCOPE","TELEVISION","TENT","TERRACE","TESLA","THEATRE","THEMEPARK","TILE","TILL","TOILET","TORPEDO","TOWER","TRACTOR","TRAFFICLIGHT","TRAILER","TRAIN","TRAINTRACK","TRAINTRACKS","TRANSFORMER","TRAPDOOR","TREADMILL","TREE","TREEHOUSE","TRICYCLE","TROLLEY","TRUCK","TRUNK","TUB","TUBE","TUMBLEDRYER","TUNNEL","TURBINE","TV","TYPEWRITER","UFO","UNDERGROUND","UNDERPASS","UNICYCLE","VENT","VENTILATOR","VILLAGE","VINEYARD","WAGON","WALL","WALLPAPER","WAREHOUSE","WASHINGMACHINE","WASHROOM","WATCHTOWER","WATERJUG","WELL","WESTFIELD","WESTFIELDS","WHEELBARROW","WHEELCHAIR","WHITEBOARD","WINDMILL","WINDOW","WINDOWFRAME","WINDTURBINE","WIRE","WORKSURFACE","YACHT","ZEPPELIN","ZOO","ZORB"],NaturalInHand:["ACORN","AIR","ALMOND","ALMONDS","AMBER","ANIMAL","APPLE","APRICOT","ATOM","AUBERGINE","BANANA","BARK","BEAN","BEETLE","BEETROOT","BLACKBERRY","BLUEBERRY","BONE","BRANCH","BRAZILNUT","BROCCOLI","BUG","CABBAGE","CACTUS","CARBON","CARDAMOM","CARROT","CASHMERE","CELL","CHARM","CHILLI","CLAM","CLEMENTINE","CLOUD","CLOVE","COAL","COCK","COCKLE","COCOON","COFFEE","COFFEEBEAN","CONCRETE","CONCRETE","COPPER","COTTON","COURGETTE","CRANBERRY","CRYSTAL","CUCUMBER","DAFFODIL","DIAMOND","DICK","DIRT","DUST","EGGSHELL","ELECTRIC","ELECTRICITY","EMERALD","ENERGY","FEATHER","FIRE","FISH","FLOUR","FLOWER","FRUIT","GEM","GEMSTONE","GHOST","GIFT","GLASS","GOLD","GOOSEBERRY","GRAPE","GRASS","GRIT","HAIR","HAZELNUT","HEART","HEATHER","HEIRLOOM","HERB","ICE","ICECUBE","INK","IRON","JADE","JUICE","KUMQUAT","LADYBUG","LEAF","LEMON","LENTIL","LIGHT","LILLY","LIME","LIVER","MAGNET","MARBLE","MELON","METAL","MONSTERA","MOSS","MUD","MUSSEL","NEST","NUT","OIL","OLIVE","ONION","ORANGE","OYSTER","PAINT","PANSY","PAPER","PARSNIP","PEA","PEACH","PEANUT","PEAR","PEARL","PEBBLE","PENIS","PEPPER","PINEAPPLE","PINECONE","PLANT","PLUM","POD","POO","POOP","POTATO","PRUNE","PULSE","PUMPKIN","QUARTZ","QUILL","RAINBOW","RAISIN","RHUBARB","RICE","ROCK","ROPE","ROSE","ROSEBUD","RUBY","RUNNERBEAN","SALT","SAND","SAPPHIRE","SEASHELL","SEAWEED","SEED","SHELL","SHIT","SILK","SKIN","SKULL","SLAB","SNOWBALL","SNOWFLAKE","SOIL","SOUP","SPACE","SPICE","SPICES","SPINACH","STARDUST","STEAM","STICK","STONE","STRAWBERRY","STRING","SUNFLOWER","SUNSHINE","SWEETCORN","TATTOO","THREE","THYME","TIME","ΤΟΜΑΤΟ","TOOL","TULIP","TURNIP","TWIG","TWO","VEIN","WALNUT","WATER","WATERMELON","WEED","WILDLIFE","WIRE","WOOL","WORM"],NaturalBig:["ATLAS","BEACH","BUSH","CACTUS","CANAL","CAVE","CLIFF","CLOUD","CLOUDS","COUNTRY","COUNTRYSIDE","CREEK","CREVASSE","DESSERT","ENERGY","ESTUARY","FARM","FIELD","FIRE","GALAXY","GHOST","HAIL","HEDGE","JUNGLE","LAKE","LAND","LAVA","LIGHT","LIGHTNING","MEADOW","MINERAL","MONSTERA","MOUNTAIN","NEST","OCEAN","PATH","PATHWAY","PLANET","POND","RAIL","RAIN","RAINBOW","RAINFOREST","RAINFORREST","RESERVOIR","RIVER","ROCK","ROSEBUSH","ROSEGARDEN","SEA","SEAWEED","SLEET","SNOW","SPACE","STAR","STONE","STORM","STREAM","SUN","THUNDER","TIME","TREE","VINEYARD","VOLCANO","WATERFALL","WILDLIFE","WORLD"],Animals:["AARDVARK","ADDER","ALLIGATOR","ANACONDA","ANCHOVIE","ANGELFISH","ANTEATER","ANTELOPE","ARMADILLO","BABOON","BADGER","BANDICOOT","BASSS","BEAGLE","BEAR","BEATLE","BEAVER","BEE","BEETLE","BISON","BLACKBIRD","BLUETIT","BOA","BOACONSTRICTOR","BOBCAT","BOXER","BUG","BULLDOG","BULLFROG","BULLMASTIFF","BUMBLEBEE","BUTTERFLY","BUZZARD","CALF","CAMEL","CANARY","CAPYBARA","CARP","CAT","CATERPILLAR","CATFISH","CATTLE","CENTIPEDE","CHAMELEON","CHEETAH","CHICKEN","CHIHUAHUA","CHIMPANZEE","CICADA","COBRA","COCKATOO","COCKROACH","COD","CORGI","COUGAR","COW","CRAB","CRANEFLY","CRAYFISH","CRICKET","CROCODILE","CROW","CUTTLEFISH","DACHSHUND","DALMATIAN","DEER","DODO","DOG","DOLPHIN","DONKEY","DORMOUSE","DRAGONFLY","DUCK","EAGLE","EARTHWORM","EEL","ELEPHANT","FALCON","FERRET","FINCH","FIREFLY","FISH","FLAMINGO","FLY","FOX","FOXHOUND","FROG","GAZELLE","GECKO","GELDING","GERBIL","GERMANSHEPHERD","GIBBON","GIRAFFE","GLOWWORM","GOAT","GOLDCREST","GOLDENEAGLE","GOLDENRETRIEVER","GOLDFISH","GOOSE","GOPHER","GORILLA","GOSHAWK","GRASSHOPPER","GRASSSNAKE","GREATDANE","GREENFLY","GREENFROG","GRIZZLYBEAR","GUINEAPIG","HADDOCK","HALIBUT","HAMSTER","HARE","HAWK","HEFFER","HERON","HIPPO","HIPPOPOTAMUS","HORNET","HORSE","HORSEFLY","HUMAN","HUMMINGBIRD","HUSKY","HYENA","IBEX","IGUANA","INSECT","JACKAL","JAGUAR","JELLYFISH","KANGAROO","KINGFISHER","KOALA","LADYBIRD","LADYBUG","LAMA","LAMB","LEOPARD","LIGER","LION","LIZARD","LIZZARD","LLAMA","LOBSTER","LOCUST","LUMPFISH","MACKEREL","MAGGOT","MAGPIE","MALLARD","MANDRILL","MARLIN","MASTIF","MASTIFF","MAYFLY","MONGOOSE","MONKEY","MOOSE","MOSQUITO","MOTH","MOUSE","MULE","NARWHAL","NEWT","NIGHTINGALEOCTOPUS","ORANGUTAN","OSTRICH","OTTER","OWL","OYSTER","PANDA","PANTHER","PARAKEET","PARROT","PARTRIDGE","PEACOCK","PELICAN","PENGUIN","PHEASANT","PIG","PIGEON","PIPISTRELLE","PIRANHA","PITBULL","PLATYPUS","PONY","POODLE","PRAWN","PUFFIN","PUMA","PYTHON","QUAIL","RABBIT","RACCOON","RAT","RATTLESNAKE","RAVEN","REINDEER","RETRIEVER","RHINO","RHINOCEROS","ROADRUNNER","ROBIN","ROOSTER","ROTTWEILER","SALAMANDER","SALMON","SAUSAGE","SCALLOP","SCORPION","SEABASS","SEAGULL","SEAHORSE","SEAL","SHARK","SHEEP","SHEEPDOG","SHREW","SHRIMP","SIDEWINDER","SILKWORM","SILVERBACK","SKUNK","SLOTH","SLUG","SNAIL","SNAKE","SNAPPER","SPANIEL","SPARROW","SPIDER","SQUID","SQUIRREL","STALK","STARFISH","STARLING","STURGEON","SWALLOW","SWALLOWTAIL","SWAN","SWORDFISH","TADPOLE","TARANTULA","TERMITE","TERRIER","THRUSH","TICK","TIGER","TOAD","TORTOISE","TOUCAN","TROUT","TUNA","TURKEY","TURTLE","VIPER","VOUL","VULTURE","WALLABY","WALRUS","WARTHOG","WASP","WEASEL","WHALE","WHIPPET","WILDEBEEST","WOLF","WOLVERINE","WOMBAT","WOODLOUSE","WOODPECKER","WOODRAT","WORM","ZEBRA"],Countries:["AFGHANISTAN","ALBANIA","ALGERIA","AMERICA","ANDORRA","ANGOLA","ANGUILLA","ANTIGUA AND BARBUDA","ARGENTINA","ARMENIA","ARUBA","AUSTRALIA","AUSTRIA","AZERBAIJAN","BAHAMAS","BAHRAIN","BANGLADESH","BARBADOS","BELARUS","BELGIUM","BELIZE","BENIN","BERLIN","BERMUDA","BHUTAN","BOLIVIA","BOSNIA","BOTSWANA","BRAZIL","BRUNEI","BULGARIA","BURKINA FASO","BURMA","BURUNDI","CAMBODIA","CAMEROON","CANADA","CAPE VERDE","CAYMAN ISLANDS","CHAD","CHILE","CHINA","COLOMBIA","COMOROS","CONGO","COSTA RICA","CROATIA","CUBA","CYPRUS","CZECH REPUBLIC","DENMARK","DJIBOUTI","DOMINICA","DOMINICAN REPUBLIC","ECUADOR","EGYPT","EL SALVADOR","ERITREA","ESTONIA","ETHIOPIA","FIJI","FINLAND","FRANCE","GABON","GAMBIA","GEORGIA","GERMANY","GHANA","GIBRALTAR","GREECE","GREENLAND","GRENADA","GUATEMALA","GUERNSEY","GUINEA","GUYANA","HAITI","HONDURAS","HONG KONG","HUNGARY","ICELAND","INDIA","INDONESIA","IRAN","IRAQ","IRELAND","ISRAEL","ITALY","IVORY COAST","JAMAICA","JAPAN","JERSEY","JORDAN","KAZAKHSTAN","KENYA","KIRIBATI","KOREA","KUWAIT","LAOS","LATVIA","LEBANON","LIBERIA","LIBYA","LITHUANIA","LUXEMBOURG","MACEDONIA","MADAGASCAR","MALAWI","MALAYSIA","MALDIVES","MALI","MALTA","MAURITANIA","MAURITIUS","MEXICO","MOLDOVA","MONACO","MONGOLIA","MONTENEGRO","MONTSERRAT","MOROCCO","MOZAMBIQUE","NAMIBIA","NAURU","NEPAL","NETHERLANDS","NEW ZEALAND","NICARAGUA","NIGER","NIGERIA","NIUE","NORFOLK ISLAND","NORWAY","OMAN","PAKISTAN","PALAU","PANAMA","PAPUA NEW GUINEA","PARAGUAY","PERU","PHILIPPINES","POLAND","PORTUGAL","PUERTO RICO","QATAR","ROMANIA","RUSSIA","RWANDA","SAINT LUCIA","SAINT VINCENT","SAMOA","SAUDI ARABIA","SENEGAL","SERBIA","SIERRA LEONE","SINGAPORE","SLOVAKIA","SLOVENIA","SOMALIA","SOUTH AFRICA","SOUTH KOREA","SPAIN","SRI LANKA","SUDAN","SWEDEN","SWITZERLAND","SYRIA","TAIWAN","TANZANIA","THAILAND","TONGA","TUNISIA","TURKEY","TUVALU","UGANDA","UKRAINE","UNITED ARAB EMIRATES","UNITED KINGDOM","UNITED STATES","URUGUAY","USA","VENEZUELA","VIETNAM","YEMEN","ZAMBIA","ZIMBABWE"],ComboMix:["ANT","APHID","APPLE","APRICOT","APRIL","AQUARIUS","ARIES","AUGUST","AUNT","AUNTIE","AVOCADO","BANANA","BEE","BEETLE","BLACK","BLOSSOM","BLUE","BLUEBELL","BLUEBERRY","BROWN","BUMBLEBEE","BUTTERCUP","BUTTERFLY","CANCER","CAPRICORN","CATERPILLAR","CENTIPEDE","CHERRY","CIRCLE","CLEMENTINE","CLOVER","COCKROACH","COCONUT","CROSS","CUBE","CYLINDER","DAFFODIL","DAISY","DECEMBER","DODECAHEDRON","DRAGONFLY","EARTH","FEBRUARY","FLOWER","FLY","FLYTRAP","FRUITFLY","GDAŃSK","GEMINI","GERANIUM","GOLD","GRAPE","GRAPEFRUIT","GRASS","GREEN","GREY","HEXAGON","HORNET","INDIGO","JANUARY","JULY","JUNE","JUNIPER","JUPITER","KIWI","LADYBIRD","LADYBUG","LEMON","LEO","LIBRA","LILLY","LILY","LIME","LIZARD","MAGENTA","MAGGOT","MARCH","MARS","MAY","MAYFLY","MERCURY","MOON","MOSQUITO","MOTH","NEPTUNE","NOVEMBER","OBLONG","OCTAGON","OCTOBER","ORANGE","ORCHID","PANSY","PEAR","PENTAGON","PINEAPPLE","PINK","PISCES","PLUTO","PLUTO","PURPLE","RED","ROSE","SAGITTARIUS","SATURN","SCORPIO","SEPTEMBER","SILVER","SPIDER","SQUARE","STAR","STRAWBERRY","SUN","SUNFLOWER","TAURUS","ΤΟΜΑΤΟ","TRIANGLE","TULIP","URANUS","VENUS","VIOLET","VIRGO","WASP","WHITE","WORM","YELLOW"]},straightLetters:["A","E","F","H","I","K","L","M","N","T","V","W","X","Y","Z","É","À","Â","Ã","Á","Ä","Å","Ă","Î","Ț","Ê","Ŵ","Ŷ","Ï","Í","È","Æ","Ë","Ÿ","Ẽ","Ĩ","Ỹ","Ñ"],curvedLetters:["C","O","S","G","O","Q","S","U","Ç","Ö","Õ","Ș","Ô","Ó","Ò","Ş"],bothLetters:["B","D","G","J","P","Q","R","U","Ú","Ü","ß","Û","Œ","Ù","Ũ","G̃"],vowels:["A","I","U","E","O","À","Â","Æ","É","È","Ê","Ë","Î","Ï","Í","Ô","Œ","Ù","Û","Ü","Ö","Ä","Ó","Ú","Ã","Õ","Á","Å","Ă","Ò","Ẽ","Ĩ","Ũ"],selectedCategories:null,selectedWord:"",selectedCategory:"",wordLength:0,vowelPositions:[null,null],letterShape:"",reveal:!1,revealedLetterShape:!1,revealedCategory:!1,considerYAsVowel:!1,generatedWordFromLetter:"",lightPositions:[{x:"15.5%",y:"16%"},{x:"21.3%",y:"7%"},{x:"29.6%",y:"4%"},{x:"34.3%",y:"11%"},{x:"45%",y:"45%"},{x:"50%",y:"50%"},{x:"61.5%",y:"7%"},{x:"69%",y:"2%"},{x:"75.3%",y:"4%"},{x:"80.5%",y:"12%"}],activeLight:0,gameStarted:!1,showSettings:!1}},created(){document.title="Enigma Training Tool";const E=localStorage.getItem("considerYAsVowel");null!==E&&(this.considerYAsVowel=JSON.parse(E));const A=localStorage.getItem("selectedCategories");this.selectedCategories=null!==A?JSON.parse(A):Object.keys(this.categories)},watch:{considerYAsVowel(E){localStorage.setItem("considerYAsVowel",E)},selectedCategories:{handler(E){localStorage.setItem("selectedCategories",JSON.stringify(E))},deep:!0}},methods:{startGame(){this.gameStarted=!0,this.generateWord()},resetWord(){this.reveal=!1,this.gameStarted=!1},generateWord(){const E=this.selectedCategories.length?this.selectedCategories:Object.keys(this.categories);this.selectedCategory=E[Math.floor(Math.random()*E.length)];const A=this.categories[this.selectedCategory];this.selectedWord=A[Math.floor(Math.random()*A.length)],this.wordLength=this.selectedWord.length,this.vowelPositions=this.getVowelPositions(this.selectedWord,!0),this.letterShape=this.getLetterShape(this.selectedWord[0])},getVowelPositions(E){const A=this.considerYAsVowel?"AEIOUY":"AEIOU",R=[];for(let O=0;O<E.length;O++)A.includes(E[O].toUpperCase())&&R.push(O+1);return[R[0]||null,R[1]||null]},getLetterShape(E){return this.straightLetters.includes(E.toUpperCase())?"Straight Lines":this.curvedLetters.includes(E.toUpperCase())?"Curved Lines":this.bothLetters.includes(E.toUpperCase())?"Both Curved and Straight Lines":"Unknown"},revealWord(){this.reveal=!0},async showWordLength(){for(let E=0;E<this.wordLength;E++)this.activeLight=10-E%10,await this.wait(500),this.activeLight=0,await this.wait(500)},async showFirstVowel(){this.activeLight=10-this.vowelPositions[0]+1,await this.wait(1e3),this.activeLight=0},async showSecondVowel(){this.activeLight=10-this.vowelPositions[1]+1,await this.wait(1e3),this.activeLight=0},revealLetterShape(){this.revealedLetterShape=!0},wait(E){return new Promise((A=>setTimeout(A,E)))},revealCategory(){this.revealedCategory=!0},updateYAsVowelSetting(E){localStorage.setItem("considerYAsVowel",E)},getWordFromLetterIndex(E){let A;switch(E){case 2:case 3:case 4:A=this.selectedWord[E-1];break;case"last":A=this.selectedWord[this.selectedWord.length-1];break;default:return void(this.generatedWordFromLetter="Invalid index!")}if(!A)return void(this.generatedWordFromLetter="Word is too short!");let R=[];for(const O in this.categories)R=R.concat(this.categories[O].filter((E=>E[0].toUpperCase()===A.toUpperCase())));0!==R.length?this.generatedWordFromLetter=R[Math.floor(Math.random()*R.length)]:this.generatedWordFromLetter=`No words found starting with ${A}`}}},v=R(89);const p=(0,v.Z)(w,[["render",u],["__scopeId","data-v-573a38b2"]]);var m=p,f={name:"App",components:{HelloWorld:m}};const y=(0,v.Z)(f,[["render",S]]);var k=y;(0,O.ri)(k).mount("#app")}},A={};function R(O){var I=A[O];if(void 0!==I)return I.exports;var L=A[O]={exports:{}};return E[O].call(L.exports,L,L.exports,R),L.exports}R.m=E,function(){var E=[];R.O=function(A,O,I,L){if(!O){var T=1/0;for(P=0;P<E.length;P++){O=E[P][0],I=E[P][1],L=E[P][2];for(var S=!0,N=0;N<O.length;N++)(!1&L||T>=L)&&Object.keys(R.O).every((function(E){return R.O[E](O[N])}))?O.splice(N--,1):(S=!1,L<T&&(T=L));if(S){E.splice(P--,1);var C=I();void 0!==C&&(A=C)}}return A}L=L||0;for(var P=E.length;P>0&&E[P-1][2]>L;P--)E[P]=E[P-1];E[P]=[O,I,L]}}(),function(){R.n=function(E){var A=E&&E.__esModule?function(){return E["default"]}:function(){return E};return R.d(A,{a:A}),A}}(),function(){R.d=function(E,A){for(var O in A)R.o(A,O)&&!R.o(E,O)&&Object.defineProperty(E,O,{enumerable:!0,get:A[O]})}}(),function(){R.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(E){if("object"===typeof window)return window}}()}(),function(){R.o=function(E,A){return Object.prototype.hasOwnProperty.call(E,A)}}(),function(){R.p="/"}(),function(){var E={143:0};R.O.j=function(A){return 0===E[A]};var A=function(A,O){var I,L,T=O[0],S=O[1],N=O[2],C=0;if(T.some((function(A){return 0!==E[A]}))){for(I in S)R.o(S,I)&&(R.m[I]=S[I]);if(N)var P=N(R)}for(A&&A(O);C<T.length;C++)L=T[C],R.o(E,L)&&E[L]&&E[L][0](),E[L]=0;return R.O(P)},O=self["webpackChunkenigmatrainer"]=self["webpackChunkenigmatrainer"]||[];O.forEach(A.bind(null,0)),O.push=A.bind(null,O.push.bind(O))}();var O=R.O(void 0,[998],(function(){return R(3920)}));O=R.O(O)})();
//# sourceMappingURL=app.61c18358.js.map