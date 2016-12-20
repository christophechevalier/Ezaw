// typed-record
import { TypedRecord } from 'typed-immutable-record';

// types
export enum ETypeMarkers { Police, Accident, TrafficJam, Warning, GasStation, User };

// controls
export enum EControlPolices { Visible, Hide, Opposite };
export enum EControlAccidents { Light, Serious, Opposite };
export enum EControlTrafficJams { Light, Medium, Huge };
export enum EControlWarnings { OnTheRoad, SideRoad, Weather };
export enum EControlFavorites { Home, Workplace, Others };

export enum EControls { EControlPolices, EControlAccidents, EControlTrafficJams, EControlWarnings, EControlFavorites };

// warnings
export enum EOnTheRoadCauses { ObjectOnTheRoad, RoadWorks, Pothole, CarStopped, DeadAnimals };
export enum ESideRoadCauses { CarStopped, Animals, MissingSignaling };
export enum EWeatherCauses { Fog, Hail, Flood, Ice };

export enum EWarnings { EOnTheRoadCauses, ESideRoadCauses, EWeatherCauses };

export interface IMarker {
  id: string;
  title?: string;
  label?: string;
  lat: number;
  lng: number;
  icon: string;
  duration: number;
  draggable: boolean;
  typeMarker: ETypeMarkers;
  control: EControls;
  warning: EWarnings;
}

export interface IMarkers {
  byId: Map<string, IMarker>;
  allIds: Array<string>;
}

export interface INavigationRecord extends TypedRecord<INavigationRecord>, IMarker { };
