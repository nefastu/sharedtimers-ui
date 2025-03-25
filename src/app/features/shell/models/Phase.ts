import { IPhaseEvent } from './PhaseEvent';

export interface IPhase {
    name: string;
    description: string;
    order: number;
    phaseId: number; // for hotkey association
    events: IPhaseEvent[];
}
