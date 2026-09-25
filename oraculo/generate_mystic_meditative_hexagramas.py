import json

MEDITATIVE_HEXAGRAMAS = {}

HEX_SACRED_INFO = {
    1: ("Ch'ien / O Criativo", "Céu sobre Céu (☰ / ☰)", "O firmamento infinito repousando sobre outro céu de luz puríssima."),
    2: ("K'un / O Receptivo", "Terra sobre Terra (☷ / ☷)", "A mãe terra vasta e silenciosa, que tudo acolhe e tudo nutre sem nada exigir."),
    3: ("Chun / A Dificuldade Inicial", "Água sobre Trovão (☵ / ☳)", "O trovão que desperta a semente no fundo da terra enquanto a chuva desce dos céus."),
    4: ("Meng / A Inexperiência Juvenil", "Montanha sobre Água (☶ / ☵)", "A fonte límpida jorrando aos pés da montanha sagrada."),
    5: ("Hsü / A Espera (Nutrição)", "Água sobre Céu (☵ / ☰)", "As nuvens carregadas flutuando no alto do céu, aguardando a bênção da chuva no tempo divino."),
    6: ("Sung / O Conflito", "Céu sobre Água (☰ / ☵)", "O céu que se eleva ao infinito e a água que desce ao abismo, seguindo caminhos opostos."),
    7: ("Shih / O Exército (Disciplina)", "Terra sobre Água (☷ / ☵)", "A água oculta e preservada nas profundezas escuras da terra materna."),
    8: ("Pi / A União (Solidariedade)", "Água sobre Terra (☵ / ☷)", "A água serena que flui e se entrega à terra, tornando-se um só corpo com ela."),
    9: ("Hsiao Ch'u / O Poder de Domar do Pequeno", "Vento sobre Céu (☴ / ☰)", "O vento sutil e invisível acariciando a vastidão do céu supremo."),
    10: ("Lü / A Conduta (Pisar)", "Céu sobre Lago (☰ / ☱)", "O céu imenso refletindo sua majestade nas águas tranquilas do lago."),
    11: ("T'ai / A Paz (Harmonia)", "Terra sobre Céu (☷ / ☰)", "A terra descendo em acolhimento e o céu subindo em elevação, encontrando-se no meio."),
    12: ("P'i / A Estagnação (O Bloqueio)", "Céu sobre Terra (☰ / ☷)", "O céu que se retira para as alturas e a terra que se recolhe na profundeza, em silêncio."),
    13: ("T'ung Jên / A Comunhão entre os Homens", "Céu sobre Fogo (☰ / ☲)", "A chama sagrada subindo em direção ao céu aberto, unindo a terra ao divino."),
    14: ("Ta Yu / A Posse em Grande Medida", "Fogo sobre Céu (☲ / ☰)", "O sol do meio-dia brilhando no cume do céu, banhando o mundo com sua compaixão radiante."),
    15: ("Ch'ien / A Modéstia", "Terra sobre Montanha (☷ / ☶)", "A montanha grandiosa descansando humildemente abaixo da terra plana."),
    16: ("Yü / O Entusiasmo", "Trovão sobre Terra (☳ / ☷)", "O trovão primordial ressoando na terra e despertando toda a vida adormecida."),
    17: ("Sui / O Seguimento", "Lago sobre Trovão (☱ / ☳)", "A alegria do lago sereno acompanhando o movimento profundo do trovão."),
    18: ("Ku / Trabalho no Que Se Deteriorou", "Montanha sobre Vento (☶ / ☴)", "O vento parado na base da montanha, aguardando a brisa da purificação espiritual."),
    19: ("Lin / A Aproximação", "Terra sobre Lago (☷ / ☱)", "A terra acolhedora debruçando-se com ternura sobre as águas do lago."),
    20: ("Kuan / A Contemplação (A Visão)", "Vento sobre Terra (☴ / ☷)", "O vento sagrado soprando suavemente sobre a superfície da terra sagrada."),
    21: ("Shih Ho / Morder e Romper", "Fogo sobre Trovão (☲ / ☳)", "O relâmpago cortando a escuridão enquanto o trovão faz tremer o ilusório."),
    22: ("Pi / A Graça (A Beleza)", "Montanha sobre Fogo (☶ / ☲)", "A luz suave do pôr do sol iluminando a silhueta da montanha contemplativa."),
    23: ("Po / A Desagregação (A Ruína)", "Montanha sobre Terra (☶ / ☷)", "A montanha entregando suas rochas à terra, desfazendo-se sem medo do vazio."),
    24: ("Fu / O Retorno (O Ponto de Virada)", "Terra sobre Trovão (☷ / ☳)", "A centelha do trovão renascendo no útero profundo da mãe terra no solstício de inverno."),
    25: ("Wu Wang / A Inocência", "Céu sobre Trovão (☰ / ☳)", "O movimento puro do trovão ressoando sob o domo transparente do céu."),
    26: ("Ta Ch'u / O Grande Poder de Domar", "Montanha sobre Céu (☶ / ☰)", "A imensidão do céu guardada na serenidade imóvel da grande montanha."),
    27: ("I / A Provisão de Alimentos", "Montanha sobre Trovão (☶ / ☳)", "A montanha sagrada abrigando o trovão interior, nutrindo a vida no templo."),
    28: ("Ta Kuo / Preponderância do Grande", "Lago sobre Vento (☱ / ☴)", "As águas profundas do lago cobrindo os juncos flexíveis com suave peso."),
    29: ("K'an / O Abismo (A Água)", "Água sobre Água (☵ / ☵)", "A água fluindo interminável através das gargantas mais escuras até alcançar a profundeza."),
    30: ("Li / O Aderir (O Fogo)", "Fogo sobre Fogo (☲ / ☲)", "A chama dupla da consciência dançando e iluminando a escuridão do ser."),
    31: ("Hsien / Influências Mútuas", "Lago sobre Montanha (☱ / ☶)", "O lago límpido repousando com mansidão no cume da montanha serena."),
    32: ("Hêng / A Constância (A Duração)", "Trovão sobre Vento (☳ / ☴)", "O vento e o trovão unidos em eterna dança cósmica que nunca perde o ritmo."),
    33: ("TUN / A Retirada (O Recuo)", "Céu sobre Montanha (☰ / ☶)", "O céu recolhendo-se suavemente para as alturas, além do alcance da montanha."),
    34: ("Ta Chuang / O Poder do Grande", "Trovão sobre Céu (☳ / ☰)", "O trovão sagrado retumbando nas alturas invioláveis do firmamento."),
    35: ("Chin / O Progresso", "Fogo sobre Terra (☲ / ☷)", "A luz radiante do sol despontando suavemente sobre os horizontes da terra."),
    36: ("Ming I / O Obscurecimento da Luz", "Terra sobre Fogo (☷ / ☲)", "A chama interior ocultando seu brilho sob o véu protetor da noite escura."),
    37: ("Chia Jên / A Família", "Vento sobre Fogo (☴ / ☲)", "O calor do fogo sagrado alimentado pelo vento sutil no coração do santuário."),
    38: ("K'uei / A Oposição", "Fogo sobre Lago (☲ / ☱)", "A chama que se eleva ao céu e as águas do lago que buscam as profundezas."),
    39: ("Chien / O Obstáculo", "Água sobre Montanha (☵ / ☶)", "As torrentes da montanha convidando o caminhante à pausa e à oração em silêncio."),
    40: ("Hsieh / A Liberação", "Trovão sobre Água (☳ / ☵)", "A chuva abençoada caindo após o trovão, purificando a atmosfera do mundo."),
    41: ("Sun / A Diminuição", "Montanha sobre Lago (☶ / ☱)", "As águas profundas do lago evaporando docemente para coroar o topo da montanha."),
    42: ("I / O Aumento", "Vento sobre Trovão (☴ / ☳)", "O vento forte acelerando o trovão em uma dança de expansão sagrada."),
    43: ("Kua / A Irrupção (A Resolução)", "Lago sobre Céu (☱ / ☰)", "A água acumulada no céu transbordando em bênçãos de renovação espiritual."),
    44: ("Kou / Vindo ao Encontro", "Céu sobre Vento (☰ / ☴)", "A brisa sutil que sopra sob o céu infinito, encontrando todas as coisas com suavidade."),
    45: ("Ts'ui / A Reunião (A Coleção)", "Lago sobre Terra (☱ / ☷)", "A água pura do lago juntando-se sobre o regaço fertilizado da mãe terra."),
    46: ("Shêng / A Elevação", "Terra sobre Vento (☷ / ☴)", "O broto tenro crescendo em silêncio sob a terra macia, buscando o céu sem pressa."),
    47: ("K'un / A Opressão (A Exaustão)", "Lago sobre Água (☱ / ☵)", "O lago que esvazia suas águas para as profundezas, repousando em vaziez contemplativa."),
    48: ("Ching / O Poço de Água", "Água sobre Vento (☵ / ☴)", "O poço ancestral cuja água cristalina nunca se esgota e a todos dessedenta."),
    49: ("Ko / A Revolução (Mudar de Pele)", "Lago sobre Fogo (☱ / ☲)", "O fogo que purifica o lago e a água que tempera o fogo em metamorfose sagrada."),
    50: ("Ting / O Caldeirão", "Fogo sobre Vento (☲ / ☴)", "O caldeirão espiritual onde os alimentos divinos são preparados pelo fogo e pelo vento."),
    51: ("Chên / O Trovão", "Trovão sobre Trovão (☳ / ☳)", "O eco retumbante do trovão duplo que desperta as almas do sono da ilusão."),
    52: ("Kên / A Montanha (O Aquietamento)", "Montanha sobre Montanha (☶ / ☶)", "A montanha imóvel diante da montanha serena, em quietude absoluta."),
    53: ("Chien / O Desenvolvimento Gradual", "Vento sobre Montanha (☴ / ☶)", "O pinheiro ancestral crescendo lentamente nas escarpas da montanha alta."),
    54: ("Kuei Mei / A Jovem que se Casa", "Trovão sobre Lago (☳ / ☱)", "O trovão em movimento sobre a superfície mutável do lago quieto."),
    55: ("Fêng / A Abundância (A Plenitude)", "Trovão sobre Fogo (☳ / ☲)", "O relâmpago que ilumina os céus enquanto a plenitude da luz banha o templo."),
    56: ("Lü / O Viajante", "Fogo sobre Montanha (☲ / ☶)", "A pequena fogueira do peregrino queimando suavemente na encosta da montanha."),
    57: ("Sun / O Suave (O Vento)", "Vento sobre Vento (☴ / ☴)", "O vento sutil que sopra sem cessar, moldando a criação com doçura infinita."),
    58: ("Tui / O Alegre (O Lago)", "Lago sobre Lago (☱ / ☱)", "O espelho d'água duplo refletindo a luz do sol em alegria contagiante."),
    59: ("Huan / A Dissolução (A Dispersão)", "Vento sobre Água (☴ / ☵)", "O vento sagrado soprando sobre a névoa das águas e dissolvendo todas as ilusões."),
    60: ("Chieh / A Limitação", "Água sobre Lago (☵ / ☱)", "A água contida com sabedoria nos limites sagrados do recipiente límpido."),
    61: ("Chung Fu / A Verdade Interior", "Vento sobre Lago (☴ / ☱)", "O vento sutil acariciando o lago e ressoando no centro do coração sincero."),
    62: ("Hsiao Kuo / Preponderância do Pequeno", "Trovão sobre Montanha (☳ / ☶)", "O canto distante do pássaro ecoando nas brumas da montanha serena."),
    63: ("Chi Chi / Após a Conclusão", "Água sobre Fogo (☵ / ☲)", "A caldeira em perfeito equilíbrio sobre a chama suave da consciência."),
    64: ("Wei Chi / Antes da Conclusão", "Fogo sobre Água (☲ / ☵)", "A chama da esperança brilhando acima das águas, aguardando o momento da plenitude.")
}

