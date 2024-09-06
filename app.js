let versiculosPorSituacao = {
    "Ansiedade": ["Filipenses 4:6-7 - Não andeis ansiosos por coisa alguma; em tudo, porém, sejam conhecidas, diante de Deus, as vossas petições, pela oração e pela súplica, com ações de graças.", "Mateus 6:34 - Portanto, não vos inquieteis com o dia de amanhã, pois o amanhã trará os seus cuidados; basta ao dia o seu próprio mal."],
    "Tristeza": ["Salmo 34:18 - O Senhor está perto dos que têm o coração quebrantado e salva os de espírito abatido.", "João 16:22 - Agora, vós tendes tristeza; mas outra vez vos verei; o vosso coração se alegrará, e a vossa alegria ninguém poderá tirar."],
    "Depressão": ["Salmo 42:5 - Por que estás abatida, ó minha alma? Por que te perturbas dentro de mim? Espera em Deus, pois ainda o louvarei; ele é a minha salvação e o meu Deus.", "Isaías 41:10 - Não temas, porque eu sou contigo; não te assombres, porque eu sou teu Deus; eu te fortaleço, e te ajudo, e te sustento com a destra da minha justiça."],
    "Medo": ["Salmo 23:4 - Ainda que eu ande pelo vale da sombra da morte, não temerei mal algum, porque tu estás comigo; a tua vara e o teu cajado me consolam.", "2 Timóteo 1:7 - Porque Deus não nos deu o espírito de temor, mas de fortaleza, e de amor, e de moderação."],
    "Insegurança": ["Provérbios 3:5-6 - Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento. Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas.", "Salmo 56:3 - Em qualquer tempo em que eu temer, confiarei em ti."],
    "Estresse": ["Salmo 91:1-2 - Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará. Direi do Senhor: Ele é o meu refúgio e a minha fortaleza, o meu Deus, em quem confio.", "Mateus 11:28-30 - Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei. Tomai sobre vós o meu jugo, e aprendei de mim, que sou manso e humilde de coração, e encontrareis descanso para as vossas almas. Porque o meu jugo é suave e o meu fardo é leve."],
    "Solidão": ["Salmo 23:1-3 - O Senhor é o meu pastor; nada me faltará. Deitar-me faz em verdes pastos, guia-me mansamente a águas tranquilas. Refrigera a minha alma; guia-me pelas veredas da justiça, por amor do seu nome.", "Mateus 28:20 - Ensinando-os a guardar todas as coisas que eu vos tenho mandado; e eis que eu estou convosco todos os dias, até a consumação dos séculos. Amém."],
    "Culpa": ["Salmo 32:5 - Confessei-te o meu pecado e não encobri a minha iniquidade. Disse: confessarei ao Senhor as minhas transgressões; e tu perdoaste a iniquidade do meu pecado.", "1 João 1:9 - Se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar os pecados, e nos purificar de toda a injustiça."],
    "Desesperança": ["Romanos 15:13 - Que o Deus da esperança vos encha de toda a alegria e paz na fé, para que abundeis em esperança pelo poder do Espírito Santo.", "Jeremias 29:11 - Porque eu bem sei os pensamentos que tenho a vosso respeito, diz o Senhor; pensamentos de paz, e não de mal, para vos dar o fim que esperais."],
    "Insônia": ["Salmo 4:8 - Em paz me deitarei e logo dormirei, porque só tu, Senhor, me fazes habitar em segurança.", "Provérbios 3:24 - Quando te deitares, não temerás; deitar-te-ás, e o teu sono será suave."],
    "Preocupação": ["1 Pedro 5:7 - Lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós."],
    "medo": [
    "Isaías 41:10 - Não temas, porque eu sou contigo; não te assombres, porque eu sou teu Deus; eu te fortaleço, e te ajudo, e te sustento com a destra da minha justiça.",
    "Salmos 27:1 - O Senhor é a minha luz e a minha salvação; a quem temerei? O Senhor é a força da minha vida; de quem me recearei?"
  ],
  "perseverança": [
    "Romanos 5:3-4 - E não somente isso, mas também nos gloriamos nas tribulações; sabendo que a tribulação produz a perseverança, e a perseverança a experiência, e a experiência a esperança.",
    "Gálatas 6:9 - E não nos cansemos de fazer o bem, porque a seu tempo ceifaremos, se não houvermos desfalecido."
  ],
  "amor ao próximo": [
    "João 13:34 - Um novo mandamento vos dou: que vos ameis uns aos outros; assim como eu vos amei, que também vos ameis uns aos outros.",
    "1 João 4:7 - Amados, amemo-nos uns aos outros, porque o amor é de Deus; e todo aquele que ama é nascido de Deus e conhece a Deus."
  ],
  "sabedoria": [
    "Provérbios 3:13 - Bem-aventurado o homem que acha sabedoria, e o homem que adquire conhecimento.",
    "Tiago 1:5 - E, se algum de vós tem falta de sabedoria, peça-a a Deus, que a todos dá liberalmente, e o não lança em rosto, e ser-lhe-á dada."
  ],
  "família": [
    "Efésios 6:1-2 - Vós, filhos, sede obedientes a vossos pais no Senhor, pois isto é justo. Honra a teu pai e a tua mãe, que é o primeiro mandamento com promessa.",
    "Colossenses 3:13 - Suportando-vos uns aos outros, e perdoando-vos uns aos outros, se alguém tiver queixa contra outro; assim como Cristo vos perdoou, assim fazei vós também."
  ],
  "gratitude": [
    "1 Tessalonicenses 5:18 - Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco.",
    "Colossenses 3:15 - E a paz de Deus, para a qual também fostes chamados em um corpo, domine em vossos corações; e sede agradecidos."
  ],
  "coragem": [
    "Deuteronômio 31:6 - Sede fortes e corajosos, não temais, nem vos atemorizeis diante deles, porque o Senhor, vosso Deus, é quem vai convosco; não vos deixará, nem vos desamparará.",
    "Josué 1:9 - Não to mandei eu? Esforça-te e tem bom ânimo; não temas, nem te espantes, porque o Senhor teu Deus é contigo, por onde quer que andares."
  ],
  "amizade": [
    "Provérbios 17:17 - Em todo tempo ama o amigo e na angústia nasce o irmão.",
    "João 15:13 - Ninguém tem maior amor do que este: de dar alguém a sua vida pelos seus amigos."
  ],
  "paciência": [
    "Salmos 37:7 - Descansa no Senhor e espera nele; não te irrites por causa dos que prosperam em seu caminho, por causa do homem que executa astutos intentos.",
    "Tiago 5:8 - Sede vós também pacientes, fortalecei os vossos corações, porque já a vinda do Senhor está próxima."
  ],
  "humildade": [
    "Filipenses 2:3 - Nada façais por contenda ou por vanglória, mas por humildade; cada um considere os outros superiores a si mesmo.",
    "Provérbios 22:4 - O galardão da humildade e do temor do Senhor são riquezas, honra e vida."
  ],
  "esperança": [
    "Romanos 15:13 - Ora, o Deus de esperança vos encha de todo o gozo e paz em crença, para que abundeis em esperança, pelo poder do Espírito Santo.",
    "Salmos 42:11 - Por que estás abatida, ó minha alma, e por que te perturbas dentro de mim? Espera em Deus, pois ainda o louvarei, a ele, meu auxílio e Deus meu."
  ],
  "fé": [
    "Hebreus 11:1 - Ora, a fé é o firme fundamento das coisas que se esperam, e a prova das coisas que se não veem.",
    "Marcos 11:24 - Por isso vos digo que tudo o que pedirdes em oração, crede que o recebereis, e tê-lo-eis."
  ],
  "força": [
    "Isaías 40:31 - Mas os que esperam no Senhor renovarão as suas forças; subirão com asas como águias; correrão, e não se cansarão; caminharão, e não se fatigarão.",
    "Filipenses 4:13 - Posso todas as coisas naquele que me fortalece."
  ],
  "bondade": [
    "Efésios 4:32 - Antes, sede uns para com os outros benignos, misericordiosos, perdoando-vos uns aos outros, como também Deus vos perdoou em Cristo.",
    "Gálatas 6:10 - Então, enquanto temos tempo, façamos bem a todos, mas principalmente aos domésticos da fé."
  ],
  "perdão": [
    "Mateus 6:14 - Porque, se perdoardes aos homens as suas ofensas, também vosso Pai celeste vos perdoará;",
    "Colossenses 3:13 - Suportando-vos uns aos outros, e perdoando-vos uns aos outros, se alguém tiver queixa contra outro; assim como Cristo vos perdoou, assim fazei vós também."
  ],
  "liderança": [
    "Provérbios 11:14 - Não havendo sábia direção, o povo cai, mas na multidão de conselheiros há segurança.",
    "1 Timóteo 3:1 - Esta é uma palavra fiel: se alguém deseja o episcopado, excelente obra deseja."
  ],
  "compaixão": [
    "Lucas 6:36 - Sede, pois, misericordiosos, como também vosso Pai é misericordioso.",
    "Colossenses 3:12 - Revesti-vos, pois, como eleitos de Deus, santos e amados, de entranhas de misericórdia, de benignidade, humildade, mansidão, longanimidade."
  ],
  "sinceridade": [
    "2 Coríntios 1:12 - Porque a nossa glória é esta: o testemunho da nossa consciência, de que com simplicidade e sinceridade de Deus, não com sabedoria carnal, mas na graça de Deus, temos vivido no mundo, e de modo particular convosco.",
    "Provérbios 12:22 - Os lábios mentirosos são abomináveis ao Senhor, mas os que agem fielmente são o seu deleite."
  ],
  "paz": [
    "João 14:27 - Deixo-vos a paz, a minha paz vos dou; não vo-la dou como o mundo a dá. Não se turbe o vosso coração, nem se atemorize.",
    "Filipenses 4:7 - E a paz de Deus, que excede todo o entendimento, guardará os vossos corações e os vossos pensamentos em Cristo Jesus."
  ],
  "procrastinação": [
    "Provérbios 6:9 - Ó preguiçoso, até quando ficarás deitado? Quando te levantarás do teu sono?",
    "Eclesiastes 11:4 - Quem observa o vento nunca semeará, e o que olha para as nuvens nunca segará."
  ],
  "justiça": [
    "Isaías 1:17 - Aprendam a fazer o bem; busquem a justiça, repreendam o opressor; defendam o direito dos órfãos, pleiteiem a causa das viúvas.",
    "Mateus 5:6 - Bem-aventurados os que têm fome e sede de justiça, porque eles serão fartos."
  ],
  "liderança servidora":
    ["Mateus 23:11 - Mas o maior dentre vós será vosso servo." ],

          "paciência": [
          "Romanos 12:12 - Alegrai-vos na esperança, sede pacientes na tribulação, perseverai na oração."
        ],
        "sabedoria": [
          "Provérbios 4:7 - A sabedoria é a coisa principal; adquire, pois, a sabedoria; sim, com tudo o que possuis, adquire o entendimento."
        ],
        "alegria": [
          "Salmos 16:11 - Tu me farás ver os caminhos da vida; na tua presença há plenitude de alegria, à tua direita, delícias perpetuamente."
        ],
        "integridade": [
          "Provérbios 10:9 - Quem anda em integridade anda seguro; mas o que perverte os seus caminhos será conhecido."
        ],
        "pureza": [
          "Mateus 5:8 - Bem-aventurados os limpos de coração, porque eles verão a Deus."
        ],
        "auto-controle": [
          "Gálatas 5:23 - Mansidão, temperança; contra estas coisas não há lei."
        ],
        "sabedoria divina": [
          "Tiago 3:17 - Mas a sabedoria que do alto vem é primeiramente pura, depois pacífica, moderada, tratável, cheia de misericórdia e de bons frutos, sem parcialidade e sem hipocrisia."
        ],
        "disciplina": [
          "Provérbios 12:1 - Quem ama a disciplina ama o conhecimento, mas o que odeia a repreensão é estúpido."
        ],
        "empatia": [
          "Romanos 12:15 - Alegrai-vos com os que se alegram; chorai com os que choram."
        ],
        "fé inabalável": [
          "Mateus 17:20 - Em verdade vos digo que, se tiverdes fé como um grão de mostarda, direis a este monte: Passa daqui para acolá, e ele passará; e nada vos será impossível."
        ],
        "trabalho": [
          "Colossenses 3:23 - E tudo quanto fizerdes, fazei-o de coração, como ao Senhor e não aos homens."
        ],
        "perseverança": [
          "Hebreus 10:36 - Porque necessitais de paciência, para que, depois de haverdes feito a vontade de Deus, possais alcançar a promessa."
        ],
        "diligência": [
          "Provérbios 13:4 - A alma do preguiçoso deseja e coisa nenhuma alcança, mas a alma dos diligentes se farta."
        ],
        "coragem": [
          "Salmos 31:24 - Esforçai-vos, e ele fortalecerá o vosso coração, vós todos que esperais no Senhor."
        ],
        "humildade": [
          "Provérbios 22:4 - O galardão da humildade e do temor do Senhor são riquezas, honra e vida."
        ],
        "honestidade": [
          "Provérbios 12:22 - Os lábios mentirosos são abomináveis ao Senhor, mas os que agem fielmente são o seu deleite."
        ],
        "domínio próprio": [
          "2 Timóteo 1:7 - Porque Deus não nos deu o espírito de temor, mas de fortaleza, e de amor, e de moderação."
        ],
        "caridade": [
          "1 Coríntios 13:13 - Agora, pois, permanecem a fé, a esperança e o amor, estes três, mas o maior destes é o amor."
        ],
        "esperança": [
          "Romanos 15:13 - Ora, o Deus de esperança vos encha de todo o gozo e paz em crença, para que abundeis em esperança, pelo poder do Espírito Santo."
        ],
        "oração": [
          "Filipenses 4:6 - Não estejais inquietos por coisa alguma; antes as vossas petições sejam em tudo conhecidas diante de Deus pela oração e súplicas, com ação de graças."
        ],
        "perdão": [
          "Efésios 4:32 - Antes, sede uns para com os outros benignos, misericordiosos, perdoando-vos uns aos outros, como também Deus vos perdoou em Cristo."
        ],
        "amizade": [
          "Provérbios 18:24 - O homem que tem muitos amigos pode congratular-se, mas há amigo mais chegado do que um irmão."
        ],
        "respeito": [
          "1 Pedro 2:17 - Honrai a todos. Amai a fraternidade. Temei a Deus. Honrai ao rei."
        ],
        "longanimidade": [
          "Provérbios 14:29 - O longânimo é grande em entendimento, mas o que é de espírito impaciente mostra a sua insensatez."
        ],
        "fortaleza": [
          "Isaías 41:10 - Não temas, porque eu sou contigo; não te assombres, porque eu sou teu Deus; eu te fortaleço, e te ajudo, e te sustento com a destra da minha justiça."
        ],
        "bondade": [
          "Efésios 4:32 - Antes, sede uns para com os outros benignos, misericordiosos, perdoando-vos uns aos outros, como também Deus vos perdoou em Cristo."
        ],
        "alegria na tribulação": [
          "Romanos 12:12 - Alegrai-vos na esperança, sede pacientes na tribulação, perseverai na oração."
        ],
        "fé constante": [
          "2 Coríntios 5:7 - (Porque andamos por fé, e não por vista)."
        ],
        "mansidão": [
          "Mateus 5:5 - Bem-aventurados os mansos, porque eles herdarão a terra."
        ],
        "cura": [
          "Isaías 53:5 - Mas ele foi ferido pelas nossas transgressões, e moído pelas nossas iniquidades; o castigo que nos traz a paz estava sobre ele, e pelas suas pisaduras fomos sarados."
        ],
        "proteção": [
          "Salmos 91:11 - Porque aos seus anjos dará ordem a teu respeito, para te guardarem em todos os teus caminhos."
        ],
        "liberdade": [
          "Gálatas 5:1 - Estai, pois, firmes na liberdade com que Cristo nos libertou, e não torneis a colocar-vos debaixo do jugo da servidão."
        ],
        "tristeza": [
          "Salmos 34:18 - Perto está o Senhor dos que têm o coração quebrantado, e salva os contritos de espírito."
        ],
        "justiça": [
          "Mateus 5:6 - Bem-aventurados os que têm fome e sede de justiça, porque eles serão fartos."
        ],
        "compaixão": [
          "Efésios 4:32 - Antes, sede uns para com os outros benignos, misericordiosos, perdoando-vos uns aos outros, como também Deus vos perdoou em Cristo."
        ],
        "confiança": [
          "Provérbios 3:5 - Confia no Senhor de todo o teu coração, e não te estribes no teu próprio entendimento."
        ],
        "gratidão": [
          "1 Tessalonicenses 5:18 - Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco."
        ],
        "traição": [
          "Salmos 55:12 - Não era um inimigo que me afrontava; então eu o teria suportado; nem era o que me odiava que se engrandecia contra mim, porque dele me teria escondido."
        ],
        "justiça divina": [
          "Isaías 61:8 - Porque eu, o Senhor, amo o juízo, e odeio a iniquidade do roubo; dar-lhes-ei fielmente a sua recompensa, e farei uma aliança eterna com eles."
        ],
        "adoração": [
          "João 4:24 - Deus é Espírito, e importa que os que o adoram o adorem em espírito e em verdade."
        ],
        "meditação": [
          "Salmos 19:14 - Sejam agradáveis as palavras da minha boca e a meditação do meu coração perante a tua face, Senhor, rocha minha e redentor meu."
        ],
        "liderança": [
          "Tiago 1:5 - E, se algum de vós tem falta de sabedoria, peça-a a Deus, que a todos dá liberalmente, e o não lança em rosto, e ser-lhe-á dada."
        ],
        "tentação": [
          "1 Coríntios 10:13 - Não veio sobre vós tentação, senão humana; mas fiel é Deus, que vos não deixará tentar acima do que podeis, antes, com a tentação, dará também o escape, para que a possais suportar."
        ],
        "redenção": [
          "Colossenses 1:14 - Em quem temos a redenção pelo seu sangue, a saber, a remissão dos pecados."
        ],
        "generosidade": [
          "2 Coríntios 9:6 - E digo isto: Que o que semeia pouco, pouco também ceifará; e o que semeia em abundância, em abundância ceifará."
        ],
        "contentamento": [
          "Filipenses 4:11 - Não digo isto como por necessidade, porque já aprendi a contentar-me com o que tenho."
        ],
        "amor": [
          "1 João 4:16 - E nós conhecemos, e cremos no amor que Deus nos tem. Deus é amor, e quem permanece em amor permanece em Deus, e Deus nele."
        ],
        "compromisso": [
          "Salmos 37:5 - Entrega o teu caminho ao Senhor; confia nele, e ele o fará."
        ],
        "autossuficiência": [
          "Filipenses 4:13 - Posso todas as coisas em Cristo que me fortalece."
        ],
        "temor do Senhor": [
          "Provérbios 1:7 - O temor do Senhor é o princípio do conhecimento; os loucos desprezam a sabedoria e a instrução."
        ],
        "obediência": [
              "João 14:15 - Se me amais, guardai os meus mandamentos."
            ],
            "paz": [
              "João 14:27 - Deixo-vos a paz, a minha paz vos dou; não vo-la dou como o mundo a dá. Não se turbe o vosso coração, nem se atemorize."
            ],
            "confissão": [
              "1 João 1:9 - Se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar os pecados, e nos purificar de toda a injustiça."
            ],
            "justificação": [
              "Romanos 5:1 - Sendo, pois, justificados pela fé, temos paz com Deus, por nosso Senhor Jesus Cristo."
            ],
            "luz": [
              "Mateus 5:14 - Vós sois a luz do mundo; não se pode esconder uma cidade edificada sobre um monte."
            ],
            "santidade": [
              "1 Pedro 1:16 - Porquanto está escrito: Sede santos, porque eu sou santo."
            ],
            "fé em Cristo": [
              "João 3:16 - Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna."
            ],
            "libertação": [
              "Salmos 34:17 - Os justos clamam, e o Senhor os ouve, e os livra de todas as suas angústias."
            ],
            "fortaleza espiritual": [
              "Efésios 6:10 - No demais, irmãos meus, fortalecei-vos no Senhor e na força do seu poder."
            ],
            "compaixão divina": [
              "Lamentações 3:22 - As misericórdias do Senhor são a causa de não sermos consumidos, porque as suas misericórdias não têm fim."
            ],
            "soberania": [
              "Salmos 103:19 - O Senhor tem estabelecido o seu trono nos céus, e o seu reino domina sobre tudo."
            ],
            "redenção pelo sangue": [
              "Hebreus 9:12 - Nem por sangue de bodes e bezerros, mas por seu próprio sangue, entrou uma vez no santuário, havendo efetuado uma eterna redenção."
            ],
            "salvação": [
              "Atos 4:12 - E em nenhum outro há salvação, porque também debaixo do céu nenhum outro nome há, dado entre os homens, pelo qual devamos ser salvos."
            ],
            "devoção": [
              "Romanos 12:1 - Rogo-vos, pois, irmãos, pela compaixão de Deus, que apresenteis os vossos corpos em sacrifício vivo, santo e agradável a Deus, que é o vosso culto racional."
            ],
            "esperança em Deus": [
              "Salmos 42:11 - Por que estás abatida, ó minha alma? E por que te perturbas dentro de mim? Espera em Deus, pois ainda o louvarei, o qual é a salvação da minha face e o meu Deus."
            ],
            "reconciliação": [
              "2 Coríntios 5:18 - E tudo isto provém de Deus, que nos reconciliou consigo mesmo por Jesus Cristo, e nos deu o ministério da reconciliação."
            ],
            "oração fervorosa": [
              "Tiago 5:16 - Confessai as vossas culpas uns aos outros, e orai uns pelos outros, para que sareis; a oração feita por um justo pode muito em seus efeitos."
            ],
            "alegria espiritual": [
              "Filipenses 4:4 - Regozijai-vos sempre no Senhor; outra vez digo, regozijai-vos."
            ],
            "verdade": [
              "João 8:32 - E conhecereis a verdade, e a verdade vos libertará."
            ],
            "guia divino": [
              "Salmos 32:8 - Instruir-te-ei, e ensinar-te-ei o caminho que deves seguir; guiar-te-ei com os meus olhos."
            ],
            "resiliência": [
              "2 Coríntios 4:8-9 - Em tudo somos atribulados, mas não angustiados; perplexos, mas não desanimados; perseguidos, mas não desamparados; abatidos, mas não destruídos."
            ],
            "pureza espiritual": [
              "1 João 3:3 - E qualquer que nele tem esta esperança purifica-se a si mesmo, como também ele é puro."
            ],
            "amizade fiel": [
              "Provérbios 27:9 - O óleo e o perfume alegram o coração; assim o faz a doçura do amigo pelo conselho cordial."
            ],
            "segurança": [
              "Provérbios 18:10 - Torre forte é o nome do Senhor; para ela correrá o justo, e estará em alto refúgio."
            ],
            "adoração verdadeira": [
              "Romanos 12:1 - Rogo-vos, pois, irmãos, pela compaixão de Deus, que apresenteis os vossos corpos em sacrifício vivo, santo e agradável a Deus, que é o vosso culto racional."
            ],
            "misericórdia": [
              "Miqueias 6:8 - Ele te declarou, ó homem, o que é bom; e que é o que o Senhor pede de ti, senão que pratiques a justiça, e ames a misericórdia, e andes humildemente com o teu Deus?"
            ],
            "refúgio": [
              "Salmos 46:1 - Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia."
            ],
            "amizade com Deus": [
              "Tiago 2:23 - E cumpriu-se a Escritura que diz: E creu Abraão em Deus, e foi-lhe isso imputado como justiça, e foi chamado amigo de Deus."
            ],
            "oração constante": [
              "1 Tessalonicenses 5:17 - Orai sem cessar."
            ],
            "benignidade": [
              "Colossenses 3:12 - Revesti-vos, pois, como eleitos de Deus, santos e amados, de entranhas de misericórdia, de benignidade, humildade, mansidão, longanimidade."
            ],
            "alegria na salvação": [
              "Salmos 51:12 - Torna a dar-me a alegria da tua salvação, e sustém-me com um espírito voluntário."
            ],
            "contentamento espiritual": [
              "1 Timóteo 6:6 - Mas é grande ganho a piedade com contentamento."
            ],
            "renovação da mente": [
              "Romanos 12:2 - E não sede conformados com este mundo, mas sede transformados pela renovação do vosso entendimento, para que experimenteis qual seja a boa, agradável, e perfeita vontade de Deus."
            ],
            "conforto": [
              "2 Coríntios 1:3-4 - Bendito seja o Deus e Pai de nosso Senhor Jesus Cristo, o Pai das misericórdias e o Deus de toda consolação, que nos consola em toda a nossa tribulação."
            ],
            "sabedoria prática": [
              "Tiago 1:5 - E, se algum de vós tem falta de sabedoria, peça-a a Deus, que a todos dá liberalmente, e o não lança em rosto, e ser-lhe-á dada."
            ],
            "graça": [
              "Efésios 2:8 - Porque pela graça sois salvos, por meio da fé; e isso não vem de vós; é dom de Deus."
            ],
            "amor ao próximo": [
              "Marcos 12:31 - E o segundo, semelhante a este, é: Amarás o teu próximo como a ti mesmo. Não há outro mandamento maior do que estes."
            ],
            "poder de Deus": [
              "Efésios 3:20 - Ora, àquele que é poderoso para fazer tudo muito mais abundantemente além daquilo que pedimos ou pensamos, segundo o poder que em nós opera."
            ],
            "vida eterna": [
              "Romanos 6:23 - Porque o salário do pecado é a morte, mas o dom gratuito de Deus é a vida eterna, por Cristo Jesus nosso Senhor."
            ],
            "júbilo": [
              "Isaías 12:3 - E vós com alegria tirareis águas das fontes da salvação."
            ],
            "libertação do pecado": [
              "Romanos 6:14 - Porque o pecado não terá domínio sobre vós, pois não estais debaixo da lei, mas debaixo da graça."
            ],
            "aliança": [
              "Hebreus 8:10 - Porque este é o pacto que farei com a casa de Israel depois daqueles dias, diz o Senhor: Porei as minhas leis no seu entendimento, e em seu coração as escreverei; e eu lhes serei por Deus, e eles me serão por povo."
            ],
            "obediência": [
                  "João 14:15 - Se me amais, guardai os meus mandamentos."
                ],
                "paz": [
                  "João 14:27 - Deixo-vos a paz, a minha paz vos dou; não vo-la dou como o mundo a dá. Não se turbe o vosso coração, nem se atemorize."
                ],
                "confissão": [
                  "1 João 1:9 - Se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar os pecados, e nos purificar de toda a injustiça."
                ],
                "justificação": [
                  "Romanos 5:1 - Sendo, pois, justificados pela fé, temos paz com Deus, por nosso Senhor Jesus Cristo."
                ],
                "luz": [
                  "Mateus 5:14 - Vós sois a luz do mundo; não se pode esconder uma cidade edificada sobre um monte."
                ],
                "santidade": [
                  "1 Pedro 1:16 - Porquanto está escrito: Sede santos, porque eu sou santo."
                ],
                "fé em Cristo": [
                  "João 3:16 - Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna."
                ],
                "libertação": [
                  "Salmos 34:17 - Os justos clamam, e o Senhor os ouve, e os livra de todas as suas angústias."
                ],
                "fortaleza espiritual": [
                  "Efésios 6:10 - No demais, irmãos meus, fortalecei-vos no Senhor e na força do seu poder."
                ],
                "compaixão divina": [
                  "Lamentações 3:22 - As misericórdias do Senhor são a causa de não sermos consumidos, porque as suas misericórdias não têm fim."
                ],
                "soberania": [
                  "Salmos 103:19 - O Senhor tem estabelecido o seu trono nos céus, e o seu reino domina sobre tudo."
                ],
                "redenção pelo sangue": [
                  "Hebreus 9:12 - Nem por sangue de bodes e bezerros, mas por seu próprio sangue, entrou uma vez no santuário, havendo efetuado uma eterna redenção."
                ],
                "salvação": [
                  "Atos 4:12 - E em nenhum outro há salvação, porque também debaixo do céu nenhum outro nome há, dado entre os homens, pelo qual devamos ser salvos."
                ],
                "devoção": [
                  "Romanos 12:1 - Rogo-vos, pois, irmãos, pela compaixão de Deus, que apresenteis os vossos corpos em sacrifício vivo, santo e agradável a Deus, que é o vosso culto racional."
                ],
                "esperança em Deus": [
                  "Salmos 42:11 - Por que estás abatida, ó minha alma? E por que te perturbas dentro de mim? Espera em Deus, pois ainda o louvarei, o qual é a salvação da minha face e o meu Deus."
                ],
                "reconciliação": [
                  "2 Coríntios 5:18 - E tudo isto provém de Deus, que nos reconciliou consigo mesmo por Jesus Cristo, e nos deu o ministério da reconciliação."
                ],
                "oração fervorosa": [
                  "Tiago 5:16 - Confessai as vossas culpas uns aos outros, e orai uns pelos outros, para que sareis; a oração feita por um justo pode muito em seus efeitos."
                ],
                "alegria espiritual": [
                  "Filipenses 4:4 - Regozijai-vos sempre no Senhor; outra vez digo, regozijai-vos."
                ],
                "verdade": [
                  "João 8:32 - E conhecereis a verdade, e a verdade vos libertará."
                ],
                "guia divino": [
                  "Salmos 32:8 - Instruir-te-ei, e ensinar-te-ei o caminho que deves seguir; guiar-te-ei com os meus olhos."
                ],
                "resiliência": [
                  "2 Coríntios 4:8-9 - Em tudo somos atribulados, mas não angustiados; perplexos, mas não desanimados; perseguidos, mas não desamparados; abatidos, mas não destruídos."
                ],
                "pureza espiritual": [
                  "1 João 3:3 - E qualquer que nele tem esta esperança purifica-se a si mesmo, como também ele é puro."
                ],
                "amizade fiel": [
                  "Provérbios 27:9 - O óleo e o perfume alegram o coração; assim o faz a doçura do amigo pelo conselho cordial."
                ],
                "segurança": [
                  "Provérbios 18:10 - Torre forte é o nome do Senhor; para ela correrá o justo, e estará em alto refúgio."
                ],
                "adoração verdadeira": [
                  "Romanos 12:1 - Rogo-vos, pois, irmãos, pela compaixão de Deus, que apresenteis os vossos corpos em sacrifício vivo, santo e agradável a Deus, que é o vosso culto racional."
                ],
                "misericórdia": [
                  "Miqueias 6:8 - Ele te declarou, ó homem, o que é bom; e que é o que o Senhor pede de ti, senão que pratiques a justiça, e ames a misericórdia, e andes humildemente com o teu Deus?"
                ],
                "refúgio": [
                  "Salmos 46:1 - Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia."
                ],
                "amizade com Deus": [
                  "Tiago 2:23 - E cumpriu-se a Escritura que diz: E creu Abraão em Deus, e foi-lhe isso imputado como justiça, e foi chamado amigo de Deus."
                ],
                "oração constante": [
                  "1 Tessalonicenses 5:17 - Orai sem cessar."
                ],
                "benignidade": [
                  "Colossenses 3:12 - Revesti-vos, pois, como eleitos de Deus, santos e amados, de entranhas de misericórdia, de benignidade, humildade, mansidão, longanimidade."
                ],
                "alegria na salvação": [
                  "Salmos 51:12 - Torna a dar-me a alegria da tua salvação, e sustém-me com um espírito voluntário."
                ],
                "contentamento espiritual": [
                  "1 Timóteo 6:6 - Mas é grande ganho a piedade com contentamento."
                ],
                "renovação da mente": [
                  "Romanos 12:2 - E não sede conformados com este mundo, mas sede transformados pela renovação do vosso entendimento, para que experimenteis qual seja a boa, agradável, e perfeita vontade de Deus."
                ],
                "conforto": [
                  "2 Coríntios 1:3-4 - Bendito seja o Deus e Pai de nosso Senhor Jesus Cristo, o Pai das misericórdias e o Deus de toda consolação, que nos consola em toda a nossa tribulação."
                ],
                "sabedoria prática": [
                  "Tiago 1:5 - E, se algum de vós tem falta de sabedoria, peça-a a Deus, que a todos dá liberalmente, e o não lança em rosto, e ser-lhe-á dada."
                ],
                "graça": [
                  "Efésios 2:8 - Porque pela graça sois salvos, por meio da fé; e isso não vem de vós; é dom de Deus."
                ],
                "amor ao próximo": [
                  "Marcos 12:31 - E o segundo, semelhante a este, é: Amarás o teu próximo como a ti mesmo. Não há outro mandamento maior do que estes."
                ],
                "poder de Deus": [
                  "Efésios 3:20 - Ora, àquele que é poderoso para fazer tudo muito mais abundantemente além daquilo que pedimos ou pensamos, segundo o poder que em nós opera."
                ],
                "vida eterna": [
                  "Romanos 6:23 - Porque o salário do pecado é a morte, mas o dom gratuito de Deus é a vida eterna, por Cristo Jesus nosso Senhor."
                ],
                "júbilo": [
                  "Isaías 12:3 - E vós com alegria tirareis águas das fontes da salvação."
                ],
                "libertação do pecado": [
                  "Romanos 6:14 - Porque o pecado não terá domínio sobre vós, pois não estais debaixo da lei, mas debaixo da graça."
                ],
                "aliança": [
                  "Hebreus 8:10 - Porque este é o pacto que farei com a casa de Israel depois daqueles dias, diz o Senhor: Porei as minhas leis no seu entendimento, e em seu coração as escreverei; e eu lhes serei por Deus, e eles me serão por povo."
                ],
                "autoridade espiritual": [
                  "Lucas 10:19 - Eis que vos dou poder para pisar serpentes e escorpiões, e toda a força do inimigo, e nada vos fará dano algum."
                ],
                "perdão": [
                  "Colossenses 3:13 - Suportando-vos uns aos outros, e perdoando-vos uns aos outros, se alguém tiver queixa contra outro; assim como Cristo vos perdoou, assim fazei vós também."
                ],
                "mansidão": [
                  "Mateus 5:5 - Bem-aventurados os mansos, porque eles herdarão a terra."
                ],
                "longanimidade": [
                  "Gálatas 5:22 - Mas o fruto do Espírito é: amor, gozo, paz, longanimidade, benignidade, bondade, fé."
                ],
                "fé operante": [
                  "Tiago 2:17 - Assim também a fé, se não tiver as obras, é morta em si mesma."
                ],
                "dons espirituais": [
                  "1 Coríntios 12:7 - Mas a manifestação do Espírito é dada a cada um, para o que for útil."
                ],
                "armadura de Deus": [
                  "Efésios 6:11 - Revesti-vos de toda a armadura de Deus, para que possais estar firmes contra as astutas ciladas do diabo."
                ],
                "vida abundante": [
                  "João 10:10 - O ladrão não vem senão a roubar, a matar, e a destruir; eu vim para que tenham vida, e a tenham com abundância."
                ],
                "testemunho": [
                  "Atos 1:8 - Mas recebereis a virtude do Espírito Santo, que há de vir sobre vós; e ser-me-eis testemunhas, tanto em Jerusalém como em toda a Judeia e Samaria, e até aos confins da terra."
                ],
                "plena confiança": [
                  "Hebreus 10:35 - Não lanceis fora, pois, a vossa confiança, que tem grande e avultado galardão."
                ],
                "gozo no Senhor": [
                  "Neemias 8:10 - Porque este dia é consagrado ao nosso Senhor; portanto não vos entristeçais, pois a alegria do Senhor é a vossa força."
                ],
              
                "medo do futuro": [
    "Jeremias 29:11 - Porque eu bem sei os pensamentos que penso de vós, diz o Senhor; pensamentos de paz, e não de mal, para vos dar o fim que esperais.",
    "Isaías 41:10 - Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te fortaleço, e te ajudo, e te sustento com a destra da minha justiça."
  ],
  "falta de confiança": [
    "Salmos 37:5 - Entrega o teu caminho ao Senhor; confia nele, e ele o fará.",
    "Provérbios 3:5-6 - Confia no Senhor de todo o teu coração, e não te estribes no teu próprio entendimento. Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas."
  ],
  "estresse no trabalho": [
    "Salmos 55:22 - Lança o teu cuidado sobre o Senhor, e ele te susterá; nunca permitirá que o justo seja abalado.",
    "Êxodo 33:14 - Disse, pois: Irá a minha presença contigo para te fazer descansar."
  ],
  "cansaço": [
    "Mateus 11:28 - Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.",
    "Isaías 40:31 - Mas os que esperam no Senhor renovarão as suas forças, subirão com asas como águias; correrão, e não se cansarão; caminharão, e não se fatigarão."
  ],
  "decisões difíceis": [
    "Tiago 1:5 - E, se algum de vós tem falta de sabedoria, peça-a a Deus, que a todos dá liberalmente, e o não lança em rosto, e ser-lhe-á dada.",
    "Provérbios 16:9 - O coração do homem planeja o seu caminho, mas o Senhor lhe dirige os passos."
  ],
  "problemas financeiros": [
    "Filipenses 4:19 - E o meu Deus, segundo a sua riqueza em glória, suprirá todas as vossas necessidades em glória, por Cristo Jesus.",
    "Salmos 37:25 - Fui moço, e agora sou velho; mas nunca vi desamparado o justo, nem a sua descendência a mendigar o pão."
  ],
  "dificuldade nos relacionamentos": [
    "Efésios 4:2-3 - Com toda a humildade e mansidão, com longanimidade, suportando-vos uns aos outros em amor, procurando guardar a unidade do Espírito pelo vínculo da paz.",
    "1 Pedro 4:8 - Sobretudo, tenham amor intenso uns pelos outros, porque o amor cobre uma multidão de pecados."
  ],
  "culpa do passado": [
    "1 João 1:9 - Se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar os pecados, e nos purificar de toda a injustiça.",
    "Romanos 8:1 - Portanto, agora nenhuma condenação há para os que estão em Cristo Jesus, que não andam segundo a carne, mas segundo o Espírito."
  ],
  "insegurança": [
    "Salmos 139:14 - Eu te louvarei, porque de um modo assombroso, e tão maravilhoso fui feito; maravilhosas são as tuas obras, e a minha alma o sabe muito bem.",
    "Jeremias 1:5 - Antes que te formasse no ventre, te conheci; e antes que saísses da madre, te santifiquei; às nações te dei por profeta."
  ],
  "perda de um ente querido": [
    "Mateus 5:4 - Bem-aventurados os que choram, porque eles serão consolados.",
    "Salmos 34:18 - Perto está o Senhor dos que têm o coração quebrantado, e salva os contritos de espírito."
  ],
  "dúvida": [
    "Marcos 9:24 - E logo o pai do menino, clamando com lágrimas, disse: Eu creio, Senhor! Ajuda a minha incredulidade.",
    "Tiago 1:6 - Peça-a, porém, com fé, em nada duvidando; porque o que duvida é semelhante à onda do mar, que é levada pelo vento e lançada de uma para outra parte."
  ],
  "sentimento de solidão": [
    "Hebreus 13:5 - Seja a vossa vida sem avareza. Contentai-vos com o que tendes; porque ele disse: Não te deixarei, nem te desampararei.",
    "Salmos 23:4 - Ainda que eu andasse pelo vale da sombra da morte, não temeria mal algum, porque tu estás comigo; a tua vara e o teu cajado me consolam."
  ],
  "falta de propósito": [
    "Efésios 2:10 - Porque somos feitura sua, criados em Cristo Jesus para as boas obras, as quais Deus preparou para que andássemos nelas.",
    "Jeremias 29:11 - Porque eu bem sei os pensamentos que penso de vós, diz o Senhor; pensamentos de paz, e não de mal, para vos dar o fim que esperais."
  ],
  "decepções amorosas": [
    "Salmos 147:3 - Sara os quebrantados de coração, e lhes ata as suas feridas.",
    "Provérbios 4:23 - Sobre tudo o que se deve guardar, guarda o teu coração, porque dele procedem as fontes da vida."
  ],
  "falta de paciência": [
    "Salmos 37:7 - Descansa no Senhor, e espera nele; não te indignes por causa daquele que prospera em seu caminho, por causa do homem que executa astutos intentos.",
    "Romanos 12:12 - Alegrai-vos na esperança, sede pacientes na tribulação, perseverai na oração."
  ],
  "arrependimento": [
    "Atos 3:19 - Arrependei-vos, pois, e convertei-vos, para que sejam apagados os vossos pecados, e venham assim os tempos de refrigério pela presença do Senhor.",
    "2 Coríntios 7:10 - Porque a tristeza segundo Deus opera arrependimento para a salvação, da qual ninguém se arrepende; mas a tristeza do mundo opera a morte."
  ],
  "preocupação com os filhos": [
    "Provérbios 22:6 - Instrui o menino no caminho em que deve andar, e até quando envelhecer não se desviará dele.",
    "Salmos 127:3 - Eis que os filhos são herança do Senhor, e o fruto do ventre o seu galardão."
  ],
  "sentimento de fracasso": [
    "Isaías 41:13 - Porque eu, o Senhor teu Deus, te tomo pela tua mão direita; e te digo: Não temas, eu te ajudo.",
    "2 Coríntios 12:9 - E disse-me: A minha graça te basta, porque o meu poder se aperfeiçoa na fraqueza. De boa vontade, pois, me gloriarei nas minhas fraquezas, para que em mim habite o poder de Cristo."
  ],
  "falta de direção": [
    "Provérbios 3:5-6 - Confia no Senhor de todo o teu coração, e não te estribes no teu próprio entendimento. Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas.",
    "Salmos 32:8 - Instruir-te-ei, e ensinar-te-ei o caminho que deves seguir; guiar-te-ei com os meus olhos."
  ],
  "medo de falhar": [
    "Filipenses 4:13 - Posso todas as coisas naquele que me fortalece.",
    "2 Timóteo 1:7 - Porque Deus não nos deu o espírito de temor, mas de fortaleza, e de amor, e de moderação."
  ],
  "falta de perdão": [
    "Mateus 6:14 - Porque, se perdoardes aos homens as suas ofensas, também vosso Pai celestial vos perdoará a vós.",
    "Efésios 4:32 - Antes sede uns para com os outros benignos, misericordiosos, perdoando-vos uns aos outros, como também Deus vos perdoou em Cristo."
  ],
   "dificuldade em perdoar a si mesmo": [
    "1 João 3:20 - Porque, se o nosso coração nos condena, maior é Deus do que o nosso coração, e conhece todas as coisas.",
    "Isaías 43:25 - Eu, eu mesmo, sou o que apago as tuas transgressões por amor de mim, e dos teus pecados não me lembro."
  ],
  "sentimento de inadequação": [
    "2 Coríntios 3:5 - Não que sejamos capazes, por nós, de pensar alguma coisa, como de nós mesmos; mas a nossa capacidade vem de Deus.",
    "Filipenses 4:19 - O meu Deus suprirá todas as vossas necessidades segundo as suas riquezas em glória, por Cristo Jesus."
  ],       
      
    // Adicione mais situações e versículos aqui
};

