import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MintCreateWithoutUserInput } from "../inputs/MintCreateWithoutUserInput";
import { MintWhereUniqueInput } from "../inputs/MintWhereUniqueInput";

@TypeGraphQL.InputType("MintCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class MintCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => MintWhereUniqueInput, {
    nullable: false
  })
  where!: MintWhereUniqueInput;

  @TypeGraphQL.Field(_type => MintCreateWithoutUserInput, {
    nullable: false
  })
  create!: MintCreateWithoutUserInput;
}
