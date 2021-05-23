export interface IFirstStepInput {
    projectArea?: string;
    location?: string;
}

export interface ISecondStepInput {
    shortDescription?: string;
    name?: string;
}

export interface IThirdStepInput {
    description?: string;
    // IMAGE
}

export interface IFourthStepInput {
    positions?: string[];
}

export interface IFifthStepInput {
    budgetGoal?: number;
}

export interface IInputData extends IFirstStepInput, ISecondStepInput, IThirdStepInput, IFourthStepInput, IFifthStepInput {}