import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReferralCreateWithoutUserInput } from "../inputs/ReferralCreateWithoutUserInput";
import { ReferralWhereUniqueInput } from "../inputs/ReferralWhereUniqueInput";

@TypeGraphQL.InputType("ReferralCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class ReferralCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => ReferralWhereUniqueInput, {
    nullable: false
  })
  where!: ReferralWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReferralCreateWithoutUserInput, {
    nullable: false
  })
  create!: ReferralCreateWithoutUserInput;
}
