import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MintUpdateWithoutUserInput } from "../inputs/MintUpdateWithoutUserInput";
import { MintWhereUniqueInput } from "../inputs/MintWhereUniqueInput";

@TypeGraphQL.InputType("MintUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class MintUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => MintWhereUniqueInput, {
    nullable: false
  })
  where!: MintWhereUniqueInput;

  @TypeGraphQL.Field(_type => MintUpdateWithoutUserInput, {
    nullable: false
  })
  data!: MintUpdateWithoutUserInput;
}
