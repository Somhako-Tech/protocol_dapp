import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReferralCreateManyUserInputEnvelope } from "../inputs/ReferralCreateManyUserInputEnvelope";
import { ReferralCreateOrConnectWithoutUserInput } from "../inputs/ReferralCreateOrConnectWithoutUserInput";
import { ReferralCreateWithoutUserInput } from "../inputs/ReferralCreateWithoutUserInput";
import { ReferralWhereUniqueInput } from "../inputs/ReferralWhereUniqueInput";

@TypeGraphQL.InputType("ReferralCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class ReferralCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ReferralCreateWithoutUserInput], {
    nullable: true
  })
  create?: ReferralCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReferralCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ReferralCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ReferralCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ReferralCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReferralWhereUniqueInput], {
    nullable: true
  })
  connect?: ReferralWhereUniqueInput[] | undefined;
}
