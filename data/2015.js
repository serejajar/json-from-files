const bac2015 = `
1   CHISINAU       CHISINAU            Liceul Academiei de Ştiinţe a Moldovei                                    62        62           0      100.00     8.39
2   CHISINAU       BUIUCANI   LICEUL DE CREATIVITATE ŞI INVENTICĂ "PROMETEU-PRIM"                       54        54           0      100.00     8.06
3   CHISINAU       BUIUCANI   Instituţia Publică Liceul Teoretic "Mircea Eliade"                        27        27           0      100.00     7.99
4   BENDER         BENDER              Liceul Teoretic "Alexandru cel Bun"                                       44        44           0      100.00     7.86
5   RIBNITA        RIBNITA             Liceul teoretic "Evrika"                                                  16        16           0      100.00     7.80
6   CHISINAU       BOTANICA   Liceul Teoretic "Mihai Eminescu"                                          50        50           0      100.00     7.62
7   TIRASPOL       TIRASPOL            Liceul Teoretic"Lucian Blaga"                                             26        26           0      100.00     7.55
8   CHISINAU       BUIUCANI   Instituţia de Învăţământ Liceul Teoretic "Elimul Nou"                     23        23           0      100.00     7.43
9   CHISINAU       RISCANI    LICEUL TEORETIC "ALECU RUSSO"                                             49        49           0      100.00     7.20
10   CHISINAU       BUIUCANI   Liceul "Evrica"                                                            2          2          0      100.00     7.00
11   CHISINAU       RISCANI    Liceul de Limbi Moderne şi Management                                     12        12           0      100.00     6.94
12   CHISINAU       BUIUCANI   Liceul "Columna"                                                           7          7          0      100.00     6.82
13   IALOVENI       BARDAR              Liceul Teoretic "Aurel David"                                             13        13           0      100.00     6.63
14   CHISINAU       STAUCENI            Liceul Teoretic "Dragoş Vodă"                                             19        19           0      100.00     6.33
15   EDINET         EDINET              SEMINARUL TEOLOGIC LICEAL DE FETE                                          7          7          0      100.00     5.89
16   CHISINAU       BUIUCANI   Liceul Teoretic "N.V.Gogol"                                               88        87           1        98.86    7.11
17   CHISINAU       BUIUCANI   Instituţia Publică Liceul Teoretic "Alexandr Puşkin"                      66        65           1        98.48    7.46
18   CHISINAU       BOTANICA   LICEUL TEORETIC "DIMITRIE CANTEMIR"                                       66        65           1        98.48    7.21
19   CHISINAU       RISCANI    Liceul Teoretic "Ion Creangă"                                             95        93           2        97.89    7.83
20   CHISINAU       BUIUCANI   Instituţia Publică Liceul Teoretic "Spiru Haret"                          91        89           2        97.80    7.79
21   BALTI          BALTI               LICEUL TEORETIC "M.EMINESCU"                                              83        81           2        97.59    7.45
22   CHISINAU       BUIUCANI   Liceul Teoretic "Dante Alighieri"                                         73        71           2        97.26    7.00
23   CHISINAU       BUIUCANI   Instituţia Publică Liceul Teoretic "Principesa Natalia Dadiani"           71        69           2        97.18    7.15
24   CAUSENI        CAUSENI             LICEUL TEORETIC "M.EMINESCU"                                              81        78           3        96.30    6.66
25   CAUSENI        CAUSENI             LICEUL TEORETIC "A.MATEEVICI"                                           102         98           4        96.08    6.69
26   CHISINAU       BOTANICA   Instituţia Publică Liceul Teoretic "Liviu Rebreanu"                       46        44           2        95.65    6.69
27   GAGAUZIA   COMRAT              LICEUL TEORETIC RAIONAL "G.A.GAIDARJI"                                    45        43           2        95.56    6.88
28   BALTI          BALTI               LICEUL TEORETIC "D.CANTEMIR"                                              42        40           2        95.24    6.84
29   CHISINAU       BOTANICA   Instituţia Publică Liceul Teoretic "Petru Movilă"                         84        80           4        95.24    6.76
30   CHISINAU       BOTANICA   Liceul "Nicolae Iorga"                                                  100         95           5        95.00    7.08
31   GAGAUZIA   COMRAT              LICEUL TEORETIC "M.EMINESCU"                                              20        19           1        95.00    6.25
32   CHISINAU       CENTRU     Instituţia de Învăţămînt Liceul "Litterarum"                              19        18           1        94.74    7.33
33   CHISINAU       BUIUCANI   Instituţia Privată de Învăţămînt Liceul Teoretic "ORIZONT"                55        52           3        94.55    7.50
34   CHISINAU       RISCANI    Liceul de Limbi Moderne şi Tehnologii Informaţionale "SOCRATE"            18        17           1        94.44    6.59
35   CHISINAU       CENTRU     Liceul Teoretic "Gheorghe Asachi"                                       162        152         10         93.83    7.35
36   CHISINAU       CHISINAU            Liceul-internat Republican de muzică "Serghei Rahmaninov"                 16        15           1        93.75    6.76
37   ANENIINOI     ANENIINOI          Instituţie Publică Liceul Teoretic "Mihai Eminescu"                       47        44           3        93.62    6.64
38   UNGHENI        UNGHENI             LICEUL TEORETIC "VASILE ALECSANDRI"                                       88        82           6        93.18    7.16
39   CRIULENI       MĂGDĂCEŞTI          Liceul Teoretic MĂGDĂCEŞTI                                                57        53           4        92.98    6.63
40   CHISINAU       CHISINAU            Liceul Academic de Arte Plastice "Igor Vieru"                             14        13           1        92.86    7.31
41   GAGAUZIA   CHIOSELIA RUSĂ      LICEUL TEORETIC "GR.VIERU"                                                14        13           1        92.86    6.44
42   FĂLEŞTI        GLINJENI            INSTITUŢIA PUBLICĂ LICEUL TEORETIC "Mihai Corlăteanu"                     28        26           2        92.86    5.95
43   CHISINAU       RISCANI    Liceul Teoretic "Nicolae Milescu Spătarul"                                55        51           4        92.73    7.04
44   CHISINAU       BOTANICA   Liceul Teatral Orăşenesc                                                  27        25           2        92.59    6.95
45   CHISINAU       CENTRU     Liceul "M. Koţiubinski"                                                   54        50           4        92.59    6.51
46   CHISINAU       CHISINAU            Liceul-internat Republican de muzică "Ciprian Porumbescu"                 26        24           2        92.31    7.25
47   FĂLEŞTI        FĂLEŞTI             INSTITUŢIA PUBLICĂ LICEUL TEORETIC "M.EMINESCU"                         110        101           9        91.82    6.80
48   NISPORENI      NISPORENI           Instituţia Publică Liceul Teoretic "Boris Cazacu"                       141        129         12         91.49    6.62
49   CHISINAU       BOTANICA   Liceul Teoretic "Pro Succes"                                              23        21           2        91.30    7.18
50   IALOVENI       HOREŞTI             Liceul Teoretic Horeşti                                                                       23    21    2   91.30   6.31
51   EDINET         EDINET              Instituţie Publică Liceul Teoretic "Dimitrie Cantemir"                                        34    31    3   91.18   6.49
52   CHISINAU       CIOCANA    Liceul Teoretic cu profil de arte "Mihail Berezovschi"                                       123   112   11   91.06   6.84
53   CHISINAU       RISCANI    Instituţia Publică Liceul Teoretic "Alexandru Ioan Cuza"                                      44    40    4   90.91   6.51
54   CHISINAU       RISCANI    Liceul Teoretic "G.Călinescu"                                                                 86    78    8   90.70   6.48
55   CHISINAU       DURLEŞTI            Instituţia Privată de Învăţămînt Liceul Teoretic "ORIZONT"                                    31    28    3   90.32   7.87
56   UNGHENI        UNGHENI             LICEUL TEORETIC "GH. ASACHI"                                                                  84    75    9   89.29   6.69
57   CHISINAU       CRICOVA             Liceul Teoretic "Alexei Mateevici"                                                            28    25    3   89.29   6.06
58   FLOREŞTI       FLOREŞTI            Liceul Teoretic "Ion Creangă"                                                                 65    58    7   89.23   6.88
59   CHISINAU       BUIUCANI   Liceul Teoretic "Antioh Cantemir"                                                             54    48    6   88.89   6.75
60   CHISINAU       RISCANI    Liceul Tehnologic Resurse Educaţionale şi Trayning Tehnologic (OPT) "Beniamin Zeev Herţli"    18    16    2   88.89   6.74
61   GAGAUZIA   VULCĂNEŞTI          LICEUL TEORETIC Nr.2                                                                           9     8    1   88.89   6.28
62   CHISINAU       RISCANI    Liceul Teoretic "Natalia Gheorghiu"                                                           44    39    5   88.64   6.59
63   CHISINAU       RISCANI    Liceul Teoretic bulgar "Vasil Levski"                                                         35    31    4   88.57   6.71
64   CHISINAU       BOTANICA   Liceul Teoretic "Mihai Grecu"                                                                 66    58    8   87.88   6.48
65   CHISINAU       BOTANICA   Liceul Teoretic cu profil de arte "Elena Alistar"                                             96    84   12   87.50   6.96
66   CĂLĂRAŞI       CĂLĂRAŞI            Liceul Teoretic “Mihail Sadoveanu”                                                            48    42    6   87.50   6.91
67   CĂLĂRAŞI       SIPOTENI            Liceul Teoretic “Mihai Eminescu”                                                              40    35    5   87.50   6.50
68   GAGAUZIA   CEADÎR LUNGA        LICEUL TEORETIC "V.MOŞCOV"                                                                    39    34    5   87.18   6.93
69   HÎNCEŞTI       HÎNCEŞTI            Liceul Teoretic "M. Sadoveanu"                                                                77    67   10   87.01   6.83
70   CHISINAU       RISCANI    LICEUL TEORETIC "MIGUEL DE CERVANTES SAAVEDRA"                                                76    66   10   86.84   6.79
71   BALTI          BALTI               LICEUL TEORETIC "ŞTEFAN CEL MARE"                                                             30    26    4   86.67   6.53
72   CHISINAU       RISCANI    Liceul Teoretic "Academia Copiilor"                                                           22    19    3   86.36   7.39
73   CHISINAU       CIOCANA    Instituţia Publică Liceul Teoretic "OLIMP"                                                    44    38    6   86.36   6.70
74   ANENIINOI     VARNIŢA             Instituţie Publică Liceul Teoretic Varniţa                                                    44    38    6   86.36   6.38
75   BALTI          BALTI               LICEUL TEORETIC "G.COŞBUC"                                                                    72    62   10   86.11   6.83
76   CHISINAU       RISCANI    Liceul Teoretic "Mihail Kogălniceanu"                                                         57    49    8   85.96   6.91
77   IALOVENI       COSTEŞTI            Liceul Teoretic Costeşti                                                                      64    55    9   85.94   6.16
78   CRIULENI       CRIULENI            Liceul Teoretic "Boris Dînga"                                                                 77    66   11   85.71   6.98
79   CIMIŞLIA       GURA GALBENEI       Instituţia Publică LICEUL TEORETIC "HYPERION"                                                 41    35    6   85.37   6.39
80   SOROCA         SOROCA              Instituţia Publică Liceul Teoretic "Constantin Stere"                                         81    69   12   85.19   7.10
81   ŞOLDĂNEŞTI     ŞOLDĂNEŞTI          Instituţie Publică Liceul teoretic "A. Mateevici"                                             99    84   15   84.85   6.23
82   SÎNGEREI       SÎNGEREI            LICEUL TEORETIC "OLIMP"                                                                       95    80   15   84.21   6.46
83   DUBĂSARI       DUBĂSARI            Liceul Teoretic "Mihai Eminescu"                                                              87    73   14   83.91   6.30
84   CHISINAU       CENTRU     Instituţia Publică Liceul Teoretic "Mihai Viteazul"                                          105    88   17   83.81   6.44
85   CHISINAU       CENTRU     Liceul Teoretic "Vasile Lupu"                                                                 43    36    7   83.72   6.71
86   CHISINAU       CIOCANA    Liceul Teoretic "Gaudeamus"                                                                   98    82   16   83.67   6.72
87   STRĂŞENI       VORNICENI           INSTITUŢIA PUBLICĂ LICEUL TEORETIC "ION INCULEŢ"                                              36    30    6   83.33   6.38
88   DUBĂSARI       DOROŢCAIA           Liceul Teoretic "Ştefan cel Mare şi Sfînt"                                                    12    10    2   83.33   6.30
89   STRĂŞENI       LOZOVA              INSTITUŢIA PUBLICĂ LICEUL TEORETIC "MITROPOLIT NESTOR VORNICESCU"                             47    39    8   82.98   6.17
90   BALTI          BALTI               Liceul Teoretic Republican "Ion Creangă"                                                      98    81   17   82.65   6.53
91   REZINA         ECHIMĂUŢI           Instituţie Publică Liceul Teoretic Echimăuţi                                                  23    19    4   82.61   6.14
92   CRIULENI       BOŞCANA             Liceul Teoretic "Mihail Stratulat"                                                            57    47   10   82.46   6.34
93   CHISINAU       RISCANI             Liceul Teoretic "George Meniuc"                                                               61    50   11   81.97   6.50
94   CHISINAU       BOTANICA            LICEUL TEORETIC "BOGDAN PETRICEICU HAŞDEU"                                                    44    36    8   81.82   6.51
95   CHISINAU       RISCANI             Liceul "Svetoci"                                                                              33    27    6   81.82   6.30
96   STRĂŞENI       MICLEUŞENI          INSTITUŢIA PUBLICĂ LICEUL TEORETIC "ION CREANGĂ"                                              11     9    2   81.82   6.17
97   CHISINAU       BUIUCANI            Instituţia Publică Liceul Teoretic "Liviu Deleanu"                                           104    85   19   81.73   6.39
98   ANENIINOI     MERENI              Instituţie Publică Liceul Teoretic "EMIL NICULA"                                              60    49   11   81.67   6.56
99   BALTI          BALTI               LICEUL TEORETIC "B.P.HAŞDEU"                                                                  81    66   15   81.48   6.36
100   ORHEI          ORHEI               LICEUL TEORETIC "M. LOMONOSOV"                                                                16    13    3   81.25   6.58
101   DONDUŞENI      SUDARCA             Liceul Teoretic "Mihai Eminescu"                                                      16    13    3   81.25   5.65
102   EDINET         EDINET              Instituţie Publică Liceul Teoretic "M.Eminescu"                                       58    47   11   81.03   6.25
103   CRIULENI       CRUGLIC             Liceul Teoretic CRUGLIC                                                               21    17    4   80.95   6.57
104   ŞOLDĂNEŞTI     OLIŞCANI            Instituţie Publică Liceul teoretic Olişcani                                           21    17    4   80.95   6.26
105   GAGAUZIA   CEADÎR LUNGA        FILIALA CEADÎR LUNGA A INSTITUŢIEI PRIVATE DE ÎNVĂŢĂMÎNT LICEUL TEORETIC "ORIZONT"    26    21    5   80.77   6.81
106   GAGAUZIA   CEADÎR LUNGA        LICEUL TEORETIC RAIONAL "M.GUBOGLO"                                                   52    42   10   80.77   6.74
107   CHISINAU       RISCANI             Liceul Teoretic "Mihail Sadoveanu"                                                    67    54   13   80.60   6.57
108   IALOVENI       COSTEŞTI            Liceul Teoretic "Olimp"                                                               36    29    7   80.56   6.71
109   CHISINAU       CIOCANA             Instituţia Publică Liceul Teoretic "Ginta Latină"                                     97    78   19   80.41   6.54
110   CANTEMIR       CANTEMIR            Instituţia publică Liceul Teoretic "D.Cantemir"                                       96    77   19   80.21   6.45
111   CHISINAU       VADUL LUI VODĂ      Liceul Teoretic "Ştefan Vodă"                                                         35    28    7   80.00   6.74
112   ORHEI          ORHEI               LICEUL TEORETIC "ONISIFOR GHIBU"                                                      75    60   15   80.00   6.47
113   CHISINAU       RISCANI             Liceul Teoretic "Kiril şi Metodii"                                                    45    36    9   80.00   6.46
114   CHISINAU       BOTANICA            Liceul "Elitex"                                                                        5     4    1   80.00   6.44
115   GLODENI        COBANI              LICEUL TEORETIC COBANI                                                                35    28    7   80.00   6.03
116   CAHUL          CAHUL               Liceul Teoretic "M.Eminescu"                                                         111    88   23   79.28   6.44
117   CHISINAU       CENTRU              Liceul Teoretic Academician "C.Sibirschi"                                             53    42   11   79.25   6.71
118   RÎŞCANI        RÎŞCANI             LICEUL TEORETIC "LIVIU DAMIAN"                                                        48    38   10   79.17   6.57
119   CIMIŞLIA       CIMIŞLIA            Instituţia Publică LICEUL TEORETIC "MIHAI EMINESCU"                                   67    53   14   79.10   6.27
120   SÎNGEREI       SÎNGEREI            LICEUL TEORETIC "M. EMINESCU"                                                         81    64   17   79.01   6.39
121   CAHUL          CAHUL               Liceul Teoretic "I.Creangă"                                                           76    60   16   78.95   5.99
122   CAUSENI        FÎRLĂDENI           LICEUL TEORETIC "M.SADOVEANU"                                                         33    26    7   78.79   5.95
123   GAGAUZIA   ETULIA              Liceul Teoretic "S.P.Economov"                                                        14    11    3   78.57   6.66
124   SÎNGEREI       CHIŞCĂRENI          Liceul Teoretic "N. Casso"                                                            42    33    9   78.57   6.48
125   FLOREŞTI       FLOREŞTI            Liceul Teoretic "A. Cehov"                                                            14    11    3   78.57   6.38
126   ORHEI          ORHEI               INSTITUŢIA PUBLICĂ LICEUL TEORETIC "I. L. CARAGIALE"                                  97    76   21   78.35   6.69
127   TELENEŞTI      TELENEŞTI           LICEUL TEORETIC ”LUCIAN BLAGA”                                                       101    79   22   78.22   6.56
128   TARACLIA       TVARDIŢA            LICEUL TEORETIC TVARDIŢA                                                              32    25    7   78.13   6.55
129   CRIULENI       HÎRTOPUL MIC        Liceul Teoretic HÎRTOPUL MIC                                                          32    25    7   78.13   6.00
130   ANENIINOI     ANENIINOI          Instituţie Publică Liceul Teoretic "ALEXANDR PUŞKIN"                                  41    32    9   78.05   6.51
131   UNGHENI        UNGHENI             LICEUL TEORETIC "M. EMINESCU"                                                        150   117   33   78.00   6.20
132   CHISINAU       BOTANICA            Liceul Teoretic "Rambam" ORT                                                           9     7    2   77.78   7.00
133   TARACLIA       VALEA PERJEI        LICEUL TEORETIC "HRISTO BOTEV" din s. Valea Perjei                                    36    28    8   77.78   6.70
134   ANENIINOI     HÎRBOVĂŢ            Instituţie Publică Liceul Teoretic "Ion Creangă"                                      45    35   10   77.78   6.62
135   BALTI          BALTI               LICEUL TEORETIC "M.LOMONOSOV"                                                         45    35   10   77.78   6.46
136   CĂLĂRAŞI       BRAVICEA            Liceul Teoretic “Ştefan cel Mare”                                                     18    14    4   77.78   5.88
137   HÎNCEŞTI       SĂRATA GALBENĂ      Liceul Teoretic "Universum"                                                           49    38   11   77.55   6.68
138   STRĂŞENI       STRĂŞENI            INSTITUŢIA PUBLICĂ LICEUL TEORETIC "ION VATAMANU"                                     84    65   19   77.38   6.80
139   ŞTEFAN VODĂ    ŞTEFAN VODĂ         INSTITUŢIA PUBLICĂ LICEUL TEORETIC "ŞTEFAN VODĂ"                                     137   106   31   77.37   6.50
140   BASARABEASCA   ABACLIA             LICEUL TEORETIC "CONSTANTIN STERE"                                                    44    34   10   77.27   6.40
141   CHISINAU       BOTANICA            LICEUL TEORETIC "V.ALECSANDRI"                                                       100    77   23   77.00   6.50
142   SOROCA         SOROCA              Instituţia Publică Liceul Teoretic "Alexandru Puşkin"                                 26    20    6   76.92   6.49
143   ORHEI          BIEŞTI              INSTITUŢIA PUBLICĂ LICEUL TEORETIC BIEŞTI                                             13    10    3   76.92   6.48
144   EDINET         EDINET              Instituţie Publică Liceul Teoretic "V.Suhomlinski"                                    39    30    9   76.92   6.18
145   CHISINAU       RISCANI             Liceul Teoretic "Matei Basarab"                                                       26    20    6   76.92   6.07
146   CHISINAU       CENTRU              Liceul teoretic cu profil tehnologic pentru copii cu vederea slabă                    13    10    3   76.92   5.78
147   DONDUŞENI      DONDUŞENI           Liceul Teoretic "A.Mateevici"                                                         60    46   14   76.67   6.73
148   CIMIŞLIA       LIPOVENI            Instituţia Publică LICEU INTERNAT CU PROFIL SPORTIV                                   30    23    7   76.67   6.30
149   BASARABEASCA   BASARABEASCA        LICEUL TEORETIC "MATEI BASARAB"                                                       17    13    4   76.47   6.35
150   CAHUL          CAHUL               Liceul Teoretic "P.Rumeanţev"                                                         55    42   13   76.36   6.60
151   CAUSENI        CĂINARI             LICEUL TEORETIC "A.MATEEVICI"                                                         38    29    9   76.32   6.08
152   REZINA         IGNĂŢEI               Instituţie Publică Liceul Teoretic "Ioan Sârbu" Ignăţei          38   29    9   76.32   6.03
153   TARACLIA       CIUMAI                LICEUL TEORETIC CIUMAI                                           21   16    5   76.19   6.88
154   IALOVENI       IALOVENI              Liceul Teoretic "Petre Ştefănucă"                                63   48   15   76.19   6.78
155   IALOVENI       RĂZENI                Liceul Teoretic "Ion Pelivan"                                    42   32   10   76.19   6.77
156   RÎŞCANI        RÎŞCANI               LICEUL TEORETIC "DIMITRIE CANTEMIR"                              25   19    6   76.00   6.77
157   DROCHIA        COTOVA                Instituţia Publică Liceul Teoretic Cotova                        25   19    6   76.00   6.05
158   CHISINAU       BUIUCANI              Instituţia Publică Liceul Teoretic "Onisifor Ghibu"              66   50   16   75.76   6.50
159   CHISINAU       BOTANICA              Instituţia Publică Liceul Teoretic "Traian"                      74   56   18   75.68   6.40
160   DROCHIA        DROCHIA               Instituţia Publică Liceul Teoretic "Bogdan Petriceicu Hasdeu"    73   55   18   75.34   6.42
161   CHISINAU       BUIUCANI              ȘCOALĂ PROFESIONALĂ NR.2                                         77   58   19   75.32   6.62
162   GAGAUZIA   COPCEAC               LICEUL TEORETIC "S.I.BARANOVSKI"                                 32   24    8   75.00   6.92
163   DONDUŞENI      DONDUŞENI             Liceul Teoretic "Gaudeamus"                                      16   12    4   75.00   6.75
164   CAUSENI        CAUSENI               LICEUL TEORETIC "A.PUŞKIN"                                       16   12    4   75.00   6.63
165   CHISINAU       BUIUCANI              Liceul Teoretic "Vasile Vasilache"                               64   48   16   75.00   6.50
166   ANENIINOI     PUHĂCENI              Instituţie Publică Liceul Teoretic "Olimp"                       44   33   11   75.00   6.33
167   RÎŞCANI        ZĂICANI               LICEUL TEORETIC "LEONID GHERMAN"                                 20   15    5   75.00   6.32
168   STRĂŞENI       ZUBREŞTI              INSTITUŢIA PUBLICĂ LICEUL TEORETIC ZUBREŞTI                      16   12    4   75.00   5.98
169   CĂLĂRAŞI       ŢIBIRICA              Liceul Teoretic Ţibirica                                          4    3    1   75.00   5.08
170   CHISINAU       CHISINAU              Liceul Teoretic cu Profil Real "Mihai Marinciuc"                 83   62   21   74.70   6.60
171   TELENEŞTI      CĂZĂNEŞTI             LICEUL TEORETIC "A. PĂUNESCU"                                    43   32   11   74.42   6.27
172   LEOVA          LEOVA                 Liceul Teoretic "Constantin Spătaru"                             58   43   15   74.14   6.38
173   CHISINAU       CIOCANA               Liceul Teoretic "Dacia"                                          54   40   14   74.07   6.41
174   CHISINAU       CENTRU                Liceul Teoretic "Titu Maiorescu"                                 27   20    7   74.07   6.07
175   CAHUL          CAHUL                 Liceul Teoretic "Ioan Vodă"                                     100   74   26   74.00   6.47
176   CRIULENI       MĂLĂIEŞTII NOI        Liceul Teoretic MĂLĂIEŞTI                                        23   17    6   73.91   6.16
177   CAHUL          CAHUL                 Liceul Teoretic "D. Cantemir"                                    42   31   11   73.81   6.38
178   REZINA         REZINA                Instituţia Publică Liceul Teoretic "Alexandru cel Bun"           41   30   11   73.17   6.47
179   BRICENI        TEŢCANI               Liceul Teoretic Teţcani                                          26   19    7   73.08   6.37
180   CĂLĂRAŞI       SĂSENI                Liceul Teoretic Săseni                                           26   19    7   73.08   6.18
181   FĂLEŞTI        FĂLEŞTI               INSTITUŢIA PUBLICĂ LICEUL TEORETIC "A.PUŞKIN"                    33   24    9   72.73   6.58
182   DROCHIA        DROCHIA               Instituţia Publică Liceul rus nr.3                               55   40   15   72.73   6.38
183   CRIULENI       DUBĂSARII VECHI       Liceul Teoretic "Nicolae Donici"                                 80   58   22   72.50   6.07
184   CHISINAU       RISCANI               Liceu Teoretic "Waldorf" (cu grupe de grădiniţă)                 25   18    7   72.00   6.58
185   DUBĂSARI       HOLERCANI             Liceul Teoretic Holercani                                        50   36   14   72.00   6.21
186   CHISINAU       BUIUCANI              Liceul Teoretic "Anton Cehov"                                    46   33   13   71.74   6.19
187   DROCHIA        PELINIA               Instituţia Publică Liceul Teoretic Pelinia                       53   38   15   71.70   6.30
188   FLOREŞTI       FLOREŞTI              Liceul Teoretic "M. Costin"                                      60   43   17   71.67   6.12
189   CHISINAU       CIOCANA               Instituţia Publică Liceul Teoretic "Petru Zadnipru"              84   60   24   71.43   6.56
190   CHISINAU       BUIUCANI              Liceul Teoretic "I.S.Neciui-Leviţchi"                            21   15    6   71.43   6.49
191   CAHUL          ALEXANDRU IOAN CUZA   Liceul Teoretic "A.Mateevici"                                    14   10    4   71.43   6.03
192   HÎNCEŞTI       CĂRPINENI             Liceul Teoretic "Ştefan Holban"                                  45   32   13   71.11   6.78
193   CHISINAU       RISCANI               Instituţia Publică Liceul Teoretic "Ştefan cel Mare"             45   32   13   71.11   6.66
194   STRĂŞENI       COJUŞNA               INSTITUŢIA PUBLICĂ LICEUL TEORETIC "ALECU RUSSO"                 38   27   11   71.05   6.31
195   ORHEI          ORHEI                 INSTITUŢIA PUBLICĂ LICEUL TEORETIC "A. RUSSO"                    93   66   27   70.97   6.23
196   CANTEMIR       CIOBALACCIA           Instituţia publică Liceul Teoretic "Nicolae Mihai"               65   46   19   70.77   6.22
197   RÎŞCANI        CORLĂTENI             LICEUL TEORETIC "VICTOR DUMBRĂVEANU"                             41   29   12   70.73   6.08
198   RÎŞCANI        VĂRATIC               LICEUL TEORETIC VĂRATIC                                          27   19    8   70.37   5.87
199   EDINET         EDINET                Instituţie Publică Liceul Teoretic "Pan Halippa"                 47   33   14   70.21   6.45
200   FLOREŞTI       CUNICEA               Liceul Teoretic Cunicea                                          10    7    3   70.00   6.89
201   CHISINAU       COLONIŢA              Liceul Teoretic "Gh.Ghimpu"                                      30   21    9   70.00   6.40
202   RÎŞCANI        RECEA                 LICEUL TEORETIC RECEA                                            30   21    9   70.00   6.20
203   BRICENI        BRICENI             Liceul Teoretic "Grigore Vieru"                                       50    35   15   70.00   6.17
204   CHISINAU       BOTANICA            LICEUL TEORETIC "IULIA HAŞDEU"                                        83    58   25   69.88   6.65
205   CHISINAU       CENTRU              Instituţia Publică Liceul Teoretic "Minerva"                          83    58   25   69.88   6.17
206   HÎNCEŞTI       HÎNCEŞTI            Liceul Teoretic "M. Eminescu"                                         79    55   24   69.62   6.54
207   CHISINAU       GRĂTIEŞTI           Liceul Teoretic "Grătieşti"                                           23    16    7   69.57   6.30
208   CRIULENI       ONIŢCANI            Liceul Teoretic ONIŢCANI                                              36    25   11   69.44   6.89
209   DUBĂSARI       DOROŢCAIA           Liceul Teoretic Doroţcaia                                             36    25   11   69.44   6.50
210   CHISINAU       CIORESCU            Instituţia Publică Liceul Teoretic "Nicolae Bălcescu"                 52    36   16   69.23   6.35
211   GAGAUZIA   COMRAT              LICEUL TEORETIC "D.CARACIOBAN" mun. COMRAT                            42    29   13   69.05   6.44
212   FLOREŞTI       CUHUREŞTII DE SUS   Liceul Teoretic Cuhureştii de Sus                                     32    22   10   68.75   6.25
213   RÎŞCANI        COSTEŞTI            LICEUL TEORETIC "SILVIAN LUCACI"                                      28    19    9   67.86   6.30
214   FLOREŞTI       SĂNĂTĂUCA           Liceul Teoretic "A. Mateevici"                                        40    27   13   67.50   6.31
215   CHISINAU       CHISINAU            Seminarul Teologic Ortodox                                            40    27   13   67.50   5.89
216   CHISINAU       CIOCANA             Instituţia Publică Liceul Teoretic "Constantin Negruzzi"              98    66   32   67.35   6.39
217   HÎNCEŞTI       MINGIR              Liceul Teoretic Mingir                                                49    33   16   67.35   6.14
218   CHISINAU       DURLEŞTI            Instituţia Publică Liceul Teoretic "Hyperion"                         55    37   18   67.27   6.51
219   BASARABEASCA   CARABETOVCA         LICEUL TEORETIC "ŞTEFAN CEL MARE"                                     21    14    7   66.67   6.82
220   SÎNGEREI       PEPENI              LICEUL TEORETIC "A. AGAPIE"                                           72    48   24   66.67   6.38
221   LEOVA          LEOVA               Liceul Teoretic "Lev Tolstoi"                                         21    14    7   66.67   6.31
222   STRĂŞENI       SCORENI             INSTITUŢIA PUBLICĂ LICEUL TEORETIC "UNIVERSUL"                        24    16    8   66.67   6.28
223   CIMIŞLIA       CIMIŞLIA            Instituţia Publică LICEUL TEORETIC "ION CREANGĂ"                      69    46   23   66.67   6.23
224   IALOVENI       VĂSIENI             Liceul Teoretic "Dimitrie Cantemir"                                   45    30   15   66.67   6.17
225   HÎNCEŞTI       LĂPUŞNA             Liceul Teoretic Lăpuşna                                               54    36   18   66.67   6.10
226   GLODENI        CUHNEŞTI            LICEUL TEORETIC CUHNEŞTI                                              30    20   10   66.67   6.00
227   LEOVA          LEOVA               Liceul Teoretic "Mihai Eminescu"                                      86    57   29   66.28   6.55
228   ANENIINOI     ANENIINOI          Instituţie Publică Liceul Teoretic "Andrei Straistă"                 161   106   55   65.84   6.13
229   CHISINAU       CIOCANA             Instituţia Publică Liceul Teoretic cu Profil Sportiv nr. 2            35    23   12   65.71   6.72
230   LEOVA          IARGARA             Liceul Teoretic "Lucian Blaga"                                        35    23   12   65.71   5.92
231   BALTI          BALTI               LICEUL TEORETIC "L.BLAGA"                                             67    44   23   65.67   6.11
232   DROCHIA        CHETROSU            Instituţia Publică Liceul Teoretic "Victor Coţofană"                  32    21   11   65.63   6.17
233   CAHUL          COLIBAŞI            Liceul Teoretic "V. Alecsandri"                                       61    40   21   65.57   6.20
234   CHISINAU       BUIUCANI            Liceul Teoretic cu Profil de Arte "Ion şi Doina Aldea-Teodorovici"    29    19   10   65.52   5.93
235   CAHUL          SLOBOZIA MARE       Liceul Teoretic "Mihai Eminescu"                                      75    49   26   65.33   6.07
236   STRĂŞENI       SIREŢI              INSTITUŢIA PUBLICĂ LICEUL TEORETIC SIREŢI                             43    28   15   65.12   6.46
237   CHISINAU       RISCANI             Liceul Teoretic "Lucian Blaga"                                        43    28   15   65.12   5.98
238   STRĂŞENI       STRĂŞENI            INSTITUŢIA PUBLICĂ LICEUL TEORETIC "MIHAI EMINESCU"                  106    69   37   65.09   6.11
239   BALTI          BALTI               LICEUL TEORETIC "V.MAIAKOVSKI"                                        34    22   12   64.71   6.62
240   OCNIŢA         OCNIŢA              INSTITUŢIA PUBLICĂ LICEUL TEORETIC "MIHAIL SADOVEANU"                 51    33   18   64.71   6.50
241   SÎNGEREI       SÎNGEREII NOI       Liceul Teoretic "A.Russo"                                             34    22   12   64.71   5.86
242   CIMIŞLIA       CIMIŞLIA            Instituţia Publică LICEUL TEORETIC "ALEXANDR PUŞKIN"                  31    20   11   64.52   6.31
243   CHISINAU       BOTANICA            ȘCOALĂ PROFESIONALĂ NR.3                                              56    36   20   64.29   6.06
244   CHISINAU       SÎNGERA             Instituţia Publică Liceul Teoretic "Alexandru cel Bun"                78    50   28   64.10   6.02
245   BRICENI        BRICENI             Liceul Teoretic nr.1 Briceni                                          25    16    9   64.00   6.39
246   FLOREŞTI       ŞTEFĂNEŞTI          Liceul Teoretic Ştefăneşti                                            22    14    8   63.64   6.14
247   SOROCA         SOROCA              Instituţia Publică Liceul Teoretic "Ion Creangă"                      71    45   26   63.38   5.98
248   DROCHIA        DROCHIA             Instituţia Publică Liceul Teoretic "Mihai Eminescu"                   68    43   25   63.24   6.13
249   TELENEŞTI      SĂRĂTENII VECHI     LICEUL TEORETIC “V.ANESTIADE”                                         38    24   14   63.16   6.20
250   UNGHENI        CORNEŞTI            LICEUL TEORETIC "D.CANTEMIR"                                          38    24   14   63.16   5.78
251   GAGAUZIA   VULCĂNEŞTI          LICEUL TEORETIC "A. DOLJNENKO"                                        27    17   10   62.96   6.41
252   HÎNCEŞTI       CIOARA              Liceul Teoretic "S. Andreev"                                          27    17   10   62.96   6.09
253   TARACLIA       TARACLIA            LICEUL TEORETIC "IVAN VAZOV"                                          97    61   36   62.89   6.58
254   CAHUL          GIURGIULEŞTI        Liceul Teoretic "M.Sadoveanu"                           48   30   18   62.50   6.52
255   IALOVENI       MOLEŞTI             Liceul Teoretic Moleşti                                 24   15    9   62.50   6.45
256   BRICENI        BRICENI             Liceul Teoretic "T.Şevcenco" Briceni                    16   10    6   62.50   6.42
257   TELENEŞTI      MÎNDREŞTI           LICEUL TEORETIC “D.Cantemir”                             8    5    3   62.50   5.70
258   UNGHENI        UNGHENI             LICEUL TEORETIC "I. CREANGĂ"                            69   43   26   62.32   6.08
259   FLOREŞTI       FLOREŞTI            Liceul Teoretic "M. Eminescu"                           37   23   14   62.16   6.29
260   CHISINAU       TRUŞENI             Liceul Teoretic "Truşeni"                               29   18   11   62.07   6.24
261   DROCHIA        POPEŞTII DE SUS     Instituţia Publică Liceul Teoretic "Ion Creangă"        29   18   11   62.07   6.24
262   UNGHENI        PÎRLIŢA             LICEUL TEORETIC "A. MATEEVICI"                          79   49   30   62.03   6.15
263   OCNIŢA         OTACI               INSTITUŢIA PUBLICĂ LICEUL TEORETIC "MIHAI EMINESCU"     39   24   15   61.54   6.09
264   CHISINAU       BUIUCANI            Instituţia Publică Liceul Teoretic "Petru Rareş"       127   78   49   61.42   6.23
265   BRICENI        LIPCANI             Liceul Teoretic Lipcani                                 36   22   14   61.11   6.65
266   IALOVENI       PUHOI               Liceul Teoretic Puhoi                                   54   33   21   61.11   6.07
267   SÎNGEREI       CUBOLTA             LICEUL TEORETIC "P. HALIPPA"                            41   25   16   60.98   6.34
268   CAUSENI        TARACLIA            LICEUL TEORETIC "ŞTEFAN CEL MARE ŞI SFÎNT"              41   25   16   60.98   6.14
269   GAGAUZIA   CONGAZ              LICEUL TEORETIC CONGAZ                                  23   14    9   60.87   6.66
270   IALOVENI       MILEŞTII MICI       Liceul Teoretic "Mihail Bârcă"                          28   17   11   60.71   6.34
271   DROCHIA        DROCHIA             Instituţia Publică Liceul Teoretic "Ştefan cel Mare"    56   34   22   60.71   5.94
272   BALTI          BALTI               LICEUL TEORETIC "A.PUŞKIN"                              48   29   19   60.42   6.59
273   IALOVENI       ZÎMBRENI            Liceul Teoretic Zîmbreni                                15    9    6   60.00   6.97
274   BASARABEASCA   BASARABEASCA        LICEUL TEORETIC "N.V.GOGOL"                             15    9    6   60.00   6.29
275   FLOREŞTI       GHINDEŞTI           Liceul Teoretic "M. Eminescu"                           40   24   16   60.00   5.80
276   CAUSENI        TĂNĂTARI            LICEUL TEORETIC "P.ERHAN"                               10    6    4   60.00   5.33
277   CAUSENI        ZAIM                LICEUL TEORETIC "A.MATEEVICI"                           47   28   19   59.57   6.20
278   CRIULENI       CIMIŞENI            Liceul Teoretic CIMIŞENI                                42   25   17   59.52   6.20
279   BRICENI        COLICĂUŢI           Liceul Teoretic Colicăuţi                               32   19   13   59.38   6.32
280   EDINET         GORDINEŞTI          Instituţie Publică Liceul Teoretic Gordineşti           32   19   13   59.38   5.87
281   REZINA         REZINA              Instituţia Publică Liceul Teoretic "Ştefan cel Mare"    98   58   40   59.18   6.44
282   DUBĂSARI       COCIERI             Liceul Teoretic "Vlad Ioviţă"                           44   26   18   59.09   6.28
283   GLODENI        LIMBENII VECHI      LICEUL TEORETIC LIMBENII VECHI                          39   23   16   58.97   6.10
284   ANENIINOI     BULBOACA            Instituţie Publică Liceul Teoretic "Anton Guzun"        39   23   16   58.97   5.96
285   GAGAUZIA   CEADÎR LUNGA        Liceul Teoretic Nr. 2                                   17   10    7   58.82   6.30
286   EDINET         FETEŞTI             Instituţie Publică Liceul Teoretic Feteşti              24   14   10   58.33   6.04
287   HÎNCEŞTI       BOBEICA             Liceul Teoretic Bobeica                                 57   33   24   57.89   6.33
288   BRICENI        CORJEUŢI            Liceul Teoretic Corjeuţi                                38   22   16   57.89   6.09
289   CHISINAU       BUIUCANI            Liceul - Internat Municipal cu Profil Sportiv           85   49   36   57.65   6.11
290   BALTI          BALTI               LICEUL TEORETIC "V.ALECSANDRI"                          68   39   29   57.35   6.59
291   RÎŞCANI        NIHORENI            LICEUL TEORETIC "CONSTANTIN POPOVICI"                   28   16   12   57.14   6.43
292   IALOVENI       ŢIPALA              Liceul Teoretic Ţîpala                                  28   16   12   57.14   6.41
293   RÎŞCANI        MIHĂILENI           LICEUL TEORETIC "EUGEN COŞERIU"                         23   13   10   56.52   6.40
294   UNGHENI        MĂCĂREŞTI           LICEUL TEORETIC "ELADA"                                 46   26   20   56.52   6.30
295   SOROCA         VISOCA              Instituţia Publică Liceul Teoretic Visoca               46   26   20   56.52   5.94
296   CHISINAU       CHISINAU            Liceul Internat Republican cu Profil Sportiv            62   35   27   56.45   6.24
297   GAGAUZIA   COPCEAC             LICEUL TEORETIC "BORIS IANACOGLO"                       16    9    7   56.25   6.96
298   EDINET         CUPCINI             Instituţie Publică Liceul Teoretic "M.Sadoveanu"        32   18   14   56.25   6.51
299   FĂLEŞTI        FĂLEŞTI             INSTITUŢIA PUBLICĂ LICEUL TEORETIC "I.CREANGĂ"          73   41   32   56.16   6.18
300   UNGHENI        UNGHENI             LICEUL TEORETIC "A. PUŞKIN"                             57   32   25   56.14   6.30
301   UNGHENI        SCULENI             LICEUL TEORETIC SCULENI                                 68   38   30   55.88   6.24
302   CHISINAU       BOTANICA            Liceul Teoretic "Mircea cel Bătrîn"                     68   38   30   55.88   5.87
303   DUBĂSARI       COŞNIŢA             Liceul Teoretic "Ion Creangă"                           70   39   31   55.71   6.12
304   CĂLĂRAŞI       CĂLĂRAŞI            Liceul Teoretic “Vasile Alecsandri”                    110   61   49   55.45   6.37
305   SOROCA         RUBLENIŢA           Instituţia Publică Liceu Teoretic Rubleniţa                      47    26    21   55.32   6.36
306   GAGAUZIA   CONGAZ              LICEUL MOLDO-TURC "S.DEMIREL"                                    29    16    13   55.17   6.58
307   OCNIŢA         OCNIŢA              INSTITUŢIA PUBLICĂ LICEUL TEORETIC "CONSTANTIN STAMATI"          29    16    13   55.17   6.25
308   SOROCA         SOROCA              Instituţia Publică Liceul Teoretic "Petru Rareş"                 87    48    39   55.17   6.10
309   GLODENI        GLODENI             Liceul Teoretic ”Vasile Coroban”                                 91    50    41   54.95   6.07
310   NISPORENI      NISPORENI           Instituţia Publică Liceul Teoretic "Mircea Eliade"              110    60    50   54.55   6.09
311   GLODENI        BALATINA            LICEUL TEORETIC BALATINA                                         37    20    17   54.05   6.25
312   DONDUŞENI      BARABOI             Liceul Teoretic "Prometeu"                                       37    20    17   54.05   6.23
313   GLODENI        GLODENI             LICEUL TEORETIC "LEV TOLSTOI"                                    52    28    24   53.85   6.37
314   EDINET         CUPCINI             Instituţie Publică Liceul Teoretic "S.Kovalevskaia"              13     7     6   53.85   6.00
315   ORHEI          SUSLENI             INSTITUŢIA PUBLICĂ LICEUL TEORETIC "V. LUPU"                     41    22    19   53.66   6.28
316   CRIULENI       MAŞCĂUŢI            Liceul Teoretic "Ion Sîrbu"                                      43    23    20   53.49   5.62
317   FLOREŞTI       MĂRCULEŞTI          Liceul Teoretic "V. Alecsandri"                                  53    28    25   52.83   6.08
318   DONDUŞENI      DONDUŞENI           Liceul Teoretic "A.Puşkin"                                       36    19    17   52.78   6.23
319   OCNIŢA         OCNIŢA              INSTITUŢIA PUBLICĂ LICEUL TEORETIC "GHEORGHE BIRUITORUL"         38    20    18   52.63   6.56
320   IALOVENI       IALOVENI            Liceul Teoretic "Andrei Vartic"                                  80    42    38   52.50   6.07
321   GLODENI        STURZOVCA           LICEUL TEORETIC STURZOVCA                                        40    21    19   52.50   5.71
322   LEOVA          BOROGANI            Liceul Teoretic "Grigore Vieru"                                  21    11    10   52.38   6.11
323   FĂLEŞTI        CĂLINEŞTI           INSTITUŢIA PUBLICĂ LICEUL TEORETIC ”GHEORGHE VRABIE”             44    23    21   52.27   6.09
324   TELENEŞTI      NEGURENI            LICEUL TEORETIC NEGURENI                                         71    37    34   52.11   6.05
325   BALTI          BALTI               LICEUL TEORETIC "M.GORKI"                                        62    32    30   51.61   6.56
326   CHISINAU       RISCANI    Liceul Teoretic "Mihail Lomonosov"                               37    19    18   51.35   6.32
327   CHISINAU       CHISINAU            CENTRU EXTERNAT 2                                               113    58    55   51.33   5.59
328   BALTI          BALTI               LICEUL TEORETIC "N.GOGOL"                                        59    30    29   50.85   6.58
329   ŞTEFAN VODĂ    CROCMAZ             LICEUL TEORETIC "ECATERINA MALCOCI"                              75    38    37   50.67   6.12
330   STRĂŞENI       ROMĂNEŞTI           INSTITUŢIA PUBLICĂ LICEUL TEORETIC ROMĂNEŞTI                     22    11    11   50.00   6.57
331   GAGAUZIA   COMRAT              LICEUL TEORETIC "N.TRETIACOV"                                    26    13    13   50.00   6.28
332   GLODENI        HÎJDIENI            LICEUL TEORETIC HÎJDIENI                                         30    15    15   50.00   6.05
333   BRICENI        LARGA               Liceul Teoretic Larga                                            64    32    32   50.00   6.02
334   LEOVA          TOMAI               Liceul Teoretic "Mihai Viteazu"                                  10     5     5   50.00   5.20
335   CHISINAU       CHISINAU            CENTRU EXTERNAT 3                                                87    43    44   49.43   6.03
336   CHISINAU       CENTRU     Liceul Teoretic cu profil de arte "Nicolae Sulac"                53    26    27   49.06   6.49
337   CAHUL          BRÎNZA              Liceul Teoretic "Academicianul Ion Bostan"                       47    23    24   48.94   6.29
338   CHISINAU       CENTRU     Instituţia Publică Liceul Teoretic "Universul"                   76    37    39   48.68   5.90
339   GAGAUZIA   CHIRSOVA            Liceul Teoretic "M.I. TUZLOV"                                    31    15    16   48.39   6.49
340   IALOVENI       SURUCENI            Liceul Teoretic "Ion Suruceanu"                                  60    29    31   48.33   5.97
341   BRICENI        TABANI              Liceul Teoretic Tabani                                           25    12    13   48.00   6.42
342   CHISINAU       BĂCIOI              Instituţia Publică Liceul Teoretic "Grigore Vieru"               61    29    32   47.54   6.09
343   EDINET         ZĂBRICENI           Instituţie Publică Liceul Teoretic "V.Topală"                    17     8     9   47.06   6.00
344   CHISINAU       BUIUCANI   Liceul Teoretic European                                         80    37    43   46.25   6.05
345   FĂLEŞTI        SCUMPIA             INSTITUŢIA PUBLICĂ LICEUL TEORETIC "V.ALECSANDRI"                11     5     6   45.45   5.30
346   CHISINAU       BOTANICA   Liceul Teoretic cu profil sportiv nr.3                           40    18    22   45.00   6.22
347   DROCHIA        SOFIA               Instituţia Publică Liceul Teoretic "Viorel Cantemir"             18     8    10   44.44   6.47
348   BASARABEASCA   BASARABEASCA        LICEUL TEORETIC "ALEXANDR PUŞKIN"                                27    12    15   44.44   6.42
349   ŞTEFAN VODĂ    OLĂNEŞTI            INSTITUŢIA PUBLICĂ LICEUL TEORETIC "BOGDAN PETRICEICU HAŞDEU"    45    20    25   44.44   5.78
350   HÎNCEŞTI       CRASNOARMEISCOE     Liceul Teoretic "Dimitrie Cantemir"                              34    15    19   44.12   6.52
351   SÎNGEREI       RĂDOAIA             LICEUL TEORETIC "ION CREANGĂ"                                    68    30    38   44.12   6.21
352   EDINET         BRĂTUŞENI           Instituţie Publică Liceul Teoretic Brătuşeni                     25    11    14   44.00   6.38
353   ORHEI          PERESECINA          INSTITUŢIA PUBLICĂ LICEUL TEORETIC "ALEXANDRU DONICI"            64    28    36   43.75   5.96
354   CHISINAU       BOTANICA   Liceul teoretic seral nr.2                                      280   122   158   43.57   5.80
355   STRĂŞENI       STRĂŞENI            INSTITUŢIA PUBLICĂ LICEUL TEORETIC "NICOLAI NEKRASOV"            46    20    26   43.48   6.16
356   REZINA         CUIZĂUCA            Instituţie Publică Liceul Teoretic "Ion Creangă"                 23   10    13   43.48   6.10
357   CHISINAU       CENTRU     Liceul teoretic seral nr.1                                      223   96   127   43.05   5.65
358   CHISINAU       BUBUIECI            Instituţia Publică Liceul Teoretic "Toader Bubuiog"              63   27    36   42.86   6.18
359   IALOVENI       RUSEŞTII NOI        Liceul Teoretic Ruseştii Noi                                     26   11    15   42.31   6.48
360   BRICENI        COTIUJENI           Liceul Teoretic Cotiujeni                                        19    8    11   42.11   5.47
361   CHISINAU       CHISINAU            Liceul Teoretic Agricol al UASM                                 110   46    64   41.82   6.35
362   CIMIŞLIA       MIHAILOVCA          Instituţia Publică LICEUL TEORETIC "ŞTEFAN CEL MARE"             37   15    22   40.54   5.77
363   HÎNCEŞTI       CIUCIULENI          Liceul Teoretic "A. Donici"                                      35   14    21   40.00   6.00
364   GAGAUZIA   BAURCI              LICEUL TEORETIC BAURCI                                           10    4     6   40.00   5.75
365   FĂLEŞTI        RĂUŢEL              INSTITUŢIA PUBLICĂ LICEUL TEORETIC "A.MATEEVICI"                  5    2     3   40.00   5.50
366   ŞOLDĂNEŞTI     ŞOLDĂNEŞTI          Instituţie Publică Liceul teoretic "Ştefan cel Mare"             30   12    18   40.00   5.46
367   BRICENI        DREPCĂUŢI           Liceul Teoretic Drepcăuţi                                         5    2     3   40.00   5.13
368   DUBĂSARI       MOLOVATA            Liceul Teoretic "Ştefan cel Mare"                                 5    2     3   40.00   5.13
369   CHISINAU       BOTANICA   Instituţia Publică Liceul Teoretic "Tudor Vladimirescu"         193   77   116   39.90   5.73
370   ŞOLDĂNEŞTI     COTIUJENII MARI     Instituţie Publică Liceul teoretic Cotiujenii Mari               41   16    25   39.02   5.91
371   CIMIŞLIA       SELEMET             Instituţia Publică LICEUL TEORETIC "SERGIU COIPAN"               31   12    19   38.71   5.67
372   GAGAUZIA   CIŞMICHIOI          LICEUL TEORETIC CIŞMICHIOI                                       13    5     8   38.46   6.16
373   GLODENI        DANU                LICEUL TEORETIC DANU                                             24    9    15   37.50   6.13
374   ŞTEFAN VODĂ    TALMAZA             INSTITUŢIA PUBLICĂ LICEUL TEORETIC "ŞTEFAN CIOBANU"              48   18    30   37.50   5.90
375   BRICENI        BELEAVINŢI          Liceul Teoretic Beleavinţi                                       35   13    22   37.14   5.96
376   CHISINAU       DURLEŞTI            Liceul Teoretic "Durleşti"                                       35   13    22   37.14   5.79
377   CAUSENI        SĂLCUŢA             LICEUL TEORETIC "M.MANOLE"                                       27   10    17   37.04   6.50
378   EDINET         TRINCA              Instituţie Publică Liceul Teoretic Trinca                        19    7    12   36.84   5.82
379   BRICENI        GRIMĂNCĂUŢI         Liceul Teoretic Grimăncăuţi                                      30   11    19   36.67   6.00
380   GAGAUZIA   COMRAT              LICEUL REGIONAL-INTERNAT SPORTIV                                 14    5     9   35.71   6.12
381   FĂLEŞTI        NĂVÎRNEŢ            INSTITUŢIA PUBLICĂ LICEUL TEORETIC "ŞTEFAN CEL MARE ŞI SFÎNT"    17    6    11   35.29   6.04
382   CIMIŞLIA       CIMIŞLIA            Instituţia Publică LICEUL TEORETIC "MIHAI VITEAZUL"              60   21    39   35.00   6.23
383   FLOREŞTI       FRUMUŞICA           Liceul Teoretic Frumuşica                                        29   10    19   34.48   5.85
384   GAGAUZIA   CIOC MAIDAN         LICEUL TEORETIC FIODOR IANIOGLO                                   9    3     6   33.33   5.80
385   CAHUL          ZÎRNEŞTI            Liceul Teoretic "Ion Creangă"                                     3    1     2   33.33   5.50
386   GAGAUZIA   COMRAT              LICEUL TEORETIC "D.MAVRODI"                                      15    5    10   33.33   5.48
387   SÎNGEREI       SÎNGEREI            LICEUL TEORETIC "D.CANTEMIR"                                      6    2     4   33.33   5.10
388   CANTEMIR       COCIULIA            Instituţia publică Liceul teoretic "Valeriu Hanganu"             19    6    13   31.58   5.58
389   CAHUL          CRIHANA VECHE       Liceul Teoretic "M.Eminescu"                                     20    6    14   30.00   5.38
390   CANTEMIR       GOTEŞTI             Instituţia publică Liceul Teoretic "Vasile Pârvan"               17    5    12   29.41   5.10
391   REZINA         REZINA              Instituţia Publică Liceul Teoretic "A. Puşkin"                   22    6    16   27.27   6.70
392   GAGAUZIA   DEZGHINGEA          Liceul Teoretic DEZGHINGEA                                        4    1     3   25.00   6.00
393   BASARABEASCA   BAŞCALIA            LICEUL TEORETIC "MARCU TARLEV"                                    8    2     6   25.00   5.00
394   CAUSENI        COPANCA             LICEUL TEORETIC "V.ALECSANDRI"                                    4    1     3   25.00   5.00
395   REZINA         PECIŞTE             Instituţie Publică Liceul Teoretic Pecişte                       41   10    31   24.39   5.98
396   ANENIINOI     GURA BÎCULUI        Instituţie PublicăLiceul Teoretic Gura Bîcului                   21    5    16   23.81   5.80
397   GAGAUZIA   TOMAI               LICEUL TEORETIC TOMAI                                             9    2     7   22.22   5.70
398   CAUSENI        CAUSENI             LICEUL TEORETIC "D.CANTEMIR"                                      5    1     4   20.00   5.25
399   ŞTEFAN VODĂ    VOLINTIRI           INSTITUŢIA PUBLICĂ LICEUL TEORETIC "MARIA BIEŞU"                 16    3    13   18.75   5.50
400   SÎNGEREI       BIRUINŢA            LICEUL TEORETIC "LUCEAFĂRUL"                                     11    2     9   18.18   5.25
401   CHISINAU       CHISINAU            CENTRU EXTERNAT 1                                               112   19    93   16.96   5.67
402   BRICENI        TREBISĂUŢI          Liceul Teoretic Trebisăuţi                                       24    4    20   16.67   6.50
403   CHISINAU       BUDEŞTI             Instituţia Publică Liceul Teoretic "Budeşti"                     12    2    10   16.67   6.00
404   ŞOLDĂNEŞTI     RĂSPOPENI           Instituţie Publică Liceul teoretic Răspopeni                      6    1     5   16.67   5.50
405   HÎNCEŞTI       HÎNCEŞTI            Liceul Teoretic "M. Lomonosov"                                    8    1     7   12.50   6.60
406   BALTI          BALTI               Instituţia de Învăţămînt Privat LICEUL"ELITEX"                   10    1     9   10.00   5.00
407   CAUSENI        CAUSENI             LICEUL TEORETIC "ION CREANGĂ"                10   1    9   10.00   5.00
408   CAUSENI        CHIRCĂIEŞTI         LICEUL TEORETIC "M.VITEAZUL"                 11   1   10    9.09   5.00
409   BASARABEASCA   SADACLIA            LICEUL TEORETIC " MIHAI EMINESCU"             4    0    4    0.00   0
410   BRICENI        CARACUŞENII VECHI   Liceul Teoretic Caracuşenii Vechi             7   0    7    0.00   0
411   CAUSENI        CÎRNĂŢENI           LICEUL TEORETIC "Gr.GRIGORIU"                 2   0    2    0.00   0
412   HÎNCEŞTI       LEUŞENI             Liceul Teoretic "Cezar Radu"                  6   0    6    0.00   0
413   NISPORENI      SELIŞTE             Instituţia Publică Liceul Teoretic Selişte    4   0    4    0.00   0
414   GAGAUZIA   BEŞALMA             LICEUL TEORETIC M. CHIOSEA                    4   0    4    0.00   0
415   GAGAUZIA   BEŞGHIOZ            LICEUL TEORETIC BEŞGHIOZ                      6   0    6    0.00   0
416   GAGAUZIA   CAZACLIA            LICEUL TEORETIC CAZACLIA                      1   0    1    0.00   0
417   GAGAUZIA   SVETLÎI             LICEUL TEORETIC SVETLÎI                       3   0    3    0.00   0
`;

module.exports = bac2015;
