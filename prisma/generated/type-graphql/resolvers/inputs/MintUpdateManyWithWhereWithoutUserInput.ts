import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MintScalarWhereInput } from "../inputs/MintScalarWhereInput";
import { MintUpdateManyMutationInput } from "../inputs/MintUpdateManyMutationInput";

@TypeGraphQL.InputType("MintUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class MintUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => MintScalarWhereInput, {
    nullable: false
  })
  where!: MintScalarWhereInput;

  @TypeGraphQL.Field(_type => MintUpdateManyMutationInput, {
    nullable: false
  })
  data!: MintUpdateManyMutationInput;
}
