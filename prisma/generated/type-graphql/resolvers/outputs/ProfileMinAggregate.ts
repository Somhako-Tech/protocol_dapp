import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("ProfileMinAggregate", {
  isAbstract: true
})
export class ProfileMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  handle!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  summary!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  job_type!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  pref_location!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  salary!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  years_of_exp!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  link!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  minted!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  user_id!: string | null;
}
