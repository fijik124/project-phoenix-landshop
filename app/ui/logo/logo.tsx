import Image from "next/image";
import styles from '@/app/ui/logo/logo.module.css';

export default function SPEARLogo() {
  return (
    <div className={`flex items-center gap-3`}>
      <Image
        src="/favicon.png"
        width={60}
        height={60}
        className={styles.logoShadows}
        alt="Site logo in nav menu"
      />
      <h1 className={`text-center text-white`}>SPEAR</h1>
    </div>
  );
}