def criar_texto_meditativo(num):
    nome_full, trigramas, elemento_desc = HEX_SACRED_INFO.get(num, (f"Hexagrama {num}", "Tao e Mutação", "A sabedoria natural das coisas."))
    nome_curto = nome_full.split('/')[1].strip() if '/' in nome_full else nome_full

    analise_meditativa = f"""Feche os olhos por um breve instante, amado ser. Respire. Deixe que o ar entre devagar em seu peito e saia sem pressa, levando embora o cansaço do mundo. Se nesta hora o seu coração carrega o peso do sofrimento, se a dor ou a inquietação parecem nublar o seu olhar, acolha esse momento com profunda doçura. Este espaço é um refúgio sagrado onde nada lhe é cobrado. Na sabedoria imortal do Tao Te Ching, aprendemos que a noite escura não é o fim da luz, mas o berço silencioso onde a aurora é gestada. O Yin e o Yang dançam em ritmo eterno: a sombra mais densa é apenas a grande mãe preparando o retorno do Sol. Sua dor não é um sinal de fraqueza ou extravio, mas sim a vida chamando seu espírito de volta para casa.

O Hexagrama {nome_full} se manifesta nesta consulta sagrada trazendo a imagem divina de {trigramas}. Contemple com os olhos da alma essa paisagem da natureza: {elemento_desc}. No ancestral Livro das Mutações, os trigramas não são meros símbolos, mas respirações do próprio Cosmos. A água não luta contra o rochedo; ela se entrega à gravidade, encontra as fissuras invisíveis e, na sua extrema doçura, desgasta até a pedra mais rígida sem usar a violência. Da mesma forma, a imagem deste sinal sagrado se revela a você como um espelho místico. A tempestade ou o silêncio que você vivencia externamente reflete a grande purificação que ocorre em seu templo interior.

Para que sua alma encontre o repouso transcendente nesta hora, a Sabedoria Ancestral não pede ações agitadas ou buscas exaustivas. A verdadeira contemplação exige o desapego do controle. O que o seu espírito precisa silenciar hoje é o desejo de antecipar o amanhã e a ilusão de que você precisa consertar todas as coisas. Abandone a resistência. Permita-se ser como a folha que flutua suavemente sobre o rio do Tao, confiando que a correnteza divina sabe exatamente onde fica o oceano. Quando paramos de lutar contra a maré do destino, a paz que excede todo o entendimento humano se instala no centro de nosso ser.

Que a luz serena das Mutações envolva a sua existência neste instante. Que o som distante do gongo de um templo nas montanhas ressoe em sua mente, dissipando o nevoeiro da angústia e deixando apenas a certeza imutável de que você é parte do Todo amoroso. Permaneça em paz, amado caminhante. O Tao guarda seus passos em perfeita harmonia."""

    alerta_somatico_meditativo = f"Escute o templo do seu corpo com amoroso respeito. O sistema nervoso reflete as marés da alma. Traga a atenção para a sua postura, solte a tensão nos ombros e desaperte a musculatura do rosto. Permita que a respiração diafragmática devolva a segurança ao seu centro vital, restaurando a energia profunda dos seus rins e acalmando a agitação do coração."

    return {
        "numero": num,
        "nome": nome_full,
        "trigramas": trigramas,
        "imagem": f"A paisagem sagrada deste sinal revela: {elemento_desc} Um portal de contemplação para sintonizar sua alma ao ritmo do Universo.",
        "julgamento": f"O Oráculo para {nome_curto} sussurra que a paz suprema desabrocha no silêncio da mente, no desapego do ego e na inteira confiança no fluxo do Tao.",
        "sintese": f"Refúgio meditativo, purificação espiritual e quietude no abraço do Yin e do Yang.",
        "analiseCompleta": analise_meditativa,
        "alertaSomatico": alerta_somatico_meditativo
    }

for i in range(1, 65):
    MEDITATIVE_HEXAGRAMAS[i] = criar_texto_meditativo(i)

js_content = "/**\n * hexagramas.js — Base de dados dos 64 Hexagramas do I Ching\n * Mestre Espiritual Taoísta & Espaço Seguro de Meditação Guiada por Arthur Camargo (CRTH-BR 17948)\n */\n\nconst HEXAGRAMAS = " + json.dumps(MEDITATIVE_HEXAGRAMAS, ensure_ascii=False, indent=2) + ";\n"

with open('/home/arthur/Downloads/Antigravity/arthur_camargo_landingpage/oraculo/hexagramas.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("hexagramas.js atualizado com sucesso no tom do Mestre Espiritual Taoísta Meditativo!")
