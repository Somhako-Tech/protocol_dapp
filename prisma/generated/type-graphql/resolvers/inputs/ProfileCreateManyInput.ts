import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfileCreateeducationInput } from "../inputs/ProfileCreateeducationInput";
import { ProfileCreateexperienceInput } from "../inputs/ProfileCreateexperienceInput";
import { ProfileCreatelinkInput } from "../inputs/ProfileCreatelinkInput";
import { ProfileCreateskillsInput } from "../inputs/ProfileCreateskillsInput";

@TypeGraphQL.InputType("ProfileCreateManyInput", {
  isAbstract: true
})
export class ProfileCreateManyInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

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

  @TypeGraphQL.Field(_type => ProfileCreatelinkInput, {
    nullable: true
  })
  link?: ProfileCreatelinkInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  address!: string;

  @TypeGraphQL.Field(_type => ProfileCreateskillsInput, {
    nullable: true
  })
  skills?: ProfileCreateskillsInput | undefined;

  @TypeGraphQL.Field(_type => ProfileCreateeducationInput, {
    nullable: true
  })
  education?: ProfileCreateeducationInput | undefined;

  @TypeGraphQL.Field(_type => ProfileCreateexperienceInput, {
    nullable: true
  })
  experience?: ProfileCreateexperienceInput | undefined;

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
    nullable: true
  })
  resume?: string | undefined;
}
