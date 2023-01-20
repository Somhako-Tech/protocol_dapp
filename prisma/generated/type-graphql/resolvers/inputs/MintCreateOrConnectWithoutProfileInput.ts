import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MintCreateWithoutProfileInput } from "../inputs/MintCreateWithoutProfileInput";
import { MintWhereUniqueInput } from "../inputs/MintWhereUniqueInput";

@TypeGraphQL.InputType("MintCreateOrConnectWithoutProfileInput", {
  isAbstract: true
})
export class MintCreateOrConnectWithoutProfileInput {
  @TypeGraphQL.Field(_type => MintWhereUniqueInput, {
    nullable: false
  })
  where!: MintWhereUniqueInput;

  @TypeGraphQL.Field(_type => MintCreateWithoutProfileInput, {
    nullable: false
  })
  create!: MintCreateWithoutProfileInput;
}
