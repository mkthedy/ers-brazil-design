/* ERS Brazil Landing UI Kit — primitives
   Exports: Button, EyebrowPill, Eyebrow, Seal, useScrolled */
const { useState, useEffect } = React;

function Button({ variant = 'green', children, onClick, href, icon }) {
  const cls = 'btn btn-' + variant;
  const inner = (<>{children}{icon ? <i data-lucide={icon}></i> : null}</>);
  if (href) return <a className={cls} href={href} onClick={onClick}>{inner}</a>;
  return <button className={cls} onClick={onClick}>{inner}</button>;
}

function EyebrowPill({ children, color }) {
  return <span className={'eyebrow-pill' + (color ? ' ' + color : '')}>{children}</span>;
}

function Eyebrow({ children }) {
  return <span className="eyebrow-text">{children}</span>;
}

function Seal({ top, sub }) {
  return (
    <div className="cert-seal">
      <b>{top}</b>
      <span>{sub}</span>
    </div>
  );
}

// re-run lucide icon replacement after every render
function useLucide(dep) {
  useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
}

function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return scrolled;
}

Object.assign(window, { Button, EyebrowPill, Eyebrow, Seal, useLucide, useScrolled });
