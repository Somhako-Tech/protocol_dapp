import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MintCreateWithoutProfileInput } from "../inputs/MintCreateWithoutProfileInput";
import { MintUpdateWithoutProfileInput } from "../inputs/MintUpdateWithoutProfileInput";

@TypeGraphQL.InputType("MintUpsertWithoutProfileInput", {
  isAbstract: true
})
export class MintUpsertWithoutProfileInput {
  @TypeGraphQL.Field(_type => MintUpdateWithoutProfileInput, {
    nullable: false
  })
  update!: MintUpdateWithoutProfileInput;

  @TypeGraphQL.Field(_type => MintCreateWithoutProfileInput, {
    nullable: false
  })
  create!: MintCreateWithoutProfileInput;
}
