import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { ProfileUpdateeducationInput } from "../inputs/ProfileUpdateeducationInput";
import { ProfileUpdateexperienceInput } from "../inputs/ProfileUpdateexperienceInput";
import { ProfileUpdateskillsInput } from "../inputs/ProfileUpdateskillsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutProfileNestedInput } from "../inputs/UserUpdateOneRequiredWithoutProfileNestedInput";

@TypeGraphQL.InputType("ProfileUpdateWithoutMintInput", {
  isAbstract: true
})
export class ProfileUpdateWithoutMintInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  handle?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  summary?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  job_type?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  pref_location?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  salary?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  years_of_exp?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  link?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  address?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ProfileUpdateskillsInput, {
    nullable: true
  })
  skills?: ProfileUpdateskillsInput | undefined;

  @TypeGraphQL.Field(_type => ProfileUpdateeducationInput, {
    nullable: true
  })
  education?: ProfileUpdateeducationInput | undefined;

  @TypeGraphQL.Field(_type => ProfileUpdateexperienceInput, {
    nullable: true
  })
  experience?: ProfileUpdateexperienceInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  minted?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutProfileNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutProfileNestedInput | undefined;
}
