import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfileCreateNestedOneWithoutMintInput } from "../inputs/ProfileCreateNestedOneWithoutMintInput";
import { UserCreateNestedOneWithoutMintsInput } from "../inputs/UserCreateNestedOneWithoutMintsInput";

@TypeGraphQL.InputType("MintCreateInput", {
  isAbstract: true
})
export class MintCreateInput {
  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  approved!: boolean;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutMintsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutMintsInput;

  @TypeGraphQL.Field(_type => ProfileCreateNestedOneWithoutMintInput, {
    nullable: false
  })
  profile!: ProfileCreateNestedOneWithoutMintInput;
}
