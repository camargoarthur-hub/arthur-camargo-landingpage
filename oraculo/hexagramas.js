/**
 * hexagramas.js — Base de dados completa dos 64 Hexagramas do I Ching
 * Textos autorais e originais por Arthur Camargo (CRTH-BR 17948)
 */

const HEXAGRAMAS = {
  "1": {
    "numero": 1,
    "nome": "Ch'ien / O Criativo",
    "trigramas": "Céu sobre Céu (☰ / ☰)",
    "imagem": "A imagem clássica de O Criativo orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para O Criativo indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Energia primordial em expansão máxima. Clareza de propósito, iniciativa e poder criativo focado.",
    "analiseCompleta": "O Criativo representa a potência pura de realização. Quando este hexagrama é sorteado, o universo convida você a assumir a liderança de sua jornada com soberania e convicção. Contudo, o poder sem disciplina gera desgaste; alinhe sua visão analítica aos valores éticos.",
    "alertaSomatico": "Energia simpática em alta expansão. Atenção à hiperativação corporal, tensão na região cervical, mandíbula rígida e impulso de aceleração constante."
  },
  "2": {
    "numero": 2,
    "nome": "K'un / O Receptivo",
    "trigramas": "Terra sobre Terra (☷ / ☷)",
    "imagem": "A imagem clássica de O Receptivo orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para O Receptivo indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Sustentação silenciosa, escuta profunda e receptividade ativa antes da ação.",
    "analiseCompleta": "O Receptivo ensina que a verdadeira força muitas vezes reside na capacidade de acolher, escutar e sustentar. Antes de agir ou tomar uma decisão drástica, permita-se processar o cenário. A paciência receptiva constrói bases indestrutíveis.",
    "alertaSomatico": "Necessidade de estímulo ao tônus vagal ventral. Excelente momento para desacelerar o ritmo respiratório, soltar o abdômen e permitir repouso regenerativo."
  },
  "3": {
    "numero": 3,
    "nome": "Chun / A Dificuldade Inicial",
    "trigramas": "Água sobre Trovão (☵ / ☳)",
    "imagem": "A imagem clássica de A Dificuldade Inicial orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para A Dificuldade Inicial indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Gestação sob fricção inicial. A turbulência do começo exige organização e firmeza sem desespero.",
    "analiseCompleta": "Toda grande transformação nasce de uma turbulência inicial. Não confunda a dificuldade do começo com sinal de fracasso. Organize seus recursos, estabeleça prioridades e siga em frente com firmeza serena.",
    "alertaSomatico": "Ansiedade antecipatória e sensação de sobrecarga nos ombros. Lembre-se de que o corpo precisa de pausas rítmicas para digerir mudanças."
  },
  "4": {
    "numero": 4,
    "nome": "Meng / A Inexperiência Juvenil",
    "trigramas": "Montanha sobre Água (☶ / ☵)",
    "imagem": "A imagem clássica de A Inexperiência Juvenil orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para A Inexperiência Juvenil indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Cultivo do aprendizado com humildade intelectual. Momento de buscar orientação qualificada.",
    "analiseCompleta": "Reconhecer as próprias limitações é a maior prova de inteligência. Este é o momento ideal para buscar mentoria, estudar o terreno e aprender com quem já percorreu o caminho antes de você.",
    "alertaSomatico": "Sensação de névoa mental (brain fog) por excesso de estímulos dispersos. Pratique a desaceleração visual e foco único."
  },
  "5": {
    "numero": 5,
    "nome": "Hsü / A Espera (Nutrição)",
    "trigramas": "Água sobre Céu (☵ / ☰)",
    "imagem": "A imagem clássica de A Espera (Nutrição) orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para A Espera (Nutrição) indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Paciência estratégica e gestação. Nutrir as forças internas enquanto a oportunidade amadurece.",
    "analiseCompleta": "A Espera não é passividade estéril, mas gestação consciente. Nutra sua mente e seu corpo com pensamentos elevados e práticas saudáveis enquanto as circunstâncias amadurecem externamente.",
    "alertaSomatico": "Inquietação motora e respiração curta. Recupere o ritmo respiratório diafragmático para ancorar a presença no aqui e agora."
  },
  "6": {
    "numero": 6,
    "nome": "Sung / O Conflito",
    "trigramas": "Céu sobre Água (☰ / ☵)",
    "imagem": "A imagem clássica de O Conflito orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para O Conflito indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Recuo diplomático frente ao atrito. Preservação de vitalidade evitando confrontos estéreis.",
    "analiseCompleta": "Conflitos desgastam a vitalidade quando alimentados pelo ego. Avalie se vale a pena vencer uma discussão ao custo de sua paz interior. O recuo estratégico e o diálogo ponderado são marcas de maturidade.",
    "alertaSomatico": "Rigidez no plexo solar e contração diafragmática. Libere a tensão acumulada no peito através de expirações prolongadas."
  },
  "7": {
    "numero": 7,
    "nome": "Shih / O Exército (Disciplina)",
    "trigramas": "Terra sobre Água (☷ / ☵)",
    "imagem": "A imagem clássica de O Exército (Disciplina) orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para O Exército (Disciplina) indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Organização rigorosa, autodisciplina e alinhamento de foco para superar grandes desafios.",
    "analiseCompleta": "Grandes objetivos exigem autodisciplina de exército. Mantenha o foco em suas metas, estabeleça uma rotina clara e lidere sua vida com rigor amoroso e responsabilidade.",
    "alertaSomatico": "Tensão muscular nas costas e postura defensiva. Promova o alinhamento postural sem rigidez excessiva."
  },
  "8": {
    "numero": 8,
    "nome": "Pi / A União (Solidariedade)",
    "trigramas": "Água sobre Terra (☵ / ☷)",
    "imagem": "A imagem clássica de A União (Solidariedade) orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para A União (Solidariedade) indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Fortalecimento de alianças autênticas e sentimento de pertencimento com valores alinhados.",
    "analiseCompleta": "Relações autênticas e alianças de valor sustentam o sucesso de longo prazo. Procure cultivar amizades e parcerias com pessoas que compartilham da sua busca por equilíbrio e evolução.",
    "alertaSomatico": "Abertura do centro cardíaco e redução da carga alostática através da conexão humana autêntica."
  },
  "9": {
    "numero": 9,
    "nome": "Hsiao Ch'u / O Poder de Domar do Pequeno",
    "trigramas": "Vento sobre Céu (☴ / ☰)",
    "imagem": "A imagem clássica de O Poder de Domar do Pequeno orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para O Poder de Domar do Pequeno indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Pequenos ajustes diários e persuasão sutil. A constância suave vence a resistência bruta.",
    "analiseCompleta": "Pequenos hábitos diários têm mais poder de transformação do que grandes impulsos isolados. Persista com suavidade e firmeza na direção correta.",
    "alertaSomatico": "Tensão nos micro-músculos faciais e olhos cansados por hiperfoco. Faça pausas para descanso visual."
  },
  "10": {
    "numero": 10,
    "nome": "Lü / A Conduta (Pisar)",
    "trigramas": "Céu sobre Lago (☰ / ☱)",
    "imagem": "A imagem clássica de A Conduta (Pisar) orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para A Conduta (Pisar) indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Conduta impecável e compostura em terrenos delicados. Transitar com respeito e segurança.",
    "analiseCompleta": "Navegar por ambientes exigentes ou lidar com pessoas complexas requer conduta impecável. Mantenha a elegância, a compostura e os limites éticos bem definidos.",
    "alertaSomatico": "Estado de vigília simpática sustentada. Cultive o enraizamento através dos pés tocando firmemente o chão."
  },
  "11": {
    "numero": 11,
    "nome": "T'ai / A Paz (Harmonia)",
    "trigramas": "Terra sobre Céu (☷ / ☰)",
    "imagem": "A imagem clássica de A Paz (Harmonia) orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para A Paz (Harmonia) indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Fluidez, prosperidade e alinhamento. Momento excelente para consolidar conquistas de longo prazo.",
    "analiseCompleta": "A Paz surge do alinhamento entre sua essência e suas ações. Aproveite este período de fluidez para investir na sua saúde física, mental e em projetos duradouros.",
    "alertaSomatico": "Sensação de leveza no peito e tom vagal ventral plenamente ativo. Momento ideal para integrar novos hábitos de saúde."
  },
  "12": {
    "numero": 12,
    "nome": "P'i / A Estagnação (O Bloqueio)",
    "trigramas": "Céu sobre Terra (☰ / ☷)",
    "imagem": "A imagem clássica de A Estagnação (O Bloqueio) orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para A Estagnação (O Bloqueio) indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Estagnação externa e recolhimento estratégico. Proteger valores e economizar energia.",
    "analiseCompleta": "Diante do bloqueio externo ou da estagnação, recolha-se. Projeta seu capital subjetivo e sua energia de influências tóxicas até que o ciclo de renovação se inicie.",
    "alertaSomatico": "Sensação de peso corporal e tendência à apatia/congelamento (vagal dorsal). Estimule o corpo com caminhadas suaves e hidratação."
  },
  "13": {
    "numero": 13,
    "nome": "T'ung Jên / A Comunhão entre os Homens",
    "trigramas": "Céu sobre Fogo (☰ / ☲)",
    "imagem": "A imagem clássica de A Comunhão entre os Homens orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para A Comunhão entre os Homens indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "União em torno de causas elevadas. Comunhão transparente e colaboração de alto nível.",
    "analiseCompleta": "A comunhão com propósitos elevados multiplica os resultados. Una-se a grupos e projetos que promovam a integração, a ciência e o bem-estar coletivo.",
    "alertaSomatico": "Descompressão torácica e expansão da capacidade vital respiratória. Ótimo momento para práticas de grupo."
  },
  "14": {
    "numero": 14,
    "nome": "Ta Yu / A Posse em Grande Medida",
    "trigramas": "Fogo sobre Céu (☲ / ☰)",
    "imagem": "A imagem clássica de A Posse em Grande Medida orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para A Posse em Grande Medida indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Abundância e clareza de recursos. Exercer a prosperidade com responsabilidade e generosidade.",
    "analiseCompleta": "A abundância é um teste de responsabilidade. Administre suas conquistas com sabedoria, mantendo a modéstia e o desejo contínuo de contribuir para o mundo.",
    "alertaSomatico": "Sensação de vigor metabólico. Cuidado com o excesso de consumo energético e estresse térmico."
  },
  "15": {
    "numero": 15,
    "nome": "Ch'ien / A Modéstia",
    "trigramas": "Terra sobre Montanha (☷ / ☶)",
    "imagem": "A imagem clássica de A Modéstia orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para A Modéstia indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Modéstia genuína que equilibra o excesso. A simplicidade sustenta a verdadeira autoridade.",
    "analiseCompleta": "A modéstia genuína eleva o indivíduo sem necessidade de autoafirmação. Quanto maior o seu conhecimento e sucesso, mais simples e acessível deve ser sua postura.",
    "alertaSomatico": "Descontração muscular profunda e alívio da sobrecarga articular nos ombros e trapézio."
  },
  "16": {
    "numero": 16,
    "nome": "Yü / O Entusiasmo",
    "trigramas": "Trovão sobre Terra (☳ / ☷)",
    "imagem": "A imagem clássica de O Entusiasmo orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para O Entusiasmo indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Entusiasmo contagiante e motivação alinhada a um planejamento realista e disciplinado.",
    "analiseCompleta": "O entusiasmo é o combustível da realização. Direcione essa energia com planejamento lógico e execução consistente para não se perder em mera empolgação passajaria.",
    "alertaSomatico": "Aceleração dos batimentos cardíacos por excitação. Pratique a respiração ritmada 4-7-8 para manter o centro."
  },
  "17": {
    "numero": 17,
    "nome": "Sui / A Perseguição / O Seguimento",
    "trigramas": "Lago sobre Trovão (☱ / ☳)",
    "imagem": "A imagem clássica de A Perseguição / O Seguimento orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para A Perseguição / O Seguimento indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Adaptabilidade inteligente ao ritmo dos acontecimentos. Saber seguir para depois liderar.",
    "analiseCompleta": "Saber se adaptar às mudanças do ambiente é a chave da sobrevivência emocional. Seja flexível como a água que contorna os obstáculos sem perder sua essência.",
    "alertaSomatico": "Soltura da articulação temporomandibular (ATM) e flexibilidade da coluna vertebral."
  },
  "18": {
    "numero": 18,
    "nome": "Ku / Trabalho no Que Se Deteriorou",
    "trigramas": "Montanha sobre Vento (☶ / ☴)",
    "imagem": "A imagem clássica de Trabalho no Que Se Deteriorou orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para Trabalho no Que Se Deteriorou indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Saneamento de velhos padrões e reparação de falhas estruturais com coragem analítica.",
    "analiseCompleta": "Enfrente os velhos padrões comportamentais e traumas do passado com coragem analítica. Limpar as estruturas deterioradas abre espaço para um novo florescer.",
    "alertaSomatico": "Necessidade de detox somático. Elimine toxinas com hidratação abundante e massagem nos pontos meridianos."
  },
  "19": {
    "numero": 19,
    "nome": "Lin / A Aproximação",
    "trigramas": "Terra sobre Lago (☷ / ☱)",
    "imagem": "A imagem clássica de A Aproximação orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para A Aproximação indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Aproximação promissora e expansão. Aproveitar o momento favorável para agir com determinação.",
    "analiseCompleta": "O momento é altamente favorável para avançar. Esteja presente, assuma responsabilidades e aproveite a maré de oportunidade com determinação.",
    "alertaSomatico": "Estímulo positivo da circulação sanguínea. Aproveite para realizar atividades físicas moderadas ao ar livre."
  },
  "20": {
    "numero": 20,
    "nome": "Kuan / A Contemplação (A Visão)",
    "trigramas": "Vento sobre Terra (☴ / ☷)",
    "imagem": "A imagem clássica de A Contemplação (A Visão) orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para A Contemplação (A Visão) indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Contemplação reflexiva e visão panorâmica. Observar com profundidade antes de decidir.",
    "analiseCompleta": "Apenas quem sabe parar e observar consegue enxergar além das aparências. Dedique tempo à introspecção e à análise panorâmica de sua vida.",
    "alertaSomatico": "Desaceleração do ritmo cardíaco e relaxamento do sistema nervoso central através do silêncio consciente."
  },
  "21": {
    "numero": 21,
    "nome": "Shih Ho / Morder e Romper",
    "trigramas": "Fogo sobre Trovão (☲ / ☳)",
    "imagem": "A imagem clássica de Morder e Romper orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para Morder e Romper indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Romper obstáculos e impor limites necessários. Decisão firme contra o que impede o avanço.",
    "analiseCompleta": "Há momentos em que se deve cortar o mal pela raiz. Imponha limites claros, tome decisões difíceis e rompa com hábitos que estejam drenando sua energia.",
    "alertaSomatico": "Tensão acumulada na mandíbula e dentes travados (bruxismo). Realize auto-massagem na musculatura do masseter."
  },
  "22": {
    "numero": 22,
    "nome": "Pi / A Graça (A Beleza)",
    "trigramas": "Montanha sobre Fogo (☶ / ☲)",
    "imagem": "A imagem clássica de A Graça (A Beleza) orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para A Graça (A Beleza) indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Graça estática e elegância visual, sem esquecer de nutrir a essência substancial interna.",
    "analiseCompleta": "Cultive a beleza interna e externa, mas lembre-se de que a estética deve refletir uma essência rica. Não se satisfaça com aparências superficiais.",
    "alertaSomatico": "Suavização do tom de voz e relaxamento dos músculos da garganta e pescoço."
  },
  "23": {
    "numero": 23,
    "nome": "Po / A Desagregação (A Ruína)",
    "trigramas": "Montanha sobre Terra (☶ / ☷)",
    "imagem": "A imagem clássica de A Desagregação (A Ruína) orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para A Desagregação (A Ruína) indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Desagregação do que é desnecessário. Permitir a queda do ilusório para preservar a estrutura essencial.",
    "analiseCompleta": "Permita que aquilo que já cumpriu seu papel se desfaça. A desagregação abre espaço para que a verdade essencial de sua vida se manifeste.",
    "alertaSomatico": "Sensação de esgotamento de energia e fadiga muscular. Permita-se dormir horas adicionais de sono profundo."
  },
  "24": {
    "numero": 24,
    "nome": "Fu / O Retorno (O Ponto de Virada)",
    "trigramas": "Terra sobre Trovão (☷ / ☳)",
    "imagem": "A imagem clássica de O Retorno (O Ponto de Virada) orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para O Retorno (O Ponto de Virada) indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Ponto de virada e renovação de vitalidade. O retorno da luz e da motivação após o recolhimento.",
    "analiseCompleta": "Após a escuridão ou o esgotamento, surge a luz do renovo. Respeite os tempos de recuperação de seu organismo e celebre cada pequeno avanço.",
    "alertaSomatico": "Sensação de formigamento restaurador nos membros. O sistema nervoso está reconectando sua vitalidade."
  },
  "25": {
    "numero": 25,
    "nome": "Wu Wang / A Inocência (O Inesperado)",
    "trigramas": "Céu sobre Trovão (☰ / ☳)",
    "imagem": "A imagem clássica de A Inocência (O Inesperado) orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para A Inocência (O Inesperado) indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Ação espontânea alinhada à verdade natural. Agir com integridade sem segundas intenções tóxicas.",
    "analiseCompleta": "Agir com pureza de intenções atrai proteção natural. Mantenha a inocência do coração combinada com a discernimento da experiência.",
    "alertaSomatico": "Alívio da ansiedade por soltura da necessidade de controle. Solte a região pélvica e lombar."
  },
  "26": {
    "numero": 26,
    "nome": "Ta Ch'u / O Grande Poder de Domar",
    "trigramas": "Montanha sobre Céu (☶ / ☰)",
    "imagem": "A imagem clássica de O Grande Poder de Domar orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para O Grande Poder de Domar indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Acúmulo de sabedoria e autocontrole firme. Conter a força para aplicá-la no momento exato.",
    "analiseCompleta": "Acumule conhecimento, autocontrole e saúde. A verdadeira força é aquela que sabe o momento exato de ser aplicada com precisão.",
    "alertaSomatico": "Retenção de energia na região do abdômen superior. Realize respirações profundas para massagear as vísceras."
  },
  "27": {
    "numero": 27,
    "nome": "I / A Provisão de Alimentos (As Mandíbulas)",
    "trigramas": "Montanha sobre Trovão (☶ / ☳)",
    "imagem": "A imagem clássica de A Provisão de Alimentos (As Mandíbulas) orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para A Provisão de Alimentos (As Mandíbulas) indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Nutrição consciente do corpo e da mente. Cuidar daquilo que se consome e do que se expressa.",
    "analiseCompleta": "Aquilo com que você nutre sua mente e seu corpo determina sua saúde biológica e psíquica. Selecione seus pensamentos e alimentos com rigor.",
    "alertaSomatico": "Atenção ao sistema digestivo. Evite comer sob estado de estresse ou correria corporativa."
  },
  "28": {
    "numero": 28,
    "nome": "Ta Kuo / Preponderância do Grande",
    "trigramas": "Lago sobre Vento (☱ / ☴)",
    "imagem": "A imagem clássica de Preponderância do Grande orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para Preponderância do Grande indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Carga pesada sobre a estrutura. Momento crítico que exige reforço imediato e alivio de peso.",
    "analiseCompleta": "Quando a pressão externa ameaça dobrar suas forças, reduza o peso impositivo e busque suporte imediato. Preserve sua integridade física e emocional.",
    "alertaSomatico": "Sobrecarga na região lombar por carregamento de peso emocional ou físico. Faça alongamentos leves da cadeia posterior."
  },
  "29": {
    "numero": 29,
    "nome": "K'an / O Abismo (A Água)",
    "trigramas": "Água sobre Água (☵ / ☵)",
    "imagem": "A imagem clássica de O Abismo (A Água) orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para O Abismo (A Água) indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Travessia do abismo através da constância e coragem interior. Manter a serenidade na incerteza.",
    "analiseCompleta": "Atravesse momentos de incerteza mantendo a fé em seus valores e a serenidade no coração. A água que flui pelo abismo eventualmente encontra o mar.",
    "alertaSomatico": "Hipervigilância dos sentidos. Pratique o fechamento de olhos por 5 minutos ao longo do dia laboral."
  },
  "30": {
    "numero": 30,
    "nome": "Li / O Aderir (O Fogo)",
    "trigramas": "Fogo sobre Fogo (☲ / ☲)",
    "imagem": "A imagem clássica de O Aderir (O Fogo) orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para O Aderir (O Fogo) indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Clareza de consciência e adesão a princípios elevados. Iluminar a percepção com lucidez.",
    "analiseCompleta": "A clareza de consciência ilumina o caminho mais sombrio. Mantenha-se fiel aos seus princípios éticos e à luz da razão equilibrada.",
    "alertaSomatico": "Calor na região da cabeça e olhos secos. Beba água e aplique compressas mornas para aliviar a tensão ocular."
  },
  "31": {
    "numero": 31,
    "nome": "Hsien / A Influência (O Atendimento)",
    "trigramas": "Lago sobre Montanha (☱ / ☶)",
    "imagem": "A imagem clássica de A Influência (O Atendimento) orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para A Influência (O Atendimento) indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Ressonância mútua e atração genuína. Comunicação intuitiva e abertura emocional.",
    "analiseCompleta": "A sensibilidade ao ambiente e a abertura ao diálogo geram encontros transformadores. Esteja atento às sincronicidades e sinais do corpo.",
    "alertaSomatico": "Sensibilidade tátil aumentada e facilidade de relaxamento através do toque terapêutico."
  },
  "32": {
    "numero": 32,
    "nome": "Hêng / A Constância (A Duração)",
    "trigramas": "Trovão sobre Vento (☳ / ☴)",
    "imagem": "A imagem clássica de A Constância (A Duração) orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para A Constância (A Duração) indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Constância, resistência e ritmo sustentável. Manter a fidelidade aos propósitos de longo prazo.",
    "analiseCompleta": "A constância na prática diária de autocuidado constrói uma vida inabalável. Não busque resultados da noite para o dia; honre o processo.",
    "alertaSomatico": "Estabilização do ritmo cardíaco (VFC). O corpo responde com resiliência e resistência física duradoura."
  },
  "33": {
    "numero": 33,
    "nome": "TUN / A Retirada (O Recuo)",
    "trigramas": "Céu sobre Montanha (☰ / ☶)",
    "imagem": "A imagem clássica de A Retirada (O Recuo) orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para A Retirada (O Recuo) indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Retirada tática consciente. Recuar com elegância para preservar a soberania e o comando.",
    "analiseCompleta": "Recuar diante de forças avassaladoras não é covardia, mas inteligência tática. Preserve seu equilíbrio e sua dignidade em primeiro lugar.",
    "alertaSomatico": "Alívio imediato da pressão nas têmporas ao afastar-se do fator estressante. Priorize o descanso isolado."
  },
  "34": {
    "numero": 34,
    "nome": "Ta Chuang / O Poder do Grande",
    "trigramas": "Trovão sobre Céu (☳ / ☰)",
    "imagem": "A imagem clássica de O Poder do Grande orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para O Poder do Grande indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Grande poder em mãos que exige contenção responsável. Evitar o uso impulsivo da força.",
    "analiseCompleta": "Poder sem autocontrole gera destruição. Use sua influência e conhecimento para construir e proteger, jamais para dominar impulsivamente.",
    "alertaSomatico": "Sensação de excesso de calor corporal. Equilibre o organismo com banhos frios e alimentação leve."
  },
  "35": {
    "numero": 35,
    "nome": "Chin / O Progresso",
    "trigramas": "Fogo sobre Terra (☲ / ☷)",
    "imagem": "A imagem clássica de O Progresso orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para O Progresso indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Progresso visível e reconhecimento merecido. Avançar com confiança e transparência.",
    "analiseCompleta": "O progresso sustentável é fruto de dedicação e clareza. Avance com luz própria, sem precisar diminuir o brilho de ninguém ao seu redor.",
    "alertaSomatico": "Expansão da postura e abertura dos ombros. O corpo expressa confiança e vitalidade natural."
  },
  "36": {
    "numero": 36,
    "nome": "Ming I / O Obscurecimento da Luz",
    "trigramas": "Terra sobre Fogo (☷ / ☲)",
    "imagem": "A imagem clássica de O Obscurecimento da Luz orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para O Obscurecimento da Luz indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Preservação da luz interna em tempos de incompreensão. Manter a integridade de forma discreta.",
    "analiseCompleta": "Em ambientes adversos, guarde seus tesouros internos em silêncio. A verdadeira luz brilha no interior sem necessidade de alarde público.",
    "alertaSomatico": "Tensão sutil na garganta por engolir sentimentos não ditos. Pratique a expressão criativa ou escrita terapêutica."
  },
  "37": {
    "numero": 37,
    "nome": "Chia Jên / A Família",
    "trigramas": "Vento sobre Fogo (☴ / ☲)",
    "imagem": "A imagem clássica de A Família orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para A Família indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Fortalecimento das bases internas e clareza de papéis dentro da estrutura familiar e de equipe.",
    "analiseCompleta": "Harmonize sua casa e suas relações mais próximas. A estabilidade no ambiente interno é a base para o sucesso no mundo externo.",
    "alertaSomatico": "Sensação de aconchego térmico e equilíbrio do sistema imunológico através do ambiente acolhedor."
  },
  "38": {
    "numero": 38,
    "nome": "K'uei / A Oposição",
    "trigramas": "Fogo sobre Lago (☲ / ☱)",
    "imagem": "A imagem clássica de A Oposição orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para A Oposição indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Divergência de perspectivas. Encontrar pontos de convergência sem anular as individualidades.",
    "analiseCompleta": "Aprenda a respeitar as diferenças de opinião sem transformar divergências em batalhas pessoais. Encontre o equilíbrio na diversidade.",
    "alertaSomatico": "Desconforto digestivo episódico por irritabilidade. Cuide do nervo vago através de gargarejos e respiração lenta."
  },
  "39": {
    "numero": 39,
    "nome": "Chien / O Obstáculo",
    "trigramas": "Água sobre Montanha (☵ / ☶)",
    "imagem": "A imagem clássica de O Obstáculo orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para O Obstáculo indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Superação de obstáculos pela reavaliação de rotas. Buscar apoio e contornar a montanha.",
    "analiseCompleta": "Diante de um obstáculo intransponível, pare e reavalie. Às vezes o caminho correto exige dar um passo ao lado ou pedir ajuda a especialistas.",
    "alertaSomatico": "Sensação de travamento nos joelhos e tornozelos. Faça pausas para movimentar as articulações dos pés."
  },
  "40": {
    "numero": 40,
    "nome": "Hsieh / A Liberação",
    "trigramas": "Trovão sobre Água (☳ / ☵)",
    "imagem": "A imagem clássica de A Liberação orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para A Liberação indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Alívio imediato de tensões e desatamento de nós. Momento de perdoar o passado e avançar.",
    "analiseCompleta": "Liberte-se de ressentimentos e culpas do passado. O perdão e a descompressão emocional trazem uma sensação imediata de leveza e renovação.",
    "alertaSomatico": "Soltura imediata do diafragma e sensação de oxigenação abundante no cérebro."
  },
  "41": {
    "numero": 41,
    "nome": "Sun / A Diminuição",
    "trigramas": "Montanha sobre Lago (☶ / ☱)",
    "imagem": "A imagem clássica de A Diminuição orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para A Diminuição indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Simplificação voluntária e redução do supérfluo para fortalecer o essencial e recuperar o foco.",
    "analiseCompleta": "Elimine o excesso de compromissos e estímulos. A simplificação da rotina recupera o foco e devolve a vitalidade perdida no estresse.",
    "alertaSomatico": "Leveza digestiva e eliminação de inchaços corporais através da simplificação alimentar."
  },
  "42": {
    "numero": 42,
    "nome": "I / O Aumento",
    "trigramas": "Vento sobre Trovão (☴ / ☳)",
    "imagem": "A imagem clássica de O Aumento orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para O Aumento indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Expansão, ganho e generosidade. Momento de investir no crescimento e apoiar os demais.",
    "analiseCompleta": "Compartilhe suas bênçãos e conhecimento. Quanto mais você contribui para o crescimento dos outros, mais o universo expande seu próprio caminho.",
    "alertaSomatico": "Aumento da vitalidade geral e sensação de calor agradável nas palmas das mãos e solas dos pés."
  },
  "43": {
    "numero": 43,
    "nome": "Kua / A Irrupção (A Resolução)",
    "trigramas": "Lago sobre Céu (☱ / ☰)",
    "imagem": "A imagem clássica de A Irrupção (A Resolução) orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para A Irrupção (A Resolução) indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Resolução firme e corte definitivo com padrões nocivos. Comunicar decisões com clareza.",
    "analiseCompleta": "Tome a decisão que vem adiando. A clareza de posicionamento afasta a ambiguidade e traz paz imediata ao sistema nervoso.",
    "alertaSomatico": "Descarregamento de tensão retida nas mãos e braços. Sacuda os membros para liberar o excesso de adrenalina."
  },
  "44": {
    "numero": 44,
    "nome": "Kou / Vindo ao Encontro",
    "trigramas": "Céu sobre Vento (☰ / ☴)",
    "imagem": "A imagem clássica de Vindo ao Encontro orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para Vindo ao Encontro indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Encontro com forças sutis que exigem cautela. Não se deixar dominar por influências impulsivas.",
    "analiseCompleta": "Esteja atento a tentações de atalhos fáceis ou alianças duvidosas. Mantenha seus padrões de exigência e ética no nível mais elevado.",
    "alertaSomatico": "Atenção a impulsos compulsivos ou picos de ansiedade repentinos. Respire fundo 3 vezes antes de reagir."
  },
  "45": {
    "numero": 45,
    "nome": "Ts'ui / A Reunião (A Coleção)",
    "trigramas": "Lago sobre Terra (☱ / ☷)",
    "imagem": "A imagem clássica de A Reunião (A Coleção) orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para A Reunião (A Coleção) indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Reunião de forças e concentração de propósitos. Criar coesão e proteção para o grupo.",
    "analiseCompleta": "Reúna suas forças em torno de um objetivo claro. A concentração de energia em uma única direção gera resultados extraordinários.",
    "alertaSomatico": "Fortalecimento do tônus muscular global e sensação de enraizamento no solo."
  },
  "46": {
    "numero": 46,
    "nome": "Shêng / A Elevação (O Empurrar para Cima)",
    "trigramas": "Terra sobre Vento (☷ / ☴)",
    "imagem": "A imagem clássica de A Elevação (O Empurrar para Cima) orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para A Elevação (O Empurrar para Cima) indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Elevação gradual e consistente. Subir passo a passo com esforço contínuo e fundamentado.",
    "analiseCompleta": "Suba cada degrau com calma e persistência. O verdadeiro crescimento é aquele construído sobre fundações sólidas e graduais.",
    "alertaSomatico": "Melhora gradual na resistência aeróbica e disposição física ao acordar."
  },
  "47": {
    "numero": 47,
    "nome": "K'un / A Opressão (A Exaustão)",
    "trigramas": "Lago sobre Água (☱ / ☵)",
    "imagem": "A imagem clássica de A Opressão (A Exaustão) orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para A Opressão (A Exaustão) indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Exaustão temporária e sensação de confinamento. Buscar a força interna na serenidade mental.",
    "analiseCompleta": "Mesmo nas situações de limitação ou exaustão, lembre-se de que a mente pode permanecer livre. Busque o refúgio na meditação e no autocuidado.",
    "alertaSomatico": "Nível baixo de energia vital (qi/prana). Evite treinos exaustivos e priorize o descanso passivo."
  },
  "48": {
    "numero": 48,
    "nome": "Ching / O Poço de Água",
    "trigramas": "Água sobre Vento (☵ / ☴)",
    "imagem": "A imagem clássica de O Poço de Água orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para O Poço de Água indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Acesso à fonte inesgotável de sabedoria interna. Manter os canais de autoconhecimento limpos.",
    "analiseCompleta": "Beba da fonte inacabável da sabedoria interna. O conhecimento acumulado pela experiência é o seu recurso mais valioso.",
    "alertaSomatico": "Equilíbrio dos fluidos corporais e bom funcionamento dos rins. Mantenha a hidratação constante."
  },
  "49": {
    "numero": 49,
    "nome": "Ko / A Revolução (A Mudar de Pele)",
    "trigramas": "Lago sobre Fogo (☱ / ☲)",
    "imagem": "A imagem clássica de A Revolução (A Mudar de Pele) orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para A Revolução (A Mudar de Pele) indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Renovação profunda, mudança de pele e transformação de velhas estruturas obsoletas.",
    "analiseCompleta": "Não tenha medo de mudar de opinião ou reinventar sua rotina. A renovação de hábitos é indispensável para a manutenção da longevidade.",
    "alertaSomatico": "Desprendimento de tensões crônicas antigas na fáscia muscular. Faça sessões de liberação miofascial."
  },
  "50": {
    "numero": 50,
    "nome": "Ting / O Caldeirão",
    "trigramas": "Fogo sobre Vento (☲ / ☴)",
    "imagem": "A imagem clássica de O Caldeirão orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para O Caldeirão indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Alquimia interna e refinamento de caráter. Transformação de matérias brutas em sabedoria.",
    "analiseCompleta": "Refine seus pensamentos e sentimentos como o metal no fogo. A alquimia da transformação pessoal transforma crises em sabedoria de vida.",
    "alertaSomatico": "Harmonização do eixo cérebro-intestino. Sentimento de centro e ancoragem corporal."
  },
  "51": {
    "numero": 51,
    "nome": "Chên / O Trovão (A Aposta)",
    "trigramas": "Trovão sobre Trovão (☳ / ☳)",
    "imagem": "A imagem clássica de O Trovão (A Aposta) orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para O Trovão (A Aposta) indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Despertar súbito através do impacto. O choque inicial que convida à reorganização da vida.",
    "analiseCompleta": "Os imprevistos da vida servem para despertar nossa consciência. Receba os choques do destino como convites para um reajuste de rota.",
    "alertaSomatico": "Resposta de sobressalto (startle reflex) ativada. Acalme o sistema nervoso com toques firmes no peito."
  },
  "52": {
    "numero": 52,
    "nome": "Kên / A Montanha (O Aquietamento)",
    "trigramas": "Montanha sobre Montanha (☶ / ☶)",
    "imagem": "A imagem clássica de A Montanha (O Aquietamento) orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para A Montanha (O Aquietamento) indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Aquietamento da mente e repouso da coluna. Encontrar a imobilidade serena no meio do turbilhão.",
    "analiseCompleta": "Aprenda a arte de silenciar o corpo e acalmar a mente. O aquietamento diário é a vacina definitiva contra o estresse corporativo.",
    "alertaSomatico": "Desativação completa da resposta de luta ou fuga. Estado ideal de meditação e repouso celular."
  },
  "53": {
    "numero": 53,
    "nome": "Chien / O Desenvolvimento Gradual",
    "trigramas": "Vento sobre Montanha (☴ / ☶)",
    "imagem": "A imagem clássica de O Desenvolvimento Gradual orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para O Desenvolvimento Gradual indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Progresso gradual e orgânico. O crescimento sustentável que respeita os ritmos da natureza.",
    "analiseCompleta": "Respeite o tempo de maturação de seus projetos e relacionamentos. O avanço gradual e constante garante raízes profundas e frutos doces.",
    "alertaSomatico": "Ritmo metabólico estável e sustentado. O corpo se regenera sem picos de estresse."
  },
  "54": {
    "numero": 54,
    "nome": "Kuei Mei / A Jovem que se Casa",
    "trigramas": "Trovão sobre Lago (☳ / ☱)",
    "imagem": "A imagem clássica de A Jovem que se Casa orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para A Jovem que se Casa indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Subordinação temporária e adaptação a papéis secundários com maturidade e discernimento.",
    "analiseCompleta": "Aceite as fases temporárias de transição com graciosidade. Nem sempre estamos no controle total; saiba fluir com o momento.",
    "alertaSomatico": "Tensão na região dos ombros por tentar se adaptar a expectativas alheias. Solte os ombros consciente mente."
  },
  "55": {
    "numero": 55,
    "nome": "Fêng / A Abundância (A Plenitude)",
    "trigramas": "Trovão sobre Fogo (☳ / ☲)",
    "imagem": "A imagem clássica de A Abundância (A Plenitude) orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para A Abundância (A Plenitude) indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Plenitude e abundância no ápice. Desfrutar do momento com consciência da impermanência.",
    "analiseCompleta": "Desfrute da plenitude de suas conquistas com gratidão. Mantenha os pés no chão, sabendo que a vida é feita de ciclos de expansão e recolhimento.",
    "alertaSomatico": "Sensação de abundância energética. Cuidado para não esgotar as reservas no final do dia."
  },
  "56": {
    "numero": 56,
    "nome": "Lü / O Viajante",
    "trigramas": "Fogo sobre Montanha (☲ / ☶)",
    "imagem": "A imagem clássica de O Viajante orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para O Viajante indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Transitoriedade do viajante. Manter a flexibilidade e a modéstia em terras desconhecidas.",
    "analiseCompleta": "Mantenha a mente aberta e o coração humilde em novas experiências. A postura de constante aprendiz enriquece a alma.",
    "alertaSomatico": "Adaptação rápida a mudanças de temperatura e ambiente. Mantenha o corpo protegido e agasalhado."
  },
  "57": {
    "numero": 57,
    "nome": "Sun / O Suave (O Vento)",
    "trigramas": "Vento sobre Vento (☴ / ☴)",
    "imagem": "A imagem clássica de O Suave (O Vento) orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para O Suave (O Vento) indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Penetração suave como o vento. Influenciar e transformar através da persistência delicada.",
    "analiseCompleta": "A persistência suave do vento molda até as rochas mais duras. Cultive a paciência amorosa no tratamento de seus desafios.",
    "alertaSomatico": "Relaxamento da musculatura profunda ao redor da coluna vertebral por respiração contínua."
  },
  "58": {
    "numero": 58,
    "nome": "Tui / O Alegre (O Lago)",
    "trigramas": "Lago sobre Lago (☱ / ☱)",
    "imagem": "A imagem clássica de O Alegre (O Lago) orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para O Alegre (O Lago) indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Alegria compartilhada, diálogo fluido e leveza nas trocas interpessoais.",
    "analiseCompleta": "Cultive a alegria sincera nas coisas simples e na convivência harmônica. A leveza de espírito atrai saúde e relacionamentos prósperos.",
    "alertaSomatico": "Sorriso espontâneo e desativação das rugas de expressão. Estímulo das hormônios do bem-estar."
  },
  "59": {
    "numero": 59,
    "nome": "Huan / A Dissolução (A Dispersão)",
    "trigramas": "Vento sobre Água (☴ / ☵)",
    "imagem": "A imagem clássica de A Dissolução (A Dispersão) orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para A Dissolução (A Dispersão) indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Dissolução de rigidez, preconceitos e barreiras emocionais. Retorno à fluidez natural.",
    "analiseCompleta": "Dissolva os bloqueios mentais e rigidezes emocionais. Permita que a compaixão e o entendimento fluam livremente em sua rotina.",
    "alertaSomatico": "Liberação de retenção hídrica e alívio do peso nas pernas através de drenagem simples."
  },
  "60": {
    "numero": 60,
    "nome": "Chieh / A Limitação",
    "trigramas": "Água sobre Lago (☵ / ☱)",
    "imagem": "A imagem clássica de A Limitação orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para A Limitação indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Limites saudáveis que estruturam a liberdade. Definir margens claras para evitar o transbordo.",
    "analiseCompleta": "Defina limites saudáveis para seu trabalho, descanso e alimentação. As margens claras trazem segurança e liberdade real para a vida.",
    "alertaSomatico": "Regularidade nos ritmos biológicos (sono, vigília e digestão). O corpo agradece a rotina clara."
  },
  "61": {
    "numero": 61,
    "nome": "Chung Fu / A Verdade Interior",
    "trigramas": "Vento sobre Lago (☴ / ☱)",
    "imagem": "A imagem clássica de A Verdade Interior orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para A Verdade Interior indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Verdade interior e empatia profunda. Conectar-se com o essencial no coração das relações.",
    "analiseCompleta": "A verdade e a sinceridade conectam você ao coração dos outros. Seja autêntico em suas palavras e transparente em suas intenções.",
    "alertaSomatico": "Sensação de paz no centro do peito. Diminuição expressiva da frequência cardíaca em repouso."
  },
  "62": {
    "numero": 62,
    "nome": "Hsiao Kuo / Preponderância do Pequeno",
    "trigramas": "Trovão sobre Montanha (☳ / ☶)",
    "imagem": "A imagem clássica de Preponderância do Pequeno orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para Preponderância do Pequeno indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Atenção meticulosa aos detalhes pequenos. Moderação de expectativas em momentos delicados.",
    "analiseCompleta": "Cuide das pequenas coisas com imenso carinho. A excelência nos detalhes constrói a grandeza dos grandes resultados.",
    "alertaSomatico": "Redução de tremores ou inquietação nas mãos através da focagem em tarefas manuais sutis."
  },
  "63": {
    "numero": 63,
    "nome": "Chi Chi / Após a Conclusão",
    "trigramas": "Água sobre Fogo (☵ / ☲)",
    "imagem": "A imagem clássica de Após a Conclusão orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para Após a Conclusão indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Equilíbrio alcançado que exige vigilância. Manter a atenção para não relaxar o cuidado.",
    "analiseCompleta": "Mesmo quando tudo parecer resolvido, mantenha a atenção preventiva. O cuidado contínuo preserva o equilíbrio conquistado.",
    "alertaSomatico": "Homeostase alcançada. Mantenha os cuidados básicos sem descuidar da prevenção diária."
  },
  "64": {
    "numero": 64,
    "nome": "Wei Chi / Antes da Conclusão",
    "trigramas": "Fogo sobre Água (☲ / ☵)",
    "imagem": "A imagem clássica de Antes da Conclusão orienta a busca por clareza moral, sabedoria de decisão e integridade de vida.",
    "julgamento": "A orientação para Antes da Conclusão indica o momento certo para alinhar intenções e colher os frutos da perseverança ética.",
    "sintese": "Antes da conclusão total. Preparar o último passo com calma e foco para cruzar a linha.",
    "analiseCompleta": "Esteja atento aos momentos finais de transição. Mantenha o foco até cruzar completamente a linha de chegada de seus objetivos.",
    "alertaSomatico": "Sensação de expectativa e prontidão. Mantenha a respiração baixa no abdômen para evitar a ansiedade final."
  }
};
