/* ERS Brazil Landing UI Kit — sections
   Exports: Header, Hero, RiskSection, PromiseSection, CertBand, ProofSection, Clients, LeadForm, Footer */
const { useState: useStateS } = React;

function Header() {
  const scrolled = useScrolled(40);
  return (
    <header className={'hdr' + (scrolled ? ' scrolled' : '')}>
      <div className="container hdr-inner">
        <img className="hdr-logo" src="../../assets/logo-primary-white.png" alt="ERS Brazil" />
        <nav className="hdr-nav">
          <a href="#servicos">Serviços</a>
          <a href="#diferenciais">Diferenciais</a>
          <a href="#cases">Cases</a>
          <Button variant="green" href="#contato">Solicitar proposta</Button>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="topo">
      <div className="hero-bg" style={{ backgroundImage: 'url(../../assets/photos/warehouse.jpg)' }}></div>
      <div className="hero-smark"></div>
      <div className="container hero-inner">
        <div>
          <Eyebrow>Environmental Recovery Solutions</Eyebrow>
          <h1>Seus eletrônicos parados ainda carregam riscos que sua empresa não pode ignorar.</h1>
          <p>Equipamentos eletrônicos fora de operação, quando não tratados com os devidos cuidados, continuam armazenando dados sensíveis. <b>E é exatamente aí que mora o risco.</b></p>
          <Button variant="orange" icon="shield-check">Quero proteger meus dados</Button>
        </div>
        <div className="hero-visual">
          <img src="../../assets/photos/data-wipe.jpg" alt="Sanitização de dados em operação na ERS Brazil" />
          <div className="hero-chip" style={{ top: '12%', right: '8%' }}>ACESSOS</div>
          <div className="hero-chip" style={{ top: '42%', left: '7%' }}>SENHAS</div>
          <div className="hero-chip" style={{ bottom: '14%', right: '12%' }}>DADOS</div>
        </div>
      </div>
    </section>
  );
}

const RISKS = [
  'Informações confidenciais ainda acessíveis em HDs, SSDs e servidores desativados',
  'Não conformidade com normas como LGPD, ISO e políticas internas de compliance',
  'Impactos diretos na reputação institucional em caso de exposição ou vazamento',
  'Relatórios ESG frágeis e pouco auditáveis',
  'Perda de valor em ativos que poderiam ser reaproveitados com responsabilidade',
];

