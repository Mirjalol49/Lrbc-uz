import {Card, CardHeader, CardBody, Image} from "@heroui/react";
import Foundation from "../../Images/Foundation.webp";
export default function ServiceC({img, title}) {
  return (
    <Card className="py-4 bg-[#15112c] w-[350px]">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-semibold text-2xl text-white">{title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 w-[350px]">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={img}
          width={350}
        />
      </CardBody>
    </Card>
  );
}
