import json

MASTERY_HEXAGRAMAS = {}

# Mapeamento com exatamente 3 elementos: (nome_full, trigramas, elemento_desc)
HEX_INFO = {
    1: ("Ch'ien / O Criativo", "Céu sobre Céu (☰ / ☰)", "O céu vasto e infinito sobre outro céu pleno de força."),
    2: ("K'un / O Receptivo", "Terra sobre Terra (☷ / ☷)", "A terra generosa e profunda acolhendo todas as sementes da vida."),
    3: ("Chun / A Dificuldade Inicial", "Água sobre Trovão (☵ / ☳)", "A nuvem pesada de chuva sobre o trovão que desperta a terra."),
    4: ("Meng / A Inexperiência Juvenil", "Montanha sobre Água (☶ / ☵)", "A fonte límpida jorrando aos pés da montanha firme."),
    5: ("Hsü / A Espera (Nutrição)", "Água sobre Céu (☵ / ☰)", "As nuvens carregadas flutuando no alto do céu, aguardando a chuva no tempo certo."),
    6: ("Sung / O Conflito", "Céu sobre Água (☰ / ☵)", "O céu que se move para cima e a água que flui para baixo, afastando-se mutuamente."),
    7: ("Shih / O Exército (Disciplina)", "Terra sobre Água (☷ / ☵)", "A água acumulada e guardada no centro profundo da terra."),
    8: ("Pi / A União (Solidariedade)", "Água sobre Terra (☵ / ☷)", "A água fluindo suavemente sobre a terra, unindo-se a ela de forma inseparável."),
    9: ("Hsiao Ch'u / O Poder de Domar do Pequeno", "Vento sobre Céu (☴ / ☰)", "O vento sutil soprando no alto do céu infinito."),
    10: ("Lü / A Conduta (Pisar)", "Céu sobre Lago (☰ / ☱)", "O céu no alto e o lago sereno abaixo refletindo sua luz."),
    11: ("T'ai / A Paz (Harmonia)", "Terra sobre Céu (☷ / ☰)", "A terra descendo em acolhimento e o céu subindo em elevação, encontrando-se no meio."),
    12: ("P'i / A Estagnação (O Bloqueio)", "Céu sobre Terra (☰ / ☷)", "O céu subindo para longe e a terra descendo, sem comunicação entre si."),
    13: ("T'ung Jên / A Comunhão entre os Homens", "Céu sobre Fogo (☰ / ☲)", "O fogo subindo livre em direção ao céu aberto."),
    14: ("Ta Yu / A Posse em Grande Medida", "Fogo sobre Céu (☲ / ☰)", "O sol brilhando no alto do céu, iluminando todas as coisas."),
    15: ("Ch'ien / A Modéstia", "Terra sobre Montanha (☷ / ☶)", "A montanha alta mantendo-se escondida sob a terra baixa."),
    16: ("Yü / O Entusiasmo", "Trovão sobre Terra (☳ / ☷)", "O trovão retumbando e despertando a terra com energia."),
    17: ("Sui / O Seguimento", "Lago sobre Trovão (☱ / ☳)", "A alegria do lago repousando sobre o movimento do trovão."),
    18: ("Ku / Trabalho no Que Se Deteriorou", "Montanha sobre Vento (☶ / ☴)", "O vento parado aos pés da montanha exigindo renovação."),
    19: ("Lin / A Aproximação", "Terra sobre Lago (☷ / ☱)", "A terra alta debruçando-se com carinho sobre a água do lago."),
    20: ("Kuan / A Contemplação", "Vento sobre Terra (☴ / ☷)", "O vento soprando suavemente por sobre toda a superfície da terra."),
    21: ("Shih Ho / Morder e Romper", "Fogo sobre Trovão (☲ / ☳)", "O relâmpago e o trovão unidos em força decisiva."),
    22: ("Pi / A Graça (A Beleza)", "Montanha sobre Fogo (☶ / ☲)", "O fogo brilhando aos pés da montanha silenciosa."),
    23: ("Po / A Desagregação", "Montanha sobre Terra (☶ / ☷)", "A montanha alta desgastando-se pela ação do tempo sobre a terra."),
    24: ("Fu / O Retorno", "Terra sobre Trovão (☷ / ☳)", "O trovão renascendo no coração profundo da terra."),
    25: ("Wu Wang / A Inocência", "Céu sobre Trovão (☰ / ☳)", "O trovão ressoando sob o céu vasto e natural."),
    26: ("Ta Ch'u / O Grande Poder de Domar", "Montanha sobre Céu (☶ / ☰)", "O céu imenso contido e guardado dentro da montanha firme."),
    27: ("I / A Provisão de Alimentos", "Montanha sobre Trovão (☶ / ☳)", "A montanha imóvel acima e o trovão em movimento abaixo."),
    28: ("Ta Kuo / Preponderância do Grande", "Lago sobre Vento (☱ / ☴)", "O lago transbordando sobre as árvores flexíveis."),
    29: ("K'an / O Abismo (A Água)", "Água sobre Água (☵ / ☵)", "A água fluindo contínua entre abismos sem perder seu curso."),
    30: ("Li / O Aderir (O Fogo)", "Fogo sobre Fogo (☲ / ☲)", "A chama dupla brilhando e necessitando de combustível para permanecer."),
    31: ("Hsien / Influências Mútuas", "Lago sobre Montanha (☱ / ☶)", "O lago calmo repousando no topo da montanha firme."),
    32: ("Hêng / A Constância", "Trovão sobre Vento (☳ / ☴)", "O trovão e o vento movendo-se juntos em ritmo contínuo."),
    33: ("TUN / A Retirada", "Céu sobre Montanha (☰ / ☶)", "O céu subindo para longe da montanha inabalável."),
    34: ("Ta Chuang / O Poder do Grande", "Trovão sobre Céu (☳ / ☰)", "O trovão ecoando no alto do céu infinito."),
    35: ("Chin / O Progresso", "Fogo sobre Terra (☲ / ☷)", "O sol nascendo e iluminando a terra inteira."),
    36: ("Ming I / O Obscurecimento da Luz", "Terra sobre Fogo (☷ / ☲)", "O sol mergulhando sob a terra durante a noite."),
    37: ("Chia Jên / A Família", "Vento sobre Fogo (☴ / ☲)", "O vento alimentando o fogo no centro do lar."),
    38: ("K'uei / A Oposição", "Fogo sobre Lago (☲ / ☱)", "O fogo subindo e a água do lago descendo em direções opostas."),
    39: ("Chien / O Obstáculo", "Água sobre Montanha (☵ / ☶)", "A água perigosa dificultando a subida da montanha."),
    40: ("Hsieh / A Liberação", "Trovão sobre Água (☳ / ☵)", "O trovão e a chuva limpando o ar após a tempestade."),
    41: ("Sun / A Diminuição", "Montanha sobre Lago (☶ / ☱)", "O lago alimentando a base da montanha alta."),
    42: ("I / O Aumento", "Vento sobre Trovão (☴ / ☳)", "O vento e o trovão reforçando-se mutuamente em expansão."),
    43: ("Kua / A Irrupção", "Lago sobre Céu (☱ / ☰)", "O lago subindo até o céu em vapor antes de romper em chuva."),
    44: ("Kou / Vindo ao Encontro", "Céu sobre Vento (☰ / ☴)", "O vento soprando sob o céu vasto e descobrindo novos caminhos."),
    45: ("Ts'ui / A Reunião", "Lago sobre Terra (☱ / ☷)", "O lago acumulando águas generosas sobre a terra viva."),
    46: ("Shêng / A Elevação", "Terra sobre Vento (☷ / ☴)", "A semente crescendo sob a terra até alcançar o ar livre."),
    47: ("K'un / A Opressão", "Lago sobre Água (☱ / ☵)", "O lago secando porque a água vazou pelo fundo."),
    48: ("Ching / O Poço de Água", "Água sobre Vento (☵ / ☴)", "A corda e o balde descendo à água pura no fundo do poço."),
    49: ("Ko / A Revolução", "Lago sobre Fogo (☱ / ☲)", "O fogo no lago transformando a água em vapor renovado."),
    50: ("Ting / O Caldeirão", "Fogo sobre Vento (☲ / ☴)", "O fogo alimentado pelo vento sob o caldeirão sagrado."),
    51: ("Chên / O Trovão", "Trovão sobre Trovão (☳ / ☳)", "O estalo duplo do trovão assustando e despertando a terra."),
    52: ("Kên / A Montanha (O Aquietamento)", "Montanha sobre Montanha (☶ / ☶)", "A montanha imóvel diante de outra montanha serena."),
    53: ("Chien / O Desenvolvimento Gradual", "Vento sobre Montanha (☴ / ☶)", "A árvore crescendo devagar no topo da montanha alta."),
    54: ("Kuei Mei / A Jovem que se Casa", "Trovão sobre Lago (☳ / ☱)", "O trovão agitado sobre a superfície serena do lago."),
    55: ("Fêng / A Abundância", "Trovão sobre Fogo (☳ / ☲)", "O relâmpago e o trovão iluminando o céu em plenitude."),
    56: ("Lü / O Viajante", "Fogo sobre Montanha (☲ / ☶)", "O fogo passageiro queimando na encosta da montanha."),
    57: ("Sun / O Suave (O Vento)", "Vento sobre Vento (☴ / ☴)", "O vento sutil penetrando em todos os cantos sem esforço."),
    58: ("Tui / O Alegre (O Lago)", "Lago sobre Lago (☱ / ☱)", "Dois lagos conectados nutrindo-se de alegria recíproca."),
    59: ("Huan / A Dissolução", "Vento sobre Água (☴ / ☵)", "O vento soprando sobre a água e dispersando a névoa."),
    60: ("Chieh / A Limitação", "Água sobre Lago (☵ / ☱)", "A água contida dentro dos limites seguros do lago."),
    61: ("Chung Fu / A Verdade Interior", "Vento sobre Lago (☴ / ☱)", "O vento movendo a água do lago em perfeita sintonia."),
    62: ("Hsiao Kuo / Preponderância do Pequeno", "Trovão sobre Montanha (☳ / ☶)", "O som do trovão ecoando baixo nas encostas da montanha."),
    63: ("Chi Chi / Após a Conclusão", "Água sobre Fogo (☵ / ☲)", "A água fervendo em equilíbrio sobre o fogo aceso."),
    64: ("Wei Chi / Antes da Conclusão", "Fogo sobre Água (☲ / ☵)", "O fogo acima e a água abaixo necessitando de alinhamento.")
}

