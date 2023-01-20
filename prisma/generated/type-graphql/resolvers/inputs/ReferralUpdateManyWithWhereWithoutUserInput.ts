import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReferralScalarWhereInput } from "../inputs/ReferralScalarWhereInput";
import { ReferralUpdateManyMutationInput } from "../inputs/ReferralUpdateManyMutationInput";

@TypeGraphQL.InputType("ReferralUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class ReferralUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => ReferralScalarWhereInput, {
    nullable: false
  })
  where!: ReferralScalarWhereInput;

  @TypeGraphQL.Field(_type => ReferralUpdateManyMutationInput, {
    nullable: false
  })
  data!: ReferralUpdateManyMutationInput;
}
