import * as TypeGraphQL from "type-graphql";

export enum MintScalarFieldEnum {
  id = "id",
  profile_id = "profile_id",
  approved = "approved",
  reviewed_by = "reviewed_by"
}
TypeGraphQL.registerEnumType(MintScalarFieldEnum, {
  name: "MintScalarFieldEnum",
  description: undefined,
});
