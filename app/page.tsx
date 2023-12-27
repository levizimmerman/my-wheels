import { Root } from "@/src/core/models/dto-api";
import Card from "@/src/ui/components/card/card";
import Heading from "@/src/ui/components/text/heading";
import Text from "@/src/ui/components/text/text";
import formatPrice from "@/src/utils/format-price";

const API_URL = "https://php-api.mywheels.dev/api/";

async function getData<T>(): Promise<T> {
  const body = {
    method: "search.map",
    params: {
      filter: {
        // onlyAvailable: false,
        // models: ["Corsa"],
        // fuelType: "benzine",
        // towbar: true,
        // winterTires: true,
      },
      locationPoint: {
        latitudeMax: 56,
        latitudeMin: 48,
        longitudeMax: 9,
        longitudeMin: 1,
      },
    },
  };
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-ref": "http://localhost:9009",
      "X-Simple-Auth-App-Id":
        "1_4ufl98675y8088ko4k80wow4soo0g8cog8kwsssoo4k4ggc84k",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: 0,
      ...body,
    }),
  });
  const data = await res.json();
  return data;
}

export default async function Home() {
  const data = await getData<Root>();

  return (
    <main>
      <h1 className="text-yellow-50">MyWheels</h1>
      <section className="flex flex-col gap-4">
        {data.result.results.map(({ resource, availability }) => {
          const {
            registrationPlate,
            model,
            brand,
            location,
            streetNumber,
            city,
            fuelType,
            price,
          } = resource;
          const { kilometerRate, hourRate, fuelPerKilometer, dayRateTotal } =
            price;
          return (
            <Card key={registrationPlate} renderAs="article">
              <div className="p-4">
                <Heading renderAs="h2">
                  {brand} - {model}
                </Heading>

                <address>
                  <Text>
                    {location} {streetNumber}
                  </Text>
                  <br />
                  <Text>{city}</Text>
                </address>

                <Text>{fuelType}</Text>
                <br />
                <Text>{availability}</Text>
                <br />
                <Text>Price per hour {formatPrice(hourRate)}</Text>
              </div>
            </Card>
          );
        })}
      </section>
    </main>
  );
}
