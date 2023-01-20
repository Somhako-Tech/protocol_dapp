import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutReferralsInput } from "../inputs/UserCreateOrConnectWithoutReferralsInput";
import { UserCreateWithoutReferralsInput } from "../inputs/UserCreateWithoutReferralsInput";
import { UserUpdateWithoutReferralsInput } from "../inputs/UserUpdateWithoutReferralsInput";
import { UserUpsertWithoutReferralsInput } from "../inputs/UserUpsertWithoutReferralsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutReferralsNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutReferralsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutReferralsInput, {
    nullable: true
  })
  create?: UserCreateWithoutReferralsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutReferralsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutReferralsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutReferralsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutReferralsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutReferralsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutReferralsInput | undefined;
}
