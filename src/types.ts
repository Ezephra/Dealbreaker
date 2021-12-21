export interface Deal {
    internalName:       string;
    title:              string;
    metacriticLink:     string;
    dealID:             string;
    storeID:            string;
    gameID:             string;
    salePrice:          string;
    normalPrice:        string;
    isOnSale:           string;
    savings:            string;
    metacriticScore:    string;
    steamRatingText:    SteamRatingText | null;
    steamRatingPercent: string;
    steamRatingCount:   string;
    steamAppID:         string;
    releaseDate:        number;
    lastChange:         number;
    dealRating:         string;
    thumb:              string;
}

export interface Deals {
    deals: Deal[];
}

export enum SteamRatingText {
    Mixed = "Mixed",
    MostlyPositive = "Mostly Positive",
    OverwhelminglyPositive = "Overwhelmingly Positive",
    VeryPositive = "Very Positive",
}
export interface Games {
    games: Game[];
}
export interface Game {
    gameID:         string;
    steamAppID:     string;
    cheapest:       string;
    cheapestDealID: string;
    external:       string;
    thumb:          string;
}

export interface Store {
    storeID:   string;
    storeName: string;
    isActive:  number;
    images:    Images;
}

export interface Images {
    banner: string;
    logo:   string;
    icon:   string;
}
