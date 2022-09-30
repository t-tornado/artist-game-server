import { QueryParameterValidater } from "../core/query-params-validator-middleware-factory";

export const ArtistNameValidatorMiddleware = QueryParameterValidater("name");
