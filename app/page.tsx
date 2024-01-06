import { Root } from "@/src/features/search/types/dto-api";
import Card from "@/src/components/card/card";
import Heading from "@/src/components/text/heading";
import Text from "@/src/components/text/text";
import Toggle from "@/src/components/toggle/toggle";
import formatPrice from "@/src/utils/format-price";
import { NextPage } from "next";
import Filters from "@/src/features/search/components/filters";
import ModelSearch from "@/src/features/search/components/model-search";
import searchToApiParams from "@/src/features/search/utils/search-to-api-params";

const API_URL = "https://php-api.mywheels.dev/api/";

type Filter = {
  models?: string[];
};

type GetData = {
  filter: Filter;
};

async function getData<T>({ filter }: GetData): Promise<T> {
  const body = {
    method: "search.map",
    params: {
      filter,
      // filter: {
      //   // onlyAvailable: false,
      //   // models: ["Corsa"],
      //   // fuelType: "benzine",
      //   // towbar: true,
      //   // winterTires: true,
      // },
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

type PageProps = {
  searchParams?: Record<string, string>;
};

export default async function Home({ searchParams }: PageProps) {
  const data = await getData<Root>({
    filter: searchToApiParams(searchParams),
  });

  return (
    <main>
      <Heading renderAs="h1">Search Results ({data.result.total})</Heading>
      <Filters />
      <ModelSearch />

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