def criar_texto_anciao(num):
    nome_full, trigramas, elemento_desc = HEX_INFO.get(num, (f"Hexagrama {num}", "Tao e Mutação", "A sabedoria natural das coisas."))
    nome_curto = nome_full.split('/')[1].strip() if '/' in nome_full else nome_full

    analise_longa = f"""Que bom que você me procurou hoje, meu amigo. Respire fundo por um momento. Se o seu peito está apertado, se a mente não para de girar ou se uma dúvida dolorosa está tirando o seu sono, saiba de algo muito importante: você não está sozinho, e você não está quebrado. Aquilo que você está sentindo agora não é um erro da vida, mas apenas a tempestade que precede o ar limpo da manhã. Na filosofia do Tao, nós aprendemos que o rio nunca luta contra as pedras; ele simplesmente encontra as frestas, contorna os obstáculos e continua correndo em direção ao mar. Tudo na natureza é feito de fases e ciclos. A noite mais escura sempre entrega o céu para o nascer do sol.

O Hexagrama {nome_full} traz até nós a imagem da natureza representada por {trigramas}. Pense nessa paisagem por um instante: {elemento_desc}. Essa combinação revela a dinâmica exata daquilo que está acontecendo dentro e fora de você neste instante. Na sabedoria taoísta, entendemos que o Yin (o recolhimento, a sombra, a dúvida) e o Yang (a luz, a ação, a certeza) estão sempre dançando juntos. Quando o peso de uma situação se torna grande demais, é porque uma determinada energia chegou ao seu limite e está prestes a se transformar no seu oposto. Essa imagem da natureza vem lhe mostrar que a pressão que você sente não veio para destruí-lo, mas para ensinar o seu coração a encontrar um novo ponto de equilíbrio e ancoragem.

Para atravessar este dia e aliviar esse sofrimento que tanto incomoda, o conselho prático do Sábio é muito simples e libertador: pare de tentar carregar o mundo inteiro nas suas costas. O que você precisa soltar hoje é o controle obsessivo sobre o resultado de amanhã. Nós sofremos quando tentamos arrancar o fruto da árvore enquanto ele ainda está verde. Pergunte a si mesmo: o que está ao meu alcance fazer neste momento exato? Faça apenas essa pequena parte, com calma e carinho por você. O resto, aquilo que você não pode mudar agora, entregue ao tempo. Aprenda com a água: não force a passagem, não entre em confronto direto com o orgulho ou com o medo. Dê um passo de cada vez, cuide do seu corpo, coma algo leve, tome um banho demorado e permita que o seu sistema nervoso descanse.

Siga em frente com o coração sereno, meu jovem amigo. Lembre-se de que até as árvores mais altas e antigas já foram sementes escondidas no escuro da terra. Esta dor vai passar, a clareza vai voltar e você sairá dessa experiência ainda mais forte, sábio e em paz consigo mesmo. Confie na sua caminhada."""

    alerta_somatico_anciao = f"Do ponto de vista da saúde do seu corpo e do seu sistema nervoso, o momento pede atenção aos sinais de sobrecarga alostática. Observe se a sua respiração está curta ou travada no peito, e se há tensão acumulada no pescoço, maxilar ou ombros. Dedique 5 minutos hoje para sentar em silêncio, soltar a musculatura do rosto e fazer expirações longas e profundas. Quando o seu corpo se sente seguro, a sua mente encontra o caminho da clareza."

    return {
        "numero": num,
        "nome": nome_full,
        "trigramas": trigramas,
        "imagem": f"A paisagem sagrada deste hexagrama revela a sabedoria da natureza: {elemento_desc} Um convite para alinhar seus passos ao ritmo da vida.",
        "julgamento": f"A sabedoria para {nome_curto} indica que a paz e o sucesso nascem da sinceridade interior, da paciência e da coragem de respeitar seu próprio tempo.",
        "sintese": f"Acolhimento, clareza interior e equilíbrio no fluxo natural das Mutações.",
        "analiseCompleta": analise_longa,
        "alertaSomatico": alerta_somatico_anciao
    }

for i in range(1, 65):
    MASTERY_HEXAGRAMAS[i] = criar_texto_anciao(i)

js_content = "/**\n * hexagramas.js — Base de dados dos 64 Hexagramas do I Ching\n * Tom de Conselheiro Ancião Taoísta por Arthur Camargo (CRTH-BR 17948)\n */\n\nconst HEXAGRAMAS = " + json.dumps(MASTERY_HEXAGRAMAS, ensure_ascii=False, indent=2) + ";\n"

with open('/home/arthur/Downloads/Antigravity/arthur_camargo_landingpage/oraculo/hexagramas.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("hexagramas.js gerado com sucesso!")
