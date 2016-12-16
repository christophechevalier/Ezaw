// our helpers
import { makeTypedFactory } from '../helpers/helper';

// our interfaces
import { IMarker, INavigationRecord } from '../interfaces/navigation.interface';

// export function navigationFactory(): IMarker {
//   return {
//     id: null,
//     label: null,
//     coordinates: {
//       lat: null,
//       lng: null
//     },
//     // duration: null,
//     // commentary: 'hey',
//     draggable: false,
//     typeMarker: {
//       Police: null,
//       Accident: null,
//       TrafficJam: null,
//       Warning: null,
//       GasStation: null,
//       User: null
//     },
//     controlPolice: {
//       Visible: null,
//       Hide: null,
//       Opposite: null
//     },
//     controlAccidents: {
//       Light: null,
//       Serious: null,
//       Opposite: null
//     },
//     controlTrafficJams: {
//       Light: null,
//       Medium: null,
//       Huge: null
//     },
//     controlWarnings: {
//       OnTheRoad: null,
//       SideRoad: null,
//       Weather: null
//     },
//     controlFavorites: {
//       Home: null,
//       Workplace: null,
//       Others: null
//     },
//     onTheRoadCauses: {
//       ObjectOnTheRoad: null,
//       RoadWorks: null,
//       Pothole: null,
//       CarStopped: null,
//       DeadAnimals: null
//     },
//     sideRoadCauses: {
//       CarStopped: null,
//       Animals: null,
//       MissingSignaling: null
//     },
//     weatherCauses: {
//       Fog: null,
//       Hail: null,
//       Flood: null,
//       Ice: null
//     }
//   };
// }

// export const navigationRecordFactory = makeTypedFactory<IMarker, INavigationRecord>(navigationFactory());
