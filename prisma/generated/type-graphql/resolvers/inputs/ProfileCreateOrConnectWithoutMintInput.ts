import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfileCreateWithoutMintInput } from "../inputs/ProfileCreateWithoutMintInput";
import { ProfileWhereUniqueInput } from "../inputs/ProfileWhereUniqueInput";

@TypeGraphQL.InputType("ProfileCreateOrConnectWithoutMintInput", {
  isAbstract: true
})
export class ProfileCreateOrConnectWithoutMintInput {
  @TypeGraphQL.Field(_type => ProfileWhereUniqueInput, {
    nullable: false
  })
  where!: ProfileWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProfileCreateWithoutMintInput, {
    nullable: false
  })
  create!: ProfileCreateWithoutMintInput;
}
