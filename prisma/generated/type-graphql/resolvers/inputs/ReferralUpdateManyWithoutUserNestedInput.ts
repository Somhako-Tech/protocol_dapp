import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReferralCreateManyUserInputEnvelope } from "../inputs/ReferralCreateManyUserInputEnvelope";
import { ReferralCreateOrConnectWithoutUserInput } from "../inputs/ReferralCreateOrConnectWithoutUserInput";
import { ReferralCreateWithoutUserInput } from "../inputs/ReferralCreateWithoutUserInput";
import { ReferralScalarWhereInput } from "../inputs/ReferralScalarWhereInput";
import { ReferralUpdateManyWithWhereWithoutUserInput } from "../inputs/ReferralUpdateManyWithWhereWithoutUserInput";
import { ReferralUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ReferralUpdateWithWhereUniqueWithoutUserInput";
import { ReferralUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ReferralUpsertWithWhereUniqueWithoutUserInput";
import { ReferralWhereUniqueInput } from "../inputs/ReferralWhereUniqueInput";

@TypeGraphQL.InputType("ReferralUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class ReferralUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [ReferralCreateWithoutUserInput], {
    nullable: true
  })
  create?: ReferralCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReferralCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ReferralCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReferralUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: ReferralUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ReferralCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ReferralCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReferralWhereUniqueInput], {
    nullable: true
  })
  set?: ReferralWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReferralWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ReferralWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReferralWhereUniqueInput], {
    nullable: true
  })
  delete?: ReferralWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReferralWhereUniqueInput], {
    nullable: true
  })
  connect?: ReferralWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReferralUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: ReferralUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReferralUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: ReferralUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReferralScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ReferralScalarWhereInput[] | undefined;
}
