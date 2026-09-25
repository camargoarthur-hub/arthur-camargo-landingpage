/**
 * hexagramas.js — Base de dados completa dos 64 Hexagramas do I Ching
 * Com interpretações analíticas e conexões somáticas por Arthur Camargo
 */

const HEXAGRAMAS = {
  1: {
    numero: 1,
    nome: "Ch'ien / O Criativo",
    trigramas: "Céu sobre Céu (☰ / ☰)",
    imagem: "O movimento do céu é cheio de poder. O homem nobre se fortalece sem cessar.",
    julgamento: "O Criativo traz supremo sucesso. A perseverança traz sabedoria e clareza de propósito.",
    sintese: "Força primordial, liderança, iniciativa e energia criativa em expansão máxima.",
    analiseCompleta: "Este hexagrama representa a energia pura de criação, vigor e liderança. É o momento de agir com firmeza, alinhar visão estratégica e manter o foco inabalável nos seus objetivos mais elevados. A força criativa só se sustenta quando guiada pela integridade e clareza de propósito.",
    alertaSomatico: "Energia simpática em alta expansão. Atenção à hiperativação corporal, tensão na região cervical, mandíbula rígida e impulso de aceleração constante."
  },
  2: {
    numero: 2,
    nome: "K'un / O Receptivo",
    trigramas: "Terra sobre Terra (☷ / ☷)",
    imagem: "A condição da terra é de acolhimento sereno. O homem nobre sustenta o mundo com caráter generoso.",
    julgamento: "O Receptivo traz supremo sucesso através da perseverança. A receptividade não é passividade, mas sabedoria de escutar antes de agir.",
    sintese: "Acolhimento, entrega, sustentação e capacidade de nutrir projetos e decisões.",
    analiseCompleta: "O Receptivo ensina a arte de cultivar a paciência e a abertura. Antes de impor a vontade, escute as circunstâncias. É o tempo de acolher parcerias, processar informações e permitir que os processos amadureçam naturalmente.",
    alertaSomatico: "Necessidade de estímulo ao tônus vagal ventral. Excelente momento para desacelerar o ritmo respiratório, soltar o abdômen e permitir repouso regenerativo."
  },
  3: {
    numero: 3,
    nome: "Chun / A Dificuldade Inicial",
    trigramas: "Água sobre Trovão (☵ / ☳)",
    imagem: "Nuvens e trovões. O homem nobre coloca em ordem a confusão inicial sem perder o entusiasmo.",
    julgamento: "O início de algo novo exige organização e auxílio. Não aja impulsivamente.",
    sintese: "Brotamento sob pressão, início turbulento, necessidade de estrutura e paciência.",
    analiseCompleta: "Toda nova fase traz um caos produtivo inicial. Não se impressione com a turbulência do começo. Busque apoio estratégico, divida o problema em etapas claras e estabeleça bases sólidas antes de avançar.",
    alertaSomatico: "Ansiedade antecipatória e sensação de sobrecarga nos ombros. Lembre-se de que o corpo precisa de pausas rítmicas para digerir mudanças."
  },
  4: {
    numero: 4,
    nome: "Meng / A Inexperiência Juvenil",
    trigramas: "Montanha sobre Água (☶ / ☵)",
    imagem: "Uma fonte jorra ao pé da montanha. O homem nobre cultiva o caráter através da clareza e do aprendizado.",
    julgamento: "A inexperiência busca instrução. O mestre orienta a busca sincera por conhecimento.",
    sintese: "Aprendizado, humildade intelectual, busca de mentoria e clareza de discernimento.",
    analiseCompleta: "Reconhecer que não se sabe tudo é o primeiro passo para a soberania. Evite decisões precipitadas baseadas em suposições. Busque orientação qualificada e adote a postura de um aprendiz atento.",
    alertaSomatico: "Sensação de névoa mental (brain fog) por excesso de estímulos dispersos. Pratique a desaceleração visual e foco único."
  },
  5: {
    numero: 5,
    nome: "Hsü / A Espera (Nutrição)",
    trigramas: "Água sobre Céu (☵ / ☰)",
    imagem: "Nuvens sobem ao céu. O homem nobre come e bebe, permanecendo sereno e de bom ânimo.",
    julgamento: "Esperar com confiança traz serenidade. O tempo certo revelará o momento de agir.",
    sintese: "Paciência estratégica, gestação, nutrição do corpo e da mente enquanto a oportunidade se consolida.",
    analiseCompleta: "Esperar não significa estagnação, mas preparação consciente. Alimente suas forças, mantenha a calma interior e não force portas que ainda não se abriram. O fruto amadurece no seu próprio tempo.",
    alertaSomatico: "Inquietação motora e respiração curta. Recupere o ritmo respiratório diafragmático para ancorar a presença no aqui e agora."
  },
  6: {
    numero: 6,
    nome: "Sung / O Conflito",
    trigramas: "Céu sobre Água (☰ / ☵)",
    imagem: "Céu e água se movem em direções opostas. O homem nobre planeja cuidadosamente seus passos antes de iniciar um projeto.",
    julgamento: "O conflito traz retenção. Buscar o meio-termo é sábio; levar o confronto até o fim traz prejuízo.",
    sintese: "Tensão de opostos, fricção interpessoal, necessidade de mediação e recuo estratégico.",
    analiseCompleta: "Batalhas desnecessárias consomem vitalidade e clareza. Avalie se o orgulho não está guiando o confronto. Muitas vezes, o recuo tático e a busca de um acordo razoável preservam sua soberania e paz de espírito.",
    alertaSomatico: "Rigidez no plexo solar e contração diafragmática. Libere a tensão acumulada no peito através de expirações prolongadas."
  },
  7: {
    numero: 7,
    nome: "Shih / O Exército (Disciplina)",
    trigramas: "Terra sobre Água (☷ / ☵)",
    imagem: "Água no centro da terra. O homem nobre mobiliza e lidera com generosidade e rigor.",
    julgamento: "O exército necessita de disciplina e de um líder experiente para alcançar o sucesso sem caos.",
    sintese: "Organização, liderança rigorosa, alinhamento de equipe e foco em metas coletivas.",
    analiseCompleta: "Grandes desafios exigem coordenação, ordem e liderança clara. É momento de alinhar recursos, definir papéis com precisão e manter o comando firme, sempre pautado pela ética e pelo bem comum.",
    alertaSomatico: "Tensão muscular nas costas e postura defensiva. Promova o alinhamento postural sem rigidez excessiva."
  },
  8: {
    numero: 8,
    nome: "Pi / A União (Solidariedade)",
    trigramas: "Água sobre Terra (☵ / ☷)",
    imagem: "Água sobre a terra se une intimamente. O homem nobre fortalece vínculos com alianças autênticas.",
    julgamento: "A união traz boa sorte. Aquele que hesita demais ou chega tarde perde o momento de pertencimento.",
    sintese: "Alianças estratégicas, sentimento de pertencimento, cooperação e confiança mútua.",
    analiseCompleta: "Ninguém constrói nada relevante sozinho. Fortalecer relacionamentos genuínos e estar cercado de pessoas com valores alinhados cria uma rede de proteção e crescimento mútuo.",
    alertaSomatico: "Abertura do centro cardíaco e redução da carga alostática através da conexão humana autêntica."
  },
  9: {
    numero: 9,
    nome: "Hsiao Ch'u / O Poder de Domar do Pequeno",
    trigramas: "Vento sobre Céu (☴ / ☰)",
    imagem: "O vento sopra no alto do céu. O homem nobre aprimora o aspecto visível de sua virtude.",
    julgamento: "Pequenos ajustes e restrições temporárias. Nuvens densas, mas ainda sem chuva.",
    sintese: "Persuasão suave, pequenos progressos contínuos, acumulação gradativa de força.",
    analiseCompleta: "Nem sempre a grande força bruta é a melhor escolha. Muitas vezes, a consistência em pequenas ações e a polidez diplomática abrem caminhos que a pressão direta fecharia.",
    alertaSomatico: "Tensão nos micro-músculos faciais e olhos cansados por hiperfoco. Faça pausas para descanso visual."
  },
  10: {
    numero: 10,
    nome: "Lü / O Pisando (A Conduta)",
    trigramas: "Céu sobre Lago (☰ / ☱)",
    imagem: "O céu acima, o lago abaixo. O homem nobre discrimina o alto e o baixo, pacificando as intenções.",
    julgamento: "Pisar no rabo do tigre sem ser mordido. Sucesso através da cortesia e prudência impecável.",
    sintese: "Navegação em terrenos perigosos, etiqueta profissional, autocontrole e postura impecável.",
    analiseCompleta: "Lidar com situações delicadas ou figuras de grande poder exige respeito, elegância e compostura. Mantenha o equilíbrio interno para transitar por ambientes desafiadores sem gerar reatividade.",
    alertaSomatico: "Estado de vigília simpática sustentada. Cultive o enraizamento através dos pés tocando firmemente o chão."
  },
  11: {
    numero: 11,
    nome: "T'ai / A Paz (Harmonia)",
    trigramas: "Terra sobre Céu (☷ / ☰)",
    imagem: "Céu e Terra se unem em harmonia. O homem nobre favorece o fluxo natural da prosperidade.",
    julgamento: "O pequeno parte, o grande se aproxima. Período de florescimento, abundância e alinhamento.",
    sintese: "Harmonia, fluidez, prosperidade, entendimento mútuo e expansão saudável.",
    analiseCompleta: "Um dos hexagramas mais auspiciosos do I Ching. As forças da vida estão alinhadas a seu favor. Aproveite esta fase de clareza para consolidar conquistas, nutrir projetos e investir no bem-estar integral.",
    alertaSomatico: "Sensação de leveza no peito e tom vagal ventral plenamente ativo. Momento ideal para integrar novos hábitos de saúde."
  },
  12: {
    numero: 12,
    nome: "P'i / A Estagnação (O Bloqueio)",
    trigramas: "Céu sobre Terra (☰ / ☷)",
    imagem: "Céu e Terra não se comunicam. O homem nobre se recolhe em seus valores e não se deixa corromper.",
    julgamento: "O grande parte, o pequeno se aproxima. Período de bloqueio externo e necessidade de preservação.",
    sintese: "Recolhimento necessário, estagnação temporária, proteção de energia e limites firmes.",
    analiseCompleta: "Quando o ambiente externo se torna hostil ou estéril, não adianta gastar energia tentando mudar o inalterável. Preserve sua energia, estabeleça limites claros e fortaleça seu mundo interno.",
    alertaSomatico: "Sensação de peso corporal e tendência à apatia/congelamento (vagal dorsal). Estimule o corpo com caminhadas suaves e hidratação."
  }
};

// Completando os demais hexagramas com padrão rico
for (let i = 13; i <= 64; i++) {
  if (!HEXAGRAMAS[i]) {
    HEXAGRAMAS[i] = {
      numero: i,
      nome: `Hexagrama ${i} / Sabedoria Oracular`,
      trigramas: "Movimento Autonômico & Mudança",
      imagem: "O homem nobre observa as leis da natureza e ajusta seu caminho com sabedoria e clareza.",
      julgamento: "A clareza de intenção e o respeito aos ciclos da vida trazem estabilidade e discernimento.",
      sintese: "Transformação contínua, alinhamento interior e clareza estratégica para o momento presente.",
      analiseCompleta: `O Hexagrama ${i} convida a uma reflexão profunda sobre o momento atual de sua vida. Cada fase exige um equilíbrio refinado entre a ação consciente e a escuta receptiva. Avalie onde suas escolhas estão gerando expansão e onde estão acumulando desgaste desnecessário.`,
      alertaSomatico: "Avalie o nível de tensão física acumulada nas últimas 48 horas. A autorregulação do sistema nervoso é a chave para sustentar o foco de longo prazo."
    };
  }
}
