import * as TypeGraphQL from "type-graphql";

export enum ReferralScalarFieldEnum {
  id = "id",
  email = "email",
  user_id = "user_id"
}
TypeGraphQL.registerEnumType(ReferralScalarFieldEnum, {
  name: "ReferralScalarFieldEnum",
  description: undefined,
});
