/**
 * Trivia Specific Part
 */
 export enum GameProperty {
    Name = "",
    CompletedLevel= "0",
    TimeAlive= "0",
  } 

/**
 * General Part
 */

export interface FrameData {
    activityForm: ActivityForm;
    gameData: PropertyInstance[];
    scheme: ChallengeRuleScheme;
    lastActivity: GameSession;
    negativePointsCheck: NegativePointsCheck;

}

export interface NegativePointsCheck {
    items: RuleCheck[];

    /**
     * convenience value for items.forAll(canFire)
     */ 
    canFireAll: boolean; 
}

export interface RuleCheck {
    /**
     * for convenience to developers who don't want to compare negativePoints against hintData.pointsNeeded
     */
    canFire: boolean; 
    /**
     * not including ChallengeRule here, since it would be overly complicated, since irrelevant PointMappings would also be included
     */
    conditions: Condition[];  
    /**
     * while I would discourage reasoning about these points in the miniGame, you can at least prompt the user with the instruction to go get X points since Y are needed
     */
    pointsNeeded: number; // note that we are not putting this on HintData, since different hints can relate to different challenges, with their own score per participation
    /**
     * see note on pointsNeeded
     */
    negativePoints: number; 
}
//Hardcode ActivityFormm
export interface ActivityForm {
    gameDescriptor: number; //1074 
    dataProvider: number; //1
    miniGameUse: number;
    date: number;
    propertyInstances: PropertyInstance[];
    players: number[];
}

export interface GameSession {
    id: number;
    date: number;
    isManual: boolean;
    group?: any;
    image?: any;
    propertyInstances: PropertyInstance[];
    personalPoints: PersonalPoint[]; // warning: suggesting not to use this, could be too tightly coupled => only for power-devs
    supports: any[];
    chats: any[];
}

export interface PersonalPoint {
    id: number;
    value: number;
    // note: intentionally omitting participations and rules for now, as it could be too tempting to make minigames too tightly coupled, and doing things that we better do in GB Base popups/sidebars
}

export interface PropertyInstance {
    //property: number; //112 GameDump
    value: string; //JSON DUMP
    propertyTK: string; // MINIGAME_DATA
}

export interface Operator {
    id: number;
    operator: string;
}

export interface PropertyType {
    id: number;
    type: string;
    operators: Operator[];
}

export interface Property {
    id: number;
    translationKey: string;
    baseUnit: string;
    inputType: string;
    aggregationStrategy: string;
    propertyType: PropertyType;
}

export interface DataProvider {
    id: number;
    name: string;
    image: string;
    isConnected: boolean;
}

export interface AllowedValue {
    index: number;
    translationKey: string;
    enumValue: string;
}

export interface PropertyPermission {
    id: number;
    index: number;
    lastUpdate?: any;
    decisionNote?: any;
    state: string;
    property: Property;
    dataProvider: DataProvider;
    allowedValues: AllowedValue[];
}

export interface MiniGame {
    id: number;
    translationKey: string;
    miniGameUrl: string;
}

export interface ChallengeRuleScheme {
    id: number;
    translationKey: string;
    image: string;
    type: string;
    propertyPermissions: PropertyPermission[];
    miniGames: MiniGame[];
    isAggregate: boolean;
}

export interface Scheme {
    default: ChallengeRuleScheme;
    allowed: ChallengeRuleScheme[];
}

export interface Rule {
    name: string;
    image?: any;
}

export interface Condition {
    property: Property;
    value: string;
}

export interface Property {
    id: number;
    translationKey: string;
    baseUnit: string;
    inputType: string;
    aggregationStrategy: string;
    propertyPermissions: PropertyPermission[];
    propertyType: PropertyType;
}

export interface PropertyType {
    id: number;
    type: string;
    operators: Operator[];
}

export interface Challenge {
    id: number;
}

export interface Point {
    point: number;
    value: number;
}

export interface Summary {
    scheme: Scheme;
    rule: Rule;
    conditions: Condition[];
    challenge: Challenge;
    points: Point[];
}

export interface GameDump {
}

