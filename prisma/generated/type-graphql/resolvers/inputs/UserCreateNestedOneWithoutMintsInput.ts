import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutMintsInput } from "../inputs/UserCreateOrConnectWithoutMintsInput";
import { UserCreateWithoutMintsInput } from "../inputs/UserCreateWithoutMintsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutMintsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutMintsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutMintsInput, {
    nullable: true
  })
  create?: UserCreateWithoutMintsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutMintsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutMintsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
