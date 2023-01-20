import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MintCreateWithoutUserInput } from "../inputs/MintCreateWithoutUserInput";
import { MintUpdateWithoutUserInput } from "../inputs/MintUpdateWithoutUserInput";
import { MintWhereUniqueInput } from "../inputs/MintWhereUniqueInput";

@TypeGraphQL.InputType("MintUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class MintUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => MintWhereUniqueInput, {
    nullable: false
  })
  where!: MintWhereUniqueInput;

  @TypeGraphQL.Field(_type => MintUpdateWithoutUserInput, {
    nullable: false
  })
  update!: MintUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => MintCreateWithoutUserInput, {
    nullable: false
  })
  create!: MintCreateWithoutUserInput;
}
