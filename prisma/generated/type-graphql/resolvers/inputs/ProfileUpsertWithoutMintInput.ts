import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfileCreateWithoutMintInput } from "../inputs/ProfileCreateWithoutMintInput";
import { ProfileUpdateWithoutMintInput } from "../inputs/ProfileUpdateWithoutMintInput";

@TypeGraphQL.InputType("ProfileUpsertWithoutMintInput", {
  isAbstract: true
})
export class ProfileUpsertWithoutMintInput {
  @TypeGraphQL.Field(_type => ProfileUpdateWithoutMintInput, {
    nullable: false
  })
  update!: ProfileUpdateWithoutMintInput;

  @TypeGraphQL.Field(_type => ProfileCreateWithoutMintInput, {
    nullable: false
  })
  create!: ProfileCreateWithoutMintInput;
}
