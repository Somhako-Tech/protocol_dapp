import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("CreditMaxAggregate", {
  isAbstract: true
})
export class CreditMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  orefid!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  profile_id!: string | null;
}
