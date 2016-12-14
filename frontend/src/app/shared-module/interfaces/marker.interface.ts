// typed-record
import { TypedRecord } from 'typed-immutable-record';

export interface IMarker {
  label?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  // duration: number;
  // commentary: string;
  draggable: boolean;
}

export interface IMarkerRecord extends TypedRecord<IMarkerRecord>, IMarker { };
