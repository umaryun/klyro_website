interface KlyroLogoProps {
  className?: string;
}

export default function KlyroLogo({ className = '' }: KlyroLogoProps) {
  return (
    <img src="/klyrologo.png" alt="Klyro logo" className={className} />
  );
}
