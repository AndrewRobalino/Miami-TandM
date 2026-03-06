export default function Footer() {
  return (
    <footer
      className="flex items-center justify-center py-3"
      style={{ background: 'linear-gradient(to bottom, #F8F4EE 0%, #C9A84C 100%)' }}
    >
      <p
        className="text-xs"
        style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.85)' }}
      >
        © {new Date().getFullYear()} Miami Taxes &amp; Management Co. · Miami, Florida
      </p>
    </footer>
  )
}
