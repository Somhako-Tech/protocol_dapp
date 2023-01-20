import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MintCreateManyUserInput } from "../inputs/MintCreateManyUserInput";

@TypeGraphQL.InputType("MintCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class MintCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [MintCreateManyUserInput], {
    nullable: false
  })
  data!: MintCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