function RiskSection() {
  return (
    <section className="section" id="risco">
      <div className="container risk-grid">
        <h2>Sem um <span className="acc">processo de descarte certificado e rastreável</span>, sua empresa pode estar exposta a:</h2>
        <div className="risk-list">
          {RISKS.map((r, i) => (
            <div className="risk-item" key={i}>
              <div className="risk-check"><i data-lucide="check"></i></div>
              <span>{r}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const DELIVER = [
  'Coleta com rastreamento por GPS',
  'Destruição de dados com software homologado (Blancco)',
  'Certificação de destinação final',
  'Transparência e rastreabilidade em todo o processo',
  'Processos em conformidade com LGPD, ISO e R2v3',
  'Avaliação e reaproveitamento de ativos (refurbish)',
];
const GAIN = [
  'Mitigação de riscos jurídicos e de imagem',
  'Conformidade para auditorias e ESG',
  'Indicadores ambientais reais para relatórios e governança',
  'Redução de custos logísticos e operacionais',
  'Retorno financeiro em ativos recondicionados',
  'Fortalecimento da reputação e confiança de stakeholders',
];

function PromiseSection() {
  return (
    <section className="section dark" id="diferenciais">
      <div className="container">
        <div className="promise-head">
          <h2>A ERS Brazil compra equipamentos obsoletos e garante o que o mercado tradicional ignora</h2>
          <div className="rule"></div>
          <p>Enquanto o mercado foca apenas no valor de revenda, a ERS atua com controle total do processo — garantindo que sua empresa tenha segurança e retorno real.</p>
        </div>
        <div className="promise-cols">
          <div className="promise-col">
            <EyebrowPill>O que entregamos</EyebrowPill>
            <div className="promise-cards">
              {DELIVER.map((d, i) => <div className="promise-card" key={i}>{d}</div>)}
            </div>
          </div>
          <div className="promise-col">
            <EyebrowPill>O que sua empresa ganha</EyebrowPill>
            <div className="promise-cards">
              {GAIN.map((g, i) => <div className="promise-card" key={i}>{g}</div>)}
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 44 }}>
          <Button variant="green">Solicitar uma proposta</Button>
        </div>
      </div>
    </section>
  );
}

function CertBand() {
  return (
    <section className="cert-band">
      <div className="container cert-inner">
        <p>Certificações segundo normas internacionais (ISO 14001, 9001, 45001, R2v3).</p>
        <div className="cert-seals">
          <Seal top="ISO" sub="9001 : 2015" />
          <Seal top="ISO" sub="14001 : 2015" />
          <Seal top="ISO" sub="45001 : 2018" />
          <Seal top="R2v3" sub="CERTIFIED" />
        </div>
      </div>
    </section>
  );
}

const FEATURES = [
  { ic: 'badge-check', t: 'Certificação de destino final', d: 'Comprovação documental do destino de cada ativo — não só uma promessa de revenda.' },
  { ic: 'recycle', t: 'Zero resíduo, zero aterro, zero incineração', d: 'Todo material volta à cadeia produtiva. Nada é enviado a aterro ou queimado.' },
  { ic: 'route', t: 'Rastreabilidade ponta a ponta', d: 'Da coleta ao destino final, cada item é rastreado com transparência total.' },
  { ic: 'globe-2', t: 'Pioneirismo em certificações internacionais', d: 'R2v3, ISO 9001, 14001, 45001 e 27001 — conformidade reconhecida globalmente.' },
  { ic: 'history', t: 'Mais de 10 anos de atuação', d: 'Em operação no Brasil desde 2014, com lastro canadense de 25+ anos.' },
  { ic: 'hard-drive', t: 'Sanitização de dados garantida', d: 'Blancco, fragmentação física até 6 mm³ e laudos individuais por ativo.' },
];

function ProofSection() {
  return (
    <section className="section" id="cases">
      <div className="container">
        <div className="proof-head">
          <Eyebrow>Nossos diferenciais</Eyebrow>
          <h2>A ERS Brazil garante o que o <span className="grn">mercado tradicional ignora</span></h2>
        </div>
        <div className="feat-grid">
          {FEATURES.map((f, i) => (
            <div className="feat" key={i}>
              <div className="fic"><i data-lucide={f.ic}></i></div>
              <h4>{f.t}</h4>
              <p>{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { img: 'receiving-01.jpg', t: 'Recebimento', d: 'Coleta segura em todo o Brasil e entrada conferida item a item.' },
  { img: 'cataloging.jpg', t: 'Catalogação', d: 'Cada ativo é identificado, etiquetado e registrado para rastreio.' },
  { img: 'data-wipe.jpg', t: 'Sanitização', d: 'Apagamento lógico com Blancco — padrões DoD e NIST 800-88.' },
  { img: 'shredded-residue.jpg', t: 'Reciclagem', d: 'Fragmentação até 6 mm³ e retorno do material à cadeia produtiva.' },
];

function ProcessSection() {
  return (
    <section className="section process" id="operacao">
      <div className="container">
        <div className="phead">
          <Eyebrow>Dentro da operação</Eyebrow>
          <h2>Controle total do processo, do <span className="grn">recebimento ao destino final</span></h2>
          <p>Uma infraestrutura de 5.000 m² em Indaiatuba — SP, projetada para segurança, conformidade e rastreabilidade em cada etapa.</p>
        </div>
        <div className="flow">
          {STEPS.map((s, i) => (
            <div className="step" key={i}>
              <div className="ph"><span className="num">{i + 1}</span><img src={'../../assets/photos/' + s.img} alt={s.t} /></div>
              <div className="body"><h4>{s.t}</h4><p>{s.d}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsStrip() {
  const stats = [
    { n: '5.000 m²', l: 'unidade em Indaiatuba — SP' },
    { n: '400 t', l: 'capacidade por mês' },
    { n: '+150 mil', l: 'itens coletados (case TJSP)' },
    { n: '27 estados', l: '+ DF em logística reversa' },
  ];
  return (
    <section className="stats-strip">
      <div className="container">
        <div className="row">
          {stats.map((s, i) => (
            <div className="s" key={i}><div className="n">{s.n}</div><div className="l">{s.l}</div></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Clients() {
  const names = ['DELL', 'Google', 'Microsoft', 'NETFLIX', 'Banco do Brasil'];
  return (
    <section className="section tight clients">
      <div className="container">
        <p>Somos a escolha de quem leva segurança e reputação a sério</p>
        <div className="client-row">
          {names.map((n, i) => <span className="client-logo" key={i}>{n}</span>)}
        </div>
      </div>
    </section>
  );
}

function LeadForm() {
  const [sent, setSent] = useStateS(false);
  return (
    <section className="lead" id="contato">
      <img className="lead-water" src="../../assets/tagline-dowhatsright-white.png" alt="" aria-hidden="true" />
      <div className="container lead-inner">
        <div className="lead-copy">
          <Eyebrow>Avaliação gratuita</Eyebrow>
          <h2>Descubra quanto vale o seu ativo de TI mobilizado!</h2>
          <p>Preencha as informações ao lado e nossa equipe entrará em contato com a avaliação.</p>
        </div>
        <form className="lead-card" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <div className="two">
            <div className="field"><label>Nome</label><input placeholder="Seu nome" required /></div>
            <div className="field"><label>Empresa</label><input placeholder="Nome da empresa" required /></div>
          </div>
          <div className="field"><label>Telefone para contato</label><input placeholder="(00) 00000-0000" /></div>
          <div className="two">
            <div className="field"><label>Quantidade de equipamentos</label><input placeholder="Ex: 120" /></div>
            <div className="field"><label>Tipo de equipamento</label>
              <select><option>Selecione…</option><option>Notebooks</option><option>Servidores</option><option>Monitores</option><option>Misto</option></select>
            </div>
          </div>
          <label style={{ color: 'var(--fg-on-dark-2)', fontSize: 12, fontWeight: 600 }}>Condição do equipamento</label>
          <div className="radios">
            <label><input type="radio" name="cond" defaultChecked /> Bom</label>
            <label><input type="radio" name="cond" /> Razoável</label>
            <label><input type="radio" name="cond" /> Com defeitos</label>
          </div>
          <Button variant="green">{sent ? 'Recebido — entraremos em contato ✓' : 'Descobrir o valor do meu ativo agora!'}</Button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="ftr">
      <div className="ftr-smark"></div>
      <div className="container ftr-inner">
        <div>
          <img className="ftr-logo" src="../../assets/logo-primary-color.png" alt="ERS Brazil" />
          <address>
            Alameda Plutão, 555 — American Park Empresarial NR<br />
            Indaiatuba — SP · CEP 13347-656<br />
            ers.brazil · contato@ersbrazil.com
          </address>
        </div>
        <div className="tagline">Do What's Right</div>
      </div>
    </footer>
  );
}

Object.assign(window, { Header, Hero, RiskSection, PromiseSection, CertBand, ProofSection, ProcessSection, StatsStrip, Clients, LeadForm, Footer });
