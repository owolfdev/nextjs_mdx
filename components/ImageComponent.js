import Image from "next/image";

export default function ImageComponent() {
  return (
    <div className="container">
      <Image src="/tomato.jpg" alt="tomato" height="427" width="640" />
    </div>
  );
}
