import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MintCreateManyUserInputEnvelope } from "../inputs/MintCreateManyUserInputEnvelope";
import { MintCreateOrConnectWithoutUserInput } from "../inputs/MintCreateOrConnectWithoutUserInput";
import { MintCreateWithoutUserInput } from "../inputs/MintCreateWithoutUserInput";
import { MintScalarWhereInput } from "../inputs/MintScalarWhereInput";
import { MintUpdateManyWithWhereWithoutUserInput } from "../inputs/MintUpdateManyWithWhereWithoutUserInput";
import { MintUpdateWithWhereUniqueWithoutUserInput } from "../inputs/MintUpdateWithWhereUniqueWithoutUserInput";
import { MintUpsertWithWhereUniqueWithoutUserInput } from "../inputs/MintUpsertWithWhereUniqueWithoutUserInput";
import { MintWhereUniqueInput } from "../inputs/MintWhereUniqueInput";

@TypeGraphQL.InputType("MintUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class MintUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [MintCreateWithoutUserInput], {
    nullable: true
  })
  create?: MintCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MintCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: MintCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MintUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: MintUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => MintCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: MintCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MintWhereUniqueInput], {
    nullable: true
  })
  set?: MintWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MintWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MintWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MintWhereUniqueInput], {
    nullable: true
  })
  delete?: MintWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MintWhereUniqueInput], {
    nullable: true
  })
  connect?: MintWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MintUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: MintUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MintUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: MintUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MintScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MintScalarWhereInput[] | undefined;
}