function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let termoBusca = document.querySelector('input').value.trim().toLowerCase(); // Remove espaços em branco e converte para minúsculas

    // Verifica se o termo de busca está vazio
    if (termoBusca === "") {
        section.innerHTML = ""; // Limpa os resultados anteriores, se houver
        return; // Sai da função sem fazer mais nada
    }

    let resultados = "";

    // Itera sobre as chaves do objeto (situações)
    for (let situacao in versiculosPorSituacao) {
        // Verifica se o termo de busca está contido na situação (chave)
        if (situacao.toLowerCase().includes(termoBusca)) {
            // Se sim, adiciona os versículos relacionados aos resultados
            for (let versiculo of versiculosPorSituacao[situacao]) {
                resultados += `
                    <div class="item-resultado">
                        <p>${versiculo}</p>
                    </div>
                `;
            }
        } else {
            // Se não, itera sobre os versículos da situação
            for (let versiculo of versiculosPorSituacao[situacao]) {
                // Verifica se o termo de busca está contido no versículo (valor)
                if (versiculo.toLowerCase().includes(termoBusca)) {
                    // Se sim, adiciona o versículo aos resultados
                    resultados += `
                        <div class="item-resultado">
                            <p>${versiculo}</p>
                        </div>
                    `;
                }
            }
        }
    }

    // Se nenhum resultado foi encontrado, exibe a mensagem
    if (resultados === "") {
        resultados = "<p>Nenhum versículo encontrado para esta situação.</p>";
    }

    section.innerHTML = resultados;
}