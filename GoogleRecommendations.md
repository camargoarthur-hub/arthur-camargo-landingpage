# Guia Definitivo de Otimização e Melhores Práticas Web (Google Essentials, PageSpeed & YMYL/E-E-A-T)
**Documento de Referência Técnica Universal para Desenvolvimento Web e Landing Pages de Alta Performance**

---

## 1. Diretrizes Críticas de SEO e YMYL (E-E-A-T)

Sites de qualquer nicho — em especial os que envolvem saúde, finanças, serviços profissionais ou comércio eletrônico (classificados como **YMYL - Your Money or Your Life**) — exigem conformidade rigorosa aos pilares do **E-E-A-T** (Experiência, Especialidade, Autoridade e Confiança):

- **Identidade e Registro Profissional/Empresarial Visíveis**: Exibir de forma clara no cabeçalho, rodapé e seções institucionais a razão social ou nome profissional, registro regulatório oficial ou CNPJ/licença aplicável (ex: `[Nome da Empresa/Profissional] - [Registro/CNPJ]`).
- **Conformidade de Nomenclatura (Compliance)**: Respeitar normas regulatórias do setor de atuação, evitando termos restritos ou promessas sem embasamento em títulos públicos primários.
- **Transparência de Contato e LGPD/DPO**: Oferecer e-mail visível para encarregado de privacidade, políticas de privacidade e termos de uso acessíveis, e botões para canais de atendimento oficiais.
- **Dados Estruturados JSON-LD**: Incluir esquemas Schema.org genéricos (`Organization`, `LocalBusiness`, `ProfessionalService`, `Product`, `Person`) indicando a área de atuação (`areaServed`), especialidades (`knowsAbout`) e avaliações legítimas.

---

## 2. Otimização Extrema de Desempenho e Carregamento de Imagens (LCP & FCP)

As imagens representam a maior fatia do payload de rede.

- **Formato Moderno WebP / AVIF**: Converter 100% dos ativos de imagem para `.webp` ou `.avif` (qualidade 78 a 82) com suporte a fallback `.jpg` via manipulador `onerror`.
- **Dimensionamento Responsivo Exato**: Nunca entregar imagens em alta resolução (ex: 2400px) para caixas de exibição menores (ex: 400px a 900px). Redimensionar fisicamente os arquivos para a escala do layout real.
- **Aceleração do Elemento LCP (Hero Element)**:
  - Adicionar `<link rel="preload" href="assets/sua_imagem_lcp.webp" as="image" type="image/webp" fetchpriority="high">` no `<head>`.
  - Atribuir `fetchpriority="high"` e `loading="eager"` na tag `<img>` principal acima da dobra.
  - **Nunca usar `loading="lazy"` no elemento LCP**.
- **Carregamento Preguiçoso (Offscreen Images)**: Aplicar `loading="lazy"` em todas as imagens localizadas abaixo da dobra.

---

## 3. Eliminação de Recursos Bloqueadores de Renderização (Render-Blocking)

- **Proibição de `@import` em CSS**: Nunca importar fontes ou arquivos CSS usando `@import url(...)` dentro de folhas de estilo.
- **Carregamento Assíncrono Não-Bloqueante de Fontes (Google Fonts)**:
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=SuaFont:wght@400;700&display=swap">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=SuaFont:wght@400;700&display=swap" media="print" onload="this.media='all'">
  <noscript>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=SuaFont:wght@400;700&display=swap">
  </noscript>
  ```
- **Preload de CSS e Defer em JavaScript**:
  - Usar `<link rel="preload" href="style.css" as="style">`.
  - Sempre utilizar o atributo `defer` ou `async` nas tags `<script>`: `<script src="script.js" defer></script>`.

---

## 4. Prevenção de Mudanças Involuntárias de Layout (CLS = 0.000)

- **Dimensões Explícitas em 100% das Imagens**: Declarar os atributos `width` e `height` em cada elemento `<img>`.
- **Reserva de Espaço via CSS (`aspect-ratio` & `min-height`)**: Declarar `aspect-ratio: 16 / 9;` ou `aspect-ratio: 1 / 1;` nos wrappers de mídia.
- **Animações Sem Deslocamento Vertical**: Evitar `translateY` grande na renderização inicial; priorizar `opacity` e `scale(0.98)` $\rightarrow$ `scale(1)`.

---

## 5. Zero Forced Reflows e Execução Fluida de JavaScript (60 FPS)

- **Cache de Geometria em Variáveis**: Armazenar limites geométricos e recarregar apenas em eventos de `resize`.
- **Listeners Passivos (`{ passive: true }`)**: Adicionar a opção `{ passive: true }` em manipuladores de `scroll` e `resize`.
- **Alternância de Classes CSS**: Alternar classes (`element.classList.toggle('active')`) em vez de mutar múltiplos atributos de estilo inline.
- **Coordenadas Relativas**: Em efeitos interativos (ex: *ripple*), utilizar `e.offsetX` e `e.offsetY` em vez de acionar `getBoundingClientRect()`.

---

## 6. Carregamento Otimizado de Fontes Web (`font-display: swap` & Preloads)

- **Instrução `font-display: swap`**: Declarar `font-display: swap;` em todas as regras `@font-face`.
- **Preload Direto de Arquivos `.woff2`**: Precarregar arquivos de fonte do cabeçalho via `<link rel="preload" as="font" type="font/woff2" crossorigin>`.

---

## 7. Redução do Grafo de Dependências e Minificação de Recursos

- **Eliminação de Pacotes Sobressalentes**: Carregar estaticamente apenas os módulos e arquivos CSS específicos de ícones/componentes necessários para a página.

---

## 8. Verificação de Propriedade (Search Console & AdSense)

- **Google AdSense**: Manter o script estático de anúncios diretamente no `<head>` do `index.html` estático.
- **Google Search Console**: Manter o arquivo de autorização `google<hash>.html` na raiz e a meta tag equivalente no `<head>`.

---

## 9. Checklist Técnico Pré-Deploy para Futuros Projetos

- [ ] **Imagens**: Convertidas para WebP/AVIF, redimensionadas para o viewport real e com `width`/`height` explícitos.
- [ ] **LCP**: Imagem principal precarregada via `<link rel="preload">` com `fetchpriority="high"`.
- [ ] **Render-Blocking**: Nenhum `@import` no CSS; scripts com `defer`/`async`.
- [ ] **CLS**: Pontuação de CLS garantida em `0.000`.
- [ ] **Reflows**: Zero reflows forçados em manipuladores de scroll/click.
- [ ] **Fontes**: Preload dos arquivos `.woff2` primários e `font-display: swap` ativo.
- [ ] **YMYL/E-E-A-T**: Identidade institucional/profissional e schemas JSON-LD validados.
- [ ] **Verificações**: Arquivo HTML e Meta Tag do Search Console / AdSense publicados com HTTP 200.

