import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReferralUpdateWithoutUserInput } from "../inputs/ReferralUpdateWithoutUserInput";
import { ReferralWhereUniqueInput } from "../inputs/ReferralWhereUniqueInput";

@TypeGraphQL.InputType("ReferralUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class ReferralUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ReferralWhereUniqueInput, {
    nullable: false
  })
  where!: ReferralWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReferralUpdateWithoutUserInput, {
    nullable: false
  })
  data!: ReferralUpdateWithoutUserInput;
}
