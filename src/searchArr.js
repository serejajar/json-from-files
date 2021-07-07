const aCantemir = 'antioh cantemir';
const dCantemir = 'dimitrie cantemir|d.cantemir|d. cantemir';
const bPHasdeu = 'b. ?p. ?hasdeu|petriceicu hasdeu';

const searchArr = [
  {
    district: 'chisinau',
    city: 'chisinau',
    name: 'asm',
    search: 'academiei',
  },
  {
    district: 'chisinau',
    city: 'botanica',
    name: 'DCantemir',
    search: dCantemir,
  },
  {
    district: 'chisinau',
    city: 'botanica',
    name: 'MGrecu',
    search: 'grecu',
  },
  {
    district: 'chisinau',
    city: 'buiucani',
    name: 'ACantemir',
    search: aCantemir,
  },
  {
    district: 'chisinau',
    city: 'buiucani',
    name: 'prometeu',
    search: 'prometeu',
  },
  {
    district: 'chisinau',
    city: 'buiucani',
    name: 'MEliade',
    search: 'eliade',
  },
  {
    district: 'bender',
    city: 'bender',
    name: 'AlexanruCelBun',
    search: 'alexandru cel bun',
  },
  {
    district: 'ribnita',
    city: 'ribnita',
    name: 'evrika',
    search: 'evrika',
  },
  {
    district: 'chisinau',
    city: 'botanica',
    name: 'MEminescu',
    search: 'eminescu',
  },
  {
    district: 'tiraspol',
    city: 'tiraspol',
    name: 'LBlaga',
    search: 'blaga',
  },
  {
    district: 'chisinau',
    city: 'buiucani',
    name: 'ElimulNou',
    search: 'elimul',
  },
  {
    district: 'chisinau',
    city: 'riscani',
    name: 'ARusso',
    search: 'russo',
  },
  {
    district: 'chisinau',
    city: 'buiucani',
    name: 'evrica',
    search: 'evrica',
  },
  {
    district: 'chisinau',
    city: 'riscani',
    name: 'LimbiModerne',
    search: 'liceul de limbi moderne si management',
  },
  {
    district: 'chisinau',
    city: 'buiucani',
    name: 'columna',
    search: 'columna',
  },
  {
    district: 'ialoveni',
    city: 'bardar',
    name: 'ADavid',
    search: 'aurel david',
  },
  {
    district: 'chisinau',
    city: 'stauceni',
    name: 'DVoda',
    search: 'dragos voda',
  },
  {
    district: 'edinet',
    city: 'edinet',
    name: 'SeminarDeFete',
    search: 'seminarul',
  },
  {
    district: 'chisinau',
    city: 'buiucani',
    name: 'NVGogol',
    search: 'gogol',
  },
  {
    district: 'chisinau',
    city: 'buiucani',
    name: 'APuskin',
    search: 'puskin',
  },
  {
    district: 'chisinau',
    city: 'riscani',
    name: 'ICreanga',
    search: 'creanga',
  },
  {
    district: 'chisinau',
    city: 'buiucani',
    name: 'SpiruHaret',
    search: 'haret',
  },
  {
    district: 'balti',
    city: 'balti',
    name: 'MEminescu',
    search: 'eminescu',
  },
  {
    district: 'chisinau',
    city: 'buiucani',
    name: 'DanteAlighieri',
    search: 'alighieri',
  },
  {
    district: 'chisinau',
    city: 'buiucani',
    name: 'NDadiani',
    search: 'dadiani',
  },
  {
    district: 'causeni',
    city: 'causeni',
    name: 'MEminescu',
    search: 'eminescu',
  },
  {
    district: 'causeni',
    city: 'causeni',
    name: 'AMateevici',
    search: 'mateevici',
  },
  {
    district: 'chisinau',
    city: 'botanica',
    name: 'LRebreanu',
    search: 'rebreanu',
  },
  {
    district: 'gagauzia',
    city: 'comrat',
    name: 'GAGaidarji',
    search: 'gaidarji',
  },
  {
    district: 'balti',
    city: 'balti',
    name: 'DCantemir',
    search: dCantemir,
  },
  {
    district: 'chisinau',
    city: 'botanica',
    name: 'PMovila',
    search: 'movila',
  },
  {
    district: 'chisinau',
    city: 'botanica',
    name: 'NIorga',
    search: 'iorga',
  },
  {
    district: 'gagauzia',
    city: 'comrat',
    name: 'MEminescu',
    search: 'eminescu',
  },
  {
    district: 'chisinau',
    city: 'centru',
    name: 'litterarum',
    search: 'litterarum',
  },
  {
    district: 'chisinau',
    city: 'buiucani',
    name: 'orizont',
    search: 'orizont',
  },
  {
    district: 'chisinau',
    city: 'riscani',
    name: 'socrate',
    search: 'socrate',
  },
  {
    district: 'chisinau',
    city: 'centru',
    name: 'GAsachi',
    search: 'asachi',
  },
  {
    district: 'chisinau',
    city: 'chisinau',
    name: 'SRahmaninov',
    search: 'rahmaninov',
  },
  {
    district: 'aneniinoi',
    city: 'aneniinoi',
    name: 'MEminescu',
    search: 'eminescu',
  },
  {
    district: 'ungheni',
    city: 'ungheni',
    name: 'VAlecsandri',
    search: 'alecsandri',
  },
  {
    district: 'criuleni',
    city: 'magdacesti',
    name: 'liceu',
    search: 'magdacesti'
  },
  {
    district: 'chisinau',
    city: 'chisinau',
    name: 'IVieru',
    search: 'igor vieru'
  },
  {
    district: 'gagauzia',
    city: 'chioseliarusa',
    name: 'GVieru',
    search: 'vieru'
  },
  {
    district: 'falesti',
    city: 'glinjeni',
    name: 'MCorlateanu',
    search: 'corlateanu'
  },
  {
    district: 'chisinau',
    city: 'riscani',
    name: 'NMSpatarul',
    search: 'milescu spatarul'
  },
  {
    district: 'chisinau',
    city: 'botanica',
    name: 'teatral',
    search: 'teatral'
  },
  {
    district: 'chisinau',
    city: 'centru',
    name: 'kotiubinski',
    search: 'kotiubinski'
  },
  {
    district: 'chisinau',
    city: 'chisinau',
    name: 'CPorumbescu',
    search: 'porumbescu'
  },
  {
    district: 'falesti',
    city: 'falesti',
    name: 'MEminescu',
    search: 'eminescu'
  },
  {
    district: 'nisporeni',
    city: 'nisporeni',
    name: 'BCazacu',
    search: 'cazacu'
  },
  {
    district: 'chisinau',
    city: 'botanica',
    name: 'prosucces',
    search: 'succes'
  },
  {
    district: 'ialoveni',
    city: 'horesti',
    name: 'liceul',
    search: 'horesti'
  },
  {
    district: 'edinet',
    city: 'edinet',
    name: 'DCantemir',
    search: dCantemir
  },
  {
    district: 'chisinau',
    city: 'ciocana',
    name: 'MBerezovschi',
    search: 'berezovschi'
  },
  {
    district: 'chisinau',
    city: 'riscani',
    name: 'AICuza',
    search: 'cuza'
  },
  {
    district: 'chisinau',
    city: 'riscani',
    name: 'GCalinescu',
    search: 'calinescu'
  },
  {
    district: 'chisinau',
    city: 'durlesti',
    name: 'orizont',
    search: 'orizont'
  },
  {
    district: 'ungheni',
    city: 'ungheni',
    name: 'GAsachi',
    search: 'asachi'
  },
  {
    district: 'chisinau',
    city: 'cricova',
    name: 'AMateevici',
    search: 'mateevici'
  },
  {
    district: 'floresti',
    city: 'floresti',
    name: 'ICreanga',
    search: 'creanga'
  },
  {
    district: 'chisinau',
    city: 'riscani',
    name: 'BZHertli',
    search: 'hertli'
  },
  {
    district: 'gagauzia',
    city: 'vulcanesti',
    name: 'nr2',
    search: 'nr. ?2'
  },
  {
    district: 'chisinau',
    city: 'riscani',
    name: 'NGheorghiu',
    search: 'gheorghiu'
  },
  {
    district: 'chisinau',
    city: 'riscani',
    name: 'VLevski',
    search: 'levski'
  },
  {
    district: 'chisinau',
    city: 'botanica',
    name: 'EAlistar',
    search: 'alistar'
  },
  {
    district: 'calarasi',
    city: 'calarasi',
    name: 'MSadoveanu',
    search: 'sadoveanu'
  },
  {
    district: 'calarasi',
    city: 'sipoteni',
    name: 'MEminescu”',
    search: 'eminescu'
  },
  {
    district: 'gagauzia',
    city: 'ceadirlunga',
    name: 'VMoscov',
    search: 'moscov'
  },
  {
    district: 'hincesti',
    city: 'hincesti',
    name: 'MSadoveanu',
    search: 'sadoveanu'
  },
  {
    district: 'chisinau',
    city: 'riscani',
    name: 'cervantes',
    search: 'cervantes'
  },
  {
    district: 'balti',
    city: 'balti',
    name: 'StefanCelMare',
    search: 'stefan cel mare'
  },
  {
    district: 'chisinau',
    city: 'riscani',
    name: 'AcademiaCopiilor',
    search: 'academia copiilor'
  },
  {
    district: 'chisinau',
    city: 'ciocana',
    name: 'olimp',
    search: 'olimp'
  },
  {
    district: 'aneniinoi',
    city: 'varnita',
    name: 'liceul',
    search: 'liceul'
  },
  {
    district: 'balti',
    city: 'balti',
    name: 'GCosbuc',
    search: 'cosbuc'
  },
  {
    district: 'chisinau',
    city: 'riscani',
    name: 'MKogalniceanu',
    search: 'kogalniceanu'
  },
  {
    district: 'ialoveni',
    city: 'costesti',
    name: 'liceul',
    search: 'liceul teoretic costesti'
  },
  {
    district: 'criuleni',
    city: 'criuleni',
    name: 'BDinga',
    search: 'dinga'
  },
  {
    district: 'cimislia',
    city: 'guragalbenei',
    name: 'hyperion',
    search: 'hyperion'
  },
  {
    district: 'soroca',
    city: 'soroca',
    name: 'CStere',
    search: 'stere'
  },
  {
    district: 'soldanesti',
    city: 'soldanesti',
    name: 'AMateevici',
    search: 'mateevici'
  },
  {
    district: 'singerei',
    city: 'singerei',
    name: 'olimp',
    search: 'olimp'
  },
  {
    district: 'dubasari',
    city: 'dubasari',
    name: 'MEminescu',
    search: 'eminescu'
  },
  {
    district: 'chisinau',
    city: 'centru',
    name: 'MViteazul',
    search: 'viteazul'
  },
  {
    district: 'chisinau',
    city: 'centru',
    name: 'VLupu',
    search: 'lupu'
  },
  {
    district: 'chisinau',
    city: 'ciocana',
    name: 'gaudeamus',
    search: 'gaudeamus'
  },
  {
    district: 'straseni',
    city: 'vorniceni',
    name: 'IInculet',
    search: 'inculet'
  },
  {
    district: 'dubasari',
    city: 'dorotcaia',
    name: 'StefanCelMare',
    search: 'stefan cel mare'
  },
  {
    district: 'straseni',
    city: 'lozova',
    name: 'NVornicescu',
    search: 'vornicescu'
  },
  {
    district: 'balti',
    city: 'balti',
    name: 'ICreanga',
    search: 'creanga'
  },
  {
    district: 'rezina',
    city: 'echimauti',
    name: 'liceul',
    search: 'echimauti'
  },
  {
    district: 'criuleni',
    city: 'boscana',
    name: 'MStratulat',
    search: 'stratulat'
  },
  {
    district: 'chisinau',
    city: 'riscani',
    name: 'GMeniuc',
    search: 'meniuc'
  },
  {
    district: 'chisinau',
    city: 'botanica',
    name: 'BPHasdeu',
    search: bPHasdeu
  },
  {
    district: 'chisinau',
    city: 'riscani',
    name: 'svetoci',
    search: 'svetoci'
  },
  {
    district: 'straseni',
    city: 'micleuseni',
    name: 'ICreanga',
    search: 'creanga'
  },
  {
    district: 'chisinau',
    city: 'buiucani',
    name: 'LDeleanu',
    search: 'deleanu'
  },
  {
    district: 'aneniinoi',
    city: 'mereni',
    name: 'ENicula',
    search: 'nicula'
  },
  {
    district: 'balti',
    city: 'balti',
    name: 'BPHasdeu',
    search: bPHasdeu,
  },
  {
    district: 'orhei',
    city: 'orhei',
    name: 'MLmonosov',
    search: 'lomonosov'
  },
  {
    district: 'donduseni',
    city: 'sudarca',
    name: 'MEminescu',
    search: 'eminescu'
  },
  {
    district: 'edinet',
    city: 'edinet',
    name: 'MEminescu',
    search: 'eminescu'
  },
  {
    district: 'criuleni',
    city: 'cruglic',
    name: 'liceul',
    search: 'cruglic'
  },
  {
    district: 'soldanesti',
    city: 'oliscani',
    name: 'liceul',
    search: 'oliscani'
  },
  {
    district: 'gagauzia',
    city: 'ceadirlunga',
    name: 'orizont',
    search: 'orizont'
  },
  {
    district: 'gagauzia',
    city: 'ceadirlunga',
    name: 'MGuboglo',
    search: 'guboglo'
  },
  {
    district: 'chisinau',
    city: 'riscani',
    name: 'MSadoveanu',
    search: 'sadoveanu'
  },
  {
    district: 'ialoveni',
    city: 'costesti',
    name: 'olimp',
    search: 'olimp'
  },
  {
    district: 'chisinau',
    city: 'ciocana',
    name: 'GintaLatina',
    search: 'ginta latina'
  },
  {
    district: 'cantemir',
    city: 'cantemir',
    name: 'DCantemir',
    search: dCantemir
  },
  {
    district: 'chisinau',
    city: 'vadulluivoda',
    name: 'StefanVoda',
    search: 'stefan voda'
  },
  {
    district: 'orhei',
    city: 'orhei',
    name: 'OnisiforGhibu',
    search: 'ghibu'
  },
  {
    district: 'chisinau',
    city: 'riscani',
    name: 'MirilSiMetodii',
    search: 'metodii'
  },
  {
    district: 'chisinau',
    city: 'botanica',
    name: 'elitex',
    search: 'elitex'
  },
  {
    district: 'glodeni',
    city: 'cobani',
    name: 'liceul',
    search: 'cobani'
  },
  {
    district: 'cahul',
    city: 'cahul',
    name: 'MEminescu',
    search: 'eminescu'
  },
  {
    district: 'chisinau',
    city: 'centru',
    name: 'CSibirschi',
    search: 'sibirschi'
  },
  {
    district: 'riscani',
    city: 'riscani',
    name: 'LDamian',
    search: 'damian'
  },
  {
    district: 'cimislia',
    city: 'cimislia',
    name: 'MEminescu',
    search: 'eminescu'
  },
  {
    district: 'singerei',
    city: 'singerei',
    name: 'MEminescu',
    search: 'eminescu'
  },
  {
    district: 'cahul',
    city: 'cahul',
    name: 'ICreanga',
    search: 'creanga',
  },
  {
    district: 'causeni',
    city: 'firladeni',
    name: 'MSadoveanu',
    search: 'sadoveanu'
  },
  {
    district: 'gagauzia',
    city: 'etulia',
    name: 'SPEconomov',
    search: 'economov'
  },
  {
    district: 'singerei',
    city: 'chiscareni',
    name: 'NCasso',
    search: 'casso'
  },
  {
    district: 'floresti',
    city: 'floresti',
    name: 'ACehov',
    search: 'cehov'
  },
  {
    district: 'orhei',
    city: 'orhei',
    name: 'ILCaragiale',
    search: 'caragiale'
  },
  {
    district: 'telenesti',
    city: 'telenesti',
    name: 'LucianBlaga',
    search: 'blaga'
  },
  {
    district: 'taraclia',
    city: 'tvardita',
    name: 'liceul',
    search: 'tvardita'
  },
  {
    district: 'criuleni',
    city: 'hirtopulmic',
    name: 'liceul',
    search: 'hirtopul mic'
  },
  {
    district: 'aneniinoi',
    city: 'aneniinoi',
    name: 'APuskin',
    search: 'puskin'
  },
  {
    district: 'ungheni',
    city: 'ungheni',
    name: 'MEminescu',
    search: 'eminescu'
  },
  {
    district: 'chisinau',
    city: 'botanica',
    name: 'rambam',
    search: 'rambam'
  },
  {
    district: 'taraclia',
    city: 'valeaperjei',
    name: 'HristoBotev',
    search: 'hristo'
  },
  {
    district: 'aneniinoi',
    city: 'hirbovat',
    name: 'ICreanga',
    search: 'creanga'
  },
  {
    district: 'balti',
    city: 'balti',
    name: 'MLomonosov',
    search: 'lomonosov'
  },
  {
    district: 'calarasi',
    city: 'bravicea',
    name: 'StefanCelMare”',
    search: 'stefan cel mare'
  },
  {
    district: 'hincesti',
    city: 'saratagalbena',
    name: 'universum',
    search: 'universum'
  },
  {
    district: 'straseni',
    city: 'straseni',
    name: 'IVatamanu',
    search: 'vatamanu'
  },
  {
    district: 'stefanvoda',
    city: 'stefanvoda',
    name: 'StefanVoda',
    search: 'stefan voda'
  },
  {
    district: 'basarabeasca',
    city: 'abaclia',
    name: 'CStere',
    search: 'stere'
  },
  {
    district: 'chisinau',
    city: 'botanica',
    name: 'Vlecsandri',
    search: 'alecsandri'
  },
  {
    district: 'soroca',
    city: 'soroca',
    name: 'APuskin',
    search: 'puskin'
  },
  {
    district: 'orhei',
    city: 'biesti',
    name: 'liceul',
    search: 'biesti'
  },
  {
    district: 'edinet',
    city: 'edinet',
    name: 'VSuhomlinski',
    search: 'suhomlinski'
  },
  {
    district: 'chisinau',
    city: 'riscani',
    name: 'MBasarab',
    search: 'basarab'
  },
  {
    district: 'chisinau',
    city: 'centru',
    name: 'VedereaSlaba',
    search: 'vederea slaba'
  },
  {
    district: 'donduseni',
    city: 'donduseni',
    name: 'AMateevici',
    search: 'mateevici'
  },
  {
    district: 'cimislia',
    city: 'lipoveni',
    name: 'sportiv',
    search: 'sportiv'
  },
  {
    district: 'basarabeasca',
    city: 'basarabeasca',
    name: 'MBasarab',
    search: 'matei basarab'
  },
  {
    district: 'basarabeasca',
    city: 'basarabeasca',
    name: 'NVGogol',
    search: 'gogol'
  },
  {
    district: 'basarabeasca',
    city: 'basarabeasca',
    name: 'APuskin',
    search: 'puskin'
  },
  {
    district: 'cahul',
    city: 'cahul',
    name: 'PRumeantev',
    search: 'rumeantev'
  },
  {
    district: 'causeni',
    city: 'cainari',
    name: 'AMateevici',
    search: 'mateevici'
  },
  {
    district: 'rezina',
    city: 'ignatei',
    name: 'ISarbu',
    search: 'sarbu'
  },
  {
    district: 'taraclia',
    city: 'ciumai',
    name: 'liceul',
    search: 'ciumai'
  },
  {
    district: 'ialoveni',
    city: 'ialoveni',
    name: 'PStefanuca',
    search: 'stefanuca'
  },
  {
    district: 'ialoveni',
    city: 'razeni',
    name: 'IPelivan',
    search: 'pelivan'
  },
  {
    district: 'riscani',
    city: 'riscani',
    name: 'DCantemir',
    search: dCantemir
  },
  {
    district: 'drochia',
    city: 'cotova',
    name: 'liceul',
    search: 'cotova'
  },
  {
    district: 'chisinau',
    city: 'buiucani',
    name: 'OGhibu',
    search: 'ghibu'
  },
  {
    district: 'chisinau',
    city: 'botanica',
    name: 'traian',
    search: 'traian'
  },
  {
    district: 'drochia',
    city: 'drochia',
    name: 'BPHasdeu',
    search: bPHasdeu
  },
  {
    district: 'chisinau',
    city: 'buiucani',
    name: 'nr2',
    search: 'nr. ?2'
  },
  {
    district: 'gagauzia',
    city: 'copceac',
    name: 'SIBaranovski',
    search: 'baranovski'
  },
  {
    district: 'donduseni',
    city: 'donduseni',
    name: 'gaudeamus',
    search: 'gaudeamus'
  },
  {
    district: 'causeni',
    city: 'causeni',
    name: 'APuskin',
    search: 'puskin'
  },
  {
    district: 'chisinau',
    city: 'buiucani',
    name: 'VVasilache',
    search: 'vasilache'
  },
  {
    district: 'aneniinoi',
    city: 'puhaceni',
    name: 'olimp',
    search: 'olimp'
  },
  {
    district: 'riscani',
    city: 'zaicani',
    name: 'LGherman',
    search: 'gherman'
  },
  {
    district: 'straseni',
    city: 'zubresti',
    name: 'liceulzubresti',
    search: 'zubresti'
  },
  {
    district: 'calarasi',
    city: 'tibirica',
    name: 'liceul',
    search: 'tibirica'
  },
  {
    district: 'chisinau',
    city: 'chisinau',
    name: 'MMarinciuc',
    search: 'marinciuc'
  },
  {
    district: 'telenesti',
    city: 'cazanesti',
    name: 'APaunescu',
    search: 'paunescu'
  },
  {
    district: 'leova',
    city: 'leova',
    name: 'ConstantinSpataru',
    search: 'spataru'
  },
  {
    district: 'chisinau',
    city: 'ciocana',
    name: 'dacia',
    search: 'dacia'
  },
  {
    district: 'chisinau',
    city: 'centru',
    name: 'TituMaiorescu',
    search: 'maiorescu'
  },
  {
    district: 'cahul',
    city: 'cahul',
    name: 'IoanVoda',
    search: 'ioan voda'
  },
  {
    district: 'criuleni',
    city: 'malaiestiinoi',
    name: 'liceul',
    search: 'malaiesti'
  },
  {
    district: 'cahul',
    city: 'cahul',
    name: 'DCantemir',
    search: dCantemir
  },
  {
    district: 'rezina',
    city: 'rezina',
    name: 'AlexandruCelBun',
    search: 'alexandru cel bun'
  },
  {
    district: 'briceni',
    city: 'tetcani',
    name: 'liceul',
    search: 'tetcani'
  },
  {
    district: 'calarasi',
    city: 'saseni',
    name: 'liceul',
    search: 'saseni'
  },
  {
    district: 'falesti',
    city: 'falesti',
    name: 'APuskin',
    search: 'puskin'
  },
  {
    district: 'drochia',
    city: 'drochia',
    name: 'rusnr3',
    search: 'nr. ?3'
  },
  {
    district: 'criuleni',
    city: 'dubasariivechi',
    name: 'NDonici',
    search: 'donici'
  },
  {
    district: 'chisinau',
    city: 'riscani',
    name: 'waldorf',
    search: 'waldorf'
  },
  {
    district: 'dubasari',
    city: 'holercani',
    name: 'liceul',
    search: 'holercani'
  },
  {
    district: 'chisinau',
    city: 'buiucani',
    name: 'ACehov',
    search: 'cehov'
  },
  {
    district: 'drochia',
    city: 'pelinia',
    name: 'liceul',
    search: 'pelinia'
  },
  {
    district: 'floresti',
    city: 'floresti',
    name: 'MCostin',
    search: 'costin'
  },
  {
    district: 'chisinau',
    city: 'ciocana',
    name: 'PZadnipru',
    search: 'zadnipru'
  },
  {
    district: 'chisinau',
    city: 'buiucani',
    name: 'ISNeciuiLevitchi',
    search: 'neciui-levitchi'
  },
  {
    district: 'cahul',
    city: 'alexandruioancuza',
    name: 'AMateevici',
    search: 'mateevici'
  },
  {
    district: 'hincesti',
    city: 'carpineni',
    name: 'SHolban',
    search: 'holban'
  },
  {
    district: 'chisinau',
    city: 'riscani',
    name: 'StefalCelMare',
    search: 'stefan cel mare'
  },
  {
    district: 'straseni',
    city: 'cojusna',
    name: 'ARusso',
    search: 'russo'
  },
  {
    district: 'orhei',
    city: 'orhei',
    name: 'ARusso',
    search: 'russo'
  },
  {
    district: 'cantemir',
    city: 'ciobalaccia',
    name: 'NMihai',
    search: 'nicolae mihai'
  },
  {
    district: 'riscani',
    city: 'corlateni',
    name: 'VDumbraveanu',
    search: 'dumbraveanu'
  },
  {
    district: 'riscani',
    city: 'varatic',
    name: 'liceul',
    search: 'varatic'
  },
  {
    district: 'edinet',
    city: 'edinet',
    name: 'PanHalippa',
    search: 'halippa'
  },
  {
    district: 'floresti',
    city: 'cunicea',
    name: 'liceul',
    search: 'cunicea'
  },
  {
    district: 'chisinau',
    city: 'colonita',
    name: 'GhGhimpu',
    search: 'ghimpu'
  },
  {
    district: 'riscani',
    city: 'recea',
    name: 'liceul',
    search: 'recea'
  },
  {
    district: 'briceni',
    city: 'briceni',
    name: 'GVieru',
    search: 'vieru'
  },
  {
    district: 'chisinau',
    city: 'botanica',
    name: 'IuliaHasdeu',
    search: 'iulia hasdeu'
  },
  {
    district: 'chisinau',
    city: 'centru',
    name: 'minerva',
    search: 'minerva'
  },
  {
    district: 'hincesti',
    city: 'hincesti',
    name: 'MEminescu',
    search: 'eminescu'
  },
  {
    district: 'chisinau',
    city: 'gratiesti',
    name: 'liceul',
    search: 'gratiesti'
  },
  {
    district: 'criuleni',
    city: 'onitcani',
    name: 'liceul',
    search: 'onitcani'
  },
  {
    district: 'dubasari',
    city: 'dorotcaia',
    name: 'liceul',
    search: 'dorotcaia'
  },
  {
    district: 'chisinau',
    city: 'ciorescu',
    name: 'NBalcescu',
    search: 'balcescu'
  },
  {
    district: 'gagauzia',
    city: 'comrat',
    name: 'DCaracioban',
    search: 'caracioban'
  },
  {
    district: 'floresti',
    city: 'cuhurestiidesus',
    name: 'liceul',
    search: 'cuhurestii de sus'
  },
  {
    district: 'riscani',
    city: 'costesti',
    name: 'SilvianLucaci',
    search: 'silvian lucaci'
  },
  {
    district: 'floresti',
    city: 'sanatauca',
    name: 'AMateevici',
    search: 'mateevici'
  },
  {
    district: 'chisinau',
    city: 'chisinau',
    name: 'ortodox',
    search: 'ortodox'
  },
  {
    district: 'chisinau',
    city: 'ciocana',
    name: 'CNegruzzi',
    search: 'negruzzi'
  },
  {
    district: 'hincesti',
    city: 'mingir',
    name: 'liceul',
    search: 'mingir'
  },
  {
    district: 'chisinau',
    city: 'durlesti',
    name: 'hyperion',
    search: 'hyperion'
  },
  {
    district: 'basarabeasca',
    city: 'carabetovca',
    name: 'StefanCelMare',
    search: 'stefan cel mare'
  },
  {
    district: 'singerei',
    city: 'pepeni',
    name: 'AAgapie',
    search: 'agapie'
  },
  {
    district: 'leova',
    city: 'leova',
    name: 'LevTolstoi',
    search: 'tolstoi'
  },
  {
    district: 'straseni',
    city: 'scoreni',
    name: 'universul',
    search: 'universul'
  },
  {
    district: 'cimislia',
    city: 'cimislia',
    name: 'ICreanga',
    search: 'creanga'
  },
  {
    district: 'ialoveni',
    city: 'vasieni',
    name: 'DCantemir',
    search: dCantemir
  },
  {
    district: 'hincesti',
    city: 'lapusna',
    name: 'liceul',
    search: 'lapusna'
  },
  {
    district: 'glodeni',
    city: 'cuhnesti',
    name: 'liceul',
    search: 'cuhnesti'
  },
  {
    district: 'leova',
    city: 'leova',
    name: 'MEminescu',
    search: 'eminescu'
  },
  {
    district: 'aneniinoi',
    city: 'aneniinoi',
    name: 'AStraista',
    search: 'straista'
  },
  {
    district: 'chisinau',
    city: 'ciocana',
    name: 'SportivNr2',
    search: 'sportiv nr. ?2'
  },
  {
    district: 'leova',
    city: 'iargara',
    name: 'LBlaga',
    search: 'blaga'
  },
  {
    district: 'balti',
    city: 'balti',
    name: 'LBlaga',
    search: 'blaga'
  },
  {
    district: 'drochia',
    city: 'chetrosu',
    name: 'VCotofana',
    search: 'cotofana'
  },
  {
    district: 'cahul',
    city: 'colibasi',
    name: 'VAlecsandri',
    search: 'alecsandri'
  },
  {
    district: 'chisinau',
    city: 'buiucani',
    name: 'DIAldeaTeodorovici',
    search: 'teodorovici'
  },
  {
    district: 'cahul',
    city: 'sloboziamare',
    name: 'MEminescu',
    search: 'eminescu'
  },
  {
    district: 'straseni',
    city: 'sireti',
    name: 'liceul',
    search: 'sireti'
  },
  {
    district: 'chisinau',
    city: 'riscani',
    name: 'LBlaga',
    search: 'blaga'
  },
  {
    district: 'straseni',
    city: 'straseni',
    name: 'MEminescu',
    search: 'eminescu'
  },
  {
    district: 'balti',
    city: 'balti',
    name: 'VMaiakovski',
    search: 'maiakovski'
  },
  {
    district: 'ocnita',
    city: 'ocnita',
    name: 'MSadoveanu',
    search: 'sadoveanu'
  },
  {
    district: 'singerei',
    city: 'singereiinoi',
    name: 'ARusso',
    search: 'russo'
  },
  {
    district: 'cimislia',
    city: 'cimislia',
    name: 'APuskin',
    search: 'puskin'
  },
  {
    district: 'chisinau',
    city: 'botanica',
    name: 'nr3',
    search: 'nr. ?3'
  },
  {
    district: 'chisinau',
    city: 'singera',
    name: 'AlexandruCelBun',
    search: 'alexandru cel bun'
  },
  {
    district: 'briceni',
    city: 'briceni',
    name: 'nr1',
    search: 'nr. ?'
  },
  {
    district: 'floresti',
    city: 'stefanesti',
    name: 'liceul',
    search: 'stefanesti'
  },
  {
    district: 'soroca',
    city: 'soroca',
    name: 'ICreanga',
    search: 'creanga',
  },
  {
    district: 'drochia',
    city: 'drochia',
    name: 'MEminescu',
    search: 'eminescu'
  },
  {
    district: 'telenesti',
    city: 'sarateniivechi',
    name: 'VAnestiade',
    search: 'anestiade'
  },
  {
    district: 'ungheni',
    city: 'cornesti',
    name: 'DCantemir',
    search: dCantemir
  },
  {
    district: 'gagauzia',
    city: 'vulcanesti',
    name: 'ADoljnenko',
    search: 'doljnenko'
  },
  {
    district: 'hincesti',
    city: 'cioara',
    name: 'SAndreev',
    search: 'andreev'
  },
  {
    district: 'taraclia',
    city: 'taraclia',
    name: 'IVazov',
    search: 'vazov'
  },
  {
    district: 'cahul',
    city: 'giurgiulesti',
    name: 'MSadoveanu',
    search: 'sadoveanu'
  },
  {
    district: 'ialoveni',
    city: 'molesti',
    name: 'liceul',
    search: 'molesti'
  },
  {
    district: 'briceni',
    city: 'briceni',
    name: 'TSevcenco',
    search: 'sevcenco'
  },
  {
    district: 'telenesti',
    city: 'mindresti',
    name: 'DCantemir',
    search: dCantemir
  },
  {
    district: 'ungheni',
    city: 'ungheni',
    name: 'ICreanga',
    search: 'creanga',
  },
  {
    district: 'floresti',
    city: 'floresti',
    name: 'MEminescu',
    search: 'eminescu'
  },
  {
    district: 'chisinau',
    city: 'truseni',
    name: 'liceul',
    search: 'truseni'
  },
  {
    district: 'drochia',
    city: 'popestiidesus',
    name: 'ICreanga',
    search: 'creanga',
  },
  {
    district: 'ungheni',
    city: 'pirlita',
    name: 'AMateevici',
    search: 'mateevici'
  },
  {
    district: 'ocnita',
    city: 'otaci',
    name: 'MEminescu',
    search: 'eminescu'
  },
  {
    district: 'chisinau',
    city: 'buiucani',
    name: 'PetruRares',
    search: 'rares'
  },
  {
    district: 'briceni',
    city: 'lipcani',
    name: 'liceul',
    search: 'lipcani'
  },
  {
    district: 'ialoveni',
    city: 'puhoi',
    name: 'liceul',
    search: 'puhoi'
  },
  {
    district: 'singerei',
    city: 'cubolta',
    name: 'PHalippa',
    search: 'halippa'
  },
  {
    district: 'causeni',
    city: 'taraclia',
    name: 'StefanCelMare',
    search: 'stefan cel mare'
  },
  {
    district: 'gagauzia',
    city: 'congaz',
    name: 'liceul',
    search: 'liceul teoretic congaz'
  },
  {
    district: 'ialoveni',
    city: 'milestiimici',
    name: 'MBarca',
    search: 'barca'
  },
  {
    district: 'drochia',
    city: 'drochia',
    name: 'StefanCelMare',
    search: 'stefan cel mare'
  },
  {
    district: 'balti',
    city: 'balti',
    name: 'APuskin',
    search: 'puskin'
  },
  {
    district: 'ialoveni',
    city: 'zimbreni',
    name: 'liceul',
    search: 'zimbreni'
  },
  {
    district: 'floresti',
    city: 'ghindesti',
    name: 'MEminescu',
    search: 'eminescu'
  },
  {
    district: 'causeni',
    city: 'tanatari',
    name: 'PErhan',
    search: 'erhan'
  },
  {
    district: 'causeni',
    city: 'zaim',
    name: 'AMateevici',
    search: 'mateevici'
  },
  {
    district: 'criuleni',
    city: 'cimiseni',
    name: 'liceul',
    search: 'cimiseni'
  },
  {
    district: 'briceni',
    city: 'colicauti',
    name: 'liceul',
    search: 'colicauti'
  },
  {
    district: 'edinet',
    city: 'gordinesti',
    name: 'liceul',
    search: ''
  },
  {
    district: 'rezina',
    city: 'rezina',
    name: 'StefanCelMare',
    search: 'stefan cel mare'
  },
  {
    district: 'dubasari',
    city: 'cocieri',
    name: 'VIovita',
    search: 'iovita'
  },
  {
    district: 'glodeni',
    city: 'limbeniivechi',
    name: 'liceul',
    search: ''
  },
  {
    district: 'aneniinoi',
    city: 'bulboaca',
    name: 'AGuzun',
    search: 'guzun'
  },
  {
    district: 'gagauzia',
    city: 'ceadirlunga',
    name: 'nr2',
    search: 'nr. ?2'
  },
  {
    district: 'edinet',
    city: 'fetesti',
    name: 'liceul',
    search: ''
  },
  {
    district: 'hincesti',
    city: 'bobeica',
    name: 'liceul',
    search: ''
  },
  {
    district: 'briceni',
    city: 'corjeuti',
    name: 'liceul',
    search: ''
  },
  {
    district: 'chisinau',
    city: 'buiucani',
    name: 'sportiv',
    search: 'sportiv'
  },
  {
    district: 'balti',
    city: 'balti',
    name: 'VAlecsandri',
    search: 'alecsandri'
  },
  {
    district: 'riscani',
    city: 'nihoreni',
    name: 'CPopovici',
    search: 'popovici'
  },
  {
    district: 'ialoveni',
    city: 'tipala',
    name: 'liceul',
    search: ''
  },
  {
    district: 'riscani',
    city: 'mihaileni',
    name: 'ECoseriu',
    search: 'coseriu'
  },
  {
    district: 'ungheni',
    city: 'macaresti',
    name: 'elada',
    search: 'elada'
  },
  {
    district: 'soroca',
    city: 'visoca',
    name: 'liceul',
    search: ''
  },
  {
    district: 'chisinau',
    city: 'chisinau',
    name: 'sportiv',
    search: 'sportiv'
  },
  {
    district: 'gagauzia',
    city: 'copceac',
    name: 'BIanacoglo',
    search: 'ianacoglo'
  },
  {
    district: 'edinet',
    city: 'cupcini',
    name: 'MSadoveanu',
    search: 'sadoveanu'
  },
  {
    district: 'falesti',
    city: 'falesti',
    name: 'ICreanga',
    search: 'creanga',
  },
  {
    district: 'ungheni',
    city: 'ungheni',
    name: 'APuskin',
    search: 'puskin'
  },
  {
    district: 'ungheni',
    city: 'sculeni',
    name: 'liceul',
    search: ''
  },
  {
    district: 'chisinau',
    city: 'botanica',
    name: 'MirceaCelBatrin',
    search: 'mircea cel batrin'
  },
  {
    district: 'dubasari',
    city: 'cosnita',
    name: 'ICreanga',
    search: 'creanga',
  },
  {
    district: 'calarasi',
    city: 'calarasi',
    name: 'VAlecsandri',
    search: 'alecsandri'
  },
  {
    district: 'soroca',
    city: 'rublenita',
    name: 'liceu',
    search: ''
  },
  {
    district: 'gagauzia',
    city: 'congaz',
    name: 'SDemirel',
    search: 'demirel'
  },
  {
    district: 'ocnita',
    city: 'ocnita',
    name: 'CStamati',
    search: 'stamati'
  },
  {
    district: 'soroca',
    city: 'soroca',
    name: 'PRares',
    search: 'rares'
  },
  {
    district: 'glodeni',
    city: 'glodeni',
    name: 'VCoroban',
    search: 'coroban'
  },
  {
    district: 'nisporeni',
    city: 'nisporeni',
    name: 'MEliade',
    search: 'eliade'
  },
  {
    district: 'glodeni',
    city: 'balatina',
    name: 'liceul',
    search: ''
  },
  {
    district: 'donduseni',
    city: 'baraboi',
    name: 'prometeu',
    search: 'prometeu'
  },
  {
    district: 'glodeni',
    city: 'glodeni',
    name: 'LevTolstoi',
    search: 'tolstoi'
  },
  {
    district: 'edinet',
    city: 'cupcini',
    name: 'SKovalevskaia',
    search: 'kovalevskaia'
  },
  {
    district: 'orhei',
    city: 'susleni',
    name: 'VLupu',
    search: 'lupu'
  },
  {
    district: 'criuleni',
    city: 'mascauti',
    name: 'ISirbu',
    search: 'sirbu'
  },
  {
    district: 'floresti',
    city: 'marculesti',
    name: 'VAlecsandri',
    search: 'alecsandri'
  },
  {
    district: 'donduseni',
    city: 'donduseni',
    name: 'APuskin',
    search: 'puskin'
  },
  {
    district: 'ocnita',
    city: 'ocnita',
    name: 'GhBiruitorul',
    search: 'biruitorul'
  },
  {
    district: 'ialoveni',
    city: 'ialoveni',
    name: 'AVartic',
    search: 'vartic'
  },
  {
    district: 'glodeni',
    city: 'sturzovca',
    name: 'liceul',
    search: ''
  },
  {
    district: 'leova',
    city: 'borogani',
    name: 'GVieru',
    search: 'vieru'
  },
  {
    district: 'falesti',
    city: 'calinesti',
    name: 'GhVrabie',
    search: 'vrabie'
  },
  {
    district: 'telenesti',
    city: 'negureni',
    name: 'liceul',
    search: ''
  },
  {
    district: 'balti',
    city: 'balti',
    name: 'MGorki',
    search: 'gorki'
  },
  {
    district: 'chisinau',
    city: 'riscani',
    name: 'MLomonosov',
    search: 'lomonosov'
  },
  {
    district: 'chisinau',
    city: 'chisinau',
    name: 'externat2',
    search: 'externat 2'
  },
  {
    district: 'balti',
    city: 'balti',
    name: 'NGogol',
    search: 'gogol'
  },
  {
    district: 'stefanvoda',
    city: 'crocmaz',
    name: 'EMalcoci',
    search: 'malcoci'
  },
  {
    district: 'straseni',
    city: 'romanesti',
    name: 'liceul',
    search: ''
  },
  {
    district: 'gagauzia',
    city: 'comrat',
    name: 'NTretiacov',
    search: 'tretiacov'
  },
  {
    district: 'glodeni',
    city: 'hijdieni',
    name: 'liceul',
    search: ''
  },
  {
    district: 'briceni',
    city: 'larga',
    name: 'liceul',
    search: ''
  },
  {
    district: 'leova',
    city: 'tomai',
    name: 'MihaiViteazu',
    search: 'viteazu'
  },
  {
    district: 'chisinau',
    city: 'chisinau',
    name: 'externat3',
    search: 'externat 3'
  },
  {
    district: 'chisinau',
    city: 'centru',
    name: 'NSulac',
    search: 'sulac'
  },
  {
    district: 'cahul',
    city: 'brinza',
    name: 'IBostan',
    search: 'bostan'
  },
  {
    district: 'chisinau',
    city: 'centru',
    name: 'universul',
    search: 'universul'
  },
  {
    district: 'gagauzia',
    city: 'chirsova',
    name: 'MITuzlov',
    search: 'tuzlov'
  },
  {
    district: 'ialoveni',
    city: 'suruceni',
    name: 'ISuruceanu',
    search: 'suruceanu'
  },
  {
    district: 'briceni',
    city: 'tabani',
    name: 'liceul',
    search: ''
  },
  {
    district: 'chisinau',
    city: 'bacioi',
    name: 'GVieru',
    search: 'vieru'
  },
  {
    district: 'edinet',
    city: 'zabriceni',
    name: 'VTopala',
    search: 'topala'
  },
  {
    district: 'chisinau',
    city: 'buiucani',
    name: 'european',
    search: ' european'
  },
  {
    district: 'falesti',
    city: 'scumpia',
    name: 'VAlecsandri',
    search: 'alecsandri'
  },
  {
    district: 'drochia',
    city: 'sofia',
    name: 'VCantemir',
    search: 'cantemir'
  },
  {
    district: 'stefanvoda',
    city: 'olanesti',
    name: 'BPHasdeu',
    search: bPHasdeu
  },
  {
    district: 'hincesti',
    city: 'crasnoarmeiscoe',
    name: 'DCantemir',
    search: dCantemir
  },
  {
    district: 'singerei',
    city: 'radoaia',
    name: 'ICreanga',
    search: 'creanga'
  },
  {
    district: 'edinet',
    city: 'bratuseni',
    name: 'liceul',
    search: ''
  },
  {
    district: 'orhei',
    city: 'peresecina',
    name: 'ADonici',
    search: 'donici'
  },
  {
    district: 'chisinau',
    city: 'botanica',
    name: 'seralNr2',
    search: 'seral nr. ?2'
  },
  {
    district: 'straseni',
    city: 'straseni',
    name: 'NNekrasov',
    search: 'nekrasov'
  },
  {
    district: 'rezina',
    city: 'cuizauca',
    name: 'ICreanga',
    search: 'creanga'
  },
  {
    district: 'chisinau',
    city: 'centru',
    name: 'seralNr1',
    search: 'seral nr. ?1'
  },
  {
    district: 'chisinau',
    city: 'bubuieci',
    name: 'TBubuiog',
    search: 'bubuiog'
  },
  {
    district: 'ialoveni',
    city: 'rusestiinoi',
    name: 'liceul',
    search: ''
  },
  {
    district: 'briceni',
    city: 'cotiujeni',
    name: 'liceul',
    search: ''
  },
  {
    district: 'chisinau',
    city: 'chisinau',
    name: 'agricol',
    search: 'agricol'
  },
  {
    district: 'cimislia',
    city: 'mihailovca',
    name: 'StefanCelMare',
    search: 'stefan cel mare'
  },
  {
    district: 'hincesti',
    city: 'ciuciuleni',
    name: 'ADonici',
    search: 'donici'
  },
  {
    district: 'gagauzia',
    city: 'baurci',
    name: 'liceul',
    search: ''
  },
  {
    district: 'falesti',
    city: 'rautel',
    name: 'AMateevici',
    search: 'mateevici'
  },
  {
    district: 'soldanesti',
    city: 'soldanesti',
    name: 'StefanCelMare',
    search: 'stefan cel mare'
  },
  {
    district: 'briceni',
    city: 'drepcauti',
    name: 'liceul',
    search: ''
  },
  {
    district: 'dubasari',
    city: 'molovata',
    name: 'StefanCelMare',
    search: 'stefan cel mare'
  },
  {
    district: 'chisinau',
    city: 'botanica',
    name: 'TVladimirescu',
    search: 'vladimirescu'
  },
  {
    district: 'soldanesti',
    city: 'cotiujeniimari',
    name: 'liceul',
    search: ''
  },
  {
    district: 'cimislia',
    city: 'selemet',
    name: 'SCoipan',
    search: 'coipan'
  },
  {
    district: 'gagauzia',
    city: 'cismichioi',
    name: 'liceul',
    search: ''
  },
  {
    district: 'glodeni',
    city: 'danu',
    name: 'liceul',
    search: ''
  },
  {
    district: 'stefanvoda',
    city: 'talmaza',
    name: 'SCiobanu',
    search: 'ciobanu'
  },
  {
    district: 'briceni',
    city: 'beleavinti',
    name: 'liceul',
    search: ''
  },
  {
    district: 'chisinau',
    city: 'durlesti',
    name: 'liceul',
    search: ''
  },
  {
    district: 'causeni',
    city: 'salcuta',
    name: 'MManole',
    search: 'manole'
  },
  {
    district: 'edinet',
    city: 'trinca',
    name: 'liceul',
    search: ''
  },
  {
    district: 'briceni',
    city: 'grimancauti',
    name: 'liceul',
    search: ''
  },
  {
    district: 'gagauzia',
    city: 'comrat',
    name: 'sportiv',
    search: 'sportiv'
  },
  {
    district: 'falesti',
    city: 'navirnet',
    name: 'StefanCelMare',
    search: 'stefan cel mare'
  },
  {
    district: 'cimislia',
    city: 'cimislia',
    name: 'MViteazul',
    search: 'viteazul'
  },
  {
    district: 'floresti',
    city: 'frumusica',
    name: 'liceul',
    search: ''
  },
  {
    district: 'gagauzia',
    city: 'ciocmaidan',
    name: 'FIanioglo',
    search: 'ianioglo'
  },
  {
    district: 'cahul',
    city: 'zirnesti',
    name: 'ICreanga',
    search: 'creanga'
  },
  {
    district: 'gagauzia',
    city: 'comrat',
    name: 'DMavrodi',
    search: 'mavrodi'
  },
  {
    district: 'singerei',
    city: 'singerei',
    name: 'DCantemir',
    search: dCantemir
  },
  {
    district: 'cantemir',
    city: 'cociulia',
    name: 'VHanganu',
    search: 'hanganu'
  },
  {
    district: 'cahul',
    city: 'crihanaveche',
    name: 'MEminescu',
    search: 'eminescu'
  },
  {
    district: 'cantemir',
    city: 'gotesti',
    name: 'VParvan',
    search: 'parvan'
  },
  {
    district: 'rezina',
    city: 'rezina',
    name: 'APuskin',
    search: 'puskin'
  },
  {
    district: 'gagauzia',
    city: 'dezghingea',
    name: 'liceul',
    search: ''
  },
  {
    district: 'basarabeasca',
    city: 'bascalia',
    name: 'MTarlev',
    search: 'tarlev'
  },
  {
    district: 'causeni',
    city: 'copanca',
    name: 'VAlecsandri',
    search: 'alecsandri'
  },
  {
    district: 'rezina',
    city: 'peciste',
    name: 'liceul',
    search: ''
  },
  {
    district: 'aneniinoi',
    city: 'gurabicului',
    name: 'liceul',
    search: ''
  },
  {
    district: 'gagauzia',
    city: 'tomai',
    name: 'liceul',
    search: ''
  },
  {
    district: 'causeni',
    city: 'causeni',
    name: 'DCantemir',
    search: dCantemir
  },
  {
    district: 'stefanvoda',
    city: 'volintiri',
    name: 'MBiesu',
    search: 'biesu'
  },
  {
    district: 'singerei',
    city: 'biruinta',
    name: 'liceul',
    search: 'luceafarul'
  },
  {
    district: 'chisinau',
    city: 'chisinau',
    name: 'externat1',
    search: 'externat 1'
  },
  {
    district: 'briceni',
    city: 'trebisauti',
    name: 'liceul',
    search: ''
  },
  {
    district: 'chisinau',
    city: 'budesti',
    name: 'liceul',
    search: ''
  },
  {
    district: 'soldanesti',
    city: 'raspopeni',
    name: 'liceul',
    search: ''
  },
  {
    district: 'hincesti',
    city: 'hincesti',
    name: 'MLomonosov',
    search: 'lomonosov'
  },
  {
    district: 'balti',
    city: 'balti',
    name: 'elitex',
    search: 'elitex'
  },
  {
    district: 'causeni',
    city: 'causeni',
    name: 'ICreanga',
    search: 'creanga'
  },
  {
    district: 'causeni',
    city: 'chircaiesti',
    name: 'MViteazul',
    search: 'viteazul'
  },
  {
    district: 'basarabeasca',
    city: 'sadaclia',
    name: 'MEminescu',
    search: 'eminescu'
  },
  {
    district: 'briceni',
    city: 'caracuseniivechi',
    name: 'liceul',
    search: ''
  },
  {
    district: 'causeni',
    city: 'cirnateni',
    name: 'GrGrigoriu',
    search: 'grigoriu'
  },
  {
    district: 'hincesti',
    city: 'leuseni',
    name: 'CezarRadu',
    search: 'radu'
  },
  {
    district: 'nisporeni',
    city: 'seliste',
    name: 'liceul',
    search: ''
  },
  {
    district: 'gagauzia',
    city: 'besalma',
    name: 'MChiosea',
    search: 'chiosea'
  },
  {
    district: 'gagauzia',
    city: 'besghioz',
    name: 'liceul',
    search: ''
  },
  {
    district: 'gagauzia',
    city: 'cazaclia',
    name: 'liceul',
    search: ''
  },
  {
    district: 'gagauzia',
    city: 'svetlii',
    name: 'liceul',
    search: ''
  },
  {
    district: 'nisporeni',
    city: 'grozesti',
    name: 'prometeu',
    search: 'prometeu'
  },
  {
    district: 'gagauzia',
    city: 'avdarma',
    name: 'DCelenghir',
    search: 'celenghir'
  },
  {
    district: 'taraclia',
    city: 'corten',
    name: 'PHilendarschi',
    search: 'hilendarschi'
  },
  {
    district: 'nisporeni',
    city: 'balauresti',
    name: 'liceul',
    search: ''
  },
  {
    district: 'chisinau',
    city: 'botanica',
    name: 'gloria',
    search: 'gloria'
  },
  {
    district: 'ocnita',
    city: 'rujnita',
    name: 'liceul',
    search: ''
  },
  {
    district: 'rezina',
    city: 'rezina',
    name: 'olimp',
    search: 'olimp'
  },
  {
    district: 'chisinau',
    city: 'chisinau',
    name: 'aristotel',
    search: 'aristotel'
  },
  {
    district: 'dubasari',
    city: 'corjova',
    name: 'MEminescu',
    search: 'eminescu'
  },
  {
    district: 'gagauzia',
    city: 'vulcanesti',
    name: 'luceafarul',
    search: 'luceafarul'
  },
  {
    district: 'chisinau',
    city: 'botanica',
    name: 'MirceaCelBatran',
    search: 'mircea cel batran'
  },
  {
    district: 'gagauzia',
    city: 'congaz',
    name: 'TZanet',
    search: 'zanet'
  },

];

module.exports = searchArr;
