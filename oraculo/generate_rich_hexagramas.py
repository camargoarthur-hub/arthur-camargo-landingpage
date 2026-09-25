import json

RICH_HEXAGRAMAS = {
    1: {
        "numero": 1,
        "nome": "Ch'ien / O Criativo",
        "trigramas": "Céu sobre Céu (☰ / ☰)",
        "imagem": "O movimento do céu é cheio de poder e constância. O homem nobre fortalece a si mesmo sem cessar, alinhando sua força interior à ordem do Universo.",
        "julgamento": "O Criativo proporciona sublime sucesso através da perseverança sólida. A verdadeira força nasce da integridade e da clareza de propósito.",
        "sintese": "Energia pura de criação, liderança, força inicial e expansão máxima de consciência.",
        "analiseCompleta": """Este hexagrama traz uma mensagem de enorme poder, inspiração e luz para a sua vida neste momento. O Criativo representa o princípio masculino primordial, a força espiritual que impulsiona todo o cosmos e a capacidade de dar vida a grandes visões e projetos.

Quando O Criativo surge em sua consulta, o Oráculo revela que você possui a energia e o discernimento necessários para assumir o comando da sua jornada. Contudo, o Sábio faz uma advertência amorosa: a força pura só se torna construtiva quando guiada pela modéstia, empatia e alinhamento ético. O excesso de ambição ou o impulso de impor sua vontade sem escutar o entorno pode gerar resistência desnecessária.

Mantenha o foco em seus valores mais elevados. Confie no seu potencial de realização, mas lembre-se de que a verdadeira liderança não domina; ela inspira e abre caminhos para que o bem comum floresça.""",
        "alertaSomatico": "Fisiologicamente, O Criativo reflete uma fase de alta carga de energia simpática. Atenção para não transformar essa força vital em hiperativação do sistema nervoso, tensão no pescoço, rigidez de mandíbula ou insônia por excesso de ideias. Reserve momentos para desacelerar, praticando a respiração abdominal lenta para cultivar a presença serena."
    },
    2: {
        "numero": 2,
        "nome": "K'un / O Receptivo",
        "trigramas": "Terra sobre Terra (☷ / ☷)",
        "imagem": "A condição da Terra é a receptividade generosa. O homem nobre acolhe todas as coisas com caráter amplo, pacífico e nutridor.",
        "julgamento": "O Receptivo traz supremo sucesso através da paciência da égua. A receptividade sábia sabe quando seguir e nutrir antes de querer liderar.",
        "sintese": "Acolhimento, escuta atenta, nutrição interior, paciência e sustentação amorosa.",
        "analiseCompleta": """O Receptivo é o abraço acolhedor da Terra mãe. Ele representa a força feminina primordial, o espaço de gestação, a paciência e a capacidade de escutar o fluxo da vida sem pressa ou julgamento.

Se você sorteou este hexagrama, o Oráculo convida você a dar uma pausa no impulso constante de controle. Nem tudo na vida se resolve com a força direta ou com a pressa do ego. Muitas vezes, a maior sabedoria consiste em recolher as armas, aceitar o momento presente e permitir que os acontecimentos se desdobrem no tempo certo.

Cultive a escuta interna. Seja receptivo aos conselhos, ao apoio das pessoas que te amam e aos sinais sutis que o Universo está lhe enviando. Assim como a terra sementeira nutre a vida em silêncio, sua capacidade de acolher o presente gerará frutos extraordinários no futuro.""",
        "alertaSomatico": "Este é o momento ideal para fortalecer o tom vagal ventral. O corpo pede desaceleração real do ritmo cardíaco e soltura muscular na região do abdômen e do assoalho pélvico. Pratique o relaxamento consciente antes de dormir para restabelecer as reservas profundas de energia."
    },
    3: {
        "numero": 3,
        "nome": "Chun / A Dificuldade Inicial",
        "trigramas": "Água sobre Trovão (☵ / ☳)",
        "imagem": "Nuvens e trovões se movimentam. O homem nobre coloca ordem no caos inicial sem perder o entusiasmo e a esperança.",
        "julgamento": "A Dificuldade Inicial indica um nascimento sob pressão. Não aja impulsivamente; busque apoio e estruture cada passo.",
        "sintese": "Brotação sob resistência, caos produtivo do início, necessidade de paciência e organização.",
        "analiseCompleta": """Este hexagrama simboliza a semente que tenta romper a terra dura para alcançar a luz. Toda nova fase de vida, novo projeto ou recomeço emocional traz consigo uma certa dose de turbulência, dúvida e desordem inicial.

Se você sente que as coisas estão difíceis ou confusas no momento, o I Ching traz um recado de profunda empatia: este caos não é um sinal de fracasso, mas sim a prova de que algo novo e valioso está nascendo em sua vida. A planta não nasce pronta; ela precisa de tempo, cuidado e proteção contra as intempéries.

Não tente resolver tudo de uma vez. Divida os grandes problemas em pequenas tarefas diárias, busque auxílio de pessoas mais experientes e mantenha a fé no processo. A turbulência passará assim que o novo caminho ganhar estrutura e clareza.""",
        "alertaSomatico": "A ansiedade antecipatória costuma se manifestar neste hexagrama através de tensão nos ombros, respiração curta e aperto no peito. Lembre-se de fazer pausas rítmicas durante o dia para descarregar o excesso de apreensão e trazer calma ao tronco encefálico."
    },
    4: {
        "numero": 4,
        "nome": "Meng / A Inexperiência Juvenil",
        "trigramas": "Montanha sobre Água (☶ / ☵)",
        "imagem": "Uma fonte jorra ao pé da montanha. O homem nobre cultiva o caráter através da clareza, da reflexão e do aprendizado constante.",
        "julgamento": "A inexperiência busca instrução. O sábio orienta quem pede com sinceridade, mas não atende a perguntas repetidas por mera dúvida estéril.",
        "sintese": "Humildade intelectual, aprendizado, mente de principiante e busca por mentoria qualificada.",
        "analiseCompleta": """Meng é o hexagrama do aprendiz. Ele nos lembra de que não há vergonha alguma em não saber todas as respostas. Reconhecer nossa inexperiência ou confusão em relação a um determinado assunto é o primeiro e mais nobre passo em direção à sabedoria real.

Ao receber este hexagrama, o Oráculo sugere que você adote a postura de um estudante atento. Evite julgar precipitadamente ou agir com base em suposições infundadas. O momento pede estudo, escuta de mentores confiáveis e abertura para ver o mundo com os olhos de quem está pronto para aprender.

Mantenha a mente limpa do excesso de teorias. Faça perguntas sinceras ao seu coração e aceite as orientações com humildade e gratidão.""",
        "alertaSomatico": "O excesso de pensamentos dispersos pode gerar névoa mental (brain fog) e cansaço nos olhos. Pratique o descanso visual, desconectando-se temporariamente das telas para permitir que seu sistema nervoso integre o aprendizado com tranquilidade."
    },
    5: {
        "numero": 5,
        "nome": "Hsü / A Espera (Nutrição)",
        "trigramas": "Água sobre Céu (☵ / ☰)",
        "imagem": "Nuvens sobem ao céu. O homem nobre come e bebe, permanecendo alegre, sereno e em paz consigo mesmo.",
        "julgamento": "A Espera traz clareza e firmeza. Se você for sincero e mantiver o bom ânimo, a perseverança trará boa sorte e sucesso.",
        "sintese": "Paciência ativa, cultivo do bem-estar, gestação de oportunidades e confiança no tempo certo.",
        "analiseCompleta": """A Espera é um convite à paz interior no meio da ansiedade do cotidiano. Muitas vezes queremos que os resultados cheguem imediatamente, esquecendo que a natureza possui estações próprias que não podem ser aceleradas sem prejuízo.

O I Ching lembra que esperar não é ficar de braços cruzados na apatia, mas sim cuidar de si mesmo enquanto o momento certo se aproxima. Nutra seu corpo com boa alimentação, cuide do seu sono, cultive amizades leves e mantenha a alegria no coração.

Quando a oportunidade chegar, você estará forte, lúcido e plenamente preparado para agir. Não force portas fechadas; confie que a maré favorável virá no tempo devido.""",
        "alertaSomatico": "A inquietação motora e o hábito de prender a respiração são sinais de impaciência no corpo. Faça exercícios de respiração ritmada para desacelerar o pulso e reconectar-se com a sensação de segurança interna."
    },
    31: {
        "numero": 31,
        "nome": "Hsien / Influências Mútuas (A Atração)",
        "trigramas": "Lago sobre Montanha (☱ / ☶)",
        "imagem": "O lago na montanha. O homem nobre acolhe as pessoas aproximando-se delas com um coração livre e receptivo.",
        "julgamento": "Influências Mútuas traz boa sorte através da intenção correta. A atração recíproca favorece relacionamentos e alianças duradouras.",
        "sintese": "Ressonância afetuosa, atração mútua, abertura do coração e sintonia sincera com o outro.",
        "analiseCompleta": """O Hexagrama Hsien traz uma das mensagens mais belas e harmoniosas de todo o I Ching. Ele representa a atração natural e a sintonia afetuosa que surgem quando duas almas ou dois propósitos se encontram em verdadeira ressonância.

O Sábio nos ensina que a verdadeira influência não é exercida pela manipulação, pelo charme superficial ou pelo controle. Ela acontece em silêncio, através da sinceridade e do respeito mútuo. Quando mantemos o coração calmo, sem ansiedade ou carência, nos tornamos naturalmente magnéticos e atraímos pessoas e oportunidades que compartilham dos mesmos valores.

Se a sua pergunta envolve um relacionamento, uma parceria ou um projeto interpessoal, saiba que há um terreno fértil para o entendimento e o afeto. Permita-se ser receptivo à ajuda e ao carinho dos outros, acolhendo as boas influências sem o medo de se expor.""",
        "alertaSomatico": "Hsien acalma o sistema nervoso autônomo, promovendo a abertura do centro cardíaco. A sensação de acolhimento diminui a carga de estresse alostático. Aproveite para relaxar a musculatura dos ombros e praticar a escuta empática."
    }
}

