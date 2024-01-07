import { Root } from "@/src/features/filters/types/dto-api";
import Filters from "@/src/features/filters/components/filters";
import ModelSearch from "@/src/features/filters/components/model-search";
import searchToApiParams from "@/src/features/filters/utils/search-to-api-params";
import ResultsLayout from "@/src/features/search-results/components/results-layout";
import { PageProps } from "@/.next/types/app/page";

const API_URL = "https://php-api.mywheels.dev/api/";

export const dynamic = "force-dynamic";

async function getData<T>({
  filter,
}: {
  filter: ReturnType<typeof searchToApiParams>;
}): Promise<T> {
  const body = {
    method: "search.map",
    params: {
      filter,
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

export default async function Home({ searchParams }: PageProps) {
  const data = await getData<Root>({
    filter: searchToApiParams(searchParams),
  });

  return (
    <main className="h-screen flex flex-col">
      <div className="flex gap-6 p-8 bg-slate-300 dark:bg-slate-700">
        <div className="flex gap-4 flex-col">
          <ModelSearch />
          <Filters />
        </div>
      </div>
      <section className="flex flex-col gap-4 flex-shrink p-8">
        <ResultsLayout cars={data.result.results} total={data.result.total} />
      </section>
    </main>
  );
}
