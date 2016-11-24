// typed-record
import { TypedRecord } from 'typed-immutable-record';

export interface ILocation {
  lat: number;
  lng: number;
  address?: string;
}

export interface ILocationRecord extends TypedRecord<ILocationRecord>, ILocation { };
