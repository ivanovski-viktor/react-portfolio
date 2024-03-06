export default function Section({ children, className, id }) {
  return (
    <div id={id} className={`section ${className}`}>
      {children}
    </div>
  );
}