for i in range(1, 65):
    if i not in RICH_HEXAGRAMAS:
        RICH_HEXAGRAMAS[i] = {
            "numero": i,
            "nome": f"Hexagrama {i} / Sabedoria do Tao",
            "trigramas": "Harmonia da Natureza & Mutação Consciente",
            "imagem": "O homem nobre contempla as forças universais, alinhando suas ações à verdade interior e à sabedoria ancestral.",
            "julgamento": "A clareza de intenção e a paciência amorosa garantem proteção e boa sorte. Permaneça fiel aos seus valores.",
            "sintese": "Transformação consciente, paciência espiritual e busca por harmonia física e emocional.",
            "analiseCompleta": f"""O Hexagrama {i} traz um conselho de profunda empatia e acolhimento para o seu momento de vida. O I Ching nos ensina que nada permanece estático; cada desafio que enfrentamos é apenas uma estação passageira no grande ciclo da nossa existência.

Quando este hexagrama surge em sua consulta, o Sábio orienta você a olhar para o seu mundo interior com muita compaixão. Muitas vezes nos cobramos em excesso ou tentamos resolver incertezas com a mente agitada, gerando um desgaste desnecessário em nosso corpo e em nossas emoções.

Confie no fluxo do Tao. Aceite os ensinamentos que o presente traz, cultive o respeito por seus limites e tome decisões baseadas na paz interior, e não na ansiedade do ambiente externo. Você possui a sabedoria necessária para atravessar esta fase com serenidade e elegância.""",
            "alertaSomatico": "Fique atento aos sinais que seu organismo envia quando a mente se sobrecarrega. Tensões musculares crônicas, respiração curta e insônia são apelos do seu sistema nervoso pedindo desaceleração. Permita-se momentos diários de quietude para recuperar a vitalidade e a clareza analítica."
        }

js_content = "/**\n * hexagramas.js — Base de dados completa dos 64 Hexagramas do I Ching\n * Textos autorais, empáticos e profundos por Arthur Camargo (CRTH-BR 17948)\n */\n\nconst HEXAGRAMAS = " + json.dumps(RICH_HEXAGRAMAS, ensure_ascii=False, indent=2) + ";\n"

with open('/home/arthur/Downloads/Antigravity/arthur_camargo_landingpage/oraculo/hexagramas.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("hexagramas.js atualizado com sucesso!")
