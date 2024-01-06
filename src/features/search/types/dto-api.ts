import { FuelType } from "./filter";

export interface Root {
  jsonrpc: string;
  authenticated: boolean;
  result: Result;
  id: number;
}

export interface Result {
  results: Result2[];
  current: number;
  offset: number;
  limit: number;
  total: number;
}

export interface Result2 {
  resource: Resource;
  availability: any;
  shouldDischarge: boolean;
  distance: any;
}

export interface Resource {
  id: number;
  registrationPlate: string;
  alias: string;
  resourceType: string;
  brand?: string;
  model?: string;
  color?: string;
  fuelType?: string;
  numberOfSeats: number;
  location?: string;
  streetNumber?: string;
  latitude: number;
  longitude: number;
  advertisement: any;
  created: string;
  city?: string;
  locktype: string;
  parkingType: string;
  fuelLevel?: number;
  fuelRange?: number;
  charging: boolean;
  chargeAdapterConnected?: boolean;
  fuelRangeDefault: number;
  chargeAdapterConnectedSince?: string;
  price: Price;
  options: Options;
  locktypes: string[];
  favorite: boolean;
  rating_totals: any;
}

export interface Price {
  id: number;
  hourRate: string;
  kilometerRate: string;
  fuelPerKilometer: string;
  dayRateTotal: string;
}

export interface Options {
  id: number;
  automatic: boolean;
  winterTires: boolean;
  towbar: boolean;
}

export interface SearchMapFilter {
  fuelType: string;
  models: string[];
  onlyAvailable: boolean;
  towbar: boolean;
  winterTires: boolean;
}
