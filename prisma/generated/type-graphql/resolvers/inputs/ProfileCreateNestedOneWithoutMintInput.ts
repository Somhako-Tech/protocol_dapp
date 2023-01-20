import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfileCreateOrConnectWithoutMintInput } from "../inputs/ProfileCreateOrConnectWithoutMintInput";
import { ProfileCreateWithoutMintInput } from "../inputs/ProfileCreateWithoutMintInput";
import { ProfileWhereUniqueInput } from "../inputs/ProfileWhereUniqueInput";

@TypeGraphQL.InputType("ProfileCreateNestedOneWithoutMintInput", {
  isAbstract: true
})
export class ProfileCreateNestedOneWithoutMintInput {
  @TypeGraphQL.Field(_type => ProfileCreateWithoutMintInput, {
    nullable: true
  })
  create?: ProfileCreateWithoutMintInput | undefined;

  @TypeGraphQL.Field(_type => ProfileCreateOrConnectWithoutMintInput, {
    nullable: true
  })
  connectOrCreate?: ProfileCreateOrConnectWithoutMintInput | undefined;

  @TypeGraphQL.Field(_type => ProfileWhereUniqueInput, {
    nullable: true
  })
  connect?: ProfileWhereUniqueInput | undefined;
}
