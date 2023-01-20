import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReferralWhereInput } from "../inputs/ReferralWhereInput";

@TypeGraphQL.InputType("ReferralListRelationFilter", {
  isAbstract: true
})
export class ReferralListRelationFilter {
  @TypeGraphQL.Field(_type => ReferralWhereInput, {
    nullable: true
  })
  every?: ReferralWhereInput | undefined;

  @TypeGraphQL.Field(_type => ReferralWhereInput, {
    nullable: true
  })
  some?: ReferralWhereInput | undefined;

  @TypeGraphQL.Field(_type => ReferralWhereInput, {
    nullable: true
  })
  none?: ReferralWhereInput | undefined;
}
