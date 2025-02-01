import Image from "next/image";
import Logo from "@/public/logo_s.png";
import { Card, CardContent } from "@/components/ui/card";
export function OnboardingForm() {
  return (
    <>
      <div className="flex items-center gap-2 mb-10">
        <Image src={Logo} alt="logo" width={50} height={50} />
        <h1 className="text-4xl">
          Job<span className="text-primary">himzei</span>
        </h1>
      </div>

      <Card className="max-w-lg w-full">
        <CardContent></CardContent>
      </Card>
    </>
  );
}
