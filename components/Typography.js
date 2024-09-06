export function Headline({ children }) {
  return <h1 className="headline">{children}</h1>;
}

export function Overview({ children }) {
  return <p className="overview">{children}</p>;
}

export function CTAButton({ children, onClick }) {
  return (
    <button onClick={onClick} className="cta-button">
      {children}
    </button>
  );
}
