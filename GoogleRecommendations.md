# Guia Definitivo de Otimização e Melhores Práticas Web (Google Essentials, PageSpeed & YMYL/E-E-A-T)
**Documento de Referência Técnica para Desenvolvimento Web e Landing Pages de Alta Performance**
*Autor: Arthur Camargo — Terapeuta Integrativo (CRTH-BR 17948) & Estrategista Somático*

---

## 1. Diretrizes Críticas de SEO para Saúde e YMYL (E-E-A-T)

Sites que tratam de saúde física, mental ou finanças são classificados pelo Google como **YMYL (Your Money or Your Life)**. A avaliação do algoritmo exige máxima aderência aos pilares do **E-E-A-T** (Experiência, Especialidade, Autoridade e Confiança):

- **Identidade e Registro Profissional Visíveis**: Exibir de forma clara e inquestionável no cabeçalho, rodapé e seções de apresentação o nome profissional e o registro regulatório oficial (ex: `Terapeuta Integrativo (CRTH-BR 17948) & Estrategista Somático`).
- **Conformidade de Nomenclatura (Compliance)**: Evitar o uso isolado de termos restritos por conselhos profissionais externos em títulos públicos primários para eliminar risco regulatório.
- **Transparência de Contato e DPO/LGPD**: Oferecer e-mail visível para encarregado de dados, política de privacidade acessível e botão direto de canal de atendimento oficial (WhatsApp/Telefone).
- **Dados Estruturados JSON-LD**: Incluir schemas Schema.org (`ProfessionalService`, `TherapeuticProcedure`, `Person`) indicando a localização de atendimento (`areaServed`), credenciais (`knowsAbout`) e avaliações legítimas.

---

## 2. Otimização Extrema de Desempenho e Carregamento de Imagens (LCP & FCP)

As imagens são as principais responsáveis pelo inchaço do payload de rede e atrasos de LCP (Largest Contentful Paint).

- **Formato Moderno WebP / AVIF**: Converter 100% dos ativos de imagem para `.webp` (qualidade 78 a 82) com suporte a fallback `.jpg` via manipulador `onerror`.
- **Dimensionamento Responsivo Exato**: Nunca entregar imagens em 2400px para exibições de 400px a 900px. Redimensionar imagens para a escala real em que serão renderizadas no viewport do usuário.
- **Aceleração do Elemento LCP (Hero Element)**:
  - Adicionar `<link rel="preload" href="assets/sua_imagem_lcp.webp" as="image" type="image/webp" fetchpriority="high">` no `<head>`.
  - Atribuir `fetchpriority="high"` e `loading="eager"` na tag `<img>` principal acima da dobra.
  - **Nunca usar `loading="lazy"` no elemento LCP**.
- **Carregamento Preguiçoso (Offscreen Images)**: Aplicar `loading="lazy"` em todas as imagens localizadas abaixo da dobra.

---

## 3. Eliminação de Recursos Bloqueadores de Renderização (Render-Blocking)

Solicitações de CSS e JavaScript síncronos no `<head>` impedem o navegador de desenhar o conteúdo (FCP).

- **Proibição de `@import` em Arquivos CSS**: Nunca importar fontes ou stylesheets usando `@import url(...)` dentro do CSS. O `@import` encadeia chamadas de rede e paralisa a renderização.
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

O CLS (Cumulative Layout Shift) mede a instabilidade visual durante o carregamento da página.

- **Dimensões Explícitas em 100% das Imagens**:
  Sempre declarar os atributos `width` e `height` em cada elemento `<img>` (ex: `<img src="..." width="900" height="520">`).
- **Reserva de Espaço via CSS (`aspect-ratio` & `min-height`)**:
  Declarar `aspect-ratio: 16 / 9;` ou `aspect-ratio: 1 / 1;` nos wrappers de mídia e containers visuais principais.
