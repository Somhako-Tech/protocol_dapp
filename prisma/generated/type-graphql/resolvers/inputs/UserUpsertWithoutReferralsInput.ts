import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutReferralsInput } from "../inputs/UserCreateWithoutReferralsInput";
import { UserUpdateWithoutReferralsInput } from "../inputs/UserUpdateWithoutReferralsInput";

@TypeGraphQL.InputType("UserUpsertWithoutReferralsInput", {
  isAbstract: true
})
export class UserUpsertWithoutReferralsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutReferralsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutReferralsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutReferralsInput, {
    nullable: false
  })
  create!: UserCreateWithoutReferralsInput;
}
