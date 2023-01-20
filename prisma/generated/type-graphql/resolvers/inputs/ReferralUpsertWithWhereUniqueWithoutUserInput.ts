import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReferralCreateWithoutUserInput } from "../inputs/ReferralCreateWithoutUserInput";
import { ReferralUpdateWithoutUserInput } from "../inputs/ReferralUpdateWithoutUserInput";
import { ReferralWhereUniqueInput } from "../inputs/ReferralWhereUniqueInput";

@TypeGraphQL.InputType("ReferralUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class ReferralUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ReferralWhereUniqueInput, {
    nullable: false
  })
  where!: ReferralWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReferralUpdateWithoutUserInput, {
    nullable: false
  })
  update!: ReferralUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => ReferralCreateWithoutUserInput, {
    nullable: false
  })
  create!: ReferralCreateWithoutUserInput;
}
