import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("CreditCreateInput", {
  isAbstract: true
})
export class CreditCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  orefid!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  profile_id!: string;
}
