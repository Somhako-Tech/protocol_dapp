import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Mint } from "../models/Mint";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("Profile", {
  isAbstract: true
})
export class Profile {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  handle!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  summary!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  job_type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  pref_location!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  salary!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  years_of_exp!: string;

  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  link!: string[];

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  address!: string;

  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  skills!: string[];

  @TypeGraphQL.Field(_type => [GraphQLScalars.JSONResolver], {
    nullable: false
  })
  education!: Prisma.JsonValue[];

  @TypeGraphQL.Field(_type => [GraphQLScalars.JSONResolver], {
    nullable: false
  })
  experience!: Prisma.JsonValue[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  minted!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  user_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ipfs_hash!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  resume!: string;

  mint?: Mint | null;

  user?: User;
}
