import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MintWhereInput } from "../inputs/MintWhereInput";

@TypeGraphQL.InputType("MintListRelationFilter", {
  isAbstract: true
})
export class MintListRelationFilter {
  @TypeGraphQL.Field(_type => MintWhereInput, {
    nullable: true
  })
  every?: MintWhereInput | undefined;

  @TypeGraphQL.Field(_type => MintWhereInput, {
    nullable: true
  })
  some?: MintWhereInput | undefined;

  @TypeGraphQL.Field(_type => MintWhereInput, {
    nullable: true
  })
  none?: MintWhereInput | undefined;
}
