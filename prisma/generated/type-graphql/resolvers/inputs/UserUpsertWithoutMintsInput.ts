import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutMintsInput } from "../inputs/UserCreateWithoutMintsInput";
import { UserUpdateWithoutMintsInput } from "../inputs/UserUpdateWithoutMintsInput";

@TypeGraphQL.InputType("UserUpsertWithoutMintsInput", {
  isAbstract: true
})
export class UserUpsertWithoutMintsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutMintsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutMintsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutMintsInput, {
    nullable: false
  })
  create!: UserCreateWithoutMintsInput;
}
