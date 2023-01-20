import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutMintsInput } from "../inputs/UserCreateOrConnectWithoutMintsInput";
import { UserCreateWithoutMintsInput } from "../inputs/UserCreateWithoutMintsInput";
import { UserUpdateWithoutMintsInput } from "../inputs/UserUpdateWithoutMintsInput";
import { UserUpsertWithoutMintsInput } from "../inputs/UserUpsertWithoutMintsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutMintsNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutMintsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutMintsInput, {
    nullable: true
  })
  create?: UserCreateWithoutMintsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutMintsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutMintsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutMintsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutMintsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutMintsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutMintsInput | undefined;
}
