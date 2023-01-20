import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutReferralsInput } from "../inputs/UserCreateOrConnectWithoutReferralsInput";
import { UserCreateWithoutReferralsInput } from "../inputs/UserCreateWithoutReferralsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutReferralsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutReferralsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutReferralsInput, {
    nullable: true
  })
  create?: UserCreateWithoutReferralsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutReferralsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutReferralsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
