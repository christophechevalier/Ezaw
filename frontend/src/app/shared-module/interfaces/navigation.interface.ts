// typed-record
import { TypedRecord } from 'typed-immutable-record';

export enum ETypeMarkers { Police, Accident, TrafficJam, Warning, GasStation, User };
export enum EControlPolices { Visible, Hide, Opposite };
export enum EControlAccidents { Light, Serious, Opposite };
export enum EControlTrafficJams { Light, Medium, Huge };
export enum EControlWarnings { OnTheRoad, SideRoad, Weather };
export enum EControlFavorites { Home, Workplace, Others };
export enum EOnTheRoadCauses { ObjectOnTheRoad, RoadWorks, Pothole, CarStopped, DeadAnimals };
export enum ESideRoadCauses { CarStopped, Animals, MissingSignaling };
export enum EWeatherCauses { Fog, Hail, Flood, Ice };

export interface IMarker {
  id: string;
  label?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  // duration: number;
  // commentary: string;
  draggable: boolean;
  typeMarker: ETypeMarkers;
  controlPolice: EControlPolices;
  controlAccidents: EControlAccidents;
  controlTrafficJams: EControlTrafficJams;
  controlWarnings: EControlWarnings;
  controlFavorites: EControlFavorites;
  onTheRoadCauses: EOnTheRoadCauses;
  sideRoadCauses: ESideRoadCauses;
  weatherCauses: EWeatherCauses;
}

export interface IMarkers {
  byId: Map<string, IMarker>;
  allIds: Array<string>;
}

export interface INavigationRecord extends TypedRecord<INavigationRecord>, IMarker { };
