import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfileCreateNestedOneWithoutMintInput } from "../inputs/ProfileCreateNestedOneWithoutMintInput";

@TypeGraphQL.InputType("MintCreateWithoutUserInput", {
  isAbstract: true
})
export class MintCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  approved!: boolean;

  @TypeGraphQL.Field(_type => ProfileCreateNestedOneWithoutMintInput, {
    nullable: false
  })
  profile!: ProfileCreateNestedOneWithoutMintInput;
}
