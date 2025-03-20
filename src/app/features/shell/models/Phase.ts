import { IPhaseEvent } from './PhaseEvent';

export interface IPhase {
    name: string;
    description: string;
    order: number;
    events: IPhaseEvent[];
}
