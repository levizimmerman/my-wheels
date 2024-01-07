import dynamic from "next/dynamic";
import { CarResult } from "@/src/features/filters/types/dto-api";

const DynamicMap = dynamic(() => import("./car-locations-map-dynamic"), {
  ssr: false,
});

type Props = {
  cars: CarResult[];
  width?: number;
  height?: number;
};

const CarLocationsMap: React.FC<Props> = (props) => {
  return (
    <div className="rounded overflow-hidden">
      <DynamicMap cars={props.cars} />
    </div>
  );
};

export default CarLocationsMap;
