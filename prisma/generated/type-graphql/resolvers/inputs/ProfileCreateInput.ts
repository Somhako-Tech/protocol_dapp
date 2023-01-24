import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MintCreateNestedOneWithoutProfileInput } from "../inputs/MintCreateNestedOneWithoutProfileInput";
import { ProfileCreateeducationInput } from "../inputs/ProfileCreateeducationInput";
import { ProfileCreateexperienceInput } from "../inputs/ProfileCreateexperienceInput";
import { ProfileCreateskillsInput } from "../inputs/ProfileCreateskillsInput";
import { UserCreateNestedOneWithoutProfileInput } from "../inputs/UserCreateNestedOneWithoutProfileInput";

@TypeGraphQL.InputType("ProfileCreateInput", {
  isAbstract: true
})
export class ProfileCreateInput {
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

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  link!: Prisma.InputJsonValue;

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

  @TypeGraphQL.Field(_type => MintCreateNestedOneWithoutProfileInput, {
    nullable: true
  })
  mint?: MintCreateNestedOneWithoutProfileInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutProfileInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutProfileInput;
}
