import Image from "next/image";

export default function Logo() {
    return (
        <div className="flex ">
            <Image 
                //src="/images/Screenshot 2024-10-16 150442.png"
                src="/images/Screenshot 2024-10-17 182450.png"
                alt="Fitness Log Logo"
                width={300}
                height={500}
                //className="object-contain"
                //style={{ maxWidth: '100%', height: 'auto' }}
                />
        </div>
    )
}