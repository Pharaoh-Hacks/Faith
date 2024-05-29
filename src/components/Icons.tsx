import { LucideProps } from "lucide-react";
import Image from "next/image";

export const Icons = {
    logo: () => (
        <Image
        src="/logo.png"
        alt="Logo"
        width={80}
        height={80}
        className="styles.icon"
        />
    )
}