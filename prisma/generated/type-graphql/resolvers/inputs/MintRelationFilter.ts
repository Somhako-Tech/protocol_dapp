import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MintWhereInput } from "../inputs/MintWhereInput";

@TypeGraphQL.InputType("MintRelationFilter", {
  isAbstract: true
})
export class MintRelationFilter {
  @TypeGraphQL.Field(_type => MintWhereInput, {
    nullable: true
  })
  is?: MintWhereInput | undefined;

  @TypeGraphQL.Field(_type => MintWhereInput, {
    nullable: true
  })
  isNot?: MintWhereInput | undefined;
}
