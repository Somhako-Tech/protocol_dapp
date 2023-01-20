import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutReferralsInput } from "../inputs/UserCreateNestedOneWithoutReferralsInput";

@TypeGraphQL.InputType("ReferralCreateInput", {
  isAbstract: true
})
export class ReferralCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutReferralsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutReferralsInput;
}
