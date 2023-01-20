import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutMintsInput } from "../inputs/UserCreateNestedOneWithoutMintsInput";

@TypeGraphQL.InputType("MintCreateWithoutProfileInput", {
  isAbstract: true
})
export class MintCreateWithoutProfileInput {
  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  approved!: boolean;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutMintsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutMintsInput;
}
