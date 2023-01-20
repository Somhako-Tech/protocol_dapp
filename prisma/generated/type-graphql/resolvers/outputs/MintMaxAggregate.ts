import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("MintMaxAggregate", {
  isAbstract: true
})
export class MintMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  profile_id!: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  approved!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reviewed_by!: string | null;
}
