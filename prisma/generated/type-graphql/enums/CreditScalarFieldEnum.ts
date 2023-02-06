import * as TypeGraphQL from "type-graphql";

export enum CreditScalarFieldEnum {
  id = "id",
  orefid = "orefid",
  profile_id = "profile_id"
}
TypeGraphQL.registerEnumType(CreditScalarFieldEnum, {
  name: "CreditScalarFieldEnum",
  description: undefined,
});
