import { TimingPoint } from './timingpoint';

export class Athlete {
  id: number;
  starting_number: number;
  name: string;
  timing_points: TimingPoint[];
}