- **Animações Sem Deslocamento Vertical**:
  Em keyframes de animação de entrada de containers no topo da página, evitar deslocamentos grandes de `translateY(-35px)`. Priorizar animações puramente compostas por `opacity` e `scale(0.98)` $\rightarrow$ `scale(1)`.

---

## 5. Zero Forced Reflows e Execução Fluida de JavaScript (60 FPS)

O recálculo forçado de layout (*Layout Thrashing*) ocorre quando o JavaScript consulta propriedades geométricas (`offsetWidth`, `clientHeight`, `getBoundingClientRect`) logo após alterar o DOM.

- **Cache de Geometria em Variáveis**:
  Calcular limites de rolagem (`scrollHeight - innerHeight`) na inicialização e atualizar somente em eventos de `resize`, em vez de consultar a propriedade a cada frame de `scroll`.
- **Event Listeners Passivos (`{ passive: true }`)**:
  Adicionar a opção `{ passive: true }` a todos os listeners de `scroll` e `resize`.
- **Alternância de Classes CSS em Vez de Estilos Inline**:
  Alternar classes CSS (`element.classList.toggle('nav-open')`) em vez de mutar múltiplos atributos de `element.style.display` ou `element.style.position` no JavaScript.
- **Coordenadas Relativas em Animações de Clique**:
  Em efeitos de micro-interação (*ripple*), utilizar `e.offsetX` e `e.offsetY` em vez de acionar `getBoundingClientRect()`.

---

## 6. Carregamento Otimizado de Fontes Web (`font-display: swap` & Preloads)

- **Instrução `font-display: swap`**:
  Declarar a propriedade `font-display: swap;` em todas as regras `@font-face` personalizadas para garantir que o texto fique visível imediatamente em fontes do sistema enquanto a fonte web é baixada.
- **Preload Direto de Arquivos `.woff2`**:
  Fazer o preload dos arquivos de fonte primários utilizados acima da dobra:
  `<link rel="preload" href="https://cdn.../Phosphor-Bold.woff2" as="font" type="font/woff2" crossorigin>`

---

## 7. Redução do Grafo de Dependências e Minificação de Recursos

- **Eliminação de Pacotes de Terceiros Sobressalentes**:
  Evitar carregar scripts genéricos de bibliotecas de ícones que importam estilos não utilizados (ex: *duotone*, *thin*, *light* se apenas *bold* e *fill* são usados).
- **Importação Direta de Módulos Específicos**:
  Carregar estaticamente apenas os arquivos CSS específicos de ícones/componentes necessários para a aplicação.

---

## 8. Verificação de Propriedade (Search Console & AdSense)

- **Google AdSense**: A tag estática de anúncios `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-..." crossorigin="anonymous"></script>` deve permanecer declarada diretamente dentro da tag `<head>` do `index.html` estático para permitir varredura imediata.
- **Google Search Console**: Manter o arquivo estático de autorização `google<hash>.html` na raiz do projeto e incluir a meta tag equivalente `<meta name="google-site-verification" content="google<hash>" />` no `<head>`.

---

## 9. Checklist Técnico Pré-Deploy para Futuros Projetos

- [ ] **Imagens**: 100% convertidas para WebP, redimensionadas e com `width`/`height` explícitos.
- [ ] **LCP**: Imagem principal precarregada via `<link rel="preload">` com `fetchpriority="high"`.
- [ ] **Render-Blocking**: Nenhum `@import` em CSS; scripts com `defer`/`async`.
- [ ] **CLS**: Pontuação de CLS testada e garantida em `0.000`.
- [ ] **Reflows**: Nenhum aviso de reflow forçado em manipuladores de scroll/click.
- [ ] **Fontes**: Preload dos arquivos `.woff2` primários e `font-display: swap` ativo.
- [ ] **YMYL/E-E-A-T**: Registro profissional visível e dados estruturados JSON-LD validados.
- [ ] **Verificações**: Arquivo HTML e Meta Tag do Search Console / AdSense no ar com HTTP 200.

