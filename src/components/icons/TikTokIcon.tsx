const TikTokIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-1.055-.09A6.408 6.408 0 0 0 3 15.723 6.408 6.408 0 0 0 9.408 22.13a6.329 6.329 0 0 0 1.055-.09h.338a6.408 6.408 0 0 0 6.048-6.339V9.58a8.23 8.23 0 0 0 4.73 1.49v-3.44s-.537.014-1.99-.943Z"/>
    </svg>
  );
};

export default TikTokIcon;