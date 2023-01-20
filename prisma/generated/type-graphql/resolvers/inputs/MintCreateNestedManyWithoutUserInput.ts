import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MintCreateManyUserInputEnvelope } from "../inputs/MintCreateManyUserInputEnvelope";
import { MintCreateOrConnectWithoutUserInput } from "../inputs/MintCreateOrConnectWithoutUserInput";
import { MintCreateWithoutUserInput } from "../inputs/MintCreateWithoutUserInput";
import { MintWhereUniqueInput } from "../inputs/MintWhereUniqueInput";

@TypeGraphQL.InputType("MintCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class MintCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [MintCreateWithoutUserInput], {
    nullable: true
  })
  create?: MintCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MintCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: MintCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => MintCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: MintCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MintWhereUniqueInput], {
    nullable: true
  })
  connect?: MintWhereUniqueInput[] | undefined;
}
